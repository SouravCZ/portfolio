export const projects = [
  {
    id: "01",
    slug: "parivekshan-ai",
    title: "Parivekshan AI",
    role: "AI Decision Support System",
    subrole: "Predictive Land Acquisition Delay Monitoring",
    image: "/projects/parivekshan-ai.jpg",
    imgPlaceholder: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
    link: "https://github.com/SouravCZ/byte-freaks",
    summary:
      "Led a team of 5-6 (\"Byte Freaks\") building an AI decision-support platform for District Collectorates to predict land acquisition delays, aligned to RFCTLARR 2013, the National Highways Act 1956, and PM Gati Shakti.",
    challenge:
      "Creating an intuitive, scalable platform that bridges complex machine learning predictions with actionable insights for government administrators.",
    highlights: [
      "Leading a 5-6 person team (\"Byte Freaks\") building an AI decision-support platform for District Collectorates to predict land acquisition delays, aligned to RFCTLARR 2013, the National Highways Act 1956, and PM Gati Shakti.",
      "Trained an XGBoost 4-class risk classifier (Low/Medium/High/Critical) on 29 engineered features, reaching 85.7% accuracy and 0.856 F1, with SHAP explainability surfacing key risk drivers such as compensation gap percentage.",
      "Built the full-stack frontend (React, Vite, Tailwind CSS, Recharts, MapLibre GL) with a live dashboard, project-level risk gauges, an SLA-based alert queue, and a district-level analytics heat-matrix.",
      "Live-scores all 66 real West Bengal infrastructure projects against the trained model via a FastAPI ML server proxied through the Node.js/Express and PostGIS backend."
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "PostGIS", "Python", "XGBoost", "SHAP", "FastAPI"]
  },
  {
    id: "02",
    slug: "student-analytics",
    title: "Student Analytics",
    role: "Predictive Dashboard",
    subrole: "Student Performance & Attendance Analytics System",
    imgPlaceholder: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
    link: "https://student-analytics-wsy5.vercel.app",
    summary:
      "Built and deployed a full-stack analytics platform to track student marks and attendance across subjects and semesters, with ML-powered dropout-risk prediction for early faculty intervention.",
    challenge:
      "Integrating disparate educational datasets into a unified predictive model that accurately flags at-risk students for early intervention.",
    highlights: [
      "Built and deployed a full-stack analytics platform to track student marks and attendance across subjects and semesters.",
      "Developed a machine learning engine using Logistic Regression and Random Forest to predict dropout/failure risk with confidence scores for early faculty intervention.",
      "Implemented an automated alert system that flags at-risk students and generates faculty-facing PDF and CSV reports."
    ],
    tech: ["Flask", "React", "MySQL", "Pandas", "Scikit-learn"]
  },
  {
    id: "03",
    slug: "churn-predictor",
    title: "Churn Predictor",
    role: "ML Classification App",
    subrole: "Customer Churn Prediction",
    imgPlaceholder: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
    link: "https://github.com/SouravCZ/churn-prediction",
    summary:
      "Built an end-to-end classification model to predict customer churn, enabling businesses to proactively identify and retain at-risk customers.",
    challenge:
      "Ensuring the machine learning model not only predicts accurately but also provides interpretable drivers for churn to business stakeholders.",
    highlights: [
      "Built an end-to-end classification model to predict customer churn, enabling businesses to proactively identify and retain at-risk customers.",
      "Delivered as a Flask web application with an interactive SHAP-based explainability dashboard on top of the trained model.",
      "Completed the full machine learning workflow: EDA, feature engineering, model training, and evaluation using accuracy, precision, recall, and AUC-ROC."
    ],
    tech: ["Python", "Flask", "Pandas", "Scikit-learn", "NumPy", "SHAP"]
  },
  {
    id: "04",
    slug: "credit-risk-scoring",
    title: "Credit Risk Scoring",
    role: "Financial Data Pipeline",
    subrole: "ML Learning Project on the South German Credit Dataset",
    imgPlaceholder: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
    link: "https://github.com/SouravCZ",
    summary:
      "Built a structured credit risk pipeline on the South German Credit dataset: EDA, feature engineering, and model comparison between Logistic Regression and XGBoost.",
    challenge:
      "Handling imbalanced financial datasets and ensuring low-latency inference for real-time credit scoring.",
    highlights: [
      "Built a structured credit risk pipeline on the South German Credit dataset: EDA, feature engineering, and model comparison between Logistic Regression and XGBoost.",
      "Added SHAP-based explainability for model predictions and served the trained model through a FastAPI inference endpoint (/predict, /explain)."
    ],
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost", "SHAP", "FastAPI"]
  },
  {
    id: "05",
    slug: "finance-analytics-dashboard",
    title: "Finance Analytics Dashboard",
    role: "Personal Project",
    subrole: "Spending & Financial Trend Analyzer",
    imgPlaceholder: "from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900",
    link: "https://github.com/SouravCZ/finance-analytics-system",
    summary:
      "Built an interactive web dashboard using Flask and Pandas to analyze spending patterns and visualize financial trends dynamically.",
    challenge:
      "Surface actionable insights from raw transaction data through intuitive dynamic filtering and interactive charts.",
    highlights: [
      "Built an interactive web dashboard using Flask and Pandas to analyze spending patterns and visualize financial trends dynamically.",
      "Implemented dynamic filtering and chart generation to surface actionable insights from transaction data; deployed as a fully functional web app."
    ],
    tech: ["Python", "Flask", "Pandas", "HTML/CSS"]
  }
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);