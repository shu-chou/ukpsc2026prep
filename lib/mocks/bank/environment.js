const S = 'environment';
const ST = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];

// [difficulty, question, options, answerIndex, explanation, fixedOptionOrder?]
const rows = {
  'Ecology Basics': [
    ['easy', 'Which organisms are classified as "producers" in an ecosystem?', ['Green plants and algae, which convert solar energy via photosynthesis', 'Carnivores that eat other animals', 'Bacteria and fungi that decompose organic matter', 'Herbivores that eat plants'], 0, 'Form the base of virtually all food chains.'],
    ['easy', 'What is the role of decomposers in an ecosystem?', ['Breaking down dead organic matter and returning nutrients to the environment', 'Producing energy through photosynthesis', 'Eating only other decomposers', 'Regulating the water cycle exclusively'], 0, 'Bacteria and fungi are the primary decomposers.'],
    ['medium', 'What is the key difference between a food chain and a food web?', ['A food web is an interconnected network of multiple overlapping food chains', 'A food chain includes decomposers while a food web does not', 'A food web applies only to aquatic ecosystems', 'There is no meaningful difference between the two'], 0, 'Most organisms eat and are eaten by more than one species.'],
    ['medium', 'According to the "10% law" of energy transfer, approximately what percentage of energy transfers from one trophic level to the next?', ['10%', '50%', '90%', '25%'], 0, 'The rest is lost as heat and through metabolic processes.'],
    ['medium', 'The "10% law" of energy transfer explains why', ['Food chains rarely extend beyond 4-5 trophic levels', 'Apex predators always outnumber producers', 'Energy cycles endlessly within an ecosystem', 'Decomposers occupy the highest trophic level'], 0, 'A direct consequence of the inefficient energy transfer between levels.'],
    ['hard', 'Consider the following statements:\n1. Energy flows one-directionally through an ecosystem, entering as sunlight and exiting as heat.\n2. Matter/nutrients also flow one-directionally, exiting the ecosystem permanently after use.\nWhich of the statements is/are correct?', ST, 0, 'Matter/nutrients cycle repeatedly through biogeochemical cycles, unlike the one-way flow of energy.', true]
  ],

  'Biodiversity & Conservation': [
    ['easy', 'India is recognised as one of how many "megadiverse" countries globally?', ['17', '10', '25', '36'], 0, 'Countries harbouring the majority of Earth\'s species and high endemism.'],
    ['easy', 'How many of the world\'s biodiversity hotspots does India host?', ['4', '2', '6', '1'], 0, 'Himalaya, Western Ghats-Sri Lanka, Indo-Burma and Sundaland.'],
    ['medium', 'In-situ conservation refers to protecting species', ['Within their natural habitat', 'Outside their natural habitat, such as in zoos', 'Only through legal prohibition of hunting', 'Only through international trade bans'], 0, 'National Parks and Sanctuaries are the primary in-situ tools.'],
    ['medium', 'Ex-situ conservation is typically used as', ['A supplementary or last-resort measure for critically endangered species', 'The primary and preferred conservation strategy overall', 'A replacement for all protected areas', 'Only for plant species, never animals'], 0, 'In-situ conservation is generally considered the more holistic approach.'],
    ['medium', 'Which body maintains the globally recognised system for classifying species by extinction risk?', ['IUCN (International Union for Conservation of Nature)', 'UNFCCC', 'CITES Secretariat exclusively', 'The World Bank'], 0, 'Known as the IUCN Red List.'],
    ['medium', 'In the IUCN Red List, which category indicates a HIGHER extinction risk?', ['Critically Endangered', 'Vulnerable', 'Near Threatened', 'Least Concern'], 0, 'The categories run, in decreasing risk: Extinct, Extinct in the Wild, Critically Endangered, Endangered, Vulnerable, Near Threatened, Least Concern.'],
    ['hard', 'Consider the following statements:\n1. The IUCN Red List and a country\'s Wildlife Protection Act Schedules are the same classification system.\n2. India\'s Nicobar Islands fall within the Sundaland biodiversity hotspot.\nWhich of the statements is/are correct?', ST, 1, 'The IUCN Red List (international, scientific) and Wildlife Protection Act Schedules (national, legal) are distinct systems.', true]
  ],

  'Protected Areas & Wildlife': [
    ['easy', 'Which protected area category offers the STRICTEST level of protection in India?', ['National Park', 'Wildlife Sanctuary', 'Conservation Reserve', 'Community Reserve'], 0, 'No human activity, grazing or private rights permitted.'],
    ['easy', 'Project Tiger, India\'s flagship tiger conservation programme, was launched in which year?', ['1973', '1992', '1986', '2002'], 0, 'Launched at Corbett National Park, Uttarakhand.'],
    ['easy', 'Project Elephant, protecting elephant habitats and corridors, was launched in which year?', ['1992', '1973', '1986', '2010'], 0, 'Also addresses human-elephant conflict.'],
    ['medium', 'How can the boundaries of a Wildlife Sanctuary be altered, in contrast to a National Park?', ['By a state government notification', 'Only through an act of Parliament', 'They can never be altered under any circumstances', 'Only by a Supreme Court order'], 0, 'National Park boundaries require the full legislative process to alter.'],
    ['medium', 'Which of the following best describes India\'s current global standing in wild tiger conservation?', ['India holds a majority of the world\'s wild tiger population', 'India has no wild tigers remaining', 'India\'s tiger population is smaller than most other tiger-range countries', 'Tiger conservation in India began only after 2000'], 0, 'A result widely attributed to Project Tiger\'s success.'],
    ['medium', 'A Biosphere Reserve is structured around which three zones?', ['Core, buffer and transition zones', 'North, south and central zones', 'Urban, rural and forest zones', 'Wet, dry and hazardous zones'], 0, 'The core zone typically overlaps with an existing National Park.'],
    ['hard', 'Consider the following statements:\n1. Conservation Reserves offer stricter protection than National Parks.\n2. Community Reserves can be declared without displacing existing local rights.\nWhich of the statements is/are correct?', ST, 1, 'Conservation Reserves are a lighter-touch category than National Parks, not stricter.', true]
  ],

  'Climate Change': [
    ['easy', 'Which greenhouse gas is the largest contributor to human-caused warming by total volume?', ['Carbon Dioxide (CO2)', 'Methane (CH4)', 'Nitrous Oxide (N2O)', 'Fluorinated gases'], 0, 'Primarily from fossil fuel combustion.'],
    ['easy', 'The UNFCCC, the foundational international climate treaty, was established at which event in 1992?', ['The Rio Earth Summit', 'The Kyoto Conference', 'The Paris Climate Conference (COP21)', 'The Stockholm Conference'], 0, 'Establishes the overall framework for global climate cooperation.'],
    ['medium', 'The Kyoto Protocol (1997) set binding emission-reduction targets specifically for which group of countries?', ['Developed countries', 'Developing countries only', 'All countries equally', 'Only island nations'], 0, 'Based on the principle of "common but differentiated responsibilities."'],
    ['medium', 'The Paris Agreement (2015) shifted the international climate framework toward', ['A universal system where all countries submit voluntary Nationally Determined Contributions (NDCs)', 'Binding targets for developed countries only, continuing the Kyoto model', 'Eliminating all climate targets', 'A single global carbon tax'], 0, 'Replaced the developed-vs-developing binary of the Kyoto Protocol.'],
    ['medium', 'The Paris Agreement\'s overarching temperature goal is to limit global warming to', ['Well below 2°C above pre-industrial levels, with an aspirational 1.5°C target', 'Exactly 5°C above pre-industrial levels', 'No specific temperature target was set', '10°C above pre-industrial levels'], 0, 'Adopted at COP21 in Paris.'],
    ['medium', 'Which greenhouse gas, while less abundant than CO2, is considered far more potent per molecule?', ['Methane', 'Oxygen', 'Nitrogen', 'Argon'], 0, 'Emitted from agriculture/livestock, landfills and fossil fuel extraction.'],
    ['medium', 'India\'s Nationally Determined Contributions (NDCs) under the Paris Agreement primarily focus on', ['Reducing emissions intensity (per unit of GDP), not an absolute emissions cap', 'An absolute cap on total national emissions', 'Eliminating all fossil fuel use immediately', 'Reducing population growth'], 0, 'Reflects India\'s continued development needs.'],
    ['hard', 'Consider the following statements:\n1. Methane is the largest greenhouse gas contributor to warming by total atmospheric volume.\n2. The Kyoto Protocol entered into force in 2005.\nWhich of the statements is/are correct?', ST, 1, 'CO2, not methane, is the largest contributor by total volume — methane is more potent per molecule but present in smaller quantities.', true]
  ],

  'Pollution': [
    ['easy', 'The Air Quality Index (AQI) in India is based on concentrations of which pollutants, among others?', ['PM2.5 and PM10', 'Only carbon dioxide', 'Only water vapour', 'Only ozone'], 0, 'Also includes NO2, SO2, CO and ozone.'],
    ['easy', 'Which particulate matter size is generally considered the most health-critical air pollutant?', ['PM2.5', 'PM10', 'PM50', 'PM100'], 0, 'Small enough to penetrate deep into lungs and bloodstream.'],
    ['medium', 'A HIGHER Biochemical Oxygen Demand (BOD) value in a water sample indicates', ['More organic pollution and less oxygen available for aquatic life', 'Cleaner water with more oxygen available', 'No relationship to water pollution levels', 'Higher levels of dissolved salts only'], 0, 'A frequently reversed fact worth remembering precisely.'],
    ['medium', 'In North India, winter air pollution is significantly worsened by which additional seasonal factor?', ['Crop residue/stubble burning combined with weather conditions trapping pollutants', 'Increased ocean currents', 'Reduced vehicular traffic', 'Higher summer temperatures'], 0, 'A recurring, well-documented seasonal pollution pattern.'],
    ['medium', 'India\'s solid waste management framework emphasises which foundational principle?', ['Waste segregation at source (wet, dry, hazardous)', 'Burning all waste immediately', 'Dumping all waste in a single unsorted landfill', 'Exporting all waste abroad'], 0, 'Reflected in initiatives like the Swachh Bharat Mission.'],
    ['hard', 'Consider the following statements:\n1. Low BOD indicates cleaner water with more available oxygen for aquatic life.\n2. PM10 particles are smaller and more health-hazardous than PM2.5 particles.\nWhich of the statements is/are correct?', ST, 0, 'PM2.5, not PM10, is the smaller and generally more health-hazardous particulate matter.', true]
  ],

  'Environmental Laws & Conventions': [
    ['easy', 'The Wildlife (Protection) Act, establishing India\'s protected-area system, was enacted in which year?', ['1972', '1974', '1981', '1986'], 0, 'The earliest of the four major Indian environmental laws.'],
    ['easy', 'The Environment (Protection) Act, 1986, was enacted in direct response to which disaster?', ['The Bhopal Gas Tragedy (1984)', 'The Kedarnath floods (2013)', 'The Chernobyl disaster', 'The Bhuj earthquake'], 0, 'Serves as the umbrella framework legislation.'],
    ['medium', 'The Water (Prevention and Control of Pollution) Act was enacted in which year?', ['1974', '1972', '1981', '1986'], 0, 'Established Central and State Pollution Control Boards.'],
    ['medium', 'The Air (Prevention and Control of Pollution) Act was enacted in which year?', ['1981', '1972', '1974', '1986'], 0, 'Extended the Pollution Control Board framework to air pollution.'],
    ['medium', 'The National Green Tribunal (NGT), a specialised body for resolving environmental cases, was established in which year?', ['2010', '1986', '1972', '2000'], 0, 'Provides dedicated environmental law expertise, unlike ordinary courts.'],
    ['medium', 'CITES (1973) primarily regulates', ['International trade in endangered plants and animals', 'Domestic protected areas only', 'Climate change emissions', 'Wetland conservation exclusively'], 0, 'Categorises species into Appendices by protection level needed.'],
    ['medium', 'The Ramsar Convention (1971) provides a framework for the conservation of', ['Wetlands of international importance', 'Endangered species trade', 'Greenhouse gas emissions', 'Forest cover exclusively'], 0, 'Named after the Iranian city where it was signed.'],
    ['medium', 'The Convention on Biological Diversity (CBD, 1992) addresses', ['Biodiversity conservation, sustainable use, and fair benefit-sharing from genetic resources', 'Only climate change mitigation', 'Only marine pollution', 'Only endangered species trade'], 0, 'Adopted at the same Rio Earth Summit as the UNFCCC.'],
    ['hard', 'Consider the following statements:\n1. The Wildlife Protection Act (1972), Water Act (1974), Air Act (1981) and Environment Protection Act (1986) were enacted in that chronological order.\n2. CITES specifically regulates habitat protection rather than international trade.\nWhich of the statements is/are correct?', ST, 0, 'CITES regulates international trade in endangered species specifically, not habitat protection.', true]
  ],

  'Himalayan Environment': [
    ['easy', 'The Himalaya\'s structural environmental fragility is primarily attributed to which geological characteristic?', ['Its young age and ongoing tectonic activity (India-Eurasia plate collision)', 'Its extremely old, stable geology', 'Its low elevation', 'Its uniform, flat terrain'], 0, 'Makes the range landslide-prone compared to older, stabilised mountain systems.'],
    ['medium', 'The Himalaya is simultaneously fragile AND ecologically significant because it', ['Is a biodiversity hotspot due to its compressed altitudinal zonation', 'Has no significant biodiversity', 'Is entirely uninhabited', 'Has a completely uniform climate throughout'], 0, 'Subtropical to alpine ecosystems within a short horizontal distance.'],
    ['medium', 'Which of the following environmental challenges is shared across Himalayan states generally, not just Uttarakhand?', ['Glacier retreat linked to climate change', 'Coastal erosion', 'Coral reef bleaching', 'Desertification from lack of any rainfall'], 0, 'Affects the entire Himalayan river-source region.'],
    ['medium', 'Himalayan hydropower development creates tension primarily with which environmental concern?', ['Slope stability and river-ecosystem disruption', 'Marine biodiversity loss', 'Urban air pollution', 'Coastal wetland loss'], 0, 'A recurring theme across Himalayan states\' development debates.'],
    ['hard', 'Consider the following statements:\n1. Himalayan environmental fragility and challenges are exclusive to Uttarakhand among Indian states.\n2. The Himalaya\'s compressed altitudinal zonation contributes to its status as a biodiversity hotspot.\nWhich of the statements is/are correct?', ST, 1, 'These challenges span the whole Himalayan arc — Jammu & Kashmir, Himachal Pradesh, Uttarakhand, Sikkim and the Northeast — not Uttarakhand alone.', true]
  ]
};

export const environmentBank = Object.entries(rows).flatMap(([topic, list]) =>
  list.map(([difficulty, q, options, answer, explanation, fixed]) => ({
    subject: S, topic, difficulty, q, options, answer, explanation, fixed: Boolean(fixed)
  }))
);
