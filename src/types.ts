/**
 * TypeScript type definitions for the Cultural Intelligence Agent Platform.
 */

export interface BriefInput {
  product_category: string;
  market: string;
  consumer_segment: string;
  price_tier: 'budget' | 'mid-tier' | 'premium' | 'ultra-luxe';
  business_objective: string;
}

export interface CulturalInsight {
  market: string;
  segment: string;
  confidence: number;
  insights: string[];
  localization_rules: string[];
  opportunities: string[];
  risks: string[];
  sources: string[];
}

export interface ColorRecommendation {
  name: string;
  hex: string;
  meaning: string;
  confidence: number;
}

export interface SemioticAnalysis {
  recommended_colors: ColorRecommendation[];
  avoid_colors: string[];
  typography: string[];
  motifs: string[];
  warnings: string[];
  sources: string[];
}

export interface RAGEvidence {
  evidence_summary: string;
  key_findings: string[];
  brand_examples: string[];
  citations: string[];
}

export interface BrandIdentity {
  brand_name: string;
  name_rationale: string;
  tagline: string;
  positioning: string;
  story: string;
  voice: string;
  palette: ColorRecommendation[];
  typography: string[];
  packaging: string;
  supporting_evidence: string[];
}

export interface EvaluationScores {
  cultural_appropriateness: number; // 1-7
  authenticity: number; // 1-7
  emotional_resonance: number; // 1-7
  consumer_trust: number; // 1-7
  symbolic_coherence: number; // 1-7
  market_relevance: number; // 1-7
  brand_legitimacy: number; // 1-7
  cross_cultural_acceptance: number; // 1-7
}

export interface EvaluationReport {
  scores: EvaluationScores;
  overall_score: number; // Average or weighted
  strengths: string[];
  weaknesses: string[];
  improvements: string[];
}

export interface BaseScores {
  overall_score: number;
  cultural_appropriateness: number; // 1-7
  authenticity: number; // 1-7
  emotional_resonance: number; // 1-7
  consumer_trust: number; // 1-7
  symbolic_coherence: number; // 1-7
  market_relevance: number; // 1-7
  brand_legitimacy: number; // 1-7
  cross_cultural_acceptance: number; // 1-7
}

export interface ComparisonReport {
  generic_score: BaseScores;
  cultural_score: BaseScores;
  rag_score: BaseScores;
  comparison: Record<string, string>; // analytical notes
}

export interface AgentMetric {
  latency: number;
  success: boolean;
}

export interface PipelineExecutionState {
  status: 'idle' | 'running_agent_1' | 'running_agent_2' | 'running_agent_3' | 'running_agent_4' | 'running_agent_5' | 'completed' | 'failed';
  currentStepMessage: string;
  logs: string[];
  agent1Output?: CulturalInsight;
  agent2Output?: SemioticAnalysis;
  agent3Output?: RAGEvidence;
  agent4Output?: BrandIdentity;
  agent5Output?: EvaluationReport;
  comparisonOutput?: ComparisonReport;
  agentMetrics?: Record<number, AgentMetric>;
}

// Vector Database KB schemas
export type KBCollection = 'cultural_kb' | 'semiotic_kb' | 'market_kb' | 'branding_cases';

export interface KBRecord {
  id: string;
  collection: KBCollection;
  market: string; // e.g. "Arab Markets", "Australia", "Japan", "Mexico", or "Global"
  category: string; // e.g., " ethnographic", "symbolism", "trends"
  title: string;
  content: string;
  tags: string[];
}

export interface PipelineResponse {
  agent1: CulturalInsight;
  agent2: SemioticAnalysis;
  agent3: RAGEvidence;
  agent4: BrandIdentity;
  agent5: EvaluationReport;
  comparison: ComparisonReport;
}
