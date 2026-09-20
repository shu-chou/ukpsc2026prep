const S = 'uttarakhand/polity-administration';
const ST = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];
const AR = [
  'Both A and R are true, and R is the correct explanation of A',
  'Both A and R are true, but R is not the correct explanation of A',
  'A is true, but R is false',
  'A is false, but R is true'
];

// [difficulty, question, options, answerIndex, explanation, fixedOptionOrder?]
const rows = {
  'State Constitutional Framework': [
    ['easy', 'Parliament can form a new state out of an existing state under which Article of the Constitution?', ['Article 3', 'Article 1', 'Article 368', 'Article 356'], 0, 'Articles 3 and 4 allow Parliament to form new states by ordinary law.'],
    ['easy', 'How many members does the Uttarakhand Legislative Assembly have?', ['70', '60', '80', '75'], 0, '70 elected members.'],
    ['easy', 'The legislature of Uttarakhand is', ['Unicameral', 'Bicameral', 'Tricameral', 'Nominated'], 0, 'Only a Legislative Assembly; there is no Legislative Council.'],
    ['easy', 'Uttarakhand became the first state of independent India to implement', ['A Uniform Civil Code', 'Prohibition', 'Universal basic income', 'Simultaneous elections'], 0, 'The UCC came into force on 27 January 2025.'],
    ['medium', 'How many seats of the Uttarakhand Legislative Assembly are reserved for Scheduled Castes and Scheduled Tribes respectively?', ['13 and 2', '10 and 3', '12 and 1', '15 and 0'], 0, '13 SC and 2 ST seats.'],
    ['medium', 'How many members does Uttarakhand send to the Lok Sabha and the Rajya Sabha respectively?', ['5 and 3', '5 and 2', '4 and 3', '6 and 3'], 0, '5 Lok Sabha and 3 Rajya Sabha seats.'],
    ['medium', 'A Legislative Council can be created in a state under Article 169 through', ['An Assembly resolution passed by a special majority followed by a law of Parliament', 'An order of the Governor', 'A Presidential ordinance', 'A Supreme Court order'], 0, 'Article 169 requires an Assembly resolution and Parliamentary law.'],
    ['medium', 'Which of the following is the summer capital of Uttarakhand?', ['Gairsain (Bhararisain)', 'Nainital', 'Haldwani', 'Mussoorie'], 0, 'Declared in 2020; Dehradun is the winter seat.'],
    ['medium', 'The Uniform Civil Code of Uttarakhand Bill received the assent of the President on', ['11 March 2024', '7 February 2024', '27 January 2025', '9 November 2024'], 0, 'It was passed by the Assembly on 7 February 2024 and came into force on 27 January 2025.'],
    ['medium', 'The Uttarakhand Uniform Civil Code came into force on', ['27 January 2025', '11 March 2024', '7 February 2024', '26 January 2024'], 0, '27 January 2025.'],
    ['medium', 'Which group is excluded from the Uttarakhand Uniform Civil Code?', ['Scheduled Tribes', 'Scheduled Castes', 'Non-residents', 'Government employees'], 0, 'The Code applies to all residents except Scheduled Tribes.'],
    ['hard', 'Consider the following statements about the Uttarakhand Uniform Civil Code:\n1. It makes registration of live-in relationships mandatory.\n2. It applies to Scheduled Tribes as well.\nWhich of the statements is/are correct?', ST, 0, 'Scheduled Tribes are excluded.', true],
    ['hard', 'In Salim v. State of Uttarakhand (2017), the High Court declared the Ganga and Yamuna to be', ['Legal persons with the status of a living person', 'National monuments', 'Protected forests', 'Inter-state rivers under the Centre'], 0, 'The order (20 March 2017) was stayed by the Supreme Court in July 2017.'],
    ['hard', 'Consider the following statements:\n1. Parliament can form a new state by an ordinary law under Articles 3 and 4.\n2. Such a law is treated as a constitutional amendment under Article 368.\nWhich of the statements is/are correct?', ST, 0, 'Such a law is expressly not a constitutional amendment under Article 368.', true]
  ],

  'Governor, Chief Minister & Council of Ministers': [
    ['easy', 'Who was the first Governor of Uttarakhand?', ['Surjit Singh Barnala', 'Sudarshan Agarwal', 'B.L. Joshi', 'K.K. Paul'], 0, '9 November 2000 to 7 January 2003.'],
    ['easy', 'Who was the first Chief Minister of Uttarakhand?', ['Nityanand Swami', 'N.D. Tiwari', 'B.C. Khanduri', 'Harish Rawat'], 0, '9 November 2000 to 29 October 2001.'],
    ['easy', 'Who appoints the Governor of a state?', ['The President', 'The Prime Minister', 'The Chief Justice of India', 'The state Assembly'], 0, 'Article 155.'],
    ['medium', 'The minimum age to be appointed Governor is', ['35 years', '25 years', '30 years', '40 years'], 0, 'Article 157.'],
    ['medium', 'Who was the first elected Chief Minister of Uttarakhand?', ['N.D. Tiwari', 'Nityanand Swami', 'Bhagat Singh Koshyari', 'B.C. Khanduri'], 0, 'After the 2002 election.'],
    ['medium', 'Which of the following was the longest-serving Governor of Uttarakhand?', ['Sudarshan Agarwal', 'Surjit Singh Barnala', 'Baby Rani Maurya', 'Margaret Alva'], 0, '8 January 2003 to 28 October 2007.'],
    ['medium', 'Baby Rani Maurya was the ___ Governor of Uttarakhand.', ['seventh', 'fifth', 'third', 'ninth'], 0, 'From 26 August 2018 to 15 September 2021.'],
    ['medium', 'Which constitutional amendment fixed the size of the state Council of Ministers at not more than 15% of the House?', ['91st Amendment', '73rd Amendment', '42nd Amendment', '44th Amendment'], 0, 'It inserted Article 164(1A) in 2003.'],
    ['medium', 'What is the maximum number of ministers (including the Chief Minister) in Uttarakhand, given a 70-member Assembly?', ['12', '10', '11', '15'], 0, '15% of 70 is 10.5, but the minimum is 12 under Article 164(1A).'],
    ['medium', 'In the 2022 Uttarakhand Assembly election, the BJP won how many seats?', ['47', '57', '35', '61'], 0, 'The Congress won 19.'],
    ['medium', 'After losing his own seat in 2022, Pushkar Singh Dhami was elected from', ['Champawat', 'Khatima', 'Dehradun Cantt', 'Kotdwar'], 0, 'He won the bypoll of 3 June 2022.'],
    ['hard', 'Presidential proclamation under Article 356 was signed in Uttarakhand on', ['27 March 2016', '18 March 2016', '21 April 2016', '10 May 2016'], 0, 'The High Court set it aside on 21 April 2016.'],
    ['hard', 'Which of the following is the correct chronological order of events in the 2016 Uttarakhand crisis?\n1. Supreme Court-ordered floor test\n2. High Court quashes the proclamation\n3. Nine Congress MLAs rebel\n4. President\'s Rule proclaimed', ['3 – 4 – 2 – 1', '3 – 2 – 4 – 1', '4 – 3 – 2 – 1', '3 – 4 – 1 – 2'], 0, '18 March → 27 March → 21 April → 10 May 2016.', true],
    ['hard', 'Consider the following statements about the Governor:\n1. He can promulgate ordinances when the Assembly is not in session.\n2. He appoints the Advocate General.\nWhich of the statements is/are correct?', ST, 2, 'Articles 213 and 165.', true],
    ['hard', 'Harish Rawat returned as Chief Minister after winning the floor test on', ['11 May 2016', '10 May 2016', '27 March 2016', '18 March 2017'], 0, 'The floor test was held on 10 May 2016; he was again CM on 11 May 2016.']
  ],

  'State Legislature': [
    ['easy', 'The term of the Uttarakhand Legislative Assembly is', ['Five years', 'Four years', 'Six years', 'Three years'], 0, 'Article 172.'],
    ['easy', 'Who was the first Speaker of the Uttarakhand Legislative Assembly?', ['Prakash Pant', 'Yashpal Arya', 'Harbans Kapoor', 'Premchand Aggarwal'], 0, '2000 to 2002.'],
    ['medium', 'Who was the Speaker of the first elected Uttarakhand Assembly (2002-07)?', ['Yashpal Arya', 'Prakash Pant', 'Govind Singh Kunjwal', 'Harbans Kapoor'], 0, 'Yashpal Arya of the Congress.'],
    ['medium', 'Who is the present Speaker of the Uttarakhand Assembly (as of 2026)?', ['Ritu Khanduri Bhushan', 'Premchand Aggarwal', 'Govind Singh Kunjwal', 'Yashpal Arya'], 0, 'In office since 26 March 2022.'],
    ['medium', 'Which of the following was the Speaker of the 4th Uttarakhand Assembly (2017-22)?', ['Premchand Aggarwal', 'Harbans Kapoor', 'Govind Singh Kunjwal', 'Ritu Khanduri Bhushan'], 0, 'Premchand Aggarwal of the BJP.'],
    ['medium', 'Which of the five Lok Sabha constituencies of Uttarakhand is reserved for Scheduled Castes?', ['Almora', 'Haridwar', 'Garhwal', 'Tehri Garhwal'], 0, 'Almora.'],
    ['medium', 'The minimum age required to be a member of a state Legislative Assembly is', ['25 years', '21 years', '30 years', '35 years'], 0, 'Article 173.'],
    ['medium', 'Who is elected the Speaker of the Assembly?', ['Members of the Assembly from among themselves', 'The Governor', 'The Chief Minister', 'The Chief Justice of the High Court'], 0, 'Article 178.'],
    ['hard', 'Arrange the Speakers of the Uttarakhand Assembly in chronological order:\n1. Harbans Kapoor\n2. Yashpal Arya\n3. Govind Singh Kunjwal\n4. Prakash Pant', ['4 – 2 – 1 – 3', '2 – 4 – 1 – 3', '4 – 2 – 3 – 1', '4 – 1 – 2 – 3'], 0, 'Pant (2000), Arya (2002), Kapoor (2007), Kunjwal (2012).', true],
    ['hard', 'In the 2024 general election, who won the Garhwal Lok Sabha seat?', ['Anil Baluni', 'Ajay Tamta', 'Ajay Bhatt', 'Mala Rajya Laxmi Shah'], 0, 'Baluni (BJP) defeated Ganesh Godiyal (INC).'],
    ['hard', 'Consider the following statements:\n1. Uttarakhand\'s Assembly meets at both Dehradun and Gairsain.\n2. Uttarakhand has a Legislative Council of 30 members.\nWhich of the statements is/are correct?', ST, 0, 'There is no Legislative Council.', true]
  ],

  'Judiciary in Uttarakhand': [
    ['easy', 'The seat of the Uttarakhand High Court is at', ['Nainital', 'Dehradun', 'Haridwar', 'Almora'], 0, 'Nainital.'],
    ['easy', 'The Uttarakhand High Court was established on', ['9 November 2000', '15 August 1947', '26 January 2001', '1 January 2007'], 0, 'Along with the creation of the state.'],
    ['medium', 'Who was the first Chief Justice of the Uttarakhand High Court?', ['Ashok Abhendra Desai', 'S.H. Kapadia', 'J.S. Khehar', 'K.M. Joseph'], 0, 'He served until 31 March 2003.'],
    ['medium', 'Which two former Chief Justices of the Uttarakhand High Court later became Chief Justice of India?', ['S.H. Kapadia and J.S. Khehar', 'K.M. Joseph and V.K. Bist', 'Vipin Sanghi and R.C. Khulbe', 'Ashok Desai and Manoj Gupta'], 0, 'Kapadia and Khehar.'],
    ['medium', 'The sanctioned strength of the Uttarakhand High Court at its creation was', ['7', '9', '11', '5'], 0, 'Raised to 9 in 2003 and now 11.'],
    ['medium', 'Under which Article are district judges appointed?', ['Article 233', 'Article 217', 'Article 124', 'Article 235'], 0, 'By the Governor in consultation with the High Court.'],
    ['medium', 'Who is the Chief Justice of the Uttarakhand High Court since 10 January 2026?', ['Manoj Kumar Gupta', 'G. Narendar', 'Vipin Sanghi', 'K.M. Joseph'], 0, 'As of 2026.'],
    ['medium', 'Which Article empowers the High Court to control the subordinate courts?', ['Article 235', 'Article 233', 'Article 214', 'Article 226'], 0, 'Article 235.'],
    ['hard', 'The Uttarakhand High Court quashed the imposition of President\'s Rule in 2016 on', ['21 April 2016', '27 March 2016', '10 May 2016', '29 April 2016'], 0, 'A bench of Chief Justice K.M. Joseph and Justice V.K. Bist.'],
    ['hard', 'Consider the following statements:\n1. The High Court ordered the abolition of the revenue police system in 2018.\n2. The Supreme Court upheld the High Court\'s 2017 Ganga-Yamuna order.\nWhich of the statements is/are correct?', ST, 0, 'The Supreme Court stayed the 2017 order.', true],
    ['hard', 'The Uttarakhand High Court\'s sanctioned strength has grown from 7 at creation to how many now?', ['11', '13', '9', '15'], 0, '9 permanent and 2 additional judges.']
  ],

  'District Administration': [
    ['easy', 'Who is the head of a district administration?', ['District Magistrate', 'Superintendent of Police', 'Tehsildar', 'Patwari'], 0, 'The District Magistrate (Collector).'],
    ['easy', 'The headquarters of the Kumaon division is at', ['Nainital', 'Almora', 'Haldwani', 'Pithoragarh'], 0, 'Kumaon Commissioner sits at Nainital.'],
    ['medium', 'The headquarters of the Garhwal division is at', ['Pauri', 'Dehradun', 'Haridwar', 'Srinagar'], 0, 'Garhwal Commissioner sits at Pauri.'],
    ['medium', 'The revenue police system is found in', ['The hill areas of Uttarakhand', 'The plains of Uttarakhand', 'All of Uttar Pradesh', 'Only cantonments'], 0, 'Patwari and Kanungo hold policing powers in hill areas.'],
    ['medium', 'In the revenue police system, policing powers are vested in', ['Patwaris and Kanungos', 'Village Pradhans', 'Forest guards', 'Army personnel'], 0, 'Revenue officials also police the area.'],
    ['medium', 'The revenue police system was introduced in the hills during', ['British rule', 'Katyuri rule', 'Gorkha rule', 'Mughal rule'], 0, 'A legacy of the early 19th-century administration.'],
    ['medium', 'The demand to abolish the revenue police gathered momentum after the murder of', ['Ankita Bhandari', 'Gaura Devi', 'Rani Karnavati', 'Jaswant Singh Rawat'], 0, 'September 2022.'],
    ['hard', 'How many revenue villages did the state decide to bring under regular police in the October 2025 phase-out?', ['1,983', '983', '3,000', '500'], 0, 'The phase-out of the revenue police began in October 2025.'],
    ['hard', 'The District Disaster Management Authority is headed by', ['The District Magistrate', 'The Superintendent of Police', 'The Chief Medical Officer', 'The Zila Panchayat Adhyaksha'], 0, 'Under the Disaster Management Act, 2005.']
  ],

  'Divisions, Districts & Tehsils': [
    ['easy', 'How many districts does Uttarakhand have?', ['13', '11', '15', '12'], 0, 'Seven in Garhwal and six in Kumaon.'],
    ['easy', 'Which district is the smallest by area?', ['Champawat', 'Bageshwar', 'Rudraprayag', 'Haridwar'], 0, '1,781 sq km.'],
    ['easy', 'Which district has the highest population (Census 2011)?', ['Haridwar', 'Dehradun', 'Udham Singh Nagar', 'Nainital'], 0, 'Haridwar.'],
    ['medium', 'Which district has the lowest population (Census 2011)?', ['Rudraprayag', 'Champawat', 'Bageshwar', 'Uttarkashi'], 0, 'Rudraprayag.'],
    ['medium', 'The headquarters of Chamoli district is at', ['Gopeshwar', 'Joshimath', 'Karnaprayag', 'Chamoli'], 0, 'Gopeshwar.'],
    ['medium', 'The headquarters of Udham Singh Nagar district is at', ['Rudrapur', 'Kashipur', 'Khatima', 'Kichha'], 0, 'Rudrapur.'],
    ['medium', 'The headquarters of Tehri Garhwal district is at', ['New Tehri', 'Old Tehri', 'Narendranagar', 'Devprayag'], 0, 'New Tehri.'],
    ['medium', 'Which district has the highest population density (Census 2011)?', ['Haridwar', 'Dehradun', 'Udham Singh Nagar', 'Nainital'], 0, '801 persons per sq km.'],
    ['medium', 'Which district has the lowest population density (Census 2011)?', ['Uttarkashi', 'Chamoli', 'Pithoragarh', 'Rudraprayag'], 0, '41 persons per sq km.'],
    ['medium', 'Which district has the highest sex ratio (Census 2011)?', ['Almora', 'Pauri Garhwal', 'Bageshwar', 'Rudraprayag'], 0, '1,139 females per 1,000 males.'],
    ['medium', 'Which of the following districts belongs to the Garhwal division?', ['Haridwar', 'Udham Singh Nagar', 'Bageshwar', 'Champawat'], 0, 'Haridwar is in Garhwal.'],
    ['medium', 'How many development blocks are there in Uttarakhand?', ['95', '75', '105', '85'], 0, 'Kshetra Panchayats correspond to blocks.'],
    ['hard', 'Which one of the following districts was created on 24 February 1960?', ['Uttarkashi', 'Rudraprayag', 'Champawat', 'Udham Singh Nagar'], 0, 'Uttarkashi; Rudraprayag was created in 1997 and Udham Singh Nagar in 1995.'],
    ['hard', 'The sex ratio of Uttarakhand as per Census 2011 is', ['963', '1,000', '940', '985'], 0, 'Up from 962 in 2001.']
  ],

  'Panchayati Raj': [
    ['easy', 'How many tiers does the panchayati raj system in Uttarakhand have?', ['Three', 'Two', 'Four', 'One'], 0, 'Gram, Kshetra and Zila Panchayat.'],
    ['easy', 'The head of a Gram Panchayat is called', ['Pradhan', 'Pramukh', 'Adhyaksha', 'Sarpanch'], 0, 'Pradhan.'],
    ['medium', 'The head of a Kshetra Panchayat is called', ['Pramukh', 'Pradhan', 'Adhyaksha', 'Chairman'], 0, 'Block-level head.'],
    ['medium', 'The head of a Zila Panchayat is called', ['Adhyaksha', 'Pramukh', 'Pradhan', 'Mayor'], 0, 'District-level head.'],
    ['medium', 'The Uttarakhand Panchayati Raj Act was passed in', ['2016', '2001', '2010', '1993'], 0, 'Act No. 11 of 2016.'],
    ['medium', 'What percentage of seats in a Gram Panchayat is reserved for women in Uttarakhand?', ['50 per cent', '33 per cent', '25 per cent', '40 per cent'], 0, 'The Act provides 50 per cent.'],
    ['medium', 'Panchayat elections in Uttarakhand are conducted by', ['The State Election Commission', 'The Election Commission of India', 'The District Magistrate', 'The Zila Panchayat'], 0, 'Article 243K.'],
    ['medium', 'How many Gram Panchayats does Uttarakhand have (State Election Commission data)?', ['7,485', '5,000', '9,000', '6,200'], 0, 'With 95 blocks and 13 Zila Panchayats.'],
    ['medium', 'The Eleventh Schedule contains how many subjects for panchayats?', ['29', '18', '25', '32'], 0, 'Added by the 73rd Amendment.'],
    ['hard', 'The general panchayat elections in Uttarakhand in 2025 were held in two phases on', ['24 and 28 July', '1 and 5 July', '10 and 15 August', '24 and 28 June'], 0, 'Counting was on 31 July 2025.'],
    ['hard', 'Consider the following statements:\n1. The Kshetra Panchayat is the block-level tier.\n2. The head of the Kshetra Panchayat is called Adhyaksha.\nWhich of the statements is/are correct?', ST, 0, 'The head is called Pramukh.', true]
  ],

  'Urban Local Government': [
    ['easy', 'The 74th Constitutional Amendment relates to', ['Urban local bodies', 'Panchayats', 'Anti-defection', 'Cooperative societies'], 0, 'It added Part IXA.'],
    ['easy', 'The Twelfth Schedule lists functions of', ['Municipalities', 'Panchayats', 'The Union', 'The States'], 0, '18 functional items.'],
    ['medium', 'How many municipal corporations does Uttarakhand have (after the 2025 elections)?', ['11', '8', '7', '13'], 0, 'Including Almora, Pithoragarh, Kotdwar and Srinagar.'],
    ['medium', 'Which of the following is NOT a municipal corporation in Uttarakhand?', ['Nainital', 'Almora', 'Kotdwar', 'Srinagar'], 0, 'Nainital is a municipal council.'],
    ['medium', 'The urban local body elections in Uttarakhand were held on', ['23 January 2025', '25 January 2025', '7 February 2025', '23 January 2024'], 0, 'Results were declared on 25 January 2025.'],
    ['medium', 'How many cantonment boards are there in Uttarakhand?', ['9', '6', '12', '5'], 0, 'Almora, Ranikhet, Chakrata, Clement Town, Dehradun, Landour, Roorkee, Nainital and Lansdowne.'],
    ['medium', 'The Municipal Corporation of Dehradun has how many wards?', ['100', '60', '80', '40'], 0, 'Kashipur and Rudrapur have 40 each.'],
    ['hard', 'How many urban local bodies went to the polls in Uttarakhand in January 2025?', ['100', '105', '75', '90'], 0, '11 corporations, 43 councils and about 46 nagar panchayats.'],
    ['hard', 'Consider the following statements:\n1. Pithoragarh and Almora are municipal corporations.\n2. Nainital is a municipal corporation.\nWhich of the statements is/are correct?', ST, 0, 'Nainital is a municipal council.', true]
  ],

  'State Commissions & Institutions': [
    ['easy', 'The headquarters of the Uttarakhand Public Service Commission is at', ['Haridwar', 'Dehradun', 'Nainital', 'Haldwani'], 0, 'At Gurukul Kangri, Haridwar.'],
    ['easy', 'Members of the State Public Service Commission are appointed by', ['The Governor', 'The President', 'The Chief Minister', 'The Chief Justice'], 0, 'Article 316.'],
    ['medium', 'The headquarters of the Uttarakhand Subordinate Service Selection Commission is at', ['Dehradun', 'Haridwar', 'Nainital', 'Almora'], 0, 'Raipur, Dehradun.'],
    ['medium', 'The Uttarakhand State Election Commission was formed in', ['2001', '2000', '2005', '2014'], 0, 'On 30 July 2001.'],
    ['medium', 'The Uttarakhand Information Commission was established in', ['2005', '2001', '2013', '2010'], 0, 'On 3 October 2005.'],
    ['medium', 'The Uttarakhand Human Rights Commission was formed in', ['2013', '2005', '2001', '2010'], 0, 'On 13 May 2013.'],
    ['medium', 'The Uttarakhand Subordinate Service Selection Commission was set up in', ['2014', '2001', '2008', '2018'], 0, 'On 17 September 2014.'],
    ['medium', 'Constitutional provisions on State Public Service Commissions are contained in Articles', ['315 to 323', '124 to 147', '243 to 243O', '324 to 329'], 0, 'Part XIV.'],
    ['hard', 'The State Finance Commission is constituted at intervals of', ['Five years', 'Three years', 'Ten years', 'Every year'], 0, 'Article 243I.'],
    ['hard', 'The 6th State Finance Commission of Uttarakhand was chaired by', ['N. Ravishankar', 'P.S. Jangpangi', 'M.C. Joshi', 'Anand Bardhan'], 0, 'Former Chief Secretary N. Ravishankar.'],
    ['hard', 'Consider the following statements:\n1. The UKPSC is headquartered at Haridwar.\n2. The State Election Commission is headquartered at Haridwar.\nWhich of the statements is/are correct?', ST, 0, 'The SEC is at Dehradun.', true]
  ],

  'Important Administrative Facts': [
    ['easy', 'The winter capital and seat of the Legislature of Uttarakhand is', ['Dehradun', 'Gairsain', 'Nainital', 'Haridwar'], 0, 'Gairsain is the summer capital.'],
    ['easy', 'In which district is Gairsain located?', ['Chamoli', 'Pauri Garhwal', 'Tehri Garhwal', 'Rudraprayag'], 0, 'Gairsain (Bhararisain) is in Chamoli.'],
    ['medium', 'Gairsain was declared the summer capital of Uttarakhand in', ['2020', '2000', '2012', '2016'], 0, 'March 2020.'],
    ['medium', 'The Governor\'s official residence in Uttarakhand is now known as', ['Lok Bhavan', 'Raj Bhavan', 'Vidhan Bhavan', 'Sachivalaya'], 0, 'Formerly called Raj Bhavan.'],
    ['medium', 'The next Uttarakhand Legislative Assembly general election is due in', ['2027', '2026', '2028', '2025'], 0, 'The fifth Assembly was elected in 2022.'],
    ['medium', 'Which of the following was the first state to implement the Uniform Civil Code after independence?', ['Uttarakhand', 'Goa', 'Gujarat', 'Himachal Pradesh'], 0, 'From 27 January 2025.'],
    ['hard', 'The revenue police system in the hill villages is being phased out from', ['October 2025', 'January 2020', 'September 2022', 'March 2018'], 0, '1,983 revenue villages come under regular police.']
  ]
};

export const ukPolityAdministration = Object.entries(rows).flatMap(([topic, list]) =>
  list.map(([difficulty, q, options, answer, explanation, fixed]) => ({
    subject: S, topic, difficulty, q, options, answer, explanation, fixed: Boolean(fixed)
  }))
);
