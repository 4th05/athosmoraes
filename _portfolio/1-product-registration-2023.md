---
title: "Multimodal Approach for Automated Product Registration [2023]"
excerpt: "In this project, I designed and implemented a system capable of autonomously categorizing supermarket products within a structured and meaningful taxonomy, relying solely on their textual descriptions, bar code and scrapped images. For that, I utilized technologies like LLMs, GANs, and contrastive learning.<br/><img src='/athosmoraes/images/portfolio/product_registration/product_registration.webp' style='width: 300px;'>"
collection: portfolio
---

# Project Description

In 2023, while working for Yhub (refer to my CV for details), I designed and developed a system to automate the registration of supermarket products with minimal human supervision. The system classifies products into an existing taxonomy of categories and subcategories, aiming to reduce manual labor through the application of machine learning, computer vision, and natural language processing technologies. In the following sections, I will explain its main functionalities and the most relevant technologies I used to achieve the final result.

## Workflow
![Workflow](/athosmoraes/images/portfolio/product_registration/autocad_workflow.png)

## System Architecture

The system comprises three primary components, each serving a specific function in the process of product registration and classification:

### 1. Search Block

- **Function**: Enhances product descriptions using text embeddings.
- **Technologies Used**: 
  - Text embeddings from OpenAI and BERT.
  - Large Language Models (LLM) including GPT-4 and Llama2 for processing and enhancing product descriptions.

### 2. Vision Block

- **Function**: Selects the most representative image for each product and infers product attributes.
- **Technologies Used**:
  - CLIP model, fine-tuned with a proprietary database for correlating product images with descriptions.
  - GPT-4 Vision for inferring product attributes such as brand and manufacturer.

### 3. Similarity Search Block

- **Function**: Finds the closest match within a pre-defined taxonomy for new products.
- **Approach**: Uses the enriched product descriptions and attributes to perform similarity searches against an existing database, assigning new products to the appropriate category or prompting for the creation of a new category if no match is found.

## Implementation and Deployment

- **Deployment Method**: The system is modularized and deployed via APIs, encapsulated within Docker containers.
- **Hosting Platform**: AWS Fargate, providing the necessary compute resources in a serverless environment.

