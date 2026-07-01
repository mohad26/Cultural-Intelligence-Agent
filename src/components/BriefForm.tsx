import { useState, FormEvent } from 'react';
import { BriefInput } from '../types';
import { Sparkles, Compass, Users } from 'lucide-react';

interface BriefFormProps {
  onExecute: (brief: BriefInput) => void;
  isLoading: boolean;
}

const ARAB_SEGMENTS = [
  'Gulf (KSA, UAE, Qatar)',
  'Levant (Jordan, Lebanon)',
  'Maghreb (Morocco, Tunisia)',
  'Egypt',
  'Pan-regional (lower confidence)'
];

const AUSTRALIA_SEGMENTS = [
  'Urban coastal (Sydney/Melbourne)',
  'Regional and rural',
  'Multicultural diaspora',
  'First Nations (consent required)',
  'Pan-Australian (lower confidence)'
];

export default function BriefForm({ onExecute, isLoading }: BriefFormProps) {
  const [productCategory, setProductCategory] = useState('Clean Botanical Skincare');
  const [market, setMarket] = useState<'Arab World' | 'Australia'>('Arab World');
  const [consumerSegment, setConsumerSegment] = useState('Gulf (KSA, UAE, Qatar)');
  const [priceTier, setPriceTier] = useState<BriefInput['price_tier']>('premium');
  const [businessObjective, setBusinessObjective] = useState('Establish localized trust for launch');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onExecute({
      product_category: productCategory,
      market,
      consumer_segment: consumerSegment,
      price_tier: priceTier,
      business_objective: businessObjective
    });
  };

  const currentSegments = market === 'Arab World' ? ARAB_SEGMENTS : AUSTRALIA_SEGMENTS;

  const handleMarketChange = (newMarket: 'Arab World' | 'Australia') => {
    setMarket(newMarket);
    // Set first segment option as default when toggling market
    setConsumerSegment(newMarket === 'Arab World' ? ARAB_SEGMENTS[0] : AUSTRALIA_SEGMENTS[0]);
  };

  // Preset triggers to simplify testing
  const applyPreset = (presetType: 'arab' | 'australia') => {
    if (presetType === 'arab') {
      setProductCategory('Luxury Botanical Skincare');
      setMarket('Arab World');
      setConsumerSegment('Gulf (KSA, UAE, Qatar)');
      setPriceTier('premium');
      setBusinessObjective('Introduce organic skincare targeting Riyadh and Dubai premium consumers');
    } else if (presetType === 'australia') {
      setProductCategory('Apothecary Face & Body Oil');
      setMarket('Australia');
      setConsumerSegment('Urban coastal (Sydney/Melbourne)');
      setPriceTier('premium');
      setBusinessObjective('Launch clean, zero-fuss coastal beauty range highlighting Lemon Myrtle');
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 border border-slate-200 rounded-2xl p-6 shadow-xl flex flex-col justify-between h-full" id="brand-brief-composer">
      <div>
        <div className="flex items-center gap-2 mb-5">
          <span className="p-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 rounded-lg">
            <Compass className="w-5 h-5" />
          </span>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">Active Brand Composer</h2>
        </div>

        {/* Quick Presets */}
        <div className="mb-6">
          <label className="block text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-2">
            One-Click Market Presets
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => applyPreset('arab')}
              className="text-xs bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 border border-emerald-500/30 rounded-lg px-3 py-1.5 font-semibold transition-colors"
            >
              🇸🇦 GCC Luxe Premium
            </button>
            <button
              type="button"
              onClick={() => applyPreset('australia')}
              className="text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 border border-amber-500/30 rounded-lg px-3 py-1.5 font-semibold transition-colors"
            >
              🇦🇺 Aussie Apothecary
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-600 font-bold mb-1.5">Product Category</label>
            <input
              type="text"
              value={productCategory}
              onChange={e => setProductCategory(e.target.value)}
              placeholder="e.g. Adaptogenic Botanical Oils"
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all font-medium"
              required
            />
          </div>

          <div>
            {/* Target region segmented control */}
            <label className="block text-slate-600 font-bold mb-1.5">Target region</label>
            <div className="flex rounded-lg border border-slate-200 overflow-hidden w-full bg-white shadow-sm p-0.5">
              <button
                type="button"
                onClick={() => handleMarketChange('Arab World')}
                className={`flex-1 text-center py-2.5 font-sans font-semibold text-xs transition-all rounded-md ${
                  market === 'Arab World'
                    ? 'bg-[#163b2f] text-white shadow-sm'
                    : 'bg-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Arab World
              </button>
              <button
                type="button"
                onClick={() => handleMarketChange('Australia')}
                className={`flex-1 text-center py-2.5 font-sans font-semibold text-xs transition-all rounded-md ${
                  market === 'Australia'
                    ? 'bg-[#1c355e] text-white shadow-sm'
                    : 'bg-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                Australia
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              {/* Audience segment dropdown select */}
              <label className="block text-slate-600 font-bold mb-1.5">Audience segment</label>
              <select
                value={consumerSegment}
                onChange={e => setConsumerSegment(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all font-semibold"
              >
                {currentSegments.map(opt => (
                  <option key={opt} value={opt} className="text-slate-900 bg-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-600 font-bold mb-1.5">Price Tier</label>
              <select
                value={priceTier}
                onChange={e => setPriceTier(e.target.value as BriefInput['price_tier'])}
                className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all font-semibold"
              >
                <option value="budget">Budget (Economy/Mass)</option>
                <option value="mid-tier">Mid-Tier (Affordable Care)</option>
                <option value="premium">Premium (Artisanal luxury)</option>
                <option value="ultra-luxe">Ultra-Luxe (Sovereign/Refined)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-600 font-bold mb-1.5">Primary Business Objective</label>
            <textarea
              value={businessObjective}
              onChange={e => setBusinessObjective(e.target.value)}
              placeholder="State key narrative parameters..."
              rows={3}
              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all font-medium animate-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded-xl font-bold text-sm shadow-md transition-all uppercase tracking-widest flex items-center justify-center gap-2 ${
              isLoading
                ? 'bg-slate-350 text-slate-500 cursor-not-allowed shadow-none border border-slate-200'
                : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20'
            }`}
            id="btn-trigger-agents"
          >
            <Sparkles className={`w-4 h-4 ${isLoading ? 'animate-spin text-indigo-200' : 'text-amber-300'}`} />
            {isLoading ? 'Running Intelligent Agents...' : 'Deploy Branding Agents'}
          </button>
        </form>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-200 text-[10px] text-slate-500 flex items-center justify-between">
        <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-slate-400" /> Multi-Agent Engine</span>
        <span>Simulating Open Source Standards</span>
      </div>
    </div>
  );
}
