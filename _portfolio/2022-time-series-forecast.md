---
title: "Time Series Classification and Forecasting"
excerpt: "In this project, I constructed a system dedicated to the classification of time series into distinct typologies using graph theory. Subsequently, the pipeline is followed by demand forecasting, employing specific prediction algorithms designed to each type of time series typology (2022).<br/><img src='/athosmoraes/images/portfolio/time_series_forecasting/time_series.webp' style='width: 300px;'>"
collection: portfolio
---

### Project Description

In 2023, while working for Yhub (refer to my CV for details), I designed and developed a system to automate the registration of supermarket products with minimal human supervision. The system classifies products into an existing taxonomy of categories and subcategories, aiming to reduce manual labor through the application of machine learning, computer vision, and natural language processing technologies. In the following sections, I will explain its main functionalities and the most relevant technologies I used to achieve the final result.

### Workflow
![Workflow](/athosmoraes/images/portfolio/product_registration/autocad_workflow.png)

### System Architecture

The system comprises three primary components, each serving a specific function in the process of product registration and classification:

#### 1. Search Block

- **Function**: Enhances product descriptions using text embeddings.
- **Technologies Used**: 
  - Text embeddings from OpenAI and BERT.
  - Large Language Models (LLM) including GPT-4 and Llama2 for processing and enhancing product descriptions.

#### 2. Vision Block

- **Function**: Selects the most representative image for each product and infers product attributes.
- **Technologies Used**:
  - CLIP model, fine-tuned with a proprietary database for correlating product images with descriptions.
  - GPT-4 Vision for inferring product attributes such as brand and manufacturer.

#### 3. Similarity Search Block

- **Function**: Finds the closest match within a pre-defined taxonomy for new products.
- **Approach**: Uses the enriched product descriptions and attributes to perform similarity searches against an existing database, assigning new products to the appropriate category or prompting for the creation of a new category if no match is found.

### Implementation and Deployment

- **Deployment Method**: The system is modularized and deployed via APIs, encapsulated within Docker containers.
- **Hosting Platform**: AWS Fargate, providing the necessary compute resources in a serverless environment.

### Outcome and Implications

The implementation of this automated system is designed to improve productivity within retail environments. By leveraging advanced machine learning models and natural language processing techniques, it streamlines the product registration and classification process. This not only facilitates operational efficiency but also ensures accuracy in the categorization of products, demonstrating the potential of integrating text and image processing technologies in retail settings.

