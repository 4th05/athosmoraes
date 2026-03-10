export type SkillInfo = {
  name: string;
  category: string;
  use: string;
  href: string;
};

export const skillInfoByName: Record<string, SkillInfo> = {
  "ARIMA": {
    name: "ARIMA",
    category: "Machine Learning & AI",
    use: "Classical forecasting model for autoregressive and differenced time series.",
    href: "https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average"
  },
  "AUROC": {
    name: "AUROC",
    category: "Metrics & Evaluation",
    use: "Area under the ROC curve, used to assess ranking quality in binary classification.",
    href: "https://en.wikipedia.org/wiki/Receiver_operating_characteristic"
  },
  "AWS Athena": {
    name: "AWS Athena",
    category: "Cloud & Infrastructure",
    use: "Serverless query service for running SQL directly on data stored in S3.",
    href: "https://docs.aws.amazon.com/athena/"
  },
  "AWS Fargate": {
    name: "AWS Fargate",
    category: "Cloud & Infrastructure",
    use: "Serverless container runtime used to deploy APIs and inference services without managing servers.",
    href: "https://docs.aws.amazon.com/fargate/"
  },
  "AWS Glue": {
    name: "AWS Glue",
    category: "Cloud & Infrastructure",
    use: "Managed ETL and Spark platform for large-scale data preparation jobs.",
    href: "https://docs.aws.amazon.com/glue/"
  },
  "AWS Lambda": {
    name: "AWS Lambda",
    category: "Cloud & Infrastructure",
    use: "Event-driven serverless compute for automation, orchestration, and lightweight backend logic.",
    href: "https://docs.aws.amazon.com/lambda/"
  },
  "AWS Step Functions": {
    name: "AWS Step Functions",
    category: "Cloud & Infrastructure",
    use: "Workflow orchestrator for coordinating retraining, batch jobs, and multi-step pipelines.",
    href: "https://docs.aws.amazon.com/step-functions/"
  },
  "Amazon S3": {
    name: "Amazon S3",
    category: "Cloud & Infrastructure",
    use: "Object storage for datasets, embeddings, artifacts, and model outputs.",
    href: "https://docs.aws.amazon.com/s3/"
  },
  "Amazon SageMaker": {
    name: "Amazon SageMaker",
    category: "Cloud & Infrastructure",
    use: "Managed platform for training, tuning, and serving machine-learning models.",
    href: "https://docs.aws.amazon.com/sagemaker/"
  },
  "BERT4Rec": {
    name: "BERT4Rec",
    category: "Machine Learning & AI",
    use: "Transformer-based recommendation approach for sequence-aware item prediction.",
    href: "https://arxiv.org/abs/1904.06690"
  },
  "BERTScore": {
    name: "BERTScore",
    category: "Metrics & Evaluation",
    use: "Semantic text-generation metric based on contextual embeddings rather than exact token overlap.",
    href: "https://github.com/Tiiiger/bert_score"
  },
  "BLEU": {
    name: "BLEU",
    category: "Metrics & Evaluation",
    use: "Text-generation metric based on n-gram overlap with reference outputs.",
    href: "https://en.wikipedia.org/wiki/BLEU"
  },
  "Batch Transform": {
    name: "Batch Transform",
    category: "Cloud & Infrastructure",
    use: "SageMaker batch inference mode for scheduled large-scale scoring jobs.",
    href: "https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html"
  },
  "Boto3": {
    name: "Boto3",
    category: "Data & Scientific Computing",
    use: "Python SDK for interacting programmatically with AWS services.",
    href: "https://boto3.amazonaws.com/v1/documentation/api/latest/index.html"
  },
  "Calibration": {
    name: "Calibration",
    category: "Metrics & Evaluation",
    use: "Evaluation of how well predicted probabilities align with observed outcomes.",
    href: "https://en.wikipedia.org/wiki/Calibration_(statistics)"
  },
  "DFT": {
    name: "DFT",
    category: "Machine Learning & AI",
    use: "Density Functional Theory method for electronic-structure simulations in physics and materials science.",
    href: "https://en.wikipedia.org/wiki/Density_functional_theory"
  },
  "Dashboards": {
    name: "Dashboards",
    category: "Apps, APIs & Delivery",
    use: "Visual interfaces used to surface KPIs, planning outputs, and operational insights.",
    href: "https://en.wikipedia.org/wiki/Dashboard_(business)"
  },
  "Docker": {
    name: "Docker",
    category: "Cloud & Infrastructure",
    use: "Container platform for packaging applications and inference services consistently across environments.",
    href: "https://docs.docker.com/"
  },
  "EuroHPC": {
    name: "EuroHPC",
    category: "Cloud & Infrastructure",
    use: "European high-performance computing infrastructure used for large-scale research workloads.",
    href: "https://eurohpc-ju.europa.eu/"
  },
  "F1": {
    name: "F1",
    category: "Metrics & Evaluation",
    use: "Balanced metric that combines precision and recall into a single score.",
    href: "https://en.wikipedia.org/wiki/F-score"
  },
  "FAISS": {
    name: "FAISS",
    category: "Machine Learning & AI",
    use: "Vector-similarity library for dense retrieval and nearest-neighbor search.",
    href: "https://faiss.ai/"
  },
  "FastAPI": {
    name: "FastAPI",
    category: "Apps, APIs & Delivery",
    use: "Python web framework for building typed, high-performance APIs.",
    href: "https://fastapi.tiangolo.com/"
  },
  "Fortran": {
    name: "Fortran",
    category: "Data & Scientific Computing",
    use: "Scientific programming language commonly used in numerical and simulation-heavy workloads.",
    href: "https://en.wikipedia.org/wiki/Fortran"
  },
  "GPT": {
    name: "GPT",
    category: "Machine Learning & AI",
    use: "Large language model family used for generation, reasoning, and language-driven workflows.",
    href: "https://openai.com/research"
  },
  "GTEx": {
    name: "GTEx",
    category: "Data & Scientific Computing",
    use: "Large public resource for tissue-specific gene-expression and regulation studies.",
    href: "https://gtexportal.org/home/"
  },
  "Gradient Boosting": {
    name: "Gradient Boosting",
    category: "Machine Learning & AI",
    use: "Ensemble-learning family that builds strong predictors by sequentially correcting weak learners.",
    href: "https://en.wikipedia.org/wiki/Gradient_boosting"
  },
  "HIPT": {
    name: "HIPT",
    category: "Machine Learning & AI",
    use: "Hierarchical Image Pyramid Transformer used for representation learning on whole-slide pathology images.",
    href: "https://github.com/mahmoodlab/HIPT"
  },
  "Hit-Rate@K": {
    name: "Hit-Rate@K",
    category: "Metrics & Evaluation",
    use: "Retrieval metric measuring whether at least one relevant item appears in the top-k results.",
    href: "https://en.wikipedia.org/wiki/Evaluation_measures_(information_retrieval)"
  },
  "Hugging Face": {
    name: "Hugging Face",
    category: "Machine Learning & AI",
    use: "Model and tooling ecosystem for transformers, embeddings, and open ML workflows.",
    href: "https://huggingface.co/docs"
  },
  "IBM SPSS Modeler": {
    name: "IBM SPSS Modeler",
    category: "Apps, APIs & Delivery",
    use: "Visual data-mining and predictive-analytics platform for forecasting and decision support.",
    href: "https://www.ibm.com/products/spss-modeler"
  },
  "K-Means": {
    name: "K-Means",
    category: "Machine Learning & AI",
    use: "Clustering algorithm that partitions samples into groups based on centroid proximity.",
    href: "https://en.wikipedia.org/wiki/K-means_clustering"
  },
  "KMeans": {
    name: "KMeans",
    category: "Machine Learning & AI",
    use: "Clustering algorithm that partitions samples into groups based on centroid proximity.",
    href: "https://en.wikipedia.org/wiki/K-means_clustering"
  },
  "LSDA": {
    name: "LSDA",
    category: "Machine Learning & AI",
    use: "Local Spin Density Approximation used in electronic-structure calculations for magnetic systems.",
    href: "https://en.wikipedia.org/wiki/Local-density_approximation"
  },
  "LSTM": {
    name: "LSTM",
    category: "Machine Learning & AI",
    use: "Recurrent neural-network architecture designed to model temporal dependencies.",
    href: "https://en.wikipedia.org/wiki/Long_short-term_memory"
  },
  "LangChain": {
    name: "LangChain",
    category: "Machine Learning & AI",
    use: "Framework for composing LLM chains, retrieval pipelines, and agent-like workflows.",
    href: "https://python.langchain.com/docs/introduction/"
  },
  "LightGBM": {
    name: "LightGBM",
    category: "Machine Learning & AI",
    use: "Gradient-boosting library optimized for speed and large tabular datasets.",
    href: "https://lightgbm.readthedocs.io/"
  },
  "Linux": {
    name: "Linux",
    category: "Cloud & Infrastructure",
    use: "Operating-system environment commonly used for data, ML, and HPC workloads.",
    href: "https://kernel.org/"
  },
  "MAE": {
    name: "MAE",
    category: "Metrics & Evaluation",
    use: "Mean Absolute Error, a regression metric based on absolute prediction deviations.",
    href: "https://en.wikipedia.org/wiki/Mean_absolute_error"
  },
  "MLflow": {
    name: "MLflow",
    category: "Machine Learning & AI",
    use: "Tracking and evaluation platform for experiments, metrics, models, and runs.",
    href: "https://mlflow.org/docs/latest/index.html"
  },
  "Matplotlib": {
    name: "Matplotlib",
    category: "Data & Scientific Computing",
    use: "Python plotting library for charts, diagnostics, and scientific figures.",
    href: "https://matplotlib.org/stable/"
  },
  "Monte Carlo": {
    name: "Monte Carlo",
    category: "Metrics & Evaluation",
    use: "Simulation approach based on repeated random sampling for uncertainty and scenario analysis.",
    href: "https://en.wikipedia.org/wiki/Monte_Carlo_method"
  },
  "NumPy": {
    name: "NumPy",
    category: "Data & Scientific Computing",
    use: "Core numerical-array library for scientific computing in Python.",
    href: "https://numpy.org/doc/"
  },
  "OpenCV": {
    name: "OpenCV",
    category: "Data & Scientific Computing",
    use: "Computer-vision library for image processing, segmentation, and feature extraction.",
    href: "https://docs.opencv.org/"
  },
  "Optuna": {
    name: "Optuna",
    category: "Machine Learning & AI",
    use: "Hyperparameter-optimization framework for model tuning and experiment search.",
    href: "https://optuna.readthedocs.io/"
  },
  "PCA": {
    name: "PCA",
    category: "Data & Scientific Computing",
    use: "Dimensionality-reduction method used to compress features while preserving major variance directions.",
    href: "https://en.wikipedia.org/wiki/Principal_component_analysis"
  },
  "PR-AUC": {
    name: "PR-AUC",
    category: "Metrics & Evaluation",
    use: "Area under the precision-recall curve, especially useful for imbalanced classification tasks.",
    href: "https://en.wikipedia.org/wiki/Precision_and_recall"
  },
  "Pandas": {
    name: "Pandas",
    category: "Data & Scientific Computing",
    use: "Tabular data-manipulation library for cleaning, transformation, and analysis in Python.",
    href: "https://pandas.pydata.org/docs/"
  },
  "Precision@K": {
    name: "Precision@K",
    category: "Metrics & Evaluation",
    use: "Ranking metric that measures how many of the top-k results are relevant.",
    href: "https://en.wikipedia.org/wiki/Evaluation_measures_(information_retrieval)"
  },
  "Prompt Engineering": {
    name: "Prompt Engineering",
    category: "Machine Learning & AI",
    use: "Practice of structuring prompts and context to improve LLM behavior and output quality.",
    href: "https://en.wikipedia.org/wiki/Prompt_engineering"
  },
  "Prophet": {
    name: "Prophet",
    category: "Machine Learning & AI",
    use: "Forecasting library designed for business time series with seasonality and trend changes.",
    href: "https://facebook.github.io/prophet/"
  },
  "PySpark": {
    name: "PySpark",
    category: "Data & Scientific Computing",
    use: "Python API for Apache Spark, used for distributed data processing and ETL.",
    href: "https://spark.apache.org/docs/latest/api/python/"
  },
  "PyTorch": {
    name: "PyTorch",
    category: "Machine Learning & AI",
    use: "Deep-learning framework for model training, inference, and tensor computation.",
    href: "https://pytorch.org/docs/stable/index.html"
  },
  "Python": {
    name: "Python",
    category: "Data & Scientific Computing",
    use: "General-purpose language widely used for data engineering, ML, APIs, and scientific workflows.",
    href: "https://docs.python.org/3/"
  },
  "Qlik": {
    name: "Qlik",
    category: "Apps, APIs & Delivery",
    use: "Business-intelligence platform for dashboarding and exploratory analysis.",
    href: "https://help.qlik.com/"
  },
  "RAG": {
    name: "RAG",
    category: "Machine Learning & AI",
    use: "Retrieval-Augmented Generation pattern that injects retrieved knowledge into LLM answers.",
    href: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation"
  },
  "REST API": {
    name: "REST API",
    category: "Apps, APIs & Delivery",
    use: "HTTP-based integration style for exposing services and data to other systems.",
    href: "https://en.wikipedia.org/wiki/REST"
  },
  "ROC-AUC": {
    name: "ROC-AUC",
    category: "Metrics & Evaluation",
    use: "Area under the ROC curve, used to judge ranking quality in binary classification.",
    href: "https://en.wikipedia.org/wiki/Receiver_operating_characteristic"
  },
  "ROUGE-L": {
    name: "ROUGE-L",
    category: "Metrics & Evaluation",
    use: "Text-generation metric based on longest common subsequence overlap with a reference.",
    href: "https://en.wikipedia.org/wiki/ROUGE_(metric)"
  },
  "Recall@K": {
    name: "Recall@K",
    category: "Metrics & Evaluation",
    use: "Retrieval metric that measures whether relevant results appear within the top-k positions.",
    href: "https://en.wikipedia.org/wiki/Evaluation_measures_(information_retrieval)"
  },
  "Reporting": {
    name: "Reporting",
    category: "Apps, APIs & Delivery",
    use: "Structured delivery of analytical findings through readable outputs for business teams.",
    href: "https://en.wikipedia.org/wiki/Business_reporting"
  },
  "Rietveld": {
    name: "Rietveld",
    category: "Metrics & Evaluation",
    use: "Refinement method used to fit crystallographic models to diffraction data.",
    href: "https://en.wikipedia.org/wiki/Rietveld_refinement"
  },
  "SHAP": {
    name: "SHAP",
    category: "Machine Learning & AI",
    use: "Explainability method that attributes model predictions to feature contributions.",
    href: "https://shap.readthedocs.io/"
  },
  "SQL": {
    name: "SQL",
    category: "Data & Scientific Computing",
    use: "Query language for extracting, joining, and transforming structured data.",
    href: "https://en.wikipedia.org/wiki/SQL"
  },
  "SciPy": {
    name: "SciPy",
    category: "Data & Scientific Computing",
    use: "Scientific-computing library for optimization, statistics, signal processing, and linear algebra.",
    href: "https://scipy.org/"
  },
  "Service Level": {
    name: "Service Level",
    category: "Metrics & Evaluation",
    use: "Operational metric that quantifies how reliably demand is met without stock-outs or delays.",
    href: "https://en.wikipedia.org/wiki/Service_level"
  },
  "Silhouette": {
    name: "Silhouette",
    category: "Metrics & Evaluation",
    use: "Cluster-validation score that compares cohesion within clusters against separation between clusters.",
    href: "https://en.wikipedia.org/wiki/Silhouette_(clustering)"
  },
  "SimPy": {
    name: "SimPy",
    category: "Data & Scientific Computing",
    use: "Process-based discrete-event simulation framework for Python.",
    href: "https://simpy.readthedocs.io/"
  },
  "Slurm": {
    name: "Slurm",
    category: "Cloud & Infrastructure",
    use: "Workload manager and scheduler for HPC clusters and distributed compute jobs.",
    href: "https://slurm.schedmd.com/documentation.html"
  },
  "Streamlit": {
    name: "Streamlit",
    category: "Apps, APIs & Delivery",
    use: "Python framework for shipping lightweight data and ML applications quickly.",
    href: "https://docs.streamlit.io/"
  },
  "XGBoost": {
    name: "XGBoost",
    category: "Machine Learning & AI",
    use: "Optimized gradient-boosting library for high-performance tabular modeling.",
    href: "https://xgboost.readthedocs.io/"
  },
  "sktime": {
    name: "sktime",
    category: "Machine Learning & AI",
    use: "Python toolbox for time-series analysis, forecasting, and model selection.",
    href: "https://www.sktime.net/en/stable/"
  }
};
