import { ComparisonReport } from '../types';
import { motion } from 'motion/react';
import { Sparkles, TrendingUp, Zap } from 'lucide-react';

interface ComparisonMetricsProps {
  comparison?: ComparisonReport;
}

interface DimensionConfig {
  key: keyof Omit<ComparisonReport['generic_score'], 'overall_score'>;
  label: string;
}

const DIMENSIONS: DimensionConfig[] = [
  { key: 'cultural_appropriateness', label: 'Cultural appropriateness' },
  { key: 'authenticity', label: 'Authenticity' },
  { key: 'emotional_resonance', label: 'Emotional resonance' },
  { key: 'consumer_trust', label: 'Consumer trust' },
  { key: 'symbolic_coherence', label: 'Symbolic coherence' },
  { key: 'market_relevance', label: 'Market relevance' },
  { key: 'brand_legitimacy', label: 'Brand legitimacy' },
  { key: 'cross_cultural_acceptance', label: 'Cross-cultural acceptance' }
];

export default function ComparisonMetrics({ comparison }: ComparisonMetricsProps) {
  if (!comparison) {
    return (
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center text-xs text-slate-400 shadow-lg" id="brand-performance-benchmarks">
        No comparative benchmarking data initialized yet. Run the multi-agent pipeline to generate comparison scores.
      </div>
    );
  }

  const { generic_score, cultural_score, rag_score, comparison: notes } = comparison;

  // Retrieve score safely or default
  const getScoreValue = (scoreObj: any, key: string, fallback: number): number => {
    if (!scoreObj) return fallback;
    return typeof scoreObj[key] === 'number' ? scoreObj[key] : fallback;
  };

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl space-y-6 overflow-hidden" id="brand-performance-benchmarks">
      
      {/* Header */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400 block mb-1">Comparative Benchmarks</span>
          <h3 className="text-base font-extrabold text-white tracking-tight">Strategy Effectiveness Benchmark</h3>
        </div>
        <div className="flex items-center gap-1 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/35 text-indigo-300 text-[9px] font-bold tracking-wider">
          <Sparkles className="w-3 h-3 text-indigo-400 animate-pulse" />
          RAG POWERED
        </div>
      </div>

      {/* Numerical Benchmark Recap Summary */}
      <div className="grid grid-cols-3 gap-2.5">
        <div className="border border-white/5 p-2 rounded-xl bg-white/2">
          <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest block leading-none mb-1">Standard</span>
          <h4 className="font-bold text-slate-300 text-[10px] leading-none mb-1.5">Generic Mode A</h4>
          <span className="text-xs font-black text-slate-300">
            {getScoreValue(generic_score, 'overall_score', 3.4).toFixed(1)} <span className="text-[9px] font-normal text-slate-500">/ 7</span>
          </span>
        </div>
        <div className="border border-[#1c355e]/30 p-2 rounded-xl bg-[#1c355e]/5">
          <span className="text-[9px] font-bold text-[#3182ce] uppercase tracking-widest block leading-none mb-1">Semiotic</span>
          <h4 className="font-bold text-[#90cdf4] text-[10px] leading-none mb-1.5">Cultural Rules</h4>
          <span className="text-xs font-black text-[#63b3ed]">
            {getScoreValue(cultural_score, 'overall_score', 5.2).toFixed(1)} <span className="text-[9px] font-normal text-slate-500">/ 7</span>
          </span>
        </div>
        <div className="border border-emerald-500/30 p-2 rounded-xl bg-emerald-500/10 shadow-md">
          <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest block leading-none mb-1 flex items-center gap-0.5">
            <Zap className="w-2.5 h-2.5 fill-emerald-400 text-emerald-400" /> RAG
          </span>
          <h4 className="font-bold text-white text-[10px] leading-none mb-1.5">RAG Advanced</h4>
          <span className="text-xs font-black text-emerald-300">
            {getScoreValue(rag_score, 'overall_score', 6.0).toFixed(1)} <span className="text-[9px] font-normal text-slate-400">/ 7</span>
          </span>
        </div>
      </div>

      {/* Exact image 8-dimension comparative table */}
      <div className="space-y-4 pt-2">
        <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 border-b border-white/10 pb-2">
          Eight-Dimension Comparison
        </div>

        {/* Comparison Table Grid */}
        <div className="space-y-3.5 text-[11px]">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 gap-3 text-[9px] font-extrabold uppercase tracking-widest text-slate-400 pb-1 border-b border-white/5 opacity-80">
            <div className="col-span-3">Dimension</div>
            <div className="col-span-3 pl-1 text-red-500">Standard</div>
            <div className="col-span-3 pl-1 text-[#3182ce]">Semiotic</div>
            <div className="col-span-3 pl-1 text-emerald-400">RAG</div>
          </div>

          {/* Table Dimensions Rows */}
          {DIMENSIONS.map((dim) => {
            const sVal = getScoreValue(generic_score, dim.key, 3.0);
            const semVal = getScoreValue(cultural_score, dim.key, 5.0);
            const rVal = getScoreValue(rag_score, dim.key, 6.0);

            // Calculate widths (1.0 to 7.0 system mapped to percent)
            const sWidth = Math.max(5, (sVal / 7) * 100);
            const semWidth = Math.max(5, (semVal / 7) * 100);
            const rWidth = Math.max(5, (rVal / 7) * 100);

            return (
              <div key={dim.key} className="grid grid-cols-12 gap-2.5 items-center hover:bg-white/2 py-1 rounded-md transition-colors">
                
                {/* Dimension label */}
                <div className="col-span-3 font-medium text-slate-200 truncate leading-snug text-[10px]" title={dim.label}>
                  {dim.label}
                </div>

                {/* Standard progress block */}
                <div className="col-span-3 flex items-center gap-1.5">
                  <div className="h-1.5 bg-slate-900/60 rounded-full flex-1 relative overflow-hidden">
                    <motion.div
                      className="absolute h-full rounded-full"
                      style={{ backgroundColor: '#9c2b2b' }} // reddish brown
                      initial={{ width: 0 }}
                      animate={{ width: `${sWidth}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                  <span className="font-mono text-[9px] font-semibold text-slate-400 w-5 text-right shrink-0">
                    {sVal.toFixed(1)}
                  </span>
                </div>

                {/* Semiotic progress block */}
                <div className="col-span-3 flex items-center gap-1.5">
                  <div className="h-1.5 bg-slate-900/60 rounded-full flex-1 relative overflow-hidden">
                    <motion.div
                      className="absolute h-full rounded-full"
                      style={{ backgroundColor: '#1c355e' }} // deep navy slate
                      initial={{ width: 0 }}
                      animate={{ width: `${semWidth}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                  <span className="font-mono text-[9px] font-semibold text-slate-400 w-5 text-right shrink-0">
                    {semVal.toFixed(1)}
                  </span>
                </div>

                {/* RAG progress block */}
                <div className="col-span-3 flex items-center gap-1.5">
                  <div className="h-1.5 bg-slate-900/60 rounded-full flex-1 relative overflow-hidden">
                    <motion.div
                      className="absolute h-full rounded-full shadow-[0_0_6px_rgba(16,185,129,0.3)]"
                      style={{ backgroundColor: '#065f46' }} // emerald green
                      initial={{ width: 0 }}
                      animate={{ width: `${rWidth}%` }}
                      transition={{ duration: 0.8 }}
                    />
                  </div>
                  <span className="font-mono text-[9px] font-semibold text-emerald-300 w-5 text-right shrink-0">
                    {rVal.toFixed(1)}
                  </span>
                </div>

              </div>
            );
          })}

        </div>
      </div>

      {/* Legend Card */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 text-[9px] text-slate-400 justify-center p-2.5 bg-white/2 rounded-xl border border-white/5">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-1.5 rounded bg-[#9c2b2b] block" /> Standard (Generic)
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-1.5 rounded bg-[#1c355e] block" /> Semiotic (Cultural Rules)
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-1.5 rounded bg-[#065f46] block" /> RAG (Knowledge Grounded)
        </div>
      </div>

      {/* Strategic Report */}
      {notes && (
        <div className="p-3.5 bg-indigo-500/5 text-[11px] text-slate-300 rounded-xl leading-relaxed border border-indigo-500/10 flex items-start gap-2.5">
          <span className="p-1 bg-indigo-500/10 border border-indigo-500/20 rounded text-indigo-300 self-start mt-0.5">
            <Zap className="w-3 h-3 text-indigo-300 fill-indigo-300/20" />
          </span>
          <div>
            <h5 className="font-bold text-indigo-300 mb-0.5">Strategic Coherence Benchmark Analysis</h5>
            <p className="text-slate-300 text-[10px] leading-normal font-sans">
              {notes.analytical_assessment || notes.comparison_mode_summary}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
