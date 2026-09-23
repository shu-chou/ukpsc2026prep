const SRC = 'Compiled from standard Uttarakhand culture and society references (State Gazetteers, tribal welfare and census material, and published folk-culture surveys). Community and tribal descriptions focus on well-established, exam-relevant facts rather than exhaustive ethnographic detail.';

const p = (heading, type, ...paragraphs) => ({ heading, type, paragraphs });
const s = (heading, type, ...bullets) => ({ heading, type, bullets });

export const uttarakhandSocietyCulture = {
  'Society & Communities': {
    priority: 'MUST KNOW', title: 'Society & Communities',
    summary: 'Uttarakhand\'s hill society is organised around Garhwal and Kumaon, with a caste-based social structure, a distinct Bhotia tribal belt in the higher Himalayas, and a migrant plains population concentrated in the Terai. Heavy male out-migration for jobs and the military has reshaped hill village life.',
    sections: [
      p('1. Two regions, one broad social pattern', 'must',
        'Uttarakhand society is conventionally understood through its two historical divisions, Garhwal in the west and Kumaon in the east, each with its own dialect, customs and local identity, but sharing a broadly similar hill social structure. The traditional hill population is organised into three broad groups: Brahmins (priestly and landholding), Rajputs (often called Khasiya, the dominant landowning and cultivating group tracing descent from the historical Khasa population), and Shilpkars or Doms, the artisan and service castes (blacksmiths, weavers, musicians, cobblers) who are today classified as Scheduled Castes. This structure is distinct from the classical plains varna hierarchy in several ways, most notably a historically weaker practice of untouchability in remote hill areas and a strong Rajput-Khasiya identity that dominates numerically.'),
      p('2. The Terai\'s migrant and plains communities', 'must',
        'The Terai belt in the southern plains districts, especially Udham Singh Nagar, has a very different social composition from the hills: it was resettled after independence by Sikh farming families under organised colonisation schemes, and by Bengali Hindu refugees following Partition and the 1971 Bangladesh war, alongside long-settled Tharu and Buksa tribal communities native to the Terai forests. This makes Udham Singh Nagar the most ethnically and linguistically diverse district in the state, standing apart from the culturally homogeneous hill districts.'),
      p('3. Migration, "ghost villages" and the role of women', 'understand',
        'A defining feature of contemporary hill society is large-scale male out-migration for government jobs, the armed forces (Garhwal and Kumaon have a long tradition of military recruitment) and urban employment, leaving many villages populated mainly by women, children and the elderly. Villages that have been abandoned almost entirely are locally termed "ghost villages" (bhootiya gaon), a recognised social and administrative problem in the hill districts. This pattern has placed women at the centre of hill agriculture, forest management and household decision-making, and it is the social backdrop against which movements like Chipko (led substantially by hill women) are best understood.'),
      s('4. What to memorize', 'must',
        'Three broad traditional hill groups: Brahmins, Rajputs/Khasiya, Shilpkars/Doms (Scheduled Castes)',
        'Udham Singh Nagar (Terai) = most diverse district: Sikh settlers, Bengali refugees, Tharu/Buksa tribals',
        '"Ghost villages" = hill villages emptied by male out-migration'),
      s('5. Exam traps', 'trap',
        'Do not assume Uttarakhand hill society mirrors the plains caste hierarchy exactly — untouchability practice and social structure differ in detail.',
        'Terai social composition (migrant-heavy) is very different from the hill districts — do not generalise one onto the other.'),
      s('6. 30-second revision', 'revision',
        'Hill society = Brahmin/Rajput-Khasiya/Shilpkar-Dom. Terai = Sikh + Bengali refugee + Tharu/Buksa. Out-migration → ghost villages, women-centred hill economy.')
    ],
    sourceNote: SRC
  },

  'Tribes': {
    priority: 'MUST KNOW', title: 'Tribes of Uttarakhand',
    summary: 'Uttarakhand has five recognised Scheduled Tribes: Tharu, Buksa, Jaunsari, Bhotia and Raji (Van Raji). For UKPSC, know each tribe\'s region, way of life, and which are classified as Particularly Vulnerable Tribal Groups (PVTGs).',
    sections: [
      p('1. The five Scheduled Tribes — an overview', 'must',
        'Uttarakhand recognises five Scheduled Tribes, each tied to a distinct geography and way of life: the Tharu and Buksa (Bhoksa) of the Terai plains, the Jaunsari of the Jaunsar-Bawar region in Dehradun district, the Bhotia of the high Himalayan valleys along the Tibet border, and the Raji (also called Van Raji or Rang), the smallest and most isolated of the five, found mainly in Pithoragarh district. Two of these, the Buksa and the Raji, are additionally classified as Particularly Vulnerable Tribal Groups (PVTGs) for their small population, pre-agricultural or subsistence lifestyle, and low literacy — a classification worth remembering precisely because it singles these two out from the other three.'),
      p('2. Tharu and Buksa: the Terai tribes', 'must',
        'The Tharu are found across the Terai belt of Udham Singh Nagar, traditionally practising settled agriculture and known for a distinctive social organisation and matrilineal elements in some customs; they are also found across the border in Nepal\'s Terai. The Buksa (or Bhoksa), concentrated in the Terai forests, are considered among the earliest inhabitants of this belt and are a PVTG, traditionally more forest-dependent than the Tharu and with a smaller, more scattered population.'),
      p('3. Jaunsari: Jaunsar-Bawar', 'must',
        'The Jaunsari inhabit the Jaunsar-Bawar region of western Dehradun district, an area historically administered with distinct customary law even under British rule. They are historically associated with fraternal polyandry (multiple brothers sharing one wife), a custom that has substantially declined but is frequently referenced in exam material as a distinguishing social feature. Their chief deity is Mahasu Devta, whose temples anchor the region\'s religious life, and their traditional dress and jewellery (heavy silver ornaments) are visually and culturally distinctive.'),
      p('4. Bhotia: the high-Himalayan trading tribe', 'must',
        'The Bhotia inhabit the highest inhabited valleys of Uttarakhand along the Tibet border — the Niti and Mana valleys of Chamoli, the Johar valley of Pithoragarh, and the Darma, Byans and Chaudans valleys further east — and are traditionally associated with transhumance (seasonal movement between high summer settlements and lower winter villages) and historically with trans-Himalayan trade with Tibet, exchanging wool, borax and salt for grain, a trade that largely ended after the 1962 India-China war closed the border. Bhotia sub-groups are sometimes named after their valley (Johari, Marchha, Tolchha, Rang/Byangsi), and their culture shows visible Tibetan Buddhist as well as Hindu influence.'),
      p('5. Raji (Van Raji): the smallest and most isolated tribe', 'understand',
        'The Raji, also called Van Raji or Rang, are the smallest of Uttarakhand\'s five tribes, traditionally forest-dwelling hunter-gatherers found in small, scattered settlements mainly in Pithoragarh district, historically living by hunting, gathering and making wooden implements to trade with neighbouring villages. As a PVTG, they have received targeted government welfare attention for their very small population and historically low levels of settled agriculture, literacy and access to services.'),
      s('6. What to memorize', 'must',
        'Five STs: Tharu, Buksa, Jaunsari, Bhotia, Raji (Van Raji)',
        'PVTGs among them: Buksa and Raji only',
        'Tharu/Buksa → Terai (Udham Singh Nagar) · Jaunsari → Jaunsar-Bawar (Dehradun) · Bhotia → high Himalayan valleys (Chamoli, Pithoragarh) · Raji → Pithoragarh',
        'Jaunsari — historical fraternal polyandry, deity Mahasu Devta; Bhotia — transhumance + historical Tibet border trade'),
      s('7. Exam traps', 'trap',
        'Not all five tribes are PVTGs — only Buksa and Raji carry that classification.',
        'Bhotia trade with Tibet largely ended after the 1962 war, not before.',
        'Do not confuse Jaunsari (Dehradun) with Bhotia (Chamoli/Pithoragarh) — different regions and customs entirely.'),
      s('8. 30-second revision', 'revision',
        '5 STs = Tharu, Buksa, Jaunsari, Bhotia, Raji. PVTGs = Buksa + Raji. Terai = Tharu/Buksa. Jaunsar-Bawar = Jaunsari (Mahasu Devta, polyandry). High Himalaya = Bhotia (transhumance, Tibet trade). Pithoragarh = Raji (smallest, forest-dwelling).')
    ],
    sourceNote: SRC
  },

  'Languages & Dialects': {
    priority: 'MUST KNOW', title: 'Languages & Dialects',
    summary: 'Garhwali and Kumaoni, both Indo-Aryan Central Pahari languages written in Devanagari, are Uttarakhand\'s major spoken languages, alongside Jaunsari and the Tibeto-Burman Bhotia dialects. Hindi is the state\'s official language; none of the hill languages is currently in the Eighth Schedule.',
    sections: [
      p('1. Garhwali and Kumaoni: the two major Pahari languages', 'must',
        'The two dominant spoken languages of the hill districts are Garhwali, spoken across the Garhwal region, and Kumaoni, spoken across Kumaon — both belong to the Central Pahari group of Indo-Aryan languages and are written, where written at all, in the Devanagari script. Each has its own regional variations from valley to valley, and both carry a rich oral tradition of folk songs, proverbs and ballads that predates any standardised written literature. Despite having millions of speakers combined, neither Garhwali nor Kumaoni is currently included in the Eighth Schedule of the Constitution, and their inclusion has been a long-standing, recurring public demand in the state — a fact regularly tested since it is a live policy issue, not settled history.'),
      p('2. Jaunsari and the Bhotia dialects', 'understand',
        'Jaunsari, spoken in the Jaunsar-Bawar area of Dehradun district, is linguistically distinct from both Garhwali and Kumaoni and is associated specifically with the Jaunsari tribal community. The Bhotia communities of the high Himalayan valleys speak a cluster of dialects — Johari, Byangsi (Rang), Darmi, Chaudansi and others — that belong to the Tibeto-Burman language family rather than the Indo-Aryan family of Garhwali and Kumaoni, reflecting the Bhotia region\'s historical proximity to and exchange with Tibet.'),
      p('3. Hindi as the official language', 'understand',
        'Hindi is Uttarakhand\'s official language for administration and education, used alongside Sanskrit, which the state has given the status of a second official language — a distinctive choice among Indian states, reflecting Uttarakhand\'s religious and pilgrimage-centred identity (Sanskrit\'s use in the Char Dham temples and Vedic learning centres). Garhwali, Kumaoni and the other hill languages remain primarily spoken languages of daily life and folk culture rather than languages of formal administration.'),
      s('4. What to memorize', 'must',
        'Garhwali and Kumaoni = Indo-Aryan, Central Pahari group, Devanagari script, NOT in the Eighth Schedule',
        'Jaunsari = distinct from Garhwali/Kumaoni, spoken in Jaunsar-Bawar',
        'Bhotia dialects (Johari, Byangsi, Darmi, etc.) = Tibeto-Burman family, not Indo-Aryan',
        'Official languages of Uttarakhand: Hindi (official) + Sanskrit (second official language)'),
      s('5. Exam traps', 'trap',
        'Garhwali and Kumaoni are NOT in the Eighth Schedule — a frequent false-statement trap.',
        'Bhotia dialects belong to a different language family (Tibeto-Burman) than Garhwali/Kumaoni (Indo-Aryan) — do not lump them together.',
        'Sanskrit, not English, is Uttarakhand\'s second official language.'),
      s('6. 30-second revision', 'revision',
        'Garhwali + Kumaoni = Indo-Aryan, Central Pahari, Devanagari, not in 8th Schedule. Jaunsari = separate. Bhotia dialects = Tibeto-Burman. Official languages = Hindi + Sanskrit.')
    ],
    sourceNote: SRC
  },

  'Folk Dances': {
    priority: 'MUST KNOW', title: 'Folk Dances',
    summary: 'Uttarakhand\'s folk dances range from ritual and martial forms like Chholiya and Langvir Nritya to devotional dance-dramas like the Pandav Nritya and everyday community dances like Jhora and Chappeli — each tied to specific occasions, regions and social functions.',
    sections: [
      p('1. Chholiya: the martial wedding dance', 'must',
        'Chholiya is a martial sword dance from the Kumaon region, traditionally performed by armed male dancers as part of Rajput and Kshatriya wedding processions, accompanied by Dhol-Damau drumming and Ransingha and Bhankora trumpets. It re-enacts a mock battle and historically served to protect the wedding procession, reflecting the martial traditions of the region\'s dominant landholding castes; it remains one of the most visually recognisable and frequently referenced folk dances of Uttarakhand.'),
      p('2. Langvir Nritya: the acrobatic pole dance', 'must',
        'Langvir Nritya is an acrobatic dance form particularly associated with the Tehri Garhwal area, performed by male dancers who climb and perform balancing feats on a single upright wooden pole, accompanied by drumming, and is closely linked to the region\'s wrestling and physical-fitness traditions — it is sometimes described as demonstrating athletic skill as much as dance.'),
      p('3. Pandav Nritya: ritual dance-drama', 'must',
        'Pandav Nritya is a distinctive ritual dance-drama of the Garhwal region that dramatically enacts episodes from the Mahabharata, performed at specific festivals and considered a form of devotional worship rather than pure entertainment — participants are believed in local tradition to become possessed by the spirit of the Pandava heroes during the performance, linking it closely to the broader Jagar tradition of invoking deities and ancestral spirits through dance and music.'),
      p('4. Everyday community dances: Jhora, Chappeli and others', 'understand',
        'Beyond ritual and martial forms, Uttarakhand has a rich repertoire of community circle dances performed at festivals and social gatherings by both men and women: Jhora and Chappeli (or Chapeli) are popular Kumaoni group dances performed in a circle to the accompaniment of folk songs, often at fairs and festive occasions; Jhumeilo is a Garhwali women\'s dance traditionally performed during festivals when married women visit their natal homes, expressing themes of longing and joy; Thadya and Chaufula are other regional community dance forms named for their distinctive rhythm and formation.'),
      s('5. What to memorize', 'must',
        'Chholiya = Kumaon martial sword dance, weddings, men, Dhol-Damau + Ransingha/Bhankora',
        'Langvir Nritya = Garhwal (esp. Tehri) acrobatic pole dance, men',
        'Pandav Nritya = Garhwal ritual dance-drama re-enacting the Mahabharata, linked to Jagar tradition',
        'Jhora, Chappeli = Kumaoni community circle dances; Jhumeilo = Garhwali women\'s festival dance'),
      s('6. Exam traps', 'trap',
        'Chholiya (Kumaon) and Langvir Nritya (Garhwal, esp. Tehri) are frequently swapped in region-matching questions.',
        'Pandav Nritya is a ritual/devotional performance, not mere entertainment — it is tied to Mahabharata themes and the Jagar tradition.'),
      s('7. 30-second revision', 'revision',
        'Chholiya = Kumaon sword dance (weddings). Langvir Nritya = Garhwal/Tehri pole acrobatics. Pandav Nritya = Garhwal ritual Mahabharata dance-drama. Jhora/Chappeli = Kumaon circle dances. Jhumeilo = Garhwal women\'s dance.')
    ],
    sourceNote: SRC
  },

  'Folk Music & Instruments': {
    priority: 'MUST KNOW', title: 'Folk Music & Instruments',
    summary: 'Dhol-Damau, Hudka, Ransingha, Bhankora and the Masakbeen are the signature instruments of Uttarakhand\'s folk music, while Jagar (invocational songs to local deities) and Khuded geet (women\'s songs of longing for their natal home) are its most distinctive song traditions.',
    sections: [
      p('1. Core instruments: Dhol-Damau, Hudka and the wind instruments', 'must',
        'Dhol and Damau, a paired set of drums played together, form the rhythmic backbone of almost every Uttarakhand folk performance and procession, from weddings to religious festivals, and are traditionally played by the Auji or Das community, whose role as hereditary musicians is itself an important part of the region\'s social fabric. The Hudka is a small hourglass-shaped hand drum, distinctive for accompanying a specific genre of narrative songs called Hudkiya Bol, often performed during agricultural work like transplanting paddy. Among wind instruments, the Ransingha and Bhankora are long, curved brass or copper trumpets traditionally sounded at temple processions, royal ceremonies and the Chholiya dance, producing a deep, resonant sound associated with formal or sacred occasions; the Masakbeen is a bagpipe-like reed instrument, one of the region\'s more distinctive and less common instruments.'),
      p('2. Jagar: invoking deities through music', 'must',
        'Jagar is Uttarakhand\'s most distinctive devotional music tradition — a ritual performance in which a Jagariya (the singer-performer) invokes local deities or ancestral spirits through sung narrative, often accompanied by Hudka drumming, with the belief that the deity or spirit can possess a person present (called the Dangariya or Pashwa) during the ritual to communicate directly with the community. Jagar is central to how local deities like Golu Devta and various Kul Devtas (family/clan deities) are worshipped, and it links music directly to the region\'s wider religious life rather than being purely secular entertainment.'),
      p('3. Other song traditions', 'understand',
        'Mangal Geet are auspicious songs sung at weddings and other joyous ceremonies, paralleling similar traditions across North India but with distinct Garhwali and Kumaoni melodies and lyrics. Khuded Geet are a particularly poignant Kumaoni song genre sung by married women expressing longing for their maika (natal home/parents) after marriage, reflecting the social reality of women moving to their husband\'s village — a recurring theme across Uttarakhand\'s folk song tradition more broadly.'),
      s('4. What to memorize', 'must',
        'Dhol-Damau = paired drums, played by Auji/Das community, backbone of all processions',
        'Hudka = hourglass drum; Hudkiya Bol = narrative songs sung to it during farm work',
        'Ransingha, Bhankora = long trumpets, temple/royal processions and Chholiya dance',
        'Jagar = ritual songs invoking deities/spirits, performed by a Jagariya, deity possesses a Dangariya/Pashwa',
        'Khuded Geet = Kumaoni women\'s songs of longing for their natal home'),
      s('5. Exam traps', 'trap',
        'Jagar is a religious/ritual tradition, not a purely musical or entertainment genre — do not describe it as mere folk singing.',
        'Ransingha/Bhankora are wind instruments (trumpets), not drums — easy to mix up with Dhol-Damau in matching questions.'),
      s('6. 30-second revision', 'revision',
        'Dhol-Damau = drums (Auji/Das). Hudka = hourglass drum (Hudkiya Bol). Ransingha/Bhankora = trumpets. Masakbeen = bagpipe-like. Jagar = deity-invocation ritual singing. Khuded Geet = women\'s longing songs.')
    ],
    sourceNote: SRC
  },

  'Fairs & Festivals': {
    priority: 'MUST KNOW', title: 'Fairs & Festivals',
    summary: 'The Nanda Devi Raj Jat (once every 12 years) and the Haridwar Kumbh (also every 12 years) are Uttarakhand\'s two most exam-important large-scale events, alongside seasonal festivals like Harela, Phool Dei and Uttarayani that mark the agricultural and solar calendar.',
    sections: [
      p('1. Nanda Devi Raj Jat: the great 12-yearly pilgrimage', 'must',
        'The Nanda Devi Raj Jat is a grand religious procession held once every 12 years, honouring Nanda Devi as the regional mother goddess and daughter of the hills being ceremonially sent off to her husband Shiva\'s abode; it is often described as one of the world\'s longest and highest religious treks, covering roughly 280 km on foot starting from Nauti village near Karnaprayag and passing through Roopkund before culminating at Homkund, at extreme high altitude. A four-horned ram (khadu) traditionally leads the procession as a symbol of the goddess. Because of its scale, altitude and rarity (only once every 12 years), it is one of the single most frequently tested cultural facts about the state.'),
      p('2. Haridwar Kumbh Mela', 'must',
        'The Kumbh Mela is held at Haridwar once every 12 years (with an Ardh, or "half," Kumbh at the 6-year midpoint), making it one of the four traditional Kumbh sites in India alongside Prayagraj, Ujjain and Nashik — the site rotates among these four based on planetary positions in Hindu astrology. Haridwar\'s status as a Kumbh site, and its general standing as one of the seven most sacred places (Sapta Puri) in Hinduism, makes it central to Uttarakhand\'s religious-tourism identity and a recurring exam topic distinct from the state\'s hill festivals.'),
      p('3. Seasonal and agricultural festivals', 'must',
        'Harela, meaning "greenery," is a Kumaoni festival celebrated twice a year (around mid-July and again in autumn) marking the sowing season; families grow a small tray of barley/wheat saplings (also called Harela) days in advance and later offer or exchange the sprouted shoots as a symbol of a good harvest, alongside tree-planting as an environmental theme in modern observance. Phool Dei is a spring festival (in the Chaitra month) in which young girls go house to house at dawn, decorating doorsteps with fresh flowers and receiving small gifts in return, welcoming spring and the new agricultural cycle. Uttarayani (Makar Sankranti) is celebrated with a notable fair at Bageshwar, at the confluence of the Saryu and Gomti rivers, drawing pilgrims for ritual bathing at the turn of the solar calendar. Ghee Sankranti (also called Olgia) falls in the Shravan month and involves the ceremonial consumption of ghee, believed to protect against illness in the coming year.'),
      p('4. Fairs with an economic or trade dimension', 'understand',
        'Not every major gathering in Uttarakhand is purely religious — the Gauchar Mela in Chamoli district began as an agricultural and trade fair (showcasing crops, livestock and local produce) and has grown into a major annual state-level exhibition and cultural event, illustrating how fairs in the hills often blend religious, agricultural and commercial functions rather than falling neatly into a single category.'),
      s('5. What to memorize', 'must',
        'Nanda Devi Raj Jat = once every 12 years, Nauti → Roopkund → Homkund, ~280 km, four-horned ram (khadu) leads',
        'Haridwar Kumbh = once every 12 years (Ardh Kumbh at 6 years), one of 4 Kumbh sites (with Prayagraj, Ujjain, Nashik)',
        'Harela = Kumaoni sowing-season festival, twice yearly, sprouted barley/wheat shoots',
        'Phool Dei = spring (Chaitra) festival, girls decorate doorsteps with flowers',
        'Uttarayani = Makar Sankranti fair at Bageshwar (Saryu-Gomti confluence)',
        'Gauchar Mela (Chamoli) = agricultural/trade fair turned major exhibition'),
      s('6. Exam traps', 'trap',
        'Nanda Devi Raj Jat occurs every 12 years — not annually; do not confuse its periodicity with smaller annual Nanda Devi fairs held elsewhere.',
        'The Kumbh rotates among four sites (Haridwar, Prayagraj, Ujjain, Nashik) — Haridwar is not the only Kumbh location.',
        'Harela is celebrated twice a year, not once.'),
      s('7. 30-second revision', 'revision',
        'Raj Jat = 12-yearly, Nauti-Roopkund-Homkund. Kumbh = Haridwar, 12-yearly (Ardh at 6). Harela = sowing festival, twice/year. Phool Dei = spring, girls + flowers. Uttarayani = Bageshwar, Makar Sankranti. Gauchar Mela = Chamoli trade fair.')
    ],
    sourceNote: SRC
  },

  'Religious & Cultural Traditions': {
    priority: 'MUST KNOW', title: 'Religious & Cultural Traditions',
    summary: 'Uttarakhand\'s religious geography is organised around the Char Dham (Badrinath, Kedarnath, Gangotri, Yamunotri), the Panch Kedar and Panch Badri temple groups, the Panch Prayag river confluences, and a strong tradition of local deity worship such as Golu Devta and Nanda Devi.',
    sections: [
      p('1. Char Dham of Uttarakhand', 'must',
        'Uttarakhand\'s own Char Dham — Yamunotri, Gangotri, Kedarnath and Badrinath, conventionally visited in that order on the pilgrimage circuit — is distinct from Adi Shankaracharya\'s all-India Char Dham (Badrinath, Puri, Dwarka, Rameswaram), a distinction worth keeping precise since both are called "Char Dham" and are easy to conflate. Yamunotri and Gangotri are the source shrines of the Yamuna and Ganga respectively; Kedarnath is one of the twelve Jyotirlingas of Shiva; and Badrinath, dedicated to Vishnu, is also one of the 108 Divya Desams of Vaishnavite tradition and one of India\'s Char Dham sites in both systems simultaneously.'),
      p('2. Panch Kedar and Panch Badri', 'must',
        'The Panch Kedar are five Shiva temples in the Garhwal Himalayas — Kedarnath, Tungnath, Rudranath, Madhyamaheshwar and Kalpeshwar — traditionally associated with the Pandavas seeking Shiva\'s forgiveness after the Mahabharata war; Tungnath, among them, is often cited as the highest Shiva temple in the world. The Panch Badri are five Vishnu shrines — Badrinath (Vishal Badri), Yogdhyan Badri, Bhavishya Badri, Vridha Badri and Adi Badri — spread across the Garhwal region, with Badrinath itself as the principal and most visited of the five.'),
      p('3. Panch Prayag: the five sacred confluences', 'must',
        'The Panch Prayag are five sacred river confluences along the Alaknanda\'s course, conventionally listed from source to plains: Vishnuprayag (Alaknanda meets the Dhauliganga), Nandprayag (meets the Nandakini), Karnaprayag (meets the Pindar), Rudraprayag (meets the Mandakini) and Devprayag (meets the Bhagirathi, where the combined river is thereafter called the Ganga) — Devprayag is thus the point conventionally regarded as the actual birthplace of the Ganga as a named river.'),
      p('4. Local deity worship and the Jagar tradition', 'must',
        'Alongside these pan-Indian pilgrimage sites, Uttarakhand has a vibrant tradition of local and folk deity worship distinct from mainstream temple Hinduism. Golu Devta, widely worshipped as a deity of justice, is centred on the Chitai temple near Almora, where devotees tie written petitions and hang bells as offerings when they believe justice has been served — a practice that has made the temple visually distinctive (thousands of bells) and a frequently cited cultural fact. Nanda Devi is venerated as the region\'s mother goddess, celebrated most prominently through the 12-yearly Raj Jat. Village and clan-level worship of Bhumiyal Devta (local land deities) and various Kul Devtas (family deities) continues through the Jagar ritual tradition, in which a Jagariya invokes the deity in song, reflecting a religious life that operates in parallel with, rather than replacing, mainstream Hindu practice.'),
      s('5. What to memorize', 'must',
        'UK\'s Char Dham: Yamunotri, Gangotri, Kedarnath, Badrinath (distinct from the all-India Char Dham: Badrinath, Puri, Dwarka, Rameswaram)',
        'Panch Kedar: Kedarnath, Tungnath, Rudranath, Madhyamaheshwar, Kalpeshwar (Tungnath = highest Shiva temple)',
        'Panch Badri: Badrinath, Yogdhyan Badri, Bhavishya Badri, Vridha Badri, Adi Badri',
        'Panch Prayag (source to plains): Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag, Devprayag (Ganga "begins" here)',
        'Golu Devta = justice deity, Chitai temple near Almora, bell offerings'),
      s('6. Exam traps', 'trap',
        'Do not confuse Uttarakhand\'s Char Dham with Adi Shankaracharya\'s all-India Char Dham — Badrinath is the only overlap.',
        'The Ganga is formed at Devprayag (Alaknanda + Bhagirathi), the last of the Panch Prayag, not at Gangotri (which is the source of the Bhagirathi).',
        'Golu Devta worship is centred at Chitai near Almora — a frequently tested location detail.'),
      s('7. 30-second revision', 'revision',
        'UK Char Dham = Yamunotri-Gangotri-Kedarnath-Badrinath. Panch Kedar = 5 Shiva temples (Tungnath = highest). Panch Badri = 5 Vishnu shrines. Panch Prayag = 5 confluences ending at Devprayag (Ganga starts here). Golu Devta = justice deity, Chitai/Almora.')
    ],
    sourceNote: SRC
  },

  'Art & Crafts': {
    priority: 'MUST KNOW', title: 'Art & Crafts',
    summary: 'Aipan (ritual floor art), Ringal craft (cane basketry), traditional wool weaving (Pankhi, Thulma) and Almora\'s copper/bell-metal work are Uttarakhand\'s signature traditional crafts, each tied to specific communities and everyday or ritual use.',
    sections: [
      p('1. Aipan: ritual art of Kumaon', 'must',
        'Aipan is a traditional ritual art form of Kumaon, made by drawing intricate geometric and symbolic patterns using a paste of rice flour and water (bishwar) on a base of red ochre (geru), typically on floors, walls or wooden platforms (chowki) before pujas, weddings and other auspicious occasions. Different patterns are prescribed for different rituals and deities, making Aipan both a decorative and a functionally religious practice, drawn traditionally by the women of the household, and it remains one of the most visually recognisable and frequently cited elements of Kumaoni culture.'),
      p('2. Ringal craft', 'must',
        'Ringal is a type of hill bamboo (a dwarf/hardy bamboo species) that grows abundantly in the mid-to-high Himalayan zones of Uttarakhand, and its use in weaving baskets, mats, containers and household items constitutes one of the state\'s most important traditional crafts, particularly among hill communities where it supports rural livelihoods; Ringal products are also promoted today as an eco-friendly, biodegradable alternative to plastic.'),
      p('3. Wool weaving: Pankhi and Thulma', 'must',
        'The Bhotia communities of the high Himalayan valleys have a strong tradition of wool weaving, producing items like the Pankhi (a lightweight woollen shawl or wrap) and the Thulma (a thicker, heavier woollen blanket), both hand-spun and hand-woven from sheep\'s wool and essential to surviving the region\'s cold climate — this craft tradition is directly tied to the Bhotia community\'s historical pastoral and transhumant lifestyle.'),
      p('4. Metalwork: Almora\'s copper and bell-metal craft', 'understand',
        'Almora is particularly known for its traditional copper and bell-metal (an alloy sometimes called "ashtadhatu" locally) utensils and ritual items, historically produced by the Tamta community, a hereditary artisan caste specialising in metalworking; this craft remains one of the most identifiable region-specific artisanal traditions associated with a single town in the state.'),
      s('5. What to memorize', 'must',
        'Aipan = Kumaoni ritual floor/wall art, rice-paste on red ochre base, drawn by women before pujas/weddings',
        'Ringal = hill bamboo craft, baskets/mats, eco-friendly, mid-high altitude hill communities',
        'Pankhi (light shawl), Thulma (heavy blanket) = Bhotia wool-weaving products',
        'Almora = copper/bell-metal utensils, made by the Tamta community'),
      s('6. Exam traps', 'trap',
        'Aipan is drawn with rice paste on a red ochre (geru) base — both materials matter in statement-based questions.',
        'Pankhi and Thulma are both Bhotia wool products but differ in weight/thickness — do not treat them as identical.'),
      s('7. 30-second revision', 'revision',
        'Aipan = Kumaon ritual art (rice paste + geru). Ringal = hill bamboo basketry. Pankhi/Thulma = Bhotia wool wraps. Almora = copper/bell-metal (Tamta community).')
    ],
    sourceNote: SRC
  },

  'Architecture & Heritage': {
    priority: 'MUST KNOW', title: 'Architecture & Heritage',
    summary: 'Katyuri-era temple complexes at Jageshwar, Baijnath and Adi Badri, built largely in the Nagara style, are Uttarakhand\'s most important historical architecture, alongside the traditional stone-and-slate hill house (kholi-makan) style of vernacular building.',
    sections: [
      p('1. Jageshwar temple complex', 'must',
        'The Jageshwar temple complex, near Almora, is one of Uttarakhand\'s most significant heritage sites — a cluster of well over a hundred small and large stone temples, mostly dedicated to Shiva, built predominantly during the Katyuri dynasty period, set in a dense deodar forest. It is counted among the twelve Jyotirlinga sites in some traditions (regionally identified as the Nageshwar Jyotirlinga) and is protected as a centrally important Archaeological Survey of India site, making it one of the most frequently tested built-heritage facts about the state.'),
      p('2. Other Katyuri-era temple groups: Baijnath and Adi Badri', 'must',
        'Baijnath, in Bageshwar district, is another major Katyuri-period temple complex on the banks of the Gomti river, historically significant as a former Katyuri capital area, with its main temple dedicated to Shiva as Vaidyanath. Adi Badri, in Chamoli district, is a cluster of ancient Vishnu temples counted among the Panch Badri group, also built in the Katyuri period and showing the characteristic stone Nagara-style construction common to temples of this era across the region.'),
      p('3. Temple architecture style', 'understand',
        'Most of Uttarakhand\'s ancient stone temples, including those at Jageshwar, Baijnath and Adi Badri, were built in the North Indian Nagara style of temple architecture, characterised by a curvilinear shikhara (tower) over the sanctum, distinguishing them from the flatter, pyramidal Dravida style found in South India — a broad architecture-style association worth keeping in mind for any Katyuri-period temple question.'),
      p('4. Vernacular hill architecture', 'understand',
        'Traditional hill houses in Uttarakhand, often called kholi-makan, are typically built of stone and wood with slate or sloped roofing suited to heavy rain and snow, commonly two-storeyed with the ground floor used for cattle and storage and the upper floor for living quarters, and often featuring elaborately carved wooden windows, doors and balconies — a vernacular building tradition adapted specifically to the hill climate and agro-pastoral lifestyle, and increasingly noted today for being displaced by modern concrete construction.'),
      s('5. What to memorize', 'must',
        'Jageshwar (near Almora) = 100+ Katyuri-era stone temples, mostly Shiva, dense deodar forest, ASI-protected',
        'Baijnath (Bageshwar) = Katyuri temple complex on the Gomti river, main deity Vaidyanath (Shiva)',
        'Adi Badri (Chamoli) = ancient Vishnu temple cluster, part of the Panch Badri group',
        'Dominant style = Nagara (curvilinear shikhara), not Dravida',
        'Traditional hill house = kholi-makan: stone + wood, slate roof, cattle on ground floor'),
      s('6. Exam traps', 'trap',
        'Jageshwar, Baijnath and Adi Badri are all Katyuri-period — do not attribute them to a later dynasty.',
        'Jageshwar temples are predominantly Shaivite (Shiva); Adi Badri is Vaishnavite (Vishnu) — easy to swap in matching questions.',
        'The temple style is Nagara, not Dravida — a common wrong-option trap.'),
      s('7. 30-second revision', 'revision',
        'Jageshwar = Almora, 100+ Shiva temples, Katyuri era. Baijnath = Bageshwar, Gomti river, Vaidyanath. Adi Badri = Chamoli, Vishnu, Panch Badri group. Style = Nagara. Hill house = kholi-makan.')
    ],
    sourceNote: SRC
  },

  'Literature': {
    priority: 'MUST KNOW', title: 'Literature',
    summary: 'Uttarakhand\'s literary tradition spans Kumaoni satirical poetry (Gumani Pant), Hindi Chhayavad poetry (Sumitranandan Pant), and a rich oral folk-literature tradition of ballads and Jagar narratives that long predates any written record.',
    sections: [
      p('1. Gumani Pant: pioneer of Kumaoni poetry', 'must',
        'Gumani Pant is widely regarded as a pioneering figure of Kumaoni-language poetry, known particularly for his satirical verse commenting on the social and political conditions of his time, including the transition from Gorkha to British rule in the early 19th century; he is frequently cited in exam material as one of the earliest named literary figures specifically associated with the Kumaoni language rather than Hindi or Sanskrit.'),
      p('2. Sumitranandan Pant: Chhayavad and the Jnanpith Award', 'must',
        'Sumitranandan Pant, born in Kausani (Bageshwar/Almora area), is one of Hindi literature\'s most celebrated poets and a leading figure of the Chhayavad (romantic/neo-romantic) movement in Hindi poetry, alongside contemporaries like Jaishankar Prasad and Mahadevi Verma. He was awarded the Jnanpith Award, India\'s highest literary honour, and his poetry is deeply shaped by the natural landscape of his native Kumaon hills — a strong association worth remembering since it directly links a major national literary figure to Uttarakhand specifically.'),
      p('3. Oral and folk literature', 'understand',
        'Beyond named written authors, Uttarakhand has an extensive oral literary tradition that long predates formalised written Garhwali or Kumaoni literature: ballads, proverbs, and narrative song traditions like the Jagar (invoking deities through sung narrative) and Pandav Lila/Pandav Nritya (oral retellings of Mahabharata episodes performed as ritual dance-drama) function as major vehicles of storytelling, historical memory and religious transmission in the hill communities, and are as culturally significant as any written text for understanding the region\'s literary heritage.'),
      s('4. What to memorize', 'must',
        'Gumani Pant = pioneer of Kumaoni poetry, satirical verse, Gorkha-to-British transition era',
        'Sumitranandan Pant = born in Kausani, Hindi Chhayavad movement poet, Jnanpith Award winner',
        'Oral tradition: Jagar (deity-invocation songs), Pandav Lila/Pandav Nritya (Mahabharata narrative performance)'),
      s('5. Exam traps', 'trap',
        'Sumitranandan Pant wrote in Hindi (Chhayavad movement), not primarily in Kumaoni — do not conflate his language of writing with his regional origin.',
        'Gumani Pant and Sumitranandan Pant are different individuals from different eras — do not merge their biographical facts.'),
      s('6. 30-second revision', 'revision',
        'Gumani Pant = Kumaoni poetry pioneer, satire. Sumitranandan Pant = Kausani-born, Hindi Chhayavad, Jnanpith. Oral literature = Jagar + Pandav Lila.')
    ],
    sourceNote: SRC
  },

  'Important Cultural Personalities': {
    priority: 'MUST KNOW', title: 'Important Cultural Personalities',
    summary: 'From Mola Ram, founder-figure of the Garhwal school of painting, to Jnanpith poet Sumitranandan Pant and Chipko leader Gaura Devi, a handful of individuals anchor most UKPSC questions on Uttarakhand\'s cultural figures.',
    sections: [
      p('1. Mola Ram: the Garhwal school of painting', 'must',
        'Mola Ram (18th century) was a painter and poet at the Tehri Garhwal royal court under Raja Pradyuman Shah, credited as the central figure in developing the Garhwal school of miniature painting, a distinctive regional offshoot influenced by the Mughal and Pahari painting traditions but developed locally at the Garhwal court; he is also remembered as a poet writing devotional and courtly verse, making him one of the earliest named cultural figures explicitly tied to a specific Garhwal artistic tradition rather than an oral or anonymous folk one.'),
      p('2. Sumitranandan Pant: national literary recognition', 'must',
        'Sumitranandan Pant (covered in more depth under Literature) remains Uttarakhand\'s most nationally celebrated literary figure, a Jnanpith Award-winning pioneer of the Hindi Chhayavad movement born in Kausani, whose work is inseparable from the Himalayan landscape of his upbringing.'),
      p('3. Gaura Devi: the Chipko movement', 'must',
        'Gaura Devi, from Reni village in Chamoli district, is remembered as a central figure in the Chipko movement — she led the group of village women who, in March 1974, physically confronted loggers by embracing (chipko, "to cling/stick") trees earmarked for felling near Reni, an episode widely regarded as one of the movement\'s defining moments and a landmark early instance of grassroots ecological activism led by hill women, tying cultural memory directly to the environmental history covered elsewhere in the syllabus.'),
      s('4. What to memorize', 'must',
        'Mola Ram = Garhwal school of painting, Tehri court (under Raja Pradyuman Shah), also a poet',
        'Sumitranandan Pant = Kausani-born, Jnanpith, Hindi Chhayavad poetry',
        'Gaura Devi = Reni village (Chamoli), led the 1974 Chipko action at Reni'),
      s('5. Exam traps', 'trap',
        'Mola Ram is associated with painting (visual art) primarily, though also remembered as a poet — do not describe him only as a poet.',
        'Gaura Devi\'s action at Reni (1974) is the specific, frequently cited Chipko episode — keep the village name (Reni) and date precise.'),
      s('6. 30-second revision', 'revision',
        'Mola Ram = Garhwal painting school (Tehri court). Sumitranandan Pant = Jnanpith, Chhayavad, Kausani. Gaura Devi = Chipko, Reni village, 1974.')
    ],
    sourceNote: SRC
  }
};
