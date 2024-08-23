---
title: "Automatic Report Generation from Histopathological Images [2024]"
excerpt: "In this work, I attempted to build a system for the automatic generation of pathology reports from Whole Slide Images (WSIs). To this end, I constructed a solution divided into 3 main stages: Inference (INF), Aggregation (AGG), and Generation (GEN). In the initial stage, a set of independent models (neural networks) generates isolated predictions from the same WSI. Subsequently, these predictions are sent to the AGG stage where they are aggregated to form a caption with a concise diagnosis of the image. Finally, in GEN, 3 instances of Large Language Models (which I refer to as agents) operate on the caption from the previous stage with the aim of enriching its content with information about the microscopic and macroscopic characteristics of the sample, as well as other relevant information about the given pathological condition. Lastly, the final agent is responsible for critiquing and organizing all this content in the form of a pathology report. Click on the title of the work for more details about this process.<br/><img src='/athosmoraes/images/masters/mthesis_workflow.png' style='width: 600px;'>"
collection: masters
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