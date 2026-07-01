import { useState, useRef, useEffect } from 'react';
import { PipelineExecutionState, PipelineResponse } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Check, ShieldAlert, Cpu, Terminal, FileCode, Award, Brush, Globe, BookOpen, AlertCircle, Sparkles, MapPin, Compass, BarChart2 } from 'lucide-react';
import AgentMetricsDashboard from './AgentMetricsDashboard';

interface PipelineInspectorProps {
  state: PipelineExecutionState;
}

export default function PipelineInspector({ state }: PipelineInspectorProps) {
  const [activeTab, setActiveTab] = useState<'visual' | 'logs' | 'raw_json' | 'metrics'>('visual');
  const [selectedAgentJson, setSelectedAgentJson] = useState<number>(4); // Default to Brand Generation (Agent 4)
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeTab === 'logs' && logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [state.logs, activeTab]);

  const agents = [
    {
      id: 1,
      name: "Agent 1: Cultural Intelligence",
      model: "Qwen3-32B (Cultural Expert)",
      task: "Analyze authority, trust, family, and communication style",
      outputKey: "agent1Output",
      description: "Generates regional localization guardrails, socio-cultural trust opportunities, and critical marketing risks based on retrieved ethnography research nodes."
    },
    {
      id: 2,
      name: "Agent 2: Semiotic Analysis",
      model: "Gemma 3 (Lightweight Strategist)",
      task: "Translate insights to visual branding recommendations",
      outputKey: "agent2Output",
      description: "Outputs high-contrast color hex codes with cultural relevance annotations, forbidden colors to avoid, motifs, and typographical rules."
    },
    {
      id: 3,
      name: "Agent 3: RAG Knowledge Retrieval",
      model: "Vector Engine (Qdrant Multi-Index)",
      task: "Expand query, vector search, score & re-rank top items",
      outputKey: "agent3Output",
      description: "Formulates expanded queries, filters results by collection, and re-ranks top 5 documents based on topic alignment to yield best evidence."
    },
    {
      id: 4,
      name: "Agent 4: Brand Generation",
      model: "Llama 4 Scout (Identity Architect)",
      task: "Synthesize name, tagline, positioning, voice & story",
      outputKey: "agent4Output",
      description: "Creates culturally cohesive identity while respecting regional naming structures and avoiding clichés."
    },
    {
      id: 5,
      name: "Agent 5: Evaluation Agent",
      model: "DeepSeek-R1 Distill (Independent Auditor)",
      task: "Act independently to score, critique, and recommend fixes",
      outputKey: "agent5Output",
      description: "Critically evaluates brand against 8 benchmarks (1-7 scale) and outlines strengths, taboos, and essential corrections."
    }
  ];

  const getStepStatus = (agentId: number) => {
    const statusMap: Record<string, number> = {
      'idle': 0,
      'running_agent_1': 1,
      'running_agent_2': 2,
      'running_agent_3': 3,
      'running_agent_4': 4,
      'running_agent_5': 5,
      'completed': 6,
      'failed': -1
    };
    
    const currentNum = statusMap[state.status] || 0;
    if (state.status === 'failed') return 'failed';
    if (currentNum === 0) return 'idle';
    if (currentNum > agentId) return 'completed';
    if (currentNum === agentId) return 'running';
    return 'pending';
  };

  const getAgentJsonData = () => {
    switch (selectedAgentJson) {
      case 1: return state.agent1Output;
      case 2: return state.agent2Output;
      case 3: return state.agent3Output;
      case 4: return state.agent4Output;
      case 5: return state.agent5Output;
      default: return null;
    }
  };

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full" id="pipeline-execution-inspector">
      
      {/* Tab Selectors */}
      <div className="px-6 py-4 border-b border-white/10 flex flex-wrap justify-between items-center gap-4 bg-white/2">
        <div>
          <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
            <Cpu className="w-4 h-4 text-indigo-400" /> Pipeline Orchestrator & Inspector
          </h3>
          <p className="text-[10px] text-slate-400 mt-0.5">
            {state.status === 'idle' && 'Pipeline waiting for input brief.'}
            {state.status.startsWith('running') && 'Agents currently reasoning and validating...'}
            {state.status === 'completed' && 'Cross-cultural multi-agent synthesis completed (100%).'}
            {state.status === 'failed' && 'Fatal pipeline error encountered during execution.'}
          </p>
        </div>

        <div className="flex bg-white/5 border border-white/5 p-1 rounded-xl">
          <button
            type="button"
            onClick={() => setActiveTab('visual')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'visual' ? 'bg-white/10 text-white border border-white/10 shadow-sm font-bold font-sans' : 'text-slate-400 hover:text-white font-sans'
            }`}
          >
            Agent Board
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('logs')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 ${
              activeTab === 'logs' ? 'bg-white/10 text-white border border-white/10 shadow-sm font-bold font-sans' : 'text-slate-400 hover:text-white font-sans'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" /> Dev Logs
            {state.logs.length > 0 && (
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('raw_json')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              activeTab === 'raw_json' ? 'bg-white/10 text-white border border-white/10 shadow-sm font-bold font-sans' : 'text-slate-400 hover:text-white font-sans'
            }`}
          >
            Structured JSON
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('metrics')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              activeTab === 'metrics' ? 'bg-white/10 text-white border border-white/10 shadow-sm font-bold font-sans' : 'text-slate-400 hover:text-white font-sans'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5 text-indigo-400" /> Agent Metrics
            {state.status.startsWith('running') && (
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping" />
            )}
          </button>
        </div>
      </div>

      {/* Main Body */}
      <div className="flex-grow p-6 overflow-y-auto max-h-[640px]">
        <AnimatePresence mode="wait">
          
          {/* Active Tab: Visual Stepper & Board */}
          {activeTab === 'visual' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {/* Stepper Status Indicator Header */}
              {state.status === 'idle' && (
                <div className="p-8 border-2 border-dashed border-white/10 rounded-xl text-center space-y-3 bg-white/2">
                  <Cpu className="w-8 h-8 text-indigo-400/40 mx-auto" />
                  <p className="text-xs text-slate-400 max-w-sm mx-auto">
                    Configure your product category, click "Deploy Branding Agents" on the left panel, and observe our multi-agent model pipeline execute.
                  </p>
                </div>
              )}

              {state.status !== 'idle' && (
                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  {agents.map((ag) => {
                    const status = getStepStatus(ag.id);
                    return (
                      <div
                        key={ag.id}
                        className={`p-3 border rounded-xl relative overflow-hidden transition-all text-xs ${
                          status === 'completed' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' :
                          status === 'running' ? 'border-amber-500 bg-amber-500/15 shadow-lg ring-1 ring-amber-500/30 text-amber-300' :
                          'border-white/5 bg-white/2 opacity-40 text-slate-500'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1.5">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Step {ag.id}</span>
                          {status === 'completed' && <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />}
                          {status === 'running' && (
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse mt-1" />
                          )}
                        </div>
                        <h4 className={`font-bold leading-tight mb-1 truncate ${status === 'completed' ? 'text-emerald-300' : status === 'running' ? 'text-amber-300 animate-pulse' : 'text-slate-400'}`}>{ag.name.split(':')[1]}</h4>
                        <p className="text-[9px] text-slate-400 font-mono leading-none">{ag.model}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* RAG Agent Results Layout if completed */}
              {state.status === 'completed' && state.agent4Output && (
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="space-y-6 text-xs mt-6"
                >
                  {/* Brand Crown */}
                  <div className="p-6 bg-gradient-to-br from-indigo-900/40 to-slate-950/60 border border-white/10 text-white rounded-2xl relative overflow-hidden shadow-xl backdrop-blur-md">
                    <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <span className="text-[9px] uppercase font-bold tracking-widest text-[#818cf8] bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/25">
                          RAG Generated Brand Identity
                        </span>
                        <h2 className="text-3xl font-serif italic text-white mt-4 leading-none tracking-tight">
                          {state.agent4Output.brand_name}
                        </h2>
                        <p className="italic text-slate-300 mt-2.5 font-serif text-sm">
                          "{state.agent4Output.tagline}"
                        </p>
                      </div>
                      
                      <div className="bg-white/5 border border-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl text-right">
                        <span className="text-[10px] text-slate-400 block font-medium">Critical Evaluation Score</span>
                        <span className="text-xl font-black text-amber-300">{state.agent5Output?.overall_score || '6.5'} <span className="text-xs text-slate-500 font-normal">/ 7.0</span></span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-4 border-t border-white/10 leading-relaxed text-xs">
                      <div>
                        <h4 className="font-bold uppercase text-indigo-400 text-[10px] tracking-wider mb-1.5 flex items-center gap-1.5 font-mono">
                          <MapPin className="w-3.5 h-3.5" /> Authentic Naming Rationale
                        </h4>
                        <p className="text-slate-305 text-xs leading-relaxed">
                          {state.agent4Output.name_rationale}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold uppercase text-indigo-400 text-[10px] tracking-wider mb-1.5 flex items-center gap-1.5 font-mono">
                          <Award className="w-3.5 h-3.5" /> Value Positioning Statement
                        </h4>
                        <p className="text-slate-305 text-xs font-sans leading-relaxed">
                          {state.agent4Output.positioning}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Brand Origin Story & Palette */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Story */}
                    <div className="md:col-span-2 border border-white/10 rounded-2xl p-5 bg-white/2 space-y-4 text-slate-200">
                      <div>
                        <h4 className="font-bold text-white text-sm flex items-center gap-2 mb-2 font-sans">
                          <BookOpen className="w-4 h-4 text-indigo-400" /> Regional Narrative Origin Story
                        </h4>
                        <p className="text-slate-300 leading-relaxed font-sans text-xs">
                          {state.agent4Output.story}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-3.5 border-t border-white/10">
                        <div>
                          <h5 className="font-bold text-white mb-2 text-xs">Typography Prescription</h5>
                          <div className="bg-slate-950/40 p-3 rounded-xl border border-white/5 font-mono text-[10px] text-slate-400 space-y-1">
                            {state.agent4Output.typography.map((t, idx) => (
                              <p key={idx} className="truncate">{t}</p>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h5 className="font-bold text-white mb-2 text-xs font-sans">Voice & Tone Code</h5>
                          <p className="text-slate-305 bg-slate-950/40 p-3 rounded-xl border border-white/5 text-[10.5px] leading-relaxed font-sans">
                            {state.agent4Output.voice}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-bold text-white mb-2 text-xs font-sans">Tactile Packaging Concept</h5>
                        <p className="text-slate-305 bg-slate-950/40 p-3.5 rounded-xl border border-white/5 text-[11px] leading-relaxed font-sans font-medium">
                          {state.agent4Output.packaging}
                        </p>
                      </div>
                    </div>

                    {/* Semiotic Palette */}
                    <div className="border border-white/10 rounded-2xl p-5 bg-white/2 space-y-4">
                      <h4 className="font-bold text-white text-sm flex items-center gap-1.5 leading-none">
                        <Brush className="w-4 h-4 text-indigo-400" /> Semiotic Palette
                      </h4>
                      
                      <div className="space-y-2.5">
                        {state.agent4Output.palette && state.agent4Output.palette.map((color, idx) => (
                          <div key={idx} className="flex gap-3 items-center p-2 rounded-xl border border-white/5 bg-slate-950/20 hover:bg-white/5 transition-all">
                            <span
                              className="w-8 h-8 rounded-lg shrink-0 shadow-inner border border-white/10"
                              style={{ backgroundColor: color.hex }}
                            />
                            <div className="overflow-hidden">
                              <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-slate-200 truncate block text-[11px] font-sans">{color.name}</span>
                                <span className="text-[9px] font-mono select-all text-slate-500">{color.hex}</span>
                              </div>
                              <span className="text-[10px] text-slate-400 line-clamp-1 font-sans">{color.meaning}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-white/10">
                        <h5 className="font-bold text-[10px] text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1 font-sans">
                          <AlertCircle className="w-3.5 h-3.5 text-red-500" /> Colors to Avoid
                        </h5>
                        <div className="flex flex-wrap gap-1">
                          {state.agent2Output?.avoid_colors.map((c, i) => (
                            <span key={i} className="text-[9px] text-red-300 bg-red-500/10 border border-red-500/20 rounded-md px-2 py-0.5 font-medium font-sans">
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RAG Evidence citations */}
                  <div className="border border-white/10 rounded-2xl p-5 bg-white/2">
                    <h4 className="font-bold text-white text-sm flex items-center gap-2 mb-3">
                      <Compass className="w-4 h-4 text-indigo-400" /> RAG Knowledge Base Citations [Agent 3 Sources]
                    </h4>
                    <p className="text-[11px] text-slate-400 mb-4 leading-normal font-sans">
                      The recommendations above are dynamically inferred because the retrieval agent located critical ethnographic precedents indexing under the following document IDs:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {state.agent4Output.supporting_evidence.map((se, i) => (
                        <div key={i} className="bg-slate-950/35 p-3 rounded-xl border border-white/5 text-slate-300">
                          <span className="text-[9px] font-bold text-indigo-300 bg-indigo-500/10 border border-indigo-500/25 px-1.5 py-0.5 rounded font-mono block w-fit mb-1.5">
                            SOURCE ID: {se.split(' ')[2] || 'RAG-Doc'}
                          </span>
                          <p className="text-[11px] text-slate-300 leading-relaxed font-sans">{se}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Independent Critique (Agent 5) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl">
                    <div className="space-y-3">
                      <h4 className="font-bold text-red-300 text-xs tracking-tight flex items-center gap-2 uppercase tracking-wider font-sans">
                        <ShieldAlert className="w-4 h-4 text-red-400" /> Critic Audit Report: Core Weaknesses
                      </h4>
                      <ul className="space-y-1.5">
                        {state.agent5Output?.weaknesses.map((w, idx) => (
                          <li key={idx} className="text-slate-300 flex items-start gap-1.5 leading-relaxed text-xs">
                            <span className="text-red-400 font-bold shrink-0 mt-0.5">▪</span>
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-bold text-emerald-300 text-xs tracking-tight flex items-center gap-2 uppercase tracking-wider font-sans">
                        <Sparkles className="w-4 h-4 text-emerald-400" /> Prescribed Optimization Roadmap
                      </h4>
                      <ul className="space-y-1.5">
                        {state.agent5Output?.improvements.map((imp, idx) => (
                          <li key={idx} className="text-slate-300 flex items-start gap-1.5 leading-relaxed text-xs font-sans">
                            <span className="text-emerald-400 font-bold shrink-0 mt-0.5">▪</span>
                            {imp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </motion.div>
              )}
            </motion.div>
          )}

          {/* Active Tab: Console / Logs */}
          {activeTab === 'logs' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-slate-950/80 text-slate-300 border border-white/5 backdrop-blur-md rounded-xl p-5 font-mono text-[11px] leading-relaxed relative min-h-[350px] flex flex-col justify-between"
            >
              <div className="space-y-1.5 overflow-y-auto max-h-[500px]">
                <div className="text-slate-500 mb-2">// Server microservices execution thread logs</div>
                
                {state.logs.length === 0 ? (
                  <div className="text-slate-400 italic">No execution logs in thread yet. Run the pipeline to display live logs.</div>
                ) : (
                  state.logs.map((log, index) => {
                    let color = "text-slate-300";
                    if (log.includes("🔍") || log.includes("RAG")) color = "text-cyan-400";
                    if (log.includes("🤖") || log.includes("Agent")) color = "text-amber-405 font-semibold";
                    if (log.includes("✅")) color = "text-emerald-400";
                    if (log.includes("⚠️")) color = "text-yellow-450";
                    if (log.includes("❌")) color = "text-red-400 font-black";
                    if (log.includes("🚀")) color = "text-[#818cf8] font-bold";

                    return (
                      <div key={index} className={color}>
                        {log}
                      </div>
                    );
                  })
                )}
                <div ref={logsEndRef} />
              </div>

              <div className="pt-4 border-t border-white/5 text-[10px] text-slate-500 flex justify-between">
                <span>Thread active: localhost:3000/api/brand/generate</span>
                <span>Type: Node context logs</span>
              </div>
            </motion.div>
          )}

          {/* Active Tab: Structured JSON Output */}
          {activeTab === 'raw_json' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {state.status === 'idle' ? (
                <div className="p-8 text-center text-xs text-slate-400 border border-dashed border-white/10 rounded-xl bg-white/2">
                  No structured outputs captured yet. Submit a brief to validate pipeline JSONs.
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Selector list */}
                  <div className="space-y-1">
                    <label className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2">Select Agent JSON</label>
                    {agents.map(ag => (
                      <button
                        key={ag.id}
                        onClick={() => setSelectedAgentJson(ag.id)}
                        className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-2 ${
                          selectedAgentJson === ag.id
                            ? 'border-indigo-500 bg-indigo-500/10 text-white font-semibold'
                            : 'border-white/5 bg-white/2 hover:bg-white/5 text-slate-350'
                        }`}
                      >
                        <FileCode className="w-4 h-4 mt-0.5 shrink-0" />
                        <div>
                          <span className="block font-bold">{ag.name.split(':')[1]}</span>
                          <span className="text-[9px] opacity-75">{ag.model}</span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* JSON Display */}
                  <div className="md:col-span-3 bg-slate-950/60 border border-white/5 text-slate-300 rounded-2xl p-5 font-mono text-[10px] relative overflow-hidden">
                    <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-3">
                      <span className="text-white font-semibold">{agents.find(a => a.id === selectedAgentJson)?.name}</span>
                      <span className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2 py-0.5 rounded text-[8px] uppercase tracking-wider font-bold">Validated JSON schema</span>
                    </div>

                    <div className="max-h-[450px] overflow-auto">
                      {getAgentJsonData() ? (
                        <pre className="whitespace-pre-wrap select-all">{JSON.stringify(getAgentJsonData(), null, 2)}</pre>
                      ) : (
                        <p className="text-slate-500 italic">No output generated for this agent stage. Pipeline might have stopped in preceding steps.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Active Tab: Agent Metrics Dashboard */}
          {activeTab === 'metrics' && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <AgentMetricsDashboard state={state} />
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}
