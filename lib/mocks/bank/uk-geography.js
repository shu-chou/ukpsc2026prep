const S = 'uttarakhand/geography';
const ST = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];
const AR = [
  'Both A and R are true, and R is the correct explanation of A',
  'Both A and R are true, but R is not the correct explanation of A',
  'A is true, but R is false',
  'A is false, but R is true'
];

// [difficulty, question, options, answerIndex, explanation, fixedOptionOrder?]
const rows = {
  'Location & Extent': [
    ['easy', 'Uttarakhand became the ___ state of the Indian Union on 9 November 2000.', ['25th', '26th', '27th', '28th'], 2, 'Chhattisgarh (1 Nov) was 26th, Uttaranchal (9 Nov) 27th and Jharkhand (15 Nov) 28th.'],
    ['easy', 'With which pair of countries does Uttarakhand share an international boundary?', ['Nepal and China', 'Nepal and Bhutan', 'China and Bhutan', 'Nepal and Myanmar'], 0, 'Nepal lies to the east and China (Tibet) to the north.'],
    ['easy', 'The state of Uttaranchal was officially renamed Uttarakhand on', ['9 November 2000', '1 January 2007', '26 January 2007', '15 August 2006'], 1, 'The name change took effect on 1 January 2007.'],
    ['easy', 'Which state lies to the south of Uttarakhand?', ['Himachal Pradesh', 'Uttar Pradesh', 'Punjab', 'Rajasthan'], 1, 'Uttar Pradesh bounds Uttarakhand on the south and south-east; Uttarakhand was carved out of it.'],
    ['easy', 'How many districts of Uttarakhand lie in the Garhwal division?', ['5', '6', '7', '8'], 2, 'Garhwal has 7 districts (Uttarkashi, Chamoli, Rudraprayag, Tehri, Dehradun, Pauri, Haridwar) and Kumaon has 6.'],
    ['easy', 'The total geographical area of Uttarakhand is approximately', ['51,125 sq km', '53,483 sq km', '55,673 sq km', '56,272 sq km'], 1, 'Official area is 53,483 sq km.'],
    ['medium', 'Which of the following districts shares boundaries with both Nepal and China?', ['Champawat', 'Pithoragarh', 'Chamoli', 'Udham Singh Nagar'], 1, 'Pithoragarh touches Nepal (along the Kali) and Tibet (China). Chamoli touches only China; Champawat and Udham Singh Nagar only Nepal.'],
    ['medium', 'Which of the following districts of Uttarakhand share a boundary with China (Tibet)?\n1. Uttarkashi\n2. Chamoli\n3. Pithoragarh\n4. Rudraprayag', ['1, 2 and 3 only', '2, 3 and 4 only', '1, 3 and 4 only', '1, 2, 3 and 4'], 0, 'Rudraprayag is not on the international border.', true],
    ['medium', 'Which of the following districts belongs to the Kumaon division?', ['Rudraprayag', 'Tehri Garhwal', 'Bageshwar', 'Pauri Garhwal'], 2, 'Kumaon: Almora, Bageshwar, Champawat, Nainital, Pithoragarh, Udham Singh Nagar.'],
    ['medium', 'The latitudinal extent of Uttarakhand is approximately', ['28°43′N to 31°27′N', '26°15′N to 29°10′N', '30°05′N to 33°20′N', '29°00′N to 32°10′N'], 0, 'The state extends about 28°43′N–31°27′N and 77°34′E–81°02′E.'],
    ['medium', 'The Kalapani–Lipulekh area, a subject of boundary dispute with Nepal, lies in which district?', ['Chamoli', 'Pithoragarh', 'Uttarkashi', 'Champawat'], 1, 'Kalapani, Lipulekh and Limpiyadhura lie in Dharchula tehsil of Pithoragarh.'],
    ['medium', 'Consider the following statements:\n1. Uttaranchal was renamed Uttarakhand in 2007.\n2. Uttarakhand was created under the Uttar Pradesh Reorganisation Act, 2000.\nWhich of the statements is/are correct?', ST, 2, 'Both are correct.', true],
    ['medium', 'Which one of the following districts does NOT share an international boundary?', ['Pithoragarh', 'Champawat', 'Udham Singh Nagar', 'Almora'], 3, 'Almora is interior; the other three touch Nepal.'],
    ['hard', 'According to Burrard\'s classification of the Himalaya, the Kumaon Himalaya lies between the rivers', ['Indus and Sutlej', 'Sutlej and Kali', 'Kali and Tista', 'Tista and Dihang'], 1, 'Punjab Himalaya: Indus–Sutlej; Kumaon: Sutlej–Kali; Nepal: Kali–Tista; Assam: Tista–Dihang.'],
    ['hard', 'Assertion (A): Uttarakhand has significant strategic importance for India.\nReason (R): It shares international boundaries with Nepal and China.', AR, 0, 'Border position with two neighbours is the reason for its strategic importance.', true],
    ['hard', 'The longitudinal extent of Uttarakhand is approximately', ['74°10′E to 78°20′E', '77°34′E to 81°02′E', '79°00′E to 83°10′E', '76°00′E to 80°30′E'], 1, 'About 77°34′E to 81°02′E.']
  ],

  'Physiography': [
    ['easy', 'Which is the southernmost range of the Himalaya in Uttarakhand?', ['Himadri', 'Himachal', 'Shiwalik', 'Zaskar'], 2, 'Shiwalik (Outer Himalaya) is the southernmost and youngest range.'],
    ['easy', 'Himadri is the local name for which Himalayan division?', ['Outer Himalaya', 'Lesser Himalaya', 'Greater Himalaya', 'Trans-Himalaya'], 2, 'Greater Himalaya = Himadri.'],
    ['easy', 'Which is the highest peak of Uttarakhand?', ['Kamet', 'Nanda Devi', 'Trisul', 'Chaukhamba'], 1, 'Nanda Devi (7,816 m) is the highest, and the highest peak wholly within India.'],
    ['easy', 'The belt of coarse pebbly deposits at the foot of the Shiwalik, where streams disappear underground, is called', ['Terai', 'Bhabar', 'Dun', 'Khadar'], 1, 'Bhabar is porous; streams sink and re-emerge in the Terai.'],
    ['easy', 'The marshy, damp belt south of the Bhabar is known as', ['Terai', 'Dun', 'Bangar', 'Kankar'], 0, 'Terai is a low-lying, finer-sediment zone where streams re-emerge.'],
    ['medium', 'Which thrust fault separates the Lesser Himalaya from the Shiwalik?', ['Main Central Thrust', 'Main Boundary Thrust', 'Himalayan Frontal Fault', 'Vaikrita Thrust'], 1, 'MBT: Lesser Himalaya | Shiwalik. MCT: Greater | Lesser. HFT: Shiwalik | plains.'],
    ['medium', 'The Dehradun (Doon) valley lies between which two ranges?', ['Greater Himalaya and Lesser Himalaya', 'Shiwalik and Lesser Himalaya', 'Trans-Himalaya and Greater Himalaya', 'Terai and Bhabar'], 1, 'Duns are longitudinal valleys between the Shiwalik and the Lesser Himalaya.'],
    ['medium', 'Which pass in Pithoragarh district is used for the Kailash Mansarovar Yatra?', ['Mana', 'Niti', 'Lipulekh', 'Shipki La'], 2, 'Lipulekh (Pithoragarh) is the Uttarakhand route; Mana and Niti are in Chamoli; Shipki La is in Himachal Pradesh.'],
    ['medium', 'Mana Pass is located in which district?', ['Uttarkashi', 'Chamoli', 'Pithoragarh', 'Rudraprayag'], 1, 'Mana Pass (Chamoli) connects Uttarakhand with Tibet.'],
    ['medium', 'The Bandarpunch massif, near the source of the Yamuna, lies in which district?', ['Uttarkashi', 'Tehri', 'Chamoli', 'Dehradun'], 0, 'Bandarpunch is in Uttarkashi district.'],
    ['medium', 'Panchachuli peaks are best viewed from which town?', ['Munsyari', 'Auli', 'Mussoorie', 'Kausani'], 0, 'Panchachuli towers over Munsyari in Pithoragarh.'],
    ['medium', 'Which range lies to the north of the Greater Himalaya in Uttarakhand?', ['Pir Panjal', 'Zaskar', 'Dhauladhar', 'Mahabharat'], 1, 'The Zaskar range forms the Tibetan (Trans-Himalayan) side.'],
    ['hard', 'Which of the following is the correct descending order of height?\n1. Kamet\n2. Chaukhamba\n3. Nanda Devi\n4. Trisul', ['3 – 1 – 2 – 4', '3 – 1 – 4 – 2', '1 – 3 – 2 – 4', '3 – 2 – 1 – 4'], 0, 'Nanda Devi 7,816 m > Kamet 7,756 m > Chaukhamba 7,138 m > Trisul 7,120 m.', true],
    ['hard', 'Consider the following statements about the Shiwalik range:\n1. It is the youngest of the Himalayan ranges.\n2. It is made up of unconsolidated sediments brought down by rivers from the higher Himalaya.\nWhich of the statements is/are correct?', ST, 2, 'Both are correct: Shiwalik = young, fragile molasse-type deposits.', true],
    ['hard', 'Which of the following is the correct south-to-north order of physiographic divisions in Uttarakhand?', ['Terai – Bhabar – Shiwalik – Lesser Himalaya – Greater Himalaya', 'Bhabar – Terai – Shiwalik – Greater Himalaya – Lesser Himalaya', 'Terai – Shiwalik – Bhabar – Lesser Himalaya – Greater Himalaya', 'Shiwalik – Terai – Bhabar – Lesser Himalaya – Greater Himalaya'], 0, 'Terai, then Bhabar at the foothills, then Shiwalik, Lesser and Greater Himalaya.', true]
  ],

  'Climate': [
    ['easy', 'The main source of annual rainfall in Uttarakhand is', ['North-East Monsoon', 'South-West Monsoon', 'Western Disturbances', 'Local convection'], 1, 'Most annual rainfall comes from the SW monsoon (June–September).'],
    ['easy', 'Winter rain and snow in the Himalayan region are mainly caused by', ['Western Disturbances', 'Retreating monsoon', 'El Niño', 'Loo'], 0, 'Western Disturbances are extra-tropical cyclones from the Mediterranean region.'],
    ['easy', 'The normal lapse rate of temperature is about', ['1°C per 100 m', '6.5°C per 1,000 m', '10°C per 1,000 m', '0.65°C per 1,000 m'], 1, 'Temperature falls about 6.5°C per 1,000 m of altitude.'],
    ['easy', 'The months of the south-west monsoon season in Uttarakhand are', ['March–May', 'June–September', 'October–November', 'December–February'], 1, 'June to September is the rainy season.'],
    ['easy', 'Which is generally the coldest month in Uttarakhand?', ['December', 'January', 'February', 'March'], 1, 'January is generally the coldest month.'],
    ['medium', 'The Trans-Himalayan valleys of Chamoli and Pithoragarh (e.g. Niti, Mana) receive little rainfall mainly because', ['They lie in the rain shadow of the Greater Himalaya', 'They are too far from the sea', 'The monsoon never reaches Uttarakhand', 'They are covered by desert'], 0, 'The Greater Himalaya blocks moisture-bearing winds.'],
    ['medium', 'Rainfall received when moist monsoon air is forced up the Himalayan slopes is called', ['Convectional', 'Orographic', 'Cyclonic', 'Frontal'], 1, 'Orographic (relief) rainfall.'],
    ['medium', 'Winter precipitation from Western Disturbances is especially beneficial to which crop in Uttarakhand?', ['Rice', 'Wheat', 'Sugarcane', 'Jute'], 1, 'Wheat is a rabi crop and depends on winter rain/snow.'],
    ['medium', 'Cloudburst and landslide incidents in Uttarakhand are most frequent during', ['Winter', 'Pre-monsoon', 'Monsoon', 'Post-monsoon'], 2, 'Intense monsoon rain on steep, fragile slopes.'],
    ['medium', 'Which type of climate characterises the Terai and Bhabar belt?', ['Alpine', 'Humid sub-tropical', 'Cold desert', 'Tropical rainforest'], 1, 'Warm summers, monsoon rains, cool winters.'],
    ['hard', 'Consider the following statements:\n1. Western Disturbances originate over the Mediterranean region and bring winter rain to north-west India, including Uttarakhand.\n2. Winter precipitation in Uttarakhand is entirely brought by the south-west monsoon.\nWhich of the statements is/are correct?', ST, 0, 'Winter precipitation is from Western Disturbances, not the SW monsoon.', true],
    ['hard', 'Temperature inversion in Himalayan valleys is most common during', ['Clear, calm winter nights', 'Cloudy summer days', 'Monsoon afternoons', 'Windy spring days'], 0, 'Cold dense air drains into valleys, so valley floors are colder than slopes.'],
    ['hard', 'Assertion (A): Terai towns are warmer in summer than Mussoorie.\nReason (R): Temperature generally decreases with increasing altitude.', AR, 0, 'Altitude is the reason for the difference.', true],
    ['hard', 'The June 2013 Uttarakhand floods were largely linked to interaction of the monsoon with', ['Western Disturbance', 'Tropical cyclone from the Bay of Bengal', 'Loo', 'North-east monsoon'], 0, 'An early monsoon merged with a Western Disturbance and produced extreme rainfall.']
  ],

  'Drainage & Rivers': [
    ['easy', 'At which place do the Alaknanda and Bhagirathi unite to form the Ganga?', ['Rudraprayag', 'Karnaprayag', 'Devprayag', 'Haridwar'], 2, 'Devprayag is the confluence that gives the river its name Ganga.'],
    ['easy', 'The Bhagirathi originates from', ['Gaumukh (Gangotri glacier)', 'Satopanth glacier', 'Pindari glacier', 'Milam glacier'], 0, 'Bhagirathi rises at Gaumukh in the Gangotri glacier.'],
    ['easy', 'Yamuna originates near', ['Gangotri', 'Yamunotri', 'Kedarnath', 'Badrinath'], 1, 'Yamunotri glacier, Uttarkashi district.'],
    ['easy', 'The Ganga enters the plains at', ['Rishikesh', 'Haridwar', 'Devprayag', 'Kanpur'], 1, 'Haridwar marks the exit from the mountains.'],
    ['easy', 'Tehri Dam is built on the river', ['Alaknanda', 'Bhagirathi', 'Yamuna', 'Ramganga'], 1, 'Near the Bhagirathi–Bhilangana confluence.'],
    ['medium', 'The Alaknanda meets the Pindar at', ['Nandprayag', 'Karnaprayag', 'Vishnuprayag', 'Rudraprayag'], 1, 'Karnaprayag: Alaknanda + Pindar.'],
    ['medium', 'Rudraprayag is the confluence of the Alaknanda and the', ['Mandakini', 'Nandakini', 'Dhauliganga', 'Pindar'], 0, 'Mandakini joins the Alaknanda at Rudraprayag.'],
    ['medium', 'Which river meets the Alaknanda at Vishnuprayag?', ['Dhauliganga', 'Nandakini', 'Mandakini', 'Bhilangana'], 0, 'Vishnuprayag is near Joshimath.'],
    ['medium', 'The river Kali, forming the Uttarakhand–Nepal boundary, originates at', ['Kalapani', 'Milam', 'Gaumukh', 'Kedarnath'], 0, 'Kali (Sharda / Mahakali) rises near Kalapani in Pithoragarh.'],
    ['medium', 'The Ramganga flows through which national park?', ['Rajaji', 'Jim Corbett', 'Nanda Devi', 'Govind'], 1, 'Ramganga flows through Jim Corbett National Park.'],
    ['medium', 'The Tons river is the largest tributary of', ['Ganga', 'Yamuna', 'Kali', 'Ramganga'], 1, 'Tons joins the Yamuna near Kalsi.'],
    ['hard', 'Which of the following is NOT a tributary of the Alaknanda?', ['Dhauliganga', 'Nandakini', 'Pindar', 'Bhilangana'], 3, 'Bhilangana joins the Bhagirathi at Tehri.'],
    ['hard', 'Consider the following statements:\n1. Tehri Dam is located near the confluence of the Bhagirathi and the Bhilangana.\n2. It is the highest dam in India.\nWhich of the statements is/are correct?', ST, 2, 'Tehri Dam is 260.5 m high.', true],
    ['hard', 'Kalagarh Dam, the Ramganga dam, is in which district?', ['Nainital', 'Pauri Garhwal', 'Almora', 'Udham Singh Nagar'], 1, 'Kalagarh lies in Pauri Garhwal, at the edge of Jim Corbett.'],
    ['hard', 'Assertion (A): Rivers such as Ganga, Yamuna and Kali are perennial in Uttarakhand.\nReason (R): They are fed by glaciers and monsoon rainfall.', AR, 0, 'Glacial melt sustains flow throughout the year.', true]
  ]
};

export const ukGeography = Object.entries(rows).flatMap(([topic, list]) =>
  list.map(([difficulty, q, options, answer, explanation, fixed]) => ({
    subject: S, topic, difficulty, q, options, answer, explanation, fixed: Boolean(fixed)
  }))
);
