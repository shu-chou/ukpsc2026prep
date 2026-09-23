const S = 'uttarakhand/society-culture';
const ST = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];

// [difficulty, question, options, answerIndex, explanation, fixedOptionOrder?]
const rows = {
  'Society & Communities': [
    ['easy', 'The traditional dominant landowning cultivator caste of the Uttarakhand hills is commonly known as', ['Khasiya (Rajput)', 'Shilpkar', 'Bhotia', 'Tharu'], 0, 'Khasiya/Rajput is the numerically and socially dominant hill group.'],
    ['easy', 'The hill artisan castes of Uttarakhand, today classified as Scheduled Castes, are traditionally known as', ['Shilpkars (Doms)', 'Khasiyas', 'Bhotias', 'Jaunsaris'], 0, 'Includes blacksmiths, weavers, musicians and other service castes.'],
    ['medium', 'Which district of Uttarakhand has the most ethnically diverse population due to post-independence resettlement?', ['Udham Singh Nagar', 'Almora', 'Pithoragarh', 'Chamoli'], 0, 'Resettled by Sikh farmers and Bengali refugees after Partition and 1971.'],
    ['medium', 'Villages in the Uttarakhand hills that have been emptied due to large-scale out-migration are locally referred to as', ['Ghost villages', 'Shadow villages', 'Silent villages', 'Migrant villages'], 0, 'A recognised social and administrative phenomenon (bhootiya gaon).'],
    ['medium', 'Large-scale male out-migration from Uttarakhand\'s hill villages has been driven primarily by', ['Government jobs, armed forces recruitment and urban employment', 'Religious pilgrimage', 'Forced eviction by the state', 'Trade with Tibet'], 0, 'A long-standing pattern, especially in remote hill districts.'],
    ['hard', 'Consider the following statements:\n1. The Terai region has a similar social composition to the hill districts of Uttarakhand.\n2. Bengali refugees settled in Udham Singh Nagar mainly after Partition and the 1971 war.\nWhich of the statements is/are correct?', ST, 1, 'Terai social composition (migrant-heavy) differs sharply from the culturally homogeneous hill districts.', true],
    ['hard', 'Out-migration in Uttarakhand hill society has particularly shaped which of the following?', ['A greater role for women in agriculture and household decision-making', 'A decline in agriculture altogether', 'The disappearance of the joint family system nationwide', 'Complete urbanisation of all hill districts'], 0, 'Women have taken on a central economic and social role as men migrate for work.']
  ],

  'Tribes': [
    ['easy', 'How many Scheduled Tribes are officially recognised in Uttarakhand?', ['5', '3', '7', '4'], 0, 'Tharu, Buksa, Jaunsari, Bhotia and Raji.'],
    ['easy', 'The Bhotia tribe of Uttarakhand is mainly found in', ['High Himalayan valleys along the Tibet border', 'The Terai plains', 'Jaunsar-Bawar', 'Haridwar district'], 0, 'Includes the Niti-Mana and Johar valleys.'],
    ['easy', 'The Jaunsari tribe is concentrated in which part of Uttarakhand?', ['Jaunsar-Bawar area of Dehradun district', 'Pithoragarh district', 'Udham Singh Nagar', 'Bageshwar district'], 0, 'A historically distinct administrative area.'],
    ['medium', 'Which two tribes of Uttarakhand are classified as Particularly Vulnerable Tribal Groups (PVTGs)?', ['Buksa and Raji', 'Tharu and Bhotia', 'Jaunsari and Tharu', 'Bhotia and Buksa'], 0, 'Both have small populations and historically pre-agricultural lifestyles.'],
    ['medium', 'The Raji (Van Raji) tribe of Uttarakhand is traditionally associated with', ['Forest-dwelling hunting and gathering', 'Trans-Himalayan trade with Tibet', 'Settled Terai agriculture', 'Fraternal polyandry'], 0, 'Found mainly in Pithoragarh district; the smallest of the five tribes.'],
    ['medium', 'The Jaunsari community is historically associated with the practice of', ['Fraternal polyandry', 'Matrilineal inheritance', 'Nomadic pastoralism only', 'Endogamous trade guilds'], 0, 'Multiple brothers sharing one wife; the custom has substantially declined.'],
    ['medium', 'The chief deity of the Jaunsari people is', ['Mahasu Devta', 'Golu Devta', 'Nanda Devi', 'Bhumiyal Devta'], 0, 'Central to Jaunsar-Bawar\'s religious life.'],
    ['medium', 'The traditional Bhotia trade with Tibet largely declined after which event?', ['The 1962 India-China war', 'The 1971 India-Pakistan war', 'Indian independence in 1947', 'The creation of Uttarakhand in 2000'], 0, 'The closure of the border ended centuries of wool-salt-borax trade.'],
    ['hard', 'Consider the following statements:\n1. The Tharu tribe is found mainly in the Terai plains of Udham Singh Nagar.\n2. The Jaunsari and Bhotia tribes belong to the same geographic region of Uttarakhand.\nWhich of the statements is/are correct?', ST, 0, 'Jaunsari (Dehradun) and Bhotia (Chamoli/Pithoragarh) are in entirely different regions.', true],
    ['hard', 'Which Bhotia sub-group is associated specifically with the Johar valley of Pithoragarh district?', ['Johari', 'Marchha', 'Tolchha', 'Byangsi'], 0, 'Bhotia sub-groups are often named after their home valley.']
  ],

  'Languages & Dialects': [
    ['easy', 'The two major Pahari languages of Uttarakhand are', ['Garhwali and Kumaoni', 'Garhwali and Jaunsari', 'Kumaoni and Bhotia', 'Hindi and Sanskrit'], 0, 'Both belong to the Central Pahari group of Indo-Aryan languages.'],
    ['easy', 'The official language of Uttarakhand is', ['Hindi', 'Garhwali', 'Kumaoni', 'Sanskrit'], 0, 'Used for administration and education across the state.'],
    ['easy', 'Which script is used to write Garhwali and Kumaoni?', ['Devanagari', 'Takri', 'Gurmukhi', 'Sharada'], 0, 'The same script used for Hindi and Sanskrit.'],
    ['medium', 'Which language has Uttarakhand designated as its second official language?', ['Sanskrit', 'Urdu', 'English', 'Punjabi'], 0, 'A distinctive choice tied to the state\'s pilgrimage and Vedic learning identity.'],
    ['medium', 'Garhwali and Kumaoni belong to which language family?', ['Indo-Aryan (Central Pahari group)', 'Tibeto-Burman', 'Dravidian', 'Austroasiatic'], 0, 'Distinct from the Bhotia dialects.'],
    ['medium', 'The Bhotia dialects of Uttarakhand (such as Johari and Byangsi) belong to which language family?', ['Tibeto-Burman', 'Indo-Aryan', 'Dravidian', 'Munda'], 0, 'Reflecting the Bhotia region\'s historical closeness to Tibet.'],
    ['hard', 'Consider the following statements:\n1. Garhwali and Kumaoni are currently included in the Eighth Schedule of the Constitution.\n2. Jaunsari is linguistically distinct from both Garhwali and Kumaoni.\nWhich of the statements is/are correct?', ST, 1, 'Neither Garhwali nor Kumaoni is in the Eighth Schedule, despite long-standing demands.', true],
    ['hard', 'Which of the following is NOT a Bhotia dialect?', ['Jaunsari', 'Johari', 'Byangsi (Rang)', 'Darmi'], 0, 'Jaunsari is a separate language spoken in Jaunsar-Bawar, unrelated to the Bhotia Tibeto-Burman dialects.']
  ],

  'Folk Dances': [
    ['easy', 'Chholiya is a folk dance associated with which region and occasion?', ['Kumaon, weddings', 'Garhwal, harvest festivals', 'Jaunsar-Bawar, funerals', 'Terai, religious fairs'], 0, 'A martial sword dance performed in wedding processions.'],
    ['easy', 'Langvir Nritya, an acrobatic pole dance, is particularly associated with which area?', ['Tehri Garhwal', 'Almora', 'Pithoragarh', 'Udham Singh Nagar'], 0, 'Performers balance and perform feats atop a wooden pole.'],
    ['medium', 'Which folk dance re-enacts episodes from the Mahabharata as a ritual dance-drama?', ['Pandav Nritya', 'Chholiya', 'Jhumeilo', 'Chappeli'], 0, 'Considered a form of devotional worship in Garhwal.'],
    ['medium', 'Jhora and Chappeli are folk dances mainly performed in which region?', ['Kumaon', 'Garhwal', 'Jaunsar-Bawar', 'Terai'], 0, 'Popular community circle dances.'],
    ['medium', 'Jhumeilo is a folk dance traditionally performed by', ['Garhwali women, especially when visiting their natal homes', 'Kumaoni men during weddings', 'Bhotia traders during festivals', 'Jaunsari priests during rituals'], 0, 'Expresses themes of longing and festivity.'],
    ['medium', 'Which instruments typically accompany the Chholiya dance?', ['Dhol-Damau and Ransingha/Bhankora', 'Only the Hudka', 'Only the Masakbeen', 'Sitar and tabla'], 0, 'Drums and long trumpets together create its martial atmosphere.'],
    ['hard', 'Consider the following statements:\n1. Chholiya is traditionally performed by armed male dancers.\n2. Langvir Nritya involves dancers balancing on a single wooden pole.\nWhich of the statements is/are correct?', ST, 2, 'Both descriptions are accurate.', true],
    ['hard', 'Pandav Nritya is closely linked to which broader ritual tradition of Uttarakhand?', ['Jagar (deity/spirit invocation)', 'Aipan (ritual floor art)', 'Harela (sowing festival)', 'Kumbh Mela'], 0, 'Participants are believed in local tradition to become possessed during the performance.']
  ],

  'Folk Music & Instruments': [
    ['easy', 'The paired drums that form the rhythmic backbone of Uttarakhand folk performances are', ['Dhol and Damau', 'Hudka and Masakbeen', 'Ransingha and Bhankora', 'Tabla and Dholak'], 0, 'Played together at almost every procession and festival.'],
    ['easy', 'Which community traditionally plays the Dhol-Damau in Uttarakhand?', ['Auji (Das)', 'Tamta', 'Khasiya', 'Jaunsari'], 0, 'Hereditary musician community.'],
    ['medium', 'The Hudka, an hourglass-shaped hand drum, is specifically associated with which song genre?', ['Hudkiya Bol', 'Khuded Geet', 'Mangal Geet', 'Jagar'], 0, 'Often performed during agricultural work like paddy transplanting.'],
    ['medium', 'Ransingha and Bhankora are examples of which type of instrument?', ['Long curved wind/trumpet instruments', 'Stringed instruments', 'Hand drums', 'Bagpipe-type instruments'], 0, 'Used in temple processions, royal ceremonies and the Chholiya dance.'],
    ['medium', 'Jagar, a ritual musical tradition of Uttarakhand, is best described as', ['Songs invoking local deities or ancestral spirits, performed by a Jagariya', 'Purely secular wedding entertainment', 'A form of classical Hindustani music', 'A dance performed only during Kumbh Mela'], 0, 'Believed to allow a deity to possess a person present, called the Dangariya or Pashwa.'],
    ['medium', 'Khuded Geet, a distinctive Kumaoni song genre, expresses', ['A married woman\'s longing for her natal home (maika)', 'Praise of local kings', 'War and martial valour', 'Seasonal agricultural instructions'], 0, 'Reflects the social reality of women moving to their husband\'s village after marriage.'],
    ['hard', 'The Masakbeen, a distinctive Uttarakhand folk instrument, is best described as', ['A bagpipe-like reed instrument', 'A stringed instrument', 'A large temple bell', 'A type of hand drum'], 0, 'One of the region\'s less common traditional instruments.'],
    ['hard', 'Consider the following statements:\n1. The Jagariya is the singer-performer who invokes deities during a Jagar.\n2. Mangal Geet are songs of mourning sung at funerals.\nWhich of the statements is/are correct?', ST, 0, 'Mangal Geet are auspicious songs sung at weddings and joyous occasions, not funerals.', true]
  ],

  'Fairs & Festivals': [
    ['easy', 'The Nanda Devi Raj Jat, one of the world\'s longest religious processions, is held once every', ['12 years', '6 years', '3 years', 'year'], 0, 'A grand procession honouring the goddess Nanda Devi.'],
    ['easy', 'The Kumbh Mela is held at which Uttarakhand city?', ['Haridwar', 'Dehradun', 'Rishikesh', 'Nainital'], 0, 'One of the four traditional Kumbh sites in India.'],
    ['easy', 'Harela, a Kumaoni festival marking the sowing season, involves', ['Growing and later offering sprouted barley/wheat shoots', 'A 12-yearly pilgrimage to Homkund', 'Ritual bathing at a river confluence', 'A fair for cattle trading only'], 0, 'Celebrated twice a year.'],
    ['medium', 'The Nanda Devi Raj Jat procession begins at Nauti village and culminates at', ['Homkund', 'Roopkund', 'Badrinath', 'Kedarnath'], 0, 'Passing through Roopkund on the way.'],
    ['medium', 'Which animal traditionally leads the Nanda Devi Raj Jat procession as a symbol of the goddess?', ['A four-horned ram (khadu)', 'A white elephant', 'A holy cow', 'A horse'], 0, 'A distinctive and frequently tested detail.'],
    ['medium', 'The Kumbh Mela rotates among four sites in India. Besides Haridwar, the other three are', ['Prayagraj, Ujjain and Nashik', 'Varanasi, Puri and Dwarka', 'Rameswaram, Puri and Dwarka', 'Mathura, Ayodhya and Varanasi'], 0, 'The site is determined by planetary positions in Hindu astrology.'],
    ['medium', 'Phool Dei, a spring festival of Uttarakhand, is celebrated by', ['Young girls decorating doorsteps with flowers at dawn', 'Married women fasting for their husbands\' longevity', 'Farmers ploughing fields ceremonially', 'Priests conducting river-bank rituals'], 0, 'Celebrated in the Chaitra month, welcoming spring.'],
    ['medium', 'The Uttarayani fair, held at Makar Sankranti, is associated with which town?', ['Bageshwar', 'Almora', 'Pithoragarh', 'Chamoli'], 0, 'At the confluence of the Saryu and Gomti rivers.'],
    ['medium', 'The Gauchar Mela, which began as an agricultural and trade fair, is held in which district?', ['Chamoli', 'Almora', 'Nainital', 'Tehri Garhwal'], 0, 'Now a major annual state-level exhibition and cultural event.'],
    ['hard', 'Consider the following statements:\n1. The Nanda Devi Raj Jat covers roughly 280 km on foot.\n2. The Ardh Kumbh at Haridwar is held once every 12 years.\nWhich of the statements is/are correct?', ST, 0, 'The Ardh ("half") Kumbh occurs at the 6-year midpoint, not every 12 years — that is the full Kumbh.', true],
    ['hard', 'Ghee Sankranti (Olgia), involving the ceremonial consumption of ghee, falls in which month?', ['Shravan', 'Chaitra', 'Magh', 'Kartik'], 0, 'Believed to protect against illness in the coming year.']
  ],

  'Religious & Cultural Traditions': [
    ['easy', 'The Char Dham of Uttarakhand consists of', ['Yamunotri, Gangotri, Kedarnath and Badrinath', 'Badrinath, Puri, Dwarka and Rameswaram', 'Kedarnath, Tungnath, Rudranath and Kalpeshwar', 'Haridwar, Rishikesh, Kedarnath and Badrinath'], 0, 'Distinct from Adi Shankaracharya\'s all-India Char Dham.'],
    ['easy', 'Which Uttarakhand shrine is common to both Uttarakhand\'s Char Dham and the all-India Char Dham?', ['Badrinath', 'Kedarnath', 'Gangotri', 'Yamunotri'], 0, 'Badrinath appears in both pilgrimage systems.'],
    ['easy', 'Golu Devta, the deity of justice widely worshipped in Kumaon, has his main temple at', ['Chitai, near Almora', 'Jageshwar, near Almora', 'Baijnath, Bageshwar', 'Adi Badri, Chamoli'], 0, 'Devotees offer bells and written petitions.'],
    ['medium', 'The Panch Kedar group of Shiva temples includes all EXCEPT', ['Adi Badri', 'Tungnath', 'Rudranath', 'Kalpeshwar'], 0, 'Adi Badri belongs to the Panch Badri (Vishnu) group, not Panch Kedar.'],
    ['medium', 'Which of the Panch Kedar temples is often cited as the highest Shiva temple in the world?', ['Tungnath', 'Kedarnath', 'Rudranath', 'Madhyamaheshwar'], 0, 'Located at a very high altitude in Garhwal.'],
    ['medium', 'The Panch Badri group of Vishnu shrines includes Badrinath, Yogdhyan Badri, Bhavishya Badri, Vridha Badri and', ['Adi Badri', 'Tungnath', 'Kalpeshwar', 'Kedarnath'], 0, 'Adi Badri is in Chamoli district.'],
    ['medium', 'Devprayag, the last of the Panch Prayag, is significant because', ['The Alaknanda and Bhagirathi meet here, and the combined river is thereafter called the Ganga', 'It is the source of the Yamuna', 'It hosts the Kumbh Mela', 'It is the site of the Nanda Devi Raj Jat'], 0, 'Conventionally regarded as the point the Ganga "begins" as a named river.'],
    ['medium', 'Arrange the Panch Prayag in order from source to plains: Karnaprayag, Devprayag, Vishnuprayag, Rudraprayag, Nandprayag', ['Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag, Devprayag', 'Devprayag, Rudraprayag, Karnaprayag, Nandprayag, Vishnuprayag', 'Nandprayag, Vishnuprayag, Karnaprayag, Devprayag, Rudraprayag', 'Karnaprayag, Nandprayag, Vishnuprayag, Devprayag, Rudraprayag'], 0, 'Vishnuprayag is highest upstream, Devprayag is lowest.', true],
    ['hard', 'Consider the following statements:\n1. Uttarakhand\'s Char Dham and the all-India Char Dham are the same set of four shrines.\n2. The Ganga is formed at Gangotri, the first of the Panch Prayag.\nWhich of the statements is/are correct?', ST, 3, 'The two Char Dham systems only share Badrinath, and the Ganga is formed at Devprayag, not Gangotri (which is the source of the Bhagirathi, and is not one of the Panch Prayag at all).', true],
    ['hard', 'Bhumiyal Devta, worshipped at the village/clan level in Uttarakhand, is best described as', ['A local land deity', 'The regional mother goddess', 'A deity of justice', 'A Buddhist protector deity'], 0, 'Worshipped through the Jagar ritual tradition, distinct from Nanda Devi or Golu Devta.']
  ],

  'Art & Crafts': [
    ['easy', 'Aipan, a ritual art form of Kumaon, is traditionally drawn using', ['Rice-flour paste on a red ochre base', 'Natural dyes on cloth', 'Wood carving tools', 'Copper engraving'], 0, 'Drawn before pujas, weddings and other auspicious occasions.'],
    ['easy', 'Who traditionally draws Aipan patterns in a Kumaoni household?', ['Women of the household', 'Hired professional artists', 'Village priests', 'Children'], 0, 'Part of ritual preparation for auspicious occasions.'],
    ['medium', 'Ringal, used extensively in Uttarakhand handicrafts, is a type of', ['Hill bamboo', 'Wool', 'Clay', 'Metal alloy'], 0, 'Used for baskets, mats and household items; promoted as eco-friendly.'],
    ['medium', 'Pankhi and Thulma are traditional woollen products of which community?', ['Bhotia', 'Jaunsari', 'Tharu', 'Shilpkar'], 0, 'Pankhi is a lighter shawl; Thulma is a heavier blanket.'],
    ['medium', 'Almora is particularly known for which traditional craft?', ['Copper and bell-metal utensils', 'Wool weaving', 'Wood carving', 'Aipan art'], 0, 'Historically produced by the Tamta artisan community.'],
    ['medium', 'The Tamta community of Almora is traditionally associated with', ['Metalworking (copper and bell-metal items)', 'Wool weaving', 'Temple priesthood', 'Forest produce trading'], 0, 'A hereditary artisan caste specialising in metalcraft.'],
    ['hard', 'Consider the following statements:\n1. Ringal craft is associated mainly with the Terai plains.\n2. Pankhi and Thulma are directly tied to the Bhotia community\'s pastoral, transhumant lifestyle.\nWhich of the statements is/are correct?', ST, 1, 'Ringal craft is associated with mid-to-high altitude hill communities, not the Terai plains.', true],
    ['hard', 'Aipan patterns vary depending on', ['The specific ritual or deity being honoured', 'The season of the year only', 'The caste of the visiting guest', 'The distance from Almora'], 0, 'Different patterns are prescribed for different occasions.']
  ],

  'Architecture & Heritage': [
    ['easy', 'The Jageshwar temple complex, with over a hundred stone temples, is located near', ['Almora', 'Dehradun', 'Haridwar', 'Nainital'], 0, 'Set in a dense deodar forest, mostly dedicated to Shiva.'],
    ['easy', 'Most temples at Jageshwar and Baijnath were built during which dynasty\'s period?', ['Katyuri', 'Chand', 'Panwar (Garhwal)', 'Gorkha'], 0, 'The Katyuris ruled a large part of the region between roughly the 7th-11th centuries.'],
    ['easy', 'The dominant architectural style of ancient Uttarakhand stone temples is', ['Nagara', 'Dravida', 'Vesara', 'Indo-Islamic'], 0, 'Characterised by a curvilinear shikhara.'],
    ['medium', 'The Baijnath temple complex, dedicated mainly to Shiva as Vaidyanath, is located on the banks of which river?', ['Gomti', 'Alaknanda', 'Bhagirathi', 'Kosi'], 0, 'In Bageshwar district, a former Katyuri capital area.'],
    ['medium', 'Adi Badri, an ancient Vishnu temple cluster in Chamoli district, belongs to which pilgrimage group?', ['Panch Badri', 'Panch Kedar', 'Panch Prayag', 'Char Dham'], 0, 'One of the five Vishnu shrines alongside Badrinath itself.'],
    ['medium', 'The traditional Uttarakhand hill house, often called kholi-makan, is typically built with', ['Stone and wood, with a slate or sloped roof', 'Bamboo and thatch only', 'Brick and cement', 'Mud walls with a flat roof'], 0, 'Adapted to heavy rain and snow.'],
    ['medium', 'In a traditional two-storeyed hill house, the ground floor is typically used for', ['Cattle and storage', 'The kitchen', 'Guest reception', 'Religious worship'], 0, 'With living quarters on the upper floor.'],
    ['hard', 'Consider the following statements:\n1. Jageshwar is regionally identified with the Nageshwar Jyotirlinga.\n2. Jageshwar is protected as an Archaeological Survey of India site.\nWhich of the statements is/are correct?', ST, 2, 'Both statements are correct.', true],
    ['hard', 'The Nagara style of temple architecture found in Uttarakhand is characterised by', ['A curvilinear shikhara (tower) over the sanctum', 'A flat pyramidal tower', 'Minarets and domes', 'Stepped pyramidal gopurams'], 0, 'Distinguishing it from the Dravida style of South India.']
  ],

  'Literature': [
    ['easy', 'Which poet is regarded as a pioneer of Kumaoni-language poetry, known for satirical verse?', ['Gumani Pant', 'Sumitranandan Pant', 'Chandrakunwar Bartwal', 'Mola Ram'], 0, 'Wrote about the Gorkha-to-British transition period.'],
    ['easy', 'Sumitranandan Pant, a major Hindi poet from Uttarakhand, was born in', ['Kausani', 'Almora', 'Pithoragarh', 'Nainital'], 0, 'His poetry is deeply shaped by the Kumaon hill landscape.'],
    ['medium', 'Sumitranandan Pant is associated with which movement in Hindi literature?', ['Chhayavad', 'Pragatiwad', 'Prayogvad', 'Riti Kavya'], 0, 'Alongside Jaishankar Prasad and Mahadevi Verma.'],
    ['medium', 'Sumitranandan Pant was honoured with which of India\'s highest literary awards?', ['Jnanpith Award', 'Sahitya Akademi Fellowship only', 'Padma Vibhushan only', 'Bharat Ratna'], 0, 'India\'s highest literary honour.'],
    ['medium', 'The Jagar and Pandav Lila traditions of Uttarakhand are best classified as', ['Oral folk literature and performance', 'Written classical Sanskrit texts', 'Formal Hindi prose', 'Modern print journalism'], 0, 'Function as vehicles of storytelling and religious transmission.'],
    ['hard', 'Consider the following statements:\n1. Gumani Pant and Sumitranandan Pant belong to the same historical era.\n2. Sumitranandan Pant wrote primarily in Hindi, not Kumaoni.\nWhich of the statements is/are correct?', ST, 1, 'The two poets belong to different eras; Gumani Pant wrote in the early 19th century, Pant much later.', true],
    ['hard', 'Pandav Lila, an oral narrative tradition of Garhwal, is primarily based on episodes from', ['The Mahabharata', 'The Ramayana', 'The Puranas generally', 'Local Katyuri chronicles'], 0, 'Performed as a form of ritual dance-drama, linked to Pandav Nritya.']
  ],

  'Important Cultural Personalities': [
    ['easy', 'Mola Ram, an 18th-century painter-poet, is credited with developing which artistic tradition?', ['The Garhwal school of painting', 'The Kangra school of painting', 'The Kumaoni Aipan tradition', 'The Pahari wood-carving tradition'], 0, 'At the Tehri Garhwal royal court.'],
    ['easy', 'Mola Ram worked primarily at the court of which Garhwal ruler?', ['Raja Pradyuman Shah', 'Raja Ajay Pal', 'Raja Man Shah', 'Raja Fateh Shah'], 0, 'A key patron of Garhwal-style painting.'],
    ['easy', 'Gaura Devi, associated with the Chipko movement, belonged to which village?', ['Reni, Chamoli district', 'Nauti, Chamoli district', 'Chitai, Almora district', 'Mana, Chamoli district'], 0, 'She led the 1974 Chipko action there.'],
    ['medium', 'In which year did Gaura Devi lead the group of women who confronted loggers at Reni?', ['1974', '1970', '1980', '1965'], 0, 'A landmark early instance of grassroots ecological activism.'],
    ['medium', 'Sumitranandan Pant, Uttarakhand\'s most nationally celebrated literary figure, is associated with which town?', ['Kausani', 'Reni', 'Chitai', 'Tehri'], 0, 'His birthplace, in the Kumaon hills.'],
    ['hard', 'Consider the following statements:\n1. Mola Ram is remembered only as a painter, not as a poet.\n2. Gaura Devi\'s action at Reni is regarded as one of the defining moments of the Chipko movement.\nWhich of the statements is/are correct?', ST, 1, 'Mola Ram is remembered as both a painter and a poet.', true],
    ['hard', 'The word "Chipko," central to Gaura Devi\'s legacy, literally means', ['To cling/stick (to trees)', 'To protect forests', 'A type of tree', 'A village council'], 0, 'Describing the women physically embracing trees to prevent felling.']
  ]
};

export const ukSocietyCulture = Object.entries(rows).flatMap(([topic, list]) =>
  list.map(([difficulty, q, options, answer, explanation, fixed]) => ({
    subject: S, topic, difficulty, q, options, answer, explanation, fixed: Boolean(fixed)
  }))
);
