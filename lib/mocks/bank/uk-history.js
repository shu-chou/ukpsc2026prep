const S = 'uttarakhand/history';
const ST = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];
const AR = [
  'Both A and R are true, and R is the correct explanation of A',
  'Both A and R are true, but R is not the correct explanation of A',
  'A is true, but R is false',
  'A is false, but R is true'
];

// [difficulty, question, options, answerIndex, explanation, fixedOptionOrder?]
const rows = {
  'Ancient Uttarakhand': [
    ['easy', 'Which is regarded as the earliest known ruling dynasty of Uttarakhand, whose coins have been found in the region?', ['Kuninda', 'Katyuri', 'Chand', 'Panwar'], 0, 'The Kunindas (c. 2nd century BCE to 3rd century CE) are known mainly from their coins found across Kumaon and Garhwal.'],
    ['easy', 'An Ashokan rock edict is found in Uttarakhand at', ['Kalsi', 'Joshimath', 'Haridwar', 'Almora'], 0, 'The Kalsi rock edict is in Dehradun district.'],
    ['easy', 'Adi Shankaracharya established which of the four Amnaya maths in Uttarakhand?', ['Sringeri', 'Dwarka', 'Jyotirmath', 'Govardhan'], 2, 'Jyotirmath is at Joshimath (Chamoli); Sringeri is in Karnataka, Dwarka in Gujarat, Govardhan in Puri.'],
    ['medium', 'The Kalsi rock edict of Ashoka lies near the banks of the river', ['Ganga', 'Yamuna', 'Alaknanda', 'Kali'], 1, 'Kalsi is near the Yamuna–Tons confluence in Dehradun district.'],
    ['medium', 'The remains of an Ashwamedha yajna performed by king Shilavarman have been found at', ['Jagatgram (Dehradun)', 'Kalsi (Dehradun)', 'Baijnath (Bageshwar)', 'Champawat'], 0, 'Jagatgram near Vikasnagar has yielded brick altars of the Ashwamedha yajna (3rd century CE).'],
    ['medium', 'Which Chinese traveller visited the Uttarakhand region in the 7th century CE and described a kingdom called Brahmapura?', ['Fa-Hien', 'Hiuen Tsang', 'I-Tsing', 'Sung Yun'], 1, 'Hiuen Tsang travelled in Harsha\'s time; Brahmapura is usually located in the Garhwal–Kumaon hills.'],
    ['medium', 'In the Puranic literature (Skanda Purana), Garhwal and Kumaon are respectively referred to as', ['Kedarkhand and Manaskhand', 'Manaskhand and Kedarkhand', 'Kurmanchal and Kedarkhand', 'Uttarakuru and Manaskhand'], 0, 'Kedarkhand = Garhwal, Manaskhand = Kumaon.'],
    ['medium', 'An ancient name of the Kumaon region was', ['Kedarkhand', 'Kurmanchal', 'Brahmapura', 'Uttarakuru'], 1, 'Kurmanchal (the hill of the Kurma avatar) is a traditional name of Kumaon; it is also called Manaskhand.'],
    ['medium', 'Coins bearing the name of Amoghabhuti, found in Uttarakhand and Himachal Pradesh, belong to the', ['Kunindas', 'Kushanas', 'Guptas', 'Shakas'], 0, 'Amoghabhuti is the best-known Kuninda ruler from coin evidence.'],
    ['medium', 'Arrange the following in chronological order (earliest first):\n1. Katyuri rule\n2. Kuninda rule\n3. Chand rule\n4. Gorkha rule', ['2 – 1 – 3 – 4', '1 – 2 – 3 – 4', '2 – 3 – 1 – 4', '2 – 1 – 4 – 3'], 0, 'Kuninda (ancient) → Katyuri (c. 7th–11th century) → Chand (medieval) → Gorkha (1790–1815).', true],
    ['hard', 'Consider the following statements about the Kalsi edict:\n1. It is inscribed in Prakrit using the Brahmi script.\n2. Kalsi is located in Dehradun district.\nWhich of the statements is/are correct?', ST, 2, 'Both are correct.', true]
  ],

  'Katyuri Dynasty': [
    ['easy', 'The Katyur valley, from which the Katyuris get their name, lies in which district?', ['Almora', 'Bageshwar', 'Pithoragarh', 'Champawat'], 1, 'Katyur (Baijnath) valley is in Bageshwar district.'],
    ['medium', 'The early capital of the Katyuris is traditionally placed at', ['Joshimath (Chamoli)', 'Champawat', 'Srinagar', 'Almora'], 0, 'Joshimath (Kartikeyapura) first; the capital later moved to the Katyur valley.'],
    ['medium', 'Who is traditionally regarded as the founder of the Katyuri dynasty?', ['Basantan Dev', 'Lalitsuradeva', 'Bhudev', 'Salonaditya'], 0, 'Basantan Dev is traditionally credited as the founder; Lalitsuradeva and others are later Katyuri rulers.'],
    ['medium', 'The Baijnath group of temples in Bageshwar district is associated with the', ['Katyuris', 'Chands', 'Panwars', 'Gorkhas'], 0, 'Baijnath was the later Katyuri capital and centre of temple building.'],
    ['medium', 'Copper-plate inscriptions of Katyuri kings have been found at', ['Pandukeshwar (Chamoli)', 'Kalsi (Dehradun)', 'Dwarahat (Almora)', 'Jageshwar (Almora)'], 0, 'The Pandukeshwar copper plates record grants of Katyuri kings such as Lalitsuradeva and Padmatadeva.'],
    ['medium', 'The Katyuris are regarded as having ruled', ['Only Kumaon', 'The Kumaon and Garhwal region together', 'Only Tehri Garhwal', 'Only the Terai belt'], 1, 'They are considered the first dynasty to unify most of Uttarakhand.'],
    ['medium', 'The Jageshwar temple complex is located in which district?', ['Almora', 'Bageshwar', 'Nainital', 'Champawat'], 0, 'Jageshwar (Almora) is a major group of ancient stone temples.'],
    ['hard', 'Consider the following statements:\n1. The early Katyuri rulers ruled from Joshimath and later moved their capital to the Katyur valley.\n2. The Katyuri kingdom later broke up into several smaller principalities.\nWhich of the statements is/are correct?', ST, 2, 'Both are correct.', true]
  ],

  'Chand Dynasty': [
    ['easy', 'The early capital of the Chand rulers of Kumaon was', ['Champawat', 'Almora', 'Bageshwar', 'Pithoragarh'], 0, 'Champawat, later shifted to Almora.'],
    ['easy', 'The founder of the Chand dynasty of Kumaon is traditionally considered to be', ['Som Chand', 'Kalyan Chand III', 'Baz Bahadur Chand', 'Gyan Chand'], 0, 'Som Chand established the Chand rule at Champawat.'],
    ['easy', 'Who was the last ruler of the Chand dynasty?', ['Mahendra Chand', 'Kalyan Chand IV', 'Baz Bahadur Chand', 'Deep Chand'], 0, 'Mahendra Chand lost Kumaon to the Gorkhas.'],
    ['easy', 'The Gorkhas conquered Almora and ended Chand rule in', ['1790', '1803', '1815', '1857'], 0, 'The Gorkha conquest of Kumaon was in 1790.'],
    ['medium', 'Who shifted the Chand capital from Champawat to Almora?', ['Som Chand', 'Bharati Chand', 'Kalyan Chand III', 'Baz Bahadur Chand'], 2, 'Balo Kalyan Chand (Kalyan Chand III) made Almora the capital in 1563.'],
    ['medium', 'Golu Devta, worshipped as the deity of justice, is most widely revered in', ['Kumaon', 'Garhwal', 'Jaunsar-Bawar', 'Terai only'], 0, 'Golu Devta temples at Chitai, Ghorakhal and Champawat are in Kumaon.'],
    ['medium', 'Arrange the following Chand-era events in chronological order:\n1. Som Chand founds Chand rule\n2. Kalyan Chand III makes Almora capital\n3. Baz Bahadur Chand\'s reign\n4. Mahendra Chand loses Kumaon', ['1 – 2 – 3 – 4', '1 – 3 – 2 – 4', '2 – 1 – 3 – 4', '1 – 2 – 4 – 3'], 0, 'Founding → 1563 → 1638–78 → 1790.', true],
    ['hard', 'Consider the following statements:\n1. Almora became the capital of the Chand kingdom in the 16th century.\n2. The Gorkhas conquered Kumaon in 1790 after the fall of the last Chand rulers.\nWhich of the statements is/are correct?', ST, 2, 'Both are correct.', true]
  ],

  'Panwar / Parmar Dynasty': [
    ['easy', 'The Panwar dynasty of Garhwal was founded by', ['Ajay Pal', 'Kanak Pal', 'Sudarshan Shah', 'Prithvipati Shah'], 1, 'Kanak Pal is traditionally the founder (9th century), with capital at Chandpurgarhi.'],
    ['easy', 'Which Panwar ruler united the 52 garhs (small forts) of Garhwal?', ['Kanak Pal', 'Ajay Pal', 'Mahipati Shah', 'Fateh Shah'], 1, 'Ajay Pal is credited with unifying the 52 garhs, and Garhwal takes its name from them.'],
    ['easy', 'Pradyumna Shah, the last independent ruler of united Garhwal, was killed in the Battle of', ['Khurbura', 'Langurgarh', 'Nalapani', 'Sugauli'], 0, 'Battle of Khurbura (Dehradun), 1804, against the Gorkhas.'],
    ['medium', 'The initial capital of the Panwar kingdom was', ['Chandpurgarhi', 'Srinagar', 'Tehri', 'Devalgarh'], 0, 'Chandpurgarhi (Chamoli), then Devalgarh, then Srinagar (Garhwal).'],
    ['medium', 'Which Garhwal queen, acting as regent for her minor son Prithvipati Shah, earned the name "Nak Kati Rani"?', ['Rani Karnavati', 'Tilu Rauteli', 'Jiya Rani', 'Gaura Devi'], 0, 'She had the noses of invading Mughal soldiers cut off.'],
    ['medium', 'Which Garhwal ruler gave shelter to the Mughal prince Sulaiman Shikoh, son of Dara Shikoh?', ['Mahipati Shah', 'Prithvipati Shah', 'Fateh Shah', 'Pradyumna Shah'], 1, 'Prithvipati Shah sheltered Sulaiman Shikoh in 1658.'],
    ['medium', 'Guru Ram Rai, who settled in Dehradun, received land grants from the Garhwal king', ['Fateh Shah', 'Prithvipati Shah', 'Pradyumna Shah', 'Sudarshan Shah'], 0, 'The "Dera" of Ram Rai gave Dehradun its name.'],
    ['medium', 'Tehri was established as the capital of the Tehri Garhwal kingdom in 1815 by', ['Sudarshan Shah', 'Narendra Shah', 'Pradyumna Shah', 'Kirti Shah'], 0, 'Sudarshan Shah, son of Pradyumna Shah, got Tehri Garhwal after the British defeated the Gorkhas.'],
    ['medium', 'Narendranagar was founded by the Tehri king', ['Narendra Shah', 'Kirti Shah', 'Sudarshan Shah', 'Pratap Shah'], 0, 'Narendra Shah shifted the capital to Narendranagar in 1919.'],
    ['hard', 'Arrange the following Garhwal rulers/figures in chronological order:\n1. Ajay Pal\n2. Pradyumna Shah\n3. Kanak Pal\n4. Prithvipati Shah', ['3 – 1 – 4 – 2', '1 – 3 – 4 – 2', '3 – 1 – 2 – 4', '3 – 4 – 1 – 2'], 0, 'Kanak Pal → Ajay Pal → Prithvipati Shah (17th century) → Pradyumna Shah (d. 1804).', true]
  ],

  'Gorkha Rule': [
    ['easy', 'Gorkha rule in Kumaon lasted from 1790 until', ['1815', '1857', '1803', '1947'], 0, 'Gorkha rule ended in 1815 after the Anglo-Nepal War.'],
    ['easy', 'Which treaty ended Gorkha rule in Uttarakhand?', ['Treaty of Sugauli', 'Treaty of Amritsar', 'Treaty of Bassein', 'Treaty of Allahabad'], 0, 'Treaty of Sugauli (signed December 1815, ratified March 1816).'],
    ['medium', 'The Anglo-Nepal (Gorkha) War was fought in', ['1814–16', '1803–05', '1839–42', '1857–58'], 0, 'Fought between the East India Company and Nepal.'],
    ['medium', 'The Battle of Nalapani (Khalanga fort), in which the British General Gillespie was killed, was fought near', ['Dehradun', 'Almora', 'Nainital', 'Haridwar'], 0, 'Nalapani is near Dehradun (1814).'],
    ['medium', 'In which year did the Gorkhas conquer Garhwal?', ['1804', '1790', '1815', '1791'], 0, 'After the Battle of Khurbura in 1804.'],
    ['medium', 'Who commanded the Gorkha defence of the Nalapani fort?', ['Balbhadra Thapa', 'Amar Singh Thapa', 'Bhimsen Thapa', 'Hastidal Chautariya'], 0, 'Balbhadra Thapa held the fort against the British.'],
    ['hard', 'Consider the following statements:\n1. Kumaon was conquered by the Gorkhas in 1790 and Garhwal in 1804.\n2. The Treaty of Sugauli made Kumaon and much of Garhwal British territory.\nWhich of the statements is/are correct?', ST, 2, 'Both are correct.', true]
  ],

  'British Period': [
    ['easy', 'Nainital was discovered in 1841 by', ['P. Barron', 'Captain Young', 'G.W. Traill', 'Henry Ramsay'], 0, 'P. Barron, a sugar trader from Shahjahanpur.'],
    ['easy', 'The hill station Mussoorie was established in 1823 by', ['Captain Young', 'P. Barron', 'Lord Lansdowne', 'John Forbes'], 0, 'Captain Frederick Young (with Mr. Shore).'],
    ['medium', 'Who was the first British Commissioner of Kumaon after 1815?', ['Edward Gardner', 'G.W. Traill', 'Henry Ramsay', 'William Moorcroft'], 0, 'Edward Gardner (1815–17); Traill succeeded him.'],
    ['medium', 'Henry Ramsay, Commissioner of Kumaon (1856–84), was popularly known as', ['King of Kumaon', 'Lord of Garhwal', 'Father of Kumaon', 'Kumaon Kesari'], 0, 'His long administration earned him the title "King of Kumaon".'],
    ['medium', 'Traill Pass, linking the Pindari and Milam valleys, is named after', ['G.W. Traill', 'Henry Ramsay', 'P. Barron', 'Edward Gardner'], 0, 'G.W. Traill, Commissioner of Kumaon (1817–35).'],
    ['medium', 'The Ganga Canal, opened in 1854 from Haridwar, was built under the supervision of', ['Proby Cautley', 'William Moorcroft', 'G.W. Traill', 'Edward Gardner'], 0, 'Sir Proby Cautley.'],
    ['medium', 'Asia\'s first engineering college, set up at Roorkee in 1847 and now IIT Roorkee, was originally called', ['Thomson College of Civil Engineering', 'Victoria Jubilee College', 'Imperial Forest College', 'Government Technical College'], 0, 'It became IIT Roorkee in 2001.'],
    ['medium', 'The Garhwal Rifles regiment was first raised in', ['1887', '1857', '1901', '1914'], 0, 'Raised in 1887; its centre is at Lansdowne.'],
    ['medium', 'Lansdowne cantonment in Pauri Garhwal was named after', ['Lord Lansdowne', 'Lord Curzon', 'Lord Ripon', 'Lord Dufferin'], 0, 'Named after the Viceroy Lord Lansdowne.'],
    ['medium', 'Which Garhwali soldier was posthumously awarded the Victoria Cross for Neuve Chapelle (1915)?', ['Gabar Singh Negi', 'Darwan Singh Negi', 'Balbhadra Singh Negi', 'Chandra Singh Garhwali'], 0, 'Rifleman Gabar Singh Negi, 39th Garhwal Rifles.'],
    ['hard', 'Consider the following statements:\n1. Nainital was discovered by P. Barron in 1841.\n2. Mussoorie was founded in 1823 by Captain Young.\nWhich of the statements is/are correct?', ST, 2, 'Both are correct.', true],
    ['hard', 'Darwan Singh Negi of the Garhwal Rifles was awarded the Victoria Cross for gallantry in', ['1914 (Festubert)', '1915 (Neuve Chapelle)', '1919 (Afghanistan)', '1942 (Burma)'], 0, 'Festubert, France, November 1914.']
  ],

  'Freedom Movement': [
    ['easy', 'The Coolie Begar movement of 1921 was launched at', ['Bageshwar', 'Almora', 'Tehri', 'Kotdwar'], 0, 'During the Uttarayani fair at Bageshwar (Makar Sankranti, January 1921).'],
    ['medium', 'During the Coolie Begar movement, the registers of forced labour were thrown into the', ['Saryu (at the Saryu–Gomti confluence)', 'Kosi', 'Ramganga', 'Alaknanda'], 0, 'At Bageshwar, symbolising the end of begar.'],
    ['medium', 'The leader of the 1921 Coolie Begar movement, known as "Kumaon Kesari", was', ['Badri Datt Pandey', 'Govind Ballabh Pant', 'Sri Dev Suman', 'Hargovind Pant'], 0, 'Badri Datt Pandey.'],
    ['medium', 'Mahatma Gandhi described the Coolie Begar movement as a', ['Bloodless revolution', 'Peasant revolt', 'Failed protest', 'Violent uprising'], 0, 'It ended forced labour without violence.'],
    ['medium', 'The Kumaon Parishad was formed in', ['1916', '1905', '1921', '1930'], 0, 'Founded in 1916 by leaders such as G.B. Pant and Badri Datt Pandey.'],
    ['medium', 'Which Garhwal Rifles soldier refused to fire on unarmed protesters at Peshawar in April 1930?', ['Chandra Singh Garhwali', 'Gabar Singh Negi', 'Darwan Singh Negi', 'Balbhadra Singh Negi'], 0, 'Chandra Singh Garhwali, the hero of the "Peshawar Kand".'],
    ['medium', 'The Tilari Kand of 30 May 1930, sometimes called the "Jallianwala Bagh of Uttarakhand", took place in', ['Tehri state (Rawain)', 'Kumaon', 'Dehradun', 'Nainital'], 0, 'The king\'s forces fired on protesters against forest laws in Rawain.'],
    ['medium', 'Sri Dev Suman died in Tehri jail in 1944 after a hunger strike of about', ['84 days', '21 days', '40 days', '120 days'], 0, 'He died on 25 July 1944.'],
    ['medium', 'Mahatma Gandhi visited Kumaon in 1929 and wrote his commentary Anasakti Yoga at', ['Kausani', 'Nainital', 'Ranikhet', 'Mussoorie'], 0, 'The Anasakti Ashram at Kausani commemorates it.'],
    ['hard', 'Who is regarded as the first freedom fighter of Uttarakhand, linked with the Kumaon uprising of 1857?', ['Kalu Singh Mahara', 'Badri Datt Pandey', 'Sri Dev Suman', 'Chandra Singh Garhwali'], 0, 'Kalu Singh Mahara of Champawat.'],
    ['hard', 'Arrange in chronological order:\n1. Formation of the Kumaon Parishad\n2. Coolie Begar movement\n3. Tilari Kand\n4. Death of Sri Dev Suman', ['1 – 2 – 3 – 4', '2 – 1 – 3 – 4', '1 – 3 – 2 – 4', '1 – 2 – 4 – 3'], 0, '1916 → 1921 → 1930 → 1944.', true],
    ['hard', 'Assertion (A): The Coolie Begar movement is regarded as a landmark non-violent movement of Uttarakhand.\nReason (R): It ended the forced-labour (begar) system without violence.', AR, 0, 'The non-violent ending of begar is why it is a landmark.', true]
  ],

  'Post-Independence Uttarakhand': [
    ['easy', 'The princely state of Tehri Garhwal merged into India on', ['1 August 1949', '15 August 1947', '26 January 1950', '9 November 2000'], 0, 'It became a district of Uttar Pradesh.'],
    ['easy', 'The United Provinces were renamed Uttar Pradesh on', ['24 January 1950', '15 August 1947', '26 January 1950', '1 November 1956'], 0, 'The name changed on 24 January 1950.'],
    ['easy', 'The Uttarakhand High Court is located at', ['Nainital', 'Dehradun', 'Haridwar', 'Almora'], 0, 'Nainital.'],
    ['medium', 'G.B. Pant University of Agriculture and Technology, Pantnagar (1960), was the first', ['Agricultural university of India', 'Engineering college of India', 'Medical college of India', 'Law university of India'], 0, 'India\'s first agricultural university.'],
    ['medium', 'The Kumaon and Garhwal universities were established in', ['1973', '1950', '1985', '2000'], 0, 'Both were set up in 1973.'],
    ['medium', 'Who was the last ruler of the Tehri princely state at the time of merger?', ['Manabendra Shah', 'Narendra Shah', 'Kirti Shah', 'Sudarshan Shah'], 0, 'Manabendra Shah signed the merger in 1949.'],
    ['hard', 'Consider the following statements:\n1. Tehri Garhwal merged into India in 1949 and became part of Uttar Pradesh.\n2. Kumaon and Garhwal universities were founded in 1973.\nWhich of the statements is/are correct?', ST, 2, 'Both are correct.', true]
  ],

  'Statehood Movement': [
    ['easy', 'Uttarakhand became a separate state on', ['9 November 2000', '1 November 2000', '15 November 2000', '26 January 2001'], 0, 'Created from Uttar Pradesh under the UP Reorganisation Act, 2000.'],
    ['easy', 'The first Chief Minister of Uttarakhand was', ['Nityanand Swami', 'N.D. Tiwari', 'B.C. Khanduri', 'Harish Rawat'], 0, 'Nityanand Swami (BJP), November 2000.'],
    ['easy', 'The interim capital of Uttarakhand at formation was', ['Dehradun', 'Nainital', 'Haridwar', 'Gairsain'], 0, 'Dehradun.'],
    ['medium', 'The Uttarakhand Kranti Dal (UKD) was formed in', ['1979', '1994', '1957', '2000'], 0, 'Formed in 1979 with D.D. Pant as its first president.'],
    ['medium', 'The police firing on statehood activists at Muzaffarnagar (Rampur Tiraha) took place on', ['2 October 1994', '1 September 1994', '15 August 1994', '9 November 2000'], 0, 'Activists were travelling to Delhi for a rally.'],
    ['medium', 'The firings at Khatima and Mussoorie during the statehood movement occurred in', ['September 1994', 'October 1994', 'January 1995', 'August 2000'], 0, 'Khatima (1 Sep) and Mussoorie (2 Sep) 1994.'],
    ['medium', 'The Kaushik Committee (1994) recommended which place as the capital of the proposed hill state?', ['Gairsain', 'Dehradun', 'Nainital', 'Haridwar'], 0, 'It also recommended a separate state of hill districts.'],
    ['medium', 'Who was the first elected Chief Minister of Uttarakhand (2002)?', ['N.D. Tiwari', 'Nityanand Swami', 'Bhagat Singh Koshyari', 'B.C. Khanduri'], 0, 'After the first assembly elections in 2002.'],
    ['medium', 'Gairsain (Bhararisain) was declared the summer capital of Uttarakhand in', ['2020', '2000', '2012', '2016'], 0, 'Declared in March 2020.'],
    ['medium', 'Who was the first Governor of Uttarakhand?', ['Surjit Singh Barnala', 'Sudarshan Agarwal', 'B.L. Joshi', 'K.K. Paul'], 0, 'Surjit Singh Barnala (2000–03).'],
    ['medium', 'Uttarakhand was created under the', ['Uttar Pradesh Reorganisation Act, 2000', 'States Reorganisation Act, 1956', 'Uttaranchal Act, 1999', 'Constitution (90th Amendment) Act'], 0, 'UP Reorganisation Act, 2000.'],
    ['hard', 'Consider the following statements:\n1. The Uttarakhand Kranti Dal was formed in 1979.\n2. The first Governor of Uttaranchal was Surjit Singh Barnala.\nWhich of the statements is/are correct?', ST, 2, 'Both are correct.', true]
  ],

  'Important Historical Personalities': [
    ['easy', 'Govind Ballabh Pant, born in Almora district, received the Bharat Ratna in', ['1957', '1947', '1969', '1950'], 0, '1957.'],
    ['easy', 'The poet Sumitranandan Pant of Kausani received the Jnanpith Award for', ['Chidambara', 'Kamayani', 'Madhushala', 'Rashmirathi'], 0, 'Chidambara, 1968.'],
    ['easy', 'Sri Dev Suman is best known as a freedom fighter of', ['Tehri state', 'Nainital', 'Champawat', 'Haridwar'], 0, 'He fought for civil rights in Tehri state.'],
    ['medium', 'The explorer Pundit Nain Singh Rawat, who surveyed Tibet for the British, belonged to', ['Milam (Pithoragarh)', 'Almora', 'Mussoorie', 'Tehri'], 0, 'Milam in the Johar valley.'],
    ['medium', 'Jim Corbett, author of Man-Eaters of Kumaon, made his home at', ['Kaladhungi (Nainital)', 'Ranikhet', 'Mussoorie', 'Dehradun'], 0, 'Kaladhungi.'],
    ['medium', 'Gaura Devi is associated with', ['Chipko movement', 'Coolie Begar', 'Dola-Palki movement', 'Statehood movement'], 0, 'She led the women of Reni village, 1974.'],
    ['medium', 'Chandi Prasad Bhatt founded the Dasholi Gram Swarajya Sangh at', ['Gopeshwar', 'Almora', 'Tehri', 'Kotdwar'], 0, 'Gopeshwar, Chamoli, 1964.'],
    ['medium', 'Sundarlal Bahuguna received the Padma Vibhushan in', ['2009', '1981', '2000', '2021'], 0, 'He declined the Padma Shri in 1981.'],
    ['medium', 'Mola Ram (1743–1833) is remembered as a', ['Garhwal school painter and poet', 'Kumaoni folk singer', 'Gorkha general', 'Chand king'], 0, 'Master of the Garhwal school of painting.'],
    ['hard', 'Which of the following personality–field pairs is/are correctly matched?\n1. Nain Singh Rawat – Explorer\n2. Mola Ram – Painter\n3. Sumitranandan Pant – Poet', ['1 only', '1 and 2 only', '2 and 3 only', '1, 2 and 3'], 3, 'All three are correct.', true]
  ]
};

export const ukHistory = Object.entries(rows).flatMap(([topic, list]) =>
  list.map(([difficulty, q, options, answer, explanation, fixed]) => ({
    subject: S, topic, difficulty, q, options, answer, explanation, fixed: Boolean(fixed)
  }))
);
