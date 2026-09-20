const S = 'uttarakhand/movements';
const ST = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];
const AR = [
  'Both A and R are true, and R is the correct explanation of A',
  'Both A and R are true, but R is not the correct explanation of A',
  'A is true, but R is false',
  'A is false, but R is true'
];

// [difficulty, question, options, answerIndex, explanation, fixedOptionOrder?]
const rows = {
  'Coolie-Begar Movement': [
    ['easy', 'The Coolie-Begar movement culminated in January 1921 at', ['Bageshwar', 'Almora', 'Nainital', 'Haldwani'], 0, 'At the Uttarayani fair, Bageshwar.'],
    ['easy', 'The Coolie-Begar movement was directed against', ['Forced unpaid labour for officials', 'Salt tax', 'Land revenue', 'Liquor sale'], 0, 'Villagers were compelled to carry baggage and supply labour and goods free.'],
    ['easy', 'Who among the following was called "Kumaon Kesari" after the Coolie-Begar movement?', ['Badri Datt Pandey', 'Hargovind Pant', 'Govind Ballabh Pant', 'Sri Dev Suman'], 0, 'Badri Datt Pandey.'],
    ['medium', 'Which leader of the Coolie-Begar movement received the title "Jannayak"?', ['Hargovind Pant', 'Badri Datt Pandey', 'Lala Chiranjilal', 'Victor Mohan Joshi'], 0, 'Hargovind Pant was called Jannayak.'],
    ['medium', 'At Bageshwar, the begar registers were thrown into the confluence of the rivers', ['Saryu and Gomti', 'Kosi and Ramganga', 'Alaknanda and Mandakini', 'Kali and Dhauliganga'], 0, 'The Saryu-Gomti confluence at Bageshwar.'],
    ['medium', 'The Coolie-Begar protest was timed with which fair?', ['Uttarayani', 'Nanda Devi', 'Jauljibi', 'Kumbh'], 0, 'The Uttarayani fair on Makar Sankranti.'],
    ['medium', 'The Kumaon Parishad session at Haldwani (December 1918) that demanded the end of begar was presided over by', ['Tara Dutt Gairola', 'Badri Datt Pandey', 'G.B. Pant', 'Mukundi Lal'], 0, 'Tara Dutt Gairola, a Garhwali lawyer-scholar.'],
    ['medium', 'Which of the following is NOT one of the three forms of forced labour in colonial Kumaon?', ['Kuli Utar', 'Kuli Begar', 'Kuli Burdayash', 'Kuli Bandhua'], 3, 'The three were Utar, Begar and Burdayash.'],
    ['hard', 'Arrange the events in chronological order:\n1. Formation of the Kumaon Parishad\n2. Haldwani session of the Parishad\n3. Coolie-Begar movement at Bageshwar\n4. Merger of the Parishad with the Congress', ['1 – 2 – 3 – 4', '2 – 1 – 3 – 4', '1 – 3 – 2 – 4', '1 – 2 – 4 – 3'], 0, '1916 → Dec 1918 → Jan 1921 → 1926.', true],
    ['hard', 'Consider the following statements:\n1. The Coolie-Begar system was given legal sanction in 1913.\n2. Gandhi described the movement as a "bloodless revolution".\nWhich of the statements is/are correct?', ST, 2, 'Both statements are correct.', true],
    ['hard', 'Assertion (A): The Coolie-Begar movement is considered a landmark non-violent movement of the hills.\nReason (R): It ended the forced-labour system through mass non-violent action.', AR, 0, 'R is the reason A holds.', true]
  ],

  'Dola-Palki Movement': [
    ['easy', 'The Dola-Palki movement of Garhwal was primarily a', ['Social reform movement against caste discrimination', 'Forest protection movement', 'Anti-dam movement', 'Statehood movement'], 0, 'It demanded equal right to use the dola-palki at weddings.'],
    ['easy', 'The Dola-Palki movement was launched in which region?', ['Garhwal', 'Kumaon', 'Terai', 'Jaunsar only'], 0, 'Garhwal.'],
    ['medium', 'The Dola-Palki movement was led by', ['Jayanand Bharti', 'Badri Datt Pandey', 'Sri Dev Suman', 'Chandi Prasad Bhatt'], 0, 'Jayanand Bharti (1881-1952).'],
    ['medium', 'The Dola-Palki movement was launched by which sections of society to gain the right to use palanquins at weddings?', ['Shilpkar (Dalit) communities', 'Bhotiya traders', 'Tharu tribe', 'Landless Brahmins'], 0, 'Shilpkar and Dom communities were denied the use of the palanquin.'],
    ['medium', 'In which decade was the Dola-Palki movement started?', ['1920s', '1870s', '1950s', '1980s'], 0, 'It began in 1923.'],
    ['hard', 'Consider the following statements about the Dola-Palki movement:\n1. It was a struggle for social equality within the hill society.\n2. It was directed against forced labour for British officials.\nWhich of the statements is/are correct?', ST, 0, 'Statement 2 describes the Coolie-Begar movement.', true]
  ],

  'Forest Movements': [
    ['easy', 'The Tilari Kand took place on', ['30 May 1930', '13 January 1921', '26 March 1974', '2 October 1994'], 0, '30 May 1930 in the Rawain valley of Tehri state.'],
    ['easy', 'Tilari Kand happened in which state/region?', ['Tehri princely state', 'British Kumaon', 'Terai', 'Dehradun cantonment'], 0, 'Rawain valley, Tehri state.'],
    ['medium', 'In the Tilari firing, the protest was against', ['The forest policy of the Tehri state', 'Forced labour', 'A tax on salt', 'Liquor shops'], 0, 'The state\'s restrictive forest laws.'],
    ['medium', 'The Forest Panchayat Rules in Kumaon were framed in', ['1931', '1921', '1947', '1973'], 0, '1931, under the Indian Forest Act of 1927.'],
    ['medium', 'The Forest Panchayat Rules of 1931 were made under which provision?', ['Section 28(2) of the Indian Forest Act, 1927', 'The Forest Conservation Act, 1980', 'Wild Life Protection Act, 1972', 'Indian Forest Act, 1865'], 0, 'Section 28(2) of the 1927 Act.'],
    ['medium', 'The Kumaon Forest Grievances Committee was set up in', ['1921', '1916', '1930', '1947'], 0, 'After the forest fires of 1916 and 1921.'],
    ['medium', 'In the forest protests in Kumaon, villagers set on fire mainly', ['Chir (pine) forests', 'Sal forests', 'Deodar forests', 'Bamboo groves'], 0, 'Pine forests, especially in Almora.'],
    ['medium', 'Who was the Dewan (chief minister) of Tehri state at the time of the Tilari firing?', ['Chakradhar Juyal', 'Narendra Shah', 'Manabendra Shah', 'Sudarshan Shah'], 0, 'The Maharaja was in Europe.'],
    ['hard', 'Arrange in chronological order:\n1. Forest Panchayat Rules\n2. Tilari Kand\n3. Kumaon Forest Grievances Committee\n4. Reni incident', ['3 – 2 – 1 – 4', '2 – 3 – 1 – 4', '3 – 1 – 2 – 4', '1 – 3 – 2 – 4'], 0, '1921 → 1930 → 1931 → 1974.', true],
    ['hard', 'Consider the following statements:\n1. Van Panchayats were created after the Kumaon Forest Grievances Committee.\n2. The Tilari firing took place in British Kumaon.\nWhich of the statements is/are correct?', ST, 0, 'Tilari is in the princely state of Tehri.', true]
  ],

  'Chipko Movement': [
    ['easy', 'The Chipko movement began in the year', ['1973', '1963', '1984', '1995'], 0, 'April 1973 at Mandal.'],
    ['easy', 'The Chipko movement began in which district?', ['Chamoli', 'Almora', 'Nainital', 'Pithoragarh'], 0, 'Chamoli, near Gopeshwar.'],
    ['easy', 'Who is best known as the woman leader of the 1974 Reni Chipko protest?', ['Gaura Devi', 'Sarla Behn', 'Kamla Pant', 'Vimla Bahuguna'], 0, 'Gaura Devi.'],
    ['medium', 'Ash trees of the Mandal forest were allotted to which company, triggering Chipko?', ['Simon Company', 'Tata Timber', 'Bird & Co.', 'Dunlop'], 0, 'A sports-goods maker of Allahabad.'],
    ['medium', 'The Dasholi Gram Swarajya Sangh, which became the base of Chipko, was founded in 1964 at', ['Gopeshwar', 'Joshimath', 'Karnaprayag', 'Almora'], 0, 'By Chandi Prasad Bhatt.'],
    ['medium', 'Chandi Prasad Bhatt received the Ramon Magsaysay Award in', ['1982', '1973', '1987', '2013'], 0, '1982 (community leadership).'],
    ['medium', 'The 5,000 km Himalayan foot march (1981-83) was undertaken by', ['Sundarlal Bahuguna', 'Chandi Prasad Bhatt', 'Gaura Devi', 'Sarla Behn'], 0, 'From Kashmir to Kohima.'],
    ['medium', 'The slogan "Ecology is permanent economy" is associated with', ['Sundarlal Bahuguna', 'Chandi Prasad Bhatt', 'Medha Patkar', 'Baba Amte'], 0, 'Bahuguna.'],
    ['medium', 'After a meeting with Sundarlal Bahuguna, Indira Gandhi imposed a ban of how many years on green-tree felling in the Himalayan region in 1980?', ['15 years', '5 years', '10 years', '25 years'], 0, 'A 15-year ban.'],
    ['medium', 'The Reni incident led the government to ban commercial felling in the upper Alaknanda catchment for about', ['10 years', '2 years', '25 years', '50 years'], 0, 'On the recommendation of a committee.'],
    ['medium', 'The Right Livelihood Award (1987) was given to', ['The Chipko movement', 'The Narmada Bachao Andolan', 'The Silent Valley movement', 'The Appiko movement'], 0, 'Chipko.'],
    ['hard', 'Which movement in Karnataka (1983) was inspired by Chipko?', ['Appiko', 'Silent Valley', 'Narmada Bachao', 'Save Western Ghats'], 0, 'Appiko Andolan in the Uttara Kannada district.'],
    ['hard', 'Consider the following statements:\n1. The first Chipko protest took place in the Mandal forest in 1973.\n2. The Reni protest of 1974 was led by Chandi Prasad Bhatt.\nWhich of the statements is/are correct?', ST, 0, 'Reni was led by Gaura Devi with the village women.', true],
    ['hard', 'Assertion (A): Women played a central role in the Chipko movement.\nReason (R): The village economy of the hills depends heavily on forest fodder, fuel and water collected by women.', AR, 0, 'R explains why women led the protests.', true]
  ],

  'Anti-Tehri / Other Regional Movements': [
    ['easy', 'The anti-Tehri Dam movement was led mainly by', ['Sundarlal Bahuguna', 'Chandi Prasad Bhatt', 'Kalyan Singh Rawat', 'Vijay Jardhari'], 0, 'Bahuguna led it from the 1980s until 2004.'],
    ['easy', 'Tehri Dam is built on the river', ['Bhagirathi', 'Alaknanda', 'Yamuna', 'Kali'], 0, 'Near the Bhagirathi-Bhilangana confluence.'],
    ['medium', 'The Tehri Bandh Virodhi Sangharsh Samiti was formed in', ['1978', '1992', '2004', '1965'], 0, 'Under the chairmanship of V.D. Saklani.'],
    ['medium', 'The Maiti movement (1995) started at which place?', ['Gwaldam (Chamoli)', 'Reni (Chamoli)', 'Almora', 'Tehri'], 0, 'By Kalyan Singh Rawat.'],
    ['medium', 'In the Maiti movement, what is planted at weddings?', ['A sapling by the bride and groom', 'A banyan tree by the priest', 'A flag by the village', 'A tree by the groom\'s father'], 0, 'The bride and groom plant a sapling.'],
    ['medium', 'The Nasha Nahin Rozgar Do movement was launched in', ['1984', '1973', '1995', '2000'], 0, 'In Kumaon.'],
    ['medium', 'The Beej Bachao Andolan is associated with', ['Vijay Jardhari', 'Kalyan Singh Rawat', 'Sachidanand Bharti', 'Kamla Pant'], 0, 'Vijay Jardhari of Jardhar village, Tehri.'],
    ['medium', 'The Supreme Court gave its verdict permitting the Tehri Dam to proceed in', ['2000', '1985', '1992', '2010'], 0, 'The case had been pending for about ten years.'],
    ['hard', 'Kalyan Singh Rawat, founder of the Maiti movement, was awarded the Padma Shri in', ['2020', '2015', '1995', '2008'], 0, '2020.'],
    ['hard', 'The traditional mixed farming system of twelve crops promoted by the Beej Bachao Andolan is called', ['Baranaja', 'Jhum', 'Kharif-Rabi', 'Tavy'], 0, 'Baranaja.'],
    ['hard', 'Consider the following statements:\n1. Sundarlal Bahuguna led both the Chipko movement and the anti-Tehri Dam movement.\n2. The Maiti movement is mainly about planting trees at weddings.\nWhich of the statements is/are correct?', ST, 2, 'Both are correct.', true]
  ],

  'Uttarakhand Statehood Movement': [
    ['easy', 'The Uttarakhand Kranti Dal was founded in', ['1979', '1994', '1987', '2000'], 0, '24 July 1979.'],
    ['easy', 'The UKD was founded at', ['Mussoorie', 'Nainital', 'Dehradun', 'Almora'], 0, 'Mussoorie.'],
    ['easy', 'The police firing at Khatima took place on', ['1 September 1994', '2 September 1994', '2 October 1994', '9 November 2000'], 0, 'Khatima, Udham Singh Nagar.'],
    ['medium', 'Which of the following was chaired by Ramashankar Kaushik?', ['The committee that recommended a hill state with Gairsain as capital', 'The first assembly of Uttaranchal', 'The Uttarakhand Kranti Dal', 'The Uttarakhand Sangharsh Samiti'], 0, 'The Kaushik Committee of 1994.'],
    ['medium', 'The Kaushik Committee submitted its report on', ['5 May 1994', '1 September 1994', '2 October 1994', '9 November 2000'], 0, 'The UP government accepted it on 10 August 1994.'],
    ['medium', 'Which of the following were women killed in the Mussoorie firing of 2 September 1994?', ['Belmati Chauhan and Hansa Dhanai', 'Gaura Devi and Kamla Pant', 'Sarla Behn and Vimla Bahuguna', 'Radha Bahin and Basanti Devi'], 0, 'Six protesters died, two of them women.'],
    ['medium', 'The Rampur Tiraha firing occurred near', ['Muzaffarnagar', 'Mussoorie', 'Khatima', 'Haldwani'], 0, 'On 2 October 1994.'],
    ['medium', 'The UKD convention that renewed the statehood demand in June 1987 was held at', ['Karnaprayag', 'Gairsain', 'Nainital', 'Pauri'], 0, 'In June 1987.'],
    ['medium', 'Indramani Badoni is known as', ['The Gandhi of Uttarakhand', 'The Iron Man of Kumaon', 'Kumaon Kesari', 'Jannayak'], 0, 'A leader of the statehood movement.'],
    ['hard', 'Arrange the events in chronological order:\n1. Kaushik Committee report\n2. Khatima firing\n3. Mussoorie firing\n4. Rampur Tiraha firing', ['1 – 2 – 3 – 4', '2 – 1 – 3 – 4', '1 – 3 – 2 – 4', '1 – 2 – 4 – 3'], 0, 'May → 1 Sept → 2 Sept → 2 Oct 1994.', true],
    ['hard', 'Consider the following statements:\n1. The Uttarakhand Kranti Dal was founded at Mussoorie in 1979.\n2. The Kaushik Committee recommended Gairsain as the capital of the proposed state.\nWhich of the statements is/are correct?', ST, 2, 'Both are correct.', true]
  ]
};

export const ukMovements = Object.entries(rows).flatMap(([topic, list]) =>
  list.map(([difficulty, q, options, answer, explanation, fixed]) => ({
    subject: S, topic, difficulty, q, options, answer, explanation, fixed: Boolean(fixed)
  }))
);
