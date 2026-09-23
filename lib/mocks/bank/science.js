const S = 'science';
const ST = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];

// [difficulty, question, options, answerIndex, explanation, fixedOptionOrder?]
const rows = {
  'Physics': [
    ['easy', 'Newton\'s First Law of Motion is also known as the law of', ['Inertia', 'Gravitation', 'Conservation of momentum', 'Relativity'], 0, 'An object remains at rest or in uniform motion unless acted upon by an external force.'],
    ['easy', 'Newton\'s Second Law of Motion is expressed by which formula?', ['F = ma', 'E = mc²', 'V = IR', 'P = mv'], 0, 'Force equals mass times acceleration.'],
    ['easy', 'Newton\'s Third Law of Motion explains which of the following phenomena?', ['Rocket propulsion', 'Planetary orbits', 'Electromagnetic induction', 'Radioactive decay'], 0, 'For every action, there is an equal and opposite reaction.'],
    ['medium', 'The Law of Conservation of Energy states that energy', ['Cannot be created or destroyed, only converted from one form to another', 'Is always created during chemical reactions', 'Is destroyed when converted between forms', 'Only applies to kinetic energy'], 0, 'Underlies the working of energy-conversion devices.'],
    ['medium', 'A ceiling fan requires a capacitor primarily to', ['Provide the initial torque needed to start the motor', 'Reduce the fan\'s electricity consumption to zero', 'Increase the fan\'s speed beyond its rated limit', 'Convert AC current to DC current'], 0, 'A single-phase AC motor cannot self-start without a phase difference.'],
    ['medium', 'A pressure cooker cooks food faster primarily because', ['Increased internal pressure raises water\'s boiling point above 100°C', 'It uses more heat than an open pan', 'It removes all water from the food', 'It uses microwave radiation'], 0, 'Allows food to cook at a higher temperature than open-pan boiling.'],
    ['hard', 'Consider the following statements:\n1. A refrigerant absorbs heat as it evaporates at low pressure inside a refrigerator.\n2. Newton\'s Third Law states that force equals mass times acceleration.\nWhich of the statements is/are correct?', ST, 0, 'Newton\'s Second Law, not the Third, is F=ma; the Third Law concerns action-reaction pairs.', true]
  ],

  'Chemistry': [
    ['easy', 'The Periodic Table organises chemical elements primarily by increasing', ['Atomic number', 'Atomic mass only', 'Melting point', 'Electrical conductivity'], 0, 'Number of protons; refined from Mendeleev\'s original atomic-mass-based version.'],
    ['easy', 'On the pH scale, a value of 7 indicates', ['A neutral solution', 'A strongly acidic solution', 'A strongly basic solution', 'An undefined value'], 0, 'The scale runs from 0 (most acidic) to 14 (most basic).'],
    ['easy', 'Litmus paper turns which colour in an acidic solution?', ['Red', 'Blue', 'Green', 'Yellow'], 0, 'It turns blue in basic/alkaline conditions.'],
    ['medium', 'A LOWER pH value indicates a solution that is', ['More acidic', 'More basic/alkaline', 'Perfectly neutral', 'Has no relationship to acidity'], 0, 'A frequently reversed directionality.'],
    ['medium', 'Sodium Bicarbonate, commonly known as baking soda, has the chemical formula', ['NaHCO3', 'Na2CO3', 'NaOH', 'NaCl'], 0, 'Used in cooking and as a mild antacid.'],
    ['medium', 'Calcium Oxychloride, used for water purification and disinfection, is commonly known as', ['Bleaching powder', 'Washing soda', 'Plaster of Paris', 'Baking soda'], 0, 'A common household and industrial disinfectant.'],
    ['medium', 'Plaster of Paris, used in construction and medical casts, is chemically known as', ['Calcium Sulphate hemihydrate', 'Calcium Carbonate', 'Sodium Bicarbonate', 'Calcium Oxide'], 0, 'Sets by absorbing water and hardening.'],
    ['hard', 'Consider the following statements:\n1. Hydrochloric acid is naturally present in the human stomach.\n2. The modern periodic table is organised by atomic mass, not atomic number.\nWhich of the statements is/are correct?', ST, 0, 'The modern periodic table is organised by atomic number, a refinement of Mendeleev\'s original mass-based version.', true]
  ],

  'Biology & Human Body': [
    ['easy', 'Which organelle is commonly known as the "powerhouse of the cell"?', ['Mitochondria', 'Nucleus', 'Chloroplast', 'Ribosome'], 0, 'The site of cellular respiration and energy production.'],
    ['easy', 'Photosynthesis occurs in which organelle, found only in plant cells?', ['Chloroplast', 'Mitochondria', 'Nucleus', 'Golgi apparatus'], 0, 'Not found in animal cells.'],
    ['easy', 'How many chambers does the human heart have?', ['Four', 'Two', 'Three', 'Six'], 0, 'Two atria and two ventricles.'],
    ['medium', 'Which blood component is primarily responsible for carrying oxygen via haemoglobin?', ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma alone'], 0, 'White blood cells handle immune defence; platelets handle clotting.'],
    ['medium', 'In the human respiratory system, gas exchange with the bloodstream primarily occurs at the', ['Alveoli', 'Trachea', 'Bronchi', 'Larynx'], 0, 'Tiny air sacs in the lungs.'],
    ['medium', 'Which organ is the PRIMARY site of nutrient absorption in the human digestive system?', ['Small intestine', 'Stomach', 'Large intestine', 'Oesophagus'], 0, 'The stomach\'s role is acidic digestion, not primary absorption.'],
    ['medium', 'Which part of the human brain controls involuntary functions like heartbeat and breathing?', ['Medulla oblongata', 'Cerebrum', 'Cerebellum', 'Hypothalamus'], 0, 'The cerebrum handles higher-order thinking; the cerebellum handles balance.'],
    ['hard', 'Consider the following statements:\n1. Prokaryotic cells have a membrane-bound nucleus.\n2. Eukaryotic cells have membrane-bound organelles.\nWhich of the statements is/are correct?', ST, 1, 'Prokaryotic cells (like bacteria) lack a membrane-bound nucleus; eukaryotic cells have both a nucleus and membrane-bound organelles.', true]
  ],

  'Diseases & Health': [
    ['easy', 'Tuberculosis, Cholera and Typhoid are all examples of which category of disease?', ['Bacterial diseases', 'Viral diseases', 'Protozoan diseases', 'Deficiency diseases'], 0, 'Generally treatable with antibiotics.'],
    ['easy', 'Malaria is caused by which type of organism?', ['A protozoan parasite (Plasmodium)', 'A bacterium', 'A virus', 'A fungus'], 0, 'Transmitted via the female Anopheles mosquito.'],
    ['easy', 'Vitamin C deficiency causes which disease?', ['Scurvy', 'Rickets', 'Beriberi', 'Night blindness'], 0, 'Historically associated with sailors on long voyages.'],
    ['medium', 'Antibiotics are effective in treating which category of disease?', ['Bacterial diseases, but not viral diseases', 'Both bacterial and viral diseases equally', 'Only viral diseases', 'Only protozoan diseases'], 0, 'A fundamental and frequently tested medical distinction.'],
    ['medium', 'Vitamin A deficiency is most directly associated with which condition?', ['Night blindness', 'Scurvy', 'Rickets', 'Beriberi'], 0, 'Affects vision, particularly in low light.'],
    ['medium', 'Vitamin D deficiency in children causes which condition?', ['Rickets', 'Osteomalacia', 'Scurvy', 'Beriberi'], 0, 'Osteomalacia is the corresponding condition in adults.'],
    ['medium', 'The BCG vaccine, part of India\'s Universal Immunisation Programme, protects against which disease?', ['Tuberculosis', 'Polio', 'Measles', 'Hepatitis B'], 0, 'One of the standard childhood vaccines.'],
    ['hard', 'Consider the following statements:\n1. Malaria is transmitted by the female Anopheles mosquito.\n2. Antibiotics are effective against viral diseases like Dengue.\nWhich of the statements is/are correct?', ST, 0, 'Antibiotics are ineffective against viral diseases like Dengue, which is caused by a virus, not bacteria.', true]
  ],

  'Space Technology': [
    ['easy', 'Which was India\'s first satellite, launched in 1975?', ['Aryabhata', 'Bhaskara', 'Rohini', 'INSAT-1A'], 0, 'Named after the ancient mathematician-astronomer, launched with Soviet assistance.'],
    ['easy', 'ISRO, India\'s space agency, is headquartered in which city?', ['Bengaluru', 'New Delhi', 'Mumbai', 'Chennai'], 0, 'Its main launch site is at Sriharikota, Andhra Pradesh.'],
    ['easy', 'Who is widely regarded as the father of the Indian space programme?', ['Vikram Sarabhai', 'Homi Bhabha', 'APJ Abdul Kalam', 'C.V. Raman'], 0, 'A key figure in ISRO\'s founding and early development.'],
    ['medium', 'Chandrayaan-1 (2008), India\'s first lunar mission, is notable for contributing to the discovery of', ['Water molecules on the Moon\'s surface', 'Life on the Moon', 'A new planet in the solar system', 'Oil deposits on the Moon'], 0, 'A globally significant scientific finding.'],
    ['medium', 'Chandrayaan-3 (2023) achieved which historic milestone?', ['A soft landing near the Moon\'s south pole', 'The first-ever soft landing on the Moon by any country', 'The first Mars landing by India', 'Placing an Indian astronaut on the Moon'], 0, 'India became the first country to land near the lunar south pole.'],
    ['medium', 'Mangalyaan (the Mars Orbiter Mission) made India notable for being', ['The first country to succeed in reaching Mars orbit on its very first attempt', 'The first country ever to reach Mars', 'The only country to have a Mars mission', 'The first country to land on Mars'], 0, 'Launched in 2013, entered Mars orbit in 2014.'],
    ['hard', 'Consider the following statements:\n1. India is the fourth country overall to achieve a soft landing on the Moon.\n2. Chandrayaan-2 achieved a fully successful soft landing on the Moon in 2019.\nWhich of the statements is/are correct?', ST, 0, 'Chandrayaan-2\'s landing attempt failed in 2019; only the orbiter component succeeded. Chandrayaan-3 (2023) achieved the successful landing.', true]
  ],

  'Defence Technology': [
    ['easy', 'India\'s armed forces comprise which three branches?', ['Army, Navy and Air Force', 'Army, Navy and Coast Guard', 'Army, Air Force and Paramilitary', 'Navy, Air Force and Border Security Force'], 0, 'Each headed by its own Chief of Staff.'],
    ['easy', 'Who is the constitutional Supreme Commander of India\'s armed forces?', ['The President of India', 'The Prime Minister', 'The Chief of Defence Staff', 'The Defence Minister'], 0, 'A ceremonial constitutional role.'],
    ['easy', 'DRDO, India\'s primary defence research agency, was established in which year?', ['1958', '1947', '1969', '1998'], 0, 'Responsible for developing indigenous defence technology.'],
    ['medium', 'The post of Chief of Defence Staff (CDS) was created in which year?', ['2019', '1958', '2001', '1999'], 0, 'Serves as the single-point military adviser to the government.'],
    ['medium', 'Which Indian missile is a joint India-Russia development, distinguishing it from the purely indigenous missile series?', ['BrahMos', 'Agni', 'Prithvi', 'Akash'], 0, 'A supersonic cruise missile.'],
    ['medium', 'The Agni series of Indian missiles are best classified as', ['Long-range ballistic missiles', 'Short-range tactical missiles', 'Surface-to-air missiles', 'Anti-tank guided missiles'], 0, 'Prithvi, by contrast, are shorter-range tactical missiles.'],
    ['hard', 'Consider the following statements:\n1. The Chief of Defence Staff replaced the three individual service chiefs.\n2. Akash is a surface-to-air missile system developed by India.\nWhich of the statements is/are correct?', ST, 1, 'The CDS is a coordinating adviser role, not a replacement for the three individual service chiefs, who continue to exist.', true]
  ],

  'Biotechnology': [
    ['easy', 'Recombinant DNA technology involves', ['Inserting a gene of interest from one organism into the DNA of another', 'Removing all DNA from an organism', 'Only studying DNA without modifying it', 'Cloning entire organisms exclusively'], 0, 'Fundamental to producing GMOs and biotechnology-derived drugs.'],
    ['easy', 'Human insulin is now commonly produced using which method?', ['Genetically engineered bacteria', 'Extraction from animal pancreas exclusively', 'Chemical synthesis from petroleum', 'Extraction from plant sources'], 0, 'A major biotechnology success story.'],
    ['medium', 'DNA fingerprinting is primarily used for', ['Identifying individuals based on unique DNA patterns', 'Curing genetic diseases directly', 'Producing vaccines', 'Measuring blood pressure'], 0, 'Major applications include forensic investigation and paternity testing.'],
    ['medium', 'Bt cotton, India\'s most widely cultivated GM crop, is engineered for which trait?', ['Pest resistance', 'Drought resistance', 'Higher protein content', 'Faster growth rate'], 0, 'Uses a gene from the bacterium Bacillus thuringiensis.'],
    ['medium', 'mRNA vaccine technology, which gained prominence during the COVID-19 pandemic, works by', ['Delivering genetic instructions that prompt the body\'s cells to produce a harmless pathogen piece', 'Injecting a fully active, unmodified pathogen', 'Using only plant-based compounds', 'Directly altering a person\'s own DNA'], 0, 'A mechanistically distinct approach from traditional vaccines.'],
    ['hard', 'Consider the following statements:\n1. Traditional vaccines use a weakened or inactivated pathogen to trigger immunity.\n2. Bt cotton was engineered for higher yield rather than pest resistance.\nWhich of the statements is/are correct?', ST, 0, 'Bt cotton was engineered specifically for pest resistance via a bacterial gene, not directly for higher yield.', true]
  ],

  'Everyday Science': [
    ['easy', 'The sky appears blue primarily due to which phenomenon?', ['Rayleigh scattering of sunlight', 'Reflection from ocean water', 'Absorption of red light by clouds', 'Refraction through ice crystals'], 0, 'Blue light, with a shorter wavelength, scatters more than other colours.'],
    ['easy', 'A rainbow forms due to which combination of processes acting on sunlight?', ['Refraction, internal reflection and dispersion by water droplets', 'Only reflection off clouds', 'Only absorption by the atmosphere', 'Only scattering by dust particles'], 0, 'Splits white light into its component colours (VIBGYOR).'],
    ['medium', 'Soap cleans effectively because its molecules have', ['A hydrophilic end and a hydrophobic end', 'Only hydrophilic properties throughout', 'Only hydrophobic properties throughout', 'No interaction with water at all'], 0, 'Allows it to surround grease particles and lift them into water.'],
    ['medium', 'Ice floats on water because', ['Solid water (ice) is less dense than liquid water', 'Ice is heavier than water', 'Ice and water have identical density', 'Ice contains trapped air bubbles exclusively'], 0, 'An unusual property among common substances, with major ecological significance.'],
    ['medium', 'Metals feel colder to the touch than wood at the same room temperature because', ['Metals are better thermal conductors, drawing heat away from the hand faster', 'Metals are actually at a lower temperature than wood', 'Wood absorbs heat from the air faster than metal', 'Metals reflect all heat back to the hand'], 0, 'A perception effect, not an actual temperature difference.'],
    ['medium', 'A vacuum flask (thermos) keeps liquids hot or cold primarily by', ['Minimising conduction, convection and radiative heat transfer', 'Actively cooling or heating the liquid electronically', 'Using a chemical reaction to maintain temperature', 'Increasing air pressure inside the flask'], 0, 'A vacuum layer and reflective inner surface work together.'],
    ['hard', 'Consider the following statements:\n1. Sunsets appear red/orange because blue light is scattered away over the longer atmospheric path sunlight travels at a low angle.\n2. Metals at the same room temperature as wood are actually at a lower temperature.\nWhich of the statements is/are correct?', ST, 0, 'Metals and wood at the same room temperature are at the same actual temperature; metal only feels colder due to faster heat conduction.', true]
  ]
};

export const scienceBank = Object.entries(rows).flatMap(([topic, list]) =>
  list.map(([difficulty, q, options, answer, explanation, fixed]) => ({
    subject: S, topic, difficulty, q, options, answer, explanation, fixed: Boolean(fixed)
  }))
);
