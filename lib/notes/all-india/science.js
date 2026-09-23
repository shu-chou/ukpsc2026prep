const SRC = 'A curated, high-yield selection covering the standard prelims-level static general science syllabus (roughly NCERT class 9-10 level plus major applied/current-technology milestones), compiled from standard competitive-exam material. Bleeding-edge or rapidly-changing technology facts (latest satellite launches, newest defence acquisitions) are deliberately avoided in favour of durable, already-settled facts and major historical milestones — verify anything genuinely recent against Current Affairs.';

const p = (heading, type, ...paragraphs) => ({ heading, type, paragraphs });
const s = (heading, type, ...bullets) => ({ heading, type, bullets });

export const scienceTopics = {
  'Physics': {
    priority: 'MUST KNOW', title: 'Physics',
    summary: 'Newton\'s laws of motion, the basic forms of energy, and everyday-life physics (why a ceiling fan needs a capacitor, how a refrigerator works) anchor the physics section of a typical prelims general science paper.',
    sections: [
      p('1. Newton\'s Laws of Motion', 'must',
        'Newton\'s three laws of motion form the foundation of classical mechanics: the First Law (law of inertia) states an object remains at rest or in uniform motion unless acted upon by an external force; the Second Law states that force equals mass times acceleration (F = ma), quantifying exactly how much an object accelerates under a given force; and the Third Law states that for every action, there is an equal and opposite reaction — a set of laws worth knowing not just by number but by the specific everyday example each explains (inertia explains why passengers lurch forward when a bus brakes suddenly; the third law explains rocket propulsion, where expelled gas pushes the rocket in the opposite direction).'),
      p('2. Forms of energy and conservation', 'must',
        'The Law of Conservation of Energy states that energy cannot be created or destroyed, only converted from one form to another (kinetic to potential, chemical to electrical, and so on) — this principle underlies the working of nearly every energy-conversion device tested in general science (a hydroelectric dam converts the potential energy of stored water into kinetic energy, then electrical energy; a car engine converts chemical energy in fuel into kinetic energy). Common energy forms tested include kinetic energy (energy of motion), potential energy (stored energy due to position, e.g. gravitational potential energy), and their mutual convertibility, best illustrated by a simple pendulum or a falling object.'),
      p('3. Everyday-life physics applications', 'understand',
        'A range of "why does this happen" everyday physics facts recur in general science papers: a ceiling fan requires a capacitor to provide the initial torque needed to start the motor turning (since a single-phase AC motor cannot self-start without a phase difference, which the capacitor creates); a refrigerator works by a refrigerant absorbing heat from inside the compartment as it evaporates (at low pressure) and releasing that heat outside as it condenses (at high pressure), driven by a compressor; and pressure cookers cook food faster because increased internal pressure raises water\'s boiling point above the normal 100°C, allowing food to cook at a higher temperature than open-pan boiling would allow.'),
      s('4. What to memorize', 'must',
        'Newton\'s 1st Law = inertia; 2nd Law = F=ma; 3rd Law = action-reaction pairs (rocket propulsion)',
        'Law of Conservation of Energy = energy only converts form, never created/destroyed',
        'Ceiling fan capacitor = provides starting torque for a single-phase motor',
        'Pressure cooker = increased pressure raises boiling point above 100°C, faster cooking'),
      s('5. Exam traps', 'trap',
        'Newton\'s Third Law (action-reaction) explains rocket propulsion — a frequently tested specific application, not just an abstract statement.',
        'A pressure cooker works by raising the boiling point of water through increased pressure, not by simply "cooking at higher heat" in a generic sense.'),
      s('6. 30-second revision', 'revision',
        'Newton: 1st=inertia, 2nd=F=ma, 3rd=action-reaction(rockets). Energy=converts, never created/destroyed. Fan capacitor=starting torque. Fridge=evaporation absorbs heat, condensation releases it. Pressure cooker=higher boiling point.')
    ],
    sourceNote: SRC
  },

  'Chemistry': {
    priority: 'MUST KNOW', title: 'Chemistry',
    summary: 'The periodic table\'s organisation, acids/bases/pH, and common chemical compounds used in everyday life (baking soda, bleaching powder) are the standard high-yield chemistry facts across state PSC prelims papers.',
    sections: [
      p('1. The Periodic Table', 'must',
        'The Periodic Table organises all known chemical elements by increasing atomic number (number of protons), arranged so elements with similar chemical properties fall into the same vertical column (group) — Dmitri Mendeleev is credited as the primary architect of an early periodic table (based on atomic mass, later refined to atomic number by Henry Moseley), and the modern table\'s 18 groups and 7 periods, with metals concentrated on the left/centre and non-metals on the right (separated by a diagonal band of metalloids), is the essential organisational fact worth knowing even without memorising individual element positions.'),
      p('2. Acids, bases and pH', 'must',
        'The pH scale measures how acidic or basic (alkaline) a solution is, running from 0 (most acidic) to 14 (most basic/alkaline), with 7 as neutral (pure water) — a lower pH means more acidic, a higher pH means more basic, a directionality frequently tested in reverse. Common acids include hydrochloric acid (present in the human stomach, aiding digestion), citric acid (citrus fruits) and acetic acid (vinegar); common bases include sodium hydroxide (caustic soda) and calcium hydroxide (used in whitewashing). Litmus paper is a standard acid-base indicator: it turns red in acidic conditions and blue in basic conditions.'),
      p('3. Common chemical compounds in everyday use', 'understand',
        'A handful of chemical-compound-to-common-name-to-use associations recur constantly: Sodium Bicarbonate (baking soda, NaHCO3) is used in cooking and as a mild antacid; Sodium Carbonate (washing soda, Na2CO3) is used in cleaning/glass manufacturing; Calcium Oxychloride (bleaching powder) is used for water purification and disinfection; Calcium Sulphate hemihydrate (Plaster of Paris) is used in construction and medical casts, setting by absorbing water and hardening; and Sodium Chloride (common salt, NaCl) needs no separate introduction but is the standard example used to explain ionic bonding in introductory chemistry.'),
      s('4. What to memorize', 'must',
        'Periodic table = organised by atomic number (protons), 18 groups/7 periods, metals left, non-metals right',
        'pH scale: 0-14, <7=acidic, 7=neutral, >7=basic; litmus: red=acid, blue=base',
        'Baking soda=NaHCO3; Washing soda=Na2CO3; Bleaching powder=Calcium Oxychloride; Plaster of Paris=Calcium Sulphate hemihydrate'),
      s('5. Exam traps', 'trap',
        'A LOWER pH value means MORE acidic, a HIGHER pH value means MORE basic — a frequently reversed directionality.',
        'The modern periodic table is organised by atomic NUMBER (protons), not atomic mass — Mendeleev\'s original version used mass, later corrected by Moseley.'),
      s('6. 30-second revision', 'revision',
        'Periodic table=atomic number, 18 groups/7 periods. pH: 0-14, <7 acid, >7 base, litmus red=acid/blue=base. Baking soda=NaHCO3. Washing soda=Na2CO3. Bleaching powder=Ca oxychloride. Plaster of Paris=Ca sulphate hemihydrate.')
    ],
    sourceNote: SRC
  },

  'Biology & Human Body': {
    priority: 'MUST KNOW', title: 'Biology & Human Body',
    summary: 'The human body\'s major organ systems (circulatory, respiratory, digestive, nervous) and their key components, along with cell biology basics, form the core of this consistently high-yield topic.',
    sections: [
      p('1. Cell biology basics', 'must',
        'The cell is the basic structural and functional unit of all living organisms, classified into prokaryotic cells (no membrane-bound nucleus, e.g. bacteria) and eukaryotic cells (membrane-bound nucleus and organelles, found in plants, animals, fungi). Key organelles include the nucleus (contains genetic material, DNA, controls cell activities), mitochondria (the "powerhouse of the cell," site of cellular respiration/energy production), and chloroplasts (found only in plant cells, site of photosynthesis) — the mitochondria-as-"powerhouse" and chloroplast-as-photosynthesis-site associations are among the most consistently tested single-line biology facts across all competitive exams.'),
      p('2. The circulatory and respiratory systems', 'must',
        'The human heart has four chambers (two atria, two ventricles) and pumps blood through a double circulatory system — pulmonary circulation (heart to lungs and back, for oxygenation) and systemic circulation (heart to the rest of the body and back) — with blood composed of plasma, red blood cells (carry oxygen via haemoglobin), white blood cells (immune defence) and platelets (blood clotting). The respiratory system exchanges oxygen and carbon dioxide through the lungs, with the alveoli (tiny air sacs) as the actual site of gas exchange with the bloodstream — the alveoli-as-gas-exchange-site fact is a frequently tested specific detail beyond the general lungs-breathe-air understanding.'),
      p('3. The digestive and nervous systems', 'must',
        'The digestive system breaks down food through a sequence of organs — mouth (mechanical breakdown, salivary enzymes) → oesophagus → stomach (acidic digestion via hydrochloric acid and pepsin) → small intestine (main site of nutrient absorption, aided by bile from the liver and enzymes from the pancreas) → large intestine (water absorption, waste formation) — with the small intestine\'s role as the PRIMARY absorption site being a frequently tested specific fact (not the stomach, a common wrong assumption). The nervous system is organised into the Central Nervous System (brain and spinal cord, the control centre) and the Peripheral Nervous System (nerves connecting the CNS to the rest of the body); the brain itself divides into the cerebrum (largest part, higher-order thinking, voluntary movement), cerebellum (balance and coordination) and medulla oblongata (controls involuntary functions like heartbeat and breathing).'),
      s('4. What to memorize', 'must',
        'Mitochondria = "powerhouse of the cell" (cellular respiration); Chloroplast = photosynthesis (plants only)',
        'Heart = 4 chambers, double circulation (pulmonary + systemic); RBCs=oxygen carriers, WBCs=immunity, platelets=clotting',
        'Alveoli = site of gas exchange in lungs',
        'Small intestine = PRIMARY site of nutrient absorption (not the stomach)',
        'Brain: cerebrum=higher thinking/voluntary movement; cerebellum=balance/coordination; medulla oblongata=involuntary functions (heartbeat, breathing)'),
      s('5. Exam traps', 'trap',
        'The small intestine, not the stomach, is the primary site of nutrient ABSORPTION — the stomach\'s role is digestion (acid breakdown), a commonly confused pair of functions.',
        'Chloroplasts are found only in PLANT cells, not animal cells — a basic but sometimes-missed distinction from mitochondria, which exist in both.'),
      s('6. 30-second revision', 'revision',
        'Mitochondria=powerhouse. Chloroplast=photosynthesis(plants only). Heart=4 chambers, double circulation. Alveoli=gas exchange. Small intestine=absorption(not stomach). Brain: cerebrum=thinking, cerebellum=balance, medulla=involuntary functions.')
    ],
    sourceNote: SRC
  },

  'Diseases & Health': {
    priority: 'MUST KNOW', title: 'Diseases & Health',
    summary: 'Diseases are classified by their causative agent (bacterial, viral, protozoan, deficiency-related), with vitamin-deficiency diseases and major vaccine-preventable diseases forming the most consistently tested sub-lists.',
    sections: [
      p('1. Disease classification by causative agent', 'must',
        'Diseases are classified by cause: Bacterial diseases (Tuberculosis, Cholera, Typhoid) are caused by bacteria and generally treatable with antibiotics; Viral diseases (Influenza, Dengue, COVID-19, Hepatitis, Polio) are caused by viruses, for which antibiotics are ineffective (a frequently tested distinction, since antibiotics work only on bacteria, not viruses); Protozoan diseases (Malaria, caused by the Plasmodium parasite transmitted via the female Anopheles mosquito; Amoebiasis) are caused by single-celled parasitic organisms; and Deficiency diseases result from inadequate nutrient intake rather than any pathogen at all (covered separately below).'),
      p('2. Vitamin deficiency diseases', 'must',
        'A standard list of vitamin-deficiency-to-disease pairings recurs constantly: Vitamin A deficiency causes Night Blindness; Vitamin B1 (Thiamine) deficiency causes Beriberi; Vitamin C deficiency causes Scurvy (bleeding gums, historically associated with sailors on long voyages before fresh fruit was carried); Vitamin D deficiency causes Rickets in children (bone deformity) and Osteomalacia in adults; and Vitamin K deficiency impairs blood clotting — this vitamin-letter-to-disease-name list is one of the single most reliably tested factual sets in general science, appearing across virtually every competitive exam.'),
      p('3. Vaccine-preventable diseases and immunisation', 'understand',
        'India\'s Universal Immunisation Programme covers a standard set of vaccine-preventable diseases in children, including Tuberculosis (BCG vaccine), Diphtheria, Pertussis (whooping cough) and Tetanus (the "DPT" combination vaccine), Polio, Measles, and Hepatitis B — vaccination works by exposing the immune system to a weakened/inactivated form of a pathogen (or a component of it), training the body to recognise and fight the real pathogen more effectively if encountered later, without causing the actual disease.'),
      s('4. What to memorize', 'must',
        'Bacterial: TB, Cholera, Typhoid (antibiotics work) · Viral: Dengue, Influenza, Hepatitis, Polio (antibiotics DON\'T work) · Protozoan: Malaria (Plasmodium, via Anopheles mosquito)',
        'Vitamin A→Night Blindness · B1→Beriberi · C→Scurvy · D→Rickets(children)/Osteomalacia(adults) · K→impaired clotting',
        'BCG=TB vaccine; DPT=Diphtheria+Pertussis+Tetanus combined vaccine'),
      s('5. Exam traps', 'trap',
        'Antibiotics are effective against bacterial diseases but NOT viral diseases — a fundamental and frequently tested distinction.',
        'Malaria is caused by a PROTOZOAN parasite (Plasmodium), transmitted by the mosquito — the mosquito is the vector/carrier, not the disease-causing organism itself.',
        'Vitamin D deficiency causes Rickets specifically in children and Osteomalacia in adults — two different names for essentially the same underlying deficiency at different life stages.'),
      s('6. 30-second revision', 'revision',
        'Bacterial(antibiotics work)=TB/Cholera/Typhoid. Viral(antibiotics don\'t)=Dengue/Flu/Hepatitis/Polio. Protozoan=Malaria(Plasmodium, Anopheles). Vitamins: A=night blindness, B1=beriberi, C=scurvy, D=rickets/osteomalacia, K=clotting. BCG=TB. DPT=diphtheria+pertussis+tetanus.')
    ],
    sourceNote: SRC
  },

  'Space Technology': {
    priority: 'IMPORTANT', title: 'Space Technology',
    summary: 'ISRO\'s major historical milestones — Aryabhata (India\'s first satellite), the Chandrayaan and Mangalyaan missions, and the Chandrayaan-3 lunar south-pole landing — are the standard, settled facts tested in this topic.',
    sections: [
      p('1. ISRO and India\'s early satellite programme', 'must',
        'The Indian Space Research Organisation (ISRO), headquartered at Bengaluru with its main launch site at Sriharikota (Andhra Pradesh, the Satish Dhawan Space Centre), was established in 1969, building on earlier work by Vikram Sarabhai, widely regarded as the father of the Indian space programme. Aryabhata, launched in 1975 (with Soviet assistance), was India\'s first satellite, named after the ancient mathematician-astronomer (covered under Ancient India) — a fitting naming choice frequently tested as India\'s "first" space milestone.'),
      p('2. The Chandrayaan (Moon) missions', 'must',
        'Chandrayaan-1 (2008) was India\'s first lunar mission, notable for contributing to the discovery of water molecules on the Moon\'s surface — a globally significant scientific finding. Chandrayaan-2 (2019) attempted a soft landing that ultimately failed during the final descent (the orbiter component continued functioning successfully). Chandrayaan-3 (2023) succeeded where Chandrayaan-2 had not, achieving a historic soft landing near the Moon\'s south pole — making India the first country to land near the lunar south pole and only the fourth country overall (after the USSR, USA and China) to achieve any soft lunar landing, a landmark "first" and "fourth" pairing worth remembering precisely.'),
      p('3. Mangalyaan and other notable missions', 'must',
        'Mangalyaan (the Mars Orbiter Mission, MOM), launched in 2013 and successfully entering Mars orbit in 2014, made India the first Asian country to reach Mars orbit and the first country in the world to succeed on its very first attempt at a Mars mission — a widely cited "first attempt success" fact that distinguishes it even among the small group of nations that have reached Mars at all. Gaganyaan, India\'s planned crewed spaceflight programme, aims to send Indian astronauts into orbit using indigenous launch capability — as an ongoing/future programme rather than a completed historical milestone, treat any specific Gaganyaan timeline as a current-affairs fact to verify separately.'),
      s('4. What to memorize', 'must',
        'ISRO = est. 1969, HQ Bengaluru, launch site Sriharikota; Vikram Sarabhai = father of Indian space programme',
        'Aryabhata (1975) = India\'s first satellite',
        'Chandrayaan-1 (2008) = water molecules on Moon discovery; Chandrayaan-2 (2019) = landing failed, orbiter succeeded; Chandrayaan-3 (2023) = successful south-pole soft landing (1st country there, 4th overall to soft-land)',
        'Mangalyaan/MOM (2013 launch, 2014 orbit entry) = 1st Asian country to Mars orbit, 1st country to succeed on first attempt'),
      s('5. Exam traps', 'trap',
        'Chandrayaan-3\'s "first" is specifically about landing near the lunar SOUTH POLE — India is the FOURTH country overall to achieve any soft lunar landing (after USSR, USA, China), not the first ever.',
        'Mangalyaan\'s standout achievement is succeeding on India\'s very FIRST Mars attempt — a distinct superlative from simply "reaching Mars," which several other countries have also done, typically after earlier failed attempts.'),
      s('6. 30-second revision', 'revision',
        'ISRO=1969, Bengaluru/Sriharikota, Vikram Sarabhai=father. Aryabhata(1975)=1st satellite. Chandrayaan-1(2008)=water on Moon. Chandrayaan-2(2019)=landing failed. Chandrayaan-3(2023)=south-pole landing success, 4th country overall. Mangalyaan(2013-14)=1st Asian country to Mars, 1st-attempt success globally.')
    ],
    sourceNote: SRC
  },

  'Defence Technology': {
    priority: 'IMPORTANT', title: 'Defence Technology',
    summary: 'India\'s three armed forces branches, DRDO as the central defence research agency, and major indigenous missile programmes (Agni, Prithvi, BrahMos) form the standard defence-technology GK framework.',
    sections: [
      p('1. India\'s armed forces structure', 'must',
        'India\'s armed forces comprise three branches: the Indian Army (land forces), the Indian Navy (maritime forces) and the Indian Air Force (aerial forces), each headed by their own Chief of Staff, with the President of India as the constitutional Supreme Commander of the armed forces (covered under Indian Polity/President & Vice-President) — the Chief of Defence Staff (CDS), a newer post created in 2019, serves as the single-point military adviser to the government and head of the Department of Military Affairs, distinct from the three individual service chiefs.'),
      p('2. DRDO and indigenous defence research', 'must',
        'The Defence Research and Development Organisation (DRDO), established in 1958, is India\'s primary agency for military research and development, responsible for developing indigenous defence technology across missiles, aircraft, armoured vehicles and other systems — reducing dependence on foreign defence imports has been a consistent strategic goal underlying DRDO\'s mandate, connecting to the broader "Make in India" and self-reliance (Atmanirbhar Bharat) themes covered under Industry & Infrastructure.'),
      p('3. Major missile programmes', 'must',
        'India\'s indigenous missile programme includes several distinct families worth knowing by name and general category: the Agni series are long-range ballistic missiles (with different Agni variants having progressively longer ranges); the Prithvi series are shorter-range tactical ballistic missiles; Akash is a surface-to-air missile system; and BrahMos, a supersonic cruise missile, is notable as a joint India-Russia development (a collaborative programme, distinct from the purely indigenous Agni/Prithvi series) — the BrahMos joint-development fact is a frequently tested distinguishing detail among India\'s missile programmes.'),
      s('4. What to memorize', 'must',
        'Armed forces: Army (land), Navy (sea), Air Force (air); President = constitutional Supreme Commander; CDS (since 2019) = single-point military adviser',
        'DRDO = est. 1958, India\'s primary defence R&D agency',
        'Agni = long-range ballistic missiles; Prithvi = short-range tactical missiles; Akash = surface-to-air; BrahMos = supersonic cruise missile, JOINT India-Russia development'),
      s('5. Exam traps', 'trap',
        'BrahMos is a joint India-RUSSIA development, unlike the purely indigenous Agni and Prithvi missile series — a frequently tested distinguishing fact.',
        'The Chief of Defence Staff (CDS) post, created in 2019, is distinct from and senior in coordination role to the three individual service chiefs (Army, Navy, Air Force), not a replacement for them.'),
      s('6. 30-second revision', 'revision',
        'Army/Navy/Air Force = 3 branches; President = Supreme Commander; CDS(2019) = single-point adviser. DRDO=1958. Agni=long-range ballistic. Prithvi=short-range. Akash=surface-to-air. BrahMos=cruise missile, India-Russia joint.')
    ],
    sourceNote: SRC
  },

  'Biotechnology': {
    priority: 'IMPORTANT', title: 'Biotechnology',
    summary: 'Genetic engineering, DNA fingerprinting and vaccine technology (traditional versus mRNA-based) are the core biotechnology concepts tested, alongside genetically modified (GM) crops as a recurring applied-biotechnology topic.',
    sections: [
      p('1. Genetic engineering and recombinant DNA technology', 'must',
        'Genetic engineering involves directly manipulating an organism\'s DNA, most commonly through recombinant DNA technology — inserting a gene of interest (from one organism) into the DNA of another organism (often bacteria, used as a "factory" to produce a desired protein) — a technique fundamental to producing genetically modified organisms (GMOs) and biotechnology-derived drugs like insulin (human insulin is now commonly produced by genetically engineered bacteria rather than extracted from animal sources, a major biotechnology success story worth knowing as a standard example).'),
      p('2. DNA fingerprinting', 'must',
        'DNA fingerprinting (DNA profiling) is a technique that identifies individuals based on unique patterns in their DNA — since every individual\'s DNA sequence is unique (except identical twins) — with major applications in forensic investigation (crime scene evidence matching), paternity testing, and identifying disaster victims; the technique exploits highly variable regions of DNA (rather than needing to sequence an individual\'s entire genome) to generate a distinguishing "fingerprint" pattern.'),
      p('3. Genetically Modified (GM) crops and vaccine technology', 'understand',
        'Genetically Modified (GM) crops have genes artificially inserted to confer desired traits — pest resistance, herbicide tolerance, or improved nutritional content — Bt cotton (engineered with a gene from the bacterium Bacillus thuringiensis for pest resistance) is India\'s most widely cultivated GM crop and the standard example in this topic, while GM food crops for direct human consumption remain a more contested regulatory area in India. On vaccine technology, traditional vaccines use a weakened or inactivated pathogen (or a component of it) to trigger immunity, while newer mRNA vaccine technology (which gained prominence during the COVID-19 pandemic) works differently, delivering genetic instructions that prompt the body\'s own cells to temporarily produce a harmless piece of the pathogen, training the immune system without ever introducing the actual pathogen — a fundamentally different mechanism from traditional vaccines, worth knowing as a conceptual distinction rather than a "which is better" comparison.'),
      s('4. What to memorize', 'must',
        'Recombinant DNA technology = insert gene of interest into another organism\'s DNA (e.g. bacteria producing human insulin)',
        'DNA fingerprinting = identifies individuals via unique DNA patterns; used in forensics, paternity testing',
        'Bt cotton = India\'s major GM crop (pest resistance gene from Bacillus thuringiensis)',
        'Traditional vaccines = weakened/inactivated pathogen; mRNA vaccines = genetic instructions prompting the body\'s own cells to produce a harmless pathogen piece'),
      s('5. Exam traps', 'trap',
        'Bt cotton is genetically modified for PEST resistance (via a bacterial gene), not for higher yield directly or drought resistance — a specific mechanism worth remembering precisely.',
        'mRNA vaccines do not introduce the actual pathogen into the body — they deliver genetic instructions for cells to produce a harmless pathogen component, a mechanistically distinct approach from traditional vaccines.'),
      s('6. 30-second revision', 'revision',
        'Recombinant DNA=insert gene into another organism (e.g. bacteria→insulin). DNA fingerprinting=unique DNA pattern ID, forensics. Bt cotton=India\'s main GM crop, pest resistance. Traditional vaccine=weakened pathogen; mRNA vaccine=genetic instructions, no actual pathogen.')
    ],
    sourceNote: SRC
  },

  'Everyday Science': {
    priority: 'IMPORTANT', title: 'Everyday Science',
    summary: 'A grab-bag of frequently tested "why does this happen" everyday science facts — why the sky is blue, how soap cleans, why ice floats on water — that recur across general science papers regardless of formal subject boundaries.',
    sections: [
      p('1. Light and colour phenomena', 'must',
        'The sky appears blue due to Rayleigh scattering — sunlight entering the atmosphere is scattered in all directions by air molecules, and blue light (having a shorter wavelength) scatters more than other colours, dominating what reaches our eyes from all directions across the sky; the same scattering principle explains why sunsets appear red/orange (sunlight travels through more atmosphere at a low angle, scattering away most blue light before it reaches the observer, leaving the longer-wavelength red/orange light dominant). A rainbow forms when sunlight is refracted, reflected internally, and dispersed by water droplets in the atmosphere, splitting white light into its component colours (the familiar VIBGYOR — violet, indigo, blue, green, yellow, orange, red — sequence).'),
      p('2. Everyday chemistry and material properties', 'must',
        'Soap cleans by acting as a surfactant: its molecule has a water-loving (hydrophilic) end and an oil/grease-loving (hydrophobic) end, allowing it to surround grease/dirt particles and lift them away in a form water can rinse off, since water alone cannot dissolve oily dirt effectively. Ice floats on water because water is unusual among common substances in that its solid form (ice) is LESS dense than its liquid form — as water freezes, its molecules arrange into a crystal lattice structure that takes up more space (is less dense) than liquid water\'s more compact, randomly arranged molecules, a property with major ecological significance (ice floating insulates the water below, allowing aquatic life to survive winter rather than freezing solid from the bottom up).'),
      p('3. Everyday mechanics and thermodynamics', 'understand',
        'A vacuum flask (thermos) keeps liquids hot or cold by minimising all three forms of heat transfer: a vacuum layer between double walls prevents conduction and convection (no medium for heat to travel through), while a reflective/silvered inner surface minimises radiative heat loss. Metals feel colder to the touch than wood at the same room temperature because metals are much better THERMAL CONDUCTORS, drawing heat away from your hand faster (a perception-of-temperature effect, not an actual temperature difference between the objects themselves) — a frequently tested "why does X feel colder" conceptual question.'),
      s('4. What to memorize', 'must',
        'Sky = blue due to Rayleigh scattering (blue light scatters most); sunsets = red/orange (blue scattered away over longer path)',
        'Soap = surfactant, hydrophilic + hydrophobic ends, lifts grease into water',
        'Ice floats = solid water is LESS dense than liquid water (unusual property, ecologically significant)',
        'Metals feel colder than wood at the same temperature = metals are better thermal conductors (draw heat away faster)'),
      s('5. Exam traps', 'trap',
        'Metals and wood at the "same room temperature" are actually at the SAME temperature — metal only FEELS colder due to faster heat conduction away from your hand, a frequently misunderstood perception-vs-reality distinction.',
        'Ice being less dense than water is an UNUSUAL property among substances (most solids are denser than their liquid form) — worth remembering as an exception, not the norm.'),
      s('6. 30-second revision', 'revision',
        'Sky=blue(Rayleigh scattering). Sunset=red/orange(blue scattered away). Soap=surfactant(hydrophilic+hydrophobic). Ice floats=solid water less dense than liquid(unusual). Metal feels cold=better conductor(same actual temp as wood).')
    ],
    sourceNote: SRC
  }
};
