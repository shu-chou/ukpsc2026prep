const SRC = 'A curated, high-yield selection covering the standard prelims-level static GK syllabus for Indian and world physical/economic geography, compiled from NCERT-level references and standard competitive-exam material. Uttarakhand-specific geography is covered separately and in far greater depth under the Uttarakhand section; this file focuses on the pan-India and basic world-geography picture that frames it.';

const p = (heading, type, ...paragraphs) => ({ heading, type, paragraphs });
const s = (heading, type, ...bullets) => ({ heading, type, bullets });

export const geographyTopics = {
  'Physiography of India': {
    priority: 'MUST KNOW', title: 'Physiography of India',
    summary: 'India\'s physical landscape divides into six major units — the Himalayas, the Northern Plains, the Peninsular Plateau, the Indian Desert, the Coastal Plains and the Islands — each with distinct sub-divisions and formation stories.',
    sections: [
      p('1. The Himalayas: three parallel ranges', 'must',
        'The Himalayas, the world\'s youngest and highest mountain system, formed by the collision of the Indian and Eurasian tectonic plates (the same process discussed for Uttarakhand under Himalayan Ecology), run in three parallel longitudinal ranges: the Himadri (Greater Himalayas), the northernmost and highest, containing the tallest peaks (Everest, Kanchenjunga) and permanently snow-covered; the Himachal (Lesser/Middle Himalayas), south of the Himadri, with well-known hill stations (Shimla, Mussoorie) and important valleys (Kashmir, Kangra); and the Shiwaliks (Outer Himalayas), the southernmost and youngest range, with structural basins called duns (Dehradun is the most famous example) between it and the Himachal range.'),
      p('2. The Northern Plains', 'must',
        'Formed by alluvial deposition from the Indus, Ganga and Brahmaputra river systems over millennia, the Northern Plains are among the most fertile and densely populated regions on Earth, conventionally divided from west to east into the Punjab Plains, the Ganga Plains and the Brahmaputra Plains, with further local sub-divisions like the Bhabar (a narrow, porous, gravel belt at the foot of the Shiwaliks where rivers disappear underground), the Terai (a wetter belt just south of the Bhabar where those rivers resurface), the Bhangar (older alluvium, slightly elevated) and the Khadar (newer, more fertile floodplain alluvium) — a north-to-south alluvial sequence worth remembering as a unit.'),
      p('3. The Peninsular Plateau', 'must',
        'India\'s oldest and most geologically stable landmass, the Peninsular Plateau, is built on ancient Gondwana-era rock, bounded by the Aravalli Range (one of the world\'s oldest fold mountain systems) in the northwest and the Eastern and Western Ghats flanking it on either coast. Its major sub-divisions include the Malwa Plateau, the Deccan Plateau (a vast lava plateau formed by the Deccan Traps volcanic eruptions), the Chota Nagpur Plateau (rich in mineral resources, covered under Minerals & Energy) and the Chhattisgarh Plain — the Western Ghats (running along India\'s west coast, a UNESCO-recognised biodiversity hotspot) are generally continuous and higher than the more discontinuous, lower Eastern Ghats.'),
      p('4. The Indian Desert, Coastal Plains and Islands', 'understand',
        'The Indian (Thar) Desert lies in the northwestern part of Rajasthan, an arid landscape shaped by wind action, with the seasonal Luni river as its main drainage feature. The Coastal Plains run along both sides of the peninsula: the Western Coastal Plains (narrower, including the Konkan, Kannad and Malabar coasts) and the Eastern Coastal Plains (wider, including the Northern Circars and Coromandel coasts, and home to major deltas like the Godavari-Krishna). India\'s two island groups are geologically distinct: the Lakshadweep Islands (Arabian Sea, coral-origin atolls) and the Andaman and Nicobar Islands (Bay of Bengal, an extension of the Arakan Yoma mountain range, volcanic/tectonic in origin) — a formation-origin distinction that is frequently tested.'),
      s('5. What to memorize', 'must',
        'Himalayas: Himadri (highest, permanent snow) → Himachal (hill stations, valleys) → Shiwaliks (youngest, duns like Dehradun)',
        'Northern Plains sequence: Bhabar → Terai → Bhangar (older) / Khadar (newer, fertile)',
        'Peninsular Plateau: ancient Gondwana rock, Aravallis (old fold mountains), Western Ghats (continuous, biodiversity hotspot) vs Eastern Ghats (discontinuous, lower)',
        'Islands: Lakshadweep = coral origin (Arabian Sea); Andaman & Nicobar = tectonic/volcanic origin (Bay of Bengal)'),
      s('6. Exam traps', 'trap',
        'The Western Ghats are generally higher and more continuous than the Eastern Ghats — a commonly reversed comparison.',
        'Lakshadweep (coral) and Andaman & Nicobar (tectonic/volcanic) have fundamentally different geological origins — do not treat all Indian islands as one uniform category.',
        'The Aravallis are among the world\'s OLDEST fold mountains, in sharp contrast to the young Himalayas — a frequently tested age contrast.'),
      s('7. 30-second revision', 'revision',
        'Himalayas: Himadri-Himachal-Shiwalik. Plains: Bhabar-Terai-Bhangar/Khadar. Plateau: Aravalli(old)+Deccan Traps+Western Ghats(continuous)>Eastern Ghats(broken). Desert=Thar/Rajasthan. Islands: Lakshadweep=coral, Andaman-Nicobar=tectonic.')
    ],
    sourceNote: SRC
  },

  'Drainage': {
    priority: 'MUST KNOW', title: 'Drainage',
    summary: 'India\'s river systems split into Himalayan (perennial, snow-and-glacier fed) and Peninsular (seasonal, rain-fed) categories, each with distinct drainage patterns, and the Ganga-Brahmaputra-Indus systems anchor the highest-yield facts in this topic.',
    sections: [
      p('1. Himalayan vs Peninsular rivers', 'must',
        'Himalayan rivers (Indus, Ganga, Brahmaputra and their tributaries) are perennial, fed by both monsoon rainfall and melting Himalayan snow/glaciers, and are generally older than the mountains themselves in the sense that they cut deep gorges through the rising Himalayas (antecedent drainage) — this is why they can flow through, rather than around, the mountain range. Peninsular rivers (Godavari, Krishna, Kaveri, Narmada, Tapi and others), by contrast, are largely seasonal/rain-fed, follow the region\'s older, more stable geological structure, and most flow west-to-east into the Bay of Bengal, EXCEPT the Narmada and Tapi, which flow west into the Arabian Sea through rift valleys — a frequently tested exception.'),
      p('2. The Indus system', 'must',
        'The Indus originates in Tibet, flows through Ladakh and Pakistan, and is fed by major tributaries including the Jhelum, Chenab, Ravi, Beas and Sutlej — the five rivers that give Punjab ("land of five rivers") its name — draining ultimately into the Arabian Sea. Most of the Indus system today lies in Pakistan, making the Indus Waters Treaty (1960, between India and Pakistan, brokered by the World Bank) the key governance framework worth remembering alongside the river itself.'),
      p('3. The Ganga system', 'must',
        'The Ganga is formed at Devprayag (Uttarakhand) by the union of the Bhagirathi (source: Gangotri glacier) and Alaknanda, and is joined by major tributaries including the Yamuna (itself originating at Yamunotri), Ghaghara, Gandak, Kosi and Son, before splitting into a massive delta with the Brahmaputra in Bangladesh/West Bengal (the Sundarbans, the world\'s largest mangrove delta) and draining into the Bay of Bengal — the Ganga basin is India\'s largest river basin and most densely populated/agriculturally significant.'),
      p('4. The Brahmaputra and major Peninsular rivers', 'must',
        'The Brahmaputra originates in Tibet (where it is called the Yarlung Tsangpo), takes a dramatic U-turn around the eastern Himalayan syntaxis, enters India in Arunachal Pradesh, flows through Assam (known there for frequent, severe flooding due to a wide, shifting braided channel) before joining the Ganga in Bangladesh. Among Peninsular rivers, the Godavari (the largest Peninsular river by length and basin size, sometimes called the "Dakshin Ganga") and the Krishna both rise in the Western Ghats and flow into the Bay of Bengal; the Kaveri, also Western-Ghats-originating, is notable both for the Cauvery water-sharing dispute among southern states and for forming Shivanasamudra Falls; the Narmada and Tapi are the two significant west-flowing Peninsular rivers, running through rift valleys into the Arabian Sea.'),
      s('5. What to memorize', 'must',
        'Himalayan rivers = perennial (snow+rain fed), antecedent drainage; Peninsular rivers = seasonal (rain-fed only)',
        'Peninsular rivers mostly flow east to the Bay of Bengal EXCEPT Narmada and Tapi (west, Arabian Sea, rift valleys)',
        'Indus: 5 tributaries (Jhelum, Chenab, Ravi, Beas, Sutlej) → Punjab; Indus Waters Treaty (1960)',
        'Ganga formed at Devprayag (Bhagirathi + Alaknanda); largest basin; ends at Sundarbans delta with Brahmaputra',
        'Brahmaputra = Yarlung Tsangpo in Tibet, enters via Arunachal Pradesh, floods heavily in Assam'),
      s('6. Exam traps', 'trap',
        'The Narmada and Tapi are the key exceptions to the "Peninsular rivers flow east" rule — a very frequently tested pair.',
        'The Ganga is formed at Devprayag (Bhagirathi + Alaknanda confluence), not at Gangotri, which is only the source of the Bhagirathi.',
        'The Brahmaputra is called the Yarlung Tsangpo in Tibet before entering India — the same river under different names in different countries.'),
      s('7. 30-second revision', 'revision',
        'Himalayan=perennial; Peninsular=seasonal, east-flowing except Narmada+Tapi(west). Indus=5 tributaries→Punjab. Ganga=Devprayag(Bhagirathi+Alaknanda)→Sundarbans. Brahmaputra=Yarlung Tsangpo(Tibet)→Assam floods. Godavari=largest Peninsular river.')
    ],
    sourceNote: SRC
  },

  'Climate & Monsoon': {
    priority: 'MUST KNOW', title: 'Climate & Monsoon',
    summary: 'India\'s monsoon system — the Southwest (summer) monsoon bringing most of the country\'s annual rainfall, and the Northeast (winter/retreating) monsoon affecting the southeast coast — is the single most important driver of India\'s climate and agricultural calendar.',
    sections: [
      p('1. The Southwest Monsoon', 'must',
        'The Southwest Monsoon (roughly June to September) delivers the vast majority of India\'s annual rainfall and follows a well-defined seasonal pattern: it typically arrives at the Kerala coast around 1 June (the conventional "monsoon onset" date), then splits into two branches — the Arabian Sea branch, moving north along the Western Ghats and into central/northwest India, and the Bay of Bengal branch, moving up through the northeast and bending west across the Gangetic plains — with the two branches eventually merging over northern India. The mechanism is driven by differential heating between the Indian landmass (which heats faster, creating a low-pressure zone) and the surrounding ocean, drawing in moisture-laden winds from the southwest.'),
      p('2. The Northeast (Retreating) Monsoon', 'must',
        'As the Southwest Monsoon withdraws (roughly October-December), a reversed wind pattern, the Northeast Monsoon, picks up moisture crossing the Bay of Bengal and brings significant rainfall specifically to the southeastern coast, particularly Tamil Nadu — a distinctive regional exception worth remembering, since Tamil Nadu actually receives more of its annual rainfall from this "winter" monsoon than from the summer Southwest Monsoon that dominates the rest of the country.'),
      p('3. El Niño, La Niña and monsoon variability', 'understand',
        'The strength and timing of the Indian monsoon shows a well-documented statistical association with El Niño (warming of central/eastern Pacific Ocean surface waters), which tends to correlate with weaker, delayed or deficient Indian monsoons, and La Niña (the opposite, cooling phase), which tends to correlate with stronger monsoons — this El Niño-Southern Oscillation (ENSO) linkage is a standard, frequently tested climate-geography fact connecting Indian monsoon variability to a global oceanic phenomenon rather than a purely regional one.'),
      p('4. Climate classification and regional variation', 'understand',
        'India\'s climate is most commonly classified (Köppen system, or simplified regional variants) into broad zones: tropical (far south, parts of the coast), sub-tropical (most of the Gangetic plains, hot summers and cool winters), montane (the Himalayan belt, temperature falling sharply with altitude), and arid/semi-arid (Rajasthan/Thar). India is overall classified as having a monsoon type of climate, a distinctive category reflecting the seasonal wind reversal (monsoon) as the dominant climate-shaping mechanism rather than latitude or continental position alone.'),
      s('5. What to memorize', 'must',
        'Southwest Monsoon (June-Sept): onset ~1 June at Kerala; splits into Arabian Sea branch + Bay of Bengal branch',
        'Northeast Monsoon (Oct-Dec): brings winter rainfall specifically to Tamil Nadu/southeast coast',
        'El Niño → weaker/deficient monsoon; La Niña → stronger monsoon',
        'India\'s overall climate classification = "monsoon type"'),
      s('6. Exam traps', 'trap',
        'Tamil Nadu receives MORE rainfall from the Northeast (winter) Monsoon than the Southwest Monsoon — the reverse of the pattern for most of India.',
        'El Niño correlates with WEAKER Indian monsoons, La Niña with STRONGER ones — a commonly swapped pairing.'),
      s('7. 30-second revision', 'revision',
        'SW Monsoon (Jun-Sep): Kerala onset ~1 Jun, Arabian Sea + Bay of Bengal branches. NE Monsoon (Oct-Dec): Tamil Nadu\'s main rain source. El Niño=weak monsoon, La Niña=strong monsoon. India=monsoon climate type.')
    ],
    sourceNote: SRC
  },

  'Soils': {
    priority: 'IMPORTANT', title: 'Soils',
    summary: 'India\'s major soil types — alluvial (most widespread, most fertile), black/regur (cotton-growing), red, laterite, arid and mountain soils — each correlate with a specific region and set of crops, making this a reliable region-soil-crop matching topic.',
    sections: [
      p('1. Alluvial and black soils', 'must',
        'Alluvial soil, India\'s most widespread and most agriculturally important soil type, covers the Northern Plains (river-deposited, rich in potash and lime, poor in nitrogen and organic matter) and supports the country\'s most intensive agriculture, especially wheat and rice. Black soil (regur, or "cotton soil"), formed from the weathering of Deccan Trap lava rock, covers much of Maharashtra, Madhya Pradesh and parts of Gujarat and Andhra Pradesh; it is rich in iron, lime, calcium and magnesium, retains moisture exceptionally well (making it well suited to cotton cultivation, hence its common name), and is the direct product of the same volcanic Deccan Traps activity that shaped the Deccan Plateau (covered under Physiography).'),
      p('2. Red, laterite, arid and mountain soils', 'must',
        'Red soil, found across large parts of the Peninsular Plateau (Tamil Nadu, Karnataka, parts of Odisha and Chhattisgarh), gets its colour from iron oxide content and is generally less fertile than alluvial or black soil, suited to crops like millets and groundnut. Laterite soil, found in high-rainfall areas (Western Ghats, parts of Kerala, Odisha), forms through intense leaching in tropical wet-dry climates, is typically poor in most nutrients except iron and aluminium, but supports crops like cashew and tea in some regions after treatment. Arid/desert soil, found in Rajasthan\'s Thar region, is sandy, saline and poor in organic matter, generally unproductive without irrigation. Mountain soil, found across the Himalayan belt, varies enormously with altitude and slope, generally thinner and less developed at higher elevations.'),
      s('3. What to memorize', 'must',
        'Alluvial soil = Northern Plains, most fertile/widespread, wheat/rice',
        'Black/regur soil = Deccan Trap-derived (Maharashtra, MP), moisture-retentive, cotton',
        'Red soil = Peninsular Plateau (TN, Karnataka), iron oxide colour, millets/groundnut',
        'Laterite soil = high-rainfall areas (Western Ghats, Kerala), heavily leached',
        'Arid soil = Thar Desert (Rajasthan), sandy/saline'),
      s('4. Exam traps', 'trap',
        'Black soil is directly tied to the Deccan Traps\' volcanic origin — a frequently tested geology-soil connection.',
        'Laterite soil forms through leaching in high-rainfall conditions, which counter-intuitively makes it relatively nutrient-poor despite the wet climate.'),
      s('5. 30-second revision', 'revision',
        'Alluvial=N.Plains, wheat/rice. Black/regur=Deccan Traps, cotton. Red=Peninsula, iron oxide. Laterite=high rainfall, leached, poor nutrients. Arid=Thar, sandy/saline.')
    ],
    sourceNote: SRC
  },

  'Natural Vegetation': {
    priority: 'IMPORTANT', title: 'Natural Vegetation',
    summary: 'India\'s natural vegetation is classified primarily by rainfall into tropical evergreen, deciduous, thorn/scrub and mountain forest types, each tied to a specific rainfall band and region.',
    sections: [
      p('1. Rainfall-based forest classification', 'must',
        'India\'s natural vegetation is classified chiefly by rainfall amount: Tropical Evergreen (Rainforest) forests occur in areas with very high rainfall (over 200 cm annually) — the Western Ghats, Northeast India and the Andaman & Nicobar Islands — characterised by dense, multi-layered canopy and high biodiversity, evergreen year-round since no season is dry enough to force leaf shedding. Tropical Deciduous forests, India\'s most widespread forest type, occur in moderate-rainfall areas (75-200 cm) across large parts of the Peninsula and the Himalayan foothills, and are further divided into moist deciduous (higher rainfall band, e.g. Sal-dominated forests) and dry deciduous (lower rainfall band, e.g. Teak-dominated forests) — both types shed leaves for part of the dry season, unlike evergreen forest.'),
      p('2. Thorn/scrub and mountain vegetation', 'must',
        'Thorn and scrub forests occur in low-rainfall, semi-arid regions (under 75 cm), mainly in parts of Rajasthan, Gujarat and the rain-shadow interior Deccan, with sparse, drought-adapted vegetation like acacia and cacti-type plants. Mountain vegetation, found across the Himalayan altitudinal gradient, shows the same belt-wise transition already discussed for Uttarakhand under Forest Types & Resources — tropical/subtropical forest at lower elevations, temperate coniferous/broadleaf forest in the middle belt, and alpine scrub/meadow above the treeline — illustrating how altitude functions as a substitute for latitude in determining vegetation type within a single mountain range.'),
      s('3. What to memorize', 'must',
        'Tropical Evergreen (>200cm rainfall) = Western Ghats, Northeast, Andaman & Nicobar',
        'Tropical Deciduous (75-200cm, most widespread): moist (Sal) vs dry (Teak)',
        'Thorn/Scrub (<75cm) = Rajasthan, Gujarat, rain-shadow Deccan',
        'Mountain vegetation = altitude-based zonation (same logic as Uttarakhand\'s forest belts)'),
      s('4. Exam traps', 'trap',
        'Tropical Deciduous forest, not evergreen, is India\'s single most widespread forest type by area — a commonly assumed-wrong fact.',
        'Sal is associated with moist deciduous forest; Teak with dry deciduous forest — a frequently swapped species-subtype pairing.'),
      s('5. 30-second revision', 'revision',
        'Evergreen(>200cm)=W.Ghats/NE/A&N. Deciduous(75-200cm, most widespread)=moist(Sal)/dry(Teak). Thorn/scrub(<75cm)=Rajasthan/Gujarat. Mountain=altitude zonation.')
    ],
    sourceNote: SRC
  },

  'Agriculture': {
    priority: 'MUST KNOW', title: 'Agriculture',
    summary: 'India\'s cropping seasons (Kharif, Rabi, Zaid), the Green Revolution\'s regional concentration, and major crop-region associations (rice, wheat, cotton, sugarcane, tea) form the core of this consistently high-yield topic.',
    sections: [
      p('1. Cropping seasons: Kharif, Rabi and Zaid', 'must',
        'India\'s agricultural calendar runs through three cropping seasons: Kharif (sown with the onset of the Southwest Monsoon, roughly June-July, harvested around September-October), including rice, cotton, sugarcane, maize and jowar/bajra — crops requiring high temperature and abundant water; Rabi (sown around October-November after the monsoon withdraws, harvested around March-April), including wheat, gram, mustard and barley — crops requiring cooler temperatures for growth but a warm, dry period for ripening; and Zaid (a short summer season between Rabi harvest and Kharif sowing, roughly April-June), including watermelon, cucumber and other fast-growing irrigated crops — this three-season framework is one of the most reliably tested agriculture facts.'),
      p('2. The Green Revolution', 'must',
        'The Green Revolution (starting mid-1960s) dramatically increased Indian foodgrain production through high-yielding variety (HYV) seeds, expanded irrigation and chemical fertiliser use, with wheat as its primary early success crop and Punjab, Haryana and western Uttar Pradesh as its most concentrated geographic impact zone — a regional concentration that is itself a frequently tested fact, since the Green Revolution\'s benefits were significantly less pronounced (at least initially) in rice-dominant eastern India and in rain-fed, non-irrigated regions generally. M.S. Swaminathan is widely credited as the leading Indian scientific figure behind the Green Revolution\'s implementation.'),
      p('3. Major crop-region associations', 'understand',
        'Rice cultivation concentrates in high-rainfall/irrigated regions: West Bengal, Punjab, Uttar Pradesh and southern coastal states are major producers. Wheat concentrates in the Green Revolution belt: Uttar Pradesh, Punjab and Madhya Pradesh. Cotton, a Kharif crop needing black (regur) soil and a long frost-free period, concentrates in Gujarat, Maharashtra and Madhya Pradesh — directly tying back to the black soil distribution covered under Soils. Sugarcane, a long-duration crop needing high water input, concentrates in Uttar Pradesh and Maharashtra. Tea, a plantation crop needing well-drained hill slopes and high rainfall, concentrates in Assam (India\'s largest tea-producing state) and West Bengal\'s Darjeeling district (famous for a distinct, high-value variety).'),
      s('4. What to memorize', 'must',
        'Kharif (Jun-Oct): rice, cotton, sugarcane, maize — monsoon-sown',
        'Rabi (Oct-Apr): wheat, gram, mustard, barley — winter-sown',
        'Zaid (Apr-Jun): watermelon, cucumber — short summer, irrigated',
        'Green Revolution = mid-1960s, wheat-led, concentrated in Punjab/Haryana/W.UP, M.S. Swaminathan',
        'Crop-region: Rice=WB/Punjab/UP; Wheat=UP/Punjab/MP; Cotton=Gujarat/Maharashtra (black soil); Sugarcane=UP/Maharashtra; Tea=Assam/Darjeeling(WB)'),
      s('5. Exam traps', 'trap',
        'Wheat is a Rabi crop, rice is (mainly) a Kharif crop — a very commonly tested and commonly confused pair.',
        'The Green Revolution\'s regional concentration in Punjab/Haryana/western UP means its early impact was NOT uniform across India — a frequently tested nuance.'),
      s('6. 30-second revision', 'revision',
        'Kharif=monsoon-sown(rice,cotton,sugarcane). Rabi=winter-sown(wheat,gram,mustard). Zaid=short summer. Green Revolution=1960s, wheat, Punjab/Haryana/W.UP, Swaminathan. Cotton=black soil states. Tea=Assam+Darjeeling.')
    ],
    sourceNote: SRC
  },

  'Minerals & Energy': {
    priority: 'IMPORTANT', title: 'Minerals & Energy',
    summary: 'India\'s mineral wealth concentrates heavily in the Chota Nagpur Plateau belt (coal, iron ore) spanning Jharkhand-Odisha-Chhattisgarh-West Bengal, while its energy mix spans coal-dominant thermal power, major hydropower states, and growing nuclear and renewable capacity.',
    sections: [
      p('1. The Chota Nagpur Plateau: India\'s mineral heartland', 'must',
        'The Chota Nagpur Plateau belt, spanning Jharkhand, Odisha, Chhattisgarh and West Bengal, concentrates a disproportionate share of India\'s coal and iron ore reserves, making it the country\'s single most important mineral-industrial region and the historical foundation of India\'s steel industry (Jamshedpur in Jharkhand, home to Tata Steel, sits at the heart of this belt). Odisha and Jharkhand are consistently India\'s top iron ore-producing states; Jharkhand, West Bengal, Odisha and Chhattisgarh together account for the bulk of India\'s coal production, with coal remaining India\'s single most important domestic energy mineral by far.'),
      p('2. Other key minerals', 'must',
        'Bauxite (the ore of aluminium) concentrates in Odisha (India\'s largest producer), along with significant deposits in Gujarat and Jharkhand. Manganese, essential for steel-making, is found significantly in Odisha, Madhya Pradesh and Karnataka. Petroleum and natural gas production concentrates offshore (Bombay High, off Mumbai\'s coast, India\'s most productive offshore field) and onshore in Assam (India\'s oldest oil-producing region, Digboi being historically significant) and Gujarat.'),
      p('3. Power generation mix', 'understand',
        'Thermal power (mainly coal-based) remains India\'s dominant electricity source by a wide margin, reflecting the country\'s large domestic coal reserves discussed above. Hydropower potential concentrates in the Himalayan states (including Uttarakhand, covered under Water Resources) and parts of the Northeast, given the steep-gradient, perennial-river combination needed for hydroelectric generation. Nuclear power, a smaller but strategically significant share of the mix, operates from plants including Tarapur (Maharashtra, India\'s first commercial nuclear plant) and Kudankulam (Tamil Nadu). Renewable energy (solar and wind) has grown rapidly in recent years, with Rajasthan and Gujarat prominent for solar capacity (given their high solar insolation and available arid land) and Tamil Nadu and Gujarat prominent for wind capacity (given favourable coastal wind patterns).'),
      s('4. What to memorize', 'must',
        'Chota Nagpur Plateau (Jharkhand-Odisha-Chhattisgarh-WB) = India\'s coal + iron ore heartland; Jamshedpur (Jharkhand) = Tata Steel',
        'Bauxite = Odisha (largest); Manganese = Odisha/MP/Karnataka; Petroleum = Bombay High (offshore) + Assam (onshore, oldest) + Gujarat',
        'Power mix: Thermal(coal)=dominant; Hydro=Himalayan states/Northeast; Nuclear=Tarapur(Maharashtra, first)+Kudankulam(TN); Solar=Rajasthan/Gujarat; Wind=TN/Gujarat'),
      s('5. Exam traps', 'trap',
        'Tarapur (Maharashtra) was India\'s first commercial nuclear power plant — a frequently tested "first" fact.',
        'Assam, not a western state, is India\'s oldest oil-producing region (Digboi) — a commonly overlooked historical fact given Bombay High\'s greater current prominence.'),
      s('6. 30-second revision', 'revision',
        'Chota Nagpur belt=coal+iron ore(Jharkhand/Odisha/Chhattisgarh/WB). Bauxite=Odisha. Petroleum=Bombay High+Assam(oldest)+Gujarat. Thermal=dominant. Hydro=Himalayan states. Nuclear=Tarapur(first)+Kudankulam. Solar=Rajasthan/Gujarat. Wind=TN/Gujarat.')
    ],
    sourceNote: SRC
  },

  'Industries & Transport': {
    priority: 'IMPORTANT', title: 'Industries & Transport',
    summary: 'India\'s major industrial belts (iron-steel in the Chota Nagpur region, cotton textiles in Maharashtra-Gujarat, IT in Bengaluru-Hyderabad) pair with its transport network — the Golden Quadrilateral highway system and a railway network organised into zones — as the core facts of this topic.',
    sections: [
      p('1. Major industrial regions', 'must',
        'Iron and steel production concentrates around the Chota Nagpur Plateau\'s raw material base (covered under Minerals & Energy), with Jamshedpur (Jharkhand), Bhilai (Chhattisgarh), Rourkela (Odisha), Durgapur and Bokaro among the major steel-plant locations — a belt-based industrial pattern directly following the mineral geography. Cotton textiles historically concentrated in Mumbai and Ahmedabad (Gujarat/Maharashtra), leveraging local cotton (black soil) supply and port access; today the industry has diversified more broadly but retains strong western-India roots. Information Technology (IT) and IT-enabled services concentrate heavily in Bengaluru (often called India\'s "Silicon Valley"), Hyderabad, Pune, Chennai and the Delhi-NCR region — a more recent, services-driven industrial geography distinct from the older mineral/resource-based industrial belts.'),
      p('2. Transport: highways and railways', 'must',
        'The Golden Quadrilateral is India\'s largest highway network project, connecting the four major metropolitan cities — Delhi, Mumbai, Chennai and Kolkata — in a quadrilateral loop, supplemented by the North-South and East-West Corridors connecting other major cities along those respective axes; together these form the backbone of India\'s national highway system. Indian Railways, one of the world\'s largest railway networks, is organisationally divided into zones (each headquartered in a major city) for administrative purposes — a structure worth knowing exists even without memorising every zone\'s specific boundary, since "railway zones" as a concept (versus the older, undivided single-system framing) is itself sometimes directly tested.'),
      s('3. What to memorize', 'must',
        'Steel belt: Jamshedpur, Bhilai, Rourkela, Durgapur, Bokaro (Chota Nagpur-region raw materials)',
        'Cotton textiles: historically Mumbai + Ahmedabad',
        'IT hubs: Bengaluru, Hyderabad, Pune, Chennai, Delhi-NCR',
        'Golden Quadrilateral = Delhi-Mumbai-Chennai-Kolkata highway loop; + North-South and East-West Corridors',
        'Indian Railways = organised into administrative zones'),
      s('4. Exam traps', 'trap',
        'The Golden Quadrilateral connects exactly four cities (Delhi, Mumbai, Chennai, Kolkata) in a loop — the North-South/East-West Corridors are separate, additional highway projects, not part of the Quadrilateral itself.'),
      s('5. 30-second revision', 'revision',
        'Steel: Jamshedpur/Bhilai/Rourkela/Durgapur/Bokaro. Textiles: Mumbai+Ahmedabad. IT: Bengaluru/Hyderabad/Pune/Chennai/NCR. Golden Quadrilateral=Delhi-Mumbai-Chennai-Kolkata + N-S/E-W Corridors. Railways=zone-based.')
    ],
    sourceNote: SRC
  },

  'Population & Census': {
    priority: 'MUST KNOW', title: 'Population & Census',
    summary: 'The decennial Census (last conducted 2011) is India\'s primary population-data source, with the sex ratio, literacy rate and population-density figures from that Census forming the most consistently tested standalone numbers in this topic.',
    sections: [
      p('1. The Census framework', 'must',
        'India conducts a decennial (every-ten-year) Census, the most recent completed one being in 2011 (the next scheduled round has faced well-publicised delays), making 2011 Census figures the standard reference point for most static-GK population questions rather than more volatile, frequently-revised current estimates. India is the world\'s most populous country (having overtaken China around 2023 per UN estimates, a genuinely current-affairs-adjacent fact worth noting separately from the static 2011 Census figures below), and per the 2011 Census, Uttar Pradesh is India\'s most populous state.'),
      p('2. Key 2011 Census figures', 'must',
        'According to the 2011 Census, India\'s sex ratio (females per 1,000 males) stood at 943, an improvement over the 2001 figure, with Kerala recording the highest state-level sex ratio and Haryana among the lowest — a state-level contrast frequently tested. India\'s literacy rate in 2011 stood at about 74%, with Kerala again recording the highest state literacy rate and Bihar among the lowest. Population density (persons per square km) nationally averaged around 382 per the 2011 Census, with Bihar recording the highest state-level density among major states and Arunachal Pradesh among the lowest.'),
      p('3. Demographic transition and the concept of the "demographic dividend"', 'understand',
        'India\'s population is often discussed through the lens of demographic transition theory (the shift from high birth/death rates to low birth/death rates as a society develops) and the associated concept of a "demographic dividend" — the economic growth potential from having a large working-age population relative to dependents, a window India is considered to currently be within given its comparatively young population structure, though realising this dividend depends on adequate education, skilling and employment generation rather than occurring automatically.'),
      s('4. What to memorize', 'must',
        'Census = decennial, latest completed = 2011 (next round delayed)',
        '2011: Sex ratio = 943 (Kerala highest, Haryana among lowest); Literacy ≈ 74% (Kerala highest, Bihar among lowest); Density ≈ 382/sq km (Bihar highest among major states)',
        'Uttar Pradesh = most populous state (2011 Census)',
        '"Demographic dividend" = economic potential from a large working-age population share'),
      s('5. Exam traps', 'trap',
        'India overtaking China as the world\'s most populous country is a recent (2023-era UN estimate) development, distinct from and not captured in the 2011 Census figures — keep the two facts separate.',
        'Kerala consistently tops both sex ratio and literacy rate rankings — a frequently paired "Kerala leads on both" fact.'),
      s('6. 30-second revision', 'revision',
        'Census=decennial, last=2011. Sex ratio=943 (Kerala top). Literacy≈74% (Kerala top). Density≈382/km² (Bihar top). UP=most populous state. Demographic dividend=young workforce advantage.')
    ],
    sourceNote: SRC
  },

  'World Geography': {
    priority: 'IMPORTANT', title: 'World Geography',
    summary: 'A compact survey of world physical geography basics — continents and oceans, major mountain ranges and deserts, and the world\'s longest rivers — the standard "world geography" slice tested alongside India-focused geography.',
    sections: [
      p('1. Continents and oceans', 'must',
        'The world is conventionally divided into seven continents (Asia, Africa, North America, South America, Antarctica, Europe, Australia/Oceania — Asia being both the largest by area and most populous) and five oceans (Pacific, the largest and deepest; Atlantic, second-largest; Indian Ocean, the third-largest and the one bordering India directly; Southern/Antarctic Ocean; and Arctic Ocean, the smallest and shallowest) — a basic framework worth having solid before layering on more specific facts.'),
      p('2. Major mountain ranges and deserts', 'must',
        'The Himalayas (Asia) are the world\'s highest mountain range, home to Mount Everest, the world\'s highest peak, located on the Nepal-China border. The Andes (South America) form the world\'s longest continental mountain range. The Rockies (North America) and the Alps (Europe) are the other two most frequently referenced major ranges. Among deserts, the Sahara (Africa) is the world\'s largest hot desert, while Antarctica is technically the world\'s largest desert overall (a "cold desert," defined by extremely low precipitation rather than temperature) — a frequently tested "largest hot desert vs. largest desert overall" distinction.'),
      p('3. World\'s longest rivers', 'understand',
        'The Nile (Africa) and the Amazon (South America) are consistently cited as the world\'s two longest rivers, with their exact ranking a subject of ongoing measurement debate depending on which tributary/source is counted — for exam purposes, both are worth knowing as the top two, without needing to resolve which is definitively longer. The Amazon, regardless of exact length ranking, carries by far the largest discharge (water volume) of any river in the world, a distinct superlative from "longest."'),
      s('4. What to memorize', 'must',
        '7 continents (Asia largest/most populous); 5 oceans (Pacific largest, Indian Ocean = 3rd largest, borders India)',
        'Himalayas = highest range (Everest); Andes = longest continental range; Sahara = largest hot desert; Antarctica = largest desert overall (cold desert)',
        'Nile and Amazon = world\'s two longest rivers (ranking debated); Amazon = largest by discharge/volume'),
      s('5. Exam traps', 'trap',
        'Antarctica, not the Sahara, is the world\'s largest desert overall — the Sahara is only the largest HOT desert, a frequently tested distinction.',
        'The Nile-vs-Amazon "longest river" ranking is genuinely disputed among sources — exam questions testing "the longest river" should be read carefully for which specific superlative (length vs. discharge) is being asked.'),
      s('6. 30-second revision', 'revision',
        '7 continents, 5 oceans (Pacific=largest, Indian=3rd/borders India). Himalayas=highest(Everest). Andes=longest range. Sahara=largest hot desert; Antarctica=largest desert overall. Nile/Amazon=longest rivers; Amazon=largest discharge.')
    ],
    sourceNote: SRC
  }
};
