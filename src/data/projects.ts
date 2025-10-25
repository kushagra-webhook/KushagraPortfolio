export const projects = [
  {
    title: 'Adobe Hackathon Finale – Intelligent PDF Analysis Platform',
    category: 'AI/ML',
    domain: 'ai-ml',
    tags: ['Python', 'FastAPI', 'Google Gemini', 'Azure Speech', 'Sentence Transformers', 'PDF.js', 'Docker', 'AWS'],
    points: [
      'Built an AI-powered PDF analysis platform for semantic search, cross-document insights, and intelligent summarization using all-MiniLM-L6-v2 embeddings.',
      'Integrated Google Gemini LLM and Azure Speech Services for context-aware reasoning and natural voice podcast generation.',
      'Deployed on AWS with Dockerized microservices and optimized vector indexing for <3s query latency.',
      'Selected for the Adobe Hackathon Finale for innovation in AI-driven research and document exploration.'
    ],
    link: 'https://github.com/kushagra-a-singh/Adobe-Hackathon-2025_Team-Ctrl-Alt-Complete_Finale',
    image: '/images/adobeproj.png',
  },
  {
    title: 'Mitsubishi Hackathon Winning Project: AI-Powered Superannuation Advisor Dashboard',
    category: 'AI/ML',
    domain: 'ai-ml',
    tags: ['TypeScript', 'FastAPI', 'XGBoost', 'Mistral', 'Azure Speech', 'TailwindCSS', 'AWS'],
    points: [
      'Developed a voice-enabled financial advisor dashboard with ML-driven retirement projections, portfolio insights, and real-time AI recommendations.',
      'Integrated XGBoost, Logistic Regression, and KMeans models for user segmentation, risk prediction, and personalized investment suggestions.',
      'Implemented LLM chatbot with Azure Speech Services for conversational, voice-based financial guidance and automated email updates.',
      'Deployed on AWS, achieving responsive, accessible UI optimized for older users with large fonts, high contrast, and simple navigation.'
    ],
    link: 'https://github.com/kushagra-a-singh/Mitsubishi-Hackathon-Finals',
    image: '/images/mufgproj.png',
  },
  {
    title: 'Bosch Hackathon Finalist Project: Autonomous Traffic Management System',
    category: 'Embedded',
    domain: 'embedded',
    tags: ['YOLOv8', 'ESP32', 'MQTT', 'Python', 'Roboflow', 'Motor Drivers', 'Real-time Detection', 'Autonomous Control'],
    points: [
      'Developed a traffic management system integrating YOLOv8 for traffic and crosswalk detection with ESP32 hardware for real-time signal control.',
      'Implemented MQTT for smooth communication between detection and traffic pods, managing multiple traffic states (GO, SLOW, HALT) with buzzer alerts, demonstrating real-time AI-driven embedded solutions for smart cities.',
      'Used Roboflow to boost detection accuracy and deployed optimized ESP32 firmware for autonomous hardware actuation.',
    ],
    link: 'https://github.com/kushagra-a-singh/BOSCH-BOROSA-Team-Tarzan',
    image: '/images/boschproj.jpeg',
  },
  {
    title: 'Government Research Project: STIV-based Velocity Estimation for CWPRS(GOI)',
    category: 'AI/ML',
    domain: 'ai-ml',
    tags: ['Python', 'pyOpenRiverCam', 'OpenPIV', 'OpenCV', 'LSPIV', 'Government Research'],
    points: [
      'Partnering with Central Water and Power Research Station (CWPRS), Government of India, to develop an advanced AI/ML-based velocity estimation system tested at Khadakwasla Dam, Pune.',
      'Implementing pyOpenRiverCam for Large-scale Particle Image Velocimetry (LSPIV) and Space-Time Image Velocimetry (STIV) techniques to accurately measure surface water velocities.',
      'Processing high-resolution video data to deliver precise flow analysis, enabling CWPRS\'s hydrological research and infrastructure monitoring.',
      'Utilizing xarray and Dask for scalable, efficient data processing and seamless integration with existing hydrological data pipelines.'
    ],
    link: 'https://github.com/kushagra-a-singh/STIV-based-Velocity-Estimation',
    image: '/images/cwprs.jpg',
  },
  {
    title: 'IRIS Club RAG Chatbot - Research Paper Published at IEEE ICoICC 2025',
    category: 'AI/ML',
    domain: 'ai-ml',
    tags: ['LLaMA-3 70B', 'LangChain', 'FAISS', 'Next.js', 'RAG'],
    points: [
      'Engineered a domain-specific RAG chatbot using LLaMA-3 70B, FAISS-based semantic search, and LangChain for efficient IRIS club information retrieval.',
      'Published research on hybrid Retrieval-Augmented Generation and fine-tuned transformer models for chatbot implementation, achieving 0.92 BERTScore accuracy.',
      'Implemented the RAG pipeline via LangChain, HuggingFace embeddings, FAISS, and Groq API, optimized for 10ms query latency and 200+ daily queries.',
      'Successfully deployed the hybrid chatbot on the official IRIS MIT-WPU website, handling real user queries with high accuracy and performance.'
    ],
    link: 'https://github.com/kushagra-a-singh/I.R.I.S-Prod-Website',
    image: '/images/rag-chatbot.png',
    // liveDemo: 'https://www.iris-club.in/',
  },
  {
    title: 'DocsVerse - Document Research Chatbot',
    category: 'AI/ML',
    domain: 'ai-ml',
    tags: ['React', 'FastAPI', 'ChromaDB', 'RAG', 'OCR'],
    points: [
      'Developed interactive web application for document upload, AI-powered chat with citations, and theme identification.',
      'Built FastAPI backend with ChromaDB vector database for semantic search.',
      'Created React.js frontend with Material UI and drag-and-drop functionality. Implemented document processing pipeline with OCR support, chunking, and theme analysis.'
    ],
    link: 'https://github.com/kushagra-a-singh/DocsVerse',
    image: '/images/docsverse.jpg'
  },
  {
    title: 'LangGraph Researcher',
    category: 'AI/ML',
    domain: 'ai-ml',
    tags: ['LangChain', 'LangGraph', 'Python', 'Multi-Agent'],
    points: [
      'Implemented dual-agent system for deep research using Tavily, LangChain, and LangGraph.',
      'Built modular agent architecture with workflow orchestration.',
      'Developed clean Streamlit web UI with real-time results and source citations.',
      'Created extensible system allowing easy addition of new agents.'
    ],
    link: 'https://github.com/kushagra-a-singh/LangGraph-Researcher',
    image: '/images/langgraph-researcher.jpg'
  },
  {
    title: 'SynapTrack - Parkinson\'s Detection',
    category: 'AI/ML',
    domain: 'ai-ml',
    tags: ['PyTorch', 'EEG', 'CNN', 'RNN', 'SHAP'],
    points: [
      'Developed ML-based EEG analysis platform for brain activity pattern decoding.',
      'Implemented ensemble classifiers with optimized hyperparameters.',
      'Built comprehensive feature engineering with SHAP values and LIME explanations.',
      'Created interactive Streamlit dashboard for real-time visualization.'
    ],
    link: 'https://github.com/kushagra-a-singh/SynapTrack',
    image: '/images/synaptrack.jpg'
  },
  {
    title: 'Data Orchestrate - Distributed File Sync',
    category: 'Full-Stack',
    domain: 'web-dev',
    tags: ['Java', 'Spring Boot', 'Kubernetes', 'Kafka', 'MongoDB'],
    points: [
      'Built cloud-native, microservices-based file sync system with Docker/Kubernetes deployment.',
      'Integrated Kafka for real-time cross-device replication.',
      'Automated infrastructure provisioning with health checks. Achieved 99.9% uptime in Minikube.'
    ],
    link: 'https://github.com/kushagra-a-singh/Data-Orchestrate',
    image: '/images/distributed-sync.png'
  },
  {
    title: 'Airfield Wildlife Risk Classification',
    category: 'AI/ML',
    domain: 'ai-ml',
    tags: ['YOLOv8', 'OpenCV', 'Flask', 'Real-time Detection'],
    points: [
      'Built real-time bird detection system for airport bird strike prevention.',
      'Implemented species classification for 207 bird species with risk assessment.',
      'Developed comprehensive risk model with collision probability calculation.',
      'Created interactive Flask dashboard with live video streaming.'
    ],
    link: 'https://github.com/kushagra-a-singh/Airfield-Wildlife-Risk-Classification',
    image: '/images/wildlife-risk.jpg'
  },
  {
    title: 'ForVis - Formula 1 Analytics',
    category: 'Full-Stack',
    domain: 'web-dev',
    tags: ['PyQt5', 'Apache Spark', 'HDFS', 'ML'],
    points: [
      'Developed dynamic PyQt5 GUI for F1 telemetry analysis.',
      'Integrated FastF1 APIs, Spark, and HDFS reducing processing time by 30%.',
      'Implemented ML models for pit stop prediction (86% accuracy). Added multi-driver comparison and strategy dashboards.'
    ],
    link: 'https://github.com/kushagra-a-singh/ForVis',
    image: '/images/KushagraProj1.png'
  },
  {
    title: 'Cardiovascular Diseases Prediction',
    category: 'AI/ML',
    domain: 'ai-ml',
    tags: ['Streamlit', 'XGBoost', 'SHAP', 'Ensemble ML'],
    points: [
      'Built comprehensive ML pipeline for cardiovascular disease risk prediction.',
      'Developed custom multi-output Random Forest model.',
      'Created interactive Streamlit app with risk assessment.',
      'Implemented comprehensive model evaluation with ROC curves.'
    ],
    link: 'https://github.com/kushagra-a-singh/Cardiovascular-Diseases-Prediction',
    image: '/images/cardiovascular-prediction.png'
  },
  {
    title: 'Tarzan - Autonomous Vehicle Module',
    category: 'Embedded',
    domain: 'embedded',
    tags: ['YOLOv8', 'C++', 'Arduino', 'LiDAR', 'Sensor Fusion'],
    points: [
      'Developing autonomous vehicle module for non-ADAS cars using YOLOv8.',
      'Implements real-time obstacle detection with pure-pursuit algorithm.',
      'Designing multi-modal sensor fusion combining camera, LiDAR, and ultrasonic.',
      'App-based image input for decision making like steering and braking.'
    ],
    link: 'https://github.com/kushagra-a-singh/Tarzan-I.R.I.S.',
    image: '/images/simulation.jpg'
  },
  {
    title: 'MedTech Diagnostic LLM Pipeline',
    category: 'AI/ML',
    domain: 'ai-ml',
    tags: ['MONAI', 'Swin UNETR', 'FAISS', 'BioMistral', 'FastAPI', 'Next.js', 'FHIR', 'Docker'],
    points: [
      'Built an end-to-end AI diagnostic pipeline combining 3D medical image segmentation (MONAI + Swin UNETR), FAISS-based case retrieval, and LLM-driven report generation.',
      'Integrated FHIR context retrieval for clinical-grade structured inference and explainable medical reporting.',
      'Deployed with FastAPI backend + Next.js frontend, fully configurable via YAML and Docker-ready for GPU inference.',
      'Enabled RAG-enhanced clinical summaries supporting DICOM/NIfTI inputs and an expert feedback loop for iterative refinement.'
    ],
    link: 'https://github.com/kushagra-a-singh/MedTech-Diagnostic-LLM-Pipeline',
    image: '/images/medtech.bmp'
  },
  {
    title: 'IRIS Club Website',
    category: 'Full-Stack',
    domain: 'web-dev',
    tags: ['Next.js', 'Supabase', 'Razorpay', 'TypeScript'],
    points: [
      'Developed official website for IRIS club with centralized platform.',
      'Handling multiple concurrent real-time payments.',
      'Features event registrations, dynamic blogging, and voting system. Utilized Razorpay SDK and continuous deployment on Vercel.'
    ],
    link: 'https://github.com/kushagra-a-singh/I.R.I.S-Prod-Website',
    image: '/images/website_img.png'
  },
  {
    title: 'PlantWise - Ayurvedic AI Companion',
    category: 'AI/ML',
    domain: 'ai-ml',
    tags: ['Cohere API', 'PyQt', 'RAG', 'NLP'],
    points: [
      'Built AI-driven health assistant using LLMs for disease prediction.',
      'Implemented RAG pipeline with PyQt GUI.',
      'Top 25 Finalist at Smart India Hackathon 2024.',
      'Achieved 89% user satisfaction across 500+ curated mappings.'
    ],
    link: 'https://github.com/kushagra-a-singh/PlantWise-SIH',
    image: '/images/plantwise1.jpg'
  },
  {
    title: 'Driver Safety Monitoring System',
    category: 'Embedded',
    domain: 'embedded',
    tags: ['Arduino', 'C++', 'IoT', 'Sensor Integration'],
    points: [
      'Integrated MQ3 alcohol sensor, accelerometer, GPS, GSM modules.',
      'Developed comprehensive system to monitor driver behavior.',
      'Detect alcohol presence and deliver real-time alerts.',
      'Enabled timely feedback for enhanced driver safety.'
    ],
    link: 'https://github.com/kushagra-a-singh/Embedded-Arduino-System-for-Car-Road-Safety',
    image: '/images/KushagraProj2-1.jpg'
  }
];
