// Curated from Jay's résumé and the public product pages he supplied. Keep facts and links reviewable here.
export const projects = [
  {
    id: 'winv-panel-tweaks', title: 'Win+V Panel Tweaks', category: 'Products', period: '2026',
    context: 'Windhawk · Windows 11 mod', featured: true,
    summary: 'Resize the Windows clipboard and emoji panel, and hide tabs you do not use.',
    details: [
      'Lets people adjust the Win+V clipboard and Win+. emoji panel size.',
      'Can hide the Emoji, GIF, Kaomoji, Symbols and Most recently used tabs while keeping Clipboard available.'
    ],
    stack: ['Windhawk', 'Windows 11'],
    link: 'https://windhawk.net/mods/winv-panel-tweaks', linkLabel: 'View Windhawk mod'
  },
  {
    id: 'coin-stock-monitor', title: 'Coin & Stock Monitor', category: 'Products', period: '2026',
    context: 'Windhawk · Windows 11 mod', featured: true,
    summary: 'Live stock and crypto prices on the Windows 11 taskbar.',
    details: [
      'Shows up to four symbols, with optional entry prices and signed percentage changes.',
      'Supports a configurable JSON price API, refresh interval, colors and layout.'
    ],
    stack: ['Windhawk', 'Windows 11', 'JSON API'],
    links: [
      {label: 'View Windhawk mod', url: 'https://windhawk.net/mods/coin-stock-monitor'},
      {label: 'View source', url: 'https://github.com/jayll1303/coin-stock-monitor'}
    ]
  },
  {
    id: 'pondie-tab', title: 'Pondie Tab · Cozy Frog Companion', category: 'Products', period: '2026',
    context: 'Chrome extension · open source', featured: true,
    summary: 'A cozy, interactive frog companion for each new browser tab.',
    details: [
      'Built cursor-following eyes, blinking, breathing and playful drag-and-poke interactions.',
      'Added ambient colors, an editable greeting and clock options while keeping the extension local and tracking-free.'
    ],
    stack: ['TypeScript', 'HTML5 Canvas', 'Chrome extension'],
    link: 'https://chromewebstore.google.com/detail/tabmaka-cozy-new-tab-pet/anomdkjhpfojkpoebfpiohlpeidhcaeb', linkLabel: 'View Chrome extension'
  },
  {
    id: 'tiengnoi', title: 'TiengNoi', category: 'Products', period: '2026',
    context: 'Web app · Vietnamese voice AI', featured: true,
    summary: 'Vietnamese text-to-speech and voice cloning for content creators.',
    details: [
      'Lets users create or clone a voice, keep it in a reusable library and turn text into speech.',
      'Supports adjustable reading speed and audio preview or download.'
    ],
    stack: ['Next.js', 'Text-to-speech', 'Voice cloning'],
    links: [
      {label: 'View product listing', url: 'https://unikorn.vn/p/tiengnoiaivoice'},
      {label: 'Visit product', url: 'https://tiengnoi.online'}
    ]
  },
  {
    id: 'voxcpm-vn', title: 'VoxCPM-VN', category: 'Voice AI', period: 'Jan 2026 — present',
    context: 'Open source · demo completed', featured: true,
    summary: 'Vietnamese speech pipeline focused on dataset relabeling, model fine tuning and a usable demo.',
    details: [
      'Relabeled the vivoice dataset using Qwen3-ASR-1.7B to correct inaccuracies in earlier Whisper-based labels.',
      'Fine tuned VoxCPM-VN for more natural Vietnamese prosody and complex alliterative phrases.',
      'Built an interactive Gradio demo with soe-vinorm for text normalization.'
    ],
    outcome: 'The supplied résumé records 600+ Hugging Face downloads and a MiAI feature with 5.1k+ views.',
    stack: ['PyTorch', 'Qwen3-ASR', 'VoxCPM', 'Hugging Face', 'Gradio'],
    links: [
      {label:'Open model card',url:'https://huggingface.co/JayLL13/VoxCPM-1.5-VN'},
      {label:'Try the demo',url:'https://huggingface.co/spaces/JayLL13/VoxCPM-VN-Demo'}
    ]
  },
  {
    id: 'graph-rag', title: 'Enterprise GraphRAG', category: 'Current work', period: 'Jul 2025 — present',
    context: 'FE Credit · internal system', featured: true,
    summary: 'An internal knowledge retrieval system connecting complex enterprise documents and data points.',
    details: [
      'Designed a graph-based retrieval architecture and a two-level retrieval mechanism for internal repositories.',
      'Built OCR and NLP ingestion for text-heavy and scanned PDFs, plus a periodic update pipeline.',
      'Deployed self-hosted model serving with vLLM on Amazon EKS.'
    ],
    outcome: 'The supplied résumé reports 87% accuracy for information retrieval.',
    stack: ['Python', 'AWS', 'Amazon EKS', 'vLLM', 'GraphRAG', 'LangChain']
  },
  {
    id: 'voicebot', title: 'Debt collection voicebot', category: 'Voice AI', period: 'Jul 2025 — present',
    context: 'FE Credit · internal system', featured: true,
    summary: 'Voice automation for debt recovery workflows with intent recognition, FAQ retrieval and scripted business logic.',
    details: [
      'Worked with stakeholders on Promise to Pay, Late to Pay and Refusal to Pay conversation paths.',
      'Used RAG for dynamic FAQs, vLLM-hosted models for intent classification and smaller models for date and entity extraction.',
      'Delivered a production-ready MVP in two weeks and deployed the containerized solution on AWS.'
    ],
    outcome: 'The supplied résumé reports 95% UAT accuracy for intent classification and action-code mapping.',
    stack: ['AWS', 'Amazon ECS', 'vLLM', 'SLM', 'RAG', '.NET']
  },
  {
    id: 'alice', title: 'Alice · voice assistant for EdTech', category: 'Voice AI', period: 'FPT Software QAI',
    context: 'Demo completed', featured: true,
    summary: 'A voice-to-voice assistant helping parents access student information through natural conversation.',
    details: [
      'Delivered a production-ready MVP in two weeks using Azure and .NET.',
      'Combined speech-to-speech responses with LLM reasoning for more complex education queries.',
      'Used Microsoft Agent Framework for modular skills and streamed responses to reduce time to first token.'
    ],
    outcome: 'Containerized and deployed with Azure Container Apps, according to the supplied résumé.',
    stack: ['.NET', 'Azure AI Foundry', 'Azure Container Apps', 'Microsoft Agent Framework']
  },
  {
    id: 'table2html', title: 'Table2HTML', category: 'Document AI', period: 'Sep — Dec 2024',
    context: 'Open source · live demo', featured: true,
    summary: 'Detect and reconstruct tables from scientific document images, then convert their structure to HTML.',
    details: [
      'Combined OpenCV image processing with deep learning for table structure recognition.',
      'Built a Streamlit interface and CI/CD pipeline with GitHub Actions.',
      'Published and maintained a reusable Python package on PyPI.'
    ],
    outcome: 'Public Python package and a live demo are noted in the supplied résumé.',
    stack: ['OpenCV', 'Streamlit', 'PyTorch', 'Ultralytics'],
    link: 'https://pypi.org/project/table2html/', linkLabel: 'View package'
  },
  {
    id: 'calendar', title: 'Calendar chatbot', category: 'Agents', period: 'FPT Software QAI',
    context: 'Enterprise AI', featured: true,
    summary: 'A multi-agent chatbot for calendar queries, booking and scheduling.',
    details: [
      'Designed a multi-agent architecture with LLM-based tools and context-aware conversation.',
      'Applied prompt engineering for varied scheduling intents.',
      'Deployed on Google Cloud Platform with OAuth2 integration.'
    ],
    stack: ['LangChain', 'Vertex AI', 'Google Cloud Platform', 'OAuth2']
  },
  {
    id: 'antiquities', title: 'Antiquities inpainting', category: 'Research', period: 'May — Aug 2023',
    context: 'First prize · RESFES 2023',
    summary: 'A deep learning system for restoring damaged ceramic patterns for cultural preservation.',
    details: ['Created an expert-verified ceramic pattern dataset.', 'Used VGG-19 for feature extraction and trained an end-to-end inpainting system.'],
    stack: ['PyTorch', 'OpenCV', 'Flask']
  },
  {
    id: 'jobfit', title: 'Resume Ranking · JobFit', category: 'Document AI', period: 'Sep 2023 — Feb 2024',
    context: 'FPT Software QAI · demo completed',
    summary: 'Extract structured information from CVs and support resume filtering for HR teams.',
    details: ['Used LLM prompts with the OpenAI API for structured extraction.', 'Automated tool calls in the extraction workflow.'],
    stack: ['LangChain', 'PyPDF', 'Flask', 'OpenAI API'],
    link: 'https://github.com/vectornguyen76/resume-ranking', linkLabel: 'View repository'
  },
  {
    id: 'tax-extraction', title: 'Vietnamese tax extraction', category: 'Document AI', period: 'FPT Software QAI',
    context: 'Client solution',
    summary: 'Convert tabular data in PDF tax reports into structured HTML and Excel outputs.',
    details: ['Trained YOLOv8 models for detecting tables and text.', 'Delivered a Windows desktop app with reconstruction and processing steps.'],
    stack: ['PyTorch', 'YOLOv8', 'PyQt5']
  },
  {
    id: 'european-documents', title: 'European invoice extraction', category: 'Document AI', period: 'FPT Software QAI',
    context: 'Multilingual document processing',
    summary: 'Extract key fields from complex European invoices across 14 languages.',
    details: ['Owned data collection, preprocessing, model design, training and deployment.', 'Used YOLOv10 and PaddleOCR, with Docker packaging.'],
    stack: ['PyTorch', 'YOLOv10', 'PaddleOCR', 'Docker']
  },
  {
    id: 'passport-mrz', title: 'Passport MRZ extraction', category: 'Document AI', period: 'FPT Software QAI',
    context: 'Identity document workflow',
    summary: 'Detect and extract machine-readable passport data through an API.',
    details: ['Fine tuned YOLOv10 detection for MRZ regions.', 'Built a REST API and containerized deployment on AWS.'],
    stack: ['PyTorch', 'YOLOv10', 'PaddleOCR', 'Docker', 'AWS']
  },
  {
    id: 'answer-sheets', title: 'Vietnamese answer sheet extraction', category: 'Document AI', period: 'May 2024',
    context: 'FPT University · demo completed',
    summary: 'Extract answers from scanned Vietnamese multiple-choice answer sheets.',
    details: ['Used OpenCV for answer detection and extraction.', 'Exposed a REST API and containerized the demo with Docker.'],
    stack: ['OpenCV', 'FastAPI', 'Docker']
  },
  {
    id: 'bib-extraction', title: 'BIB extraction tools', category: 'Document AI', period: 'Sep 2024',
    context: 'FPT Software QAI · two-day demo',
    summary: 'An internal tool for finding race BIB numbers in images.',
    details: ['Collaborated as AI and DevOps engineer.', 'Applied PaddleOCR, exposed an API and packaged the tool with Docker.'],
    stack: ['OpenCV', 'PaddleOCR', 'FastAPI', 'Docker']
  },
  {
    id: 'face-recognition', title: 'Face recognition pipeline', category: 'Research', period: 'Nov — Dec 2023',
    context: 'FPT Software QAI · demo completed',
    summary: 'A face detection and recognition research pipeline tested with Android cameras.',
    details: ['Collaborated in a three-person team.', 'Evaluated RetinaFace and FaceBoxes for detection.'],
    stack: ['PyTorch', 'YOLOv5-face', 'OpenCV']
  }
];

export const experience = [
  {period:'Jul 2025 — present',role:'Senior Technology Solution Specialist',place:'FE Credit · Ho Chi Minh City',detail:'GraphRAG knowledge retrieval and voice automation on AWS.'},
  {period:'Nov 2023 — Apr 2024',role:'AI Engineer',place:'FPT Software QAI · Quy Nhon',detail:'Document extraction, conversational AI and production deployment.'},
  {period:'Sep — Nov 2023',role:'AI Engineer Intern',place:'FPT Software QAI · Quy Nhon',detail:'NLP research, semantic search and a chatbot proof of concept.'},
  {period:'Mar — Aug 2023',role:'Programming Mentor & Teaching Assistant',place:'DigiUni · Ho Chi Minh City',detail:'Taught Python, Scratch and problem solving to students aged 7–14.'}
];

export const education = {school:'FPT University',detail:'Artificial Intelligence · GPA 8.2/10 · 100% scholarship'};
export const achievements = [
  'First prize · RESFES 2023 research festival',
  'FPT University 100% scholarship, 2020–2024',
  'Honorable Student in four semesters, 2022–2023',
  'Best Mentor Award · Scholarship Hunter Association 2022',
  'Silver medal · Trai He Phuong Nam 2018',
  'Silver medal · 30th April Olympic contest 2019',
  'First prize · Provincial Excellent Student Award 2020'
];
export const certificates = [
  'Coursera Big Data Certificate · 2023',
  'IBM Full Stack Software Developer Certificate · 2023',
  'Microsoft Office Specialist: PowerPoint · 2019'
];
export const skills = {
  'Languages': ['Python', 'Rust', 'Go', '.NET', 'C++'],
  'AI & data': ['PyTorch', 'LangChain', 'Flask', 'YOLO', 'Pandas', 'Seaborn', 'PyQt5', 'vLLM'],
  'Version control': ['GitHub', 'GitLab'],
  'Delivery': ['Docker', 'Python Wheel', 'AWS', 'Azure', 'Google Cloud Platform']
};
export const community = {
  period:'Mar 2021 — Jul 2023',
  role:'Mentor · Core Team',
  place:'FPT University Scholarship Hunter Association',
  detail:'Mentored around 30 students in math and essay writing. The supplied résumé reports a 40% scholarship success rate in that group. Helped organize an event for grade 12 students.'
};
export const contact = {
  email: 'jayll13.work@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jayll13',
  github: 'https://github.com/jayll1303',
  facebook: 'https://www.facebook.com/jayllFA/',
  zalo: 'https://zalo.me/0903027947'
};
export const categories = ['All', 'Products', 'Current work', 'Voice AI', 'Document AI', 'Agents', 'Research'];
