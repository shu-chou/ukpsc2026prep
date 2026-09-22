const SRC = 'Compiled from official state and constitutional sources and cross-checked against published references. Office-holders and counts change with time; each such item carries an "as of" note. Where official sources conflict, the notes say so.';

const p = (heading, type, ...paragraphs) => ({ heading, type, paragraphs });
const s = (heading, type, ...bullets) => ({ heading, type, bullets });

export const uttarakhandPolityAdministration = {
  'State Constitutional Framework': {
    priority: 'MUST KNOW', title: 'Constitutional Framework of Uttarakhand',
    summary: 'Uttarakhand is governed under Part VI of the Constitution like any other state, but a few points are specific: how it was created, its unicameral legislature and seat numbers, its two capitals, the Uniform Civil Code of 2024 and the 2017 Ganga-Yamuna judgment. Learn the constitutional provision behind each.',
    sections: [
      p('1. How the state was created', 'must',
        'Uttarakhand was carved out of Uttar Pradesh on 9 November 2000, becoming India\'s 27th state, under the Uttar Pradesh Reorganisation Act, 2000. This is worth understanding rather than just memorising: Articles 3 and 4 of the Constitution allow Parliament to create new states by ordinary law, and such a law is explicitly not treated as a constitutional amendment under Article 368, which is why forming Uttarakhand did not require the more elaborate amendment procedure. The state was named Uttaranchal at first and renamed Uttarakhand only later, on 1 January 2007, and unlike some other states it has no special constitutional carve-out along the lines of Article 371.'),
      p('2. How its government is structured', 'must',
        'Like every state, Uttarakhand has a Governor as constitutional head (Articles 153-167) and a Chief Minister who leads the real Council of Ministers (Articles 163-164). Its legislature, though, is unicameral: there is only a Legislative Assembly (Vidhan Sabha), with no Legislative Council. Article 169 does allow a state to create a Council later, but only if the Assembly first passes a resolution by special majority and Parliament then approves it by law, so far Uttarakhand has never done this. The Assembly itself has 70 elected members from single-member constituencies, with 13 seats reserved for Scheduled Castes and 2 for Scheduled Tribes, and the state also sends 5 members to the Lok Sabha and 3 to the Rajya Sabha.'),
      p('3. Two capitals', 'must',
        'Uttarakhand is unusual in having two functioning capitals rather than one. Dehradun is the provisional capital and the winter seat of the legislature; Gairsain (Bhararisain), in Chamoli district, was declared the summer capital in 2020, and the Vidhan Bhavan operates at both locations depending on the season. The High Court, separately, sits at Nainital.'),
      p('4. The Uniform Civil Code, 2024-25', 'must',
        'Uttarakhand became the first state of independent India to actually implement a Uniform Civil Code. The Assembly passed the Uniform Civil Code of Uttarakhand Bill on 7 February 2024, it received the President\'s assent on 11 March 2024, and it was finally brought into force on 27 January 2025. What it does is set one common set of rules on marriage, divorce, succession and inheritance for all residents regardless of religion, with Scheduled Tribes specifically excluded from its scope; it also makes registering marriages and live-in relationships mandatory, and it bans practices such as triple talaq and halala.'),
      p('5. The Ganga-Yamuna judgment, 2017', 'understand',
        'In a striking, if short-lived, ruling on 20 March 2017, the Uttarakhand High Court declared the Ganga and Yamuna rivers, along with their tributaries, to be legal persons carrying the rights and duties of a living person (Salim v. State of Uttarakhand), and it made the Director of Namami Gange, the Chief Secretary and the Advocate General personally responsible, in loco parentis, for protecting the rivers. The ruling did not stand for long: the Supreme Court stayed the order in July 2017, so it is worth knowing this judgment existed, but not treating it as settled law.'),
      s('6. What to memorize', 'must',
        'Formed 9 Nov 2000, 27th state; Act: UP Reorganisation Act, 2000; Articles 3 and 4',
        'Unicameral; Assembly 70 seats (13 SC, 2 ST); Lok Sabha 5; Rajya Sabha 3',
        'Winter capital Dehradun; summer capital Gairsain (2020); High Court Nainital',
        'UCC: passed 7 Feb 2024, assent 11 Mar 2024, in force 27 Jan 2025; first state',
        'Ganga-Yamuna order: 20 March 2017, stayed by the Supreme Court in July 2017'),
      s('7. Exam traps', 'trap',
        'Uttarakhand has no Legislative Council; do not confuse it with Uttar Pradesh.',
        'The legal creation date (9 Nov 2000) and the renaming (1 Jan 2007) are different.',
        'The UCC dates: passed 7 Feb 2024, assent 11 Mar 2024, implementation 27 Jan 2025.',
        'The High Court order on the Ganga and Yamuna was stayed; it is not the final law.'),
      s('8. 30-second revision', 'revision',
        'Article 3 + UP Reorganisation Act 2000 → 27th state → unicameral, 70 seats (13 SC, 2 ST), 5 LS, 3 RS → Dehradun winter, Gairsain summer, HC Nainital → UCC 2024-25 (first state) → Ganga-Yamuna order 2017 (stayed).')
    ],
    sourceNote: SRC
  },

  'Governor, Chief Minister & Council of Ministers': {
    priority: 'MUST KNOW', title: 'Governor, Chief Minister and Council of Ministers',
    summary: 'The constitutional rules on the Governor and Council of Ministers, the list of Governors and Chief Ministers, the size limit of the Council in Uttarakhand, and the 2016 President\'s Rule crisis that tested all of this in practice.',
    sections: [
      p('1. The Governor: what the Constitution says', 'must',
        'The Governor is appointed by the President (Article 155), must be an Indian citizen of at least 35 years of age (Article 157), and holds office at the President\'s pleasure, normally for a five-year term (Article 156). The powers are wide on paper: the Governor appoints the Chief Minister (Article 164) and the Advocate General (Article 165), has a role in appointing members of the State Public Service Commission and State Election Commission, and can promulgate ordinances (Article 213) when the Assembly is not in session. In Uttarakhand the Governor\'s official residence, formerly called Raj Bhavan, is now known as Lok Bhavan.'),
      p('2. Uttarakhand\'s Governors', 'must',
        'Surjit Singh Barnala was the state\'s first Governor, serving from 9 November 2000 to 7 January 2003, and Sudarshan Agarwal, who followed him from 8 January 2003 to 28 October 2007, holds the record for the longest continuous tenure of any Uttarakhand Governor so far. Several others followed, including B.L. Joshi, Margaret Alva, Aziz Qureshi and K.K. Paul, before Baby Rani Maurya became the state\'s seventh Governor (26 August 2018 to 15 September 2021). Lt Gen Gurmit Singh (retd) has held the post since 15 September 2021, as of 2026.'),
      p('3. The Council of Ministers and its size limit', 'must',
        'The Governor formally appoints the Chief Minister and, on the Chief Minister\'s advice, the rest of the Council of Ministers, which is then collectively responsible to the Assembly under Article 164. Since the 91st Amendment of 2003, which inserted Article 164(1A), no state Council of Ministers, including the Chief Minister, can exceed 15% of the Assembly\'s total strength, subject to a floor of at least 12 ministers. For Uttarakhand\'s 70-member Assembly, 15% works out to just over 10 seats, but the minimum-of-12 rule takes over, so the state\'s Council of Ministers can have up to 12 members. Separately, any minister who is not already a sitting member of the legislature must become one within six months, under Article 164(4).'),
      p('4. The line of Chief Ministers', 'must',
        'Nityanand Swami was the state\'s first Chief Minister (9 November 2000 to 29 October 2001), followed briefly by Bhagat Singh Koshyari, but it was N.D. Tiwari, taking office on 2 March 2002 after the state\'s first general election, who became its first elected Chief Minister, serving until 7 March 2007. The office has changed hands often since: B.C. Khanduri, Ramesh Pokhriyal Nishank, Khanduri again, Vijay Bahuguna, Harish Rawat (interrupted by the 2016 crisis below), Trivendra Singh Rawat, Tirath Singh Rawat, and Pushkar Singh Dhami, who has held the post since July 2021.'),
      p('5. The 2016 President\'s Rule crisis', 'must',
        'This is the one episode from Uttarakhand\'s political history that turns up repeatedly in questions, because it actually tested several of the constitutional provisions above. On 18 March 2016, nine Congress MLAs rebelled against Chief Minister Harish Rawat, and the President signed a proclamation of President\'s Rule under Article 356 on 27 March 2016. Rawat challenged this in court, and on 21 April 2016 a bench of the Uttarakhand High Court, Chief Justice K.M. Joseph and Justice V.K. Bist, set the proclamation aside. The central government appealed, the Supreme Court stayed the High Court\'s order, and instead ordered a court-monitored floor test, which was finally held on 10 May 2016; Rawat won it and was back in office as Chief Minister the next day, 11 May 2016.'),
      p('6. The 2022 election', 'understand',
        'In the 2022 Assembly election the BJP won 47 seats against the Congress\'s 19 and returned to power for a second consecutive term, even though Chief Minister Pushkar Singh Dhami himself lost his own seat at Khatima. He was sworn in again as Chief Minister on 23 March 2022 regardless, and secured a seat in the Assembly shortly after by winning the Champawat bypoll on 3 June 2022 with over 93.5% of the vote. The next Assembly election is due in early 2027.'),
      s('7. What to memorize', 'must',
        'First Governor: Barnala; longest-serving: Sudarshan Agarwal; 7th: Baby Rani Maurya; current: Gurmit Singh (since 15 Sep 2021)',
        'First CM: Swami (2000-01); first elected CM: N.D. Tiwari (2002-07)',
        'Article 164(1A) via 91st Amendment: max 15% of the House, min 12; Uttarakhand max 12',
        'President\'s Rule: 27 March 2016; HC quashed 21 April; SC floor test 10 May; Rawat back 11 May 2016',
        '2022: BJP 47, INC 19; Dhami sworn in 23 March 2022'),
      s('8. Exam traps', 'trap',
        'Swami was the first CM but N.D. Tiwari was the first elected CM.',
        'The 2016 High Court order was stayed by the Supreme Court; Rawat returned only after the floor test.',
        'The cap of 15% applies to the Council of Ministers; Uttarakhand\'s maximum is 12 because of the minimum of 12 under the amendment.',
        'Governors change; questions about "current" holders depend on the date.'),
      s('9. 30-second revision', 'revision',
        'Governor: appointed by President, 5 years, age 35 → Barnala first, Agarwal longest, Maurya 7th, Gurmit Singh since 2021 → CMs: Swami, Koshyari, Tiwari (elected), Khanduri, Nishank, Khanduri, Bahuguna, Rawat, Trivendra, Tirath, Dhami → 2016 President\'s Rule → 2022 BJP 47.')
    ],
    sourceNote: SRC
  },

  'State Legislature': {
    priority: 'MUST KNOW', title: 'Uttarakhand Legislative Assembly',
    summary: 'The composition, term, Speakers and history of the Assembly, and the state\'s five Lok Sabha seats. Figures on members are as of the 2024 Lok Sabha election.',
    sections: [
      p('1. Composition, term and how it functions', 'must',
        'The Assembly has 70 directly elected members, 13 of the seats reserved for Scheduled Castes and 2 for Scheduled Tribes, elected for a five-year term unless dissolved earlier (Article 172); anyone standing for election must be at least 25 years old (Article 173). Members elect the Speaker from among themselves (Article 178) to preside over the House, and the Assembly meets at both Dehradun and Gairsain depending on the season. The Governor formally summons, prorogues and dissolves the Assembly and gives assent to the bills it passes (Article 200).'),
      p('2. The Assemblies and their Speakers', 'must',
        'An interim Assembly ran the state from formation in November 2000 until the first general election in 2002, formally constituted on 14 February 2002, which brought in a Congress government under N.D. Tiwari. Since then, government has alternated fairly regularly: the 2nd Assembly (2007) was BJP, the 3rd (2012) Congress, the 4th (2017) and 5th (2022) both BJP again. Six people have held the Speaker\'s chair across this history: Prakash Pant (2000-02, the first), Yashpal Arya (2002-07), Harbans Kapoor (2007-12), Govind Singh Kunjwal (2012-17), Premchand Aggarwal (2017-22), and Ritu Khanduri Bhushan, who has held the post since 26 March 2022.'),
      p('3. Uttarakhand in Parliament', 'must',
        'The state sends five members to the Lok Sabha, from the constituencies of Tehri Garhwal, Garhwal, Almora, Nainital-Udham Singh Nagar and Haridwar, and three to the Rajya Sabha. Almora is the only one of the five Lok Sabha seats reserved for Scheduled Castes. In the 2024 general election the BJP swept all five: Mala Rajya Laxmi Shah (Tehri Garhwal), Anil Baluni (Garhwal), Ajay Tamta (Almora), Ajay Bhatt (Nainital-Udham Singh Nagar) and Trivendra Singh Rawat (Haridwar).'),
      s('4. What to memorize', 'must',
        'Assembly: 70 seats; 13 SC, 2 ST; unicameral; five-year term',
        'First elected Assembly: 2002 (14 Feb 2002); Congress, N.D. Tiwari',
        'Speakers: Prakash Pant, Yashpal Arya, Harbans Kapoor, G.S. Kunjwal, Premchand Aggarwal, Ritu Khanduri Bhushan',
        'LS: 5 (Almora is SC); RS: 3'),
      s('5. Exam traps', 'trap',
        'Prakash Pant presided over the interim Assembly; Yashpal Arya was the first Speaker of the first elected Assembly.',
        'Ritu Khanduri Bhushan is the sixth Speaker, not the fifth.',
        'Almora is the only reserved Lok Sabha seat of Uttarakhand.'),
      s('6. 30-second revision', 'revision',
        '70 seats (13 SC, 2 ST) → term 5 years → Speaker elected by members → Assemblies 2002 INC, 2007 BJP, 2012 INC, 2017 BJP, 2022 BJP → six Speakers: Pant, Arya, Kapoor, Kunjwal, Aggarwal, Bhushan → 5 LS, 3 RS.')
    ],
    sourceNote: SRC
  },

  'Judiciary in Uttarakhand': {
    priority: 'MUST KNOW', title: 'Judiciary in Uttarakhand',
    summary: 'The High Court at Nainital, its history and its two most-cited landmark cases, plus the hierarchy of subordinate courts underneath it. Learn the founding facts and how the court has grown since 2000.',
    sections: [
      p('1. The High Court: founding and growth', 'must',
        'The Uttarakhand High Court was set up at the moment the state itself was created, on 9 November 2000, and it sits at Nainital rather than at the capital, Dehradun. Its sanctioned strength has grown steadily: 7 judges at creation, raised to 9 in 2003, and 11 today, made up of 9 permanent and 2 additional judges. Ashok Abhendra Desai served as the first Chief Justice, acting from 9 November 2000 and formally appointed from 6 December 2000 until 31 March 2003; two later Chief Justices of the Uttarakhand High Court, S.H. Kapadia and J.S. Khehar, went on to become Chief Justice of India itself. As of January 2026, the sitting Chief Justice is Manoj Kumar Gupta.'),
      p('2. The constitutional machinery behind it', 'understand',
        'High Courts exist under Article 214 of the Constitution, and their judges are appointed by the President under Article 217, after consultation with the Chief Justice of India, the state Governor, and the Chief Justice of the High Court itself. One level down, district judges are appointed by the Governor in consultation with the High Court (Article 233), and the High Court in turn exercises overall control over all the subordinate courts in the state (Article 235). The Advocate General, appointed under Article 165, is the state government\'s highest law officer and its main representative in court.'),
      p('3. Landmark cases', 'must',
        'Two rulings from this High Court are asked about repeatedly. In 2016, a bench of Chief Justice K.M. Joseph and Justice V.K. Bist quashed the imposition of President\'s Rule on 21 April 2016 (this episode is covered in more detail under Governors and Chief Ministers). And on 20 March 2017, in Salim v. State of Uttarakhand, the court declared the Ganga and Yamuna rivers to be legal persons with the same rights as a living person, an order the Supreme Court stayed a few months later, in July 2017. A third, less dramatic but practically important ruling in 2018 directed the state to abolish its old revenue police system, discussed further under District Administration.'),
      s('4. What to memorize', 'must',
        'HC: established 9 Nov 2000; seat Nainital; strength 7 → 9 (2003) → 11',
        'First CJ: Ashok Abhendra Desai',
        'Ex-CJs who became CJI: S.H. Kapadia, J.S. Khehar',
        'Articles: 214 (HC), 217 (appointment), 233 (district judges), 165 (Advocate General)',
        'Cases: President\'s Rule quashed 21 Apr 2016; Ganga-Yamuna 20 Mar 2017'),
      s('5. Exam traps', 'trap',
        'The High Court sits at Nainital, not at Dehradun (the capital).',
        'The Ganga-Yamuna order was stayed by the Supreme Court.',
        'District judges are appointed by the Governor, High Court judges by the President.'),
      s('6. 30-second revision', 'revision',
        'HC 9 Nov 2000, Nainital → 7, 9, 11 judges → first CJ A.A. Desai → Kapadia and Khehar became CJI → 2016 President\'s Rule quashed → 2017 Ganga-Yamuna legal persons (stayed) → 2018 revenue-police order.')
    ],
    sourceNote: SRC
  },

  'District Administration': {
    priority: 'HIGH YIELD', title: 'District Administration and the Revenue Police',
    summary: 'The structure of the district administration, from Divisional Commissioner to Patwari, and Uttarakhand\'s unusual revenue police system, which is now finally being phased out after decades of controversy.',
    sections: [
      p('1. The chain of command', 'must',
        'Above the districts sit two divisions, each headed by a Divisional Commissioner: Garhwal division is run from Pauri, Kumaon division from Nainital. Within each district, the District Magistrate (also called the Collector) heads the administration, controls revenue matters, and, under the Disaster Management Act, 2005, chairs the District Disaster Management Authority. Below the DM comes a Sub-Divisional Magistrate for each sub-division, a Tehsildar for each tehsil, and Naib Tehsildars and Kanungos under them, down to the Patwari at the village-group level.'),
      p('2. The revenue police system', 'must',
        'What makes Uttarakhand\'s district administration distinctive is a colonial-era hangover: in much of the hill area, the Patwari and Kanungo, who are revenue officials, also hold policing powers, a system that traces back to the early 19th-century administration of Kumaon under commissioners such as G.W. Traill. This dual role became a serious public issue after the 2022 murder of Ankita Bhandari, when the initial handling of the case by a Patwari rather than regular police was widely criticised for slowing the investigation down. The state announced the system\'s abolition that October, following on from a High Court order as far back as 2018 that had already directed the same thing, and in October 2025 it actually began the phase-out, bringing 1,983 revenue villages under regular police jurisdiction.'),
      s('3. What to memorize', 'must',
        'Garhwal Commissioner: Pauri; Kumaon Commissioner: Nainital',
        'Revenue police: Patwari + Kanungo, hills, colonial origin',
        'HC order 2018; Ankita Bhandari case Sept 2022; phase-out from October 2025 (1,983 villages)'),
      s('4. Exam traps', 'trap',
        'The Garhwal division HQ is Pauri, not Dehradun; the Kumaon division HQ is Nainital, not Almora.',
        'Revenue police is a system of the hills, not of the plains districts.'),
      s('5. 30-second revision', 'revision',
        'Commissioner (Pauri/Nainital) → DM → SDM → Tehsildar → Kanungo/Patwari; revenue police in the hills since the early 19th century; HC 2018; Ankita Bhandari 2022; 2025 phase-out.')
    ],
    sourceNote: SRC
  },

  'Divisions, Districts & Tehsils': {
    priority: 'MUST KNOW', title: 'Divisions, Districts and Tehsils',
    summary: 'The administrative map of Uttarakhand: which districts fall in which division, their headquarters, and the district-level extremes (smallest, most populous, densest) that the exam likes to ask about directly. Population figures are from Census 2011.',
    sections: [
      p('1. Two divisions, thirteen districts', 'must',
        'Uttarakhand is organised into two divisions and thirteen districts. Garhwal division has seven: Dehradun, Haridwar, Pauri Garhwal, Tehri Garhwal, Uttarkashi, Chamoli and Rudraprayag. Kumaon division has six: Almora, Bageshwar, Champawat, Nainital, Pithoragarh and Udham Singh Nagar. This two-division structure is relatively recent in administrative terms: Garhwal only became a separate division from Kumaon on 1 December 1968.',
        'Each district\'s headquarters is worth knowing individually rather than guessing from the district name, since several of them don\'t match: Chamoli\'s headquarters is Gopeshwar, not Chamoli town; Tehri Garhwal\'s is New Tehri; and Udham Singh Nagar\'s is Rudrapur, not Kashipur or the district\'s namesake town. The other district headquarters do match their names: Uttarkashi, Rudraprayag, Pauri, Dehradun, Haridwar, Almora, Bageshwar, Champawat, Nainital and Pithoragarh.'),
      p('2. Tehsils, blocks, and the district extremes exams ask about', 'must',
        'Below the district level, Uttarakhand has around 117 tehsils (a number that shifts slightly as new ones are occasionally created) and 95 development blocks, which correspond to the Kshetra Panchayats. On the standard Census 2011 comparisons the exam draws on: Champawat, at 1,781 sq km, is the smallest district by area; the largest is a genuinely disputed answer, since most reference books cite Chamoli at 8,030 sq km with Uttarkashi second at 8,016 sq km, but Chamoli\'s own official district website separately gives 7,520 sq km, so it is worth reading the exact wording of any question on this rather than memorising a single number.',
        'On population, Haridwar is both the most populous district and the one with the highest density (801 persons per sq km), while Rudraprayag has the smallest population and Uttarkashi the lowest density (41 persons per sq km), a predictable pattern given that Haridwar sits in the plains and Uttarkashi is almost entirely mountainous. Almora records the state\'s highest sex ratio at 1,139 females per 1,000 males, against a state-wide figure of 963.'),
      s('3. What to memorize', 'must',
        '13 districts; Garhwal 7, Kumaon 6; Garhwal HQ Pauri, Kumaon HQ Nainital',
        'Chamoli HQ Gopeshwar; Tehri HQ New Tehri; Udham Singh Nagar HQ Rudrapur',
        'Smallest Champawat; most populous Haridwar; least populous Rudraprayag; densest Haridwar; sparsest Uttarkashi; Almora highest sex ratio'),
      s('4. Exam traps', 'trap',
        'Haridwar is in Garhwal division, not Kumaon.',
        'Udham Singh Nagar\'s headquarters is Rudrapur, not Kashipur.',
        'The largest district by area is a disputed answer; do not memorise only one figure.',
        'Census figures are 2011; new tehsils and counts change.'),
      s('5. 30-second revision', 'revision',
        '13 districts (7 + 6); HQs: Gopeshwar, New Tehri, Rudrapur; Champawat smallest; Haridwar most populous and densest; Rudraprayag least populous; Uttarkashi sparsest; Almora sex ratio 1,139.')
    ],
    sourceNote: SRC
  },

  'Panchayati Raj': {
    priority: 'MUST KNOW', title: 'Panchayati Raj in Uttarakhand',
    summary: 'The three-tier system under the Uttarakhand Panchayati Raj Act, 2016, its elected heads at each level, the reservation rules, and how big the system actually is on the ground, drawn from the 2025 State Election Commission data.',
    sections: [
      p('1. Constitutional and legal base', 'understand',
        'Panchayati raj across India rests on the 73rd Constitutional Amendment (1992, in force from 24 April 1993), which added Part IX to the Constitution along with the Eleventh Schedule listing 29 subjects panchayats can handle. Elections themselves are conducted by the State Election Commission under Article 243K, and a State Finance Commission reviews the sharing of resources every five years under Article 243I. Uttarakhand implements all of this through its own Uttarakhand Panchayati Raj Act, 2016 (Act No. 11 of 2016).'),
      p('2. The three tiers, and who leads each one', 'must',
        'The Act sets up three levels: the Gram Panchayat at village level, headed by a Pradhan (with an Up-Pradhan); the Kshetra Panchayat at block level, headed by a Pramukh (with an Up-Pramukh); and the Zila Panchayat at district level, headed by an Adhyaksha (with an Upadhyaksha). It is easy to mix up the block-level and district-level titles, so it helps to remember them as a pair: Pramukh for the block, Adhyaksha for the district.',
        'Women\'s representation is built directly into the law: 50% of all seats in a Gram Panchayat are reserved for women, and at least half of the Pradhan posts in any district must also go to women, on top of the usual reservation for Scheduled Castes, Scheduled Tribes and backward classes in proportion to their population.'),
      p('3. The scale of the system, 2025', 'must',
        'As administered by the State Election Commission, Uttarakhand currently has 13 Zila Panchayats, 95 blocks (Kshetra Panchayats) and 7,485 Gram Panchayats. The most recent general panchayat elections were held in two phases, on 24 and 28 July 2025, with counting completed on 31 July and turnout at 69.16%.'),
      s('4. What to memorize', 'must',
        'Act: Uttarakhand Panchayati Raj Act, 2016; three tiers; heads: Pradhan, Pramukh, Adhyaksha',
        'Women: 50% of Gram Panchayat seats',
        '95 blocks, 7,485 Gram Panchayats; elections 24 and 28 July 2025',
        '73rd Amendment, Part IX, Eleventh Schedule (29 subjects), Article 243K'),
      s('5. Exam traps', 'trap',
        'The head of the block-level body is called Pramukh, not Pradhan.',
        'The Kshetra Panchayat is the block-level tier and the Zila Panchayat the district-level tier.',
        'The 2016 Act replaced the older Uttar Pradesh legislation that the state had adopted.'),
      s('6. 30-second revision', 'revision',
        '2016 Act → Gram (Pradhan) → Kshetra (Pramukh) → Zila (Adhyaksha) → women 50% → SEC conducts → 95 blocks, 7,485 GPs → 2025 polls 24 and 28 July.')
    ],
    sourceNote: SRC
  },

  'Urban Local Government': {
    priority: 'HIGH YIELD', title: 'Urban Local Government',
    summary: 'The urban local bodies of Uttarakhand after the January 2025 elections, how many municipal corporations the state now has, and the separate system of cantonment boards that sits alongside them.',
    sections: [
      p('1. Constitutional base and the three kinds of urban body', 'understand',
        'Urban local government rests on the 74th Constitutional Amendment (1992, in force from 1 June 1993), which added Part IXA and the Twelfth Schedule with 18 functional items. In practice this gives three tiers of urban body depending on a town\'s size: a Municipal Corporation for large cities, a Municipal Council (Nagar Palika Parishad) for smaller towns, and a Nagar Panchayat for areas still transitioning from rural to urban.'),
      p('2. What the 2025 elections changed', 'must',
        'Elections to 100 urban local bodies across Uttarakhand were held on 23 January 2025, with results declared two days later, and the elected mayors and chairpersons sworn in on 7 February 2025. Of those 100 bodies, 11 are municipal corporations, 43 are municipal councils and about 46 are nagar panchayats. The 11 corporations are Dehradun, Haridwar, Roorkee, Rishikesh, Haldwani, Kashipur, Rudrapur, Kotdwar, Srinagar (Garhwal), Almora and Pithoragarh, a list that has grown in recent years: Almora, Pithoragarh, Kotdwar and Srinagar are newer additions, so older reference books that list only seven corporations are now out of date. Nainital, despite its prominence, remains a municipal council rather than a corporation. Dehradun\'s corporation has 100 wards, the largest in the state; Kashipur and Rudrapur have 40 each. Examples of the mayors elected include Saurabh Thapliyal (BJP) at Dehradun, Ajay Verma (BJP) at Almora and Kalpana Deolal (BJP) at Pithoragarh.'),
      p('3. Cantonment boards', 'understand',
        'Separately from this municipal structure, Uttarakhand has nine cantonment boards, at Almora, Ranikhet, Chakrata, Clement Town, Dehradun, Landour, Roorkee, Nainital and Lansdowne, which fall under the Ministry of Defence rather than the state\'s own municipal law.'),
      s('4. What to memorize', 'must',
        '100 ULBs: 11 corporations, 43 councils, about 46 nagar panchayats',
        'Elections 23 January 2025; results 25 January; oath 7 February 2025',
        '9 cantonment boards',
        '74th Amendment, Part IXA, Twelfth Schedule (18 items)'),
      s('5. Exam traps', 'trap',
        'Nainital is not a municipal corporation.',
        'Almora, Pithoragarh, Kotdwar and Srinagar became corporations recently; older textbooks list only seven.',
        'Cantonment boards are separate from municipal bodies.'),
      s('6. 30-second revision', 'revision',
        '74th Amendment → 100 ULBs → 11 corporations (Dehradun, Haridwar, Roorkee, Rishikesh, Haldwani, Kashipur, Rudrapur, Kotdwar, Srinagar, Almora, Pithoragarh) → 43 councils → nagar panchayats → 9 cantonments.')
    ],
    sourceNote: SRC
  },

  'State Commissions & Institutions': {
    priority: 'HIGH YIELD', title: 'State Commissions and Institutions',
    summary: 'The constitutional and statutory bodies of the state, when each was set up, and where each one is headquartered, which is the detail most often asked about directly.',
    sections: [
      p('1. The recruitment commissions', 'must',
        'The Uttarakhand Public Service Commission (UKPSC), the body conducting the exam you are preparing for, was set up in 2001 under Articles 315 to 323 of the Constitution, with its headquarters at Gurukul Kangri, Haridwar, and its Chairman and members appointed by the Governor. Below it sits the Uttarakhand Subordinate Service Selection Commission (UKSSSC), established later, on 17 September 2014, and headquartered at Raipur, Dehradun, which recruits for the state\'s subordinate posts.'),
      p('2. Elections, information and rights bodies', 'must',
        'The State Election Commission, which runs panchayat and urban local body elections, was formed on 30 July 2001 and is based in Dehradun. Two rights-related bodies followed over the next decade or so: the Uttarakhand Information Commission, set up under the Right to Information Act, 2005 on 3 October 2005 (based at RTI Bhawan, Ladpur, Dehradun), and the Uttarakhand Human Rights Commission, formed on 13 May 2013, also headquartered at Dehradun. The Uttarakhand State Commission for Women, constituted under a dedicated 2005 Act, likewise sits at Dehradun.'),
      p('3. Lokayukta and the State Finance Commission', 'understand',
        'Uttarakhand has passed two separate Lokayukta Acts, one in 2011 and a further one in 2014 after the national Lokpal and Lokayuktas Act, 2013 came into force, but the post has reportedly stayed vacant for long stretches despite High Court directions to fill it, so this is worth checking against current news rather than assuming someone is currently in office. On the financial side, the state\'s 6th State Finance Commission was constituted in early 2025, chaired by former Chief Secretary N. Ravishankar, to recommend how resources should be shared for the five years starting 1 April 2026.'),
      s('4. What to memorize', 'must',
        'UKPSC: Gurukul Kangri, Haridwar; UKSSSC: 17 Sept 2014, Dehradun',
        'SEC: 30 July 2001; Information Commission: 3 Oct 2005; Human Rights Commission: 13 May 2013',
        'Lokayukta Acts: 2011 and 2014; 6th SFC chair N. Ravishankar'),
      s('5. Exam traps', 'trap',
        'UKPSC is at Haridwar, but UKSSSC and the SEC are at Dehradun.',
        'The UKPSC (a constitutional body) and UKSSSC (created by a 2014 Act) have different legal bases.',
        'Do not assume a Lokayukta is currently in office.'),
      s('6. 30-second revision', 'revision',
        'UKPSC (Haridwar, 2001) · UKSSSC (Dehradun, 2014) · SEC (Dehradun, 30 July 2001) · Information Commission (2005) · HRC (2013) · Women\'s Commission (Act 2005) · Lokayukta (Acts 2011, 2014) · 6th SFC (Ravishankar).')
    ],
    sourceNote: SRC
  },

  'Important Administrative Facts': {
    priority: 'HIGH YIELD', title: 'Important Administrative Facts',
    summary: 'A short cross-check page pulling together the numbers and places from the topics above that questions most often ask about in isolation, out of the context that made them easy to remember the first time.',
    sections: [
      p('1. The numbers and places worth having ready', 'must',
        'Across the topics in this section, a handful of figures come up again and again once separated from their original context: 13 districts across 2 divisions, 95 blocks, 7,485 Gram Panchayats, and 100 urban local bodies including 11 municipal corporations; 70 MLAs with 13 SC and 2 ST seats, and 5 Lok Sabha plus 3 Rajya Sabha seats; a state area of 53,483 sq km and a sex ratio of 963 (Census 2011).',
        'On places, remember the split: Dehradun is the winter capital and Gairsain (Bhararisain), declared in 2020, the summer one; the High Court sits at Nainital, the Public Service Commission at Haridwar, the Garhwal Commissioner at Pauri and the Kumaon Commissioner at Nainital. Two recent, current-affairs-adjacent facts round this out: the Uniform Civil Code came into force on 27 January 2025, making Uttarakhand the first state to implement one, and the phase-out of the old revenue police system began in October 2025.'),
      s('2. Exam traps', 'trap',
        'Do not assume the capital is permanent: Dehradun is provisional and Gairsain is the summer capital.',
        'Check the "as of" date of any current office-holder.',
        'Municipal corporation counts changed in 2025.'),
      s('3. 30-second revision', 'revision',
        '13/2/95/7,485/100 → 70 seats → 5 LS, 3 RS → Dehradun and Gairsain → HC Nainital, UKPSC Haridwar → UCC 2025 → revenue police 2025.')
    ],
    sourceNote: SRC
  }
};
