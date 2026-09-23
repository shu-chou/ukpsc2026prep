const p = (heading, type, ...paragraphs) => ({ heading, type, paragraphs });
const s = (heading, type, ...bullets) => ({ heading, type, bullets });

// Progressive rewrite of lib/data.js's uttarakhandGeography into explanatory paragraphs.
// Topics not yet listed here fall back to the original bullet version (see the merge
// in the page components) — this file only needs to contain the topics done so far.
export const uttarakhandGeographyExplained = {
  'Location & Extent': {
    priority: 'MUST KNOW', title: 'Geographical Location & Extent',
    summary: 'Start with the state\'s position, boundaries, extent and strategic setting. These facts form the base for understanding climate, drainage, settlement and resources.',
    sections: [
      p('1. Location and boundaries', 'understand',
        'Uttarakhand is a Himalayan state in northern India, lying in what government sources describe as the Central Himalayan zone. It extends roughly from 28°43′ N to 31°27′ N and 77°34′ E to 81°02′ E (different official sources round these endpoints slightly differently, so learn this commonly used range), covering a total geographical area of 53,483 km². Its four neighbours form a simple clockwise set worth remembering together: Uttar Pradesh to the south, Nepal to the east, China (Tibet) to the north and northeast, and Himachal Pradesh to the west — of these, only Nepal and China are international borders, which gives the state real strategic weight.'),
      p('2. Formation, and why the location matters', 'understand',
        'The state was carved out of the northern part of Uttar Pradesh on 9 November 2000, initially named Uttaranchal, a name changed to Uttarakhand a little over six years later, on 1 January 2007 — two separate dates that are easy to conflate but shouldn\'t be. Administratively it is organised into two major regions, Garhwal and Kumaon.',
        'What makes this location matter beyond the basic facts is the huge north-south relief range packed into a fairly narrow state: that range alone produces enormous variation in temperature, vegetation, agriculture and settlement from south to north, and gives Uttarakhand its importance for glaciers, river systems, forests, biodiversity, hydropower and tourism. The same steep slopes and deep valleys that create this variety also make the terrain fragile and prone to landslides and erosion, a theme that resurfaces across almost every other geography topic.'),
      s('3. What to memorize', 'must',
        'Area: 53,483 km²', 'Formation: 9 November 2000', 'Old name: Uttaranchal', 'Name changed to Uttarakhand: 1 January 2007',
        'Latitude: about 28°43′ N–31°27′ N', 'Longitude: about 77°34′ E–81°02′ E',
        'International neighbours: Nepal and China', 'National neighbours: Uttar Pradesh and Himachal Pradesh', 'Two major regions/divisions: Garhwal and Kumaon'),
      s('4. Exam traps', 'trap',
        'Do not confuse the state\'s formation date (9 November 2000) with the later renaming to Uttarakhand (1 January 2007).',
        'Do not treat Nepal and China as national neighbours; they are international neighbours.',
        'Do not confuse geographical area with forest area or hilly area.',
        'For boundary questions, remember the simple clockwise set: UP → Nepal → China → Himachal Pradesh.'),
      s('5. 30-second revision', 'revision',
        'Uttarakhand = Himalayan state → 53,483 km² → formed 9 Nov 2000 → Uttaranchal renamed Uttarakhand in 2007 → borders UP, Himachal Pradesh, Nepal, China → Garhwal + Kumaon.')
    ],
    sourceNote: 'Prepared from Uttarakhand government sources and aligned to the UKPSC geography syllabus.'
  },

  'Physiography': {
    priority: 'MUST KNOW', title: 'Physiography of Uttarakhand',
    summary: 'For Prelims, understand the major relief sequence and the relationship between altitude, terrain, climate, vegetation and human activity, rather than memorising every local landform.',
    sections: [
      p('1. The big picture', 'understand',
        'Uttarakhand is overwhelmingly mountainous: rugged rock, deep valleys, high peaks and steep slopes dominate the landscape, and this relief is really the foundation for most of the rest of the state\'s geography. Altitude shapes temperature, temperature and moisture together shape vegetation, and vegetation in turn shapes agriculture and settlement — which is why the single most useful fact to fix before learning individual ranges, peaks and valleys is the south-to-north relief sequence: Terai, then Shiwalik, then Lesser Himalaya, then Greater Himalaya.'),
      p('2. The belts, south to north', 'understand',
        'At the southern edge, the Bhabar is a coarse, highly permeable piedmont belt right along the Himalayan foothills, porous enough that streams can actually vanish into it; the Terai lies just south of the Bhabar and is comparatively wetter, with finer sediments and more surface water, since it is here that the streams which disappeared in the Bhabar tend to re-emerge. The two are related foothill belts but shouldn\'t be treated as interchangeable.',
        'Moving north, the Shiwalik is the southernmost Himalayan range proper, young in geological terms and structurally fragile, with high erosion potential. The Lesser Himalaya is the middle mountainous zone, holding most of the state\'s valleys, settlements, agriculture, horticulture and tourism activity. And the Greater Himalaya is the highest belt, home to the tallest peaks, glaciers and snow-covered terrain, with only sparse settlement at its highest elevations.'),
      p('3. Why this sequence matters', 'understand',
        'This relief framework drives themes that recur throughout the rest of the syllabus: steep slopes encourage rapid runoff and deeply incised valleys, which is why relief controls drainage; altitude creates the vertical variation in climate and natural vegetation Uttarakhand is known for; and mountain relief limits where roads, settlements, agriculture and hydropower projects can actually be built, while making the state more exposed to landslides and erosion at the same time. It is worth resisting the temptation to memorise long lists of individual peaks and valleys before this basic sequence is solid, since the sequence and its consequences are what tends to be tested first.'),
      s('4. What to memorize', 'must',
        'South → north: Terai → Shiwalik → Lesser Himalaya → Greater Himalaya', 'Bhabar ≠ Terai',
        'Shiwalik = southern, young/fragile belt', 'Lesser Himalaya = middle mountainous belt with extensive human activity',
        'Greater Himalaya = highest belt, snow/glacier-dominated at high elevations'),
      s('5. Exam traps', 'trap',
        'Do not reverse the Himalayan belt sequence.', 'Do not equate Bhabar with Terai.',
        'Do not assume the highest belt has the highest population density; harsh climate and terrain restrict settlement at high elevations.',
        'Do not memorise long lists of peaks and valleys before understanding the physiographic framework.'),
      s('6. 30-second revision', 'revision',
        'South → North = Terai → Shiwalik → Lesser Himalaya → Greater Himalaya. Altitude ↑ → temperature generally ↓ → vegetation changes → agriculture/settlement changes → snow/glacier at the highest elevations.')
    ],
    sourceNote: 'Prepared as a UKPSC-focused conceptual layer from the official Uttarakhand geography syllabus and Uttarakhand government geographic descriptions.'
  },

  'Climate': {
    priority: 'MUST KNOW', title: 'Climate of Uttarakhand',
    summary: 'Uttarakhand shows strong climatic variation because elevation rises dramatically from the southern plains to the high Himalaya. Focus on the altitude–temperature relationship, monsoon rainfall, winter precipitation, relief effects, and how climate connects to vegetation, agriculture, rivers and disasters.',
    sections: [
      p('1. Why climate varies so much here', 'understand',
        'Uttarakhand has no single climate — conditions vary sharply with altitude, relief and location, following one simple but important relationship: as altitude increases, temperature generally falls, and that single fact then drives changes in vegetation, agriculture and settlement pattern all the way up the slope. The southern plains and foothills stay comparatively warm year-round, while the higher Himalaya experiences severe winters and heavy snowfall even as lower valleys stay much milder. Altitude is the single most important control on climate here, though relief (which forces moisture-laden air upward), the direction a slope faces, and the state\'s two main weather systems, the southwest monsoon and western disturbances, all shape the picture further.'),
      p('2. The four seasons', 'must',
        'The year splits into four recognisable seasons: a cold winter from December to February, when temperatures drop sharply in the mountains and western disturbances can bring rain or snow; a warming pre-monsoon or summer from March to May, felt most in the plains and lower valleys; the main southwest monsoon season from June to September, by far the most important period for rainfall; and a post-monsoon phase in October-November as the rains taper off and temperatures start falling again toward winter.'),
      p('3. The southwest monsoon and orographic rainfall', 'understand',
        'Most of the state\'s annual rainfall arrives with the southwest monsoon between June and September, and the mechanism behind it is a textbook example of orographic rainfall: moist monsoon winds hit the Himalayan relief, are forced upward, cool as they rise, and release their moisture as they go. This is also why rainfall is never uniform across the state — elevation, slope orientation and local topography all change how much lift the air gets in any given spot. Combined with steep, fragile slopes, this heavy monsoon rainfall is also the main driver of landslides, flash floods and erosion in the hills.'),
      p('4. Western Disturbances and winter precipitation', 'understand',
        'Winter precipitation works differently, and comes mainly from Western Disturbances, weather systems that approach the subcontinent from the west and northwest rather than from the monsoon direction. These systems bring rain at lower and middle elevations and snow higher up, and the snow they deposit is what sustains the state\'s glaciers and much of its water availability through the rest of the year — a good reason not to assume all winter precipitation falls as snow, since altitude decides that too.'),
      p('5. How climate connects to the rest of the syllabus', 'understand',
        'Because climate here is really altitude in disguise, it ends up driving almost every other geography topic: it decides which vegetation zones exist at which elevation, which crops and horticultural produce can be grown where, how much water rivers carry from monsoon rain and glacier melt, how exposed different areas are to landslides and flash floods, when and where tourism is viable, and why dense permanent settlement thins out sharply above a certain elevation.'),
      s('6. What to memorize', 'must',
        'Main rainy season: Southwest Monsoon, June to September', 'Important winter weather mechanism: Western Disturbances',
        'Altitude ↑ → temperature generally ↓', 'Himalayan relief + moisture-bearing winds → orographic rainfall',
        'Heavy monsoon rainfall + steep slopes = greater landslide/flash-flood risk'),
      s('7. Exam traps', 'trap',
        'Do not assume Uttarakhand has the same climate everywhere; altitude creates major climatic differences.',
        'Do not confuse the Southwest Monsoon with Western Disturbances: monsoon dominates summer rainfall, western disturbances matter most for winter precipitation.',
        'Do not assume all winter precipitation falls as snow; lower elevations may receive rain while higher elevations receive snow.',
        'Do not study climate as an isolated chapter — expect it connected to vegetation, agriculture, rivers, glaciers, tourism and disasters.'),
      s('8. 30-second revision', 'revision',
        'Uttarakhand climate = altitude + Himalayan relief + monsoon + western disturbances. Altitude ↑ → temperature ↓. June–September = main monsoon. Mountains force moist air upward → orographic rainfall. Western Disturbances → winter rain/snow. Climate controls vegetation, agriculture, river flow and settlement.')
    ],
    sourceNote: 'UKPSC-focused climate notes structured around Uttarakhand\'s altitude, Himalayan relief, southwest monsoon, western disturbances and their geographical effects. Detailed climate-change issues are covered separately under Environment & Natural Resources.'
  },

  'Drainage & Rivers': {
    priority: 'MUST KNOW', title: 'Drainage System & Rivers of Uttarakhand',
    summary: 'Uttarakhand is the source region of major Himalayan river systems, especially the Ganga and Yamuna. Focus on river-system hierarchy, origins, tributaries, confluences, the Panch Prayag, glacier–river associations, and Kumaon\'s separate river geography.',
    sections: [
      p('1. The big picture, and where the Ganga begins', 'understand',
        'Uttarakhand\'s drainage network is dense and largely Himalayan in character, shaped by steep relief, glacier and snowmelt, and monsoon rainfall, and it separates into two dominant systems: the Ganga and the Yamuna. Within the Ganga system, two headstreams matter above everything else, Bhagirathi and Alaknanda, and the single most important river fact in the whole topic is what happens where they meet: Bhagirathi rises from the Gangotri Glacier at Gaumukh in Uttarkashi district, Alaknanda drains the high Himalaya around Badrinath and collects several major tributaries on its way down, and the two rivers join at Devprayag — it is only from Devprayag onward that the combined river is actually called the Ganga, not before.'),
      p('2. The Bhagirathi system', 'understand',
        'The Bhagirathi flows down through the upper Garhwal Himalaya from Gaumukh to Devprayag, picking up tributaries such as the Bhilangana, Asi Ganga, Jadh Ganga and Kedar Ganga along the way. Of these the Bhilangana matters most for the exam, both because it rises from the Khatling Glacier region and because the Tehri Dam, the state\'s best-known hydropower project, is built on the Bhagirathi itself.'),
      p('3. The Alaknanda system and the Panch Prayag', 'must',
        'The Alaknanda\'s headwaters lie in the glacier region above Badrinath, and as it descends it absorbs four major tributaries one after another, at four of the state\'s most famous confluences; together with its final meeting with the Bhagirathi, these make up the Panch Prayag ("five confluences"): Vishnuprayag, where the Alaknanda meets the Dhauliganga; Nandaprayag, where it meets the Nandakini; Karnaprayag, where it meets the Pindar; Rudraprayag, where it meets the Mandakini; and finally Devprayag, where it meets the Bhagirathi and the combined river becomes the Ganga. The sequence runs strictly upstream to downstream in that order, Vishnu, Nanda, Karna, Rudra, Dev, and is worth memorising as a single chain rather than five separate facts, since questions often test the order itself.'),
      p('4. Glacier–river associations worth fixing', 'must',
        'A handful of glacier-to-river links come up often enough to be worth knowing on their own: the Gangotri Glacier at Gaumukh feeds the Bhagirathi, the Chorabari Glacier area near Kedarnath feeds the Mandakini, the Khatling Glacier feeds the Bhilangana, the glaciers around Milam feed the Gori river system, and the Namik Glacier feeds the eastern Ramganga. For exam purposes these matching pairs matter more than any descriptive detail about the glaciers themselves.'),
      p('5. The Yamuna system', 'understand',
        'The Yamuna, the state\'s other great river system, rises in the Yamunotri region of Uttarkashi district and flows down along the western edge of Uttarakhand, making it especially relevant to Uttarkashi and Dehradun-region geography. Its most important Himalayan tributary by far is the Tons, which itself draws water from smaller streams such as the Supin and Rupin; the Tons drainage dominates the western part of the state and should not be confused with any river of the Alaknanda system further east.'),
      p('6. Kumaon\'s separate river geography', 'must',
        'Eastern Kumaon has its own river geography, built around the Kali (also called the Mahakali), which forms a long stretch of the international boundary with Nepal and becomes the Sharda once it leaves the hills near Tanakpur and enters the plains — Kali and Sharda are simply two names for different stretches of the same river, not two different rivers. Its tributaries include the Gori, the Dhauliganga (a separate river from the Alaknanda system\'s Dhauliganga) and the Saryu. The Gori, also called the Goriganga, rises from glaciers around Munsyari and Milam and joins the Kali at Jauljibi; the Saryu meets the Gomti at Bageshwar and eventually joins the Kali itself at Pancheshwar; and the eastern Ramganga, rising from the Namik Glacier, joins the Saryu at Rameshwar. Keep the eastern Ramganga distinct from the separate western Ramganga, whose catchment lies around the Doodhatoli region further west and which eventually becomes a tributary of the Ganga system. A few smaller rivers round out the map without needing much individual detail: the Kosi in Kumaon, the Nayar (or Nayyar) system of Garhwal, whose eastern and western branches join before reaching the Alaknanda, and the Asan, Song and Suswa, which drain the Dehradun valley.'),
      p('7. Drainage, hydropower and hazards', 'understand',
        'The same steep gradients and high discharge that make this drainage network so dense also give Uttarakhand its large hydropower potential, with the Bhagirathi, Alaknanda and their tributaries hosting most of the state\'s major projects — Tehri Dam on the Bhagirathi is the one river–project association worth fixing at this stage, with the rest covered separately under Hydropower. River valleys double as the natural corridors for settlements, roads, pilgrimage routes and agriculture, but the same relief that carries this water so efficiently also drives erosion, landslides and flash floods, particularly once heavy monsoon rainfall adds to the glacier and snowmelt already in the rivers.'),
      s('8. What to memorize', 'must',
        'Bhagirathi: Gangotri Glacier/Gaumukh; Bhagirathi + Alaknanda meet at Devprayag → Ganga',
        'Panch Prayag, upstream to downstream: Vishnuprayag (Dhauliganga), Nandaprayag (Nandakini), Karnaprayag (Pindar), Rudraprayag (Mandakini), Devprayag (Bhagirathi)',
        'Tehri Dam → Bhagirathi', 'Yamuna → Yamunotri; Tons → major Yamuna tributary',
        'Kali → Nepal border → Sharda downstream (from Tanakpur)',
        'Gori + Kali → Jauljibi; Saryu + Gomti → Bageshwar; Eastern Ramganga + Saryu → Rameshwar; Saryu + Kali → Pancheshwar'),
      s('9. Exam traps', 'trap',
        'The name "Ganga" begins only after Bhagirathi meets Alaknanda at Devprayag, not at Gaumukh.',
        'Do not reverse the Panch Prayag sequence.',
        'Mandakini joins at Rudraprayag (not Karnaprayag); Pindar joins at Karnaprayag (not Rudraprayag) — the two are commonly swapped.',
        'Eastern Ramganga (Kumaon, joins the Saryu) and western Ramganga (Garhwal, joins the Ganga system) are different rivers.',
        'Kali and Sharda are the same river under two names, not two different rivers.'),
      s('10. 30-second revision', 'revision',
        'Gaumukh → Bhagirathi. Bhagirathi + Alaknanda at Devprayag → Ganga. Panch Prayag: Vishnu–Dhauli, Nanda–Nandakini, Karna–Pindar, Rudra–Mandakini, Dev–Bhagirathi. Yamunotri → Yamuna; Tons → major tributary. Kali → Nepal boundary → Sharda downstream. Gori+Kali → Jauljibi. Saryu+Gomti → Bageshwar. East Ramganga+Saryu → Rameshwar. Saryu+Kali → Pancheshwar. Tehri Dam → Bhagirathi.')
    ],
    sourceNote: 'UKPSC-focused drainage notes prepared from Uttarakhand government river, tourism, district and environmental sources. Detailed dams and hydropower projects are intentionally reserved for the separate Hydropower topic.'
  },

  'Glaciers & Lakes': {
    priority: 'MUST KNOW', title: 'Glaciers & Lakes of Uttarakhand',
    summary: 'Uttarakhand contains some of the most important Himalayan glaciers and high-altitude lakes in India. Focus on glacier–river associations, the Garhwal vs Kumaon split, and lake–district associations rather than exact dimensions.',
    sections: [
      p('1. Why glaciers matter here', 'understand',
        'Glaciers are the high Himalaya\'s main freshwater store, and most of Uttarakhand\'s important rivers either rise directly from a glacier or draw heavily on glacial meltwater, especially through the warmer months — which is why glacier questions in this exam are almost always really river questions in disguise. What matters is which glacier feeds which river, not the glacier\'s exact length or area.'),
      p('2. The major named glaciers', 'must',
        'The single most important glacier to know is the Gangotri Glacier in Uttarkashi district, whose snout, Gaumukh, is where the Bhagirathi actually emerges — Gaumukh itself is not a separate glacier or river, just the point where the ice ends and the river begins, and the glacier lies within Gangotri National Park. In Kumaon, the Pindari Glacier near Bageshwar feeds the Pindar river, which later joins the Alaknanda at Karnaprayag, while further north the Milam Glacier, around Munsyari in Pithoragarh, feeds the Gori Ganga, which meets the Kali at Jauljibi. Back in Garhwal, the Khatling Glacier in Tehri district gives rise to the Bhilangana, a tributary that eventually joins the Bhagirathi, and the Chorabari Glacier area near Kedarnath feeds the Mandakini. A second tier of glaciers is worth recognising by region even without memorising much detail: Kafni and Sunderdhunga in the broader Bageshwar-Kumaon Himalaya, Ralam near Munsyari, and Dokriani (Dokriani Bamak) in the Garhwal Himalaya.'),
      p('3. The Nainital lake cluster', 'must',
        'Uttarakhand\'s lakes split naturally into two groups: a cluster of lower-elevation freshwater lakes concentrated around Nainital in Kumaon, and a scatter of high-altitude Himalayan lakes across Garhwal, usually tied to glaciers, pilgrimage or trekking. The Nainital cluster is worth learning as a set: Naini Lake itself sits at the centre of Nainital town and is the reason the area is often called Uttarakhand\'s "Lake District"; Bhimtal and Naukuchiatal lie nearby in the same district, the latter named for its nine corners; and Sattal, whose name means "seven lakes," is actually a connected group that includes lakes named Nal Damyanti, Panna (or Garud), Ram, Laxman, Sita, Purna and Sukh Tal. Khurpatal, in the same district, rounds out the cluster, and Nanak Sagar in Udham Singh Nagar is worth knowing separately as an artificial reservoir rather than a natural lake.'),
      p('4. Garhwal\'s high-altitude lakes', 'must',
        'Garhwal\'s lakes are more scattered and each tends to carry its own distinct association. Dodital, in the Uttarkashi region, is the source of the Asi Ganga, which later joins the Bhagirathi, and is also known for the Himalayan golden trout found in its waters. Roopkund, high in the Chamoli-region mountains along the Bedni Bugyal-Wan trekking route, is famous less for its geography than for the human skeletal remains scattered around it. Hemkund, also in Chamoli, is a glacial lake beside Hemkund Sahib, a major Sikh pilgrimage site in the Govindghat-Ghangaria-Valley of Flowers area. Deoria Tal, near Ukhimath in Rudraprayag district, is a popular trekking destination known for its Himalayan views, while Vasuki Tal, reached by trekking beyond Kedarnath, and Kedar Tal, near Gangotri in Uttarkashi, are two separate high-altitude lakes that are easy to confuse with each other and with Kedarnath itself, but shouldn\'t be. Nachiketa Tal (Uttarkashi region) and Ruinsara Tal (western Garhwal, Tons-Har-ki-Dun area) are worth recognising without much extra detail.'),
      s('5. Garhwal vs Kumaon at a glance', 'must',
        'Garhwal glaciers/lakes: Gangotri, Khatling, Chorabari; Dodital, Roopkund, Hemkund, Deoria Tal, Vasuki Tal, Kedar Tal.',
        'Kumaon glaciers/lakes: Pindari, Milam, Kafni, Sunderdhunga, Ralam; Naini Lake, Bhimtal, Naukuchiatal, Sattal, Khurpatal.'),
      s('6. What to memorize', 'must',
        'Gangotri Glacier → Gaumukh → Bhagirathi (Uttarkashi)', 'Pindari Glacier → Pindar → Kumaon/Bageshwar',
        'Milam Glacier → Gori Ganga → Munsyari/Pithoragarh', 'Khatling Glacier → Bhilangana; Chorabari region → Mandakini',
        'Dodital → Asi Ganga; Hemkund → Hemkund Sahib (Chamoli); Roopkund → skeletal remains'),
      s('7. Exam traps', 'trap',
        'Gaumukh is the snout of the Gangotri Glacier, not a river or a separate glacier.',
        'Pindari feeds the Pindar, not the Bhagirathi; Milam feeds the Gori Ganga, not the Pindar.',
        'Sattal is a group of (seven) lakes, not one lake; Naukuchiatal is the nine-cornered one.',
        'Do not confuse Kedar Tal, Vasuki Tal and Kedarnath — three different places in the same general area.',
        'Nanak Sagar is an artificial reservoir, not a natural lake.'),
      s('8. 30-second revision', 'revision',
        'Gangotri → Gaumukh → Bhagirathi. Pindari → Pindar. Milam → Gori Ganga. Khatling → Bhilangana. Naini–Bhimtal–Sattal–Naukuchiatal = Kumaon lake cluster. Dodital → Asi Ganga. Roopkund = skeletal high-altitude lake. Hemkund = Chamoli + Sikh pilgrimage. Deoria Tal = Ukhimath/Rudraprayag. Vasuki Tal = Kedarnath region.')
    ],
    sourceNote: 'UKPSC-focused notes prepared from Uttarakhand Government, Kumaon Division and Uttarakhand Tourism sources. Exact glacier dimensions and changing measurements are intentionally omitted because river/source/location associations are higher-value for prelims.'
  },

  'Soils': {
    priority: 'HIGH', title: 'Soils of Uttarakhand',
    summary: 'Uttarakhand\'s soils vary strongly with relief, altitude, parent rock, vegetation, rainfall and river deposition. Focus on the Terai–Bhabar contrast, how soil changes with altitude, agricultural suitability and soil erosion, rather than detailed soil classifications.',
    sections: [
      p('1. The Terai–Bhabar contrast', 'must',
        'Uttarakhand\'s soils change as sharply as its relief does, running from the deep depositional soils of the plains to the thin residual soils of the high mountains, shaped along the way by altitude, slope, rainfall, vegetation, parent rock and how much material the rivers have deposited. The clearest contrast worth fixing early is between the two foothill belts covered in Physiography: Bhabar, closer to the mountains, has coarse, highly porous deposits of sand, gravel, pebbles and boulders, porous enough that streams can vanish straight into it, while the Terai just south of it has finer, moister alluvium that makes it genuinely fertile and well suited to intensive farming, above all rice, wheat and sugarcane, with Udham Singh Nagar the district to associate most closely with this belt.'),
      p('2. Alluvial, mountain and forest soils', 'understand',
        'Moving inland, the river valleys and plains, particularly around Haridwar and Udham Singh Nagar, carry alluvial soils deposited directly by rivers and are generally the state\'s most agriculturally productive land; lower hill valleys can carry similar alluvial sandy soils on a smaller scale. Climb higher and the soil is increasingly formed in place, from the weathering of the underlying rock, rather than being deposited by water; these residual or mountain soils vary hugely in depth and fertility depending on slope, rock type, vegetation and how much erosion is removing the weathered material, and on the steepest slopes they stay thin because nothing is left in place long enough to develop.',
        'Much of the state\'s hill and mountain area carries forest soils instead, whose character shifts with altitude, vegetation and climate: brown forest soils, often shallow and gravelly with a good deal of organic matter from decomposed vegetation, dominate under typical Himalayan forest, while podzolic soils, associated with cooler, more humid, coniferous conditions at higher elevations, form through active leaching driven by the wetter, cooler climate. At the very top, sub-alpine and alpine soils take over, shaped by low temperature, snow cover, sparse vegetation and a short growing season, including the meadow soils that sit beneath the high bugyals, and agricultural possibility narrows steadily as this altitude climb continues.'),
      p('3. The altitude ladder, and what grows where', 'must',
        'Put together, this gives a fairly predictable ladder running from the plains to the peaks: fertile alluvial soils in the Terai and plains, coarse porous deposits in the Bhabar, alluvial sandy or residual sandy-loam soils in the lower hills, sandy-loam and forest soils through the middle hills, red-to-dark mountain soils higher up, and cold-climate alpine and darker clayey soils at the very top — the exact pattern varies locally, but this general sequence is worth having ready as a single mental model.',
        'This soil ladder maps fairly closely onto what actually gets grown where: the Terai and plains support intensive cultivation of rice, wheat, sugarcane, pulses and oilseeds; lower-hill sandy-loam soils support cereals, pulses, vegetables and fruit; the middle and higher hills support finger millet, wheat, potato, pulses and horticulture; and the coolest high-altitude areas suit temperate fruit such as apple, pear, peach and plum wherever the other growing conditions line up too. Soil is only one input among several, though — altitude, climate, rainfall, irrigation and slope all matter just as much in deciding what a given patch of land can actually grow.'),
      p('4. Erosion and conservation', 'must',
        'Steep slopes make mountain soil highly vulnerable to erosion, and heavy monsoon rainfall can strip exposed topsoil quickly, a risk made worse by deforestation, road cutting and poorly managed construction that leave slopes with even less protection; the result is both lower agricultural productivity on the slope itself and more sediment ending up in the rivers below. Erosion and landslides are closely related but are not the same process: erosion removes soil gradually, while a landslide is a sudden mass movement of earth and rock downslope. The standard responses are to keep forest and vegetation cover intact, terrace the land to reduce the effective slope and slow runoff, farm along the contour and use bunding, and manage whole watersheds rather than isolated slopes, all more important in Uttarakhand than in most states, because so much of its agriculture and settlement sits on exactly this kind of fragile mountain terrain.'),
      s('5. What to memorize', 'must',
        'Terai → fertile alluvial soil (rice, wheat, sugarcane); Bhabar → coarse, gravelly, porous soil',
        'River valleys/plains → alluvial soils; mountain slopes → residual/forest soils',
        'Brown forest soil → Himalayan forests; Podzolic soil → cool, humid, higher-altitude/coniferous; Alpine soil → very high elevations/meadows',
        'Steep slope + monsoon rainfall → severe erosion risk'),
      s('6. Exam traps', 'trap',
        'Bhabar is not wetter than Terai — Bhabar is porous and dry, Terai retains more surface moisture.',
        'Not all Himalayan soils are infertile; fertility depends on location, depth, vegetation and management.',
        'Podzolic soils belong to cool, humid, higher-altitude environments, not the hot Terai plains.',
        'Soil erosion (gradual removal of soil) is not the same process as a landslide (sudden mass movement).'),
      s('7. 30-second revision', 'revision',
        'Terai = fine, moist, fertile alluvium. Bhabar = coarse, gravelly, porous. Valleys/plains = alluvial soils. Hills = residual + forest soils. Higher cool humid areas = podzolic tendencies. Very high areas = alpine/meadow soils. Steep slopes + monsoon = erosion. Terracing + vegetation = conservation.')
    ],
    sourceNote: 'UKPSC-focused notes prepared using Uttarakhand Government agro-climatic information and the Uttarakhand State of Environment Report. Detailed soil-profile chemistry and specialist classifications are intentionally excluded because they are lower-yield for Upper PCS prelims.'
  }
};
