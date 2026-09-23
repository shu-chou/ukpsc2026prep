const SRC = 'A curated, high-yield selection covering the standard prelims-level static computer/IT GK syllabus, compiled from standard competitive-exam material. Fast-changing specifics (latest software versions, most recent cyberattack incidents) are avoided in favour of durable, conceptual and historically-settled facts — verify anything genuinely current against a recent source.';

const p = (heading, type, ...paragraphs) => ({ heading, type, paragraphs });
const s = (heading, type, ...bullets) => ({ heading, type, bullets });

export const computerTopics = {
  'Computer Basics & Hardware': {
    priority: 'MUST KNOW', title: 'Computer Basics & Hardware',
    summary: 'The CPU as the computer\'s "brain," the distinction between RAM (volatile) and ROM (non-volatile) memory, and input/output device classification form the foundational hardware vocabulary tested in this topic.',
    sections: [
      p('1. The CPU and its core components', 'must',
        'The Central Processing Unit (CPU), often called the "brain of the computer," executes instructions and performs calculations, and is conventionally understood through two core components: the Arithmetic Logic Unit (ALU), which performs mathematical and logical operations, and the Control Unit (CU), which directs and coordinates the operations of the entire computer system, fetching and interpreting instructions — this ALU + CU breakdown of "what the CPU actually consists of" is a frequently tested structural fact beyond simply knowing the CPU\'s overall role.'),
      p('2. RAM vs. ROM: the memory distinction', 'must',
        'Random Access Memory (RAM) is volatile memory — it temporarily stores data the computer is actively using, and is erased when power is turned off — and its capacity directly affects how many programs/processes a computer can run smoothly at once. Read-Only Memory (ROM) is non-volatile memory — it retains data even without power, typically storing essential startup instructions (firmware) that don\'t change during normal operation — this volatile-vs-non-volatile distinction, and correctly identifying which type of memory is erased on power-off, is one of the most reliably tested computer-basics facts.'),
      p('3. Input and output devices', 'understand',
        'Input devices allow a user to feed data/commands into a computer (keyboard, mouse, scanner, microphone), while Output devices allow the computer to present processed results to the user (monitor, printer, speaker) — a small number of devices function as BOTH input and output (a touchscreen, for instance, both displays output and accepts touch-based input), a nuance occasionally tested as an exception to the simple input/output binary.'),
      s('4. What to memorize', 'must',
        'CPU = ALU (arithmetic/logic operations) + Control Unit (coordinates/directs operations)',
        'RAM = volatile (erased on power-off), stores active-use data; ROM = non-volatile (retains data without power), stores firmware/startup instructions',
        'Input devices: keyboard, mouse, scanner, microphone; Output devices: monitor, printer, speaker; Touchscreen = both input AND output'),
      s('5. Exam traps', 'trap',
        'RAM is volatile (data lost on power-off); ROM is non-volatile (data retained) — a frequently reversed pairing.',
        'A touchscreen functions as BOTH an input and output device — a commonly missed exception to the simple input/output classification.'),
      s('6. 30-second revision', 'revision',
        'CPU=ALU+Control Unit. RAM=volatile(erased on power-off). ROM=non-volatile(retains data, firmware). Input=keyboard/mouse/scanner/mic. Output=monitor/printer/speaker. Touchscreen=both.')
    ],
    sourceNote: SRC
  },

  'Software & Operating Systems': {
    priority: 'MUST KNOW', title: 'Software & Operating Systems',
    summary: 'System software (operating systems, managing hardware) versus application software (user-facing programs), and the open-source versus proprietary software distinction, are the core conceptual frameworks tested in this topic.',
    sections: [
      p('1. System software vs. application software', 'must',
        'System software manages a computer\'s hardware and provides a platform for other software to run — the Operating System (OS) is the primary example, managing memory, processes, file systems and hardware peripherals, acting as an intermediary between hardware and the user/applications (Windows, macOS, Linux and Android are common examples). Application software, by contrast, performs specific user-facing tasks — word processors, web browsers, spreadsheet programs, games — and generally runs ON TOP OF an operating system rather than managing the hardware directly; this system-vs-application distinction, and correctly classifying a given piece of software into one category, is a fundamental and frequently tested framework.'),
      p('2. Open-source vs. proprietary software', 'must',
        'Open-source software has its source code publicly available, allowing anyone to view, modify and distribute it (subject to the specific open-source licence terms) — Linux (an operating system) is the standard textbook example of open-source software. Proprietary software has restricted, closed source code, typically owned and controlled by a company that sells or licenses it without allowing modification — Microsoft Windows is the standard textbook example of proprietary software — this open-source-vs-proprietary contrast, with Linux and Windows as the paired standard examples, is a frequently tested comparison.'),
      p('3. Common operating system concepts', 'understand',
        'Multitasking refers to an operating system\'s ability to run multiple programs/processes seemingly simultaneously (by rapidly switching between them, in most single-processor systems), while a Graphical User Interface (GUI) allows users to interact with a computer through visual elements (icons, windows, menus) rather than typing text commands into a Command Line Interface (CLI) — the CLI-vs-GUI distinction reflects two fundamentally different ways of interacting with the same underlying operating system functionality.'),
      s('4. What to memorize', 'must',
        'System software (manages hardware, e.g. OS: Windows/macOS/Linux/Android) vs. Application software (user tasks, e.g. word processor, browser)',
        'Open-source (publicly available code) = Linux; Proprietary (closed, owned code) = Windows',
        'GUI (visual, icons/windows/menus) vs. CLI (text-based commands)'),
      s('5. Exam traps', 'trap',
        'Linux is the standard open-source example; Windows is the standard proprietary example — a frequently tested paired contrast.',
        'Application software runs ON TOP OF an operating system rather than directly managing hardware — a key hierarchical distinction from system software.'),
      s('6. 30-second revision', 'revision',
        'System software=manages hardware(OS: Windows/macOS/Linux/Android). Application software=user tasks(browser, word processor). Open-source=Linux. Proprietary=Windows. GUI=visual; CLI=text commands.')
    ],
    sourceNote: SRC
  },

  'Internet & Networking': {
    priority: 'MUST KNOW', title: 'Internet & Networking',
    summary: 'IP addresses, the client-server model, and common networking protocols (HTTP/HTTPS, FTP, TCP/IP) form the standard vocabulary for this topic, alongside the LAN-vs-WAN network-size distinction.',
    sections: [
      p('1. IP addresses and the client-server model', 'must',
        'An IP (Internet Protocol) address is a unique numerical identifier assigned to every device connected to a network, enabling devices to locate and communicate with each other — IPv4 (the older, more widely deployed format, using four numbers separated by dots) is gradually being supplemented by IPv6 (a newer format designed to accommodate the much larger number of internet-connected devices than IPv4\'s address space allows). The Client-Server model describes how most internet services work: a Client (a user\'s device/browser) sends a request to a Server (a remote computer hosting the requested resource/website/data), which processes the request and sends back a response — this basic request-response structure underlies virtually all web browsing, email and most internet-based applications.'),
      p('2. Common networking protocols', 'must',
        'HTTP (HyperText Transfer Protocol) is the foundational protocol for transferring web pages between a server and a browser; HTTPS is its secure, encrypted version (the "S" for Secure), now the standard for virtually all reputable websites, particularly anything involving sensitive data like passwords or payment information — the padlock icon in a browser\'s address bar typically indicates an active HTTPS connection. FTP (File Transfer Protocol) is used specifically for transferring files between computers over a network. TCP/IP (Transmission Control Protocol/Internet Protocol) is the foundational suite of protocols underlying how data is broken into packets, transmitted, and reassembled correctly across the internet — often described as the internet\'s core "language."'),
      p('3. Network types: LAN, WAN and others', 'understand',
        'A Local Area Network (LAN) connects devices within a limited, small physical area (a single building or office); a Wide Area Network (WAN) connects devices across much larger geographic distances (potentially spanning countries or continents), with the internet itself being the largest example of a WAN; a Metropolitan Area Network (MAN) sits between the two in scale, typically covering a city — this size-based LAN < MAN < WAN hierarchy is a standard, frequently tested networking classification.'),
      s('4. What to memorize', 'must',
        'IP address = unique device identifier; IPv4 (older) vs IPv6 (newer, larger address space)',
        'Client-Server model = client requests, server responds',
        'HTTP = web page transfer; HTTPS = secure/encrypted HTTP; FTP = file transfer; TCP/IP = core internet data-transmission protocol suite',
        'LAN (small area) < MAN (city-scale) < WAN (large/global, e.g. the internet)'),
      s('5. Exam traps', 'trap',
        'HTTPS is the SECURE, encrypted version of HTTP, not a separate/unrelated protocol — the "S" specifically stands for Secure.',
        'The internet itself is the largest and most well-known example of a WAN, not a LAN or MAN.'),
      s('6. 30-second revision', 'revision',
        'IP address=unique ID (IPv4 vs IPv6). Client-Server=request-response. HTTP=web pages; HTTPS=secure HTTP; FTP=file transfer; TCP/IP=core protocol suite. LAN<MAN<WAN(internet).')
    ],
    sourceNote: SRC
  },

  'Cyber Security': {
    priority: 'MUST KNOW', title: 'Cyber Security',
    summary: 'Malware classification (virus, worm, trojan, ransomware), phishing as a social-engineering attack, and India\'s IT Act, 2000 as the legal framework anchor this consistently exam-relevant topic.',
    sections: [
      p('1. Malware types', 'must',
        'Malware (malicious software) covers several distinct categories worth distinguishing precisely: a Virus attaches itself to a legitimate program/file and spreads when that infected file is executed or shared, requiring some human action to propagate; a Worm is self-replicating and spreads across networks WITHOUT needing to attach to another program or requiring user action, making it capable of spreading much faster than a virus; a Trojan (Trojan Horse) disguises itself as legitimate, useful software to trick users into installing it, but does not self-replicate the way viruses or worms do; and Ransomware encrypts a victim\'s files/data and demands payment (a ransom) for the decryption key — this virus-vs-worm-vs-trojan-vs-ransomware distinction, particularly the virus-needs-a-host-file vs. worm-self-replicates-independently contrast, is the single most frequently tested cyber security concept.'),
      p('2. Phishing and social engineering', 'must',
        'Phishing is a social-engineering attack where an attacker impersonates a trustworthy entity (a bank, a well-known company, a colleague) — typically via email, text message or a fake website — to trick a victim into revealing sensitive information (passwords, bank details) or clicking a malicious link; unlike malware, which relies primarily on technical exploitation, phishing relies primarily on psychological manipulation/deception of the human user, making user awareness (rather than purely technical defences) a key mitigation strategy.'),
      p('3. India\'s cyber security legal framework', 'understand',
        'The Information Technology Act, 2000 (amended significantly in 2008) is India\'s primary legislation governing cyber crime, electronic commerce and digital signatures, providing the legal basis for prosecuting offences like hacking, data theft and cyber fraud — CERT-In (Indian Computer Emergency Response Team), operating under the Ministry of Electronics and Information Technology, is India\'s national nodal agency for responding to cyber security incidents and issuing security advisories.'),
      s('4. What to memorize', 'must',
        'Virus = attaches to a file, needs user action to spread; Worm = self-replicating, spreads across networks independently (no host file needed)',
        'Trojan = disguises as legitimate software, does NOT self-replicate; Ransomware = encrypts files, demands payment',
        'Phishing = social engineering (deception), not primarily technical exploitation',
        'IT Act, 2000 (amended 2008) = India\'s cyber law framework; CERT-In = national cyber incident response agency'),
      s('5. Exam traps', 'trap',
        'A worm spreads independently across networks WITHOUT needing to attach to a file, unlike a virus, which requires a host file and typically some user action — a frequently tested distinguishing detail.',
        'A Trojan does NOT self-replicate, unlike viruses and worms — its defining feature is disguise/deception to gain installation, not propagation mechanics.'),
      s('6. 30-second revision', 'revision',
        'Virus=needs host file+user action. Worm=self-replicating, independent spread. Trojan=disguised, no self-replication. Ransomware=encrypts+demands payment. Phishing=social engineering/deception. IT Act 2000(amended 2008)=India\'s cyber law. CERT-In=incident response agency.')
    ],
    sourceNote: SRC
  },

  'Emerging Technologies': {
    priority: 'IMPORTANT', title: 'Emerging Technologies',
    summary: 'Artificial Intelligence, blockchain, cloud computing and the Internet of Things (IoT) are the four emerging technology concepts most consistently tested, each worth knowing by core definition rather than implementation detail.',
    sections: [
      p('1. Artificial Intelligence and Machine Learning', 'must',
        'Artificial Intelligence (AI) is the broad field of building computer systems that can perform tasks normally requiring human intelligence (reasoning, learning, problem-solving, language understanding). Machine Learning (ML) is a SUBSET of AI specifically focused on systems that improve their performance on a task by learning from data, without being explicitly programmed with step-by-step rules for every scenario — this AI-is-the-broader-field, ML-is-a-subset-technique relationship (not two separate, unrelated fields) is a frequently tested conceptual distinction. Deep Learning is, in turn, a further subset of Machine Learning using multi-layered neural networks, particularly effective for complex pattern recognition tasks like image and speech recognition.'),
      p('2. Blockchain', 'must',
        'Blockchain is a distributed, decentralised digital ledger technology that records transactions across many computers in a way that makes retroactively altering any single record very difficult without changing all subsequent records across the entire network — this tamper-resistance through decentralisation (rather than relying on a single central authority to maintain and secure the record) is blockchain\'s defining conceptual feature. Cryptocurrency (Bitcoin being the original and best-known example) is the most widely known APPLICATION of blockchain technology, but blockchain itself has broader potential applications (supply chain tracking, land records, voting systems) beyond cryptocurrency specifically — a distinction worth remembering, since blockchain and cryptocurrency are frequently but incorrectly treated as synonymous.'),
      p('3. Cloud computing and the Internet of Things (IoT)', 'must',
        'Cloud Computing refers to delivering computing services (storage, processing power, software) over the internet ("the cloud") from remote servers, rather than relying on local hardware/infrastructure — common service models include SaaS (Software as a Service, e.g. web-based email), PaaS (Platform as a Service, a development platform) and IaaS (Infrastructure as a Service, raw computing/storage resources). The Internet of Things (IoT) refers to the network of everyday physical devices (appliances, vehicles, sensors) embedded with the ability to connect to the internet and exchange data — smart home devices (smart thermostats, smart security cameras) are the most familiar consumer-facing example of IoT in practice.'),
      s('4. What to memorize', 'must',
        'AI = broad field; Machine Learning = subset of AI (learns from data); Deep Learning = subset of ML (neural networks)',
        'Blockchain = decentralised, tamper-resistant digital ledger; Cryptocurrency (Bitcoin) = an APPLICATION of blockchain, not the same thing as blockchain itself',
        'Cloud Computing = remote computing services via the internet (SaaS/PaaS/IaaS models)',
        'IoT = everyday physical devices connected to the internet, exchanging data (e.g. smart home devices)'),
      s('5. Exam traps', 'trap',
        'Machine Learning is a SUBSET of AI, not a separate/parallel field — and Deep Learning is in turn a subset of Machine Learning, forming a nested AI > ML > Deep Learning hierarchy.',
        'Blockchain and cryptocurrency are NOT the same thing — cryptocurrency is merely the best-known application built on blockchain technology, which has other uses too.'),
      s('6. 30-second revision', 'revision',
        'AI > Machine Learning > Deep Learning (nested subsets). Blockchain=decentralised ledger; crypto=an application of it, not the same thing. Cloud computing=remote services(SaaS/PaaS/IaaS). IoT=connected physical devices(smart home).')
    ],
    sourceNote: SRC
  },

  'Digital India': {
    priority: 'IMPORTANT', title: 'Digital India',
    summary: 'Digital India (launched 2015) is the umbrella government programme encompassing Aadhaar-based digital identity, UPI-based digital payments, and DigiLocker/e-governance services — each worth knowing as a distinct component under the broader initiative.',
    sections: [
      p('1. Digital India: the umbrella programme', 'must',
        'Digital India, launched in 2015, is the Government of India\'s flagship umbrella programme to transform India into a digitally empowered society and knowledge economy, built around three broad vision areas: digital infrastructure as a core utility for every citizen, governance and services delivered on demand (digitally), and digital empowerment of citizens — a wide range of specific initiatives (Aadhaar, UPI, DigiLocker and others, covered individually below) operate under this broader umbrella rather than being independent, unrelated schemes.'),
      p('2. Aadhaar: digital identity', 'must',
        'Aadhaar, administered by the Unique Identification Authority of India (UIDAI), is a 12-digit unique identity number issued to Indian residents based on biometric (fingerprint, iris scan) and demographic data, functioning as India\'s foundational digital identity system, used to authenticate identity for accessing a wide range of government and private services (banking, welfare scheme delivery, SIM card registration, and more) — its use as an identity-verification layer underlying many other Digital India services is why Aadhaar is often described as foundational infrastructure rather than merely one scheme among many.'),
      p('3. UPI and digital payments', 'must',
        'Unified Payments Interface (UPI), developed by the National Payments Corporation of India (NPCI), is a real-time payment system enabling instant bank-to-bank money transfers through a mobile application, using a simple identifier (a UPI ID/virtual payment address) rather than requiring full bank account and IFSC code details for every transaction — UPI has become India\'s dominant digital payment mechanism by transaction volume, a globally cited example of successful large-scale digital payment infrastructure, and is frequently referenced internationally as a model other countries have studied or sought to replicate.'),
      p('4. DigiLocker and e-governance services', 'understand',
        'DigiLocker is a digital document storage and verification platform allowing citizens to store and share official documents (educational certificates, driving licences, vehicle registration) in a verified digital format, reducing dependence on physical document copies for many official purposes. Beyond these headline initiatives, Digital India also encompasses broader e-governance service delivery (digitising government service applications and processes to reduce in-person bureaucratic friction) and digital literacy programmes aimed at expanding basic digital skills, particularly in rural areas — the overall thrust connecting Aadhaar, UPI, DigiLocker and e-governance being a shift toward paperless, presence-less and cashless government service delivery.'),
      s('5. What to memorize', 'must',
        'Digital India = launched 2015, umbrella programme (infrastructure + on-demand governance + digital empowerment)',
        'Aadhaar = UIDAI, 12-digit biometric-based digital identity, foundational to many other services',
        'UPI = NPCI, real-time bank-to-bank mobile payments, India\'s dominant digital payment mechanism',
        'DigiLocker = digital document storage/verification platform'),
      s('6. Exam traps', 'trap',
        'Aadhaar (UIDAI) and UPI (NPCI) are administered by different bodies — a frequently tested institutional-attribution detail.',
        'Digital India (2015) is the umbrella programme; Aadhaar, UPI and DigiLocker are individual components/initiatives under it, not separate unrelated schemes.'),
      s('7. 30-second revision', 'revision',
        'Digital India=2015, umbrella programme. Aadhaar=UIDAI, biometric ID. UPI=NPCI, real-time payments. DigiLocker=digital document storage. Overall thrust=paperless/presence-less/cashless governance.')
    ],
    sourceNote: SRC
  }
};
