import { KBRecord, KBCollection } from './types';

// Prepopulated knowledge base covering ethnographic study, semiotic meanings, localized guidelines.
export const INITIAL_KB: KBRecord[] = [
  // --- ARAB MARKETS ---
  // cultural_kb
  {
    id: "ar-cult-01",
    collection: "cultural_kb",
    market: "Arab Markets",
    category: "ethnographic research",
    title: "High-Context Communication and Personal Trust in GCC Consumer Behavior",
    content: "Trust in Arab (specifically Gulf/GCC) markets is deeply personal and relationship-oriented. Communication is highly contextual, relying on implicit cues, honor, and mutual respect. Authority and high status are respected, but hospitality (Karam) and generous commitments build true brand loyalty. Commercial transactions are viewed through a social lens.",
    tags: ["trust-drivers", "hospitality", "high-context", "GCC"]
  },
  {
    id: "ar-cult-02",
    collection: "cultural_kb",
    market: "Arab Markets",
    category: "localization guides",
    title: "Socio-Cultural Taboos and Family Orientation in Middle East Naming",
    content: "Family (A'ela) and community are the primary socio-cultural orientations in Arab societies. Naming and messaging must respect linguistic lineages. Avoid generic English names transliterated without meaning. Names should have clear root meanings (e.g. Al-Tayyib meaning good/noble). Avoid overly casual or irreverent humor which diminishes perceived authority and trustworthiness.",
    tags: ["family", "linguistic-lineage", "social-orientation"]
  },
  {
    id: "ar-cult-03",
    collection: "cultural_kb",
    market: "Arab Markets",
    category: "consumer behavior research",
    title: "Price Tier Perception and Premium Aesthetic Expectations in KSA/UAE",
    content: "Ultra-luxe and premium price tiers in Saudi Arabia and the UAE demand high visual density, symmetrical order, and calligraphic excellence. Consumers perceive heavy weight, intricate geometric filigree, and scent/tactile finishes as signs of genuine craftsmanship. Minimalist 'western style' is sometimes misread as cheap or unfinished.",
    tags: ["luxury", "consumer-behavior", "GCC", "price-tier"]
  },
  
  // semiotic_kb
  {
    id: "ar-sem-01",
    collection: "semiotic_kb",
    market: "Arab Markets",
    category: "color meanings",
    title: "Semiotic Spectrum of Emerald Greens, Deep Blue, and Metallic Gold",
    content: "Green is the most sacred and culturally resonant color in the Arab world, representing vitality, growth, and paradise (Al-Jannah). Warm deep turquoise and royal blue signify safety, celestial protection, and pure water. Gold represents prosperity, light, and high sovereign value. Deep black can symbolize majesty but must be balanced by gold detailing to avoid mourning connotations.",
    tags: ["color-meanings", "emerald", "gold", "protection"]
  },
  {
    id: "ar-sem-02",
    collection: "semiotic_kb",
    market: "Arab Markets",
    category: "typography conventions",
    title: "Calligraphic Codes: Balancing Naskh, Thuluth, and Diwani Serif Styles",
    content: "Arabic letterforms convey deep theological and regal authority. Fluid, curving serif-like custom typography inspired by the balanced proportions of classical Naskh script induces calm and respect. Geometry is paramount. For high-tech categories, modern hybrid geometric san-serif Arabic fonts that retain stroke-weight variations are highly trusted.",
    tags: ["typography", "calligraphy", "script-serif", "geometry"]
  },
  {
    id: "ar-sem-03",
    collection: "semiotic_kb",
    market: "Arab Markets",
    category: "visual motifs",
    title: "Symmetrical Geometrics, Star Polygons, and Sand Dunes Line Art",
    content: "Abstract geometry, eight-sided rub' el hizb stars, and flowing linear representation of organic desert topography signify continuous movement and spiritual alignment. Representations of native animals (e.g., Arabian horse, falcon, or Oryx) represent courage, nobility, and sharp target focus. Avoid depictions of wine cups or direct human face profiles unless highly stylized.",
    tags: ["motifs", "stars", "nobility", "animal-symbolism"]
  },

  // market_kb
  {
    id: "ar-mkt-01",
    collection: "market_kb",
    market: "Arab Markets",
    category: "market reports",
    title: "GCC Smart Wellness and Botanical Luxury Market Shift 2026",
    content: "A massive consumer shift toward organic wellness, clean beauty, and non-alcoholic botanical adaptogens is sweeping Saudi Arabia and UAE. Consumers actively search for ingredients with historic regional roots, such as Sidr, Frankincense (Luban), Pomegranate, and Rose water, blended with advanced laboratory formulation transparency.",
    tags: ["botanicals", "wellness", "saudi-shift", "trends"]
  },
  {
    id: "ar-mkt-02",
    collection: "market_kb",
    market: "Arab Markets",
    category: "advertising reviews",
    title: "Analysis of High-Performing Campaigns in the Levant and Gulf Districts",
    content: "Levant and Gulf regions show maximum engagement when stories focus on intergenerational heritage, maternal respect, and the bridging of ancient wisdom with future tech ('Vision 2030' vibes). Advertisers must deploy proud, optimistic, yet deeply modest visual codes.",
    tags: ["advertising", "narrative", "heritage", "intergenerational"]
  },

  // branding_cases
  {
    id: "ar-case-01",
    collection: "branding_cases",
    market: "Arab Markets",
    category: "regional success stories",
    title: "How 'Hind Al Oud' Captured UAE Premium Scent Market Share",
    content: "Hind Al Oud succeeded by framing perfumery not merely as product, but as personal expression of elite family legacy. The name directly leverages Al-Oud (the sacred wood resin) with Hind (an ancient Arabic female name denoting strength and beauty), creating a deep cultural resonance without orientalist tropes.",
    tags: ["case-study", "luxury", "success", "naming"]
  },
  {
    id: "ar-case-02",
    collection: "branding_cases",
    market: "Arab Markets",
    category: "packaging examples",
    title: "Almarai: Symmetrical Purity and Agricultural Trust Packaging",
    content: "Almarai uses strict symmetry and clear royal green bands with golden highlights. The integration of modern farming silhouettes framed within a classic clean crest portrays safe, high-quality nutrition. The name is literally 'The Pastures', connecting directly to rural abundance.",
    tags: ["case-study", "packaging", "abundance", "trust"]
  },

  // --- AUSTRALIAN MARKETS ---
  // cultural_kb
  {
    id: "au-cult-01",
    collection: "cultural_kb",
    market: "Australia",
    category: "ethnographic research",
    title: "Egalitarianism, Mateship, and Low-Power Distance in Australia",
    content: "Australian consumer culture is defined by low power distance, a deep-seated belief in egalitarianism ('fair go'), and distrust of overt elitism. Trust is driven by honesty, down-to-earth authenticity, humor, and self-deprecation. Pretentious or bombastic marketing backfires immediately (the 'tall poppy syndrome').",
    tags: ["mateship", "low-context", "egalitarianism", "fair-go"]
  },
  {
    id: "au-cult-02",
    collection: "cultural_kb",
    market: "Australia",
    category: "localization guides",
    title: "Avoiding Outback Stereotypes: Modern Urban-Coastal Realities",
    content: "Over 85% of Australians live in coastal, urban hubs. Avoid using hyper-rustic 'Outback cowboy', 'crocodile hunter', or 'didgeridoo' tourist cliches. Australians favor native botanical knowledge (e.g., Wattleseed, Kakadu plum, Eucalyptus) and connection to coastal environments. Indigenous motifs should never be used without direct collaboration and co-design permissions.",
    tags: ["coastal", "botanicals", "indigenous-ethics", "outback-avoidance"]
  },

  // semiotic_kb
  {
    id: "au-sem-01",
    collection: "semiotic_kb",
    market: "Australia",
    category: "color meanings",
    title: "Grounded Sun, Deep Ochres, Teal Oceans, and Olive Green Shades",
    content: "The typical Australian palette is derived directly from the landscape: olive gold (wattle), dusty eucalyptus grey-green, sun-baked sandstone orange-ochre, and ocean-foam teal. These colors evoke clean, therapeutic quality and rugged reliability. Black is accepted for high premium, but must feel tactical or matte rather than shiny and royal.",
    tags: ["olive", "teal", "ochre", "sandstone"]
  },
  {
    id: "au-sem-02",
    collection: "semiotic_kb",
    market: "Australia",
    category: "typography conventions",
    title: "Humanist Grotesk, Rounded Neobrutalist, and Tactile Serif Letterforms",
    content: "Australian packaging trends favor high legibility and natural ease. Use modern humanist sans-serifs (like Inter style or elegant custom groteskes) to signal transparent truth. Avoid dense gothic blackletter or overly delicate, rigid hairline serifs that look unapproachable and snooty.",
    tags: ["typography", "grotesk", "tactile-serif", "approachable"]
  },
  {
    id: "au-sem-03",
    collection: "semiotic_kb",
    market: "Australia",
    category: "visual motifs",
    title: "Eucalyptus Leaves, Sea Salt Geodes, and Matte Earthy Textures",
    content: "Textured paper, exposed cardboard, and raw matte finishes signify ecological honesty and physical craft. Line-drawn sketches of native gum leaves, ocean ripples, or wind-swept banksia represent artisanal high-tier design. Shiny chrome, glossy plastics, or synthetic neon finishes are actively shunned as superficial.",
    tags: ["nature", "gum-leaves", "matte-texture", "ecological"]
  },

  // market_kb
  {
    id: "au-mkt-01",
    collection: "market_kb",
    market: "Australia",
    category: "market reports",
    title: "The Rise of Australian Crafted Native Apothocary and Coastal Botanical Oils",
    content: "There is a massive demand in the Australian domestic and export market for certified organic native apothecary items. Key ingredients like Kakadu Plum (high Vitamin C), Lemon Myrtle, Finger Lime, and Macadamia are viewed as premium standard active ingredients with genuine performance.",
    tags: ["native-apothecary", "kakadu-plum", "skincare", "coastal"]
  },

  // branding_cases
  {
    id: "au-case-01",
    collection: "branding_cases",
    market: "Australia",
    category: "award-winning brands",
    title: "Aesop: Semiotic Mastery of Pharmacist Minimalism and Brown Bottle Tactility",
    content: "Melbourne-founded Aesop is the supreme template of modern Australian branding. By using amber glass bottles matching pharmacist apothecary heritage, combined with simple unvarnished black and white labels (using elegant typewriter serifs), it establishes deep credibility, intellectual humility, and luxury without pretension.",
    tags: ["aesop", "minimalism", "melbourne", "apothecary"]
  },

  // --- JAPAN MARKETS ---
  // cultural_kb
  {
    id: "jp-cult-01",
    collection: "cultural_kb",
    market: "Japan",
    category: "ethnographic research",
    title: "Wa (Harmony), Mono no Aware (Inpermanence), and Kodawari (Extreme Craft)",
    content: "Japanese consumer culture heavily values 'Wa' (collective harmony) and reliability. Trust is established through total transparency, extreme attention to detail (Kodawari), and clear traceability. Consumers look for quiet confidence rather than loud self-promotion.",
    tags: ["harmony", "kodawari", "transparency", "trust"]
  },
  // semiotic_kb
  {
    id: "jp-sem-01",
    collection: "semiotic_kb",
    market: "Japan",
    category: "color meanings",
    title: "Asymmetric Space, Indigo Blue, Sakura Pastel, and Clean Matte Charcoal",
    content: "Colors of Japanese traditional culture are muted: indigo (Ai-zome) for strength and endurance; vermillion for ceremonial energy; off-white and charcoal for minimalist beauty. Avoid pure stark white as the only element on simple layouts as it can represent mourning (unless balanced with red or wood textures).",
    tags: ["indigo", "vermillion", "charcoal", "asymmetry"]
  }
];

export class InMemoryVectorDB {
  private records: KBRecord[];

  constructor(initialData: KBRecord[] = INITIAL_KB) {
    this.records = [...initialData];
  }

  getAll(): KBRecord[] {
    return this.records;
  }

  insert(record: Omit<KBRecord, 'id'>): KBRecord {
    const id = `custom-${record.collection.slice(0, 3)}-${Date.now()}`;
    const newRecord: KBRecord = { id, ...record };
    this.records.push(newRecord);
    return newRecord;
  }

  delete(id: string): boolean {
    const startLength = this.records.length;
    this.records = this.records.filter(r => r.id !== id);
    return this.records.length < startLength;
  }

  /**
   * Simulates full vector semantic search:
   * 1. Query expansion (by injecting related terms based on target market or category)
   * 2. Search scoring (TF-IDF/token-overlap/tag-match)
   * 3. Retrieves top 10 chunks
   * 4. Re-ranks top 5
   * 5. Outputs top 3 evidence items
   */
  search(collection: KBCollection, query: string, market: string): {
    evidenceItems: KBRecord[];
    logs: string[];
  } {
    const logs: string[] = [];
    logs.push(`Initializing Vector collection lookup [${collection}] for market [${market}]`);

    // Step 1: Query Expansion
    const expandedQueryKeywords = new Set<string>(
      query.toLowerCase().split(/[\s,.\-_/]+/).filter(w => w.length > 2)
    );
    
    // Auto-inject cultural terms based on market
    if (market.toLowerCase().includes("arab") || market.toLowerCase().includes("middle east")) {
      expandedQueryKeywords.add("arab");
      expandedQueryKeywords.add("gcc");
      expandedQueryKeywords.add("saudi");
      expandedQueryKeywords.add("luxury");
      expandedQueryKeywords.add("trust");
    } else if (market.toLowerCase().includes("austral") || market.toLowerCase().includes("nz")) {
      expandedQueryKeywords.add("australia");
      expandedQueryKeywords.add("mateship");
      expandedQueryKeywords.add("botanical");
      expandedQueryKeywords.add("coastal");
      expandedQueryKeywords.add("authentic");
    } else if (market.toLowerCase().includes("japan") || market.toLowerCase().includes("asia")) {
      expandedQueryKeywords.add("japan");
      expandedQueryKeywords.add("harmony");
      expandedQueryKeywords.add("kodawari");
      expandedQueryKeywords.add("craft");
    }
    
    logs.push(`Step 1: Expanded query keywords: [${Array.from(expandedQueryKeywords).join(', ')}]`);

    // Step 2: Retrieve records matching collection and filter by market
    const collectionFiltered = this.records.filter(r => r.collection === collection);
    
    // Scoring records
    interface ScoredRecord {
      record: KBRecord;
      score: number;
    }

    const scored: ScoredRecord[] = collectionFiltered.map(rec => {
      let score = 0;
      const titleLower = rec.title.toLowerCase();
      const contentLower = rec.content.toLowerCase();
      const marketLower = rec.market.toLowerCase();
      const qMarketLower = market.toLowerCase();

      // Prioritize same market
      if (marketLower === qMarketLower || 
          (qMarketLower.includes("arab") && marketLower.includes("arab")) ||
          (qMarketLower.includes("australia") && marketLower.includes("australia")) ||
          (qMarketLower.includes("japan") && marketLower.includes("japan"))) {
        score += 30;
      }

      // Exact matches in title or content
      expandedQueryKeywords.forEach(word => {
        if (titleLower.includes(word)) {
          score += 15;
        }
        if (contentLower.includes(word)) {
          score += 10;
        }
        if (rec.tags.some(tag => tag.toLowerCase().includes(word))) {
          score += 20;
        }
      });

      return { record: rec, score };
    }).filter(s => s.score > 0);

    // Sort by score
    scored.sort((a, b) => b.score - a.score);

    // Step 3: Retrieve top 10 chunks
    const top10 = scored.slice(0, 10);
    logs.push(`Step 2 & 3: Vector similarity search matched ${scored.length} nodes. Retrieved top 10 candidate chunks.`);
    top10.forEach((item, index) => {
      logs.push(`  Candidates [id: ${item.record.id}] score: ${item.score.toFixed(1)}`);
    });

    // Step 4: Re-rank top 5 chunks
    // Give bonus to documents that have rich ethnographic/semiotic details or matching tags
    const toRerank = top10.slice(0, 5);
    const reranked = toRerank.map(item => {
      let rerankBonus = 0;
      // High-quality detailed articles get a minor boost
      if (item.record.content.length > 250) {
        rerankBonus += 5;
      }
      // Re-ranking logic matching query core topics
      if (query.toLowerCase().includes("color") && item.record.category.includes("color")) {
        rerankBonus += 15;
      }
      if (query.toLowerCase().includes("symbol") && item.record.category.includes("motif")) {
        rerankBonus += 15;
      }
      if (query.toLowerCase().includes("typograph") && item.record.category.includes("typograph")) {
        rerankBonus += 15;
      }
      return {
        record: item.record,
        finalScore: item.score + rerankBonus
      };
    }).sort((a, b) => b.finalScore - a.finalScore);

    logs.push(`Step 4: Re-ranked top 5 chunks based on context alignment. Top 3 re-balanced ranking output:`);
    reranked.slice(0, 3).forEach((item, i) => {
      logs.push(`  [Rank ${i+1}] ID: ${item.record.id} | final score: ${item.finalScore.toFixed(1)}`);
    });

    // Step 5: Return top 3 elements
    const top3 = reranked.slice(0, 3).map(item => item.record);
    logs.push(`Step 5: Handed off top ${top3.length} matching knowledge records to generation context.`);

    return {
      evidenceItems: top3,
      logs
    };
  }
}

export const dbInstance = new InMemoryVectorDB();
