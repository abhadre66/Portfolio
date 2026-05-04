export const resumeData = {
  basics: {
    name: "Abhishek Bhadre",
    title: "AI Engineer",
    summary:
      "AI Engineer and M.S. Artificial Intelligence candidate with production experience building end-to-end ML systems — from computer vision pipelines deployed on Kubernetes to full-stack RAG applications serving LLM-powered responses. Strong Python and systems fundamentals, with a track record of shipping models that move real metrics: +30% detection accuracy in production, 99.2% F1 on text classification, and 25% faster inference on deployed services. Passionate about designing scalable, reliable AI software that users actually touch.",
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
        "Designed and shipped a YOLO-based computer vision pipeline in Python (OOP) that detects and classifies industrial pipe inventory from warehouse imagery, improving detection accuracy by 30% and replacing a manual counting workflow.",
        "Containerized model inference with Docker and deployed on Kubernetes clusters, enabling horizontal scaling and cutting per-image inference latency in a production environment.",
        "Scaled training data from a few hundred to 10,000+ curated images; re-annotated 500+ edge cases and built a NumPy/Pandas augmentation pipeline that pushed model accuracy to 85.4% (+20% lift) on held-out test data.",
        "Designed normalized SQL schemas to store image metadata and inference outputs, giving downstream teams a queryable source of truth for model performance and inventory analytics.",
      ],
    },
  ],
  achievements: [
    { metric: "99.2%", context: "F1 score on AI-generated text detection (AuthentiText)", type: "metrics" },
    { metric: "99.96%", context: "AUROC on AI-generated text detection", type: "metrics" },
    { metric: "30%", context: "Detection accuracy improvement with YOLO pipeline", type: "metrics" },
    { metric: "85.4%", context: "Accuracy with NumPy/Pandas augmentation pipeline", type: "metrics" },
    { metric: "10,000+", context: "Images curated and processed", type: "metrics" },
    { metric: "500+", context: "Edge-case images re-annotated", type: "metrics" },
    { metric: "32M+", context: "Amazon reviews processed for sentiment prediction", type: "metrics" },
    { metric: "25%", context: "Faster inference on deployed services", type: "metrics" },
    { metric: "20%", context: "Accuracy improvement across 5 ML models", type: "metrics" },
    { metric: "35+", context: "Pytest unit tests for CodeSyntax AI", type: "metrics" },
    { metric: "55", context: "Questions in regression eval harness", type: "metrics" },
    { metric: "21", context: "Handcrafted linguistic features fused with transformers", type: "metrics" },
  ],
  topImpact: [
    { metric: "99.2%", context: "F1 on AI-generated text detection" },
    { metric: "+30%", context: "Detection accuracy with YOLO pipeline in production" },
    { metric: "32M+", context: "Amazon reviews processed end-to-end" },
  ],
  projects: [
    {
      title: "CodeSyntax AI",
      subtitle: "Full-Stack RAG Developer Assistant",
      stack: ["Python", "FastAPI", "Next.js", "LangChain", "Pinecone", "Docker", "GitHub Actions"],
      bullets: [
        "Built and deployed a production Retrieval-Augmented Generation application that answers Python developer questions by retrieving from Python Docs, RealPython, and StackOverflow and generating grounded responses with GPT-4o-mini and OpenAI embeddings stored in a Pinecone vector index.",
        "Engineered an LLM-based intent router with query classification, authority-weighted re-ranking, and multi-turn conversation support via chat-history condensing in LangChain — reducing irrelevant retrievals and improving answer quality.",
        "Wrote 35+ pytest unit tests and a 55-question evaluation harness to regression-test answer quality; set up a GitHub Actions CI/CD pipeline with Docker builds deploying to Railway (API) and Vercel (frontend).",
        "Shipped a responsive React 19 + TypeScript + Tailwind chat UI with markdown rendering, syntax highlighting, and inline source citations.",
      ],
    },
    {
      title: "AuthentiText",
      subtitle: "AI-Generated Text Detection Engine",
      stack: ["Python", "XGBoost", "DistilBERT", "HuggingFace", "GCP", "Docker"],
      bullets: [
        "Built a dual-model ensemble (XGBoost + fine-tuned DistilBERT) that detects AI-generated text with 99.2% F1 and 99.96% AUROC, fusing 21 handcrafted linguistic features (perplexity, burstiness, lexical density) with transformer embeddings.",
        "Engineered the full NLP pipeline end-to-end: data collection via GPT-4 API and the HC3 dataset, feature extraction, hyperparameter tuning, and production deployment on GCP via Docker and GitHub Actions CI/CD.",
        "Benchmarked 4 model architectures (Logistic Regression, Random Forest, XGBoost, DistilBERT) with ROC curves, confusion matrices, and SHAP analysis; built a token-level heatmap visualizer for model explainability.",
      ],
    },
    {
      title: "Amazon Review Sentiment Prediction",
      subtitle: "Sentiment Analysis at Scale",
      stack: ["Python", "Scikit-learn", "TensorFlow", "NLP"],
      bullets: [
        "Processed 32M+ Amazon reviews across 5 sentiment classes; trained and tuned 5 ML/DL models, improving accuracy by 20% through hyperparameter optimization.",
        "Shipped a user-facing interface with real-time inference and confidence scoring, delivering 25% faster predictions than the baseline notebook workflow.",
      ],
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "SQL", "Go", "Java", "C++"],
    },
    {
      category: "ML / AI",
      items: [
        "PyTorch",
        "TensorFlow",
        "Scikit-learn",
        "XGBoost",
        "HuggingFace Transformers",
        "LangChain",
        "RAG",
        "LLMs",
        "Semantic Search",
        "Prompt Engineering",
        "Computer Vision",
        "NLP",
      ],
    },
    {
      category: "Systems & Infra",
      items: [
        "Docker",
        "Kubernetes",
        "CI/CD (GitHub Actions)",
        "AWS",
        "GCP",
        "FastAPI",
        "REST APIs",
        "MySQL",
        "Pinecone",
        "FAISS",
        "Git",
      ],
    },
    {
      category: "Frontend",
      items: ["React", "Next.js", "Tailwind CSS"],
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
    "Microsoft Certified: Azure Fundamentals (AZ-900)",
    "HackerRank: SQL Problem Solving (2022)",
    "INGENIOUS 2021: National Virtual Hackathon Participant",
  ],
};
