const S = 'geography';
const ST = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];

// [difficulty, question, options, answerIndex, explanation, fixedOptionOrder?]
const rows = {
  'Physiography of India': [
    ['easy', 'Which is the northernmost and highest of the three parallel Himalayan ranges?', ['Himadri (Greater Himalayas)', 'Himachal (Lesser Himalayas)', 'Shiwaliks', 'Karakoram'], 0, 'Contains the tallest peaks, permanently snow-covered.'],
    ['easy', 'Structural basins called "duns," of which Dehradun is the most famous example, lie between which two Himalayan ranges?', ['Shiwaliks and Himachal', 'Himadri and Himachal', 'Shiwaliks and the Northern Plains', 'Himadri and Karakoram'], 0, 'The Shiwaliks are the youngest, southernmost range.'],
    ['medium', 'Which of the following is the correct north-to-south sequence of alluvial belts in the Northern Plains?', ['Bhabar, Terai, Bhangar/Khadar', 'Terai, Bhabar, Khadar/Bhangar', 'Khadar, Bhangar, Bhabar, Terai', 'Bhangar, Khadar, Terai, Bhabar'], 0, 'Bhabar is porous gravel at the Shiwalik foot; Terai is where rivers resurface.', true],
    ['medium', 'The Peninsular Plateau is bounded in the northwest by which range, among the world\'s oldest fold mountains?', ['The Aravalli Range', 'The Vindhya Range', 'The Satpura Range', 'The Western Ghats'], 0, 'In sharp age contrast to the young Himalayas.'],
    ['medium', 'The Deccan Plateau was formed primarily through which geological process?', ['Volcanic eruptions (Deccan Traps)', 'Coral reef accumulation', 'Glacial deposition', 'Wind-driven sand accumulation'], 0, 'A vast lava plateau.'],
    ['medium', 'Which range along India\'s west coast is generally more continuous and higher than the corresponding range on the east coast?', ['The Western Ghats', 'The Eastern Ghats', 'The Aravalli Range', 'The Vindhya Range'], 0, 'A UNESCO-recognised biodiversity hotspot.'],
    ['medium', 'The Lakshadweep Islands, in the Arabian Sea, are of which geological origin?', ['Coral (atoll) origin', 'Volcanic/tectonic origin', 'Glacial origin', 'Alluvial deposition'], 0, 'Distinct from the Andaman & Nicobar Islands.'],
    ['medium', 'The Andaman and Nicobar Islands are considered an extension of which mountain range?', ['The Arakan Yoma range', 'The Himalayas', 'The Western Ghats', 'The Aravalli Range'], 0, 'Tectonic/volcanic in origin, unlike Lakshadweep.'],
    ['hard', 'Consider the following statements:\n1. The Bhangar represents newer, more fertile floodplain alluvium compared to the Khadar.\n2. The Thar Desert lies in northwestern Rajasthan.\nWhich of the statements is/are correct?', ST, 1, 'The Khadar, not the Bhangar, is the newer and more fertile alluvium; the Bhangar is the older, slightly elevated alluvium.', true],
    ['hard', 'Which of the following correctly distinguishes India\'s two main island groups by geological origin?', ['Lakshadweep = coral origin; Andaman & Nicobar = tectonic/volcanic origin', 'Lakshadweep = tectonic origin; Andaman & Nicobar = coral origin', 'Both island groups share the same coral origin', 'Both island groups share the same tectonic origin'], 0, 'A frequently tested origin distinction.']
  ],

  'Drainage': [
    ['easy', 'The Ganga is formed at Devprayag by the confluence of the Alaknanda and which river?', ['Bhagirathi', 'Yamuna', 'Mandakini', 'Ghaghara'], 0, 'The Bhagirathi originates at the Gangotri glacier.'],
    ['easy', 'Which two Peninsular rivers are exceptions to the general west-to-east, Bay of Bengal-bound flow pattern?', ['Narmada and Tapi', 'Godavari and Krishna', 'Kaveri and Krishna', 'Mahanadi and Godavari'], 0, 'Both flow west into the Arabian Sea through rift valleys.'],
    ['easy', 'The Brahmaputra is known as the Yarlung Tsangpo in which country before entering India?', ['China (Tibet)', 'Nepal', 'Bhutan', 'Myanmar'], 0, 'Takes a dramatic U-turn around the eastern Himalayan syntaxis.'],
    ['medium', 'Which five rivers, tributaries of the Indus, give Punjab its name ("land of five rivers")?', ['Jhelum, Chenab, Ravi, Beas and Sutlej', 'Ganga, Yamuna, Ghaghara, Gandak and Kosi', 'Godavari, Krishna, Kaveri, Narmada and Tapi', 'Indus, Jhelum, Chenab, Sutlej and Beas'], 0, 'Most of the Indus system today lies in Pakistan.'],
    ['medium', 'The Indus Waters Treaty (1960), governing the Indus river system between India and Pakistan, was brokered by which institution?', ['The World Bank', 'The United Nations', 'The International Monetary Fund', 'The Asian Development Bank'], 0, 'A key governance framework for the Indus system.'],
    ['medium', 'The Ganga and Brahmaputra together form which large delta before draining into the Bay of Bengal?', ['The Sundarbans', 'The Rann of Kutch', 'The Coromandel delta', 'The Thar delta'], 0, 'The world\'s largest mangrove delta.'],
    ['medium', 'Which Peninsular river is sometimes called the "Dakshin Ganga" and is the largest Peninsular river by length and basin size?', ['Godavari', 'Krishna', 'Kaveri', 'Mahanadi'], 0, 'Rises in the Western Ghats and flows into the Bay of Bengal.'],
    ['medium', 'The Kaveri river is notable for forming which waterfall?', ['Shivanasamudra Falls', 'Jog Falls', 'Dhuandhar Falls', 'Chitrakote Falls'], 0, 'Also central to the Cauvery water-sharing dispute among southern states.'],
    ['hard', 'Consider the following statements:\n1. Himalayan rivers exhibit antecedent drainage, cutting deep gorges through the rising mountains.\n2. Peninsular rivers are generally perennial, fed by year-round snowmelt.\nWhich of the statements is/are correct?', ST, 0, 'Peninsular rivers are largely seasonal and rain-fed, not perennial or snow-fed.', true],
    ['hard', 'Which of the following rivers does NOT originate in or near the Western Ghats?', ['Chenab', 'Godavari', 'Krishna', 'Kaveri'], 0, 'The Chenab is a Himalayan river, a tributary of the Indus.']
  ],

  'Climate & Monsoon': [
    ['easy', 'The Southwest Monsoon conventionally arrives at the Kerala coast around which date?', ['1 June', '1 July', '15 May', '15 August'], 0, 'Marks the conventional monsoon onset.'],
    ['easy', 'India\'s climate is overall classified under which broad type, reflecting the seasonal wind reversal?', ['Monsoon type', 'Mediterranean type', 'Equatorial type', 'Continental type'], 0, 'Distinguishes it from latitude-based or continental climate classifications.'],
    ['medium', 'The Southwest Monsoon splits into which two branches over India?', ['Arabian Sea branch and Bay of Bengal branch', 'Northern branch and Southern branch', 'Coastal branch and Inland branch', 'Eastern branch and Western branch'], 0, 'The two branches eventually merge over northern India.'],
    ['medium', 'The Northeast (retreating) Monsoon is the primary source of rainfall for which region?', ['Tamil Nadu and the southeast coast', 'Punjab and Haryana', 'Rajasthan', 'Kashmir'], 0, 'A distinctive regional exception to the summer-monsoon-dominant pattern elsewhere.'],
    ['medium', 'El Niño (warming of central/eastern Pacific waters) is generally associated with which effect on the Indian monsoon?', ['A weaker or delayed monsoon', 'A stronger monsoon', 'No measurable effect', 'An earlier-than-usual monsoon onset only'], 0, 'La Niña, the opposite phase, correlates with stronger monsoons.'],
    ['medium', 'The mechanism driving the Southwest Monsoon\'s onset is primarily', ['Differential heating between the Indian landmass and surrounding ocean', 'Cooling of the Indian Ocean', 'Volcanic activity in the Himalayas', 'Polar wind patterns reaching India'], 0, 'Creates a low-pressure zone over the heated landmass, drawing in moist winds.'],
    ['hard', 'Consider the following statements:\n1. Tamil Nadu receives more of its annual rainfall from the Southwest Monsoon than the Northeast Monsoon.\n2. La Niña is generally associated with a stronger Indian monsoon.\nWhich of the statements is/are correct?', ST, 1, 'Tamil Nadu actually receives more rainfall from the winter Northeast Monsoon than the summer Southwest Monsoon.', true],
    ['hard', 'The Bay of Bengal branch of the Southwest Monsoon enters India through which general direction?', ['The northeast, then bends west across the Gangetic plains', 'The southwest coast directly', 'The northwest, through Rajasthan', 'The extreme south only'], 0, 'Eventually merges with the Arabian Sea branch over northern India.']
  ],

  'Soils': [
    ['easy', 'Which is India\'s most widespread and agriculturally most important soil type?', ['Alluvial soil', 'Black soil', 'Red soil', 'Laterite soil'], 0, 'Covers the Northern Plains, supports wheat and rice cultivation.'],
    ['easy', 'Black (regur) soil, well suited to cotton cultivation, formed primarily from the weathering of which rock?', ['Deccan Trap lava rock', 'Granite', 'Sandstone', 'Limestone'], 0, 'Found across Maharashtra, Madhya Pradesh and parts of Gujarat.'],
    ['medium', 'Red soil, found across large parts of the Peninsular Plateau, gets its characteristic colour from which mineral content?', ['Iron oxide', 'Calcium carbonate', 'Potassium', 'Magnesium'], 0, 'Suited to crops like millets and groundnut.'],
    ['medium', 'Laterite soil, found in high-rainfall areas like the Western Ghats, is typically', ['Poor in most nutrients due to intense leaching', 'Extremely rich in nitrogen', 'The most fertile soil type in India', 'Found only in desert regions'], 0, 'Forms through intense leaching in tropical wet-dry climates.'],
    ['medium', 'Arid/desert soil, found in Rajasthan\'s Thar region, is characterised as', ['Sandy and saline, poor in organic matter', 'Rich in organic matter and highly fertile', 'The same composition as alluvial soil', 'Ideal for rice cultivation without irrigation'], 0, 'Generally unproductive without irrigation.'],
    ['hard', 'Consider the following statements:\n1. Black soil retains moisture exceptionally well, making it well suited to cotton.\n2. Laterite soil is generally very rich in most plant nutrients due to high rainfall.\nWhich of the statements is/are correct?', ST, 0, 'Laterite soil is generally nutrient-poor precisely because high rainfall leaches nutrients away.', true]
  ],

  'Natural Vegetation': [
    ['easy', 'Tropical Evergreen forests in India, requiring very high rainfall (over 200 cm), are found in the Western Ghats, Northeast India and which island group?', ['Andaman & Nicobar Islands', 'Lakshadweep Islands', 'No island group has this forest type', 'Only mainland regions have this forest type'], 0, 'Characterised by dense, multi-layered, year-round green canopy.'],
    ['easy', 'Which is India\'s single most widespread forest type by area?', ['Tropical Deciduous forest', 'Tropical Evergreen forest', 'Thorn and scrub forest', 'Mountain/alpine forest'], 0, 'Occurs in moderate-rainfall areas (75-200 cm).'],
    ['medium', 'Moist deciduous forest, associated with a higher rainfall sub-band than dry deciduous forest, is typically dominated by which tree species?', ['Sal', 'Teak', 'Deodar', 'Rhododendron'], 0, 'Dry deciduous forest, by contrast, is typically Teak-dominated.'],
    ['medium', 'Thorn and scrub forests, found in low-rainfall semi-arid regions like Rajasthan and Gujarat, occur where annual rainfall is', ['Under 75 cm', 'Over 200 cm', 'Between 100-150 cm exactly', 'Over 300 cm'], 0, 'Sparse, drought-adapted vegetation like acacia.'],
    ['medium', 'Mountain vegetation in the Himalayan belt is primarily organised according to which factor?', ['Altitude', 'Soil type alone', 'Distance from the coast', 'Latitude alone'], 0, 'Altitude functions as a substitute for latitude in a single mountain range.'],
    ['hard', 'Consider the following statements:\n1. Dry deciduous forest is typically dominated by Sal.\n2. Tropical Deciduous forest is India\'s most widespread forest type.\nWhich of the statements is/are correct?', ST, 1, 'Sal is associated with moist deciduous forest, not dry deciduous (which is Teak-dominated).', true]
  ],

  'Agriculture': [
    ['easy', 'Rice, cotton and sugarcane are typically sown during which cropping season?', ['Kharif', 'Rabi', 'Zaid', 'None of these seasons'], 0, 'Sown with the onset of the Southwest Monsoon.'],
    ['easy', 'Wheat, gram and mustard are typically sown during which cropping season?', ['Rabi', 'Kharif', 'Zaid', 'None of these seasons'], 0, 'Sown after the monsoon withdraws, around October-November.'],
    ['easy', 'The Green Revolution, which dramatically increased Indian foodgrain production, began around which decade?', ['1960s', '1940s', '1980s', '2000s'], 0, 'Primarily driven by high-yielding wheat varieties.'],
    ['medium', 'The Green Revolution\'s impact was most concentrated in which states?', ['Punjab, Haryana and western Uttar Pradesh', 'West Bengal and Assam', 'Tamil Nadu and Kerala', 'Rajasthan and Gujarat'], 0, 'Its benefits were significantly less pronounced in rain-fed, non-irrigated regions.'],
    ['medium', 'Which scientist is widely credited as the leading Indian figure behind the Green Revolution\'s implementation?', ['M.S. Swaminathan', 'C.V. Raman', 'Homi Bhabha', 'Vikram Sarabhai'], 0, 'A pivotal figure in Indian agricultural science.'],
    ['medium', 'Cotton cultivation in India is closely tied to which soil type?', ['Black (regur) soil', 'Laterite soil', 'Alluvial soil', 'Arid soil'], 0, 'Explaining its concentration in Gujarat, Maharashtra and Madhya Pradesh.'],
    ['medium', 'Assam and West Bengal\'s Darjeeling district are both major producers of which plantation crop?', ['Tea', 'Coffee', 'Rubber', 'Cocoa'], 0, 'Assam is India\'s largest tea-producing state.'],
    ['hard', 'Consider the following statements:\n1. Zaid is a short cropping season between the Rabi harvest and Kharif sowing.\n2. Wheat is primarily a Kharif crop.\nWhich of the statements is/are correct?', ST, 0, 'Wheat is a Rabi crop, not Kharif.', true],
    ['hard', 'Which of the following pairs of crop and its primary growing season is INCORRECT?', ['Barley — Kharif', 'Rice — Kharif', 'Mustard — Rabi', 'Watermelon — Zaid'], 0, 'Barley is a Rabi crop, sown after the monsoon withdraws.']
  ],

  'Minerals & Energy': [
    ['easy', 'The Chota Nagpur Plateau, India\'s mineral heartland, spans which states?', ['Jharkhand, Odisha, Chhattisgarh and West Bengal', 'Rajasthan, Gujarat and Maharashtra', 'Tamil Nadu, Kerala and Karnataka', 'Punjab, Haryana and Uttar Pradesh'], 0, 'Concentrates a disproportionate share of India\'s coal and iron ore.'],
    ['easy', 'Which state is India\'s largest producer of bauxite, the ore of aluminium?', ['Odisha', 'Jharkhand', 'Gujarat', 'Rajasthan'], 0, 'Significant deposits also found in Gujarat and Jharkhand.'],
    ['easy', 'India\'s first commercial nuclear power plant was located at', ['Tarapur, Maharashtra', 'Kudankulam, Tamil Nadu', 'Kalpakkam, Tamil Nadu', 'Narora, Uttar Pradesh'], 0, 'A frequently tested "first" fact.'],
    ['medium', 'Bombay High, India\'s most productive offshore petroleum field, is located off the coast of which city?', ['Mumbai', 'Chennai', 'Kolkata', 'Visakhapatnam'], 0, 'A major offshore petroleum production zone.'],
    ['medium', 'Which region is historically significant as India\'s oldest oil-producing area, with Digboi as a key site?', ['Assam', 'Gujarat', 'Rajasthan', 'Maharashtra'], 0, 'Predates Bombay High\'s later prominence.'],
    ['medium', 'Manganese, essential for steel-making, is found significantly in which states?', ['Odisha, Madhya Pradesh and Karnataka', 'Punjab, Haryana and Rajasthan', 'Kerala, Tamil Nadu and Goa', 'Assam, Meghalaya and Tripura'], 0, 'A key input alongside iron ore for steel production.'],
    ['medium', 'Rajasthan and Gujarat are particularly prominent for which renewable energy source, given their high solar insolation and available arid land?', ['Solar power', 'Wind power', 'Hydropower', 'Tidal power'], 0, 'Tamil Nadu and Gujarat, by contrast, are prominent for wind capacity.'],
    ['hard', 'Consider the following statements:\n1. Thermal (coal-based) power remains India\'s dominant electricity source.\n2. Hydropower potential in India concentrates mainly in the Himalayan states and parts of the Northeast.\nWhich of the statements is/are correct?', ST, 2, 'Both statements are correct.', true]
  ],

  'Industries & Transport': [
    ['easy', 'Jamshedpur, home to Tata Steel, is located in which state?', ['Jharkhand', 'Odisha', 'Chhattisgarh', 'West Bengal'], 0, 'Sits at the heart of the Chota Nagpur mineral belt.'],
    ['easy', 'Which city is often called India\'s "Silicon Valley" for its concentration of IT industry?', ['Bengaluru', 'Hyderabad', 'Pune', 'Chennai'], 0, 'One of several major IT hubs in India.'],
    ['medium', 'The Golden Quadrilateral highway network connects which four major cities?', ['Delhi, Mumbai, Chennai and Kolkata', 'Delhi, Bengaluru, Chennai and Kolkata', 'Mumbai, Chennai, Hyderabad and Delhi', 'Delhi, Mumbai, Pune and Kolkata'], 0, 'India\'s largest highway network project, forming a quadrilateral loop.'],
    ['medium', 'Bhilai, Rourkela and Durgapur are all major locations of which industry?', ['Iron and steel production', 'Cotton textiles', 'Information Technology', 'Automobile manufacturing'], 0, 'Follows the Chota Nagpur mineral belt\'s raw material base.'],
    ['medium', 'Cotton textiles historically concentrated in which two cities, leveraging local cotton supply and port access?', ['Mumbai and Ahmedabad', 'Kolkata and Chennai', 'Delhi and Jaipur', 'Bengaluru and Hyderabad'], 0, 'Reflects the western-India black-soil cotton belt.'],
    ['hard', 'Consider the following statements:\n1. The Golden Quadrilateral includes the North-South and East-West Corridors as part of the same single loop.\n2. Indian Railways is organisationally divided into administrative zones.\nWhich of the statements is/are correct?', ST, 1, 'The North-South and East-West Corridors are separate, additional highway projects supplementing the Golden Quadrilateral, not part of the same loop.', true]
  ],

  'Population & Census': [
    ['easy', 'India\'s most recently completed decennial Census was conducted in which year?', ['2011', '2001', '2021', '1991'], 0, 'The next scheduled round has faced well-publicised delays.'],
    ['easy', 'According to the 2011 Census, which state is India\'s most populous?', ['Uttar Pradesh', 'Maharashtra', 'Bihar', 'West Bengal'], 0, 'India\'s single most populous state.'],
    ['medium', 'What was India\'s sex ratio (females per 1,000 males) according to the 2011 Census?', ['943', '933', '950', '900'], 0, 'An improvement over the 2001 figure.'],
    ['medium', 'Which state recorded the highest sex ratio according to the 2011 Census?', ['Kerala', 'Haryana', 'Punjab', 'Bihar'], 0, 'Kerala also tops India\'s literacy rate rankings.'],
    ['medium', 'What was India\'s approximate literacy rate according to the 2011 Census?', ['74%', '65%', '82%', '90%'], 0, 'Kerala recorded the highest state literacy rate.'],
    ['medium', 'The "demographic dividend" concept refers to the economic growth potential arising from', ['A large working-age population relative to dependents', 'A large elderly population', 'A declining total population', 'Equal numbers of dependents and workers'], 0, 'Depends on adequate education, skilling and employment to be realised.'],
    ['hard', 'Consider the following statements:\n1. India overtook China as the world\'s most populous country according to the 2011 Census.\n2. Bihar recorded among the highest population densities among major Indian states per the 2011 Census.\nWhich of the statements is/are correct?', ST, 1, 'India overtaking China is a more recent (around 2023) UN estimate, not a 2011 Census finding.', true]
  ],

  'World Geography': [
    ['easy', 'How many continents are conventionally recognised in the standard seven-continent model?', ['Seven', 'Five', 'Six', 'Eight'], 0, 'Asia is both the largest and most populous continent.'],
    ['easy', 'Which is the largest and deepest of the world\'s five oceans?', ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'], 0, 'The Indian Ocean, bordering India, is the third-largest.'],
    ['easy', 'Mount Everest, the world\'s highest peak, is located on the border of which two countries?', ['Nepal and China', 'India and Nepal', 'India and China', 'Nepal and Bhutan'], 0, 'Part of the Himalayan range, the world\'s highest mountain system.'],
    ['medium', 'Which mountain range is the world\'s longest continental mountain range?', ['The Andes', 'The Himalayas', 'The Rockies', 'The Alps'], 0, 'Located in South America.'],
    ['medium', 'Which is the world\'s largest desert overall, when defined by extremely low precipitation rather than temperature?', ['Antarctica', 'The Sahara', 'The Gobi Desert', 'The Thar Desert'], 0, 'A "cold desert" — the Sahara is only the largest HOT desert.'],
    ['medium', 'Which two rivers are consistently cited as the world\'s two longest, with their exact ranking debated?', ['The Nile and the Amazon', 'The Amazon and the Mississippi', 'The Nile and the Yangtze', 'The Ganga and the Amazon'], 0, 'The Amazon carries by far the largest discharge of any river.'],
    ['hard', 'Consider the following statements:\n1. The Sahara is the world\'s largest desert overall.\n2. The Amazon river carries the largest discharge (water volume) of any river in the world.\nWhich of the statements is/are correct?', ST, 1, 'Antarctica, not the Sahara, is the world\'s largest desert overall; the Sahara is only the largest hot desert.', true]
  ]
};

export const geographyBank = Object.entries(rows).flatMap(([topic, list]) =>
  list.map(([difficulty, q, options, answer, explanation, fixed]) => ({
    subject: S, topic, difficulty, q, options, answer, explanation, fixed: Boolean(fixed)
  }))
);
