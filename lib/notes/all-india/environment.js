const SRC = 'A curated, high-yield selection covering the standard prelims-level static ecology/environment syllabus, compiled from NCERT-level references and standard competitive-exam material. Uttarakhand-specific environment content (forests, protected areas, disasters) is covered separately and in far greater depth under the Uttarakhand section; this file focuses on the pan-India ecological framework, laws and conventions that contextualise it.';

const p = (heading, type, ...paragraphs) => ({ heading, type, paragraphs });
const s = (heading, type, ...bullets) => ({ heading, type, bullets });

export const environmentTopics = {
  'Ecology Basics': {
    priority: 'MUST KNOW', title: 'Ecology Basics',
    summary: 'Ecosystem structure (producers, consumers, decomposers), the food chain/web, and the flow of energy and nutrients through trophic levels form the conceptual foundation that every other ecology topic builds on.',
    sections: [
      p('1. Ecosystem components: producers, consumers, decomposers', 'must',
        'An ecosystem consists of biotic (living) and abiotic (non-living, e.g. soil, water, climate) components interacting within a defined area. Biotic components are classified by their role in energy flow: Producers (autotrophs, mainly green plants and algae) convert solar energy into chemical energy through photosynthesis, forming the base of virtually all food chains; Consumers (heterotrophs) are further divided into primary consumers/herbivores (eat producers directly), secondary consumers/carnivores (eat primary consumers), and tertiary consumers (apex predators, eat secondary consumers); and Decomposers (bacteria, fungi) break down dead organic matter, returning nutrients to the soil/environment and closing the nutrient cycle — this producer-consumer-decomposer classification is the single most foundational ecology fact.'),
      p('2. Food chains, food webs and trophic levels', 'must',
        'A food chain is a linear sequence showing who eats whom (grass → grasshopper → frog → snake → eagle, a classic textbook example), while a food web is the more realistic, interconnected network of multiple overlapping food chains within an ecosystem, since most organisms eat and are eaten by more than one species. Each position in this chain is a trophic level (Producers = 1st trophic level, primary consumers = 2nd, and so on); energy transfer between trophic levels is famously inefficient — the "10% law" (only roughly 10% of energy at one trophic level transfers to the next, the rest lost as heat/metabolic processes) explains why food chains rarely extend beyond 4-5 trophic levels and why apex predator populations are always much smaller than producer populations.'),
      p('3. Biogeochemical cycles', 'understand',
        'Biogeochemical cycles describe how essential elements circulate between living organisms and the physical environment: the Carbon Cycle (photosynthesis removes atmospheric CO2, respiration/decomposition/combustion returns it — directly relevant to the Climate Change topic\'s greenhouse gas discussion), the Nitrogen Cycle (atmospheric nitrogen, largely unusable directly by most organisms, is "fixed" into usable forms by nitrogen-fixing bacteria, cycled through plants/animals, and returned to the atmosphere by denitrifying bacteria), and the Water Cycle (evaporation, condensation, precipitation, run-off) — these cycles illustrate that ecosystems function through continuous matter recycling even though energy flows one-way (entering as sunlight, exiting as heat).'),
      s('4. What to memorize', 'must',
        'Producers (autotrophs, photosynthesis) → Consumers (herbivore→carnivore→apex predator) → Decomposers (recycle nutrients)',
        'Food chain = linear; Food web = interconnected network of multiple chains',
        '"10% law" = only ~10% of energy transfers between trophic levels, rest lost as heat',
        'Biogeochemical cycles: Carbon, Nitrogen, Water — matter recycles, energy flows one-way'),
      s('5. Exam traps', 'trap',
        'Energy flow in an ecosystem is one-directional (sunlight in, heat out) — it does NOT cycle the way matter/nutrients do; do not conflate energy flow with nutrient cycling.',
        'The "10% law" explains why food chains are typically short (4-5 levels) — a frequently tested numeric/conceptual pairing.'),
      s('6. 30-second revision', 'revision',
        'Producers→Consumers(herbivore-carnivore-apex)→Decomposers. Food chain=linear; food web=network. 10% law=energy loss per trophic level→short chains. Carbon/Nitrogen/Water cycles=matter recycles; energy flows one-way.')
    ],
    sourceNote: SRC
  },

  'Biodiversity & Conservation': {
    priority: 'MUST KNOW', title: 'Biodiversity & Conservation',
    summary: 'India is one of 17 recognised "megadiverse" countries and hosts four of the world\'s 36 biodiversity hotspots, with in-situ conservation (protected areas) and ex-situ conservation (zoos, seed banks) as the two core conservation strategies.',
    sections: [
      p('1. India as a megadiverse country and its biodiversity hotspots', 'must',
        'India is one of only 17 countries recognised globally as "megadiverse" — a classification for countries harbouring the majority of the Earth\'s species and high levels of endemism — and hosts four of the world\'s biodiversity hotspots (regions with exceptional species richness and endemism that are also under significant habitat threat): the Himalaya, the Western Ghats-Sri Lanka, the Indo-Burma region, and Sundaland (the last covering India\'s Nicobar Islands) — the Himalaya hotspot directly connects this topic to Uttarakhand\'s own biodiversity significance, covered under Environment & Natural Resources.'),
      p('2. In-situ vs. ex-situ conservation', 'must',
        'In-situ conservation protects species within their natural habitat — National Parks, Wildlife Sanctuaries and Biosphere Reserves (covered under Protected Areas & Wildlife) are the primary in-situ tools, since protecting the whole ecosystem, not just the target species, is considered the more holistic and generally preferred approach. Ex-situ conservation protects species outside their natural habitat — zoos, botanical gardens, seed banks and gene banks, and captive breeding programmes are the main tools, typically used as a supplementary or last-resort measure for critically endangered species where in-situ protection alone is judged insufficient (India\'s National Bureau of Plant Genetic Resources maintains a major national seed/gene bank for this purpose).'),
      p('3. Endangered species classification: IUCN Red List', 'understand',
        'The International Union for Conservation of Nature (IUCN) Red List is the globally recognised system for classifying species by extinction risk, running (in decreasing severity) through Extinct, Extinct in the Wild, Critically Endangered, Endangered, Vulnerable, Near Threatened, and Least Concern — a species\' Red List category is distinct from, though related to, its legal protection status under a given country\'s domestic wildlife law (covered under Environmental Laws & Conventions for India\'s Wildlife Protection Act Schedules), and confusing the two systems (an international scientific classification vs. a national legal protection framework) is a common error.'),
      s('4. What to memorize', 'must',
        'India = 1 of 17 "megadiverse" countries; hosts 4 of the world\'s biodiversity hotspots (Himalaya, Western Ghats-Sri Lanka, Indo-Burma, Sundaland)',
        'In-situ conservation = protect species IN their natural habitat (National Parks, Sanctuaries, Biosphere Reserves)',
        'Ex-situ conservation = protect species OUTSIDE their natural habitat (zoos, seed/gene banks, captive breeding)',
        'IUCN Red List categories (decreasing risk): Extinct → Extinct in the Wild → Critically Endangered → Endangered → Vulnerable → Near Threatened → Least Concern'),
      s('5. Exam traps', 'trap',
        'The IUCN Red List (international, scientific) and a country\'s Wildlife Protection Act Schedules (national, legal) are two distinct classification systems — do not treat them as interchangeable.',
        'In-situ conservation is generally the preferred/more holistic approach; ex-situ is typically supplementary, not the primary strategy.'),
      s('6. 30-second revision', 'revision',
        'India=megadiverse (1 of 17), 4 biodiversity hotspots (Himalaya/W.Ghats/Indo-Burma/Sundaland). In-situ=in habitat (parks/sanctuaries). Ex-situ=outside habitat (zoos/gene banks). IUCN Red List: Extinct→CR→EN→VU→NT→LC.')
    ],
    sourceNote: SRC
  },

  'Protected Areas & Wildlife': {
    priority: 'MUST KNOW', title: 'Protected Areas & Wildlife',
    summary: 'India\'s protected area hierarchy — National Parks (strictest), Wildlife Sanctuaries (more flexible), Conservation and Community Reserves (lightest-touch) — is governed by the Wildlife Protection Act, 1972, with Project Tiger (1973) and Project Elephant (1992) as its flagship species-conservation programmes.',
    sections: [
      p('1. The protected area hierarchy', 'must',
        'India\'s Wildlife Protection Act, 1972 establishes a graded hierarchy of protected areas: National Parks offer the strictest protection (no human activity, grazing or private rights permitted, boundaries fixed by legislation), Wildlife Sanctuaries offer somewhat more flexible protection (some regulated human activity may continue, and boundaries can be altered by a state government notification rather than requiring full legislative process), and Conservation Reserves and Community Reserves (added by a 2002 amendment, covered for Uttarakhand under Environment & Natural Resources) are lighter-touch categories, typically declared on government or community land adjoining existing protected areas without displacing existing rights — this graded strictness (National Park > Sanctuary > Conservation/Community Reserve) is a frequently tested comparative framework.'),
      p('2. Project Tiger and Project Elephant', 'must',
        'Project Tiger, launched in 1973 (starting at Corbett National Park, Uttarakhand, covered under Environment & Natural Resources), is India\'s flagship species-conservation programme, establishing a network of dedicated Tiger Reserves with a core-buffer zone structure and significantly boosting India\'s tiger population over subsequent decades — India today holds a majority of the world\'s wild tiger population, making Project Tiger widely regarded as one of the world\'s most successful large-carnivore conservation programmes. Project Elephant, launched in 1992, similarly protects elephant habitats and corridors and addresses human-elephant conflict, though with a less centralised reserve-network structure than Project Tiger\'s Tiger Reserves.'),
      p('3. Biosphere Reserves', 'understand',
        'Biosphere Reserves are a distinct conservation category (recognised both nationally and, for many sites, internationally under UNESCO\'s Man and Biosphere Programme) structured around a core zone (strict protection, often overlapping with an existing National Park), a buffer zone (regulated activity permitted), and a transition zone (sustainable human use actively encouraged) — this three-zone model, already introduced for Uttarakhand\'s Nanda Devi Biosphere Reserve under Environment & Natural Resources, is the general national template rather than a Uttarakhand-specific design.'),
      s('4. What to memorize', 'must',
        'Protection hierarchy (strictest to lightest): National Park > Wildlife Sanctuary > Conservation Reserve/Community Reserve',
        'Project Tiger (1973, launched at Corbett) = India holds majority of world\'s wild tiger population',
        'Project Elephant (1992) = elephant habitat/corridor protection, human-elephant conflict mitigation',
        'Biosphere Reserve = core (strict) + buffer (regulated) + transition (sustainable use) zone model, UNESCO MAB Programme'),
      s('5. Exam traps', 'trap',
        'National Park boundaries can only be altered by legislation; Wildlife Sanctuary boundaries can be altered by a state government notification — a frequently tested legal-process distinction.',
        'Project Tiger launched in 1973 at Corbett National Park (Uttarakhand) — do not confuse the launch location/year with Project Elephant\'s 1992 launch.'),
      s('6. 30-second revision', 'revision',
        'Hierarchy: NP(strictest)>Sanctuary>Conservation/Community Reserve(lightest). Project Tiger=1973, Corbett. Project Elephant=1992. Biosphere Reserve=core+buffer+transition zones, UNESCO MAB.')
    ],
    sourceNote: SRC
  },

  'Climate Change': {
    priority: 'MUST KNOW', title: 'Climate Change',
    summary: 'The Greenhouse Effect, greenhouse gases (CO2, methane and others), and the international policy architecture — the UNFCCC, Kyoto Protocol and Paris Agreement — form the essential framework for this consistently high-yield topic.',
    sections: [
      p('1. The Greenhouse Effect and greenhouse gases', 'must',
        'The Greenhouse Effect is the natural process by which certain atmospheric gases trap heat radiated from Earth\'s surface, keeping the planet warm enough to support life — without any greenhouse effect, Earth would be far colder; the problem driving climate change is the ENHANCED greenhouse effect from human-caused increases in greenhouse gas concentrations, trapping more heat than the natural baseline. Key greenhouse gases, in rough order of their overall contribution to human-caused warming, include Carbon Dioxide (CO2, from fossil fuel combustion, the single largest contributor by volume), Methane (CH4, from agriculture/livestock, landfills and fossil fuel extraction — far more potent per molecule than CO2 but shorter-lived in the atmosphere), Nitrous Oxide (N2O, from agricultural fertilisers) and various fluorinated gases (industrial/refrigerant use, potent but present in much smaller quantities) — this list, and knowing CO2 is the largest contributor by total volume even though methane is more potent per unit, is frequently tested.'),
      p('2. The UNFCCC, Kyoto Protocol and Paris Agreement', 'must',
        'The United Nations Framework Convention on Climate Change (UNFCCC, 1992, from the Rio Earth Summit) is the foundational international treaty establishing the overall framework for global climate cooperation, under which subsequent specific agreements operate. The Kyoto Protocol (1997, entered into force 2005) set binding emission-reduction targets specifically for developed countries, based on the principle of "common but differentiated responsibilities" (acknowledging developed countries\' larger historical emissions), but was criticised for excluding binding targets for major developing-country emitters. The Paris Agreement (2015, adopted at COP21) replaced this developed-vs-developing binary with a more universal framework: all countries submit their own Nationally Determined Contributions (NDCs, voluntary emission targets reviewed periodically), with the overarching goal of limiting global temperature rise to well below 2°C above pre-industrial levels (with an aspirational 1.5°C target) — this UNFCCC→Kyoto→Paris progression, and the shift from Kyoto\'s binding-developed-country-targets model to Paris\'s universal-voluntary-NDC model, is one of the single most tested climate-policy sequences.'),
      p('3. India\'s climate commitments', 'understand',
        'India, as a Paris Agreement signatory, has submitted its own NDCs, including commitments around renewable energy capacity expansion and emissions intensity reduction (reducing emissions per unit of GDP, rather than an absolute emissions cap, reflecting India\'s continued development needs) — India has also announced a longer-term "net zero" target date, a specific figure worth verifying against a current source rather than treating as a fixed static fact given how such targets can be revised in international climate diplomacy.'),
      s('4. What to memorize', 'must',
        'Greenhouse gases (by overall contribution): CO2 (largest by volume, fossil fuels) > Methane (most potent per molecule, agriculture/landfills) > N2O (fertilisers) > fluorinated gases (industrial)',
        'UNFCCC (1992, Rio) → Kyoto Protocol (1997, binding targets for developed countries) → Paris Agreement (2015, universal voluntary NDCs, well-below-2°C/1.5°C aspirational goal)',
        'India\'s NDCs = emissions INTENSITY reduction (per unit GDP), not an absolute emissions cap'),
      s('5. Exam traps', 'trap',
        'CO2 is the largest greenhouse gas contributor by total VOLUME, but methane is more POTENT per molecule — these are different superlatives, frequently conflated.',
        'The Kyoto Protocol set binding targets only for developed countries; the Paris Agreement moved to a universal but voluntary (NDC-based) framework for all countries — a key structural shift.'),
      s('6. 30-second revision', 'revision',
        'Greenhouse Effect=natural, ENHANCED version=climate change. Gases: CO2(largest volume)>Methane(most potent)>N2O>fluorinated. UNFCCC(1992)→Kyoto(1997, developed-country binding targets)→Paris(2015, universal NDCs, well-below-2°C). India=intensity reduction targets.')
    ],
    sourceNote: SRC
  },

  'Pollution': {
    priority: 'IMPORTANT', title: 'Pollution',
    summary: 'Air, water and soil pollution each have distinct major sources and measurement frameworks — the Air Quality Index (AQI) for air pollution and Biochemical Oxygen Demand (BOD) as a key water-pollution indicator are the most frequently tested measurement tools.',
    sections: [
      p('1. Air pollution and the Air Quality Index', 'must',
        'Air pollution in India stems substantially from vehicular emissions, industrial activity, construction dust, and (particularly in North India during winter) crop residue/stubble burning combined with weather conditions that trap pollutants near ground level. The Air Quality Index (AQI) is India\'s standardised measure for communicating air pollution levels to the public, based on concentrations of key pollutants (PM2.5 and PM10 — particulate matter of different size thresholds — along with NO2, SO2, CO, ozone and others), categorised into bands from "Good" through "Severe" — PM2.5 (fine particulate matter, small enough to penetrate deep into lungs and bloodstream) is generally considered the most health-critical pollutant tracked.'),
      p('2. Water pollution and Biochemical Oxygen Demand', 'must',
        'Water pollution arises from industrial effluent discharge, untreated sewage, agricultural runoff (fertilisers and pesticides) and solid waste dumping into water bodies. Biochemical Oxygen Demand (BOD) is a key water-quality indicator, measuring the amount of dissolved oxygen consumed by microorganisms breaking down organic matter in a water sample over a set period — HIGHER BOD indicates MORE organic pollution (since more oxygen is being consumed by decomposition), meaning a high-BOD water body has less oxygen available to support aquatic life, making low BOD the desirable/cleaner condition, a directionality worth remembering precisely since it is frequently tested in reverse.'),
      p('3. Soil pollution and solid waste', 'understand',
        'Soil pollution results from excessive chemical fertiliser and pesticide use, industrial waste dumping, and improper solid-waste disposal, degrading soil fertility and potentially contaminating groundwater and food crops. India\'s Solid Waste Management Rules (a regulatory framework covered more specifically under Environmental Laws & Conventions) mandate waste segregation at source (into categories like wet/biodegradable, dry/recyclable and hazardous) as the foundational principle for effective municipal solid waste management, a policy direction reflected in initiatives like the Swachh Bharat Mission.'),
      s('4. What to memorize', 'must',
        'AQI = India\'s air pollution measure, based on PM2.5, PM10, NO2, SO2, CO, ozone; PM2.5 = most health-critical (penetrates deep into lungs/bloodstream)',
        'BOD = water-quality indicator; HIGHER BOD = MORE organic pollution = LESS oxygen for aquatic life (low BOD = cleaner water)',
        'Waste segregation at source (wet/dry/hazardous) = foundational solid-waste-management principle'),
      s('5. Exam traps', 'trap',
        'A HIGHER BOD value indicates WORSE water quality (more pollution, less available oxygen) — a frequently reversed fact.',
        'PM2.5 and PM10 are distinguished by particle size (2.5 vs 10 micrometres) — PM2.5, the smaller particle, is generally considered more health-hazardous since it penetrates deeper into the body.'),
      s('6. 30-second revision', 'revision',
        'AQI=PM2.5+PM10+NO2+SO2+CO+ozone; PM2.5=most harmful. BOD: higher=more pollution/less oxygen (bad); lower=cleaner (good). Waste management=segregation at source (wet/dry/hazardous).')
    ],
    sourceNote: SRC
  },

  'Environmental Laws & Conventions': {
    priority: 'MUST KNOW', title: 'Environmental Laws & Conventions',
    summary: 'India\'s core environmental legislation — the Wildlife Protection Act (1972), Water Act (1974), Air Act (1981) and Environment Protection Act (1986) — pairs with major international conventions (CITES, Ramsar, Convention on Biological Diversity) as the backbone of this topic.',
    sections: [
      p('1. Core Indian environmental legislation', 'must',
        'India\'s environmental law framework developed sequentially, each act addressing a specific domain: the Wildlife (Protection) Act, 1972 established the protected-area system and species-protection Schedules (covered under Protected Areas & Wildlife); the Water (Prevention and Control of Pollution) Act, 1974 established Pollution Control Boards (Central and State level) to regulate water pollution, the first of the major "prevention and control" pollution laws; the Air (Prevention and Control of Pollution) Act, 1981 extended a similar regulatory framework to air pollution, again through the Central and State Pollution Control Boards; and the Environment (Protection) Act, 1986, enacted in direct response to the 1984 Bhopal Gas Tragedy, is the umbrella legislation giving the central government broad powers to take environmental protective measures, serving as the overarching framework act under which subsequent environmental rules and notifications are issued — this 1972→1974→1981→1986 sequence, and each act\'s specific domain, is one of the most reliably tested law-to-purpose matching sets in the entire syllabus.'),
      p('2. The National Green Tribunal', 'must',
        'The National Green Tribunal (NGT), established in 2010, is a specialised judicial body for the speedy resolution of environmental cases, with dedicated environmental law expertise (unlike ordinary courts) — it has emerged as an important and frequently active check on environmental clearances and violations across India, including in Uttarakhand\'s mining and infrastructure-related environmental disputes (covered under Environment & Natural Resources).'),
      p('3. Key international conventions', 'must',
        'Beyond the UNFCCC/Kyoto/Paris climate framework (covered under Climate Change), several other international conventions matter for India: CITES (Convention on International Trade in Endangered Species, 1973) regulates and restricts international trade in endangered plants and animals, categorising species into Appendices by the level of protection needed; the Ramsar Convention (1971, named after the Iranian city where it was signed) provides a framework for the conservation of wetlands of international importance, with India having designated numerous Ramsar sites (Uttarakhand\'s Asan Conservation Reserve, covered under Environment & Natural Resources, is one example); and the Convention on Biological Diversity (CBD, 1992, from the same Rio Earth Summit as the UNFCCC) is the overarching international treaty on biodiversity conservation, sustainable use of biological resources, and fair benefit-sharing from genetic resources.'),
      s('4. What to memorize', 'must',
        'Wildlife Protection Act 1972 → Water Act 1974 → Air Act 1981 → Environment Protection Act 1986 (post-Bhopal, umbrella law)',
        'National Green Tribunal (NGT) = est. 2010, specialised environmental judicial body',
        'CITES (1973) = international trade in endangered species; Ramsar Convention (1971) = wetland conservation; CBD (1992, Rio) = biodiversity conservation + benefit-sharing'),
      s('5. Exam traps', 'trap',
        'The Environment (Protection) Act, 1986 was enacted specifically in response to the 1984 Bhopal Gas Tragedy — a frequently tested cause-effect link.',
        'CITES regulates international TRADE in endangered species specifically, not habitat protection generally — a distinct focus from Ramsar (wetlands) or CBD (broader biodiversity).'),
      s('6. 30-second revision', 'revision',
        'Wildlife Act 1972→Water Act 1974→Air Act 1981→Environment Protection Act 1986(post-Bhopal). NGT=2010. CITES(1973)=trade in endangered species. Ramsar(1971)=wetlands. CBD(1992, Rio)=biodiversity+benefit-sharing.')
    ],
    sourceNote: SRC
  },

  'Himalayan Environment': {
    priority: 'IMPORTANT', title: 'Himalayan Environment',
    summary: 'The Himalaya\'s young, tectonically active geology makes it structurally fragile and a global biodiversity hotspot simultaneously — a combination that shapes every environmental challenge across the Himalayan states, from Uttarakhand through to the Northeast.',
    sections: [
      p('1. Why the Himalaya is environmentally distinctive', 'must',
        'The Himalaya is geologically among the world\'s youngest major mountain systems, still actively rising through ongoing India-Eurasia plate collision, making the entire range structurally fragile and landslide-prone in a way older, more stabilised mountain systems (like the Aravallis, covered under Physiography of India) are not — this same fragility logic, already covered in depth for Uttarakhand under Himalayan Ecology, applies across the entire Himalayan arc spanning Jammu & Kashmir, Himachal Pradesh, Uttarakhand, Sikkim and the Northeastern states, not to Uttarakhand alone. Simultaneously, the Himalaya\'s compressed altitudinal zonation (subtropical to alpine within a short horizontal distance) makes it one of India\'s four biodiversity hotspots (covered under Biodiversity & Conservation) — meaning the range is both exceptionally ecologically valuable and exceptionally vulnerable to disturbance at the same time.'),
      p('2. Pan-Himalayan environmental challenges', 'must',
        'Across the Himalayan states, a common set of environmental pressures recur: glacier retreat linked to climate change (affecting the entire Himalayan river-source region, not just the Ganga-Yamuna systems originating in Uttarakhand), unplanned tourism and construction in ecologically sensitive hill towns (Joshimath\'s 2023 land subsidence, covered under Uttarakhand\'s Disaster Ecology, is a widely cited example, but similar risks exist across Himalayan hill towns generally), hydropower development\'s tension with slope stability and river-ecosystem disruption, and deforestation\'s compounding effect on landslide risk — the Chipko movement\'s origin in Uttarakhand (covered under Environmental Movements) reflected concerns that apply to Himalayan forest management broadly, not only within Uttarakhand\'s borders.'),
      p('3. Institutional and policy response', 'understand',
        'Given these shared, cross-state challenges, Himalayan environmental governance increasingly involves specialised institutional attention distinct from plains-state environmental policy — including hill-specific disaster management frameworks, glacial lake monitoring, and growing recognition (in national environmental policy discussions) that a uniform, one-size-fits-all environmental regulatory approach is poorly suited to the Himalaya\'s distinct geological and ecological character compared to peninsular India or the northern plains.'),
      s('4. What to memorize', 'must',
        'Himalaya = young, tectonically active (India-Eurasia collision) → structurally fragile AND a biodiversity hotspot simultaneously',
        'Shared Himalayan-state challenges: glacier retreat, unplanned hill-town construction, hydropower-vs-slope-stability tension, deforestation-linked landslide risk',
        'These challenges span the whole Himalayan arc (J&K, HP, Uttarakhand, Sikkim, Northeast), not Uttarakhand alone'),
      s('5. Exam traps', 'trap',
        'Himalayan environmental fragility and challenges (glacier retreat, landslide risk, unplanned construction) are pan-Himalayan issues, not exclusively Uttarakhand-specific — questions may test this broader Himalayan framing rather than a Uttarakhand-only angle.'),
      s('6. 30-second revision', 'revision',
        'Himalaya=young+tectonically active=fragile+biodiversity hotspot together. Shared challenges across J&K/HP/Uttarakhand/Sikkim/Northeast: glacier retreat, unplanned construction, hydropower-slope tension, deforestation-landslide link.')
    ],
    sourceNote: SRC
  }
};
