const S = 'uttarakhand/economy-development';
const ST = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];

// [difficulty, question, options, answerIndex, explanation, fixedOptionOrder?]
const rows = {
  'Uttarakhand Economy Overview': [
    ['easy', 'Uttarakhand was granted Special Category Status in', ['2001', '2000', '2003', '2015'], 0, 'On formation, in 2001.'],
    ['easy', 'SIIDCUL, the nodal agency for industrial estates in Uttarakhand, was incorporated in', ['2002', '2000', '2005', '2010'], 0, 'With an authorised share capital of Rs 50 crore.'],
    ['medium', 'The special industrial package of 2003 was announced for which pair of states?', ['Uttarakhand and Himachal Pradesh', 'Uttarakhand and Jammu & Kashmir', 'Himachal Pradesh and Punjab', 'Uttarakhand and Sikkim'], 0, 'The north-western hill states.'],
    ['medium', 'Under the 2003 industrial package, central excise exemption was given for a maximum of', ['10 years', '5 years', '15 years', '20 years'], 0, 'Notification No. 50/2003-Central Excise.'],
    ['medium', 'Under the 2003 package, companies got 100% income-tax exemption for five years and how much for the next five years?', ['30%', '50%', '25%', '10%'], 0, '25% for non-corporate units.'],
    ['medium', 'The Economic Survey 2025-26 puts the GSDP of Uttarakhand for 2024-25 at about', ['Rs 3.82 lakh crore', 'Rs 2.54 lakh crore', 'Rs 4.29 lakh crore', 'Rs 5.10 lakh crore'], 0, 'Rs 3,81,889 crore at current prices.'],
    ['medium', 'The Economic Survey 2025-26 estimates the real growth of the state economy in 2025-26 at', ['7.23%', '9.5%', '5.1%', '12%'], 0, 'Growth for 2026-27 is projected at 8.2%.'],
    ['medium', 'The Global Investors Summit of Uttarakhand was held at Dehradun on', ['8-9 December 2023', '1-2 November 2022', '10-11 January 2024', '5-6 March 2025'], 0, 'Inaugurated by the Prime Minister.'],
    ['hard', 'The 14th Finance Commission ended most special category benefits except for', ['The north-eastern states and three hill states', 'Only the north-eastern states', 'All hill states', 'Only Jammu and Kashmir'], 0, 'The three hill states are J&K, Uttarakhand and Himachal Pradesh.'],
    ['hard', 'Consider the following statements about the 2003 industrial package:\n1. It was meant only for Uttarakhand.\n2. It included 100% excise exemption for ten years.\nWhich of the statements is/are correct?', ST, 1, 'It was for Uttarakhand and Himachal Pradesh.', true]
  ],

  'GSDP & Sectoral Structure': [
    ['easy', 'Which sector contributes the largest share to the economy of Uttarakhand (Economic Survey 2025-26)?', ['Tertiary (services)', 'Primary', 'Secondary', 'Quaternary'], 0, 'About 49%.'],
    ['easy', 'The share of the primary sector in the Uttarakhand economy is about', ['10%', '25%', '40%', '5%'], 0, 'Economic Survey 2025-26.'],
    ['medium', 'The secondary sector (industry) accounts for about what share of the Uttarakhand economy?', ['41%', '20%', '30%', '55%'], 0, 'Services 49%, industry 41%, primary 10%.'],
    ['medium', 'The number of large industries in Uttarakhand, according to the Economic Survey 2025-26, rose from 107 to', ['128', '150', '110', '200'], 0, 'Recognised startups rose from 702 to 1,750.'],
    ['medium', 'The number of recognised startups in Uttarakhand rose from 702 to', ['1,750', '1,200', '2,500', '900'], 0, 'Economic Survey 2025-26.'],
    ['medium', 'How many MoUs were signed at the Global Investors Summit 2023?', ['1,779', '1,000', '2,500', '3,560'], 0, 'Worth Rs 3.56 lakh crore.'],
    ['medium', 'The theme of the Uttarakhand Global Investors Summit 2023 was', ['Peace to Prosperity', 'Devbhoomi to Investment Hub', 'Himalaya to Hub', 'Growth with Greenery'], 0, 'Held on 8-9 December 2023.'],
    ['hard', 'The GSDP of Uttarakhand for 2025-26 is projected at about', ['Rs 4.29 lakh crore', 'Rs 3.82 lakh crore', 'Rs 5.5 lakh crore', 'Rs 2.5 lakh crore'], 0, 'A rise of about 13% over the revised 2024-25 estimate.'],
    ['hard', 'Consider the following statements:\n1. Industry contributes a larger share than agriculture in the state\'s output.\n2. The 1,779 MoUs of the 2023 summit represent investment that has already been made.\nWhich of the statements is/are correct?', ST, 0, 'MoUs are commitments, not actual investment.', true]
  ],

  'Agriculture & Allied Activities': [
    ['easy', 'The main cash crop of the plains of Uttarakhand is', ['Sugarcane', 'Cotton', 'Jute', 'Tea'], 0, 'Grown in the plains districts.'],
    ['easy', 'India\'s first agricultural university was set up in 1960 at', ['Pantnagar', 'Dehradun', 'Almora', 'Haridwar'], 0, 'G.B. Pant University of Agriculture and Technology.'],
    ['medium', 'The Uttarakhand Organic Commodity Board was established in', ['2003', '2000', '2010', '1995'], 0, 'On 19 May 2003.'],
    ['medium', 'The main goal of the Uttarakhand Organic Commodity Board is to make the state', ['The organic capital of India', 'Self-sufficient in wheat', 'A tea-producing state', 'India\'s largest fruit exporter'], 0, 'Its stated aim.'],
    ['medium', 'Which crop saw the maximum benefit from organic farming in Uttarakhand?', ['Basmati rice', 'Cotton', 'Jute', 'Sugarcane'], 0, 'Organic basmati area rose from 16 ha to about 2,200 ha.'],
    ['medium', 'The net sown area of Uttarakhand between 2010 and 2020', ['Decreased', 'Increased sharply', 'Remained unchanged', 'Doubled'], 0, 'From about 737 thousand ha to about 680 thousand ha.'],
    ['medium', 'Which of the following are the two main food grains of Uttarakhand?', ['Rice and wheat', 'Maize and barley', 'Jowar and bajra', 'Ragi and gram'], 0, 'Along with hill millets.'],
    ['hard', 'Agricultural export zones in Uttarakhand have been set up for', ['Litchi, herbs and medicinal plants, and basmati rice', 'Cotton and jute', 'Tea and coffee', 'Rubber and spices'], 0, 'For horticulture products, herbs, medicinal plants and basmati rice.'],
    ['hard', 'Consider the following statements:\n1. Irrigation in Uttarakhand is concentrated in the plains.\n2. The net sown area of the state has been increasing steadily.\nWhich of the statements is/are correct?', ST, 0, 'The net sown area has been falling.', true]
  ],

  'Horticulture & Medicinal Plants': [
    ['easy', 'The Herbal Research and Development Institute (HRDI) is located at', ['Gopeshwar', 'Dehradun', 'Nainital', 'Haridwar'], 0, 'Established in 1989.'],
    ['medium', 'The Herbal Research and Development Institute was established in', ['1989', '1975', '2000', '2010'], 0, 'At Gopeshwar, Chamoli.'],
    ['medium', 'HRDI is the nodal agency of', ['The State Medicinal Plants Board', 'The Forest Department', 'The Tourism Board', 'The Agriculture University'], 0, 'For conservation and sustainable use of medicinal plants.'],
    ['medium', 'Approximately how many plant species have been identified in Uttarakhand?', ['18,000', '5,000', '30,000', '2,000'], 0, 'About 1,800 of them are medicinal.'],
    ['medium', 'Which of the following crops is promoted under the Aroma and Phyto-Pharmaceutical Mission?', ['Lavender', 'Cotton', 'Sugarcane', 'Jute'], 0, 'Also rosemary, lemongrass, ashwagandha and satavar.'],
    ['medium', 'Litchi and mango are mostly grown in', ['The Terai and valley areas', 'The high Himalaya', 'The alpine meadows', 'The trans-Himalayan zone'], 0, 'Apple and pear grow at mid and high altitudes.'],
    ['medium', 'Sea buckthorn cultivation is being encouraged in the', ['Higher Himalayan areas', 'Terai plains', 'Doon valley only', 'Haridwar district'], 0, 'Pithoragarh, Chamoli, Rudraprayag, Uttarkashi and Tehri.'],
    ['hard', 'Sea buckthorn cultivation in the state was planned under the', ['Rural Enterprise Acceleration (REAP) project', 'PM-KISAN', 'MGNREGA', 'National Horticulture Mission only'], 0, 'REAP.'],
    ['hard', 'About how many of the plant species identified in Uttarakhand are considered medicinal?', ['1,800', '180', '8,000', '12,000'], 0, 'Out of about 18,000.']
  ],

  'Hydropower': [
    ['easy', 'The estimated hydropower potential of Uttarakhand is about', ['25,000 MW', '5,000 MW', '50,000 MW', '10,000 MW'], 0, 'About 25 GW.'],
    ['easy', 'Tehri Dam is built on the river', ['Bhagirathi', 'Alaknanda', 'Yamuna', 'Kali'], 0, 'By THDC.'],
    ['medium', 'The installed capacity of the Tehri hydropower plant (first stage) is', ['1,000 MW', '400 MW', '2,400 MW', '304 MW'], 0, 'The planned total, including pumped storage, is 2,400 MW.'],
    ['medium', 'Tehri Dam was built by', ['THDC', 'UJVN Limited', 'NHPC', 'SJVN'], 0, 'Tehri Hydro Development Corporation.'],
    ['medium', 'Which is the largest hydropower station operated by UJVN Limited?', ['Maneri Bhali II', 'Tehri', 'Vyasi', 'Dhakrani'], 0, '304 MW, commissioned in 2008.'],
    ['medium', 'The capacity of Maneri Bhali II is', ['304 MW', '90 MW', '120 MW', '520 MW'], 0, 'UJVN\'s largest.'],
    ['medium', 'How many hydropower projects does UJVN Limited operate?', ['17', '10', '25', '7'], 0, '10 large and 7 small.'],
    ['medium', 'The Vyasi hydropower station (2 x 60 MW) is at', ['Hathiyari', 'Dehradun city', 'Tehri', 'Kalagarh'], 0, 'On the Yamuna.'],
    ['hard', 'The Lakhwar hydropower project (300 MW), under construction, is on the river', ['Yamuna', 'Bhagirathi', 'Alaknanda', 'Ramganga'], 0, 'A multipurpose project.'],
    ['hard', 'The Tapovan Vishnugad hydropower project (520 MW) is on the', ['Dhauliganga', 'Mandakini', 'Pindar', 'Nandakini'], 0, 'It was damaged in the February 2021 Chamoli flood.'],
    ['hard', 'Consider the following statements:\n1. Tehri Dam is owned by UJVN Limited.\n2. Maneri Bhali II is the largest plant of UJVN Limited.\nWhich of the statements is/are correct?', ST, 1, 'Tehri is built by THDC.', true]
  ],

  'Tourism Economy': [
    ['easy', 'Which of the following is NOT one of the Char Dham of Uttarakhand?', ['Hemkund Sahib', 'Badrinath', 'Kedarnath', 'Gangotri'], 0, 'The four Dhams are Yamunotri, Gangotri, Kedarnath and Badrinath.'],
    ['medium', 'In the first 100 days of the 2024 Char Dham yatra, the total number of pilgrims was about', ['32.6 lakh', '10 lakh', '51 lakh', '5 lakh'], 0, '32,61,095 pilgrims to the Char Dham and Hemkund Sahib.'],
    ['medium', 'Which shrine received the most pilgrims in the first 100 days of the 2024 yatra?', ['Kedarnath', 'Badrinath', 'Gangotri', 'Yamunotri'], 0, '10,92,284 pilgrims.'],
    ['medium', 'The Uttarakhand Tourism Policy was released in', ['2023', '2001', '2010', '2018'], 0, 'Tourism Policy 2023.'],
    ['medium', 'Under the Deen Dayal Upadhyay Griha Awas (Homestay) Yojana, grants of about how much have been given to 1,085 homestays?', ['Rs 50 crore', 'Rs 5 crore', 'Rs 500 crore', 'Rs 10 crore'], 0, 'To attract tourists to remote places.'],
    ['medium', 'Kedarnath received a record number of pilgrims in the 2025 season, about', ['16.56 lakh', '6 lakh', '30 lakh', '2 lakh'], 0, 'Against about 16.52 lakh in 2024.'],
    ['medium', 'GMVN and KMVN are', ['State tourism and accommodation corporations of Garhwal and Kumaon', 'Two rail corporations', 'Two power companies', 'Two forest divisions'], 0, 'Garhwal and Kumaon Mandal Vikas Nigams.'],
    ['hard', 'Arrange in descending order of pilgrims in the first 100 days of the 2024 yatra:\n1. Gangotri\n2. Kedarnath\n3. Yamunotri\n4. Badrinath', ['2 – 4 – 1 – 3', '4 – 2 – 1 – 3', '2 – 4 – 3 – 1', '2 – 1 – 4 – 3'], 0, 'Kedarnath 10.92 lakh, Badrinath 9.06 lakh, Gangotri 5.99 lakh, Yamunotri 5.14 lakh.', true],
    ['hard', 'Hemkund Sahib received about how many pilgrims in the first 100 days of the 2024 yatra?', ['1.5 lakh', '5 lakh', '10 lakh', '50,000'], 0, '1,49,662.']
  ],

  'Industries & MSMEs': [
    ['easy', 'The nodal agency for industrial development in Uttarakhand is', ['SIIDCUL', 'THDC', 'UJVN', 'UPCL'], 0, 'Set up in 2002.'],
    ['medium', 'The first major industrial estates developed by SIIDCUL were at', ['Pantnagar and Haridwar', 'Almora and Pithoragarh', 'Uttarkashi and Chamoli', 'Nainital and Ranikhet'], 0, 'Followed by Kashipur.'],
    ['medium', 'The industrial belt of Uttarakhand lies mainly', ['At the foot of the Shiwalik range', 'In the Greater Himalaya', 'In the trans-Himalaya', 'Around Gairsain'], 0, 'In the Terai and Haridwar area.'],
    ['medium', 'The Industrial Policy which named SIIDCUL as the nodal agency was of the year', ['2003', '2013', '1999', '2020'], 0, 'Industrial Policy 2003.'],
    ['medium', 'The Global Investors Summit 2023 recorded MoUs worth', ['Rs 3.56 lakh crore', 'Rs 1 lakh crore', 'Rs 10 lakh crore', 'Rs 50,000 crore'], 0, '1,779 MoUs.'],
    ['medium', 'Recognised startups in Uttarakhand rose from 702 to', ['1,750', '1,000', '3,000', '800'], 0, 'Economic Survey 2025-26.'],
    ['medium', 'In the Budget 2025-26, how much was provided for the Mega Project scheme?', ['Rs 500 crore', 'Rs 50 crore', 'Rs 35 crore', 'Rs 30 crore'], 0, 'Rs 50 crore was for MSME industries.'],
    ['hard', 'Consider the following statements:\n1. SIIDCUL was incorporated in 2002.\n2. The special industrial package was announced in 2003.\nWhich of the statements is/are correct?', ST, 2, 'Both are correct.', true],
    ['hard', 'The number of large industries in Uttarakhand rose from 107 to', ['128', '200', '150', '110'], 0, 'Economic Survey 2025-26.']
  ],

  'Employment & Livelihoods': [
    ['easy', 'MGNREGA guarantees how many days of wage employment a year to rural households?', ['100', '50', '150', '200'], 0, 'Mahatma Gandhi National Rural Employment Guarantee Act.'],
    ['medium', 'Which of the following is a main source of livelihood in the hills of Uttarakhand?', ['Farming, tourism, service and remittances', 'Large factories', 'Mining', 'Fishing'], 0, 'A mixed livelihood base.'],
    ['medium', 'Industrial employment in Uttarakhand is concentrated in', ['The plains belt', 'The high Himalaya', 'The alpine meadows', 'The trans-Himalaya'], 0, 'Haridwar, Udham Singh Nagar and Dehradun.'],
    ['medium', 'Which survey gives the state\'s unemployment rate on a regular basis?', ['Periodic Labour Force Survey', 'Census of India', 'Economic Census', 'National Sample Survey of Land Holdings'], 0, 'The PLFS.'],
    ['hard', 'Consider the following statements:\n1. Hill livelihoods rely partly on remittances from migrants.\n2. Jobs in the plains factories are held mostly by hill residents.\nWhich of the statements is/are correct?', ST, 0, 'Many of the factory jobs go to workers from outside the state.', true]
  ],

  'Migration & Economy': [
    ['easy', 'The Uttarakhand Rural Development and Migration Commission (Palayan Aayog) has its office at', ['Pauri', 'Dehradun', 'Nainital', 'Almora'], 0, 'It was set up in August 2017.'],
    ['medium', 'The Migration Commission of Uttarakhand was constituted in', ['August 2017', 'November 2000', 'March 2010', 'January 2021'], 0, 'To recommend ways to check out-migration from the hills.'],
    ['medium', 'How many villages does Uttarakhand have (Census 2011)?', ['16,793', '12,000', '20,000', '9,500'], 0, 'Of which over a thousand were uninhabited.'],
    ['medium', 'According to the Migration Commission, about how many "ghost villages" exist?', ['1,700', '170', '5,000', '400'], 0, 'Villages with almost no residents.'],
    ['medium', 'Which of the following districts recorded an absolute fall in population between 2001 and 2011?', ['Almora and Pauri Garhwal', 'Haridwar and Udham Singh Nagar', 'Dehradun and Nainital', 'Bageshwar and Champawat'], 0, 'A sign of large out-migration.'],
    ['hard', 'According to the Migration Commission, about how many people from 3,946 gram panchayats migrated permanently?', ['1,18,981', '3,83,726', '50,000', '5,00,000'], 0, 'Temporary migrants: about 3,83,726 from 6,338 gram panchayats.'],
    ['hard', 'According to the Migration Commission, about how many people from 6,338 gram panchayats migrated temporarily?', ['3,83,726', '1,18,981', '1,00,000', '8,00,000'], 0, 'They keep their homes and visit them.'],
    ['hard', 'Which of the following is a consequence of migration from the hills?', ['Abandoned terraced fields and falling sown area', 'Rise of the net sown area', 'Fall in wildlife damage to crops', 'Rising population in the hill villages'], 0, 'Also ageing populations.']
  ],

  'Infrastructure': [
    ['easy', 'The Char Dham Pariyojana widens about how many km of highways?', ['889 km', '250 km', '1,500 km', '125 km'], 0, 'Linking Badrinath, Kedarnath, Gangotri and Yamunotri.'],
    ['medium', 'The length of the Rishikesh-Karnaprayag rail line is', ['125 km', '327 km', '210 km', '889 km'], 0, 'It has over 210 km of tunnelling.'],
    ['medium', 'The Rishikesh-Karnaprayag rail line passes through how many districts?', ['Five', 'Three', 'Seven', 'Two'], 0, 'Through difficult terrain.'],
    ['medium', 'Which of the following is a commercial airport in Uttarakhand?', ['Jolly Grant', 'Gauchar', 'Chinyalisaur', 'Almora'], 0, 'Along with Pantnagar and Naini Saini.'],
    ['medium', 'Naini Saini airport is located in', ['Pithoragarh', 'Nainital', 'Almora', 'Champawat'], 0, 'One of three commercial airports.'],
    ['medium', 'The length of the Delhi-Dehradun Expressway is about', ['210 km', '125 km', '327 km', '889 km'], 0, 'A 6-lane, access-controlled expressway.'],
    ['hard', 'The total length of the four Char Dham rail lines planned is about', ['327 km', '125 km', '889 km', '210 km'], 0, 'At an estimated cost of about Rs 16,216 crore.'],
    ['hard', 'Consider the following statements:\n1. The Char Dham highway project covers about 889 km.\n2. The Rishikesh-Karnaprayag line is about 889 km long.\nWhich of the statements is/are correct?', ST, 0, 'The rail line is about 125 km.', true],
    ['hard', 'The Delhi-Dehradun Expressway is meant to cut travel time between the two cities to about', ['3 hours', '6 hours', '1 hour', '8 hours'], 0, 'From 6-7 hours.']
  ],

  'State Budget & Economic Survey': [
    ['easy', 'The Uttarakhand budget for 2025-26 was the first to cross', ['Rs 1 lakh crore', 'Rs 50,000 crore', 'Rs 2 lakh crore', 'Rs 10,000 crore'], 0, 'About Rs 1,01,175 crore.'],
    ['medium', 'The size of the Uttarakhand budget for 2025-26 was about', ['Rs 1,01,175 crore', 'Rs 1,11,703 crore', 'Rs 90,000 crore', 'Rs 75,000 crore'], 0, 'Rs 1,01,175.33 crore.'],
    ['medium', 'The size of the Uttarakhand budget for 2026-27 was about', ['Rs 1,11,703 crore', 'Rs 1,01,175 crore', 'Rs 1,25,000 crore', 'Rs 95,000 crore'], 0, 'About 10% higher than the previous year.'],
    ['medium', 'The budgets of 2025-26 and 2026-27 were presented at', ['Gairsain', 'Nainital', 'Haldwani', 'Haridwar'], 0, 'The summer capital.'],
    ['medium', 'The fiscal deficit in the budget for 2026-27 is about Rs 12,579 crore, which is', ['Within the 3% of GSDP limit', 'Above 5% of GSDP', 'Zero', 'Above 10% of GSDP'], 0, 'As per fiscal rules.'],
    ['medium', 'In the 2026-27 budget, the capital expenditure is about', ['Rs 46,713 crore', 'Rs 64,989 crore', 'Rs 12,579 crore', 'Rs 1,11,703 crore'], 0, 'Revenue expenditure is about Rs 64,989 crore.'],
    ['medium', 'In the budget for 2025-26, tax revenue was projected at about', ['Rs 39,917 crore', 'Rs 22,622 crore', 'Rs 1,01,175 crore', 'Rs 64,989 crore'], 0, 'Non-tax revenue: about Rs 22,622.80 crore.'],
    ['hard', 'The 6th State Finance Commission of Uttarakhand recommends resource sharing for five years starting from', ['1 April 2026', '1 April 2020', '1 January 2025', '1 April 2030'], 0, 'Chaired by N. Ravishankar.'],
    ['hard', 'The Uttarakhand Economic Survey 2025-26 was released', ['In early March 2026, before the budget session', 'In December 2025', 'After the budget', 'In July 2026'], 0, 'It is released before the budget.'],
    ['hard', 'Consider the following statements:\n1. The budget for 2025-26 crossed Rs 1 lakh crore for the first time.\n2. The budget for 2026-27 is smaller than that of 2025-26.\nWhich of the statements is/are correct?', ST, 0, 'The 2026-27 budget is about 10% larger.', true]
  ],

  'Development Indicators': [
    ['easy', 'In the NITI Aayog SDG India Index 2023-24, Uttarakhand was ranked first jointly with', ['Kerala', 'Goa', 'Himachal Pradesh', 'Tamil Nadu'], 0, 'Each had a score of 79.'],
    ['medium', 'The score of Uttarakhand and Kerala in the SDG India Index 2023-24 was', ['79', '65', '90', '71'], 0, 'Uttarakhand improved by about 7 points.'],
    ['medium', 'Uttarakhand\'s rank in the SDG India Index 2021-22 was', ['4th', '1st', '10th', '2nd'], 0, 'It improved to 1st in 2023-24.'],
    ['medium', 'The literacy rate of Uttarakhand (Census 2011) is about', ['78.8%', '65%', '90%', '70%'], 0, 'Higher than the national 73%.'],
    ['medium', 'The sex ratio of Uttarakhand (Census 2011) is', ['963', '940', '1,000', '985'], 0, 'Higher than the national 940.'],
    ['hard', 'Which organisation publishes the SDG India Index?', ['NITI Aayog', 'RBI', 'Finance Commission', 'Planning Commission'], 0, 'With the UN in India.'],
    ['hard', 'Consider the following statements:\n1. Uttarakhand ranked first alone in the SDG India Index 2023-24.\n2. It shared first place with Kerala.\nWhich of the statements is/are correct?', ST, 1, 'The first place was shared.', true]
  ]
};

export const ukEconomyDevelopment = Object.entries(rows).flatMap(([topic, list]) =>
  list.map(([difficulty, q, options, answer, explanation, fixed]) => ({
    subject: S, topic, difficulty, q, options, answer, explanation, fixed: Boolean(fixed)
  }))
);
