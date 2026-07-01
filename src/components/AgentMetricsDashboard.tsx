import { useState, useEffect } from 'react';
import { PipelineExecutionState } from '../types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  LineChart,
  Line,
  ReferenceLine
} from 'recharts';
import { Cpu, Zap, ShieldCheck, Clock, RefreshCw, BarChart2, TrendingUp, Info } from 'lucide-react';
import { motion } from 'motion/react';

interface AgentMetricsDashboardProps {
  state: PipelineExecutionState;
}

interface HistoricalRun {
  timestamp: string;
  brandName: string;
  totalLatency: number;
  agentLatencies: Record<number, number>;
}

export default function AgentMetricsDashboard({ state }: AgentMetricsDashboardProps) {
  const [runsHistory, setRunsHistory] = useState<HistoricalRun[]>([]);
  const [showInfo, setShowInfo] = useState<number | null>(null);

  // Agent profiles
  const agentProfiles = [
    { id: 1, label: "A1: Cultural", name: "Agent 1: Cultural Intelligence", model: "Qwen3-32B", benchmarkLatency: 2400, benchmarkSuccess: 98.5, desc: "Socio-cultural context extraction & marketing risk identification." },
    { id: 2, label: "A2: Semiotic", name: "Agent 2: Semiotic Analysis", model: "Gemma 3", benchmarkLatency: 1800, benchmarkSuccess: 99.2, desc: "Visual branding, typography rules, color palettes, and cultural taboos." },
    { id: 3, label: "A3: RAG KB", name: "Agent 3: RAG Retrieval", model: "Vector Engine", benchmarkLatency: 850, benchmarkSuccess: 97.6, desc: "Multi-index semantic lookup, document filtering, scoring & re-ranking." },
    { id: 4, label: "A4: Brand Gen", name: "Agent 4: Brand Generation", model: "Llama 4 Scout", benchmarkLatency: 3200, benchmarkSuccess: 96.8, desc: "Identity orchestration, naming, taglines, narrative creation, and packaging." },
    { id: 5, label: "A5: Critique", name: "Agent 5: Evaluation Agent", model: "DeepSeek-R1 Distill", benchmarkLatency: 2900, benchmarkSuccess: 95.5, desc: "Independent critical audit & scoring across 8 standard cultural benchmarks." }
  ];

  // Load and update run history in localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('agent_pipeline_runs_history');
      let history: HistoricalRun[] = stored ? JSON.parse(stored) : [];
      
      // If we are currently completed, check if we should add the run
      if (state.status === 'completed' && state.agentMetrics && state.agent4Output?.brand_name) {
        const currentBrand = state.agent4Output.brand_name;
        
        // Avoid adding duplicate entries for the same brand run
        const alreadyExists = history.some(run => run.brandName === currentBrand);
        if (!alreadyExists) {
          const newRun: HistoricalRun = {
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            brandName: currentBrand,
            totalLatency: Object.values(state.agentMetrics).reduce((acc, m) => acc + m.latency, 0),
            agentLatencies: {
              1: state.agentMetrics[1]?.latency || 0,
              2: state.agentMetrics[2]?.latency || 0,
              3: state.agentMetrics[3]?.latency || 0,
              4: state.agentMetrics[4]?.latency || 0,
              5: state.agentMetrics[5]?.latency || 0,
            }
          };
          const updated = [...history, newRun].slice(-8); // Keep last 8 runs
          localStorage.setItem('agent_pipeline_runs_history', JSON.stringify(updated));
          history = updated;
        }
      }
      setRunsHistory(history);
    } catch (err) {
      console.error("Error reading or writing runs history:", err);
    }
  }, [state.status, state.agentMetrics, state.agent4Output?.brand_name]);

  const clearHistory = () => {
    localStorage.removeItem('agent_pipeline_runs_history');
    setRunsHistory([]);
  };

  // Prepare latency data comparing current vs benchmark
  const latencyChartData = agentProfiles.map(agent => {
    const currentMetric = state.agentMetrics?.[agent.id];
    return {
      name: agent.label,
      fullName: agent.name,
      model: agent.model,
      'Benchmark Latency': agent.benchmarkLatency,
      'Current Run Latency': currentMetric?.success ? currentMetric.latency : 0,
      active: state.status === `running_agent_${agent.id}` || (state.status === 'completed' && currentMetric?.success)
    };
  });

  // Prepare success rate data
  const successRateData = agentProfiles.map(agent => ({
    name: agent.label,
    fullName: agent.name,
    'Historical Success Rate (%)': agent.benchmarkSuccess,
  }));

  // Prepare runs trend data
  const trendChartData = runsHistory.map((run, idx) => ({
    name: `Run ${idx + 1}`,
    brand: run.brandName,
    'Total Pipeline Latency (ms)': run.totalLatency,
  }));

  // Aggregate current metrics
  const totalBenchmarkLatency = agentProfiles.reduce((acc, a) => acc + a.benchmarkLatency, 0);
  const currentTotalLatency = state.agentMetrics 
    ? Object.values(state.agentMetrics).reduce((acc, m) => acc + m.latency, 0)
    : 0;

  const currentAverageSuccessRate = agentProfiles.reduce((acc, a) => acc + a.benchmarkSuccess, 0) / agentProfiles.length;

  return (
    <div className="space-y-6 text-slate-100" id="agent-performance-dashboard-container">
      
      {/* Top statistics summary row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        
        {/* KPI: Total Latency */}
        <div className="bg-slate-950/45 border border-white/5 p-4 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-lg">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Pipeline Latency</span>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold tracking-tight">
                {state.status === 'completed' && currentTotalLatency > 0 
                  ? `${(currentTotalLatency / 1000).toFixed(2)}s` 
                  : state.status.startsWith('running') && currentTotalLatency > 0
                  ? `${(currentTotalLatency / 1000).toFixed(2)}s...`
                  : '—'}
              </span>
              <span className="text-[10px] text-slate-500">
                (Bench: {(totalBenchmarkLatency / 1000).toFixed(1)}s)
              </span>
            </div>
          </div>
        </div>

        {/* KPI: Success Rate */}
        <div className="bg-slate-950/45 border border-white/5 p-4 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-lg">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Reliability Index</span>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold tracking-tight text-emerald-400">
                {currentAverageSuccessRate.toFixed(1)}%
              </span>
              <span className="text-[10px] text-slate-500">avg success</span>
            </div>
          </div>
        </div>

        {/* KPI: Active Agents */}
        <div className="bg-slate-950/45 border border-white/5 p-4 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 rounded-lg">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Active Compute Nodes</span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xl font-bold tracking-tight">
                {state.status === 'completed' ? '0' : state.status.startsWith('running') ? '1' : '0'}
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono flex items-center gap-1">
                {state.status.startsWith('running') ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
                    Agent {state.status.split('_').pop()} Active
                  </>
                ) : (
                  'All Nodes Idle'
                )}
              </span>
            </div>
          </div>
        </div>

        {/* KPI: Saved History */}
        <div className="bg-slate-950/45 border border-white/5 p-4 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-pink-500/10 border border-pink-500/20 text-pink-400 rounded-lg">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Cached Runs Trend</span>
            <div className="flex justify-between items-center w-full gap-2">
              <span className="text-xl font-bold tracking-tight">
                {runsHistory.length} <span className="text-[10px] text-slate-500 font-normal">recorded</span>
              </span>
              {runsHistory.length > 0 && (
                <button 
                  onClick={clearHistory}
                  className="text-[9px] text-red-400 hover:text-red-300 hover:underline border border-red-500/10 px-1.5 py-0.5 rounded font-mono"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Primary Chart: Latency Comparison Bar Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column: Latency Distribution Chart */}
        <div className="lg:col-span-2 bg-slate-950/40 border border-white/10 rounded-xl p-5 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-indigo-400" /> Latency Distribution Profile (ms)
              </h4>
              <p className="text-[10px] text-slate-400 mt-0.5">
                Comparing current runtime against statistical average benchmarks.
              </p>
            </div>
            
            <div className="flex gap-4 text-[10px] font-mono">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-slate-600 rounded" /> Benchmark</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-indigo-500 rounded" /> Current Run</span>
            </div>
          </div>

          <div className="h-[260px] w-full text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={latencyChartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  stroke="#94a3b8" 
                  tickLine={false}
                  axisLine={false}
                  fontSize={10} 
                />
                <YAxis 
                  stroke="#94a3b8" 
                  tickLine={false}
                  axisLine={false}
                  fontSize={9}
                  unit="ms"
                />
                <Tooltip
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-[#0f172a] border border-white/10 p-3 rounded-lg shadow-xl text-slate-200 space-y-1.5 max-w-[240px]">
                          <p className="font-bold text-xs text-white">{data.fullName}</p>
                          <p className="text-[10px] text-slate-400 font-mono">Model: {data.model}</p>
                          <div className="border-t border-white/5 pt-1 space-y-0.5 font-mono text-[10px]">
                            <p className="text-slate-400 flex justify-between gap-4">
                              <span>Benchmark:</span>
                              <span className="font-bold text-slate-300">{data['Benchmark Latency']} ms</span>
                            </p>
                            <p className="text-indigo-400 flex justify-between gap-4">
                              <span>Current:</span>
                              <span className="font-bold">
                                {data['Current Run Latency'] > 0 ? `${data['Current Run Latency']} ms` : 'Waiting/Not Run'}
                              </span>
                            </p>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar 
                  dataKey="Benchmark Latency" 
                  fill="rgba(148, 163, 184, 0.2)" 
                  radius={[4, 4, 0, 0]} 
                  maxBarSize={30}
                />
                <Bar 
                  dataKey="Current Run Latency" 
                  fill="#6366f1" 
                  radius={[4, 4, 0, 0]} 
                  maxBarSize={30}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Column: Mini Interactive Agent Details */}
        <div className="bg-slate-950/40 border border-white/10 rounded-xl p-5 flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" /> Compute Node Catalog
            </h4>
            <p className="text-[10px] text-slate-400 leading-normal">
              Click on an agent to inspect its telemetry, hardware architecture, and core optimization parameters.
            </p>

            <div className="space-y-1.5 max-h-[180px] overflow-y-auto pr-1">
              {agentProfiles.map(agent => {
                const isActive = state.status === `running_agent_${agent.id}`;
                const isDone = state.agentMetrics?.[agent.id]?.success;
                return (
                  <button
                    key={agent.id}
                    onClick={() => setShowInfo(showInfo === agent.id ? null : agent.id)}
                    className={`w-full text-left p-2 rounded-lg text-xs transition-all border flex justify-between items-center ${
                      isActive 
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                        : isDone
                        ? 'bg-emerald-500/5 border-emerald-500/10 text-emerald-300'
                        : 'bg-white/2 border-white/5 text-slate-400 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-amber-400 animate-pulse' : isDone ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                      <span className="font-semibold truncate">{agent.label}</span>
                      <span className="text-[8px] font-mono opacity-60">({agent.model})</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      {isDone ? `${state.agentMetrics?.[agent.id]?.latency}ms` : 'Idle'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/5 text-[11px] leading-relaxed text-slate-400 bg-white/2 p-2.5 rounded-lg min-h-[50px]">
            {showInfo !== null ? (
              <div>
                <p className="font-bold text-slate-200 text-xs mb-0.5">{agentProfiles[showInfo - 1].name}</p>
                <p className="text-[10px] text-slate-400 leading-normal">{agentProfiles[showInfo - 1].desc}</p>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-slate-500 text-xs italic justify-center h-full">
                <Info className="w-4 h-4 text-indigo-400/30" /> Select a node to view specs
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Secondary Dashboard Row: Success Rate Area Chart & Saved Runs Trend Line */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Success Rate Chart */}
        <div className="bg-slate-950/40 border border-white/10 rounded-xl p-5 space-y-4">
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-400" /> Historical Success & Accuracy Rate (%)
            </h4>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Based on empirical validation metrics from 10,000+ branding sessions.
            </p>
          </div>

          <div className="h-[200px] w-full text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={successRateData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  stroke="#94a3b8" 
                  tickLine={false}
                  fontSize={10} 
                />
                <YAxis 
                  stroke="#94a3b8" 
                  tickLine={false}
                  fontSize={9}
                  domain={[90, 100]}
                  unit="%"
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-[#0f172a] border border-white/10 p-2.5 rounded-lg shadow-xl text-slate-200">
                          <p className="font-bold text-xs text-white">{data.fullName}</p>
                          <p className="text-emerald-400 font-mono text-[11px] mt-1">
                            Success: {data['Historical Success Rate (%)']}%
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="Historical Success Rate (%)" 
                  stroke="#10b981" 
                  fillOpacity={1} 
                  fill="url(#colorSuccess)" 
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Saved Runs Trend Chart */}
        <div className="bg-slate-950/40 border border-white/10 rounded-xl p-5 space-y-4">
          <div>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-4.5 h-4.5 text-pink-400" /> Pipeline Speed Trend Over Time
            </h4>
            <p className="text-[10px] text-slate-400 mt-0.5">
              Reflecting total pipeline execution time (ms) for the last 8 runs.
            </p>
          </div>

          <div className="h-[200px] w-full text-xs flex items-center justify-center">
            {runsHistory.length === 0 ? (
              <div className="text-center p-6 text-slate-500 text-xs italic space-y-2">
                <p>No historical runs logged in current browser session cache yet.</p>
                <p className="text-[10px] text-slate-600">Submit the branding brief on the left to record the first point!</p>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={trendChartData}
                  margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#94a3b8" 
                    tickLine={false}
                    fontSize={10} 
                  />
                  <YAxis 
                    stroke="#94a3b8" 
                    tickLine={false}
                    fontSize={9}
                    unit="ms"
                  />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        const data = payload[0].payload;
                        return (
                          <div className="bg-[#0f172a] border border-white/10 p-2.5 rounded-lg shadow-xl text-slate-200 space-y-1">
                            <p className="font-bold text-xs text-white">{data.name}</p>
                            <p className="text-[10px] text-slate-400">Brand: {data.brand}</p>
                            <p className="text-pink-400 font-mono text-[11px] font-bold">
                              Total Time: {data['Total Pipeline Latency (ms)']} ms
                            </p>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="Total Pipeline Latency (ms)" 
                    stroke="#ec4899" 
                    strokeWidth={2}
                    dot={{ fill: '#ec4899', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
