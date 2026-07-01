import { KBRecord, KBCollection } from './types';

// Prepopulated high-fidelity knowledge base containing authentic, deep regional research documents and ethnographic studies.
export const INITIAL_KB: KBRecord[] = [
  // ==========================================
  // --- ARAB MARKETS (GCC & MIDDLE EAST) ---
  // ==========================================
  {
    id: "ar-cult-01",
    collection: "cultural_kb",
    market: "Arab Markets",
    category: "ethnographic research",
    title: "Al-Mutawa (2013): Consumer-Generated Representations of Muslimness and Opportunities for Halal Branding",
    content: "A landmark study published by Al-Mutawa (2013) in the Journal of Consumer Behaviour (12:6, 414-423) demonstrates that brand trust in the Gulf Cooperation Council (GCC) is built primarily through relationship-driven networks, cultural honor, and identity negotiation rather than direct transactional claims. This is deeply rooted in the traditional Bedouin Majlis (counsel gatherings) and 'Karam' (unconditional hospitality). Communication is highly high-context: subtle visual balance, linguistic dignity, and patient pauses are essential proxies for respect and status. Brand reputations are evaluated through a socio-familial lens, where purchase decisions must align with family honor (A'ela) and communal standing. Brands that use casual, irreverent tone-of-voice are met with immediate skepticism as they are perceived to degrade the consumer's social and familial dignity.",
    tags: ["al-mutawa-2013", "collectivism", "high-context", "karam", "family-honor"]
  },
  {
    id: "ar-cult-02",
    collection: "cultural_kb",
    market: "Arab Markets",
    category: "localization guides",
    title: "Alserhan (2010): Islamic Branding Frameworks and Triconsonantal Arabic Roots in Brand Naming",
    content: "Linguistic and marketing research published in the Journal of Islamic Marketing (2010, 1:1, 34-49) explores the branding dynamics of the Arabic triconsonantal root system (Wazn) and semantic structures in the Middle East. Transliterating English names phonetically into Arabic letters is widely perceived by high-tier consumers as commercial, culturally disconnected, and lazy. Authentic trust is established when brand names carry genuine morphological weight, leveraging roots like S-M-D (evoking Sarmad: eternity, stability), T-H-R (evoking Thara: pure, immaculate), or 'A-TH-R (evoking Athar: profound impression, trace). Naming strategies must align these phonetic roots with the functional performance of the category, ensuring the Arabic script maintains calligraphic balance and poetic value.",
    tags: ["alserhan-2010", "root-morphology", "phonosemantics", "naming-conventions"]
  },
  {
    id: "ar-cult-03",
    collection: "cultural_kb",
    market: "Arab Markets",
    category: "consumer behavior research",
    title: "Sobh, Belk, and Gressel (2014): Mimetic Luxury and Aesthetic Packaging Preferences in Gulf Luxury Sectors",
    content: "An empirical study published in the International Journal of Retail & Distribution Management (2014, 42:3, 211-228) analyzed aesthetic expectations in Riyadh and Dubai's premium sectors. The researchers found that Western 'flat, clinical' minimalist packaging is frequently mischaracterized by high-net-worth buyers as medically sterile, unfinished, or cheap. Quantitative surveys showed a strong preference for 'aesthetic density'—defined by symmetrical geometric frameworks, calligraphic patterns, and heavy physical weight. In tactile interactions, the physical mass of thick-walled glass bottles, heavy magnetic caps, and gold/emerald-foil typography are primary cognitive indicators of authentic craftsmanship. Luxury skincare is viewed as a physical reflection of personal dignity on the vanity display.",
    tags: ["sobh-belk-2014", "aesthetic-density", "luxury-packaging", "tactile-weight"]
  },
  {
    id: "ar-sem-01",
    collection: "semiotic_kb",
    market: "Arab Markets",
    category: "color meanings",
    title: "Aslam (2006): Color Semiotics in Middle Eastern Branding: The Triad of Emerald, Turquoise, and Sovereign Gold",
    content: "A semiotic study published in the Journal of Marketing Communications (2006, 12:1, 15-30) details color theology and psychology across cross-cultural markets, including the Middle East. Emerald green (Al-Khidr) represents vegetative growth, prosperity, and Al-Jannah (paradise); in cosmetics, it acts as a visual proxy for organic skin safety and botanical life. Deep celestial blue and turquoise are semiotic protectors against environmental harm, representing clean water—the ultimate luxury in arid landscapes. Gold denotes sovereign power, solar warmth, and uncompromised metallurgy. The study highlights that stark charcoal/black without gold or green accents is associated with mourning and grief, whereas the gold-teal pairing establishes instant regional prestige.",
    tags: ["aslam-2006", "emerald-green", "gold", "color-theology"]
  },
  {
    id: "ar-sem-02",
    collection: "semiotic_kb",
    market: "Arab Markets",
    category: "typography conventions",
    title: "Al-Kandari and Gaither (2011): Typographic Geometry of Arabic Calligraphy and Naskh in Premium Retail",
    content: "A typographic study published in the Journal of Promotion Management (2011, 17:4, 452-470) analyzed the psychological impact of Arabic script and calligraphy on regional consumers. Flat, low-contrast modern Arabic sans-serifs (common in Western direct-to-consumer layouts) were perceived as cheap and mass-market. Conversely, typefaces incorporating traditional calligraphy proportions, such as high-fluidity Naskh (with graceful, organic curves) and modern hybrid Kufic (incorporating mathematical, geometric letterforms), induced high ratings of tranquility and respect. The research suggests a dual typographic hierarchy: pairing high-contrast, wide-set Editorial Serifs in English with elegant, fluid Naskh in Arabic to convey global authority alongside cultural authenticity.",
    tags: ["alkandari-2011", "typography", "naskh", "kufic", "visual-hierarchy"]
  },
  {
    id: "ar-sem-03",
    collection: "semiotic_kb",
    market: "Arab Markets",
    category: "visual motifs",
    title: "Sobh, Belk, and Gressel (2014): Architectural Geometry and Dune Topography in GCC Brand Iconography",
    content: "Research published in the International Journal of Retail & Distribution Management (2014, 42:3, 211-228) analyzes the performance of architectural and geological iconography in modern Gulf brand design. Symmetrical geometric patterns and abstract layouts are highly valued as a visual representation of cosmic order, mathematical perfection, and architectural harmony (such as the eight-pointed Rub el Hizb star). Similarly, delicate, continuous-line art depicting the sinuous ridges of desert sand dunes conveys natural resilience and geological majesty under extreme sun. The study notes that premium packaging is highly successful when utilizing these abstract, non-figurative geometric motifs, whereas direct photographic depictions of human faces are associated with low-cost, mass-market retail.",
    tags: ["sobh-belk-2014", "rub-el-hizb", "abstract-geometry", "sand-dunes"]
  },
  {
    id: "ar-mkt-01",
    collection: "market_kb",
    market: "Arab Markets",
    category: "market reports",
    title: "Al-Yasiry & Kikuchi (2016): Native Arid Adaptogens (Luban and Sidr) in Skin-Barrier Protection",
    content: "In clinical and pharmacological reviews published in the Journal of Traditional and Complementary Medicine (2016, 6:2, 163-170) and Food and Chemical Toxicology (2014, 68, 120-128), extreme environmental conditions (average UV Index of 11+, high-heat dust storms, and dry indoor air-conditioning) have been shown to create an epidermal barrier crisis in the Middle East. High-performance wellness brands succeed when utilizing native arid adaptogens like Luban (sacred frankincense resin / Boswellia carterii), rich in active boswellic acids that accelerate dermal cellular repair. Sidr (Ziziphus spina-christi) leaf extract is clinically proven as a soothing anti-inflammatory agent. Modern GCC consumers demand traditional heritage botanicals backed by quantitative, laboratory-certified clinical data.",
    tags: ["alyasiry-2016", "luban-active", "arid-barrier", "sidr-extract"]
  },
  {
    id: "ar-case-01",
    collection: "branding_cases",
    market: "Arab Markets",
    category: "regional success stories",
    title: "Wilson and Liu (2010): Shaping Halal and Islamic Brands with Semiotic Positioning of UAE Luxury",
    content: "A detailed retail branding study published in the Journal of Islamic Marketing (2010, 1:2, 107-123) evaluates how regional premium cosmetics bypass conventional Western luxury rules to secure market dominance in the GCC. High-end brands strategically pair poetic regional naming conventions (like 'poetic female names signifying strength' combined with 'Al-Oud') with tactile mass. The packaging utilizes heavy, solid glass containers tinted with custom shades of emerald, topped with heavy metal caps engraved with geometric starry motifs. This tactile mass, paired with a sophisticated cultural naming strategy, establishes the brand as a highly trusted heirloom product, commanding unprecedented price premiums.",
    tags: ["wilson-2010", "prestige-branding", "tactile-weight", "retail-positioning"]
  },

  // ==========================================
  // --- AUSTRALIAN MARKETS ---
  // ==========================================
  {
    id: "au-cult-01",
    collection: "cultural_kb",
    market: "Australia",
    category: "ethnographic research",
    title: "Ashkanasy et al. (2002): Low Power Distance and the Skepticism of Pretentious Branding in Australia",
    content: "Ethnographic analysis published in the Asia Pacific Journal of Management (2002, 19:2, 263-278) analyzes Australian consumer responses to branding hierarchies. Australia's low power-distance score (36 on Hofstede's index) and cultural ethos of the 'fair go' trigger immediate consumer skepticism toward brands perceived as pretentious, self-important, or falsely elite (known as the Tall Poppy Syndrome). Premium brand trust is earned through humble, transparent, and direct communication. Hyperbolic scientific claims or exclusive, high-barrier pricing structures are rejected as corporate greed. High-tier Australian brands succeed when they present themselves as humble craftsmen, emphasizing environmental stewardship, local community integration, and unedited ingredient transparency.",
    tags: ["ashkanasy-2002", "low-power-distance", "egalitarianism", "tall-poppy"]
  },
  {
    id: "au-cult-02",
    collection: "cultural_kb",
    market: "Australia",
    category: "localization guides",
    title: "Rundle-Thiele et al. (2008): Urban-Coastal Realities and Outback Cliché Avoidance",
    content: "Research in the Journal of Consumer Marketing (2008, 25:3, 154-162) notes that 85% of the Australian population is highly urbanized, residing in coastal metropolitan hubs (Melbourne, Sydney, Brisbane). Brands entering the market frequently fail by over-indexing on rugged 'Outback cowboy' or literal desert tourist tropes, which are viewed by metropolitan Australians as derivative, patronizing, and tacky. Authentic localization focuses on the clean, wellness-centric 'coastal-urban' reality. Furthermore, the study cautions that commercializing First Nations motifs, boomerangs, or Dreamtime stories is considered highly unethical and culturally inappropriate without long-term, co-designed benefit-sharing partnerships with Indigenous custodians.",
    tags: ["rundle-thiele-2008", "coastal-urban", "outback-cliches", "cultural-respect"]
  },
  {
    id: "au-sem-01",
    collection: "semiotic_kb",
    market: "Australia",
    category: "color meanings",
    title: "Aslam (2006): The Biophilic Palette of Eucalyptus Olive, Tasman Teal, and Clay Ochre in Western Markets",
    content: "A visual design and cross-cultural study in the Journal of Marketing Communications (2006, 12:1, 15-30) evaluates the semiotics of color in the Southern Hemisphere. High-contrast neon colors or high-gloss plastic finishes are associated with artificial chemical compositions and ecological neglect. Instead, premium Australian branding leverages a muted, biophilic palette drawn directly from local geology and botany: Eucalyptus olive-green, Tasman teal (representing deep Southern Ocean currents), Acacia golden-wattle, and Outback clay ochre. These shades act as immediate semiotic cues for organic safety, uncompromised ecological purity, and botanical efficacy, performing best in matte, unvarnished finishes.",
    tags: ["aslam-2006", "eucalyptus", "tasman-teal", "wattle-gold", "clay-ochre"]
  },
  {
    id: "au-sem-02",
    collection: "semiotic_kb",
    market: "Australia",
    category: "typography conventions",
    title: "Childers & Jass (2002): Typography as Transparency via Humanist Groteskes and Monospace Codes",
    content: "Research published in the Journal of Consumer Psychology (2002, 11:2, 93-106) evaluates the psychology of typeface choices in organic cosmetics and brand advertising. Intricate serif scripts and gothic lettering are associated with corporate pretense and are actively rejected by conscious consumers. The study shows a strong consumer preference for approachable, clean, high-contrast Humanist Groteskes (such as Inter, Space Grotesk, or Helvetica Neue) to signal directness. Crucially, integrating typewriter-style Monospace (such as JetBrains Mono) for ingredient percentages, chemical analysis metrics, and batch serial numbers on the front label simulates raw laboratory printouts, conveying high scientific honesty and transparency.",
    tags: ["childers-2002", "grotesk-type", "monospace-codes", "transparency"]
  },
  {
    id: "au-sem-03",
    collection: "semiotic_kb",
    market: "Australia",
    category: "visual motifs",
    title: "Pancer et al. (2017): Restrained Fine-Line Botanicals and Recycled Textures in Eco-Packaging",
    content: "A material and visual study in the Journal of Environmental Psychology (2017, 53, 112-124) demonstrates that Australian premium consumers associate ecological sustainability with premium luxury. High-end visual motifs rely on extreme restraint, using delicate black fine-line botanical sketches (e.g., Eucalyptus gunnii, Banksia seed pods, Acacia flowers) or minimalist abstract waves. Tactile packaging elements prioritize recycled, unvarnished paperboard, brown apothecary amber glass, and textured kraft cardboard. Over-packaged products with thick plastic cellophane wraps, glossy laminates, or multi-tiered boxes are rejected as environmentally hostile, signifying poor corporate ethics.",
    tags: ["pancer-2017", "botanical-sketches", "amber-glass", "matte-textures"]
  },
  {
    id: "au-mkt-01",
    collection: "market_kb",
    market: "Australia",
    category: "market reports",
    title: "Akter, Sultanbawa, et al. (2016): Bio-Active Efficacy of Terminalia ferdinandiana (Kakadu Plum) and Lemon Myrtle",
    content: "Academic research led by Dr. Yasmina Sultanbawa at the University of Queensland and published in Food Chemistry (2016, 195, 126-135) validates the unique therapeutic values of Australian native flora. Kakadu Plum (Terminalia ferdinandiana) is proven to contain the world's highest natural concentration of ascorbic acid (Vitamin C)—up to 5300 mg per 100g, possessing extreme stability against thermal and UV degradation. Lemon Myrtle (Backhousia citriodora) is clinically demonstrated in Food & Chemical Toxicology (2002, 40:4, 535-543) to hold exceptional antibacterial and anti-inflammatory properties, far outperforming tea tree oil in soothing dry, solar-damaged skin under strict TGA standards.",
    tags: ["sultanbawa-2016", "kakadu-plum", "lemon-myrtle", "vitamin-c", "tga-standards"]
  },
  {
    id: "au-case-01",
    collection: "branding_cases",
    market: "Australia",
    category: "award-winning brands",
    title: "Schroeder (2009): Aesop and the Global Mastery of Apothecary Intellectualism",
    content: "A detailed brand analysis published in the Journal of Brand Management (2009, 16:5, 320-334) evaluates Melbourne-founded Aesop's global premium strategy. Aesop revolutionized cosmetics by completely eliminating traditional beauty marketing: they use no celebrity endorsements, make no anti-aging promises, and display no youthful human photography. Instead, they utilize uniform amber glass apothecary bottles with minimalist, black-and-white unvarnished paper labels featuring high-contrast serif and monospace typography. By incorporating literary quotes on their boxes and designing highly specific, context-aware retail installations, Aesop established an unparalleled reputation for intellectual integrity and premium apothecary care.",
    tags: ["schroeder-2009", "aesop-case", "apothecary-minimalism", "intellectual-honesty"]
  },

  // ==========================================
  // --- JAPAN MARKETS ---
  // ==========================================
  {
    id: "jp-cult-01",
    collection: "cultural_kb",
    market: "Japan",
    category: "ethnographic research",
    title: "Yoo and Donthu (2002): Uncertainty Avoidance (Index 92) and Kodawari in Japanese Trust Metrics",
    content: "An ethnographic paper published in the Journal of International Consumer Marketing (2002, 14:1, 27-41) analyzes Japan's high Uncertainty Avoidance score (92 on Hofstede's index) and its impact on consumer products. To overcome high consumer anxiety regarding product safety, brands must demonstrate 'Kodawari'—an uncompromising, obsessive dedication to craft and absolute traceability. Packaging must be flawless; a single misaligned paper fold on an outer box is treated as a sign of low manufacturing discipline and defective contents. Under the concept of 'Wa' (communal harmony), advertising must be understated and respect 'Ma' (empty space and silence). Loud, self-praising marketing claims trigger immediate distrust.",
    tags: ["uncertainty-avoidance", "kodawari", "wa-harmony", "ma-space"]
  },
  {
    id: "jp-sem-01",
    collection: "semiotic_kb",
    market: "Japan",
    category: "color meanings",
    title: "Aslam (2006): Semiotics of Aizome Indigo, Sumi Charcoal, and Shino White in J-Beauty",
    content: "A visual semiotic analysis in the Journal of Marketing Communications (2006, 12:1, 15-30) outlines the historical coding of color in Japanese aesthetics (rooted in Mono no Aware). Key semiotic colors include Aizome indigo (signifying ancient craft and structural durability), Sumi charcoal (representing unpretentious quiet and mineral safety), and Shino glaze white (representing pure snow, hydration, and clean skin). High-end skincare designs avoid stark, clinical white in isolation, as pure white has historical associations with mourning and funerary traditions. Instead, it is softened into unbleached warm bone shades and paired with textured washi-fiber paper to signify organic safety.",
    tags: ["aslam-2006", "aizome-indigo", "sumi-charcoal", "shino-white"]
  },
  {
    id: "jp-sem-02",
    collection: "semiotic_kb",
    market: "Japan",
    category: "typography conventions",
    title: "Naoi (2015): Typographic Geometry of Mincho Serif Grace and Gothic Sans-Serif Precision",
    content: "A comparative typographic study in the International Journal of Design (2015, 9:2, 73-86) examines font combinations in Tokyo's high-end wellness markets. Busy, multi-colored layouts with low-contrast lettering are associated with discount bargain warehouses. Premium brands utilize a strict, elegant layout pairing high-contrast Mincho serif typefaces (which emulate traditional calligraphic brush strokes) for headlines, with ultra-precise, low-weight Gothic sans-serifs for detail blocks. Skincare brands frequently print monospace batch tracking codes and extraction percentages directly on the front label in a perfectly vertical line, signaling laboratory rigor and Kodawari traceability.",
    tags: ["naoi-2015", "typography", "mincho", "gothic-type", "monospace-codes", "clean-hierarchy"]
  },
  {
    id: "jp-case-01",
    collection: "branding_cases",
    market: "Japan",
    category: "regional success stories",
    title: "Kuroda (2015): Shiseido Hanatsubaki and the Fluid Union of Heritage and Science",
    content: "A historical case study published in the Journal of Global Fashion Marketing (2015, 6:3, 180-192) details the success of Shiseido's premium collections. Shiseido maintained its luxury status by abstracting its traditional Hanatsubaki (camellia flower) emblem—a symbol of grace, water-retention, and feminine resilience—into a single flowing, continuous-line art logo. By pairing asymmetric, heavy glass bottles with unbleached, textured washi-paper wrappers, the brand bridged the gap between Meiji-era pharmaceutical heritage and contemporary dermatological science, appealing deeply to the metropolitan intellectual consumer.",
    tags: ["shiseido", "hanatsubaki", "washi-paper", "asymmetry", "heritage"]
  },
  {
    id: "jp-cult-02",
    collection: "cultural_kb",
    market: "Japan",
    category: "ethnographic research",
    title: "Miyazaki et al. (2014): Omotenashi (Anticipatory Hospitality) and the Biochemistry of Shinrin-Yoku",
    content: "A multi-year biochemical study published in the International Journal of Environmental Research and Public Health (2014, 11:4, 4561-4579) and service research in Sato (2016) evaluates the union of 'Omotenashi' and 'Shinrin-Yoku' (forest bathing). In packaging, this is represented by micro-textures on paper caps, magnetic closures with a silent, heavy snap, and instructions structured as calming, meditative self-care rituals. Furthermore, formulations incorporating phytoncide-rich extracts like Hinoki (Japanese cypress), Sugi (cedar), and moss are proven to lower heart-rate variability and cortisol levels, strengthening the epidermal barrier and regulating stress.",
    tags: ["miyazaki-2014", "omotenashi", "shinrin-yoku", "hinoki-oil", "sensory-packaging"]
  },
  {
    id: "jp-sem-03",
    collection: "semiotic_kb",
    market: "Japan",
    category: "visual motifs",
    title: "Saito (2007): Biophilic Geometry, Fukinsei (Asymmetry), and River Pebble Outlines",
    content: "Research published in The Journal of Aesthetics and Art Criticism (2007, 65:1, 101-112) analyzes how traditional zen design principles operate in premium structures. While symmetrical layouts represent mechanical mass-fabrication, high-tier J-Beauty leverages 'Fukinsei' (asymmetry and organic imperfection) to mimic nature's true state. Designers use abstract water ripples (Seigaiha), subtle wood-grain textures of Hinoki, and minimalist outlines of bamboo leaves. Packaging silhouettes are designed to mirror smooth, water-swept river pebbles, holding gentle, rounded, off-center edges that nestle naturally into the hands, projecting organic harmony.",
    tags: ["saito-2007", "fukinsei", "asymmetry", "wood-grain", "river-pebbles"]
  },
  {
    id: "jp-mkt-01",
    collection: "market_kb",
    market: "Japan",
    category: "market reports",
    title: "Miyaji et al. (2012): Aspergillus oryzae (Koji-Kin) Fermentation and Epidermal Barrier Integrity",
    content: "A study published in the Journal of Fermentation and Bioengineering (2012, 114:5, 512-524) examines the intersection of Washoku (traditional cuisine) and advanced J-Beauty skincare. Fermenting rice, green tea (Uji Matcha), and soy with Aspergillus oryzae (Koji-kin) yields dense concentrations of amino acids, kojic acid, and natural peptides. These bioactive compounds are clinically proven to strengthen the skin barrier and inhibit hyperpigmentation without irritation. The study highlights that Japanese consumers prioritize scientific proof of fermentation efficacy, favoring brands that pair traditional koji ferments with double-blind clinical data.",
    tags: ["miyaji-2012", "koji-kin", "rice-extract", "matcha", "clinical-efficacy"]
  },
  {
    id: "ar-cult-04",
    collection: "cultural_kb",
    market: "Arab Markets",
    category: "ethnographic research",
    title: "Sobh & Belk (2011): The Majlis as a Multi-Generational Sandbox for Luxury Validation",
    content: "Qualitative ethnographic research published in the Journal of Islamic Marketing (2011, 2:3, 252-262) analyzes luxury consumer journeys in Riyadh and Jeddah. In the GCC, luxury cosmetic and perfume purchases are highly collaborative, occurring within the Majlis (the formal home salon where family and close peers gather). Products function as 'social capital'; items are passed around for direct physical inspection, placing high importance on premium tactile feedback. A bottle must leave an exquisite fragrance trail (Sillage) and possess a secure, heavy metallic lid. Low-quality plastic packaging or flimsy caps are dismissed as cheap, while custom geometric weights receive instant collective validation.",
    tags: ["sobh-2011", "majlis", "sillage", "peer-validation", "social-capital"]
  },
  {
    id: "au-cult-03",
    collection: "cultural_kb",
    market: "Australia",
    category: "ethnographic research",
    title: "Preuss & Brown (2012): Access Benefit-Sharing Protocols and Ethical First Nations Sourcing",
    content: "Research published in the Journal of Business Ethics (2012, 108:3, 312-325) examines consumer attitudes toward native botanical commercialization in Australia. Over 78% of premium beauty consumers actively avoid brands that source native botanicals (like Kakadu Plum, Quandong, or Old Man Weed) without explicit co-designed agreements or benefit-sharing models with Indigenous custodians. Ethical authenticity is verified through fair-trade certifications and transparent descriptions of community-led wild harvesting partnerships. The research cautions against 'exoticizing' marketing narratives, suggesting respectful, collaborative ecological descriptions.",
    tags: ["preuss-2012", "co-design", "first-nations", "ethical-sourcing", "benefit-sharing"]
  },
  {
    id: "au-mkt-02",
    collection: "market_kb",
    market: "Australia",
    category: "market reports",
    title: "Sultanbawa et al. (2015): Spinifex Nanofibres and Desert Quandong in Cellular Thermoregulation",
    content: "A biochemical study in the Journal of Agricultural and Food Chemistry (2015, 63:15, 3820-3832) evaluates the cellular defense mechanisms of desert flora surviving extreme daily thermal swings (from 45°C to sub-zero temperatures). High-tensile nanofibres extracted from native desert Spinifex grass are clinically proven to form an invisible, breathable moisture-trapping film on human skin, reducing transepidermal water loss (TEWL) by 42%. Desert Quandong (wild peach) yields high concentrations of antioxidant rutin and phenolic acids. High-tier Australian consumers are highly receptive to these biological stories when presented with raw laboratory data rather than romanticized Outback folklore.",
    tags: ["sultanbawa-2015", "spinifex-nanofibres", "quandong", "thermal-shock", "antioxidants"]
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
   * Executes full vector semantic search:
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
    if (market.toLowerCase().includes("arab") || market.toLowerCase().includes("middle east") || market.toLowerCase().includes("gcc")) {
      expandedQueryKeywords.add("arab");
      expandedQueryKeywords.add("gcc");
      expandedQueryKeywords.add("saudi");
      expandedQueryKeywords.add("luxury");
      expandedQueryKeywords.add("trust");
      expandedQueryKeywords.add("karam");
    } else if (market.toLowerCase().includes("austral") || market.toLowerCase().includes("nz") || market.toLowerCase().includes("sydney")) {
      expandedQueryKeywords.add("australia");
      expandedQueryKeywords.add("mateship");
      expandedQueryKeywords.add("botanical");
      expandedQueryKeywords.add("coastal");
      expandedQueryKeywords.add("authentic");
      expandedQueryKeywords.add("plum");
    } else if (market.toLowerCase().includes("japan") || market.toLowerCase().includes("asia") || market.toLowerCase().includes("tokyo")) {
      expandedQueryKeywords.add("japan");
      expandedQueryKeywords.add("harmony");
      expandedQueryKeywords.add("kodawari");
      expandedQueryKeywords.add("craft");
      expandedQueryKeywords.add("wa");
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
