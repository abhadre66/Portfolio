export const resumeData = {
  basics: {
    name: "Abhishek Bhadre",
    title: "Data Engineer & AI Practitioner",
    summary:
      "Data Engineer and AI practitioner with experience building Python-based data pipelines, REST APIs, and Kafka streaming systems. Applied computer vision and agentic AI to production-like projects, leveraging Pandas, NumPy, and SciPy to turn large-scale image and text data into reliable, actionable insights.",
    location: "Chicago, IL",
    email: "abhadre@hawk.iit.edu",
    phone: "(872) 288 3802",
    links: {
      linkedin: "LinkedIn",
      github: "Github",
    },
  },
  experience: [
    {
      company: "RAWATTECH",
      role: "Data Science (Intern)",
      dates: "Sep 2022 - May 2023",
      bullets: [
        "Engineered a YOLO-based computer vision pipeline in Python to accurately detect and count pipe types, improving detection accuracy by 30% and optimizing inventory management workflows.",
        "Enhanced model performance by 20% through strategic dataset expansion using pandas, re-annotating 500+ images and applying advanced data augmentation techniques to achieve 85.4% accuracy.",
        "Curated and processed 10,000+ images while conducting rigorous testing on super-resolution and defect detection models on cloud infrastructure, improving dataset quality, model robustness, and overall system reliability.",
      ],
    },
  ],
  achievements: [
    {
      metric: "30%",
      context: "Improved detection accuracy with YOLO-based CV pipeline",
      type: "metrics",
    },
    {
      metric: "20%",
      context: "Enhanced model performance through dataset expansion",
      type: "metrics",
    },
    {
      metric: "85.4%",
      context: "Achieved accuracy with advanced data augmentation",
      type: "metrics",
    },
    {
      metric: "10,000+",
      context: "Images curated and processed",
      type: "metrics",
    },
    {
      metric: "500+",
      context: "Images re-annotated for dataset expansion",
      type: "metrics",
    },
    {
      metric: "32M",
      context: "Amazon reviews processed for sentiment prediction",
      type: "metrics",
    },
    {
      metric: "20%",
      context: "Accuracy improvement across 5 ML models",
      type: "metrics",
    },
    {
      metric: "15%",
      context: "Performance gain through hyperparameter optimization",
      type: "metrics",
    },
    {
      metric: "10K+",
      context: "Music tracks processed in data pipeline",
      type: "metrics",
    },
    {
      metric: "53.34%",
      context: "XGBoost genre classification accuracy",
      type: "metrics",
    },
    {
      metric: "25%",
      context: "Faster predictions with integrated UI",
      type: "metrics",
    },
    {
      metric: "30%",
      context: "Better usability with real-time results display",
      type: "metrics",
    },
  ],
  topImpact: [
    {
      metric: "32M",
      context: "Amazon reviews processed end-to-end",
    },
    {
      metric: "30%",
      context: "Detection accuracy improvement with YOLO pipeline",
    },
    {
      metric: "10,000+",
      context: "Images curated & processed on cloud infrastructure",
    },
  ],
  projects: [
    {
      title: "CodeSyntax AI",
      subtitle: "Retrieval-Augmented Developer Documentation Assistant",
      stack: ["Python", "FastAPI", "Kafka", "FAISS", "Streamlit", "LLM"],
      bullets: [
        "Built a multi-source RAG-based Python assistant for coding, debugging, and conceptual queries using structured documentation and real-world developer discussions.",
        "Designed a data ingestion pipeline using Python, FastAPI, and Kafka to convert large-scale text into embeddings and load them into a FAISS vector database for low-latency semantic retrieval.",
        "Developed a REST API retrieval service that integrates relevant context with an LLM to deliver accurate code explanations and examples via FastAPI endpoints.",
        "Implemented a Streamlit chat interface with source attribution and exact URL mapping, enabling users to trace responses to specific references.",
      ],
    },
    {
      title: "Whar's My Music..?",
      subtitle: "Emotion-Aware Music Recommendation & Generation",
      stack: ["Flutter", "Python", "FastAPI", "XGBoost", "LSTM", "Pandas"],
      bullets: [
        "Built a full-stack, emotion-aware music recommendation and generation system with a Flutter interface and Python-based ML backend.",
        "Integrated an XGBoost genre classifier and LSTM-based MIDI generator into a conversational chatbot API served via FastAPI, achieving 53.34% classification accuracy.",
        "Engineered an end-to-end data pipeline in Python and Pandas to process 10K+ tracks, apply feature engineering, and store simplified emotional labels for real-time inference.",
      ],
    },
    {
      title: "Amazon Review Prediction Using NLP",
      subtitle: "Sentiment Analysis at Scale",
      stack: ["Python", "NLP", "ML/DL", "Pickle"],
      bullets: [
        "Developed an Amazon Review Sentiment Prediction system from end to end using Python, NLP, ML/DL techniques, and a custom UI; processed a dataset of 32 million reviews, eliminated more than 10,000 stop-words and phrases, and divided data into 5 sentiment classes.",
        "Trained and tuned 5 machine learning models with 20% accuracy improvement and 15% performance gain through hyperparameter optimization.",
        "Integrated the final model with Pickle into a user interface that supported 50+ sample reviews and custom inputs providing 25% faster predictions and 30% better usability due to real-time results display, confidence scoring, and storage of the last 100 predictions.",
      ],
    },
  ],
  skills: [
    {
      category: "Programming & Frameworks",
      items: ["Python", "FastAPI", "REST APIs", "Git"],
    },
    {
      category: "Data Engineering & Infrastructure",
      items: ["Data Pipeline Development", "Kafka", "Cloud Infrastructure"],
    },
    {
      category: "Data Analysis & Visualization",
      items: [
        "Pandas",
        "Jupyter",
        "NumPy",
        "SciPy",
        "Matplotlib",
        "Data Analysis",
        "Statistical Data Analysis",
        "Data Visualization",
      ],
    },
    {
      category: "Machine Learning & AI",
      items: [
        "Machine Learning",
        "NLP",
        "DL",
        "Web Scrapping",
        "Retrieval-Augmented Generation (RAG)",
        "Large Language Models (LLMs)",
        "Semantic Search",
        "Vector Databases (FAISS)",
        "HuggingFace Transformers",
        "OpenAI API",
        "Agentic AI",
      ],
    },
  ],
  education: [
    {
      institution: "Illinois Institute Of Technology",
      degree: "Master, Artificial Intelligence",
      dates: "Aug 2024 - May 2026",
    },
    {
      institution: "Vishwakarma Institute Of Technology",
      degree: "Bachelor of Technology, Instrumentation",
      dates: "Aug 2019 - Jun 2023",
    },
  ],
  certifications: [
    "Microsoft Certificate - Azure Fundamentals",
    "SQL - Problem Solving 2022 - Hacker Rank",
    "INGENIOUS 2021 - Virtual Hackathon",
  ],
};
