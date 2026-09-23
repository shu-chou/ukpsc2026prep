const S = 'computer';
const ST = ['1 only', '2 only', 'Both 1 and 2', 'Neither 1 nor 2'];

// [difficulty, question, options, answerIndex, explanation, fixedOptionOrder?]
const rows = {
  'Computer Basics & Hardware': [
    ['easy', 'Which component is often called the "brain of the computer"?', ['CPU (Central Processing Unit)', 'RAM', 'Monitor', 'Hard disk'], 0, 'Executes instructions and performs calculations.'],
    ['easy', 'Which type of memory is erased when a computer\'s power is turned off?', ['RAM', 'ROM', 'Hard disk storage', 'None of these'], 0, 'RAM is volatile memory.'],
    ['easy', 'Which of the following is an example of an input device?', ['Keyboard', 'Monitor', 'Printer', 'Speaker'], 0, 'Allows a user to feed data/commands into a computer.'],
    ['medium', 'The CPU consists of which two core components?', ['Arithmetic Logic Unit (ALU) and Control Unit (CU)', 'RAM and ROM', 'Monitor and Keyboard', 'Hard disk and SSD'], 0, 'ALU performs calculations; CU coordinates operations.'],
    ['medium', 'ROM (Read-Only Memory) is best described as', ['Non-volatile memory that retains data even without power', 'Volatile memory erased on power-off', 'A type of input device', 'A type of output device only'], 0, 'Typically stores firmware/startup instructions.'],
    ['medium', 'Which device functions as BOTH an input and an output device?', ['Touchscreen', 'Keyboard', 'Printer', 'Scanner'], 0, 'Displays output and accepts touch-based input.'],
    ['hard', 'Consider the following statements:\n1. RAM is non-volatile memory.\n2. The Control Unit performs mathematical and logical operations.\nWhich of the statements is/are correct?', ST, 3, 'RAM is volatile, not non-volatile; the ALU, not the Control Unit, performs mathematical/logical operations.', true]
  ],

  'Software & Operating Systems': [
    ['easy', 'Which of the following is an example of system software?', ['Operating System', 'Word processor', 'Web browser', 'Spreadsheet program'], 0, 'Manages a computer\'s hardware and provides a platform for other software.'],
    ['easy', 'Which of the following is the standard textbook example of open-source software?', ['Linux', 'Microsoft Windows', 'Adobe Photoshop', 'Microsoft Office'], 0, 'Its source code is publicly available for viewing and modification.'],
    ['easy', 'Which of the following is the standard textbook example of proprietary software?', ['Microsoft Windows', 'Linux', 'Firefox', 'WordPress'], 0, 'Owned and controlled by a company, with restricted/closed source code.'],
    ['medium', 'Application software, unlike system software, primarily', ['Performs specific user-facing tasks, running on top of an operating system', 'Directly manages computer hardware', 'Cannot run without being open-source', 'Is always free of cost'], 0, 'Word processors, browsers and games are examples.'],
    ['medium', 'A Graphical User Interface (GUI) allows users to interact with a computer through', ['Visual elements like icons, windows and menus', 'Text-based commands only', 'Voice commands exclusively', 'Physical switches only'], 0, 'Contrasted with a Command Line Interface (CLI).'],
    ['medium', 'Multitasking in an operating system refers to its ability to', ['Run multiple programs/processes seemingly simultaneously', 'Run only one program at a time', 'Prevent any software installation', 'Automatically delete unused files'], 0, 'Achieved by rapidly switching between processes in most single-processor systems.'],
    ['hard', 'Consider the following statements:\n1. Application software directly manages a computer\'s hardware.\n2. A Command Line Interface (CLI) uses text-based commands rather than visual elements.\nWhich of the statements is/are correct?', ST, 1, 'System software, not application software, manages hardware directly; application software runs on top of the operating system.', true]
  ],

  'Internet & Networking': [
    ['easy', 'What does an IP address uniquely identify?', ['A device connected to a network', 'A specific file on a computer', 'A software application', 'A type of malware'], 0, 'Enables devices to locate and communicate with each other.'],
    ['easy', 'Which protocol is the secure, encrypted version of HTTP?', ['HTTPS', 'FTP', 'TCP/IP', 'SMTP'], 0, 'The "S" stands for Secure.'],
    ['easy', 'Which network type is the internet itself the largest example of?', ['Wide Area Network (WAN)', 'Local Area Network (LAN)', 'Metropolitan Area Network (MAN)', 'Personal Area Network (PAN)'], 0, 'Connects devices across large geographic distances.'],
    ['medium', 'In the client-server model, which entity sends a request for a resource?', ['The client', 'The server', 'Both simultaneously initiate requests', 'Neither; requests are automatic'], 0, 'The server processes the request and sends back a response.'],
    ['medium', 'Which protocol is used specifically for transferring files between computers over a network?', ['FTP (File Transfer Protocol)', 'HTTP', 'HTTPS', 'TCP/IP alone'], 0, 'Distinct from HTTP, which is for web pages.'],
    ['medium', 'A Local Area Network (LAN) typically connects devices within', ['A limited, small physical area like a single building or office', 'An entire country', 'Multiple continents', 'The entire internet'], 0, 'Smaller in scale than a WAN or MAN.'],
    ['hard', 'Consider the following statements:\n1. IPv6 was developed to accommodate a much larger number of internet-connected devices than IPv4 allows.\n2. A Metropolitan Area Network (MAN) is larger in scale than a Wide Area Network (WAN).\nWhich of the statements is/are correct?', ST, 0, 'A MAN is smaller in scale than a WAN, typically covering a city rather than a country or continent.', true]
  ],

  'Cyber Security': [
    ['easy', 'Which type of malware requires attaching itself to a legitimate file to spread, typically needing some user action?', ['Virus', 'Worm', 'Trojan exclusively', 'None of these require user action'], 0, 'Spreads when the infected file is executed or shared.'],
    ['easy', 'Which type of malware is self-replicating and spreads across networks WITHOUT needing to attach to another program?', ['Worm', 'Virus', 'Trojan', 'Adware'], 0, 'Can spread much faster than a virus as a result.'],
    ['easy', 'Ransomware is malicious software that', ['Encrypts a victim\'s files and demands payment for the decryption key', 'Only displays unwanted advertisements', 'Improves a computer\'s performance', 'Only monitors keyboard input without demanding payment'], 0, 'A financially motivated form of cyberattack.'],
    ['medium', 'A Trojan (Trojan Horse) is malware that', ['Disguises itself as legitimate software to trick users into installing it', 'Self-replicates automatically across networks', 'Only affects mobile phones', 'Requires no user interaction whatsoever to spread'], 0, 'Unlike viruses and worms, a Trojan does not self-replicate.'],
    ['medium', 'Phishing attacks primarily rely on which method to deceive victims?', ['Social engineering/psychological manipulation', 'Pure technical exploitation of software bugs', 'Physical theft of hardware', 'Government surveillance'], 0, 'Impersonates a trustworthy entity to trick victims into revealing information.'],
    ['medium', 'India\'s primary legislation governing cyber crime and electronic commerce is the', ['Information Technology Act, 2000', 'Indian Penal Code, 1860', 'Right to Information Act, 2005', 'Companies Act, 2013'], 0, 'Significantly amended in 2008.'],
    ['medium', 'CERT-In, India\'s national nodal agency for cyber security incident response, operates under which ministry?', ['Ministry of Electronics and Information Technology', 'Ministry of Home Affairs', 'Ministry of Defence', 'Ministry of Finance'], 0, 'Issues security advisories and coordinates incident response.'],
    ['hard', 'Consider the following statements:\n1. A worm requires attaching itself to a host file to spread.\n2. A Trojan self-replicates in the same way a virus does.\nWhich of the statements is/are correct?', ST, 3, 'A worm spreads independently without needing a host file, and a Trojan does not self-replicate at all — both statements describe the wrong malware type.', true]
  ],

  'Emerging Technologies': [
    ['easy', 'Machine Learning is best described as', ['A subset of Artificial Intelligence focused on learning from data', 'A completely separate field unrelated to AI', 'A type of computer hardware', 'A synonym for blockchain'], 0, 'Systems improve performance on a task without being explicitly programmed for every scenario.'],
    ['easy', 'Blockchain technology is best described as a', ['Decentralised, tamper-resistant digital ledger', 'Type of computer virus', 'A single centralised database controlled by one company', 'A programming language'], 0, 'Records transactions across many computers.'],
    ['medium', 'Bitcoin, the best-known cryptocurrency, is best understood as', ['An application built on blockchain technology', 'The same thing as blockchain technology itself', 'A type of malware', 'A cloud computing service model'], 0, 'Blockchain has broader applications beyond cryptocurrency alone.'],
    ['medium', 'Cloud computing refers to', ['Delivering computing services like storage and processing power over the internet', 'Only weather-monitoring technology', 'A type of malware protection software', 'Physical hardware installed locally on every device'], 0, 'Common service models include SaaS, PaaS and IaaS.'],
    ['medium', 'The Internet of Things (IoT) refers to', ['Everyday physical devices embedded with internet connectivity to exchange data', 'A social media platform', 'A type of programming language', 'Only industrial robots, not consumer devices'], 0, 'Smart home devices are the most familiar consumer example.'],
    ['medium', 'Deep Learning is best described as', ['A subset of Machine Learning using multi-layered neural networks', 'A synonym for the entire field of Artificial Intelligence', 'A type of cloud computing service', 'Unrelated to Machine Learning'], 0, 'Particularly effective for complex pattern recognition tasks.'],
    ['hard', 'Consider the following statements:\n1. Artificial Intelligence and Machine Learning are two completely separate, unrelated fields.\n2. Deep Learning is a subset of Machine Learning, which is itself a subset of Artificial Intelligence.\nWhich of the statements is/are correct?', ST, 1, 'Machine Learning is a subset of AI, not a separate field — the correct hierarchy is AI > Machine Learning > Deep Learning.', true]
  ],

  'Digital India': [
    ['easy', 'Digital India, the Government of India\'s flagship digital transformation programme, was launched in which year?', ['2015', '2010', '2000', '2020'], 0, 'An umbrella programme encompassing many specific digital initiatives.'],
    ['easy', 'Aadhaar, India\'s foundational digital identity system, is administered by which authority?', ['Unique Identification Authority of India (UIDAI)', 'National Payments Corporation of India (NPCI)', 'Reserve Bank of India', 'Election Commission of India'], 0, 'Based on biometric and demographic data.'],
    ['easy', 'UPI (Unified Payments Interface), India\'s dominant digital payment mechanism, was developed by which body?', ['National Payments Corporation of India (NPCI)', 'UIDAI', 'Reserve Bank of India directly', 'Ministry of Finance'], 0, 'Enables instant bank-to-bank money transfers.'],
    ['medium', 'DigiLocker primarily serves which purpose?', ['Digital storage and verification of official documents', 'Processing UPI payments', 'Issuing Aadhaar numbers', 'Providing internet connectivity to rural areas'], 0, 'Reduces dependence on physical document copies.'],
    ['medium', 'The overall thrust connecting Aadhaar, UPI and DigiLocker under Digital India is best described as a shift toward', ['Paperless, presence-less and cashless government service delivery', 'Increasing physical paperwork requirements', 'Centralising all services in one physical office', 'Eliminating all digital payment options'], 0, 'Reflects the broader Digital India vision.'],
    ['hard', 'Consider the following statements:\n1. Aadhaar and UPI are administered by the same government body.\n2. Aadhaar functions as an identity-verification layer underlying many other Digital India services.\nWhich of the statements is/are correct?', ST, 1, 'Aadhaar is administered by UIDAI, while UPI is developed by NPCI — different bodies.', true]
  ]
};

export const computerBank = Object.entries(rows).flatMap(([topic, list]) =>
  list.map(([difficulty, q, options, answer, explanation, fixed]) => ({
    subject: S, topic, difficulty, q, options, answer, explanation, fixed: Boolean(fixed)
  }))
);
