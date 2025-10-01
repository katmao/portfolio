export type TimelineEntry = {
  role: string;
  organization: string;
  timeframe: string;
  location?: string;
  details: string[];
  principalInvestigators?: string[];
};

export type EducationEntry = {
  institution: string;
  degree: string;
  timeframe: string;
  highlights?: string[];
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  notes?: string;
};

export type SimpleEntry = {
  label: string;
  description?: string;
  location?: string;
  timeframe?: string;
};

export type Stat = {
  value: string;
  label: string;
  description?: string;
};

export type FocusArea = {
  title: string;
  description: string;
  tags: string[];
};

export type CTAContent = {
  eyebrow: string;
  headline: string;
  description: string;
  actions: { label: string; href: string; variant?: 'primary' | 'secondary' }[];
};

export const contact = {
  name: 'Ekaterina Novozhilova',
  tagline: 'Human-Machine Communication, Human-AI Interaction, Media Psychology',
  phone: '+1 917 326 1984',
  email: 'ekaterin@bu.edu',
  website: 'https://ekaterina-novozhilova.com',
  location: 'Boston, MA',
};

export type NavLinkItem = {
  label: string;
  to: string;
};

export const navLinks: NavLinkItem[] = [
  { label: 'Home', to: '/' },
  { label: 'CV', to: '/cv' },
  { label: 'Research', to: '/research' },
  { label: 'Teaching', to: '/teaching' },
];

export const researchInterests = {
  topics: [
    'Human-machine communication (HMC)',
    'Human-computer interaction (HCI)',
    'Human-AI interaction (HAII)',
    'Psychological processing of media',
    'Social and ethical implications of artificial intelligence',
  ],
  methods: [
    'Surveys, lab and online experiments, interviews',
    'Multivariate statistical analyses and machine learning',
    'Conversational user interface design and prototyping',
    'Psychophysiological measurement with iMotions and eye-tracking',
  ],
};

export const heroStats: Stat[] = [
  {
    value: '12+',
    label: 'Peer-reviewed publications',
    description: 'AI governance and media psychology insights published across journals.',
  },
  {
    value: '8+',
    label: 'Research collaborations',
    description: 'Cross-lab partnerships spanning BU, UCSF, and global teams.',
  },
  {
    value: '17',
    label: 'Researchers mentored',
    description: 'Graduate, undergraduate, and high school scholars supported since 2021.',
  },
];

export const focusAreas: FocusArea[] = [
  {
    title: 'Responsible AI adoption',
    description: 'Evaluating fairness, trust, and governance frameworks for AI systems serving the public.',
    tags: ['AI policy', 'Trust frameworks', 'Survey analytics'],
  },
  {
    title: 'Human-machine experiences',
    description: 'Designing conversational agents and interfaces that support empathy, ethics, and informed decision making.',
    tags: ['Conversational design', 'User studies', 'Mind perception'],
  },
  {
    title: 'Emerging media futures',
    description: 'Tracing psychological responses to synthetic media through cross-cultural and lab-based research.',
    tags: ['Synthetic media', 'Cross-cultural research', 'Psychophysiology'],
  },
];

export const collaborationCTA: CTAContent = {
  eyebrow: 'Let us collaborate',
  headline: 'Partner on research, speaking, or strategic insight projects',
  description: 'I work with labs, nonprofits, and product teams to evaluate AI adoption, inform policy, and design ethical human-machine experiences.',
  actions: [
    { label: 'Schedule a conversation', href: 'mailto:ekaterin@bu.edu' },
    { label: 'Visit portfolio site', href: 'https://ekaterina-novozhilova.com', variant: 'secondary' },
  ],
};

export const researchAppointments: TimelineEntry[] = [
  {
    role: 'Graduate Researcher',
    organization: 'Boston University, Emerging Media Studies Division',
    timeframe: '2021-present',
    details: [
      'Led nationally representative surveys on U.S. public perceptions of AI from design through statistical analysis and manuscripts.',
      'Conducted mixed-method UX research and chatbot prototyping for the Boston Animal Rescue League.',
      'Directed focus groups supporting undergraduate curriculum development for the College of Communication.',
      'Guided marketing strategy research for a head injury and trauma study in partnership with UCSF Brain Health Registry.',
      'Completed a meta-analysis on the Presence construct.',
    ],
    principalInvestigators: ['Dr. James Katz', 'Dr. James Cummings'],
  },
  {
    role: 'Hariri Graduate Student Fellow',
    organization: 'Boston University, AI-Emerging Media Lab',
    timeframe: '2023-present',
    details: [
      'Designed socio-technical projects in computational social science with applied NLP and generative AI.',
      'Managed and mentored MS, MA, and early-stage PhD students across computer science, data science, and communication.',
    ],
    principalInvestigators: ['Dr. Margrit Betke', 'Dr. Derry Wijaya'],
  },
  {
    role: 'Graduate Researcher',
    organization: 'Boston University, Story Technologies and Audio Response (STAR) Lab',
    timeframe: '2025-present',
    details: [
      'Ran in-person lab experiments on narrative enjoyment, empathy, and moral judgments using psychophysiological measures.',
      'Analyzed AI-generated storytelling outputs and eye-tracking data.',
      'Advanced scale development for core media psychology constructs and contributed to meta-analytic reviews.',
    ],
    principalInvestigators: ['Dr. Joshua Baldwin'],
  },
];

export const education: EducationEntry[] = [
  {
    institution: 'Boston University, Emerging Media Studies Division',
    degree: 'PhD in Communication (Expected 2026)',
    timeframe: '2021-2026',
    highlights: [
      'Dissertation: Carry-Over Effects from Human-AI to Human-Human Interaction: The Mediating Role of Mind Perception.',
      'Committee: Dr. James Cummings (Chair), Dr. James Katz, Dr. Kate Mays, Dr. Kathryn Coduto.',
    ],
  },
  {
    institution: 'Shanghai Jiao Tong University, School of Media and Communication',
    degree: 'Master of Arts',
    timeframe: '2017-2020',
    highlights: [
      'Thesis: AI-Writers Identity: Gender Stereotyping of Robot-Authors.',
      'Committee: Dr. Yi Mou (Chair), Dr. Kanni Huang, Dr. Qian Wang.',
    ],
  },
  {
    institution: 'Saint Petersburg State University, School of Journalism and Mass Communication',
    degree: 'Public Relations Specialist',
    timeframe: '2009-2014',
  },
  {
    institution: 'Korea University',
    degree: 'Exchange Program',
    timeframe: '2013-2014',
  },
  {
    institution: 'Hankuk University of Foreign Studies',
    degree: 'Exchange Program',
    timeframe: '2012-2013',
  },
];

export const professionalExperience: TimelineEntry[] = [
  {
    role: 'Business Development Manager (US team)',
    organization: 'Admitad Global, Global Affiliate Network',
    timeframe: '2020-2021',
    location: 'Moscow, Russia',
    details: [
      'Developed partner pipeline across North America and nurtured ongoing relationships with 20+ accounts.',
      'Led marketing strategy and sales enablement for regional campaigns.',
    ],
  },
  {
    role: 'Content Operation Specialist',
    organization: 'ByteDance, News Republic App',
    timeframe: '2016-2017',
    location: 'Beijing, China',
    details: [
      'Performed linguistic and text analysis to improve personalization algorithms and editorial quality.',
      'Produced topic curation, copy editing, and ensured editorial standards for global news feeds.',
      'Managed a team of 10 annotators, assigning coding tasks and reporting performance.',
    ],
  },
];

export const peerReviewedPublications: Publication[] = [
  {
    title:
      'Paik, S., Novozhilova, E., Mays, K., & Katz, J. Exploring AI fairness perceptions: Perceived AI harm and benefits across social contexts.',
    venue: 'Discover Artificial Intelligence, 5(1), 39',
    year: '2025',
  },
  {
    title:
      'Novozhilova, E., Mays, K., Paik, S., & Katz, J. More capable, less benevolent: Trust perceptions of AI systems across societal contexts.',
    venue: 'Machine Learning and Knowledge Extraction, 6(1), 342-366',
    year: '2024',
    notes: 'Recognized as a Top Cited Paper 2024.',
  },
  {
    title:
      'Novozhilova, E., Mays, K., Paik, S., & Katz, J. Reply to Damasevicius, R. Comment on "Novozhilova et al. More capable, less benevolent...".',
    venue: 'Machine Learning and Knowledge Extraction, 6(3), 1670-1672',
    year: '2024',
  },
  {
    title:
      'Novozhilova, E., Mays, K., Katz, J. Looking towards an automated future: U.S. attitudes towards future AI instantiations and their effect.',
    venue: 'Humanities and Social Sciences Communications, 11(1), 1-11',
    year: '2024',
  },
  {
    title:
      'Mou, Y., Xia, K., Novozhilova, E., & Xu, K. Information processing, attitudes, and perception regarding AI-generated content.',
    venue: 'Journalism University, 8, 30-43',
    year: '2019',
  },
];

export const workInProgress: Publication[] = [
  {
    title:
      'AI humanizers, pragmatists, skeptics: A cluster analysis of normative attitudes for AI capabilities and roles.',
    venue: 'Human-Machine Communication (under review)',
    year: '2025',
    notes: 'With Mays, K.',
  },
  {
    title:
      'U.S. news audience trust in AI journalism across editorial workflows, news scales, and data structures.',
    venue: 'Communication and Change (under review)',
    year: '2025',
    notes: 'With Paik, S., Mays, K., Huang, D., & Katz, J.',
  },
  {
    title:
      'From moral panic to normalization: Comparing users and non-users of AI companionship apps.',
    venue: 'AI & Society (under review)',
    year: '2025',
    notes: 'With Vu, C. and Katz, J.',
  },
  {
    title:
      'Carry-over effects from human-AI to human-human interaction: The mediating role of mind perception.',
    venue: 'In preparation',
    year: '2025',
    notes: 'With Cummings, J.',
  },
  {
    title:
      'Role of chatbot personality and communicational context on user conformity.',
    venue: 'In preparation',
    year: '2025',
    notes: 'With Nair, J.',
  },
];

export const conferenceProceedings: Publication[] = [
  {
    title:
      'Gao, G., Shan, Z., Crissman, J., Novozhilova, E., Huang, Y., Ramanathan, A., Betke, M., Wijaya, D. Insights into climate change narratives: Emotional alignment and engagement analysis on TikTok.',
    venue: 'ACL 2025, NLP for Positive Impact Workshop (Best Paper Award)',
    year: '2025',
  },
  {
    title:
      'Bonna Huang, Y. C., Novozhilova, E., Paik, S., Shan, Z., Feng, M. Y., Betke, M., Wijaya, D. DebiasPI: Inference-time debiasing by prompt iteration of a text-to-image generative model.',
    venue: 'ECCV 2024 Workshop on Fairness and Ethics towards Transparent AI',
    year: '2024',
  },
  {
    title:
      'Gao, G., Kim, J., Paik, S., Novozhilova, E., Liu, Y., Bonna, S. T., et al. Enhancing emotion prediction in news headlines.',
    venue: 'LREC-COLING 2024',
    year: '2024',
  },
  {
    title:
      'Novozhilova, E., Mays, K. K., Huang, D., Lee, H., Katz, J. Where in society will AI agents fit? Framework for understanding attitudes toward AI occupational roles.',
    venue: 'Association of Internet Researchers Annual Conference',
    year: '2023',
  },
  {
    title:
      'Paik, S., Bonna, S., Novozhilova, E., Gao, G., Kim, J., Wijaya, D., Betke, M. The affective nature of generative news images.',
    venue: 'Affective Computing + Intelligent Interaction Conference',
    year: '2023',
  },
];

export const conferencePresentations: Publication[] = [
  {
    title:
      'Mays, K., Novozhilova, E. AI humanizers, pragmatists, skeptics: A cluster analysis of normative attitudes for AI capabilities and roles.',
    venue: 'ICA Annual Conference, Denver, CO',
    year: '2025',
  },
  {
    title:
      'Novozhilova, E., Mays, K. K., Deterrich, B., Katz, J. Looking forward to automatic future.',
    venue: 'Work in the Age of Intelligent Machines Workshop, Washington, DC',
    year: '2022',
  },
  {
    title:
      'Novozhilova, E., Mays, K. K., Deterrich, B., Katz, J. Looking forward to automatic future.',
    venue: 'ICA Annual Conference, Paris, France',
    year: '2022',
  },
  {
    title:
      'Novozhilova, E., Mou, Y., Xu, K., Zeng, J., Schaefer, M. Perceiving AI-generated content: International comparison.',
    venue: 'ICA Annual Conference (online)',
    year: '2020',
  },
  {
    title:
      'Novozhilova, E., Mou, Y., Xu, K. Evaluation of AI-generated content.',
    venue: 'ICA Human-Machine Communication Pre-conference, Washington, DC',
    year: '2019',
  },
  {
    title:
      'Novozhilova, E., Mou, Y., Xu, K. Information processing, attitude, and cognition of AI created content.',
    venue: 'Chinese Association for History of Journalism and Mass Communication Annual Conference',
    year: '2018',
  },
];

export const teachingExperience = {
  instructorOfRecord: [
    {
      label: 'Communication Research Methods (COM CM321)',
      timeframe: 'Fall 2022, Fall 2023',
      description: 'Designed and taught the research methods requirement course for communication majors (25 students).',
    },
    {
      label: 'Mass Communication (Summer High School Program)',
      timeframe: 'Summer 2022, Summer 2023',
      description: 'Developed accelerated curriculum introducing media and communication theory to pre-college students.',
    },
  ],
  assistantInstructor: [
    {
      label: 'Introduction to the World of Communication (COM CO101)',
      timeframe: 'Fall 2021',
      description: 'Led discussion sections, assessed assignments, and supported lecture delivery.',
    },
  ],
  teachingAssistant: [
    {
      label: 'The Psychology of Emerging Media (COM EM793)',
      timeframe: 'Spring 2023, Spring 2024',
      description: 'Graduate lecture with 60 students; facilitated labs and assessments.',
    },
    {
      label: 'Introduction to Emerging Media Studies (COM EM700)',
      timeframe: 'Fall 2024, Fall 2025',
      description: 'Graduate lecture with 60 students; mentored project teams and supported instruction.',
    },
  ],
  mentorship: [
    {
      label: 'Graduate and undergraduate mentorship',
      timeframe: '2021-2025',
      description: 'Mentored 17 graduate students, 6 undergraduates, and 4 high school researchers across emerging media studies projects.',
    },
  ],
};

export const guestLectures: SimpleEntry[] = [
  {
    label: 'Primitive and Social Responses to Media',
    description: 'The Psychology of Emerging Media (EM793)',
    timeframe: 'February 2024',
    location: 'Boston University',
  },
  {
    label: 'AI Assistants and Apps',
    description: 'Introduction to Emerging Media Studies (EM700)',
    timeframe: 'November 2024',
    location: 'Boston University',
  },
  {
    label: 'The Rise of Synthetic Media',
    description: 'Special Topics (EM761)',
    timeframe: 'November 2024',
    location: 'Boston University',
  },
  {
    label: 'AI and Automation: The Future of Job Market',
    description: 'Masters Collaboratory Project (EM777)',
    timeframe: 'October 2022',
    location: 'Boston University',
  },
  {
    label: 'Data Visualization',
    description: 'Masters Collaboratory Project (EM777)',
    timeframe: 'April 2022',
    location: 'Boston University',
  },
];

export const grantsAwards = {
  nsfProjects: [
    'BIGDATA: IA - Multiplatform, Multilingual, and Multimodal Tools for Analyzing Public Communication in 100+ Languages (Contributor, NSF Award #1838193, 2019-2024).',
    'Convergence HTF: Research Coordination Network on the Socio-Technological Landscape of Work in the Age of Automation (Contributor, NSF Award #1745463, 2022).',
  ],
  awards: [
    'Distinguished Leadership Award, Boston University (2023).',
    'Outstanding Paper Award, ICA-affiliated International New Media Forum (2019).',
    'Best Paper Award, Chinese Association for History of Journalism and Mass Communication (2018).',
    'Dean\'s List, Shanghai Jiao Tong University (2017-2018).',
  ],
  travelGrants: [
    'NSF Travel Grant, Work in the Age of Intelligent Machines Workshop, Washington, DC (2022, $2000).',
    'Boston University Travel Grant, ICA Annual Conference, Denver, CO (2025, $1500).',
    'Boston University Travel Grant, Association of Internet Researchers Conference, Philadelphia, PA (2023, $1700).',
    'Boston University Travel Grant, ICA Annual Conference, Paris, France (2020, $2000).',
    'Shanghai Jiao Tong University Travel Grant, ICA, Washington, DC (2019, 10,000 RMB).',
  ],
  scholarships: [
    'Boston University Full Scholarship (Tuition + Stipend, $110,000 annually, 2021-present).',
    'Boston University Annual Research Grant ($2,500 annually, 2023-present).',
    'Minhang Real Estate Scholarship, Shanghai Jiao Tong University (2019, 2,000 RMB).',
    'Chinese Government Scholarship, Shanghai Jiao Tong University (2017-2020, tuition + stipend, 64,000 RMB annually).',
  ],
};

export const academicService = {
  journals: [
    'AI & Society (2025).',
    'International Journal of Human-Machine Interaction (2025).',
    'Humanities and Social Sciences Communications (2025).',
    'Information Technology and People (2023).',
  ],
  conferences: [
    'International Communication Association Conferences (2019-present).',
    'Human-Machine Communication Interest Group at ICA (2019-present).',
    'ACM CHI Conference on Human Factors in Computing Systems (2024).',
    'Association of Internet Researchers Annual Conference (2023).',
    'Hawaii International Conference on System Sciences (2023).',
  ],
};

export const skills = {
  data: ['R', 'Gephi'],
  survey: ['Qualtrics', 'Prolific'],
  analytics: ['Brandwatch', 'Meltwater'],
  aiTools: ['Claude Code', 'Cursor'],
  psychophysiology: ['iMotions', 'Tobii eye tracking', 'Affectiva'],
  visualization: ['Tableau'],
  crm: ['Salesforce'],
  creative: ['Adobe InDesign', 'Photoshop', 'Premiere', 'Final Cut Pro'],
  languages: ['English', 'Russian', 'Mandarin Chinese (basic proficiency)'],
};
