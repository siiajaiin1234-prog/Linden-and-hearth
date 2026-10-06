import { Article } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'art-of-dial-in',
    slug: 'the-art-of-the-dial-in-morning-calibration',
    title: 'The Art of the Dial-In: Calibrating Espresso Every Morning',
    subtitle: 'Why atmospheric pressure, grinder burr temperature, and bean degassing dictate your first shot.',
    category: 'Coffee Science',
    author: {
      name: 'Julian Vance',
      role: 'Head of Coffee & Quality',
    },
    date: 'October 2, 2026',
    readTime: '5 min read',
    excerpt: 'Before our front doors open at 7:00 AM, our baristas pull anywhere from four to eight test shots. Here is the meticulous science behind finding the golden ratio every single sunrise.',
    content: [
      'Every morning at 6:15 AM, the café is silent except for the gentle hum of our water boilers. Before any customer orders their first cortado, our baristas engage in the most critical ritual of the day: dialing in the espresso.',
      'Coffee is a hygroscopic organism. A shift in overnight ambient humidity from 42% to 65% swells the cellular matrix of the roasted grounds. If we ran yesterday’s grinder setting, water would channel through the puck in eighteen seconds, producing an astringent, sour cup with sunken crema.',
      'We begin with our baseline formula: 19.5 grams of dry coffee dose, yielding 42 grams of liquid espresso in 27 to 30 seconds at 9 bars of hydraulic pressure. We evaluate tactile weight, initial sweetness on the tip of the tongue, and the finish across the back palate.',
      'If the extraction tastes overly sharp or grassy, we grind finer by half a notch. If it tastes dry or bitter like walnut skins, we loosen the grind burrs. Only when the cup delivers stone fruit sweetness and a buttery cocoa finish do we open the doors to the neighborhood.'
    ],
    tastingOrKeyTakeaway: 'Key Takeaway: Espresso recipe calibration is dynamic, not static. Always calibrate dose, grind size, and contact time against taste rather than numbers alone.',
    tags: ['Espresso', 'Dial-In', 'Barista Craft', 'Extraction']
  },
  {
    id: 'water-chemistry-matters',
    slug: 'why-water-chemistry-matters-more-than-the-roast',
    title: 'Why Water Chemistry Matters More Than the Roast',
    subtitle: 'The unseen minerals—magnesium, calcium, and bicarbonate—that extract liquid gold.',
    category: 'Coffee Science',
    author: {
      name: 'Maya Lin',
      role: 'Roastery Lab Chemist',
    },
    date: 'September 24, 2026',
    readTime: '6 min read',
    excerpt: 'Your brewed coffee is 98.6% water. If your mineral balance is off, even the finest Gesha from Panama will taste flat, chalky, or unpleasantly biting.',
    content: [
      'In specialty coffee circles, we spend countless hours discussing origin terroir, elevation, anaerobic fermentation, and roaster airflow curves. Yet 98.6% of what sits in your cup is plain water.',
      'Pure distilled or reverse-osmosis water is ironically terrible at making coffee. Without divalent cations, water lacks the chemical affinity needed to bond with flavor compounds like chlorogenic acids, floral terpenes, and delicate fruit esters.',
      'Magnesium is our primary flavor driver: its high charge density bonds tenaciously to oxygen-rich aroma compounds, accentuating vibrant berry and floral notes. Calcium, meanwhile, amplifies creamy tactile body and chocolate mid-palates.',
      'Bicarbonate serves as the buffer. Too little buffer, and the natural malic acidity in high-grown coffees will taste like caustic lemon juice. Too much buffer, and the acidity is completely neutralized, leaving a dull, chalky cup. At Linden & Hearth, we remineralize our water to 125 ppm total dissolved solids with a strict 40 ppm carbonate hardness.'
    ],
    tastingOrKeyTakeaway: 'Target mineral ratio: ~70 ppm Magnesium (for fruit aromatics), ~30 ppm Calcium (for body), and ~40 ppm Bicarbonate buffer.',
    tags: ['Water Chemistry', 'Extraction Science', 'Brewing', 'TDS']
  },
  {
    id: 'sourcing-huila-colombia',
    slug: 'journey-to-huila-direct-trade-alvarez-family',
    title: 'Journey to Huila: Direct Trade with the Alvarez Family',
    subtitle: 'Three generations cultivating Pink Bourbon at 1,850 meters above sea level.',
    category: 'Origin & Sourcing',
    author: {
      name: 'Julian Vance',
      role: 'Head of Coffee & Quality',
    },
    date: 'September 15, 2026',
    readTime: '7 min read',
    excerpt: 'We spent two weeks on the steep slopes of San Agustín visiting Finca La Esperanza. Here is what genuine direct-trade partnership looks like beyond marketing buzzwords.',
    content: [
      'The dirt roads winding up through San Agustín in southern Huila are flanked by sheer green ravines and cascading mountain streams. Here, at 1,850 meters elevation, Don Hernando Alvarez and his daughter Sofia oversee Finca La Esperanza.',
      'Direct trade shouldn’t just mean buying green coffee and printing a farmer’s portrait on a bag. For us, it means multi-year purchasing commitments at 2.8 times the fair-trade baseline price, regardless of the volatile New York C-market futures contract.',
      'This harvest, Sofia invested in covered parabolic drying beds and solar-powered Brix refractometers to harvest cherries at peak sugar density (22° Brix). The result is our flagship Pink Bourbon microlot: luminous notes of red apple crisp, panela, and white peach.',
      'When you sip our daily batch brew or enjoy our espresso, you are directly supporting soil regeneration practices and educational grants for the local San Agustín agricultural collective.'
    ],
    tastingOrKeyTakeaway: 'Origin Details: Finca La Esperanza, Huila, Colombia · Altitude: 1,850 MASL · Variety: Pink Bourbon · Process: Fully Washed 36hr Fermentation.',
    tags: ['Direct Trade', 'Colombia', 'Origin', 'Pink Bourbon']
  },
  {
    id: 'anaerobic-fermentation',
    slug: 'the-anaerobic-revolution-wild-fermentation-coffee',
    title: 'The Anaerobic Revolution: How Fermentation Reshaped Specialty Coffee',
    subtitle: 'Oxygen-deprived tanks and wild yeasts unlock wild tropical flavors previously unseen.',
    category: 'Coffee Science',
    author: {
      name: 'Maya Lin',
      role: 'Roastery Lab Chemist',
    },
    date: 'September 8, 2026',
    readTime: '5 min read',
    excerpt: 'How wine-making and artisanal beer techniques migrated into coffee processing mills across Ethiopia, Costa Rica, and Colombia.',
    content: [
      'A decade ago, coffee processing was viewed primarily as a cleaning method—strip the sticky pulp from the seed as fast as possible to avoid spoilage. Today, processing is recognized as a profound canvas for culinary flavor development.',
      'In anaerobic natural processing, freshly picked ripe cherries are sealed into stainless steel or heavy food-grade barrels with one-way airlock valves. As the natural yeasts and lactic bacteria consume fruit sugars, they produce carbon dioxide, forcing all residual oxygen out.',
      'Without oxygen, oxidative browning ceases, and anaerobic microbes take over. They break down complex mucilage sugars into lactic, acetic, and succinic acids while producing exotic esters that taste like passionfruit, mango, and cinnamon.',
      'Our current Ethiopia Guji microlot underwent a 72-hour controlled anaerobic maceration before being dried on raised African beds for 24 days. The cup is electric—tasting unmistakably like blueberry compote and jasmine tea.'
    ],
    tastingOrKeyTakeaway: 'Sensory Profile: Anaerobic processing produces intense stone fruit and tropical ester complexity, often doubling the perceived aroma density.',
    tags: ['Fermentation', 'Anaerobic', 'Sensory', 'Ethiopia']
  },
  {
    id: 'four-am-hearth-bake',
    slug: 'four-am-at-the-hearth-cardamom-butter-sourdough',
    title: '4:00 AM at the Hearth: Cardamom, Butter, and Sourdough',
    subtitle: 'Inside our morning bakery production with head baker Claire Moreau.',
    category: 'Hearth Bakery',
    author: {
      name: 'Claire Moreau',
      role: 'Master Baker',
    },
    date: 'August 29, 2026',
    readTime: '6 min read',
    excerpt: 'Flour dusted across apron strings, the comforting warmth of our deck oven, and the sound of crackling pastry crusts cooling at dawn.',
    content: [
      'The alarm sounds at 3:15 AM. By 3:45 AM, our bakery team is lighting the hearth ovens and checking the overnight levain that has been quietly bubbling in stone crocks for eighteen hours.',
      'Our cardamom buns begin with stone-milled organic flour and French cultured butter with an 84% butterfat content. The dough rests cold for 24 hours to develop subtle sour notes that cut through the richness of the butter.',
      'We crack green cardamom pods coarse on a stone mortar every morning rather than using pre-ground spice powder. Pre-ground cardamom loses its volatile aromatic oils within days; freshly crushed pods release a spicy, piney zest that permeates the entire dining room.',
      'By 6:45 AM, cooling racks are laden with golden twisted buns, caramelized kouign-amanns, and dark-crusted country sourdough loaves. When the coffee machine starts pulling shots at 7:00 AM, the harmony of fresh espresso and warm brioche is complete.'
    ],
    tastingOrKeyTakeaway: 'Baking Philosophy: Cold-fermented laminated doughs paired with freshly crushed whole spices yield unmatched texture and fragrance.',
    tags: ['Bakery', 'Cardamom Buns', 'Sourdough', 'Artisanal']
  },
  {
    id: 'v60-pour-over-guide',
    slug: 'brew-guide-mastering-the-v60-in-three-pours',
    title: 'Brew Guide: Master the Hario V60 in Three Pours',
    subtitle: 'A repeatable, sweet, and balanced pour-over routine for home baristas.',
    category: 'Brew Guides',
    author: {
      name: 'Julian Vance',
      role: 'Head of Coffee & Quality',
    },
    date: 'August 18, 2026',
    readTime: '5 min read',
    excerpt: 'Forget complex twelve-stage pouring routines. Master this intuitive 1:16 ratio method for clean clarity and vibrant sweetness at your kitchen counter.',
    content: [
      'The Hario V60 is renowned for its speed, 60-degree conical geometry, and internal spiral ribs that promote uninterrupted fluid flow. However, many home brewers struggle with channeling and inconsistent brew times.',
      'We recommend a 15-gram coffee to 250-gram water ratio (1:16.6). Grind medium-fine, resembling coarse sea salt. Heat clean water to 205°F (96°C) for light roasts, or 200°F (93°C) for medium roasts.',
      'Pour 1: The Bloom (0:00 - 0:45). Pour 45 grams of water in concentric circles. Swirl the brewer gently twice to ensure all grounds are fully saturated. Watch the CO2 escape like tiny volcanic bubbles.',
      'Pour 2: The Structure (0:45 - 1:30). Pour steadily until your scale reads 150 grams, maintaining a gentle stream right down the center to avoid splashing grounds up the paper filter wall.',
      'Pour 3: The Finish (1:30 - 2:00). Pour gently up to 250 grams total. Give the V60 one final light swirl to settle a flat coffee bed. The drawdown should conclude cleanly around 2:45 to 3:15 minutes.'
    ],
    tastingOrKeyTakeaway: 'The golden rule: gentle turbulence during the bloom, followed by steady center-focused pours, creates the most uniform bed and sweetest cup.',
    tags: ['V60', 'Home Brewing', 'Brew Guide', 'Pour-Over']
  },
  {
    id: 'nordic-vs-medium-roast',
    slug: 'nordic-vs-medium-roast-sweetness-over-bitterness',
    title: 'Nordic vs. Medium Roast: Why We Choose Sweetness Over Bitterness',
    subtitle: 'Finding the delicate roast curve that preserves terroir without imparting sour vegetal notes.',
    category: 'Coffee Science',
    author: {
      name: 'Julian Vance',
      role: 'Head of Coffee & Quality',
    },
    date: 'August 6, 2026',
    readTime: '6 min read',
    excerpt: 'Why ultra-light roasts can taste like grass, dark roasts taste like charcoal, and our tailored development curve hits the sweet spot.',
    content: [
      'In the specialty coffee world, the Nordic roast style—dropping beans just moments after the first crack begins—became celebrated for showcasing pure terroir and delicate floral acids.',
      'However, under-developed ultra-light coffee often suffers from an underdeveloped core. The bean interior never reaches sufficient temperature to caramelize sucrose, resulting in astringency, hay-like vegetal notes, and rapid sour drawdown.',
      'Conversely, traditional second-crack dark roasting burns off all geographical uniqueness, replacing origin terroir with roasted pyrolytic bitterness.',
      'Our roasting philosophy at Linden & Hearth strikes an intentional balance: we roast with aggressive conductive charge energy to penetrate bean cores, followed by a lengthened Maillard phase and a gentle 13% development time ratio. This produces high floral clarity while maximizing caramel sweetness and round mouthfeel.'
    ],
    tastingOrKeyTakeaway: 'Roast Profile: 13-14% Development Time Ratio (DTR) preserves origin-specific fruit notes while fully resolving organic acids into sweet sugars.',
    tags: ['Roasting', 'Coffee Chemistry', 'Terroir', 'Craft']
  },
  {
    id: 'microfoam-physics-latte-art',
    slug: 'steaming-microfoam-physics-of-velvety-milk-and-oat',
    title: 'Steaming Microfoam: The Physics of Velvety Milk and Oat',
    subtitle: 'From protein denaturation to whirlpool shearing: how liquid silk is born on the steam wand.',
    category: 'Coffee Science',
    author: {
      name: 'Soren Patel',
      role: 'Senior Barista & Trainer',
    },
    date: 'July 28, 2026',
    readTime: '5 min read',
    excerpt: 'Why your latte art tears or sinks, and the physical choreography needed to incorporate microscopic air bubbles for wet-paint gloss.',
    content: [
      'True microfoam is not bubbly foam floating on top of warm milk like dish soap suds. It is a stable, homogeneous emulsion where millions of microscopic bubbles are suspended uniformly in liquid.',
      'Phase One: Aeration (The Chirp). Submerge the steam tip just beneath the liquid surface and turn steam on full blast. You should hear crisp paper-tearing sounds as clean air is drawn into the pitcher. Stop aerating once the pitcher reaches body temperature (approx 100°F).',
      'Phase Two: The Vortex. Tilt the pitcher slightly to create an aggressive centrifugal whirlpool. The shear force of this vortex pulverizes large bubbles into sub-millimeter spheres, coating them in denatured whey and casein proteins.',
      'For oat milk, vegetable proteins behave differently. Oat milks require slightly less aeration time and benefit from lower final temperatures (135°F to 140°F) to prevent beta-glucan breakdown. The result is a glossy, liquid-paint sheen that pours effortless rosettas and swans.'
    ],
    tastingOrKeyTakeaway: 'Steaming Tip: Aerate early below 100°F; spin aggressively until 140°F. Never exceed 155°F or proteins coagulate and sweetness diminishes.',
    tags: ['Latte Art', 'Microfoam', 'Barista Skills', 'Milk Science']
  },
  {
    id: 'sugarcane-decaf-revolution',
    slug: 'sugarcane-decaf-ethyl-acetate-preserving-flavor',
    title: 'Sugarcane Decaf: How Ethyl Acetate Preserved the Flavor Profile',
    subtitle: 'Say goodbye to muddy, hollow decaf and hello to crisp peach and brown sugar notes.',
    category: 'Origin & Sourcing',
    author: {
      name: 'Maya Lin',
      role: 'Roastery Lab Chemist',
    },
    date: 'July 14, 2026',
    readTime: '5 min read',
    excerpt: 'How a natural byproduct of fermented Colombian sugarcane transformed evening coffee into an exceptional specialty cup.',
    content: [
      'Historically, decaffeinated coffee was treated as an afterthought—old past-crop beans subjected to aggressive chemical solvents that stripped away all delicate aromatics.',
      'The Sugarcane (Ethyl Acetate) process revolutionized this reality. Ethyl acetate (EA) is a naturally occurring compound found in ripe bananas, blackberries, and fermented sugarcane. In Colombia, EA is produced locally from fermenting blackstrap molasses.',
      'Green coffee beans are steamed under low pressure to open their cellular pores, then washed in natural EA water. The EA selectively binds to caffeine molecules, extracting 99.7% of the caffeine while leaving delicate aromatic volatile oils untouched.',
      'The result is astonishing: our sugarcane decaf retains vibrant acidity, sweet brown sugar notes, and clean citrus notes. It stands proudly alongside any caffeinated single-origin on our brew bar.'
    ],
    tastingOrKeyTakeaway: 'Flavor Integrity: Naturally derived ethyl acetate decaffeination retains sweet origin characteristics, producing a cup indistinguishable from caffeinated specialty lots.',
    tags: ['Decaf', 'Sugarcane EA', 'Colombia', 'Coffee Processing']
  },
  {
    id: 'the-third-place-communal-tables',
    slug: 'the-third-place-why-we-kept-big-communal-tables',
    title: 'The Third Place: Why We Kept Big Communal Tables',
    subtitle: 'Reflections on urban isolation, neighborly serendipity, and the warmth of a shared bench.',
    category: 'Cafe Culture',
    author: {
      name: 'Julian Vance',
      role: 'Head of Coffee & Quality',
    },
    date: 'June 29, 2026',
    readTime: '4 min read',
    excerpt: 'When designing Linden & Hearth, we were told to install individual cubicles and power outlets every twelve inches. Here is why we built a 14-foot white oak communal table instead.',
    content: [
      'Sociologist Ray Oldenburg coined the term "The Third Place" to describe the anchor of community life outside home and work—places where people gather to converse, read, and exist together without corporate agendas.',
      'In recent years, many coffee shops evolved into sterile co-working hubs: silent rooms filled with glowing laptop lids and noise-cancelling headphones. While remote work has its place, we craved something richer.',
      'We commissioned local woodworker Marcus Thorne to craft a continuous 14-foot white oak community table from a fallen storm oak tree. We paired it with comfortable bench seating and soft natural lighting.',
      'On any given morning, you will see a retired botanical illustrator sharing cream with an architecture student, while neighbors discuss local farmers markets. A cup of coffee has always been a social catalyst, and our space is built to nurture that spark.'
    ],
    tastingOrKeyTakeaway: 'Cafe Philosophy: Great coffee shops are social infrastructure. Shared tables turn strangers into neighbors.',
    tags: ['Community', 'Third Place', 'Architecture', 'Culture']
  },
  {
    id: 'flash-chill-vs-cold-brew',
    slug: 'chilled-brew-philosophy-flash-chilled-vs-immersion',
    title: 'Chilled Brew Philosophy: Flash-Chilled vs. 18-Hour Immersion',
    subtitle: 'Two fundamentally different extraction techniques for two completely different summer cravings.',
    category: 'Brew Guides',
    author: {
      name: 'Soren Patel',
      role: 'Senior Barista & Trainer',
    },
    date: 'June 12, 2026',
    readTime: '5 min read',
    excerpt: 'Why cold water extraction creates rich chocolate tones, while hot brewing over ice captures delicate jasmine florals.',
    content: [
      'When the weather heats up, iced coffee demand surges. But "iced coffee" is not a singular drink; it is two fundamentally divergent extraction philosophies.',
      'Immersion Cold Brew: Coarse coffee steeped in cold water for 16 to 20 hours. Cold water cannot dissolve delicate fruit acids or floral chlorogenic compounds; instead, it extracts smooth polysaccharides and chocolate-like lipids. The result is ultra-low acidity, bold body, and rounded sweetness.',
      'Flash-Chilled Filter (Japanese Method): Hot water at 205°F is brewed directly over a vessel filled with dense ice. Hot water extracts the full aromatic spectrum—jasmine, bergamot, peach—and instantly locks them in before oxidation can occur as the ice rapidly drops the temperature.',
      'At Linden & Hearth, we offer both: our 18-Hour Slow-Drip for lovers of chocolate and cream, and our Flash-Chilled Microlots for purists seeking sparkling fruit clarity.'
    ],
    tastingOrKeyTakeaway: 'Brew Choice: Choose Cold Brew for low acidity and velvety cocoa richness; choose Flash-Chilled for floral complexity and vibrant fruit notes.',
    tags: ['Cold Brew', 'Flash Chilled', 'Summer Coffee', 'Iced Coffee']
  },
  {
    id: 'natural-sweetness-brix-terroir',
    slug: 'guide-to-natural-sweetness-coffee-brix-and-terroir',
    title: 'A Guide to Natural Sweetness: Understanding Coffee Brix & Terroir',
    subtitle: 'Why great specialty coffee needs no added sugar to taste like honey and nectar.',
    category: 'Coffee Science',
    author: {
      name: 'Maya Lin',
      role: 'Roastery Lab Chemist',
    },
    date: 'May 27, 2026',
    readTime: '6 min read',
    excerpt: 'The biological journey from cherry photosynthesis on Andean hillsides to the sweet, round finish in your morning mug.',
    content: [
      'The most frequent reaction from newcomers tasting properly extracted specialty coffee is astonishment: "Did you add sugar to this?" The answer, of course, is no. Coffee cherries are stone fruits, and sweet beans are born on the tree.',
      'High altitude (above 1,600 MASL) causes diurnal temperature swings: warm sunny days drive vigorous photosynthesis, while cold mountain nights slow the plant’s respiration. This allows coffee cherries to ripen slowly over nine months, packing the seed with dense sucrose reserves.',
      'Our partner farmers measure cherry ripeness in the field using optical refractometers. Cherries picked at 22° to 24° Brix contain peak sugar density.',
      'During roasting, this sucrose undergoes the Maillard reaction and gentle caramelization, yielding maltol, furans, and sweet pyrazines. When combined with proper extraction, the result is a naturally sweet beverage with zero additives.'
    ],
    tastingOrKeyTakeaway: 'Sweetness Fact: High elevation + delayed cherry maturation + scientific extraction unlocks up to 8% natural sucrose perception in brewed coffee.',
    tags: ['Sweetness', 'Brix', 'Altitude', 'Sensory Science']
  }
];
