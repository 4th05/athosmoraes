---
title: "Multimodal Approach for Automated Product Registration"
excerpt: "In this project, I designed and implemented a system capable of autonomously categorizing supermarket products within a structured and meaningful taxonomy, relying solely on their textual descriptions.<br/><img src='/athosmoraes/images/portfolio/product_registration.webp' style='width: 300px;'>"
collection: portfolio
---

### Project Description

This document outlines a system developed to automate the product registration process in supermarkets. The system is designed to classify products into an existing taxonomy of categories and subcategories, aiming to reduce manual labor through the application of advanced machine learning and natural language processing technologies.

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

### Project Workflow
<img src="/athosmoraes/images/portfolio/autocad_workflow.png" alt="Project Workflow" style="width: 500px;">

### Implementation and Deployment

- **Deployment Method**: The system is modularized and deployed via APIs, encapsulated within Docker containers.
- **Hosting Platform**: AWS Fargate, providing the necessary compute resources in a serverless environment.

### Outcome and Implications

The implementation of this automated system is designed to improve productivity within retail environments. By leveraging advanced machine learning models and natural language processing techniques, it streamlines the product registration and classification process. This not only facilitates operational efficiency but also ensures accuracy in the categorization of products, demonstrating the potential of integrating text and image processing technologies in retail settings.

