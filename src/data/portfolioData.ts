export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI/ML' | 'Systems' | 'Research' | 'Application' | 'Institutional';
  featured: boolean;
  status: 'Completed' | 'Research Prototype' | 'Production Deployed';
  duration?: string;
  summary: string;
  problem: string;
  architecture: string[];
  techStack: string[];
  verifiedMetrics: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  diagramType?: 'rag-pipeline' | 'multimodal-flow' | 'sensor-signal' | 'security-sandbox' | 'bilingual-id' | 'ashram-map' | 'quantum-graph';
}

export interface TimelineEntry {
  id: string;
  period: string;
  organization: string;
  departmentOrLab?: string;
  role: string;
  type: 'Education' | 'Research' | 'Engineering' | 'Product';
  location: string;
  keyContributions: string[];
  narrativeSignificance: string;
  verifiedTags: string[];
  isDrdo?: boolean;
}

export interface PublicationOrAward {
  id: string;
  title: string;
  type: 'Conference Publication' | 'Book Chapter' | 'Hackathon Award' | 'Academic Honor' | 'Scholarship';
  venueOrIssuer: string;
  year: string;
  description: string;
  badgeText: string;
  verifiedDetails?: string;
}

export const PERSONAL_INFO = {
  name: 'Soasmi Kohli',
  title: 'AI/ML Practitioner & Software Systems Engineer',
  institution: 'Vivekananda Institute of Professional Studies (VIPS), GGSIPU, Delhi',
  degree: 'B.Tech in Computer Science & Engineering (Artificial Intelligence & Machine Learning)',
  classOf: '2027',
  cgpa: '9.77 / 10.00',
  location: 'New Delhi, India',
  coordinates: '28.6139° N, 77.2090° E',
  email: 'soasmikohli@gmail.com',
  github: 'https://github.com/soasmi',
  linkedin: 'https://www.linkedin.com/in/soasmi-kohli-711476291/',
  phone: '+91 7678668484',
  resumeUrl: '/Resume.pdf',
  manifesto: [
    'I build things at the intersection of intelligence, engineering and curiosity.',
    'Part engineer, part researcher, perpetually curious about what happens when an idea becomes real.',
  ],
  bioParagraphs: [
    'I am an AI/ML and software engineering practitioner focused on bridging mathematical rigor with production reliability. My work traverses research-oriented machine learning, noisy sensor signal processing, applied cybersecurity, and local-first cross-platform applications.',
    'From modeling quantum walk heuristics and analyzing geomagnetic anomalies for GNSS-denied environments at DRDO, to building fully offline document intelligence engines and tamper-resistant student verification networks, I care deeply about building systems that withstand real-world constraints.',
    'I believe good engineering requires intellectual honesty: respecting the data, understanding failure modes, and creating software that serves human needs with elegance and precision.',
  ],
};

export const TIMELINE: TimelineEntry[] = [
  {
    id: 'undergrad-vips',
    period: '2023 – 2027',
    organization: 'Vivekananda Institute of Professional Studies (VIPS), GGSIPU',
    departmentOrLab: 'School of Engineering & Technology',
    role: 'B.Tech, Computer Science & Engineering (AI & ML)',
    type: 'Education',
    location: 'Delhi, India',
    keyContributions: [
      'Reported CGPA of 9.77 across core computer science and AI/ML curricula.',
      'Rigorous academic coursework in Data Structures, Algorithms, Artificial Intelligence, Neural Networks, Database Systems, and Discrete Mathematics.',
      'Active leadership in university technical forums and peer-mentoring groups.',
    ],
    narrativeSignificance: 'The intellectual foundation: developing mathematical rigor, algorithmic thinking, and principled computer science problem solving.',
    verifiedTags: ['AI/ML', 'Algorithms', 'Linear Algebra', 'Systems Architecture', '9.77 CGPA'],
  },
  {
    id: 'foruppo-pm',
    period: 'June 2024 – October 2024',
    organization: 'Foruppo',
    departmentOrLab: 'Product & Engineering',
    role: 'Product Management Intern',
    type: 'Product',
    location: 'Remote',
    keyContributions: [
      'Contributed to product lifecycle through structured Agile sprint workflows, feature scoping, and requirements definition.',
      'Conducted competitive market analysis and translated stakeholder requirements into actionable engineering user stories.',
      'Facilitated cross-functional synchronization between product vision and technical delivery.',
    ],
    narrativeSignificance: 'Early exposure to how software systems are conceived, scoped, and prioritized before code is written.',
    verifiedTags: ['Agile Workflows', 'Feature Scoping', 'Sprint Planning', 'Cross-Functional Strategy'],
  },
  {
    id: 'egreen-quanta',
    period: 'December 2024 – January 2025',
    organization: 'EGREEN Quanta',
    departmentOrLab: 'Quantum Algorithms Research',
    role: 'Software Research Intern',
    type: 'Research',
    location: 'New Delhi, India',
    keyContributions: [
      'Implemented and benchmarked Quantum Walk Optimisation algorithms tailored to vehicle-routing and graph traversal constraints.',
      'Investigated Non-Demolition Measurement techniques to preserve quantum state coherency during intermediate algorithmic evaluation.',
      'Simulated quantum gate circuits and probabilistic computing models in Python using graph-theoretic formulations.',
    ],
    narrativeSignificance: 'First immersion into computational research: exploring where probabilistic quantum heuristics solve combinatorial challenges.',
    verifiedTags: ['Quantum Walk', 'Graph Heuristics', 'Non-Demolition Measurement', 'Python Simulation'],
  },
  {
    id: 'cyberpeace',
    period: 'April 2025 – July 2025',
    organization: 'CyberPeace',
    departmentOrLab: 'Cyber Security & Engineering Division',
    role: 'Cyber Security & Software Engineering Intern',
    type: 'Engineering',
    location: 'New Delhi, India',
    keyContributions: [
      'Engineered a Python-based phishing-detection pipeline achieving verified precision exceeding 99%.',
      'Reduced classification false positives by approximately 45% through robust lexical and structural feature engineering.',
      'Developed modular backend services and REST APIs with FastAPI.',
      'Architected cross-platform Flutter client modules with decoupled components, yielding an estimated 40% improvement in development velocity.',
      'Configured a Docker-based browser sandbox providing strict session isolation for safe analysis of suspicious URLs.',
    ],
    narrativeSignificance: 'Transition from research prototypes to production-grade security systems with tight latency, precision, and isolation constraints.',
    verifiedTags: ['Precision >99%', '45% Fewer False Positives', 'FastAPI', 'Docker Sandbox', 'Flutter'],
  },
  {
    id: 'drdo-sspl',
    period: 'January 2026 – March 2026',
    organization: 'Defence Research & Development Organisation (DRDO)',
    departmentOrLab: 'Solid State Physics Laboratory (SSPL)',
    role: 'AI/ML & Quantum Research Intern',
    type: 'Research',
    location: 'Delhi, India',
    isDrdo: true,
    keyContributions: [
      'Dedicated 3-month research internship analyzing geomagnetic sensor data under high noise and environmental variance.',
      'Developed and evaluated structured data-processing, cleaning, validation, and model-evaluation workflows.',
      'Investigated Convolutional Neural Networks (CNNs) and hybrid machine learning architectures for anomaly characterization.',
      'Supported research associated with quantum-magnetometer-based sensing and GNSS-denied underwater object detection.',
      'Achieved an estimated 80% improvement in simulated detection accuracy through disciplined preprocessing and robust threshold tuning.',
    ],
    narrativeSignificance: 'First DRDO engagement: scientific problem-solving with noisy physical sensor data and non-ideal signal environments.',
    verifiedTags: ['3 Months (Jan–Mar 2026)', 'SSPL Laboratory', 'Geomagnetic Sensors', 'CNN & Hybrid ML', '~80% Sim Accuracy Gain'],
  },
  {
    id: 'drdo-sag',
    period: 'Commencing 1 July 2026 (6 Months)',
    organization: 'Defence Research & Development Organisation (DRDO)',
    departmentOrLab: 'Scientific Analysis Group (SAG)',
    role: 'Paid AI/ML & Software Engineering Intern',
    type: 'Engineering',
    location: 'Delhi, India',
    isDrdo: true,
    keyContributions: [
      'Second, distinct DRDO engagement: paid six-month engineering and research position commencing 1 July 2026.',
      'Advancing computational analysis, data validation workflows, and backend software engineering within SAG.',
      'Building upon rigorous data integrity protocols and high-reliability machine learning systems in defence science.',
    ],
    narrativeSignificance: 'Continued institutional trust: returning to DRDO for an extended 6-month paid tenure within the Scientific Analysis Group.',
    verifiedTags: ['6 Months Paid (Starts 1 July 2026)', 'SAG Laboratory', 'Distinct Second Engagement', 'AI/ML & Software Eng'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'doc-intelligence',
    title: 'Document Intelligence Platform',
    subtitle: 'Local-First Semantic RAG & Structured Report Generator',
    category: 'AI/ML',
    featured: true,
    status: 'Completed',
    summary: 'A fully offline document intelligence system designed to ingest PDFs and DOCX files, extract structural hierarchies, create semantic embeddings, index chunks in FAISS, and synthesize structured analytical reports without external cloud dependencies.',
    problem: 'Enterprise and security-sensitive documents cannot leave local infrastructure. Traditional cloud RAG pipelines leak data and fail under zero-connectivity environments. The challenge was building an end-to-end embedding, vector indexing, retrieval, and synthesis pipeline entirely on consumer desktop hardware with sub-second retrieval latency.',
    architecture: [
      'Desktop Interface: Flutter Desktop client with reactive state and responsive chunk inspection.',
      'Backend Service: Python 3.12 running asynchronous FastAPI with Uvicorn worker management.',
      'Extraction & Ingestion: PyMuPDF and python-docx parsing raw binary documents into structural trees.',
      'Semantic Pipeline: Intelligent sliding-window chunking feeding into SentenceTransformers with BAAI/bge-m3 dense embeddings.',
      'Vector Search & Storage: In-memory FAISS CPU vector index paired with SQLite database for metadata persistence.',
      'Data Integrity: SQLAlchemy ORM and Alembic migrations managing job states, documents, and chunk relationships.',
      'MockLLMBackend: Local synthesis fallback supporting decoupled testing without cloud API keys.',
    ],
    techStack: ['Python 3.12', 'Flutter Desktop', 'FastAPI', 'FAISS CPU', 'BAAI/bge-m3', 'SentenceTransformers', 'SQLite', 'SQLAlchemy', 'Alembic', 'PyMuPDF'],
    verifiedMetrics: [
      '100% Offline Execution (Zero cloud data leakage)',
      'Sub-second semantic vector retrieval with FAISS CPU',
      'Robust schema with Jobs, Documents & Chunks isolation',
      'Production-ready data layer with automated Alembic migrations',
    ],
    githubUrl: 'https://github.com/soasmi/Document-Intelligence-',
    badge: 'Flagship Architecture',
    diagramType: 'rag-pipeline',
  },
  {
    id: 'echosense',
    title: 'EchoSense',
    subtitle: 'Multimodal Tactile & ASL Assistive Communication System',
    category: 'AI/ML',
    featured: true,
    status: 'Completed',
    summary: 'An assistive communication platform integrating speech processing and American Sign Language (ASL) computer-vision recognition into a unified tactile and multimodal pipeline for individuals with sensory impairments.',
    problem: 'Individuals with speech, hearing, or visual impairments frequently face fragmented communication aids that handle only a single modality. EchoSense bridged speech-to-text, computer vision gesture decoding, and tactile feedback into a synchronized two-way communication workflow.',
    architecture: [
      'Computer Vision Gesture Engine: Real-time hand landmark tracking and gesture classification via OpenCV and deep neural representations.',
      'Acoustic Speech Module: Noise-robust speech feature extraction and NLP transcript normalization.',
      'Multimodal Fusion Layer: Synchronizing temporal gesture sequences with speech tokens for disambiguated intent interpretation.',
      'Assistive Feedback: Tactile and visual interface rendering real-time conversational prompts.',
    ],
    techStack: ['Python', 'NLP', 'Computer Vision', 'OpenCV', 'PyTorch', 'Speech Processing', 'XGBoost'],
    verifiedMetrics: [
      'Winner, IEEE Hackathon 2025',
      'Published in IEEE CISES 2025 Conference Proceedings',
      'Unified multimodal pipeline combining ASL vision + vocal acoustic input',
    ],
    githubUrl: 'https://github.com/soasmi/EchoSense',
    badge: 'IEEE Hackathon Winner & Publication',
    diagramType: 'multimodal-flow',
  },
  {
    id: 'geomagnetic-anomaly',
    title: 'Geomagnetic Anomaly Detection',
    subtitle: 'Sensor Signal ML for GNSS-Denied Marine Object Detection',
    category: 'Research',
    featured: true,
    status: 'Research Prototype',
    duration: 'DRDO SSPL (Jan – Mar 2026)',
    summary: 'A signal processing and deep learning pipeline analyzing noisy magnetic sensor streams to detect underwater anomalies in GNSS-denied environments using quantum-magnetometer sensor principles.',
    problem: 'Underwater environments eliminate GPS/GNSS signals. Quantum magnetometers detect minute variations in Earth’s magnetic field caused by submerged ferrous masses, but raw sensor feeds suffer from extreme ambient noise, vessel drift, and geomagnetic fluctuations.',
    architecture: [
      'Noise Suppression & Preprocessing: Bandpass filtering, wavelet baseline drift subtraction, and spatial magnetic gradient computation.',
      'Neural Modeling: Convolutional Neural Network (CNN) architectures trained on synthetic and sensor anomaly profiles to capture spatial-temporal signatures.',
      'Hybrid Machine Learning: Ensemble of deep representations with statistical anomaly detectors for edge-case discernment.',
      'Validation Workflow: Multi-fold simulated benchmark evaluation testing robustness across varying signal-to-noise ratios (SNR).',
    ],
    techStack: ['Python', 'CNNs', 'Hybrid ML', 'Signal Processing', 'NumPy', 'SciPy', 'Quantum Magnetometry Data'],
    verifiedMetrics: [
      '~80% improvement in simulated detection accuracy via structured preprocessing',
      'Robust anomaly discrimination across low signal-to-noise sensor feeds',
      'Researched at DRDO Solid State Physics Laboratory (SSPL)',
    ],
    badge: 'DRDO SSPL Research',
    diagramType: 'sensor-signal',
  },
  {
    id: 'cybersecurity-threats',
    title: 'Cybersecurity Threat Detection',
    subtitle: 'High-Precision Phishing Pipeline & Browser Isolation Sandbox',
    category: 'Systems',
    featured: true,
    status: 'Completed',
    duration: 'CyberPeace (Apr – Jul 2025)',
    summary: 'A resilient phishing classification system paired with a containerized browser sandbox for automated analysis of malicious URLs and threat vectors.',
    problem: 'Security operations centers are inundated with false alarms that fatigue analysts. Modern phishing attacks utilize fast-flux domains, obfuscated scripts, and social engineering. High precision is essential to prevent operational gridlock.',
    architecture: [
      'Feature Extraction: Multi-tier lexical, DNS, SSL/TLS, and DOM structure feature parsers.',
      'Classification Model: Supervised ensemble trained on verified threat feeds with asymmetric penalty for false positives.',
      'API Layer: High-throughput asynchronous FastAPI microservice returning threat classifications and explanation vectors.',
      'Docker Sandbox: Ephemeral Chromium session container with strict network isolation and automatic disposal upon analysis completion.',
    ],
    techStack: ['Python', 'FastAPI', 'Docker', 'Machine Learning', 'Linux Containerization', 'REST APIs'],
    verifiedMetrics: [
      '>99% reported precision on evaluated phishing test sets',
      '~45% reduction in false positives compared to baseline heuristic filters',
      'Zero-residual ephemeral sandbox execution using isolated Docker sessions',
    ],
    badge: 'CyberPeace Engineering',
    diagramType: 'security-sandbox',
  },
  {
    id: 'chaatra-pramaanadhaar',
    title: 'Chaatra PramaanAdhaar',
    subtitle: 'Bilingual Institutional Student Verification & Smart QR ID Engine',
    category: 'Institutional',
    featured: true,
    status: 'Completed',
    summary: 'A full-stack bilingual (Hindi & English) student identity verification, institutional administration, and tamper-evident QR-coded PDF credential issuance platform.',
    problem: 'Educational institutions struggle with credential counterfeiting, chaotic manual admission records, and language barriers in bilingual regions. Paper ID cards lack instant cryptographic verification at campus gates.',
    architecture: [
      'Client Ecosystem: Responsive Flutter Web and Mobile application with role-tailored dashboards for Administrators, Teachers, and Students.',
      'Bilingual Data Model: Native dual-language schema storing student names, academic tracks, and guardian records in both Hindi (छात्र प्रमाणाधार) and English.',
      'Data Management & Bulk Ingestion: CSV batch student importer and photo directory mapper handling thousands of enrollment records.',
      'PDF Generation & Dynamic QR Engine: Deterministic PDF rendering engine compiling printable smart ID cards containing encrypted verification URLs.',
      'Verification Portal: Public Firebase-hosted verification route resolving student credentials upon QR scan with campus guard authorization.',
    ],
    techStack: ['Flutter Web/Mobile', 'Cloud Firestore', 'Firebase Auth', 'Firebase Hosting', 'PDF Generator', 'Dart', 'Riverpod'],
    verifiedMetrics: [
      'Live deployed at chaatra-pramaanadhaar-v1.web.app',
      'Full bilingual dual-script support across all data models and UI views',
      'Deterministic QR verification linking physical printout to cloud record',
      'Role-based access separating administrative audits from instructor view',
    ],
    liveUrl: 'https://chaatra-pramaanadhaar-v1.web.app',
    badge: 'Production Institutional System',
    diagramType: 'bilingual-id',
  },
  {
    id: 'sarva-bhuta-nivasah',
    title: 'Sarva Bhuta Nivasah',
    subtitle: 'Ashram Accommodation & Multi-Building Facility Management',
    category: 'Institutional',
    featured: true,
    status: 'Completed',
    summary: 'A multi-building accommodation management system engineered for ashram hospitality operations, featuring interactive SVG floor plan mapping, booking workflows, and row-level secured auditing.',
    problem: 'Managing occupancy, pilgrim arrivals, donation records, and multi-story room allocations across multiple ashram wings (including Gauri Sadan) manually caused booking collisions and opaque audit histories.',
    architecture: [
      'Spatial UI: Interactive vector SVG floor plan mapping for Gauri Sadan with visual room occupancy states.',
      'Cross-Platform Frontend: Flutter Android and Web client built with Riverpod state management and GoRouter navigation.',
      'Backend & Persistence: Supabase PostgreSQL instance configured with fine-grained Row-Level Security (RLS) policies.',
      'Real-Time Sync: Supabase Realtime websocket subscriptions keeping front-desk staff synchronized across simultaneous check-ins.',
      'Audit Logging: Immutable PostgreSQL triggers tracking every reservation change, check-out, and financial ledger transaction.',
    ],
    techStack: ['Flutter (Android & Web)', 'Supabase', 'PostgreSQL', 'Row-Level Security', 'Riverpod', 'GoRouter', 'SVG Mapping'],
    verifiedMetrics: [
      'Full multi-building support (Gauri Sadan SVG architectural mapping)',
      'Strict database-enforced Row-Level Security on financial & guest records',
      'Real-time multi-device occupancy synchronization',
    ],
    badge: 'Operational Facility System',
    diagramType: 'ashram-map',
  },
  {
    id: 'annam-brahm',
    title: 'Annam-Brahm (अन्नं ब्रह्म)',
    subtitle: 'Offline-First Hindu Panchang & Bhandara Event Management',
    category: 'Application',
    featured: false,
    status: 'Completed',
    summary: 'An offline-first Flutter application designed for organizing sacred Bhandara and community Prasad gatherings, incorporating astronomical Hindu Panchang computations, volunteer checklists, and spiritual minimalism.',
    problem: 'Community meal seva events often occur in pilgrimage sites and temple grounds with spotty or nonexistent mobile connectivity. Planning requires precise lunar calendar (Tithi/Panchang) timing and recipe portion estimation.',
    architecture: [
      'Local-First Storage: Hive embedded NoSQL database ensuring full offline autonomy without network dependencies.',
      'Astronomical Service: Local Panchang computation service evaluating lunar phases and auspicious Muhurta windows.',
      'Event Workflow: Multi-step meal planning, portion calculators, and real-time seva checklists.',
      'Aesthetic Design: Spiritual minimalism favoring calm whitespace, traditional typography, and bilingual localization.',
    ],
    techStack: ['Flutter', 'Riverpod', 'Hive NoSQL', 'Panchang Calculations', 'table_calendar', 'SharedPreferences'],
    verifiedMetrics: [
      '100% offline operable with zero latency',
      'Embedded Hindu astronomical calendar integration',
      'Dedicated Hindi & English bilingual UI support',
    ],
    githubUrl: 'https://github.com/soasmi/Annam-Brahm',
    badge: 'Spiritual Minimalism',
  },
  {
    id: 'community-crm',
    title: 'CommUnity: WhatsApp Relationship Engine',
    subtitle: 'Decoupled Messaging Infrastructure & Contact Relationship Manager',
    category: 'Systems',
    featured: false,
    status: 'Completed',
    summary: 'A full-stack messaging and community relationship platform decoupling a responsive Flutter Web client from a Node.js daemon and Supabase database.',
    problem: 'Managing grassroots communities over WhatsApp manually is error-prone. Organizations need structured messaging campaigns, conversation tags, and team collaboration without fragile browser extensions.',
    architecture: [
      'Web Dashboard: Flutter Web interface utilizing Riverpod for reactive state and GoRouter for deep-linking.',
      'Messaging Microservice: Node.js worker leveraging the Baileys protocol library to maintain persistent WhatsApp socket sessions.',
      'Database & Auth: Supabase PostgreSQL backend enforcing role-based permissions and storing message audit logs.',
      'Event Bridge: Asynchronous message queue synchronizing outbound broadcasts with inbound read receipts.',
    ],
    techStack: ['Flutter Web', 'Riverpod', 'GoRouter', 'Node.js', 'Baileys', 'Supabase', 'PostgreSQL'],
    verifiedMetrics: [
      'Decoupled architecture isolating messaging daemon from frontend UI',
      'Real-time event handling powered by Supabase and PostgreSQL',
      'Multi-user role-based operational permissions',
    ],
  },
  {
    id: 'data-management-system',
    title: 'Large-Scale Record Management System',
    subtitle: 'Relational Record Handling & SQL Query Workflow Engine',
    category: 'Systems',
    featured: false,
    status: 'Completed',
    summary: 'A database-driven application engineered for structured member record management, robust validation, dynamic query filtering, and CSV import/export operations.',
    problem: 'Handling large institutional datasets with simple spreadsheets leads to data corruption and missing referential integrity.',
    architecture: [
      'Data Modeling: Normalized relational SQLite/SQL schema with foreign key constraints and automated indexation.',
      'Service Layer: Python data access layer cleanly separated from user interface logic.',
      'Validation Pipeline: Strict input validation catching schema anomalies prior to persistence.',
    ],
    techStack: ['Flutter', 'SQLite', 'SQL', 'Python', 'CSV Processing'],
    verifiedMetrics: [
      'Handled records for 12,500+ users in documented benchmarks',
      'Structured relational schemas with verified integrity constraints',
    ],
    githubUrl: 'https://github.com/soasmi/dbms',
  },
  {
    id: 'contact-sorter',
    title: 'Contact Sorter',
    subtitle: 'Cross-Platform Native Address Book Classifier',
    category: 'Application',
    featured: false,
    status: 'Completed',
    summary: 'A utility application designed to automatically categorise contacts by country codes, dialing metadata, and contextual tags using native device APIs.',
    problem: 'Professionals with international networks end up with cluttered phonebooks containing inconsistent dialing prefixes and missing country designations.',
    architecture: [
      'Device Bridge: Flutter platform channels interfacing with native Android and iOS contact APIs.',
      'Parsing Engine: International number parser categorizing records by ISO 3166-1 country codes.',
      'Local Caching: SQLite database maintaining categorized subsets for rapid search and batch export.',
    ],
    techStack: ['Flutter', 'Dart', 'Native Device APIs', 'SQLite', 'REST APIs'],
    verifiedMetrics: [
      'Native address book integration across Android and iOS',
      'Zero external data transmission (private on-device classification)',
    ],
  },
  {
    id: 'quantum-walk-routing',
    title: 'Quantum Walk Vehicle Routing',
    subtitle: 'Quantum-Inspired Algorithmic Heuristics on Constrained Graphs',
    category: 'Research',
    featured: false,
    status: 'Research Prototype',
    duration: 'EGREEN Quanta (Dec 2024 – Jan 2025)',
    summary: 'Algorithmic research implementing and benchmarking Quantum Walk Optimisation heuristics for combinatorial vehicle-routing problems on constrained topologies.',
    problem: 'Combinatorial vehicle-routing problems (VRP) scale exponentially with graph vertices. Classical greedy heuristics get trapped in local minima, whereas quantum-inspired continuous/discrete-time random walks offer unique superposition-like exploration.',
    architecture: [
      'Walk Formulation: Discrete-time quantum walk implementation with unitary coin operators driving node transitions.',
      'Non-Demolition Measurement: Modeling simulated non-destructive phase measurements to sample route quality without destroying wave superposition.',
      'Simulation Benchmarking: Comparative analysis against classical Dijkstra and genetic algorithm baselines on synthetic urban road graphs.',
    ],
    techStack: ['Python', 'Quantum Algorithms', 'NetworkX', 'Graph Theory', 'NumPy'],
    verifiedMetrics: [
      'Benchmarked quantum walk heuristics against classical baseline graphs',
      'Researched under guidance of Dr. Kumar Gautam at EGREEN Quanta',
    ],
    diagramType: 'quantum-graph',
  },
];

export const PUBLICATIONS_AND_HONORS: PublicationOrAward[] = [
  {
    id: 'ieee-cises-2025',
    title: 'EchoSense: A Tactile NLP Interface for Multimodal Communication',
    type: 'Conference Publication',
    venueOrIssuer: 'IEEE CISES 2025 Conference Proceedings',
    year: '2025',
    description: 'Peer-reviewed research paper presenting the multimodal architecture, ASL computer-vision recognition model, and tactile feedback interface of the EchoSense communication aid.',
    badgeText: 'IEEE Conference Proceeding',
    verifiedDetails: 'Published in official IEEE CISES 2025 proceedings.',
  },
  {
    id: 'healthcare-book-chapter',
    title: 'Large Language Models (LLMs), Large Vision Models (LVMs), and Big Data in Healthcare',
    type: 'Book Chapter',
    venueOrIssuer: 'Academic Edited Volume',
    year: '2025',
    description: 'Comprehensive scholarly chapter analyzing the operationalization, multimodal diagnostics, privacy hurdles, and big-data architectures of foundation models in clinical settings.',
    badgeText: 'Scholarly Book Chapter',
    verifiedDetails: 'Authored chapter on generative AI and clinical multimodal vision systems.',
  },
  {
    id: 'ieee-hackathon-winner',
    title: 'Winner — IEEE Hackathon 2025',
    type: 'Hackathon Award',
    venueOrIssuer: 'IEEE Student Branch',
    year: '2025',
    description: 'Awarded 1st place among inter-college engineering teams for engineering EchoSense, demonstrating live multimodal speech and ASL gesture translation.',
    badgeText: '1st Place Award',
    verifiedDetails: 'Recognized for innovation in assistive technology.',
  },
  {
    id: 'nptel-star',
    title: 'Thrice Recognized NPTEL STAR',
    type: 'Academic Honor',
    venueOrIssuer: 'National Programme on Technology Enhanced Learning (IITs & IISc)',
    year: '2024 – 2025',
    description: 'Awarded NPTEL STAR distinction 3 times for nationwide top percentile performance across rigorous computer science, mathematics, and machine learning courses.',
    badgeText: '3× National Honor',
    verifiedDetails: 'Verified certification by Ministry of Education, Govt of India.',
  },
  {
    id: 'harvard-aspire',
    title: 'Harvard Aspire Leaders Program Scholar',
    type: 'Scholarship',
    venueOrIssuer: 'Aspire Institute (Founded at Harvard University)',
    year: '2025',
    description: 'Selected for competitive global fellowship program centered on ethical leadership, systems problem solving, and social impact.',
    badgeText: 'Global Fellowship',
    verifiedDetails: 'Selected cohort member, 2025.',
  },
  {
    id: 'shecodes-scholar',
    title: 'SheCodes Foundation Scholar',
    type: 'Scholarship',
    venueOrIssuer: 'SheCodes Foundation',
    year: '2025',
    description: 'Awarded fellowship scholarship supporting technical excellence and leadership among women in software engineering and artificial intelligence.',
    badgeText: 'Selected Scholar',
    verifiedDetails: 'Fellowship awardee, 2025.',
  },
  {
    id: 'academic-standing',
    title: '9.77 CGPA Academic Excellence',
    type: 'Academic Honor',
    venueOrIssuer: 'VIPS (GGSIPU), Delhi',
    year: '2023 – Present',
    description: 'Maintained top academic standing across six semesters of Computer Science & Engineering (Artificial Intelligence & Machine Learning).',
    badgeText: '9.77 / 10.00 CGPA',
    verifiedDetails: 'B.Tech CSE (AI & ML), Class of 2027.',
  },
];

export const SKILL_CATEGORIES = [
  {
    category: 'Programming Languages',
    description: 'Languages used across production systems, algorithms, and research pipelines',
    skills: [
      { name: 'Python', context: 'FastAPI, PyTorch, FAISS, Signal Processing, OpenCV' },
      { name: 'Dart', context: 'Flutter Web, Mobile & Desktop architecture' },
      { name: 'SQL', context: 'PostgreSQL, SQLite, complex joins, indexing & schemas' },
      { name: 'Java', context: 'Object-oriented systems & algorithmic foundations' },
      { name: 'C', context: 'Low-level memory management & systems programming' },
    ],
  },
  {
    category: 'AI / ML & Vector Computing',
    description: 'Machine learning, representation learning, and retrieval architectures',
    skills: [
      { name: 'Vector Search & FAISS', context: 'High-dimensional indexing & cosine similarity' },
      { name: 'SentenceTransformers', context: 'Dense document embeddings (BAAI/bge-m3)' },
      { name: 'Convolutional Neural Networks', context: 'Geomagnetic anomaly profile classification' },
      { name: 'NLP & Tokenization', context: 'Multimodal transcript processing & chunking' },
      { name: 'Computer Vision', context: 'OpenCV hand landmark extraction & ASL gestures' },
      { name: 'XGBoost & Ensembles', context: 'High-precision tabular classification' },
      { name: 'Signal Processing', context: 'Wavelets, bandpass filters & sensor drift cleaning' },
    ],
  },
  {
    category: 'Backend, APIs & Databases',
    description: 'High-throughput web services and relational database architectures',
    skills: [
      { name: 'FastAPI & Uvicorn', context: 'Asynchronous REST APIs with Pydantic validation' },
      { name: 'PostgreSQL & Supabase', context: 'Row-Level Security (RLS) & real-time websockets' },
      { name: 'SQLite & SQLAlchemy', context: 'Local persistence & Alembic database migrations' },
      { name: 'Cloud Firestore', context: 'NoSQL collections with multi-role security rules' },
      { name: 'Node.js', context: 'Persistent socket daemons & event handling' },
    ],
  },
  {
    category: 'Application Engineering & Tools',
    description: 'Cross-platform client applications and developer tooling',
    skills: [
      { name: 'Flutter (Multi-Platform)', context: 'Riverpod, GoRouter, Android, Web & Desktop' },
      { name: 'Docker & Sandboxing', context: 'Session-isolated containerized environments' },
      { name: 'Local-First Architecture', context: 'Hive NoSQL, offline caching & zero-leakage RAG' },
      { name: 'Git & GitHub', context: 'Version control, issue tracking & release workflows' },
      { name: 'PDF Generation Engine', context: 'Dynamic QR-linked printable smart ID credentials' },
    ],
  },
  {
    category: 'Research Capabilities',
    description: 'Scientific and algorithmic research methodologies',
    skills: [
      { name: 'Sensor Data Processing', context: 'Geomagnetic and quantum magnetometer analysis' },
      { name: 'Quantum Walk Heuristics', context: 'Vehicle-routing optimization on graphs' },
      { name: 'Non-Demolition Measurement', context: 'Simulated quantum state tracking' },
      { name: 'Structured Model Evaluation', context: 'Ablation studies & cross-validation metrics' },
    ],
  },
];

export const CHAPTERS = [
  { id: 'prologue', num: '00', title: 'A Curious Mind', subtitle: 'The Opening' },
  { id: 'chapter-1', num: '01', title: 'Learning to Think', subtitle: 'Foundation & Algorithms' },
  { id: 'chapter-2', num: '02', title: 'The Uncertainty Lab', subtitle: 'Geomagnetics & Signals' },
  { id: 'chapter-3', num: '03', title: 'Engineering Intelligence', subtitle: 'Cybersecurity & Scale' },
  { id: 'chapter-4', num: '04', title: 'Two Chapters at DRDO', subtitle: 'SSPL & SAG Internships' },
  { id: 'chapter-5', num: '05', title: 'Ideas Made Real', subtitle: 'Flagship Systems' },
  { id: 'chapter-6', num: '06', title: 'Technology With Purpose', subtitle: 'Institutional Software' },
  { id: 'chapter-7', num: '07', title: 'Evidence, Not Adjectives', subtitle: 'Publications & Honors' },
  { id: 'epilogue', num: '08', title: 'Still Becoming', subtitle: 'Dialogue & Contact' },
];
