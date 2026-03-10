type DetailImage = {
  src: string;
  alt: string;
};

type DetailSection = {
  title: string;
  body: string[];
  bullets?: string[];
  images?: DetailImage[];
  note?: string;
};

type ProjectEntry = {
  slug: string;
  title: string;
  year: string;
  image: string;
  summary: string;
  workType: "industry" | "academic" | "both";
  tags: string[];
  sections: DetailSection[];
};

type ExperienceHighlight = {
  title: string;
  goal: string;
  outcome: string;
  tools: string[];
};

type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  highlights: ExperienceHighlight[];
};

type SkillGroup = {
  title: string;
  tone: "blue" | "teal" | "amber" | "violet" | "slate";
  items: string[];
};

type PublicationEntry = {
  title: string;
  venue: string;
  date: string;
  href: string;
  keywords: string[];
};

const skillGroupDefinitions: Array<{
  title: SkillGroup["title"];
  tone: SkillGroup["tone"];
  matches: string[];
}> = [
  {
    title: "Machine Learning & AI",
    tone: "blue",
    matches: [
      "pytorch",
      "langchain",
      "rag",
      "gpt",
      "faiss",
      "mlflow",
      "hugging face",
      "kmeans",
      "k-means",
      "sktime",
      "arima",
      "prophet",
      "lstm",
      "bert4rec",
      "lightgbm",
      "xgboost",
      "optuna",
      "shap",
      "hipt",
      "prompt engineering",
      "gradient boosting",
      "dft",
      "lsda"
    ]
  },
  {
    title: "Data & Scientific Computing",
    tone: "teal",
    matches: [
      "python",
      "sql",
      "pyspark",
      "boto3",
      "pandas",
      "numpy",
      "opencv",
      "fortran",
      "scipy",
      "gtex",
      "simpy",
      "pca",
      "matplotlib"
    ]
  },
  {
    title: "Cloud & Infrastructure",
    tone: "amber",
    matches: [
      "amazon s3",
      "aws athena",
      "aws fargate",
      "aws glue",
      "aws step functions",
      "aws lambda",
      "amazon sagemaker",
      "batch transform",
      "docker",
      "slurm",
      "eurohpc",
      "linux"
    ]
  },
  {
    title: "Apps, APIs & Delivery",
    tone: "violet",
    matches: [
      "fastapi",
      "rest api",
      "dashboards",
      "reporting",
      "streamlit",
      "qlik",
      "ibm spss modeler"
    ]
  },
  {
    title: "Metrics & Evaluation",
    tone: "slate",
    matches: [
      "recall@k",
      "hit-rate@k",
      "bertscore",
      "f1",
      "precision@k",
      "roc-auc",
      "pr-auc",
      "calibration",
      "mae",
      "auroc",
      "bleu",
      "rouge-l",
      "service level",
      "silhouette",
      "monte carlo",
      "rietveld"
    ]
  }
];

function buildSkillGroups(entries: ExperienceEntry[]): SkillGroup[] {
  const uniqueTools = Array.from(
    new Set(entries.flatMap((entry) => entry.highlights.flatMap((highlight) => highlight.tools)))
  );

  const grouped = skillGroupDefinitions
    .map((group) => ({
      title: group.title,
      tone: group.tone,
      items: uniqueTools.filter((tool) => {
        const normalized = tool.toLowerCase();
        return group.matches.some((token) => normalized.includes(token));
      })
    }))
    .filter((group) => group.items.length > 0);

  const assigned = new Set(grouped.flatMap((group) => group.items));
  const uncategorized = uniqueTools.filter((tool) => !assigned.has(tool));

  if (uncategorized.length > 0) {
    grouped.push({
      title: "Other Tools",
      tone: "slate",
      items: uncategorized
    });
  }

  return grouped;
}

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
    title: "PhD in Computer Science",
    place: "Faculty of Engineering of the University of Porto (FEUP)",
    period: "2025 — 2029",
    logo: "images/education/logo_FEUP.png"
  },
  {
    title: "Master’s in Bioinformatics",
    place: "Faculty of Sciences of the University of Porto (FCUP)",
    period: "2021 — 2024",
    logo: "images/education/logo_FCUP.png"
  },
  {
    title: "B.Sc. in Physics",
    place: "Institute of Physics of the University of São Paulo (IFUSP)",
    period: "2013 — 2017",
    logo: "images/education/logo_IFUSP.png"
  }
];

export const experience: ExperienceEntry[] = [
  {
    role: "Data Scientist and AI Engineer",
    org: "Independent Contractor (B2B)",
    period: "Oct 2022 — Present",
    highlights: [
      {
        title: "ESG RAG chatbot SaaS",
        goal:
          "Build a multi-tenant chatbot for a sustainability-analytics platform, with tenant-isolated retrieval over ESG data, subscriber audits, and internal knowledge sources.",
        outcome:
          "Delivered a FastAPI microservice that powered dashboard Q&A flows while preserving data isolation across subscribers.",
        tools: ["Python", "LangChain", "RAG", "GPT", "FAISS", "Amazon S3", "FastAPI"]
      },
      {
        title: "Evaluation and system observability",
        goal:
          "Create an evaluation layer for retrieval quality, answer quality, hallucination checks, and service health so the chatbot could be monitored beyond anecdotal testing.",
        outcome:
          "Established an MLflow-based evaluation suite that gave continuous visibility into accuracy, relevance, p95 latency, and throughput.",
        tools: ["MLflow", "Recall@K", "Hit-Rate@K", "BERTScore", "F1"]
      },
      {
        title: "Product similarity automation",
        goal:
          "Automate supermarket product classification from raw catalog data by combining web enrichment, multimodal embeddings, REST serving, and containerized deployment.",
        outcome:
          "Raised classification throughput from roughly 1 item per minute to around 100 items per minute, sharply reducing manual labeling effort.",
        tools: ["AWS Athena", "Boto3", "Hugging Face", "PyTorch", "Docker", "AWS Fargate"]
      }
    ]
  },
  {
    role: "Data Scientist",
    org: "Yhub",
    period: "Dec 2020 — Oct 2022",
    highlights: [
      {
        title: "Demand-forecasting typology engine",
        goal:
          "Classify millions of supermarket time series into behavioral typologies so each product could be matched with a more appropriate forecasting family.",
        outcome:
          "Improved forecasting quality by routing sparse, seasonal, and recurrent series toward better-suited models instead of using a single global approach.",
        tools: ["PySpark", "AWS Glue", "AWS Athena", "KMeans", "sktime", "ARIMA", "Prophet", "LSTM"]
      },
      {
        title: "Forecast operations and APIs",
        goal:
          "Operationalize weekly retraining, experiment tracking, and forecast delivery so the system could support real stock-management workflows across stores.",
        outcome:
          "Delivered a repeatable forecasting service with MLflow tracking and REST endpoints that supported inventory planning decisions.",
        tools: ["AWS Step Functions", "AWS Lambda", "MLflow", "REST API"]
      },
      {
        title: "Basket-completion recommender",
        goal:
          "Build a next-product recommender for basket completion using a BERT4Rec-style training setup over retail transaction histories.",
        outcome:
          "Enabled both real-time and batch cross-sell recommendations across retail channels through online APIs and scheduled scoring jobs.",
        tools: ["BERT4Rec", "Amazon SageMaker", "FastAPI", "AWS Fargate", "Batch Transform", "Precision@K"]
      }
    ]
  },
  {
    role: "Data Scientist",
    org: "CTI Global",
    period: "Mar 2019 — Nov 2020",
    highlights: [
      {
        title: "Supply-chain simulation platform",
        goal:
          "Unify demand forecasting, simulation, and inventory optimization for a cosmetics supply chain in a single end-to-end planning workflow.",
        outcome:
          "Produced auditable planning outputs that guided procurement, distribution, and shelf-replenishment decisions.",
        tools: ["Python", "SQL", "IBM SPSS Modeler", "Monte Carlo", "Dashboards"]
      },
      {
        title: "Operational decision support",
        goal:
          "Turn simulation outputs into a traceable operational decision layer by persisting results and exposing them in reporting artifacts teams could actually use.",
        outcome:
          "Gave planners a clearer SQL-backed view of forecast and inventory recommendations, improving auditability and follow-through.",
        tools: ["SQL", "Python", "Reporting"]
      },
      {
        title: "Stock-out investigation",
        goal:
          "Identify where inventory policies were failing for a furniture retailer by reconstructing material flow and stress points across SKU-store combinations.",
        outcome:
          "Quantified lost sales, highlighted high-risk items, and supported revised replenishment parameters to reduce future stock-outs.",
        tools: ["Python", "SQL", "SimPy", "Service Level"]
      }
    ]
  },
  {
    role: "Data Scientist",
    org: "E/OU MRM",
    period: "Jan 2018 — Aug 2018",
    highlights: [
      {
        title: "Churn-prediction pipeline",
        goal:
          "Build an end-to-end churn-prediction pipeline with explainability so commercial teams could identify at-risk customers earlier.",
        outcome:
          "Surfaced high-risk cohorts and interpretable retention signals for BI dashboards and downstream retention campaigns.",
        tools: ["SQL", "Pandas", "LightGBM", "XGBoost", "Optuna", "MLflow", "SHAP"]
      },
      {
        title: "Retention analytics",
        goal:
          "Translate model validation into business-facing retention prioritization signals rather than leaving model quality as a purely technical artifact.",
        outcome:
          "Enabled the BI team to rank high-risk cohorts using lift, calibration, and ranking evidence with more confidence.",
        tools: ["ROC-AUC", "PR-AUC", "Calibration", "Qlik"]
      },
      {
        title: "Customer segmentation",
        goal:
          "Segment customers by purchasing behavior and product affinity so marketing actions could move beyond one-size-fits-all campaigns.",
        outcome:
          "Supported targeted offers and differentiated retention strategies through cleaner, behavior-based customer groups.",
        tools: ["Python", "Pandas", "PCA", "K-Means", "Silhouette"]
      }
    ]
  }
];

export const academic: ExperienceEntry[] = [
  {
    role: "Researcher",
    org: "University of Porto (Master’s Student)",
    period: "Oct 2022 — Jul 2024",
    highlights: [
      {
        title: "Pathology-report generation system",
        goal:
          "Unify computational pathology and clinical NLP into an automated report-generation workflow based on GTEx whole-slide images, HIPT features, and LLM orchestration.",
        outcome:
          "Delivered an end-to-end multimodal prototype capable of generating pathology-oriented reports under limited-compute constraints.",
        tools: ["PyTorch", "HIPT", "LangChain", "RAG", "Prompt Engineering", "GTEx"]
      },
      {
        title: "Evaluation and clinical interface",
        goal:
          "Evaluate each retrieval, prediction, and generation stage rigorously and package the workflow into an interface that non-specialists could test.",
        outcome:
          "Created an MLflow-tracked evaluation process and a Streamlit app that made the system reviewable by pathologists.",
        tools: ["MLflow", "Recall@K", "MAE", "AUROC", "BLEU", "ROUGE-L", "BERTScore", "Streamlit"]
      },
      {
        title: "Multimodal omics and molecular aging",
        goal:
          "Fuse omics and histology representations from GTEx lung and ovary samples to improve age prediction and study molecular-aging effects across tissues.",
        outcome:
          "Reached about a 4-year median age error, contributed to the 2024 Springer paper and Discovery Science presentation, and supported the smoking-aging study.",
        tools: ["PySpark", "OpenCV", "Optuna", "Slurm", "Gradient Boosting", "EuroHPC"]
      }
    ]
  },
  {
    role: "Researcher",
    org: "University of São Paulo",
    period: "Jan 2012 — Dec 2017",
    highlights: [
      {
        title: "Graphene and magnetic nanosystems",
        goal:
          "Implement an LSDA-based simulation pipeline for graphene nanosystems and automate DFT execution on a Slurm-managed cluster.",
        outcome:
          "Reached stable self-consistent solutions close to reference magnetic moments and narrowed down promising graphene structures for further study.",
        tools: ["Fortran", "DFT", "LSDA", "Slurm", "Python", "Linux"]
      },
      {
        title: "Crystal-structure analysis",
        goal:
          "Process X-ray diffraction datasets for crystal-structure determination through cleaning, refinement, and geometric analysis.",
        outcome:
          "Delivered faster phase identification and lattice-parameter estimates for downstream materials analysis.",
        tools: ["NumPy", "SciPy", "Matplotlib", "Rietveld"]
      },
      {
        title: "Antarctic radiation analysis",
        goal:
          "Clean and analyze raw net-radiation measurements from Comandante Ferraz Antarctic Station to make the signal usable for scientific interpretation.",
        outcome:
          "Generated monthly means and interannual baselines that informed micrometeorological and climate-impact studies for the Antarctic Peninsula.",
        tools: ["Python", "Pandas", "NumPy", "SciPy", "Matplotlib"]
      }
    ]
  }
];

export const skillGroups: SkillGroup[] = buildSkillGroups([...experience, ...academic]);

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

export const projects: ProjectEntry[] = [
  {
    slug: "automated-product-registration",
    title: "Multimodal Approach for Automated Product Registration",
    year: "2023",
    image: "images/portfolio/product_registration/product_registration.webp",
    summary:
      "Designed and developed a system to automate supermarket product registration with minimal human supervision, combining text, barcode, and image signals to classify products into an existing taxonomy.",
    workType: "industry",
    tags: ["LLMs", "CV", "NLP", "MLOps", "AWS"],
    sections: [
      {
        title: "Project Description",
        body: [
          "In 2023, while working for Yhub, I designed and developed a system to automate the registration of supermarket products with minimal human supervision.",
          "The system classifies products into an existing taxonomy of categories and subcategories, aiming to reduce manual labor through the application of machine learning, computer vision, and natural language processing technologies."
        ]
      },
      {
        title: "Workflow",
        body: [
          "The workflow combines text enrichment, visual understanding, and similarity search so the system can place new products into a structured taxonomy with minimal manual review."
        ],
        images: [
          {
            src: "images/portfolio/product_registration/autocad_workflow.png",
            alt: "Product registration workflow"
          }
        ]
      },
      {
        title: "Search Block",
        body: [
          "The Search Block enhances product descriptions before classification so the downstream system can work with richer semantic context.",
          "It relies on text embeddings and large language models to process and improve noisy or incomplete product descriptions."
        ],
        bullets: [
          "Function: enhances product descriptions using text embeddings.",
          "Technologies used: text embeddings from OpenAI and BERT.",
          "Large language models: GPT-4 and Llama2 for processing and enhancing product descriptions."
        ]
      },
      {
        title: "Vision Block",
        body: [
          "The Vision Block selects the most representative image for each product and infers relevant visual attributes.",
          "This improves classification quality when textual information is sparse or ambiguous."
        ],
        bullets: [
          "Function: selects the most representative image for each product and infers product attributes.",
          "Technologies used: CLIP fine-tuned with a proprietary database for correlating product images with descriptions.",
          "Multimodal inference: GPT-4 Vision for inferring attributes such as brand and manufacturer."
        ]
      },
      {
        title: "Similarity Search and Taxonomy Assignment",
        body: [
          "The Similarity Search Block is responsible for finding the closest match within a pre-defined taxonomy for each new product.",
          "It uses the enriched product descriptions and inferred attributes to search an existing database and assign the appropriate category.",
          "When no suitable class is found, the system can indicate that a new category may need to be created."
        ],
        bullets: [
          "Function: finds the closest match within a pre-defined taxonomy for new products.",
          "Approach: uses enriched product descriptions and attributes to perform similarity search against the existing database.",
          "Fallback behavior: assign a category when possible or signal the need for a new taxonomy class."
        ]
      },
      {
        title: "Implementation and Deployment",
        body: [
          "The system was modularized and deployed via APIs, encapsulated within Docker containers.",
          "AWS Fargate was used as the hosting platform, providing the compute resources required in a serverless environment."
        ],
        bullets: [
          "Deployment method: API-based services packaged in Docker containers.",
          "Hosting platform: AWS Fargate."
        ]
      }
    ]
  },
  {
    slug: "time-series-forecasting-graph-theory",
    title: "Demand Forecasting Through Time Series Classification using Graph Theory",
    year: "2022",
    image: "images/portfolio/time_series_forecasting/time_series.webp",
    summary:
      "Designed and developed a demand-forecasting system that classifies supermarket time series with graph theory and assigns forecasting models according to each series typology.",
    workType: "industry",
    tags: ["Time Series", "Graph Theory", "Clustering", "Forecasting"],
    sections: [
      {
        title: "Project Description",
        body: [
          "In 2022, while working for Yhub, I designed and developed a system to automate demand forecasting of supermarket products.",
          "The project started from the observation that products can exhibit very different time-series behaviors, ranging from sparse and stationary patterns to recurrent ones, and that not all forecasting algorithms are appropriate for every case.",
          "To address this, I developed a methodology based on graph theory to classify time series into distinct categories, each associated with a more suitable forecasting strategy."
        ]
      },
      {
        title: "Conversion of Time Series to Graphs",
        body: [
          "Using Visibility Graphs and Horizontal Visibility Graphs, the time series were transformed into graph structures.",
          "This transformation allowed the extraction of topological features such as clique number, node distribution, and connectivity, which served as representative characteristics of the original series."
        ],
        images: [
          { src: "images/portfolio/time_series_forecasting/VG.png", alt: "Visibility graph" },
          { src: "images/portfolio/time_series_forecasting/HVG.png", alt: "Horizontal visibility graph" }
        ],
        bullets: [
          "Function: transform time series data into graphs using the concept of Visibility Graphs.",
          "Technologies used: Python for general programming needs.",
          "Data manipulation: Pandas and NumPy.",
          "Graph conversion: `t2vg` for efficient computation of visibility graphs."
        ],
        note: "The illustrative VG and HVG figures were extracted from Silva et al. (2021)."
      },
      {
        title: "Feature Extraction and Clustering",
        body: [
          "The graph-derived features were analyzed in Python, with Pandas and NumPy supporting data manipulation and analysis.",
          "NetworkX was used to compute topological graph features, which were then used for clustering and model-selection analysis."
        ],
        bullets: [
          "Function: extract features from the visibility graphs obtained in the previous step.",
          "Technologies used: Python, Pandas, NumPy, and NetworkX."
        ]
      },
      {
        title: "Identification of Optimal Cluster Number",
        body: [
          "To classify the time series into meaningful groups, I applied k-means clustering and used elbow and silhouette analysis to determine an appropriate number of clusters.",
          "This helped ensure that the identified groups were both cohesive and distinct enough to support downstream interpretation."
        ],
        bullets: [
          "Function: employ elbow and silhouette analysis to determine the optimal number of clusters.",
          "Technologies used: Python, Pandas, NumPy, and Scikit-learn."
        ]
      },
      {
        title: "Cluster Analysis and Labeling",
        body: [
          "Once the clusters were established, I analyzed them statistically to characterize each group and understand its underlying behavior.",
          "This included measures such as mean, standard deviation, and quartiles, which helped label groups as sparse, seasonal, recurrent, and other meaningful categories."
        ],
        bullets: [
          "Function: compute statistical measures for each cluster and assign behavior-based labels.",
          "Technologies used: Python, Pandas, NumPy, and Scikit-learn."
        ]
      },
      {
        title: "Selection of Forecasting Techniques",
        body: [
          "After labeling the clusters, I assigned forecasting methods according to the behavior of each category.",
          "Sparse series were better handled with simple moving-average approaches, while autoregressive series benefited from combinations of autoregressive methods and random forests. Prophet was better suited to other recurrent or structured patterns."
        ],
        bullets: [
          "Function: assign appropriate forecasting techniques to each cluster based on its characteristics.",
          "Technologies used: Python and forecasting libraries such as ARIMA and Prophet."
        ]
      }
    ]
  }
];

export const publications: PublicationEntry[] = [
  {
    title: "The molecular impact of cigarette smoking resembles aging across tissues",
    venue: "Genome Medicine (2025)",
    date: "2025",
    href: "https://genomemedicine.biomedcentral.com/articles/10.1186/s13073-025-01485-x",
    keywords: [
      "histology",
      "histopathology",
      "whole-slide images",
      "tissue imaging",
      "GTEx",
      "aging",
      "smoking",
      "lung tissue",
      "multi-modal",
      "computational pathology"
    ]
  },
  {
    title: "Integration of multi-modal datasets to estimate human aging",
    venue: "Machine Learning (2024)",
    date: "Jul 2024",
    href: "https://link.springer.com/article/10.1007/s10994-024-06588-x",
    keywords: [
      "histology",
      "histopathology",
      "whole-slide images",
      "tissue imaging",
      "GTEx",
      "aging",
      "multi-modal",
      "omics",
      "lung tissue",
      "ovary tissue"
    ]
  },
  {
    title: "Predicting age from human lung tissue through multi-modal data integration",
    venue: "Discovery Science (2023)",
    date: "Oct 2023",
    href: "https://doi.org/10.1007/978-3-031-45275-8_43",
    keywords: [
      "histology",
      "histopathology",
      "whole-slide images",
      "lung tissue",
      "GTEx",
      "aging",
      "multi-modal",
      "computational pathology",
      "omics"
    ]
  }
];

export const thesis = {
  slug: "masters-thesis",
  title: "Automatic Report Generation from Histopathological Images",
  year: "2024",
  image: "images/masters/thumbnail.png",
  summary:
    "Developed a three-stage system for automatic pathology-report generation from lung whole-slide images, combining computational pathology, cross-modal retrieval, prompt engineering, and retrieval-augmented LLMs in a user-facing application.",
  workType: "academic" as const,
  highlights: [
    "Inference stage combines diagnosis retrieval, age prediction, and smoker-status classification.",
    "Generation stage uses prompt engineering and retrieval-augmented generation to ground reports in literature.",
    "Designed to be maintainable, accessible to non-specialists, and usable under limited computational resources."
  ],
  sections: [
    {
      title: "Abstract",
      body: [
        "The thesis investigates automatic pathology-report generation from histopathological Whole Slide Images by combining recent advances in computational pathology, multimodal learning, and clinical natural language processing.",
        "Although deep learning and foundation models have advanced histopathology tasks such as detection, segmentation, captioning, visual question answering, and cross-modal retrieval, these strategies are still rarely integrated into a single system for report generation.",
        "The work was guided by three premises: keep the methodology reproducible under limited computational resources, keep the architecture modular and maintainable, and make the final system accessible to end users outside specialist computing environments.",
        "Focused on lung tissue, the resulting workflow is divided into Inference, Aggregation, and Generation. It predicts demographic attributes, retrieves diagnosis information from similar cases, converts that evidence into a structured caption, and finally produces a pathology report with an LLM enhanced by prompt engineering and retrieval-augmented generation.",
        "The final results are not yet suitable for real clinical deployment, but they demonstrate that these technologies can be combined into a practical experimental system for histopathology even in resource-constrained settings."
      ]
    },
    {
      title: "Data Collection and Preparation",
      body: [
        "The dataset comes from the Genotype-Tissue Expression project, a public resource that supports research on tissue- and cell-specific gene expression and regulation. In this work, only the Adult GTEx collection was used.",
        "I focused on lung tissue samples from post-mortem subjects and built the preprocessing pipeline with Python and Bash scripts.",
        "The pipeline first downloads the whole-slide images from GTEx, then segments each slide into 4096x4096 patches, and finally extracts three types of features with the Hierarchical Image Pyramid Transformer.",
        "Those features are reused across the later modules of the report-generation system, which keeps the downstream workflow consistent and computationally manageable."
      ],
      images: [
        { src: "images/masters/data_collection.png", alt: "Data collection and preparation pipeline" }
      ],
      bullets: [
        "Source dataset: Adult GTEx.",
        "Target domain: lung histopathology.",
        "Patch extraction: 4096x4096 regions from whole-slide images.",
        "Feature backbone: HIPT."
      ]
    },
    {
      title: "System Architecture",
      body: [
        "For didactic clarity, the system is divided into three stages: inference, aggregation, and generation.",
        "In the Inference stage, three modules produce the core evidence used later in the report: Diagnosis Retriever retrieves notes from the most similar cases, Age Prediction estimates chronological age, and Smoker Classification predicts whether the patient is a non-smoker, smoker, or ex-smoker.",
        "The Aggregation stage synthesizes the outputs of those models into a concise caption that combines demographic and clinical characteristics of the patient and tissue sample.",
        "The Generation stage relies on LLM-based agents. A Questioner Agent creates clinically relevant questions, a Q&E Agent answers them using literature scraped from sources such as PubMed, bioRxiv, and selected histology references, and a final Report Agent writes the pathology report using the caption plus the retrieved evidence."
      ],
      images: [
        { src: "images/masters/mthesis_workflow.png", alt: "Master's thesis system architecture" }
      ],
      bullets: [
        "INF: Diagnosis Retriever, Age Prediction, Smoker Classification.",
        "AGG: caption generation from inferred evidence.",
        "GEN: question generation, evidence retrieval, and final report writing.",
        "LLM enhancement: prompt engineering plus retrieval-augmented generation."
      ]
    },
    {
      title: "User Interface",
      body: [
        "The application encapsulates the full workflow, from feature extraction to final report generation, inside a single interface.",
        "One of the goals was to show that the research system could be exposed to users without requiring direct familiarity with GitHub, Python environments, LangChain, or PyTorch.",
        "By packaging the pipeline into an app, the prototype becomes much easier to evaluate, demonstrate, and use in educational or exploratory contexts."
      ],
      images: [
        { src: "images/masters/app_a.png", alt: "Master's thesis application screen A" },
        { src: "images/masters/app_b.png", alt: "Master's thesis application screen B" },
        { src: "images/masters/app_c.png", alt: "Master's thesis application screen C" }
      ]
    },
    {
      title: "Outcome Example",
      body: [
        "An example generated report shows that the system could correctly recover pathologies such as fibrosis, hemorrhage, and pneumonia from the case context.",
        "At the same time, it also produced false additions, including congestion and edema, which were not mentioned in the ground-truth reference.",
        "This balance between promising capability and clear clinical limitations is central to the thesis conclusion: the system is useful as a research prototype, but not yet reliable enough for deployment in real diagnostic settings."
      ],
      images: [
        { src: "images/masters/report.png", alt: "Example generated pathology report" }
      ]
    },
    {
      title: "Future Work",
      body: [
        "A natural extension of the thesis is to move from identifying likely pathologies to localizing them spatially within the whole-slide image.",
        "Using the CONCH foundation model, it is possible to extract embeddings from 256x256 patches across the slide and compare them with pathology-specific text prompts through cosine similarity.",
        "These scores can be visualized as heatmaps that highlight the most likely pathology regions, making the system more interpretable and potentially more useful for assisted review.",
        "With more computational resources, the model could also be fine-tuned on GTEx-derived data to improve both localization quality and downstream report generation."
      ],
      images: [
        { src: "images/masters/wsi_maps.png", alt: "Whole-slide pathology probability heatmaps" }
      ],
      note:
        "These heatmaps are derived from cosine similarity between patch embeddings and pathology prompts. They should be interpreted as visual evidence scores rather than calibrated clinical probabilities."
    }
  ]
};

export const resume = {
  label: "Download CV",
  href: "files/Athos_CV_2024_ENG.pdf"
};
