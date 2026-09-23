const S = 'history';
const ST = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];

// [difficulty, question, options, answerIndex, explanation, fixedOptionOrder?]
const rows = {
  'Ancient India': [
    ['easy', 'The Great Bath, a notable structure of the Indus Valley Civilization, was found at', ['Mohenjo-daro', 'Harappa', 'Lothal', 'Dholavira'], 0, 'A large public water tank, one of the site\'s most iconic structures.'],
    ['easy', 'Which Harappan site is famous for evidence of a dockyard, suggesting maritime trade?', ['Lothal', 'Mohenjo-daro', 'Kalibangan', 'Harappa'], 0, 'Located in present-day Gujarat.'],
    ['easy', 'Gautama Buddha attained enlightenment at which place?', ['Bodh Gaya', 'Lumbini', 'Sarnath', 'Kushinagar'], 0, 'One of the four holy sites of Buddhism.'],
    ['medium', 'Who was Chandragupta Maurya\'s mentor and author of the Arthashastra?', ['Chanakya (Kautilya)', 'Megasthenes', 'Ashoka', 'Bindusara'], 0, 'A treatise on statecraft and economics.'],
    ['medium', 'Ashoka embraced Buddhism and propagated Dhamma after which war?', ['The Kalinga War', 'The Battle of Hydaspes', 'The First Battle of Panipat', 'The Battle of Kalinga against the Guptas'], 0, 'Fought around 261 BCE.'],
    ['medium', 'The four-lion capital of an Ashokan pillar, now India\'s National Emblem, was originally erected at', ['Sarnath', 'Sanchi', 'Bodh Gaya', 'Kalinga'], 0, 'Marks the site of Buddha\'s first sermon.'],
    ['medium', 'Which Gupta ruler is often called the "Napoleon of India" for his extensive military conquests?', ['Samudragupta', 'Chandragupta I', 'Chandragupta II', 'Kumaragupta'], 0, 'Known through the Allahabad Pillar inscription.'],
    ['medium', 'The Chinese pilgrim Fa-Hien visited India during the reign of which Gupta ruler?', ['Chandragupta II', 'Samudragupta', 'Chandragupta I', 'Skandagupta'], 0, 'Also known as Vikramaditya.'],
    ['medium', 'Kalidasa, the celebrated Sanskrit poet-playwright and author of Abhijnanasakuntalam, flourished during which period?', ['The Gupta period', 'The Mauryan period', 'The Delhi Sultanate period', 'The Vedic period'], 0, 'Associated with the Gupta "golden age."'],
    ['hard', 'Consider the following statements:\n1. The Indus script has been fully deciphered by scholars.\n2. Mahavira was the 24th Tirthankara of Jainism.\nWhich of the statements is/are correct?', ST, 1, 'The Indus script remains undeciphered to date.', true],
    ['hard', 'The Chinese traveller Hiuen Tsang visited India during the reign of which ruler?', ['Harsha', 'Chandragupta II', 'Ashoka', 'Samudragupta'], 0, 'A 7th-century ruler, after the Gupta decline.'],
    ['hard', 'Which of the following correctly pairs a Harappan site with its distinguishing feature?', ['Kalibangan — evidence of a ploughed field', 'Lothal — the Great Bath', 'Dholavira — a dockyard', 'Harappa — sophisticated water reservoirs'], 0, 'Kalibangan, in Rajasthan, has yielded evidence of ploughed agricultural fields.']
  ],

  'Medieval India': [
    ['easy', 'Who founded the Slave (Mamluk) Dynasty of the Delhi Sultanate?', ['Qutbuddin Aibak', 'Iltutmish', 'Razia Sultan', 'Balban'], 0, 'Also began construction of the Qutub Minar.'],
    ['easy', 'Who was the only woman to rule as Sultan of Delhi?', ['Razia Sultan', 'Rani Lakshmibai', 'Chand Bibi', 'Noor Jahan'], 0, 'Daughter of Iltutmish.'],
    ['easy', 'The Taj Mahal was built during the reign of which Mughal emperor?', ['Shah Jahan', 'Akbar', 'Jahangir', 'Aurangzeb'], 0, 'Built for his wife, Mumtaz Mahal.'],
    ['medium', 'Which Delhi Sultanate ruler is known for the failed transfer of capital to Daulatabad and a token currency experiment?', ['Muhammad bin Tughlaq', 'Alauddin Khilji', 'Iltutmish', 'Ibrahim Lodi'], 0, 'A Tughlaq Dynasty ruler.'],
    ['medium', 'The Vijayanagara Empire suffered a decisive defeat at which battle in 1565?', ['Battle of Talikota', 'First Battle of Panipat', 'Battle of Plassey', 'Battle of Haldighati'], 0, 'By a coalition of Deccan Sultanates.'],
    ['medium', 'Which Mughal emperor introduced the Mansabdari system and abolished the jizya tax on non-Muslims?', ['Akbar', 'Babur', 'Shah Jahan', 'Aurangzeb'], 0, 'Also founded the syncretic faith Din-i-Ilahi.'],
    ['medium', 'Which ruler briefly interrupted Mughal rule between Humayun\'s two reigns?', ['Sher Shah Suri', 'Akbar', 'Babur', 'Ibrahim Lodi'], 0, 'An Afghan ruler known for administrative reforms including the Grand Trunk Road.'],
    ['medium', 'Guru Nanak, the founder of Sikhism, drew on ideas from which two broader religious movements of medieval India?', ['Bhakti and Sufi movements', 'Buddhism and Jainism only', 'Vedic ritualism only', 'The Renaissance and Enlightenment'], 0, 'Sikhism emerged in this syncretic devotional context.'],
    ['medium', 'Tulsidas, author of the Ramcharitmanas, is associated with which devotional movement?', ['The Bhakti movement', 'The Sufi movement', 'The Renaissance', 'The Chishti order'], 0, 'An Awadhi retelling of the Ramayana.'],
    ['medium', 'Shivaji, founder of the Maratha kingdom, formally crowned himself Chhatrapati in which year?', ['1674', '1526', '1707', '1757'], 0, 'Established the Ashtapradhan council of eight ministers.'],
    ['hard', 'Consider the following statements:\n1. The First Battle of Panipat (1526) ended Lodi rule and established the Mughal Empire.\n2. Krishnadevaraya ruled the Bahmani Sultanate at its peak.\nWhich of the statements is/are correct?', ST, 0, 'Krishnadevaraya ruled the Vijayanagara Empire, not the Bahmani Sultanate.', true],
    ['hard', 'Which of the following correctly sequences the five dynasties of the Delhi Sultanate?', ['Slave — Khilji — Tughlaq — Sayyid — Lodi', 'Khilji — Slave — Tughlaq — Lodi — Sayyid', 'Slave — Tughlaq — Khilji — Sayyid — Lodi', 'Lodi — Sayyid — Tughlaq — Khilji — Slave'], 0, 'The correct chronological order, 1206-1526.']
  ],

  'Modern India': [
    ['easy', 'Vasco da Gama, the first European to reach India by sea route, landed at which port in 1498?', ['Calicut', 'Surat', 'Goa', 'Bombay'], 0, 'Marked the beginning of direct European sea trade with India.'],
    ['easy', 'The Battle of Plassey (1757) was fought between the East India Company and which ruler?', ['Siraj-ud-Daulah, Nawab of Bengal', 'Tipu Sultan', 'Bahadur Shah Zafar', 'Shah Alam II'], 0, 'Robert Clive led the Company forces, aided by Mir Jafar\'s betrayal.'],
    ['easy', 'The Doctrine of Lapse, used to annex several princely states, is associated with which Governor-General?', ['Dalhousie', 'Wellesley', 'Curzon', 'Bentinck'], 0, 'Annexed states like Satara, Jhansi and Nagpur.'],
    ['medium', 'The Battle of Buxar (1764) resulted in the East India Company acquiring which right in 1765?', ['Diwani rights over Bengal, Bihar and Odisha', 'Full sovereignty over all of India', 'Control of the Bombay Presidency only', 'Trading rights with China'], 0, 'Revenue collection authority, a major turning point.'],
    ['medium', 'The Subsidiary Alliance system, requiring allied states to accept a British-paid force and cede foreign-policy control, is associated with which Governor-General?', ['Wellesley', 'Dalhousie', 'Curzon', 'Cornwallis'], 0, 'A key tool of indirect British expansion.'],
    ['medium', 'The Revolt of 1857 was immediately triggered by which controversy?', ['The greased cartridge controversy at Meerut', 'The Partition of Bengal', 'The Doctrine of Lapse alone', 'The Ilbert Bill'], 0, 'Rumoured to be coated with cow and pig fat.'],
    ['medium', 'Which act, passed after the Revolt of 1857, transferred control of India from the East India Company to the British Crown?', ['Government of India Act, 1858', 'Indian Councils Act, 1861', 'Government of India Act, 1935', 'Regulating Act, 1773'], 0, 'Ended Company rule in India.'],
    ['medium', 'Raja Ram Mohan Roy, founder of the Brahmo Samaj (1828), is particularly associated with the campaign against', ['Sati', 'Child marriage', 'Untouchability', 'The caste system broadly'], 0, 'Sati was formally abolished in 1829, with his advocacy a key factor.'],
    ['medium', 'Swami Vivekananda gained international recognition for his address at which 1893 event?', ['The Chicago World Parliament of Religions', 'The League of Nations founding', 'The Round Table Conference', 'The first Indian National Congress session'], 0, 'Promoted a universalist interpretation of Vedanta.'],
    ['medium', 'Dadabhai Naoroji\'s "Drain of Wealth" theory was articulated in which book?', ['Poverty and Un-British Rule in India', 'Hind Swaraj', 'The Discovery of India', 'Arthashastra'], 0, 'Argued colonial policy systematically transferred India\'s wealth to Britain.'],
    ['hard', 'Consider the following statements:\n1. The Battle of Plassey (1757) is generally considered more politically decisive than the Battle of Buxar (1764) for establishing Company supremacy in North India.\n2. Bahadur Shah Zafar was declared the symbolic leader of the 1857 revolt.\nWhich of the statements is/are correct?', ST, 1, 'Buxar (1764) is generally considered the more decisive battle for North Indian political supremacy.', true],
    ['hard', 'Swami Dayananda Saraswati, founder of the Arya Samaj (1875), advocated a return to which foundational texts?', ['The Vedas', 'The Upanishads exclusively', 'The Puranas', 'The Bhagavad Gita exclusively'], 0, 'Opposed idol worship and caste rigidity.']
  ],

  'Freedom Struggle': [
    ['easy', 'The Indian National Congress was founded in which year?', ['1885', '1905', '1857', '1906'], 0, 'A.O. Hume played a key organising role.'],
    ['easy', 'Lord Curzon\'s Partition of Bengal took place in which year?', ['1905', '1911', '1919', '1929'], 0, 'Triggered the Swadeshi Movement.'],
    ['easy', 'Which slogan is Bal Gangadhar Tilak famous for?', ['"Swaraj is my birthright and I shall have it"', '"Do or Die"', '"Give me blood, and I shall give you freedom"', '"Quit India"'], 0, 'A leading figure of the "Extremist" nationalist wing.'],
    ['easy', 'Gandhi first tested Satyagraha in India at which movement (1917)?', ['Champaran', 'Non-Cooperation Movement', 'Civil Disobedience Movement', 'Quit India Movement'], 0, 'Against indigo planters in Bihar.'],
    ['medium', 'The Indian National Congress split into Moderates and Extremists at which 1907 session?', ['Surat Session', 'Lucknow Session', 'Lahore Session', 'Calcutta Session'], 0, 'The two factions reunited only at the 1916 Lucknow Pact.'],
    ['medium', 'The Non-Cooperation Movement (1920-22) was called off by Gandhi after which incident?', ['Chauri Chaura', 'Jallianwala Bagh', 'Dandi March', 'Quit India resolution'], 0, 'A violent mob clash that contradicted the movement\'s non-violent principle.'],
    ['medium', 'The Civil Disobedience Movement began with which event?', ['The Dandi Salt March', 'The Champaran Satyagraha', 'The Chauri Chaura incident', 'The Simon Commission boycott'], 0, 'Gandhi\'s 240-mile walk to the sea to illegally produce salt.'],
    ['medium', 'The Quit India Movement (1942) was launched with which call from Gandhi?', ['"Do or Die"', '"Swaraj is my birthright"', '"Inquilab Zindabad"', '"Give me blood, and I shall give you freedom"'], 0, 'Demanded immediate British withdrawal.'],
    ['medium', 'Bhagat Singh, Rajguru and Sukhdev were associated with which revolutionary organisation?', ['Hindustan Socialist Republican Association (HSRA)', 'Indian National Army', 'Ghadar Party', 'Anushilan Samiti'], 0, 'Executed in 1931.'],
    ['medium', 'Subhas Chandra Bose formed the Indian National Army (INA) with the support of which country during WWII?', ['Japan', 'Germany', 'The Soviet Union', 'Italy'], 0, 'Also known as the Azad Hind Fauj.'],
    ['medium', 'The Simon Commission (1927) was widely protested primarily because', ['It had no Indian members', 'It proposed full independence too quickly', 'It recommended Partition', 'It was formed after the Quit India Movement'], 0, 'Met with "Simon Go Back" protests.'],
    ['medium', 'The Cripps Mission (1942), rejected by Congress as inadequate, offered', ['Limited post-war dominion status', 'Immediate full independence', 'A federal structure with princely states', 'Partition of India'], 0, 'Its failure directly preceded the Quit India Movement.'],
    ['hard', 'Consider the following statements:\n1. The Muslim League was founded in 1906.\n2. The Lucknow Pact of 1916 reunited the Moderate and Extremist factions of the Congress.\nWhich of the statements is/are correct?', ST, 2, 'Both statements are correct.', true],
    ['hard', 'Which of the following correctly sequences these events chronologically?\n1. Cabinet Mission Plan\n2. Simon Commission\n3. Quit India Movement\n4. Round Table Conferences', ['2 – 4 – 3 – 1', '1 – 2 – 3 – 4', '3 – 2 – 1 – 4', '2 – 3 – 4 – 1'], 0, 'Simon Commission (1927) → Round Table Conferences (1930-32) → Quit India (1942) → Cabinet Mission Plan (1946).', true],
    ['hard', 'India\'s independence, along with the partition into India and Pakistan, was formalised under which act?', ['The Indian Independence Act, 1947', 'The Government of India Act, 1935', 'The Government of India Act, 1919', 'The Indian Councils Act, 1909'], 0, 'Overseen by the last Viceroy, Lord Mountbatten.']
  ],

  'Art & Culture': [
    ['easy', 'Bharatanatyam, one of India\'s eight classical dance forms, originated in which state?', ['Tamil Nadu', 'Kerala', 'Odisha', 'Andhra Pradesh'], 0, 'One of the most widely practised classical dance forms.'],
    ['easy', 'Kathakali, known for elaborate face makeup and dance-drama, is associated with which state?', ['Kerala', 'Tamil Nadu', 'Manipur', 'Assam'], 0, 'Enacts stories from Hindu epics.'],
    ['easy', 'Which classical dance form is associated with Manipur?', ['Manipuri', 'Odissi', 'Kuchipudi', 'Sattriya'], 0, 'Associated with Krishna-Radha themes.'],
    ['medium', 'Which classical dance form was most recently given classical status, in 2000?', ['Sattriya', 'Kathak', 'Odissi', 'Bharatanatyam'], 0, 'Associated with Assam\'s Vaishnavite sattras, founded by Srimanta Sankardev.'],
    ['medium', 'Which Kerala dance form is a solo, graceful form sometimes called the "dance of the enchantress"?', ['Mohiniyattam', 'Kathakali', 'Bharatanatyam', 'Kuchipudi'], 0, 'Kerala has two classical dance forms — this and Kathakali.'],
    ['medium', 'The Nagara style of temple architecture, found across North India, is characterised by', ['A curvilinear shikhara rising directly over the sanctum', 'A stepped, pyramidal vimana with gopurams', 'Minarets and domes', 'A hybrid blend unique to Karnataka'], 0, 'Seen at sites like Khajuraho and Konark.'],
    ['medium', 'The Dravida style of temple architecture, found in South India, is typically enclosed within elaborate gateway towers called', ['Gopurams', 'Shikharas', 'Minarets', 'Stupas'], 0, 'The Brihadeeswarar Temple at Thanjavur is a classic example.'],
    ['medium', 'The Vesara (hybrid) style of temple architecture, blending Nagara and Dravida elements, is particularly associated with which region?', ['Karnataka (Hoysala temples)', 'Tamil Nadu', 'Odisha', 'Rajasthan'], 0, 'Seen at Belur and Halebidu.'],
    ['medium', 'Hindustani classical music, associated with North India, shows significant historical influence from which musical tradition?', ['Persian and Central Asian traditions', 'Ancient Sanskrit treatises exclusively', 'European classical music', 'Southeast Asian music'], 0, 'Particularly through the Mughal courts.'],
    ['hard', 'Consider the following statements:\n1. Kerala has two classical dance forms: Kathakali and Mohiniyattam.\n2. The Sangeet Natak Akademi is the body responsible for conferring official classical-dance status.\nWhich of the statements is/are correct?', ST, 2, 'Both statements are correct.', true],
    ['hard', 'Which classical dance form is associated with Andhra Pradesh?', ['Kuchipudi', 'Odissi', 'Sattriya', 'Manipuri'], 0, 'One of the eight recognised classical dance forms.']
  ],

  'World History (Basics)': [
    ['easy', 'The Renaissance, marking a revival of classical learning and art, began in which country?', ['Italy', 'France', 'Germany', 'England'], 0, 'Roughly the 14th to 17th century.'],
    ['easy', 'The Industrial Revolution began in which country in the mid-18th century?', ['Britain', 'France', 'Germany', 'The United States'], 0, 'The steam engine is its most iconic technology.'],
    ['easy', 'The French Revolution (1789-99) is associated with which famous slogan?', ['Liberty, Equality, Fraternity', 'Do or Die', 'Swaraj is my birthright', 'Workers of the world, unite'], 0, 'A foundational moment for modern citizenship and republicanism.'],
    ['medium', 'World War I was triggered by the assassination of which figure?', ['Archduke Franz Ferdinand of Austria-Hungary', 'Tsar Nicholas II', 'Kaiser Wilhelm II', 'King George V'], 0, 'Assassinated at Sarajevo in 1914.'],
    ['medium', 'The Treaty of Versailles (1919), which ended WWI, is widely cited as a contributing cause of which later event?', ['World War II', 'The Russian Revolution', 'The Cold War', 'The Industrial Revolution'], 0, 'Its harsh reparations terms fuelled resentment in Germany.'],
    ['medium', 'The October Revolution of 1917, led by Vladimir Lenin, established which form of government in Russia?', ['A communist state, led by the Bolshevik Party', 'A constitutional monarchy', 'A democratic republic', 'A military dictatorship allied with Germany'], 0, 'The world\'s first communist state.'],
    ['medium', 'The USA formally entered World War II after which event?', ['The Japanese attack on Pearl Harbor', 'The invasion of Poland', 'The fall of France', 'The Treaty of Versailles'], 0, 'In December 1941.'],
    ['medium', 'The United Nations was formed in which year, succeeding the failed League of Nations?', ['1945', '1919', '1939', '1950'], 0, 'Established after World War II.'],
    ['medium', 'The Non-Aligned Movement, positioning newly independent nations as unaligned with either Cold War bloc, was co-founded by which Indian leader?', ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Sardar Patel', 'Dr. Rajendra Prasad'], 0, 'Along with leaders like Yugoslavia\'s Tito and Egypt\'s Nasser.'],
    ['hard', 'Consider the following statements:\n1. The Cold War involved direct large-scale military conflict between the USA and the USSR.\n2. The Cold War formally ended with the dissolution of the Soviet Union in 1991.\nWhich of the statements is/are correct?', ST, 1, 'The Cold War rivalry played out through proxy wars and an arms race, not direct military conflict between the two superpowers.', true],
    ['hard', 'The American Declaration of Independence (1776) was principally drafted by', ['Thomas Jefferson', 'George Washington', 'Benjamin Franklin', 'Abraham Lincoln'], 0, 'Formalised the American colonies\' break from Britain.']
  ]
};

export const historyBank = Object.entries(rows).flatMap(([topic, list]) =>
  list.map(([difficulty, q, options, answer, explanation, fixed]) => ({
    subject: S, topic, difficulty, q, options, answer, explanation, fixed: Boolean(fixed)
  }))
);
