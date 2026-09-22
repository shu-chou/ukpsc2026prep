const SRC = 'Compiled from standard Uttarakhand references and cross-checked against published sources. Dates and numbers for some incidents (for example death tolls and the exact day at Reni) differ between sources; the notes flag this. Follow your prescribed book if it differs.';

const p = (heading, type, ...paragraphs) => ({ heading, type, paragraphs });
const s = (heading, type, ...bullets) => ({ heading, type, bullets });

export const uttarakhandMovements = {
  'Coolie-Begar Movement': {
    priority: 'MUST KNOW', title: 'Coolie-Begar Movement (Kumaon, 1921)',
    summary: 'A non-violent mass protest against the forced-labour system of the British in Kumaon, which climaxed at Bageshwar in January 1921. Learn what the system actually required of villagers, how the Kumaon Parishad built the campaign, what happened at the Uttarayani fair, and what it changed.',
    sections: [
      p('1. What villagers were being forced to do', 'must',
        'Colonial administration in the hills leaned heavily on unpaid local labour, because officials travelled constantly through terrain with no roads and expected villages along the route to provide for them free of charge. This took three distinct forms: Kuli Utar meant carrying an official\'s baggage from one halt to the next, Kuli Begar meant general unpaid labour, and Kuli Burdayash meant supplying food and fuel without payment. The practice was given formal legal backing in 1913, which meant villagers had no legal way to refuse it, and because the burden always fell on the poorest households who could least afford the lost working days, it became one of the deepest grievances in colonial Kumaon.'),
      p('2. How the campaign was built', 'understand',
        'The Kumaon Parishad, formed in 1916, took up the issue early. Its second session at Haldwani in December 1918, presided over by the scholar Tara Dutt Gairola, passed a resolution moved by Hargovind Pant demanding the complete end of begar within two years. Around the same years, forest and labour grievances fed off each other: villagers burned pine (chir) forests in protest during 1916 and again in 1921, and the government responded by setting up the Kumaon Forest Grievances Committee in 1921. The wider non-cooperation movement launched by Gandhi in 1920 gave the whole campaign a national framework to sit inside.'),
      p('3. The Uttarayani fair, 13-14 January 1921', 'must',
        'The organisers deliberately timed their protest to coincide with the annual Uttarayani fair at Bageshwar, held on Makar Sankranti at the point where the Saryu and Gomti rivers meet, near the Bagnath temple. More than ten thousand peasants gathered there, and after Badri Datt Pandey, Hargovind Pant and Lala Chiranjilal addressed the crowd, the assembled villagers took an oath and threw the official begar registers into the river, swearing never again to perform unpaid labour for colonial officials. What makes the moment stand out is that it stayed entirely non-violent from start to finish, and once the registers were gone, the district administration had no practical way of reviving the old system.'),
      p('4. Titles, leaders, and what came of it', 'must',
        'The movement made Badri Datt Pandey a household name in the hills, and he was afterwards given the title "Kumaon Kesari"; Hargovind Pant received the title "Jannayak" for his part in it. Gandhi himself called the episode a "bloodless revolution." The practical result matched the symbolism: coolie labour collapsed across Kumaon within the year, and the practice was formally ended in the United Provinces later in 1921. The success also strengthened the Kumaon Parishad, which went on to merge with the Congress in 1926, and it fed directly into the forest-rights campaigns that followed, including the 1921 Forest Grievances Committee and, a decade later, the creation of Van Panchayats in 1931.'),
      s('5. What to memorize', 'must',
        'Place: Bageshwar (Saryu-Gomti confluence)',
        'Date: 13-14 January 1921 (Uttarayani fair, Makar Sankranti)',
        'Leaders: Badri Datt Pandey (Kumaon Kesari), Hargovind Pant (Jannayak), Lala Chiranjilal',
        'Kumaon Parishad: 1916; Haldwani session December 1918 (Tara Dutt Gairola)',
        'Three forms: Utar, Begar, Burdayash; legal sanction 1913'),
      s('6. Exam traps', 'trap',
        'Do not link this movement with the Garhwal princely state; it was in British Kumaon.',
        'Kumaon Kesari (Badri Datt Pandey) and Jannayak (Hargovind Pant) are often swapped.',
        'Bageshwar is at the Saryu-Gomti confluence, not the Kosi or Ramganga.',
        'Do not confuse Coolie Begar (labour) with the forest movement of Tilari (1930).'),
      s('7. 30-second revision', 'revision',
        'Begar (Utar, Begar, Burdayash; law 1913) → Kumaon Parishad 1916 → Haldwani 1918 → 13-14 Jan 1921 Bageshwar, registers into Saryu → Pandey Kumaon Kesari, H. Pant Jannayak → Gandhi: bloodless revolution → practice ended 1921.')
    ],
    sourceNote: SRC
  },

  'Dola-Palki Movement': {
    priority: 'HIGH YIELD', title: 'Dola-Palki Movement (Garhwal)',
    summary: 'A social movement for caste equality in Garhwal in which Shilpkar (Dalit) communities claimed the right to use the dola (bridal palanquin) and palki at weddings, a right upper castes had kept to themselves. Learn the custom that sparked it, who led it, and why it belongs in the freedom-movement era even though it wasn\'t aimed at the British.',
    sections: [
      p('1. The custom, the movement, and why it matters', 'must',
        'In Garhwali hill society, only Brahmins and Rajputs were allowed to travel by dola-palki, a palanquin used above all in wedding processions, while Shilpkar and Dom families were made to walk on foot regardless of the occasion. Any attempt by a Shilpkar family to break this rule was usually met with social boycott or outright violence from the upper castes. Jayanand Bharti (1881-1952), a freedom fighter and social reformer, launched an organised movement against this discrimination in Garhwal in 1923, using petitions, public meetings and non-violent defiance to press the claim, and gradually won Shilpkar communities the right to use the dola-palki at their own weddings.',
        'The movement matters because it is a reminder that the freedom-movement decades in Uttarakhand were not only about British rule: Jayanand Bharti\'s campaign, running alongside the wider Shilpkar (Dalit) social awakening of the hills, shows that caste reform was being fought for from inside the same generation of activists.'),
      s('2. What to memorize', 'must',
        'Region: Garhwal; leader: Jayanand Bharti (1881-1952); start: 1923',
        'Demand: right of Shilpkar/Dalit communities to use dola-palki at weddings',
        'Type: social reform, against caste discrimination'),
      s('3. Exam traps', 'trap',
        'It is not related to forests, forced labour or the statehood movement.',
        'It was in Garhwal, not Kumaon.',
        'Do not confuse Jayanand Bharti with Badri Datt Pandey (Coolie Begar) or Sri Dev Suman (Tehri).'),
      s('4. 30-second revision', 'revision',
        'Dola-Palki → Garhwal → Shilpkar/Dom denied palanquins at weddings → Jayanand Bharti, from 1923 → non-violent caste-equality movement.')
    ],
    sourceNote: SRC
  },

  'Forest Movements': {
    priority: 'MUST KNOW', title: 'Forest Movements before Chipko',
    summary: 'Colonial forest rules cut villagers off from grazing, fuel and timber, and produced a chain of forest protests running from the Kumaon forest fires through the 1930 Tilari firing in Tehri state to the creation of Van Panchayats in 1931. Learn why forests became the flashpoint they did, and how each protest fed into the next.',
    sections: [
      p('1. Why forests became a flashpoint', 'understand',
        'The British had been steadily tightening control over the hill forests since 1826, when the first small patches were reserved in the lower hills; the process widened greatly once Henry Ramsay became Commissioner and, from 1858, the first Conservator of Forests. What this meant on the ground was that villagers who had always grazed animals, cut fodder and gathered fuelwood freely in these forests now found large areas closed to them, even though hill agriculture genuinely depended on that access. Meanwhile, the timber and resin the forests produced went mostly to state revenue and to the railways rather than to local use, which made the whole system feel like it was taking from villagers to benefit outsiders.'),
      p('2. Kumaon\'s forest fires and the Grievances Committee', 'must',
        'That resentment came to a head in Kumaon in 1916, and again more sharply in 1921, when villagers, especially in Almora district, set fire to pine (chir) forests as a direct protest against both the forest rules and the coolie-begar system running alongside them. The government\'s response was the Kumaon Forest Grievances Committee of 1921, which heard evidence from several thousand witnesses and concluded that many of the existing forest rules were simply unworkable, interfering with villagers\' basic ability to make a living. Out of that finding eventually came the Forest Panchayat Rules of 1931, framed under Section 28(2) of the Indian Forest Act, 1927, which handed a share of forest management back to elected village bodies, Van Panchayats, one of the earliest formal systems of community forest management anywhere in India, and one Uttarakhand still relies on heavily.'),
      p('3. Tilari Kand, 30 May 1930', 'must',
        'The most violent of these forest protests happened not in British territory but inside the princely state of Tehri, whose Maharaja had copied the British model of restrictive forest laws. In May 1930, farmers of the Rawain valley organised against these rules, and when four of their leaders were arrested, a large crowd gathered in protest. With the Maharaja away in Europe, it was his Dewan (chief minister), Chakradhar Juyal, who ordered the crackdown: on 30 May 1930 his forces opened fire on the gathered farmers at Tilari, killing several of them in an episode still remembered as the "Jallianwala Bagh of Uttarakhand" because of how closely it echoed that better-known massacre.'),
      s('4. What to memorize', 'must',
        'Forest fires: 1916, 1921; Kumaon Forest Grievances Committee: 1921',
        'Tilari Kand: 30 May 1930, Rawain, Tehri state; Dewan Chakradhar Juyal; king Narendra Shah abroad',
        'Van Panchayat Rules: 1931 (Section 28(2), Indian Forest Act 1927)'),
      s('5. Exam traps', 'trap',
        'Tilari is in the princely state of Tehri, not in British Kumaon.',
        'The forest fires belong to Kumaon; Tilari to Rawain (Tehri).',
        'Van Panchayats came after the 1921 committee, not before.',
        'Do not confuse these colonial forest movements with Chipko (1973).'),
      s('6. 30-second revision', 'revision',
        '1826 reservation → Ramsay 1858 → 1916 and 1921 forest fires → 1921 Forest Grievances Committee → 1930 Tilari (Tehri) → 1931 Van Panchayats.')
    ],
    sourceNote: SRC
  },

  'Chipko Movement': {
    priority: 'MUST KNOW', title: 'Chipko Movement (1973 onwards)',
    summary: 'A non-violent forest-protection movement of the Garhwal Himalaya in which villagers, led by women, hugged trees to stop felling. Learn how it started at Mandal, what happened at Reni, the two very different leaders who shaped it, and what it actually changed in national forest policy.',
    sections: [
      p('1. How it started: Mandal, April 1973', 'must',
        '"Chipko" means to stick or hug, and it describes exactly what villagers did: they embraced trees to physically block the axes reaching them. The movement began in Chamoli district in April 1973, in the upper Alaknanda valley, after the forest department allotted ash trees in the Mandal forest near Gopeshwar to the Simon Company, an Allahabad-based sports-goods maker, at the same time as it had refused local villagers permission to cut ash for their own farm tools. Villagers organised by the Dasholi Gram Swarajya Sangh (DGSS), a cooperative founded at Gopeshwar in 1964 by Chandi Prasad Bhatt, marched to the forest and threatened to hug the trees rather than let them fall; the contractors backed down, and the tactic had proved itself.'),
      p('2. Reni, March 1974', 'must',
        'The movement\'s most famous moment came less than a year later, at Reni village near Joshimath in Chamoli district. Contractors had deliberately lured the village\'s men away with an offer of compensation talks elsewhere, planning to fell the forest while they were gone, but Gaura Devi, head of Reni\'s Mahila Mangal Dal, led the village women into the forest instead and physically confronted the loggers. (Sources differ on whether this happened on 26 or 27 March 1974, and on the exact number of women involved, but the outcome is not in dispute.) A government committee set up afterwards recommended, and the state accepted, a ten-year ban on commercial felling across Reni and roughly 1,200 square kilometres of the upper Alaknanda catchment.'),
      p('3. Two leaders, two emphases', 'must',
        'Chipko is usually associated with two men who approached it rather differently. Chandi Prasad Bhatt, through the DGSS, always framed the struggle around local livelihoods, forest-based cooperatives, and the practical needs of hill villages; his work earned him the Ramon Magsaysay Award in 1982. Sundarlal Bahuguna (1927-2021) took the same movement and gave it a wider ecological and even spiritual framing, coining the slogan "Ecology is permanent economy" and carrying Chipko\'s message across the country on a 5,000-kilometre foot march from Kashmir to Kohima between 1981 and 1983. It was Bahuguna\'s direct appeal to Prime Minister Indira Gandhi that is credited with the resulting 1980 ban on green-tree felling across the Himalayan region of Uttar Pradesh for fifteen years. Around them, Gandhian women such as Sarla Behn and Vimla Bahuguna did much of the grassroots organising that made both men\'s work possible.'),
      p('4. What it left behind', 'understand',
        'Chipko\'s core idea was that forests are not just timber but soil, water and air, captured in the movement\'s own slogan asking exactly that question, and putting village women at the centre of environmental protection rather than treating them as bystanders. The movement shaped Indian forest policy debates for a generation, won the Right Livelihood Award in 1987, and directly inspired the Appiko Andolan that began in Karnataka\'s forests in 1983.'),
      s('5. What to memorize', 'must',
        'Started: 1973, Mandal, Chamoli (Gopeshwar area); Simon Company; ash trees',
        'Reni: March 1974, Gaura Devi; committee, ten-year commercial-felling ban',
        'DGSS: Gopeshwar, 1964, C.P. Bhatt; Magsaysay 1982',
        'Bahuguna: slogan, 5,000 km march 1981-83; 15-year green-felling ban 1980; Padma Vibhushan 2009',
        'Right Livelihood Award 1987; Appiko 1983'),
      s('6. Exam traps', 'trap',
        'Chipko started in Chamoli (Garhwal), not Kumaon or Tehri.',
        'Reni (1974) came after Mandal (1973); Gaura Devi is the Reni leader, not the Mandal leader.',
        'Bhatt (Magsaysay 1982) and Bahuguna (Padma Vibhushan 2009) are often mixed up.',
        'The 15-year ban was in 1980, before the 1981-83 march.'),
      s('7. 30-second revision', 'revision',
        'Chipko → 1973 Mandal (Simon Co, ash trees, DGSS, Bhatt) → 1974 Reni (Gaura Devi) → ten-year felling ban → Bahuguna: ecology slogan, 5,000 km march (1981-83) → 1980 ban on green felling → Right Livelihood 1987 → Appiko 1983.')
    ],
    sourceNote: SRC
  },

  'Anti-Tehri / Other Regional Movements': {
    priority: 'HIGH YIELD', title: 'Anti-Tehri Dam and Other Regional Movements',
    summary: 'The movement against the Tehri Dam was the longest environment-and-rehabilitation struggle of the state, and several smaller people\'s movements (against liquor, for tree planting, for seed conservation) sit alongside it. Learn who led each one and what it was actually fighting for.',
    sections: [
      p('1. The Tehri Dam and the movement against it', 'must',
        'Built on the Bhagirathi near its confluence with the Bhilangana, the Tehri Dam stands about 260.5 metres high, the tallest dam in India, and its first phase was commissioned in 2006 after submerging the old town of Tehri and displacing roughly 100,000 people in total. Opposition to it began well before construction finished: the Tehri Bandh Virodhi Sangharsh Samiti (TBVSS) was formed in 1978 under Virendra Dutt Saklani specifically to fight the project, and from the 1980s until 2004 the campaign was led by Sundarlal Bahuguna, who staged repeated hunger strikes, his first major one in 1992, to draw attention to the dam. The objections were threefold: the region sits in a high-earthquake zone, the project meant large-scale displacement and loss of farmland, and, for many, damming the Bhagirathi itself felt like an affront to a sacred river. The case reached the Supreme Court, which permitted the project to proceed in 2000, and further protests in December that year were broken up by the police.'),
      p('2. Smaller movements that recur in the syllabus', 'must',
        'A cluster of narrower but still frequently asked movements grew up around the same decades. Nasha Nahin Rozgar Do (1984), led by the Uttarakhand Sangharsh Vahini in Kumaon with Kamla Pant at the centre of it, campaigned against liquor sales and for local employment. The Maiti Andolan began in 1995 at Gwaldam in Chamoli district, started by the biology teacher Kalyan Singh Rawat (later awarded the Padma Shri in 2020): the idea is that a village\'s unmarried girls each plant and tend a sapling at their own home, and a bride and groom plant one together at their wedding, making it one of the largest tree-planting movements in the country after Chipko itself. The Beej Bachao Andolan, led by Vijay Jardhari of Jardhar village in Tehri district since the 1980s, works to conserve traditional seed varieties and promote the region\'s old mixed-cropping system, known as baranaja (literally "twelve grains").',
        'A few further movements are commonly listed alongside these, though the details vary more between sources: the Raksha Sutra Andolan of the 1990s, in which women tied sacred threads around trees in the Tehri hills to stop them being felled; the Pani Rakho (save water) movement at Uphrainkhal in Pauri Garhwal, associated with Sachidanand Bharti; and the Jhapto Cheeno campaign of the late 1990s, over villagers\' claims to forest produce in Chamoli.'),
      s('3. What to memorize', 'must',
        'Tehri Dam: Bhagirathi-Bhilangana, 260.5 m, first phase 2006; TBVSS 1978 (V.D. Saklani); leader Sundarlal Bahuguna; Supreme Court verdict 2000',
        'Nasha Nahin Rozgar Do: 1984, Kumaon, Uttarakhand Sangharsh Vahini, Kamla Pant',
        'Maiti: 1995, Gwaldam, Kalyan Singh Rawat, Padma Shri 2020',
        'Beej Bachao: Vijay Jardhari, Tehri, 1980s'),
      s('4. Exam traps', 'trap',
        'Bahuguna led both Chipko and the Tehri campaign; Bhatt was mainly Chipko.',
        'Maiti is about tree planting at weddings, not about liquor or dams.',
        'Nasha Nahin Rozgar Do was in Kumaon and in 1984, not in the 1990s.',
        'The dam is on the Bhagirathi, not the Alaknanda.'),
      s('5. 30-second revision', 'revision',
        'Tehri Dam (Bhagirathi, 260.5 m, 2006) ← TBVSS 1978 (Saklani) + Bahuguna (fasts, SC verdict 2000) · Nasha Nahin Rozgar Do 1984 · Maiti 1995 (Gwaldam, K.S. Rawat) · Beej Bachao (Jardhari).')
    ],
    sourceNote: SRC
  },

  'Uttarakhand Statehood Movement': {
    priority: 'MUST KNOW', title: 'Uttarakhand Statehood Movement (as a people\'s movement)',
    summary: 'This is the movement itself: its organisations, phases, martyrs and turning points. The chronological sequence of events and the office-holders who followed are covered in the History section; here the focus is on how the movement was built and who actually took part in it.',
    sections: [
      p('1. Where the demand came from, and who organised it', 'understand',
        'The demand for a separate hill state grew out of a straightforward sense of neglect: with the state government seated in distant Lucknow, the hill districts saw poor roads and schools, few jobs, and heavy out-migration as a direct result of being governed from so far away. Scattered demands go back to the 1930s and 1940s, but the movement only became organised with the founding of the Uttarakhand Kranti Dal (UKD) at Mussoorie on 24 July 1979, under its first president D.D. Pant, which turned statehood into the central platform of a functioning political party. Indramani Badoni, known as the "Gandhi of Uttarakhand" for his methods, became one of its most respected faces, and by the late 1980s and into the 1990s even national parties such as the BJP had begun to add their support to the demand.'),
      p('2. The 1994 upsurge and who carried it', 'must',
        'The demand turned into a genuine mass movement in 1994, once the state government accepted the Kaushik Committee\'s recommendation, on 10 August that year, for a separate hill state with its capital at Gairsain. What followed was not confined to any one group: students, women, ex-servicemen, government employees and traders all took to the streets together. Women in particular were at the centre of the agitation, organising rallies, fasts and road blockades, and it was two women, Belmati Chauhan and Hansa Dhanai, among the six protesters killed in the police firing at Mussoorie on 2 September 1994, alongside Balbir Singh Negi, Dhanpat Singh, Rai Singh Bangari and Madan Mohan Mamgai. A day earlier, on 1 September, police had opened fire at Khatima in what is now Udham Singh Nagar; a month after that, on the night of 2 October, came the firing at Rampur Tiraha near Muzaffarnagar on activists travelling to Delhi, an incident still remembered bitterly, including for serious allegations of assault on the women in the convoy.'),
      p('3. From martyrdom to statehood', 'must',
        'These killings, rather than weakening the movement, made a separate state the only outcome the agitation would accept. The Uttar Pradesh Reorganisation Act, 2000 finally created the state on 9 November 2000, India\'s 27th, named Uttaranchal at first and renamed Uttarakhand on 1 January 2007; 9 November is now marked every year as Uttarakhand Day. Even after statehood, the promise of a hill capital was not forgotten: Gairsain, the very place the Kaushik Committee had recommended back in 1994, was finally declared the state\'s summer capital in 2020.'),
      s('4. What to memorize', 'must',
        'UKD: 24 July 1979, Mussoorie, D.D. Pant first president',
        'Kaushik Committee: Ramashankar Kaushik; report 5 May 1994; Gairsain as capital',
        'Khatima 1 Sept; Mussoorie 2 Sept (six protesters killed; women martyrs Belmati Chauhan, Hansa Dhanai); Muzaffarnagar (Rampur Tiraha) 2 Oct 1994',
        'State formed 9 Nov 2000 (27th); renamed 1 Jan 2007'),
      s('5. Exam traps', 'trap',
        'Khatima and Mussoorie (September) are separate from Muzaffarnagar (October).',
        'The UKD was founded in Mussoorie, but the Mussoorie firing was a different event in 1994.',
        'The Kaushik Committee recommended Gairsain, but the capital stayed at Dehradun on a provisional basis.'),
      s('6. 30-second revision', 'revision',
        'Neglect → UKD 1979 (Mussoorie) → Karnaprayag 1987 → Kaushik Committee May 1994 → Khatima 1 Sept, Mussoorie 2 Sept, Muzaffarnagar 2 Oct → Act 2000 → 9 Nov 2000 → renamed 2007 → Gairsain 2020.')
    ],
    sourceNote: SRC
  }
};
