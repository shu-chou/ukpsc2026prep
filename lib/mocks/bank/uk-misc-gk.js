const S = 'uttarakhand/misc-gk';
const ST = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];

// [difficulty, question, options, answerIndex, explanation, fixedOptionOrder?]
const rows = {
  'State Symbols': [
    ['easy', 'What is the state animal of Uttarakhand?', ['Alpine Musk Deer', 'Himalayan Tahr', 'Snow Leopard', 'Bengal Tiger'], 0, 'Also covered under Environment & Natural Resources.'],
    ['easy', 'What is the state bird of Uttarakhand?', ['Himalayan Monal', 'Peacock', 'Koklass Pheasant', 'Himalayan Griffon'], 0, 'A strikingly iridescent multicoloured pheasant.'],
    ['easy', 'What is the state tree of Uttarakhand?', ['Buransh (Rhododendron arboreum)', 'Deodar', 'Sal', 'Banj Oak'], 0, 'Its red flowers mark the temperate-to-alpine transition.'],
    ['easy', 'What is the state flower of Uttarakhand?', ['Brahma Kamal', 'Lotus', 'Marigold', 'Rhododendron'], 0, 'A rare high-altitude flower found near Hemkund and the Valley of Flowers.'],
    ['medium', 'Uttarakhand\'s second official language, alongside Hindi, is', ['Sanskrit', 'Urdu', 'English', 'Garhwali'], 0, 'A distinctive choice among Indian states.'],
    ['hard', 'Consider the following statements:\n1. Uttarakhand has a single officially designated "state dance."\n2. Brahma Kamal and the common lotus are the same flower.\nWhich of the statements is/are correct?', ST, 3, 'Uttarakhand\'s folk-dance tradition is genuinely plural rather than reducible to one official dance, and Brahma Kamal is a distinct high-altitude flower.', true]
  ],

  'Important Places': [
    ['easy', 'Which city serves as Uttarakhand\'s winter capital and de facto seat of government?', ['Dehradun', 'Nainital', 'Gairsain', 'Haridwar'], 0, 'Houses the Secretariat and most administrative offices.'],
    ['easy', 'Which town was declared the summer capital of Uttarakhand in 2020?', ['Gairsain (Bhararisain)', 'Nainital', 'Mussoorie', 'Almora'], 0, 'Located in Chamoli district.'],
    ['easy', 'The Uttarakhand High Court is seated at', ['Nainital', 'Dehradun', 'Haridwar', 'Haldwani'], 0, 'A commonly tested seat-vs-capital mismatch.'],
    ['medium', 'Gairsain, the summer capital of Uttarakhand, is located in which district?', ['Chamoli', 'Pauri Garhwal', 'Tehri Garhwal', 'Rudraprayag'], 0, 'Also called Bhararisain.'],
    ['medium', 'The headquarters of the Kumaon division is at', ['Nainital', 'Almora', 'Haldwani', 'Pithoragarh'], 0, 'Distinct from the Garhwal divisional headquarters.'],
    ['medium', 'The headquarters of the Garhwal division is at', ['Pauri', 'Dehradun', 'Srinagar', 'Tehri'], 0, 'Distinct from the Kumaon divisional headquarters.'],
    ['hard', 'Consider the following statements:\n1. Dehradun is the seat of the Uttarakhand High Court.\n2. Gairsain is a separate administrative district of Uttarakhand.\nWhich of the statements is/are correct?', ST, 3, 'The High Court is at Nainital, and Gairsain lies within Chamoli district, not a district of its own.', true]
  ],

  'Important Personalities': [
    ['easy', 'Sumitranandan Pant, the Jnanpith-winning Hindi poet, was born in which town?', ['Kausani', 'Almora', 'Pithoragarh', 'Nainital'], 0, 'A leading figure of the Hindi Chhayavad movement.'],
    ['easy', 'Mola Ram, an 18th-century painter-poet, is associated with which artistic tradition?', ['The Garhwal school of painting', 'The Kumaoni Aipan tradition', 'The Kangra school of painting', 'Modern Hindi Chhayavad poetry'], 0, 'Worked at the Tehri Garhwal royal court.'],
    ['medium', 'Gaura Devi, who led the 1974 Chipko action, belonged to which village?', ['Reni, Chamoli district', 'Nauti, Chamoli district', 'Chitai, Almora district', 'Mana, Chamoli district'], 0, 'A landmark early instance of grassroots ecological activism.'],
    ['medium', 'Chandi Prasad Bhatt, a co-founder of the Chipko movement, is closely associated with organising the movement in which district?', ['Chamoli', 'Uttarkashi', 'Pithoragarh', 'Tehri Garhwal'], 0, 'Later received the Right Livelihood Award and Ramon Magsaysay Award.'],
    ['medium', 'Sunderlal Bahuguna, the nationally prominent face of the Chipko movement, is also closely associated with opposition to which project?', ['The Tehri Dam', 'The Char Dham All-Weather Road', 'The Rishikesh-Karnaprayag rail line', 'The Rajaji Tiger Reserve declaration'], 0, 'Led the decades-long Anti-Tehri Dam movement.'],
    ['hard', 'Consider the following statements:\n1. Chandi Prasad Bhatt and Sunderlal Bahuguna are the same person.\n2. Both are associated with the Chipko movement, though with different emphases.\nWhich of the statements is/are correct?', ST, 1, 'They are two distinct leaders associated with different phases/emphases of the same movement.', true]
  ],

  'Sports': [
    ['easy', 'Which Uttarakhand town is a major centre for white-water river rafting on the Ganga?', ['Rishikesh', 'Haridwar', 'Nainital', 'Almora'], 0, 'Leverages the Ganga\'s rapids as it emerges from the Himalayan foothills.'],
    ['easy', 'Auli, Uttarakhand\'s principal skiing destination, is located in which district?', ['Chamoli', 'Uttarkashi', 'Pithoragarh', 'Nainital'], 0, 'Offers views toward Nanda Devi.'],
    ['medium', 'The promotion of sport and adventure tourism in Uttarakhand is closely linked to which broader state policy goal?', ['Countering out-migration through youth employment', 'Expanding heavy industry', 'Reducing agricultural land use', 'Increasing urban population density'], 0, 'Covered under Schemes & Development/Youth & Employment.'],
    ['hard', 'Consider the following statements:\n1. Auli is primarily known as a river-rafting destination.\n2. Rishikesh is primarily known as a skiing destination.\nWhich of the statements is/are correct?', ST, 3, 'The associations are reversed — Auli is for skiing, Rishikesh for river rafting.', true]
  ],

  'Awards & Honours': [
    ['easy', 'Chandi Prasad Bhatt, associated with the Chipko movement, received which of the following awards?', ['Ramon Magsaysay Award and Right Livelihood Award', 'Jnanpith Award', 'Bharat Ratna', 'Nobel Peace Prize'], 0, 'Both awards recognise his environmental and community-organisation work.'],
    ['easy', 'Sumitranandan Pant received which of India\'s highest literary honours?', ['Jnanpith Award', 'Padma Vibhushan only', 'Sahitya Akademi Fellowship only', 'Bharat Ratna'], 0, 'For his contribution to Hindi Chhayavad poetry.'],
    ['medium', 'The Right Livelihood Award, received by a prominent Uttarakhand environmentalist, is sometimes referred to as', ['The "Alternative Nobel Prize"', 'India\'s equivalent of the Bharat Ratna', 'A state government honour only', 'A sports award'], 0, 'Awarded to Chandi Prasad Bhatt for his Chipko-linked work.'],
    ['hard', 'Consider the following statements:\n1. Sumitranandan Pant received the Ramon Magsaysay Award.\n2. Chandi Prasad Bhatt received the Jnanpith Award.\nWhich of the statements is/are correct?', ST, 3, 'The awards are swapped — Pant received the Jnanpith Award, Bhatt received the Magsaysay and Right Livelihood Awards.', true]
  ],

  'Books & Authors': [
    ['easy', 'Jim Corbett, after whom Corbett National Park is named, authored which well-known book?', ['Man-Eaters of Kumaon', 'The Jungle Book', 'My Kumaon Diary', 'Tigers of the Himalaya'], 0, 'Recounts his experiences tracking man-eating tigers and leopards in Kumaon.'],
    ['medium', 'Man-Eaters of Kumaon is set primarily in which region of Uttarakhand?', ['Kumaon', 'Garhwal', 'Jaunsar-Bawar', 'The Terai plains only'], 0, 'Reflected in the book\'s title.'],
    ['medium', 'Gumani Pant is remembered in Uttarakhand\'s literary history primarily for', ['Pioneering satirical Kumaoni-language poetry', 'Founding the Garhwal school of painting', 'Writing Man-Eaters of Kumaon', 'Composing Hindi Chhayavad poetry'], 0, 'An early, distinctly Kumaoni-language literary figure.'],
    ['hard', 'Consider the following statements:\n1. Jim Corbett\'s literary and conservation legacies are directly connected through the naming of Corbett National Park.\n2. Gumani Pant and Sumitranandan Pant wrote in the same language and belong to the same era.\nWhich of the statements is/are correct?', ST, 0, 'Gumani Pant wrote in Kumaoni in the early 19th century; Sumitranandan Pant wrote in Hindi much later.', true]
  ],

  'Firsts & Records': [
    ['easy', 'Corbett National Park holds which distinction in Indian conservation history?', ['India\'s first National Park', 'India\'s largest National Park', 'India\'s first Biosphere Reserve', 'India\'s first Ramsar site'], 0, 'Established in 1936 as Hailey National Park.'],
    ['easy', 'Uttarakhand became the first Indian state to implement which major legal reform?', ['A Uniform Civil Code', 'A state-level Right to Education Act', 'A state-level GST', 'A state Lokayukta Act'], 0, 'Came into force on 27 January 2025.'],
    ['medium', 'Which district of Uttarakhand has the highest population according to Census 2011?', ['Haridwar', 'Dehradun', 'Udham Singh Nagar', 'Nainital'], 0, 'The most populous of the state\'s districts.'],
    ['medium', 'Which district of Uttarakhand is the smallest by area?', ['Champawat', 'Rudraprayag', 'Bageshwar', 'Tehri Garhwal'], 0, '1,781 sq km.'],
    ['medium', 'Corbett Tiger Reserve holds which distinction related to Project Tiger?', ['India\'s first Tiger Reserve, declared in 1973', 'India\'s largest Tiger Reserve by area', 'India\'s only Tiger Reserve in the Himalaya', 'The last Tiger Reserve declared under Project Tiger'], 0, 'Marked the launch of Project Tiger nationally.'],
    ['hard', 'Consider the following statements:\n1. Corbett National Park was renamed after Jim Corbett in the same year it was founded (1936).\n2. Uttarakhand\'s Uniform Civil Code came into force before it was passed by the Assembly.\nWhich of the statements is/are correct?', ST, 3, 'Corbett was renamed only in 1957, and the UCC came into force (27 Jan 2025) after Assembly passage (7 Feb 2024) and Presidential assent (11 Mar 2024).', true]
  ],

  'Important Institutions': [
    ['easy', 'The headquarters of the Uttarakhand Public Service Commission (UKPSC) is at', ['Haridwar', 'Dehradun', 'Nainital', 'Haldwani'], 0, 'At Gurukul Kangri, Haridwar.'],
    ['easy', 'IIT Roorkee, a premier engineering institute located in Uttarakhand, gained IIT status in which year?', ['2001', '1991', '1947', '2010'], 0, 'Its institutional roots as Roorkee/Thomason College go back much further.'],
    ['medium', 'The Wildlife Institute of India (WII), a premier national centre for wildlife research, is located in', ['Dehradun', 'Nainital', 'Haridwar', 'Pithoragarh'], 0, 'A key training and research institution.'],
    ['medium', 'The Forest Research Institute (FRI), one of India\'s oldest forestry research institutions, is located in', ['Dehradun', 'Nainital', 'Rishikesh', 'Almora'], 0, 'Distinct from, but located in the same city as, the Wildlife Institute of India.'],
    ['medium', 'The Uttarakhand State Election Commission, distinct from the Election Commission of India, was formed in which year?', ['2001', '2000', '1993', '2005'], 0, 'Oversees Panchayat and Municipal elections.'],
    ['hard', 'Consider the following statements:\n1. The Wildlife Institute of India and the Forest Research Institute are the same institution.\n2. Both WII and FRI are located in Dehradun.\nWhich of the statements is/are correct?', ST, 1, 'They are separate institutions with different research focuses, both located in Dehradun.', true]
  ]
};

export const ukMiscGK = Object.entries(rows).flatMap(([topic, list]) =>
  list.map(([difficulty, q, options, answer, explanation, fixed]) => ({
    subject: S, topic, difficulty, q, options, answer, explanation, fixed: Boolean(fixed)
  }))
);
