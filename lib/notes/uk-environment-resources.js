const SRC = 'Compiled from Forest Survey of India reports, state forest/wildlife department material and standard Uttarakhand environment references. This subject deliberately focuses on the ecological and conservation angle; river/glacier geography and mineral geology are covered in more physical detail under Uttarakhand Geography, and this file avoids repeating that content verbatim.';

const p = (heading, type, ...paragraphs) => ({ heading, type, paragraphs });
const s = (heading, type, ...bullets) => ({ heading, type, bullets });

export const uttarakhandEnvironmentResources = {
  'Forest Types & Resources': {
    priority: 'MUST KNOW', title: 'Forest Types & Resources',
    summary: 'Uttarakhand\'s forest cover, among the highest of any Indian state as a share of its area, is organised into distinct altitudinal belts from Terai sal forests to alpine pastures, and administered through a unique mix of Reserved, Protected, Civil/Soyam and Van Panchayat forests.',
    sections: [
      p('1. Altitudinal forest belts', 'must',
        'Uttarakhand\'s forests change systematically with altitude, and UKPSC frequently tests this belt-by-belt progression. In the Terai-Bhabar lowlands (roughly up to 1,000 m), tropical moist deciduous forest dominated by Sal (Shorea robusta) prevails, historically the state\'s most commercially important timber species. Moving up to the sub-tropical belt, Chir Pine (Pinus roxburghii) forests take over on drier south-facing slopes, while broadleaf sub-tropical species persist elsewhere. The temperate zone (roughly 1,500-3,000 m) carries the classic Himalayan oak-conifer mix — Banj Oak (Quercus leucotrichophora) is ecologically the most significant broadleaf species here, valued for fodder and water retention, alongside Deodar, Blue Pine and Spruce at higher temperate elevations. Beyond the treeline, the sub-alpine and alpine zones carry Birch (Bhoj Patra) and Rhododendron (Buransh) scrub, giving way finally to alpine meadows and permanent snow.'),
      p('2. Forest administration categories', 'must',
        'Forest land in Uttarakhand is legally divided into several categories that UKPSC tests directly: Reserved Forests, under full state forest department control with the most restricted use rights; Protected Forests, where some traditional local use continues under regulation; Civil (or Soyam) Forests and Panchayati/Van Panchayat forests, managed at the community level. The Van Panchayat system is a genuinely distinctive Uttarakhand institution — village-level forest councils, first formalised in the Kumaon hills under British-era rules in 1931, that manage local forest patches for grazing, fuelwood and fodder through community self-governance, predating and directly inspiring later India-wide joint forest management thinking.'),
      p('3. Forest cover and its significance', 'understand',
        'Uttarakhand consistently ranks among the states with the highest proportion of its geographical area under forest cover, per Forest Survey of India assessments — a fact that anchors both the state\'s ecological importance and its recurring debates over developmental pressure (roads, hydropower, mining) on forest land. Forest resources remain central to the hill economy for fuelwood, fodder and non-timber forest produce, even as commercial timber extraction has been progressively restricted following landmark Supreme Court forest-conservation rulings from the 1980s-90s onward.'),
      s('4. What to memorize', 'must',
        'Altitude belts: Terai-Bhabar (Sal) → sub-tropical (Chir Pine) → temperate (Banj Oak, Deodar, Blue Pine) → sub-alpine/alpine (Bhoj Patra/Birch, Buransh/Rhododendron) → alpine meadows',
        'Forest categories: Reserved, Protected, Civil/Soyam, Van Panchayat (Panchayati) forests',
        'Van Panchayats = distinctive Uttarakhand institution, formalised in Kumaon in 1931, community forest self-governance'),
      s('5. Exam traps', 'trap',
        'Sal belongs to the Terai-Bhabar lowlands, not the temperate zone — a very common altitude-species mismatch trap.',
        'Van Panchayats are a Kumaon-origin, pre-independence institution (1931), not a post-2000 Uttarakhand-state creation.'),
      s('6. 30-second revision', 'revision',
        'Terai/Bhabar = Sal. Sub-tropical = Chir Pine. Temperate = Banj Oak + Deodar/Blue Pine. Alpine = Bhoj Patra + Buransh. Forest types = Reserved/Protected/Civil-Soyam/Van Panchayat. Van Panchayat = Kumaon, 1931.')
    ],
    sourceNote: SRC
  },

  'Biodiversity': {
    priority: 'MUST KNOW', title: 'Biodiversity',
    summary: 'Uttarakhand sits within the Himalaya global biodiversity hotspot, hosting the Valley of Flowers and Nanda Devi Biosphere Reserve as its flagship biodiversity sites, alongside significant endemic and threatened species across its altitudinal range.',
    sections: [
      p('1. Uttarakhand within the Himalaya biodiversity hotspot', 'must',
        'Uttarakhand forms part of the Himalaya biodiversity hotspot, one of the world\'s recognised global biodiversity hotspots (regions with exceptional species richness and endemism that are also under significant threat), a status that reflects the extraordinary range of ecosystems packed into the state\'s altitudinal gradient — from subtropical Terai forest through temperate oak-conifer belts to alpine meadows and permanent snow within a relatively short horizontal distance. This compressed altitudinal zonation is the single biggest reason the state supports such disproportionately high species diversity for its size.'),
      p('2. Valley of Flowers and the Nanda Devi Biosphere Reserve', 'must',
        'The Valley of Flowers National Park, in Chamoli district, is renowned for its spectacular alpine meadow of endemic and rare Himalayan flowering plants and was inscribed, together with the adjoining Nanda Devi National Park, as a UNESCO World Heritage Site (originally Nanda Devi alone in 1988, extended to include the Valley of Flowers in 2005). The Nanda Devi Biosphere Reserve, one of India\'s designated biosphere reserves, encompasses this core zone and a surrounding buffer, and is also recognised internationally as part of UNESCO\'s Man and Biosphere Programme — a triple layer of protection (National Park + Biosphere Reserve + World Heritage Site) worth remembering as a package.'),
      p('3. Endemism and threatened species', 'understand',
        'The state\'s high-altitude zones harbour numerous plant species found nowhere else, particularly in the Valley of Flowers\' meadow ecosystem, alongside globally threatened fauna such as the Snow Leopard and Himalayan Musk Deer in the higher Himalaya, and species like the Asiatic Elephant and Bengal Tiger in the Terai-Bhabar lowland forests — meaning Uttarakhand\'s biodiversity significance spans essentially the full altitudinal range of the state rather than being concentrated in just the high mountains.'),
      s('4. What to memorize', 'must',
        'Uttarakhand = part of the Himalaya global biodiversity hotspot',
        'Valley of Flowers NP + Nanda Devi NP = joint UNESCO World Heritage Site (1988, extended 2005)',
        'Nanda Devi Biosphere Reserve = includes the National Park core + buffer zone, UNESCO Man and Biosphere Programme'),
      s('5. Exam traps', 'trap',
        'The Nanda Devi/Valley of Flowers UNESCO listing is a single joint World Heritage Site, not two separate listings.',
        'Biosphere Reserve, National Park and World Heritage Site are three distinct designations layered on the same Nanda Devi area — do not treat them as synonyms.'),
      s('6. 30-second revision', 'revision',
        'UK = Himalaya biodiversity hotspot. Valley of Flowers + Nanda Devi = 1 UNESCO WHS (1988/2005). Nanda Devi Biosphere Reserve = wraps around it.')
    ],
    sourceNote: SRC
  },

  'National Parks & Wildlife Sanctuaries': {
    priority: 'MUST KNOW', title: 'National Parks & Wildlife Sanctuaries',
    summary: 'Corbett, India\'s first national park (1936), anchors Uttarakhand\'s protected-area network alongside Rajaji, Nanda Devi, Valley of Flowers, Govind and Gangotri National Parks, plus wildlife sanctuaries like Askot, Binsar, Kedarnath and Sonanadi.',
    sections: [
      p('1. Corbett National Park: India\'s first', 'must',
        'Corbett National Park, spread across Nainital and Pauri Garhwal districts, holds the distinction of being India\'s first national park, established in 1936 as Hailey National Park (named after a colonial Governor) and later renamed after hunter-turned-conservationist Jim Corbett in 1957. It also became the site of the launch of Project Tiger in 1973, India\'s flagship tiger conservation programme, making Corbett Tiger Reserve the very first tiger reserve declared in the country — a double "first" (first national park, first tiger reserve) that makes it one of the single most exam-important facts in this topic.'),
      p('2. Other National Parks', 'must',
        'Rajaji National Park, spanning Haridwar, Dehradun and Pauri Garhwal districts, is known for its elephant population and was declared a Tiger Reserve in 2015, merging with Corbett\'s broader conservation landscape in public discussion though the two remain administratively distinct reserves. Nanda Devi National Park and Valley of Flowers National Park, both in Chamoli district, form the joint UNESCO World Heritage Site discussed under Biodiversity. Govind National Park and the adjoining Govind Pashu Vihar Wildlife Sanctuary, in Uttarkashi district, protect high-altitude Himalayan wildlife including the Snow Leopard. Gangotri National Park, also in Uttarkashi, covers the glaciated source region of the Bhagirathi and is important Snow Leopard and Himalayan Tahr habitat.'),
      p('3. Key Wildlife Sanctuaries', 'must',
        'Askot Wildlife Sanctuary in Pithoragarh district is particularly associated with Musk Deer conservation. Binsar Wildlife Sanctuary in Almora district protects temperate oak-conifer forest close to a popular hill destination. Kedarnath Wildlife Sanctuary, spanning Chamoli and Rudraprayag districts, is one of the largest protected areas in the state and another important Musk Deer habitat. Sonanadi Wildlife Sanctuary, in Pauri Garhwal and Nainital districts, functions as a buffer zone contiguous with Corbett Tiger Reserve. Together these sanctuaries fill in the protected-area network between the larger, more famous National Parks.'),
      s('4. What to memorize', 'must',
        'Corbett NP (Nainital/Pauri) = India\'s FIRST national park (1936, as Hailey NP; renamed 1957) + India\'s first Tiger Reserve (1973, Project Tiger launch)',
        'Rajaji NP (Haridwar/Dehradun/Pauri) = elephants, Tiger Reserve since 2015',
        'Nanda Devi NP + Valley of Flowers NP (Chamoli) = joint UNESCO WHS',
        'Govind NP + Govind Pashu Vihar WLS (Uttarkashi), Gangotri NP (Uttarkashi) = high-Himalaya, Snow Leopard habitat',
        'Askot WLS (Pithoragarh) = Musk Deer · Binsar WLS (Almora) · Kedarnath WLS (Chamoli/Rudraprayag) = Musk Deer · Sonanadi WLS (Pauri/Nainital) = Corbett buffer'),
      s('5. Exam traps', 'trap',
        'Corbett was originally named Hailey National Park (1936), renamed Corbett only in 1957 — do not assume the "Corbett" name dates to its founding.',
        'Project Tiger launched at Corbett in 1973 — a frequently tested date and location pairing.',
        'Do not confuse Govind National Park with Govind Pashu Vihar Wildlife Sanctuary — they are adjoining but distinct protected areas.'),
      s('6. 30-second revision', 'revision',
        'Corbett = 1st NP (1936, Hailey→Corbett 1957) + 1st Tiger Reserve (1973). Rajaji = elephants, TR since 2015. Nanda Devi + Valley of Flowers = UNESCO WHS. Govind/Gangotri (Uttarkashi) = Snow Leopard. Askot/Kedarnath WLS = Musk Deer.')
    ],
    sourceNote: SRC
  },

  'Conservation Reserves': {
    priority: 'IMPORTANT', title: 'Conservation Reserves',
    summary: 'Conservation Reserves are a lighter-touch protected-area category (declared on government land near existing parks/sanctuaries, without displacing local rights) used in Uttarakhand mainly for wetland and bird conservation — Asan, Jhilmil Jheel and Naina Devi Himalayan Bird Conservation Reserve are the key examples.',
    sections: [
      p('1. What makes a Conservation Reserve different', 'must',
        'A Conservation Reserve is a category under the Wild Life (Protection) Act, 1972 (added by a 2002 amendment) that can be declared on government-owned land, typically adjoining or connecting existing National Parks and Sanctuaries, without the stricter restrictions or land-use changes that come with declaring a full National Park or Sanctuary — making it a lighter-touch, more flexible conservation tool that Uttarakhand has used particularly for wetlands and bird habitats rather than large-mammal reserves.'),
      p('2. Key Conservation Reserves in Uttarakhand', 'must',
        'The Asan Conservation Reserve, around the Asan Barrage near Dehradun, is Uttarakhand\'s most significant wetland conservation site, an important habitat for migratory and resident waterbirds, and was designated a Ramsar site (a wetland of international importance) — making it one of the state\'s few internationally recognised wetland sites. Jhilmil Jheel Conservation Reserve, in Haridwar district, protects wetland and grassland habitat and is particularly associated with the Swamp Deer (Barasingha). Naina Devi Himalayan Bird Conservation Reserve, around Nainital, protects habitat for a range of Himalayan bird species close to a major hill town. Pawalgarh Conservation Reserve, in Nainital district, protects forest habitat adjoining the Terai landscape and has been discussed for elevated conservation status given its tiger presence.'),
      s('3. What to memorize', 'must',
        'Conservation Reserve = lighter-touch protected category, government land, Wildlife Protection Act 1972 (2002 amendment)',
        'Asan Conservation Reserve (Dehradun) = wetland, migratory birds, Ramsar site',
        'Jhilmil Jheel Conservation Reserve (Haridwar) = Swamp Deer (Barasingha)',
        'Naina Devi Himalayan Bird Conservation Reserve (Nainital) = bird habitat',
        'Pawalgarh Conservation Reserve (Nainital) = Terai-adjoining forest, tiger presence'),
      s('4. Exam traps', 'trap',
        'Conservation Reserves do not require the same restrictive process as declaring a National Park or Sanctuary — a key legal distinction.',
        'Asan is specifically a Ramsar-designated wetland — do not confuse its Ramsar status with the other Conservation Reserves, which are not Ramsar sites.'),
      s('5. 30-second revision', 'revision',
        'Conservation Reserve = lighter category, govt land. Asan (Dehradun) = wetland + Ramsar. Jhilmil Jheel (Haridwar) = Swamp Deer. Naina Devi (Nainital) = birds. Pawalgarh (Nainital) = Terai forest, tigers.')
    ],
    sourceNote: SRC
  },

  'Important Flora & Fauna': {
    priority: 'MUST KNOW', title: 'Important Flora & Fauna',
    summary: 'Uttarakhand\'s state symbols — Alpine Musk Deer (state animal), Himalayan Monal (state bird), Buransh/Rhododendron (state tree) and Brahma Kamal (state flower) — anchor a broader set of high-value species facts for UKPSC, including Snow Leopard, Himalayan Tahr and Asiatic Elephant.',
    sections: [
      p('1. Uttarakhand\'s state symbols', 'must',
        'Uttarakhand\'s state animal is the Alpine Musk Deer, a small, secretive high-altitude deer historically hunted for musk (a substance from its scent gland used in perfumery and traditional medicine), which drove severe population decline and made it a conservation priority in sanctuaries like Kedarnath and Askot. The state bird is the Himalayan Monal, a strikingly iridescent multicoloured pheasant found in high-altitude temperate and alpine forest. The state tree is Buransh (Rhododendron arboreum), whose red flowers are a visible seasonal marker of the temperate-to-alpine transition zone and are also used locally to make a squash/juice. The state flower is the Brahma Kamal (Saussurea obvallata), a rare high-altitude flower found near sacred sites like Hemkund and Valley of Flowers, associated with religious significance in local tradition and blooming only briefly each year.'),
      p('2. Other high-value species', 'must',
        'The Snow Leopard, an elusive high-altitude big cat, inhabits the state\'s trans-Himalayan and high-alpine zones (Gangotri, Govind, Nanda Devi landscapes) and is a globally threatened flagship species for high-Himalaya conservation. The Himalayan Tahr, a wild goat-antelope, is found on steep rocky slopes across the same high-altitude belt. In the lowland Terai-Bhabar forests, by contrast, the state supports populations of the Asiatic Elephant (Rajaji, Corbett landscape) and the Bengal Tiger (Corbett and, more recently, Rajaji Tiger Reserves) — underlining again that Uttarakhand\'s wildlife significance spans from subtropical lowland to high alpine within one state.'),
      s('3. What to memorize', 'must',
        'State animal = Alpine Musk Deer · State bird = Himalayan Monal · State tree = Buransh (Rhododendron) · State flower = Brahma Kamal',
        'High-altitude flagship species: Snow Leopard, Himalayan Tahr, Musk Deer',
        'Lowland Terai-Bhabar flagship species: Asiatic Elephant, Bengal Tiger'),
      s('4. Exam traps', 'trap',
        'Musk Deer is hunted for its musk gland, not its hide or antlers — the specific reason behind its conservation priority.',
        'Brahma Kamal is associated with high-altitude sacred sites (e.g., Hemkund) and blooms only briefly — do not confuse it with the lotus (kamal), which is a different, common flower.'),
      s('5. 30-second revision', 'revision',
        'Symbols: Musk Deer (animal), Himalayan Monal (bird), Buransh (tree), Brahma Kamal (flower). High-altitude = Snow Leopard, Tahr, Musk Deer. Lowland = Elephant, Tiger.')
    ],
    sourceNote: SRC
  },

  'Water Resources': {
    priority: 'MUST KNOW', title: 'Water Resources',
    summary: 'Uttarakhand\'s water resources — perennial Himalayan rivers, glaciers, high-altitude lakes and wetlands — underpin its enormous hydropower potential and drinking-water role for the entire Indo-Gangetic plain, but also drive recurring Centre-State and environmental tension over dam-building.',
    sections: [
      p('1. Why Uttarakhand\'s water resources matter beyond the state', 'must',
        'Uttarakhand is the source region for the Ganga and Yamuna river systems, meaning its water resources have significance far beyond the state\'s own boundaries — the perennial, glacier-and-snow-fed rivers originating here sustain irrigation, drinking water and ecology across the entire Indo-Gangetic plain downstream, which is precisely why the state\'s hydropower and dam-building decisions attract national-level environmental and political attention rather than being purely local infrastructure questions.'),
      p('2. Hydropower potential and its contested development', 'must',
        'Uttarakhand possesses one of the highest hydropower potentials among Indian states because of its combination of steep gradient and perennial river flow, and numerous hydroelectric projects (run-of-the-river and storage-based) have been built or proposed along the Alaknanda, Bhagirathi and other river systems. This potential is also the source of the state\'s most persistent environmental conflict: large dam projects, most prominently the Tehri Dam on the Bhagirathi, have faced sustained opposition over submergence of towns and villages, seismic risk in this geologically young and active zone, and downstream ecological disruption, making hydropower development one of the central environment-versus-development debates specific to Uttarakhand.'),
      p('3. Wetlands and groundwater', 'understand',
        'Beyond rivers and glaciers, Uttarakhand\'s wetlands (like the Asan Conservation Reserve, a Ramsar site) and numerous high-altitude lakes support both biodiversity and local water supply, while groundwater in the Terai-Bhabar belt supports the state\'s more intensive plains agriculture in a way the steep hill terrain cannot. Springs (naulas and dharas in local terminology) remain the primary drinking-water source for many hill villages, and their depletion — linked to deforestation, changing rainfall patterns and unplanned construction — is an increasingly discussed environmental and administrative concern distinct from the state\'s larger river systems.'),
      s('4. What to memorize', 'must',
        'Uttarakhand = source region for the Ganga and Yamuna systems — downstream significance across the Indo-Gangetic plain',
        'High hydropower potential from steep gradient + perennial flow; Tehri Dam (Bhagirathi) = most prominent and most contested project',
        'Springs (naulas/dharas) = primary hill-village drinking water source; spring depletion is a growing concern',
        'Asan Conservation Reserve = Ramsar wetland site'),
      s('5. Exam traps', 'trap',
        'Tehri Dam is built on the Bhagirathi, not the Alaknanda — a commonly confused river-dam pairing.',
        'Groundwater is significant mainly in the Terai-Bhabar plains, not the steep hill terrain, where springs (naulas/dharas) dominate instead.'),
      s('6. 30-second revision', 'revision',
        'UK = Ganga-Yamuna source region. High hydropower potential. Tehri Dam = Bhagirathi, most contested project. Naulas/dharas = hill drinking water. Asan = Ramsar wetland.')
    ],
    sourceNote: SRC
  },

  'Mineral Resources': {
    priority: 'IMPORTANT', title: 'Mineral Resources',
    summary: 'Uttarakhand\'s mineral wealth is dominated by limestone, magnesite, rock phosphate and soapstone found mainly in the Lesser Himalayan belt, but mining here carries acute environmental sensitivity because of the state\'s fragile, seismically active, landslide-prone terrain.',
    sections: [
      p('1. Key minerals and their location', 'must',
        'Limestone is Uttarakhand\'s most significant mineral resource, found extensively across the Lesser Himalayan belt and long central to the state\'s cement industry, but also the single most environmentally contentious mineral because of quarrying\'s role in slope destabilisation. Magnesite deposits occur notably in the Pithoragarh and Chamoli areas, valued for refractory and chemical industry use. Rock phosphate, important for fertiliser production, and Soapstone (used in various industrial applications) are also found across the hill districts, alongside smaller deposits of dolomite, gypsum and other industrial minerals.'),
      p('2. Mining and environmental sensitivity', 'must',
        'Because Uttarakhand sits in a seismically active zone with steep, geologically young terrain highly prone to landslides, mineral extraction (especially limestone quarrying and riverbed mining for sand and boulders) carries outsized environmental risk compared to mining in more geologically stable regions — slope-cutting removes vegetation cover and destabilises hillsides, while riverbed mining alters river-channel behaviour and flood risk. This has made mining regulation and restriction, including Supreme Court and National Green Tribunal interventions on riverbed mining in ecologically sensitive stretches, a recurring policy issue specific to the state, distinguishing Uttarakhand\'s mineral-resource story from a purely economic-geography one.'),
      s('3. What to memorize', 'must',
        'Limestone = most significant mineral, Lesser Himalayan belt, cement industry, most environmentally contentious',
        'Magnesite = Pithoragarh, Chamoli · Rock phosphate = fertiliser use · Soapstone = industrial use',
        'Mining risk is amplified by seismic activity + landslide-prone terrain — a distinctly Himalayan concern'),
      s('4. Exam traps', 'trap',
        'Limestone quarrying and riverbed mining are the two most environmentally contentious mineral activities in the state — do not treat mineral extraction here as environmentally neutral the way it might be discussed for a plains state.'),
      s('5. 30-second revision', 'revision',
        'Limestone (Lesser Himalaya, cement) = top mineral, most contentious. Magnesite (Pithoragarh/Chamoli). Rock phosphate, soapstone. Mining risk ↑ due to seismic activity + landslide terrain.')
    ],
    sourceNote: SRC
  },

  'Climate Change in Uttarakhand': {
    priority: 'MUST KNOW', title: 'Climate Change in Uttarakhand',
    summary: 'Glacier retreat, erratic monsoon patterns and rising temperatures are reshaping Uttarakhand\'s Himalayan ecosystems and increasing disaster risk, prompting a dedicated State Action Plan on Climate Change.',
    sections: [
      p('1. Observed and projected impacts', 'must',
        'Uttarakhand\'s Himalayan glaciers, which feed the Ganga and Yamuna systems, have shown measurable retreat over recent decades, a trend widely attributed to rising regional temperatures and consistent with broader Himalayan glacier-retreat patterns documented across the range. Alongside glacier retreat, the state has experienced increasingly erratic and intense monsoon rainfall (short bursts of extreme precipitation rather than steady seasonal rain), which directly elevates landslide and flash-flood risk on the state\'s already steep, unstable slopes. Changing precipitation and temperature patterns are also affecting agriculture (shifting suitable zones for traditional hill crops) and increasing stress on water availability from springs, compounding the spring-depletion concerns already affecting hill villages.'),
      p('2. Policy response: the State Action Plan on Climate Change', 'understand',
        'Like other Indian states, Uttarakhand has developed a State Action Plan on Climate Change (SAPCC), aligned with India\'s National Action Plan on Climate Change, identifying priority sectors — water, agriculture, forestry, tourism, disaster management — for adaptation measures specific to a mountain state\'s vulnerabilities, distinct from the mitigation-heavy focus more typical of large industrial states. Because of the direct downstream link between Himalayan climate trends and the Ganga-Yamuna water supply for the entire plains region, Uttarakhand\'s climate vulnerability carries significance well beyond its own borders, paralleling the broader point made under Water Resources.'),
      s('3. What to memorize', 'must',
        'Observed trends: glacier retreat, erratic/intense monsoon rainfall, rising temperatures',
        'Consequences: increased landslide/flash-flood risk, spring depletion, shifting agricultural zones',
        'Policy response: State Action Plan on Climate Change (SAPCC), aligned with the National Action Plan on Climate Change'),
      s('4. Exam traps', 'trap',
        'Himalayan climate change effects in Uttarakhand are primarily about erratic, intense rainfall events and glacier retreat, not simply "more rain" or "less rain" overall — the intensity/erraticity is the key mechanism linking climate change to disaster risk.'),
      s('5. 30-second revision', 'revision',
        'Glacier retreat + erratic intense monsoon → landslide/flash-flood risk ↑, spring depletion, shifting agriculture. Response = SAPCC, aligned with National Action Plan on Climate Change.')
    ],
    sourceNote: SRC
  },

  'Himalayan Ecology': {
    priority: 'MUST KNOW', title: 'Himalayan Ecology',
    summary: 'Uttarakhand lies in a young, tectonically active, steep and altitude-compressed mountain system, making its ecology exceptionally fragile — a framework that explains why disasters, deforestation and unplanned construction have disproportionate consequences here compared to more geologically stable regions.',
    sections: [
      p('1. Why Himalayan ecology is structurally fragile', 'must',
        'The Himalaya is geologically among the youngest major mountain systems on Earth, still actively rising through ongoing tectonic collision between the Indian and Eurasian plates, which keeps the region seismically active and its rock strata relatively loose and prone to failure compared to older, more stabilised mountain ranges. Combined with extremely steep slopes and a compressed altitudinal gradient (subtropical to alpine within a short horizontal distance, as discussed under Biodiversity), this geological youth means vegetation loss, heavy rainfall or construction disturbance translates into landslides and slope failure far more readily here than in comparable terrain elsewhere — fragility is a structural, geological property of the region, not simply a consequence of human activity, though human activity substantially amplifies the risk.'),
      p('2. Altitudinal zonation as an ecological organising principle', 'must',
        'Because temperature and rainfall change so rapidly with elevation in the Himalaya, Uttarakhand\'s ecosystems are best understood as a series of altitudinal zones rather than a single uniform "forest" or "mountain" ecosystem — the same progression already described under Forest Types (Terai-Bhabar → sub-tropical → temperate → sub-alpine/alpine → permanent snow) is simultaneously a climate zone map, a vegetation map and, broadly, a wildlife-habitat map, which is why exam questions on flora, fauna, forests and climate in this state so often converge on the same altitude-band logic.'),
      p('3. Ecological sensitivity and land-use pressure', 'understand',
        'This structural fragility is precisely why deforestation, road construction, hydropower and tourism-driven construction in Uttarakhand carry outsized ecological consequences relative to similar activity in geologically stable plains or plateau regions — a framework directly relevant to understanding both the state\'s recurring disaster events (covered under Disaster Ecology) and the rationale behind Uttarakhand-specific environmental movements like Chipko, which explicitly targeted deforestation\'s destabilising effect on hill slopes rather than treating tree loss as a purely aesthetic or resource-depletion issue.'),
      s('4. What to memorize', 'must',
        'Himalaya = geologically young, tectonically active (India-Eurasia plate collision) → structurally fragile, landslide-prone',
        'Compressed altitudinal zonation = single organising principle behind forest types, biodiversity and wildlife habitat bands',
        'Fragility is geological/structural, not purely a human-activity outcome — but human activity (deforestation, construction) sharply amplifies risk'),
      s('5. Exam traps', 'trap',
        'Himalayan fragility stems from active tectonics and youthful geology, not merely "high altitude" alone — altitude compounds but does not solely cause the instability.'),
      s('6. 30-second revision', 'revision',
        'Himalaya = young + tectonically active → structurally fragile. Compressed altitude zones = one map for forests, climate, wildlife. Human activity amplifies inherent geological instability.')
    ],
    sourceNote: SRC
  },

  'Environmental Movements': {
    priority: 'MUST KNOW', title: 'Environmental Movements',
    summary: 'Uttarakhand is the birthplace of the Chipko movement, India\'s most iconic grassroots forest-conservation movement, and has continued to see environmental activism against large dams (Tehri) and unregulated mining and construction in ecologically sensitive zones.',
    sections: [
      p('1. Chipko: the movement\'s core logic', 'must',
        'The Chipko movement, which began in the early 1970s in the Chamoli district hills (most famously with Gaura Devi\'s 1974 action at Reni village, covered under Society & Culture and Movements), was fundamentally about hill communities, and hill women in particular, physically embracing trees to prevent commercial felling — but its deeper argument was ecological rather than purely sentimental: local activists and later scientific studies connected deforestation directly to landslides, flash floods and spring depletion in the fragile Himalayan terrain (the same fragility logic covered under Himalayan Ecology), reframing tree-felling as a direct threat to hill livelihoods and safety, not just an aesthetic or resource loss. This scientific-ecological framing, championed by figures associated with the movement, is what gave Chipko its lasting influence on Indian forest policy well beyond Uttarakhand.'),
      p('2. Anti-Tehri Dam movement', 'must',
        'The movement opposing the Tehri Dam on the Bhagirathi river ran for decades, centred on concerns over submergence of Tehri town and surrounding villages, the seismic risk of a large dam in an active earthquake zone, and downstream ecological disruption — it did not prevent the dam\'s eventual completion, but it remains one of independent India\'s longest-running and most prominent anti-dam environmental campaigns, and is frequently paired with Chipko as the state\'s two defining environmental movements even though their targets (forest felling versus dam construction) differ.'),
      p('3. Later and ongoing environmental activism', 'understand',
        'Beyond these two flagship movements, Uttarakhand has seen continued, more localised environmental activism and litigation around unregulated riverbed and hill-slope mining, unplanned tourism and hydropower construction, and — most recently — the Joshimath land-subsidence crisis, which drew renewed national attention to the consequences of unchecked construction in geologically unstable Himalayan terrain, directly echoing the structural-fragility arguments both Chipko and the Tehri Dam movement had raised decades earlier.'),
      s('4. What to memorize', 'must',
        'Chipko = began early 1970s, Chamoli district; Gaura Devi\'s 1974 Reni action is the most cited episode; core argument = deforestation causes landslides/floods/spring depletion, not just resource loss',
        'Anti-Tehri Dam movement = opposed submergence + seismic risk on the Bhagirathi; one of India\'s longest-running anti-dam campaigns',
        'Joshimath land subsidence = recent crisis linking unchecked construction to Himalayan geological fragility'),
      s('5. Exam traps', 'trap',
        'Chipko\'s central argument was ecological (landslide/flood prevention), not merely sentimental tree-protection — a distinction UKPSC statement questions test directly.',
        'Chipko and the Anti-Tehri Dam movement target different threats (deforestation vs. dam construction) — do not conflate them as the same campaign.'),
      s('6. 30-second revision', 'revision',
        'Chipko = early 1970s, Chamoli, Gaura Devi/Reni 1974, ecological argument (landslide/flood prevention). Anti-Tehri Dam = Bhagirathi, submergence + seismic risk, decades-long. Joshimath = recent land-subsidence crisis.')
    ],
    sourceNote: SRC
  },

  'Disaster Ecology': {
    priority: 'MUST KNOW', title: 'Disaster Ecology',
    summary: 'Uttarakhand\'s recurring major disasters — the 2013 Kedarnath floods, the 2021 Chamoli glacier-burst flood, and the 2023 Joshimath land subsidence — are direct expressions of the state\'s structural Himalayan fragility, and have driven repeated strengthening of its disaster management framework.',
    sections: [
      p('1. The 2013 Kedarnath disaster', 'must',
        'In June 2013, unusually intense and prolonged rainfall combined with a cloudburst and the breach of the Chorabari Lake (glacial lake) above Kedarnath triggered devastating flash floods and debris flows that killed thousands and caused massive destruction across the Kedarnath valley and other parts of Uttarakhand, becoming one of independent India\'s worst Himalayan disasters and a defining case study in Himalayan disaster ecology — directly illustrating how extreme rainfall (linked to Climate Change), unstable glacial-lake terrain, and unplanned construction near river channels compound into catastrophic outcomes.'),
      p('2. The 2021 Chamoli glacier-burst flood', 'must',
        'In February 2021, a portion of a glacier/rock mass broke off in the Rishiganga basin in Chamoli district, triggering a massive flash flood that severely damaged hydropower projects on the Rishiganga and Dhauliganga rivers and caused significant loss of life — the event renewed scientific and policy attention on Glacial Lake Outburst Floods (GLOFs) and the risks of hydropower infrastructure sited directly in high-altitude, glacier-fed river channels, directly connecting the Water Resources hydropower debate to real disaster outcomes.'),
      p('3. The 2023 Joshimath land subsidence', 'must',
        'Starting in early 2023, the town of Joshimath in Chamoli district (a key transit town on the route to Badrinath and a base for the Auli ski resort) experienced widespread land subsidence — cracking and sinking of buildings and roads — attributed to a combination of the town\'s location on old landslide debris, unregulated construction, and infrastructure projects, prompting evacuations and a national debate on sustainable construction practices in ecologically fragile Himalayan towns, and serving as the most recent, still-unfolding case study in this topic.'),
      p('4. Disaster management framework', 'understand',
        'Uttarakhand\'s disaster response operates under the national framework of the Disaster Management Act, 2005, through the State Disaster Management Authority (SDMA) at the state level and District Disaster Management Authorities headed by the District Magistrate at the district level (referenced under Local Government/District Administration), with early-warning systems, glacial-lake monitoring and hazard-zonation mapping increasingly emphasised as preventive measures following the recurring pattern of major disasters described above.'),
      s('5. What to memorize', 'must',
        '2013 Kedarnath: cloudburst + Chorabari Lake breach → flash floods, one of India\'s worst Himalayan disasters',
        '2021 Chamoli: glacier/rock mass break in Rishiganga basin → GLOF-type flash flood, damaged hydropower projects on Rishiganga/Dhauliganga',
        '2023 Joshimath: land subsidence from old landslide debris + unregulated construction, Chamoli district',
        'Framework: Disaster Management Act 2005 → State Disaster Management Authority (SDMA) + District Disaster Management Authorities'),
      s('6. Exam traps', 'trap',
        'Kedarnath (2013), Chamoli glacier-burst (2021) and Joshimath (2023) are three distinct events in different years — do not merge their details.',
        'The 2021 Chamoli disaster was in the Rishiganga basin specifically, damaging hydropower projects there — a key location detail.'),
      s('7. 30-second revision', 'revision',
        '2013 Kedarnath = cloudburst + Chorabari Lake breach. 2021 Chamoli = Rishiganga glacier/rock burst, hydropower damage. 2023 Joshimath = land subsidence, old landslide debris + construction. Framework = DM Act 2005 → SDMA + DDMA.')
    ],
    sourceNote: SRC
  }
};
