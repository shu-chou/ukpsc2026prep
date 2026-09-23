const SRC = 'Compiled from published Uttarakhand state government scheme documentation and central-scheme frameworks as generally known at the time of writing. Scheme names, eligibility and funding details change frequently with policy updates and budget announcements — treat specific figures and dates here as a starting framework, and verify the current status of any named scheme against an official state government or PIB source closer to the exam, especially for anything scheme-related in the Current Affairs section.';

const p = (heading, type, ...paragraphs) => ({ heading, type, paragraphs });
const s = (heading, type, ...bullets) => ({ heading, type, bullets });

export const uttarakhandSchemesDevelopment = {
  'State Government Schemes': {
    priority: 'IMPORTANT', title: 'State Government Schemes',
    summary: 'Uttarakhand\'s flagship state schemes target the state\'s specific structural challenges — hill out-migration, women\'s unpaid fodder-collection labour, elderly pilgrimage access and healthcare — rather than simply mirroring generic development schemes.',
    sections: [
      p('1. Schemes addressing hill-specific structural problems', 'must',
        'Because out-migration and depopulation of hill villages (the "ghost villages" problem covered under Society & Culture) is one of Uttarakhand\'s most distinctive development challenges, the state created a dedicated Mukhyamantri Palayan Roktham Yojana (Chief Minister\'s Migration Prevention Scheme) and an associated Rural Development and Migration Prevention Commission/Board, aimed specifically at identifying migration-hit villages and designing local livelihood, infrastructure and self-employment measures to slow further depopulation — a policy response that would not appear in a similarly structured form in a non-mountain state\'s scheme list. The Ghasyari Kalyan Yojana (Fodder-Cutter Women\'s Welfare Scheme) is another state-specific response, recognising the disproportionate physical burden hill women bear collecting grass/fodder for livestock (a direct consequence of the male out-migration pattern), and provides support such as fodder-cutting machines to reduce this labour burden.'),
      p('2. Self-employment, health and pilgrimage-access schemes', 'must',
        'The Mukhyamantri Swarojgar Yojana (Chief Minister\'s Self-Employment Scheme) supports unemployed youth and returning migrants in setting up small enterprises through subsidised loans, directly linking self-employment promotion to the state\'s migration-prevention goals. On healthcare, Atal Ayushman Uttarakhand Yojana extends cashless health insurance coverage to state residents, structured to work alongside the central Ayushman Bharat scheme but covering all state residents rather than only the poorer households targeted by the central scheme\'s criteria. The Mukhyamantri Teerth Atan Yojana (Chief Minister\'s Pilgrimage Scheme) supports elderly residents in visiting the state\'s major pilgrimage sites, reflecting Uttarakhand\'s religious-tourism identity translated into a welfare measure for its own senior citizens.'),
      s('3. What to memorize', 'must',
        'Mukhyamantri Palayan Roktham Yojana = migration prevention (hill out-migration is the core problem it targets)',
        'Ghasyari Kalyan Yojana = welfare for women fodder-cutters, addresses hill women\'s labour burden',
        'Mukhyamantri Swarojgar Yojana = self-employment for youth/returning migrants',
        'Atal Ayushman Uttarakhand Yojana = state health insurance, broader coverage than central Ayushman Bharat within the state',
        'Mukhyamantri Teerth Atan Yojana = pilgrimage scheme for the elderly'),
      s('4. Exam traps', 'trap',
        'Atal Ayushman Uttarakhand Yojana is a STATE scheme distinct from (though complementary to) the central Ayushman Bharat scheme — do not treat them as identical.',
        'Ghasyari Kalyan Yojana targets women\'s fodder-collection burden specifically, not general women\'s welfare broadly.'),
      s('5. 30-second revision', 'revision',
        'Palayan Roktham = migration prevention. Ghasyari Kalyan = fodder-cutter women. Swarojgar Yojana = self-employment. Atal Ayushman UK = state health cover. Teerth Atan = elderly pilgrimage support.')
    ],
    sourceNote: SRC
  },

  'Central Schemes with Uttarakhand Relevance': {
    priority: 'IMPORTANT', title: 'Central Schemes with Uttarakhand Relevance',
    summary: 'Several centrally sponsored schemes carry outsized importance in Uttarakhand because of its hill terrain and Ganga source-region status — PMGSY for rural road connectivity and Namami Gange for river conservation are the two most state-specific examples.',
    sections: [
      p('1. Connectivity-focused central schemes', 'must',
        'The Pradhan Mantri Gram Sadak Yojana (PMGSY), which funds all-weather rural road connectivity, carries unusually high relevance in Uttarakhand precisely because hill terrain makes road access to remote villages both expensive to build and critical for healthcare, education and market access in a way flatter states do not experience to the same degree — PMGSY implementation and road-density statistics are therefore a recurring state-specific angle on an otherwise pan-India scheme. Jal Jeevan Mission, the central scheme for household tap-water connections, similarly takes on added significance in the hills, where traditional spring-based water access (naulas/dharas, covered under Environment & Natural Resources) is under stress, making piped connectivity both harder to engineer on steep terrain and more urgently needed.'),
      p('2. Namami Gange and river conservation', 'must',
        'Namami Gange, the National Mission for Clean Ganga\'s flagship river-conservation programme, has particular relevance to Uttarakhand as the source state of the Ganga (formed at Devprayag, covered under Society & Culture), with river-front development, sewage treatment infrastructure and source-area conservation work at pilgrimage towns like Haridwar and Rishikesh forming a visible, state-specific component of an otherwise national programme.'),
      p('3. Broader welfare and livelihood schemes', 'understand',
        'Beyond these two state-specific-flavoured schemes, standard pan-India centrally sponsored schemes also operate in Uttarakhand in their general form: MGNREGA (rural employment guarantee), PM Awas Yojana (housing, both rural and urban components), PM-KISAN (direct income support to farmers), Ayushman Bharat (health insurance for poorer households, complemented by the state\'s own Atal Ayushman scheme), and the National Health Mission — these operate largely as they do nationally, without a distinctly Uttarakhand-specific implementation angle worth separately memorising beyond their basic purpose.'),
      s('4. What to memorize', 'must',
        'PMGSY = rural road connectivity, especially critical given Uttarakhand\'s hill terrain',
        'Jal Jeevan Mission = household tap water, complicated/important in hills due to terrain + spring stress',
        'Namami Gange = Ganga conservation, source-state relevance (Devprayag, Haridwar, Rishikesh)',
        'Standard pan-India schemes present without special state angle: MGNREGA, PM Awas Yojana, PM-KISAN, Ayushman Bharat, National Health Mission'),
      s('5. Exam traps', 'trap',
        'Namami Gange is a central/national scheme (under the National Mission for Clean Ganga), not a Uttarakhand state scheme — its relevance to the state is geographic (source region), not administrative.',
        'Atal Ayushman Uttarakhand Yojana (state) and Ayushman Bharat (central) are complementary, not the same scheme.'),
      s('6. 30-second revision', 'revision',
        'PMGSY = rural roads (critical in hills). Jal Jeevan Mission = tap water (hard terrain, spring stress). Namami Gange = Ganga conservation (source state). Others (MGNREGA, PM Awas, PM-KISAN, Ayushman Bharat) = standard pan-India form.')
    ],
    sourceNote: SRC
  },

  'Development Plans': {
    priority: 'IMPORTANT', title: 'Development Plans',
    summary: 'Uttarakhand\'s development planning has shifted from the general Five-Year Plan framework to NITI Aayog-era mechanisms, alongside state-specific plans addressing the hill-plains development gap and the Gairsain summer-capital initiative.',
    sections: [
      p('1. From Five-Year Plans to NITI Aayog', 'must',
        'Like all Indian states, Uttarakhand\'s development planning operated within the Five-Year Plan framework until the Planning Commission was replaced by NITI Aayog in 2015 (covered under Indian Polity/general awareness), after which state planning shifted toward NITI Aayog\'s indicator-based, cooperative-federalism approach rather than centrally allocated Plan outlays — a transition worth remembering as a general-awareness fact that also applies specifically when discussing how Uttarakhand\'s development plans are now framed and monitored.'),
      p('2. Addressing the hill-plains development gap', 'must',
        'A recurring theme in Uttarakhand\'s development planning is the structural gap between its plains districts (Udham Singh Nagar, Haridwar, parts of Dehradun and Nainital), which are relatively industrialised and better connected, and its hill districts, which face the out-migration, connectivity and livelihood challenges discussed elsewhere — state development plans and schemes are frequently designed explicitly around narrowing this hill-plains gap rather than treating the state as a single uniform unit, a framing that shows up across sectors from Schemes & Development to Economy & Development.'),
      p('3. Gairsain as a development initiative', 'understand',
        'The declaration of Gairsain (Bhararisain) as the state\'s summer capital in 2020 (covered under Uttarakhand Polity & Administration) carries a development-planning dimension beyond its administrative symbolism: it reflects a long-standing hill-region demand for a capital located within the hills themselves (rather than Dehradun, in the sub-Himalayan plains-adjacent belt) as a signal of, and potential driver for, more balanced hill-focused development attention and infrastructure investment.'),
      s('4. What to memorize', 'must',
        'Planning shifted from Five-Year Plans to NITI Aayog framework after 2015',
        'Core planning theme: narrowing the hill-plains development gap',
        'Gairsain\'s summer-capital status (2020) is partly a hill-development-attention symbol, not just an administrative arrangement'),
      s('5. Exam traps', 'trap',
        'The Planning Commission was replaced by NITI Aayog in 2015 nationally — this is a general fact, not something unique to Uttarakhand\'s own institutional history.'),
      s('6. 30-second revision', 'revision',
        'Five-Year Plans → NITI Aayog (2015, national shift). Core theme = hill vs plains development gap. Gairsain = hill-development symbolism + summer capital.')
    ],
    sourceNote: SRC
  },

  'Infrastructure Initiatives': {
    priority: 'MUST KNOW', title: 'Infrastructure Initiatives',
    summary: 'The Char Dham All-Weather Road project and the Rishikesh-Karnaprayag rail line are Uttarakhand\'s two flagship, most exam-relevant infrastructure initiatives, both aimed at improving connectivity to the state\'s major pilgrimage circuit.',
    sections: [
      p('1. Char Dham All-Weather Road (Char Dham Pariyojana)', 'must',
        'The Char Dham All-Weather Road project (also called the Char Dham Pariyojana or Char Dham Mahamarg Vikas Pariyojana) is a major central government highway-development initiative to widen and improve road connectivity to all four of Uttarakhand\'s Char Dham pilgrimage sites (Yamunotri, Gangotri, Kedarnath, Badrinath) year-round, aiming to reduce travel time and improve safety on routes that were previously narrow, landslide-prone and often seasonally impassable. The project has also drawn significant environmental scrutiny and litigation over slope-cutting, tree felling and disaster risk in ecologically fragile Himalayan terrain (connecting directly to the Himalayan Ecology and Disaster Ecology themes covered under Environment & Natural Resources), making it a project that sits at the intersection of infrastructure development and environmental controversy — a framing worth remembering for analytical/statement-based questions.'),
      p('2. Rishikesh-Karnaprayag rail line', 'must',
        'The Rishikesh-Karnaprayag rail line is a major railway infrastructure project extending rail connectivity from the existing terminus at Rishikesh further into the Garhwal hills toward Karnaprayag, involving extensive tunnelling given the terrain, and intended to significantly improve access toward the Char Dham pilgrimage circuit and the hill districts more broadly — railways have historically had very limited reach into Uttarakhand\'s hill terrain compared to the plains, making this project a notable exception and a frequently cited example of hill-specific transport infrastructure expansion.'),
      p('3. Other connectivity initiatives', 'understand',
        'Beyond these two flagship projects, other infrastructure initiatives shape the state\'s connectivity: airports at Dehradun (Jolly Grant), Pantnagar and Pithoragarh support air connectivity to hill and plains regions alike under the central UDAN regional-connectivity scheme; the Delhi-Dehradun Expressway improves plains-to-capital road access; and ropeway projects (including a proposed ropeway to Kedarnath) have been discussed as a way to reduce the environmental and physical strain of the existing trek-based pilgrimage routes.'),
      s('4. What to memorize', 'must',
        'Char Dham All-Weather Road (Char Dham Pariyojana) = highway project connecting Yamunotri, Gangotri, Kedarnath, Badrinath year-round; also environmentally contested',
        'Rishikesh-Karnaprayag rail line = extends rail connectivity into Garhwal hills, heavy tunnelling, supports Char Dham access',
        'Airports: Dehradun (Jolly Grant), Pantnagar, Pithoragarh — UDAN scheme connectivity',
        'Delhi-Dehradun Expressway = plains-to-capital connectivity'),
      s('5. Exam traps', 'trap',
        'The Char Dham Road project has faced significant environmental/legal scrutiny (including Supreme Court intervention on road-width norms in ecologically sensitive stretches) — do not treat it as an uncontroversial infrastructure-only story.',
        'Rishikesh is the existing rail terminus; Karnaprayag is the project\'s extension target, not the other way round.'),
      s('6. 30-second revision', 'revision',
        'Char Dham Pariyojana = all-weather road to all 4 Dhams, environmentally contested. Rishikesh-Karnaprayag rail = hill rail extension, heavy tunnelling. Airports = Dehradun, Pantnagar, Pithoragarh (UDAN).')
    ],
    sourceNote: SRC
  },

  'Rural Development': {
    priority: 'IMPORTANT', title: 'Rural Development',
    summary: 'Rural development in Uttarakhand\'s hill districts centres on countering out-migration and building on the Van Panchayat model of community self-governance, alongside standard rural-employment and watershed-management programmes.',
    sections: [
      p('1. Rural development framed around out-migration', 'must',
        'Rural development policy in Uttarakhand\'s hill districts is shaped centrally around countering the out-migration and depopulation pattern discussed under Society & Culture — schemes like the Mukhyamantri Palayan Roktham Yojana explicitly link rural development funding to village-level livelihood generation (agriculture, horticulture, tourism, small enterprise) specifically in migration-affected villages, a targeting approach distinctive to hill states rather than a generic rural-development formula applied uniformly.'),
      p('2. Watershed management and land-use', 'must',
        'Given the state\'s steep terrain and dependence on rain-fed and spring-fed agriculture, integrated watershed management programmes (soil and water conservation, check-dams, afforestation on degraded slopes) form a significant strand of rural development work, directly supporting both agricultural productivity and the broader slope-stability concerns covered under Himalayan Ecology — watershed work in Uttarakhand therefore serves a dual agricultural and disaster-mitigation purpose that would be less central in a flatter state\'s rural development programme.'),
      p('3. Van Panchayats as a rural governance model', 'understand',
        'The Van Panchayat system (covered in depth under Environment & Natural Resources) also functions as a rural development and governance mechanism in its own right — by giving villages direct management authority over local forest resources for grazing and fuelwood, it supports rural livelihoods while embedding a long-standing tradition of community-based natural resource governance that predates and has influenced later national rural development thinking around decentralised, community-led management.'),
      s('4. What to memorize', 'must',
        'Rural development in hill districts = strongly framed around countering out-migration (Palayan Roktham Yojana linkage)',
        'Watershed management = dual purpose: agricultural support + slope-stability/disaster mitigation',
        'Van Panchayats = rural governance model, community forest management, pre-dates national JFM thinking'),
      s('5. Exam traps', 'trap',
        'Do not treat Uttarakhand\'s rural development approach as identical to a plains state\'s — the out-migration/depopulation framing is a distinctive local emphasis.'),
      s('6. 30-second revision', 'revision',
        'Rural development = anti-migration framing (Palayan Roktham). Watershed management = agriculture + slope stability. Van Panchayats = community forest governance model.')
    ],
    sourceNote: SRC
  },

  'Urban Development': {
    priority: 'IMPORTANT', title: 'Urban Development',
    summary: 'Dehradun\'s selection under the Smart Cities Mission is Uttarakhand\'s flagship urban development fact, alongside AMRUT-funded municipal infrastructure upgrades across the state\'s towns.',
    sections: [
      p('1. Smart Cities Mission: Dehradun', 'must',
        'Dehradun, Uttarakhand\'s capital, was selected as one of the cities under the central government\'s Smart Cities Mission, aimed at area-based development (redevelopment of a specific city zone with upgraded infrastructure, technology-enabled urban services and better mobility) alongside pan-city technology initiatives — its selection is the state\'s single most cited urban development fact and worth distinguishing clearly from AMRUT, a separate, broader-coverage central scheme.'),
      p('2. AMRUT and broader municipal infrastructure', 'must',
        'The Atal Mission for Rejuvenation and Urban Transformation (AMRUT) operates more broadly across Uttarakhand\'s towns (beyond just Dehradun), focusing on basic municipal infrastructure — water supply, sewerage, stormwater drainage, urban transport and green/open spaces — in a wider set of towns than the more selective, competitively chosen Smart Cities Mission, a distinction (selective/area-based vs. broader/basic-infrastructure-focused) worth remembering when comparing the two schemes.'),
      p('3. Urban pressures specific to Uttarakhand\'s towns', 'understand',
        'Urban development challenges in Uttarakhand carry a distinctive dimension tied to religious tourism and pilgrimage seasons — towns like Haridwar, Rishikesh and the Char Dham base towns face sharp seasonal population surges that strain municipal infrastructure (water, sanitation, traffic, waste management) far beyond their registered resident population, making pilgrimage-season carrying capacity a recurring urban-planning concern distinct from the steadier, more even urban growth patterns of plains cities.'),
      s('4. What to memorize', 'must',
        'Dehradun = selected under the Smart Cities Mission (area-based + pan-city development)',
        'AMRUT = broader coverage across more towns, focused on basic municipal infrastructure (water, sewerage, drainage, transport)',
        'Pilgrimage-season population surges = a distinctive urban-planning stress specific to Uttarakhand\'s religious tourism towns'),
      s('5. Exam traps', 'trap',
        'Smart Cities Mission (selective, area-based) and AMRUT (broader, basic-infrastructure-focused) are different schemes with different scope — do not conflate them.'),
      s('6. 30-second revision', 'revision',
        'Smart Cities Mission = Dehradun (selective, area-based). AMRUT = broader towns, basic infra. Pilgrimage-season surges = distinctive urban stress.')
    ],
    sourceNote: SRC
  },

  'Women & Child Development': {
    priority: 'IMPORTANT', title: 'Women & Child Development',
    summary: 'Uttarakhand\'s women and child development efforts combine standard national programmes (Anganwadi/ICDS, Poshan Abhiyan, Beti Bachao Beti Padhao) with the state-specific Ghasyari Kalyan Yojana, which directly targets hill women\'s disproportionate agricultural and fodder-collection labour burden.',
    sections: [
      p('1. Standard national programmes operating in the state', 'must',
        'Uttarakhand implements the standard national child-development infrastructure through Anganwadi Centres under the Integrated Child Development Services (ICDS) scheme, providing early childhood nutrition, health check-ups and pre-school education, alongside Poshan Abhiyan (the National Nutrition Mission) targeting malnutrition and stunting, and Beti Bachao Beti Padhao, addressing skewed sex ratios and girls\' education — these operate broadly as they do nationally, without a fundamentally different state-specific structure, though implementation naturally accounts for the hill terrain\'s logistical challenges in reaching remote Anganwadi centres.'),
      p('2. Ghasyari Kalyan Yojana: the state-specific flagship', 'must',
        'The Ghasyari Kalyan Yojana (already introduced under State Government Schemes) is the single most distinctively Uttarakhand-specific women\'s welfare scheme, directly addressing the reality that hill women bear the primary physical burden of grass/fodder collection for livestock (a labour-intensive task made heavier by the out-migration of men to jobs elsewhere), by providing support such as fodder-cutting machines to reduce this burden — it is a clear example of a scheme designed around a locally observed gendered labour pattern rather than adapted from a generic national template.'),
      p('3. Women\'s economic empowerment through self-help groups', 'understand',
        'Women\'s self-help groups (SHGs), often linked to livelihood missions under the National Rural Livelihood Mission framework, play a significant role in the hill economy by enabling women to pool savings, access credit and run small collective enterprises (dairy, handicrafts, agro-processing) — a particularly important channel for women\'s economic participation in a hill economy where formal wage employment for women remains limited relative to their central role in agriculture and household management (covered under Society & Communities).'),
      s('4. What to memorize', 'must',
        'ICDS/Anganwadi, Poshan Abhiyan, Beti Bachao Beti Padhao = standard national programmes present in the state',
        'Ghasyari Kalyan Yojana = the state-specific flagship, targets hill women\'s fodder-collection labour burden directly',
        'Women\'s SHGs = important economic-empowerment channel in the hill economy'),
      s('5. Exam traps', 'trap',
        'Ghasyari Kalyan Yojana is Uttarakhand-specific and not a central/national scheme — do not confuse it with a pan-India programme.'),
      s('6. 30-second revision', 'revision',
        'National programmes: ICDS, Poshan Abhiyan, Beti Bachao Beti Padhao. State-specific: Ghasyari Kalyan Yojana (fodder-cutting burden). SHGs = women\'s economic empowerment channel.')
    ],
    sourceNote: SRC
  },

  'Youth & Employment': {
    priority: 'IMPORTANT', title: 'Youth & Employment',
    summary: 'Youth and employment policy in Uttarakhand is shaped by the need to retain young people in the state (countering out-migration) through skill development and self-employment support, alongside the state\'s significant historical role in armed forces recruitment.',
    sections: [
      p('1. Skill development and self-employment', 'must',
        'Youth employment policy in Uttarakhand is closely tied to the state\'s broader migration-prevention goal — the Mukhyamantri Swarojgar Yojana (covered under State Government Schemes) specifically targets unemployed youth with subsidised self-employment loans, while state and central skill-development missions (aligned with the national Skill India framework) aim to make hill youth employable in sectors like tourism, hospitality, horticulture-based processing and handicrafts without requiring them to migrate to plains cities for work — framing skill development explicitly as a tool against depopulation rather than a purely economic-growth measure.'),
      p('2. The armed forces recruitment tradition', 'must',
        'Uttarakhand, and the Garhwal and Kumaon regions in particular, has a long and well-established tradition of recruitment into the Indian Army, reflected in dedicated regiments (the Garhwal Rifles and Kumaon Regiment) with deep historical roots in the region\'s martial recruitment tradition (echoing the Chholiya dance\'s martial associations covered under Society & Culture) — armed forces employment remains one of the most significant and most exam-relevant sources of formal employment for hill youth, distinct from the civilian government-job and self-employment channels discussed elsewhere.'),
      p('3. Tourism and sports as employment sectors', 'understand',
        'Given the state\'s religious and adventure-tourism profile, tourism-linked employment (guiding, hospitality, transport, homestays) is an increasingly promoted youth-employment sector, alongside a state sports policy aimed at developing Uttarakhand\'s considerable natural potential for adventure sports (given its mountainous, river-rich terrain) into structured employment and training opportunities — both sectors are promoted partly as alternatives to out-migration for plains-city employment.'),
      s('4. What to memorize', 'must',
        'Mukhyamantri Swarojgar Yojana + skill development missions = youth employment framed as anti-migration policy',
        'Garhwal Rifles and Kumaon Regiment = the region\'s major armed-forces recruitment tradition',
        'Tourism and adventure sports = promoted as alternative youth-employment sectors'),
      s('5. Exam traps', 'trap',
        'Garhwal Rifles and Kumaon Regiment are two separate regiments tied to the two respective historical regions — do not merge them into one.'),
      s('6. 30-second revision', 'revision',
        'Swarojgar Yojana + skill missions = anti-migration youth employment. Garhwal Rifles + Kumaon Regiment = armed forces recruitment tradition. Tourism/adventure sports = promoted employment alternatives.')
    ],
    sourceNote: SRC
  }
};
