export const profile = {
  name: "Athos Moraes",
  title: "Data Scientist & Bioinformatics Researcher",
  location: "Porto, Portugal",
  email: "athos.m.moraes@gmail.com",
  avatar: "images/profile.jpeg",
  highlights: [
    "Master’s in Bioinformatics at the University of Porto; seeking a PhD position.",
    "Research focus: multi-modal learning across vision, text, and multi-omics.",
    "Thesis: automatic report generation from histopathology images using CV + NLP.",
    "Data Scientist / ML Engineer with experience across retail, supply chain, and healthcare."
  ],
  summary:
    "With a background in Physics, I’ve been working as a Data Scientist since 2018, delivering solutions across retail, supply chain, and healthcare. I enjoy building data products end-to-end, from modeling and experimentation to deployment.",
  socials: [
    { label: "GitHub", href: "https://github.com/4th05" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/athosmoraes" },
    { label: "ORCID", href: "https://orcid.org/0009-0009-5352-8304" }
  ]
};

export const education = [
  {
    title: "Master’s in Bioinformatics",
    place: "University of Porto (UP)",
    period: "2021 — 2024"
  },
  {
    title: "B.Sc. in Physics",
    place: "University of São Paulo (USP)",
    period: "2013 — 2017"
  }
];

export const experience = [
  {
    role: "Data Scientist",
    org: "Yhub, São Paulo",
    period: "Dec 2020 — Jan 2024",
    bullets: [
      "Created data-driven solutions using Python and PySpark in retail.",
      "Built NLP classification, product similarity vectorization, and demand forecasting pipelines."
    ]
  },
  {
    role: "Data Scientist",
    org: "CTI Global, São Paulo",
    period: "Mar 2019 — Nov 2020",
    bullets: [
      "Consulted on supply chain challenges and demand prediction models.",
      "Applied ML techniques to develop comprehensive supply chain models."
    ]
  },
  {
    role: "Front-end Developer",
    org: "WeMind, São Paulo",
    period: "Oct 2018 — Jan 2019",
    bullets: [
      "Integrated data science solutions into interactive web dashboards."
    ]
  },
  {
    role: "Data Scientist / BI Analyst",
    org: "E/OU MRM, São Paulo",
    period: "Jan 2018 — Aug 2018",
    bullets: [
      "Built churn prediction and customer segmentation models.",
      "Improved data-driven decision-making through clustering and analytics."
    ]
  }
];

export const academic = [
  {
    role: "Master’s Student",
    org: "University of Porto",
    period: "Oct 2022 — Present",
    bullets: [
      "Researching computer vision in histopathology across multiple organs.",
      "Focused on phenotype relationships and multi-modal inference."
    ]
  },
  {
    role: "CNPq Researcher",
    org: "University of São Paulo (IF-USP)",
    period: "2015 — 2017",
    bullets: [
      "Studied atomic-level magnetic structures in nanomaterials using DFT/LSDA."
    ]
  },
  {
    role: "CNPq Researcher",
    org: "University of São Paulo (IAG-USP)",
    period: "2012 — 2013",
    bullets: [
      "Analyzed monthly mean radiation balance in the Antarctic region."
    ]
  }
];

export const skills = [
  "Python",
  "PySpark",
  "SQL",
  "Pandas",
  "NumPy",
  "Spark ML",
  "Scikit-learn",
  "TensorFlow",
  "Keras",
  "PyTorch",
  "Statistics",
  "Linux",
  "AWS (EC2, S3, Athena, SageMaker)",
  "Git (GitHub, Bitbucket)",
  "Dash",
  "Streamlit",
  "Plotly",
  "Matplotlib",
  "Django",
  "Angular",
  "React",
  "JavaScript",
  "Flask",
  "FastAPI"
];

export const languages = [
  { label: "Portuguese", level: "Native" },
  { label: "English", level: "C1" }
];

export const certifications = [
  "Data Science Professional Certificate — IBM (Coursera)",
  "Applied Data Science with Python — University of Michigan (Coursera)",
  "Deep Learning in Astronomy — IAG/USP",
  "Practical Time Series Analysis — SUNY (Coursera)"
];

export const projects = [
  {
    title: "Multimodal Approach for Automated Product Registration",
    year: "2023",
    image: "images/portfolio/product_registration/product_registration.webp",
    summary:
      "Built a system to classify supermarket products into a taxonomy using textual descriptions, bar codes, and images with LLMs, GANs, and contrastive learning.",
    tags: ["LLMs", "CV", "NLP", "MLOps", "AWS"]
  },
  {
    title: "Demand Forecasting Through Time Series Classification using Graph Theory",
    year: "2022",
    image: "images/portfolio/time_series_forecasting/time_series.webp",
    summary:
      "Developed a pipeline using visibility graphs to classify time series and assign specialized forecasting models per series typology.",
    tags: ["Time Series", "Graph Theory", "Clustering", "Forecasting"]
  }
];

export const publications = [
  {
    title: "Integration of multi-modal datasets to estimate human aging",
    venue: "Machine Learning, Springer (2024)",
    date: "Jul 2024",
    href: "https://link.springer.com/10.1007/s10994-024-06588-x"
  },
  {
    title: "Cigarette smoking drives accelerated aging across human tissues",
    venue: "bioRxiv (2024)",
    date: "Mar 2024",
    href: "https://www.biorxiv.org/content/10.1101/2024.03.14.585016.abstract"
  },
  {
    title: "Predicting Age from Human Lung Tissue Through Multi-modal Data Integration",
    venue: "Discovery Science, Springer (2023)",
    date: "Oct 2023",
    href: "https://link.springer.com/chapter/10.1007/978-3-031-45275-8_43"
  }
];

export const thesis = {
  title: "Automatic Report Generation from Histopathological Images",
  year: "2024",
  image: "images/masters/mthesis_workflow.png",
  summary:
    "Built a multi-stage system (Inference, Aggregation, Generation) to produce pathology reports from whole slide images, integrating CV, NLP, and RAG-driven LLMs in a user-friendly app.",
  highlights: [
    "Multi-modal inference for age prediction, smoker status, and diagnosis retrieval.",
    "LLM generation enhanced with prompt engineering and retrieval.",
    "Designed for accessibility and limited compute environments."
  ]
};

export const resume = {
  label: "Download CV",
  href: "files/Athos_CV_2024_ENG.pdf"
};
