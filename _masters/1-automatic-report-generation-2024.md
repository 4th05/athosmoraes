---
title: "Automatic Report Generation from Histopathological Images [2024]"
excerpt: "In this work, I attempted to build a system for the automatic generation of pathology reports from Whole Slide Images (WSIs). To this end, I constructed a solution divided into 3 main stages, namely, Inference (a), Aggregation (b), and Generation (c), as show in the figure bellow.<br/><img src='/athosmoraes/images/masters/mthesis_workflow.png' style='width: 800px;'><br/>Please, click on this work's title for more details about the entire process."
collection: masters
---

## Abstract
For over a decade, Deep Learning (DL) has been successfully applied in histopathology, addressing challenges such as tumor detection, cellular segmentation, and biomarker quantification, among others. Following recent advancements, Foundation Models (FM) based on Transformer architectures have significantly gained popularity across academia, industry and public domains. This surge has led to unprecedented growth in the DL field, with new articles and ideas introducing fresh perspectives to longstanding challenges in Com- puter Vision (CV) and Natural Language Processing (NLP). As a result, interdisciplinary areas like Computational Pathology (CPATH) and Clinical NLP have seen significant ad- vancements, particularly through Multimodal Deep Learning applications such as image captioning, visual question-answering (Q&A) and cross-modal retrieval (CMR).

Despite these advancements, many potential interconnections between strategies in these applications remain unexplored. Techniques such as Prompt Engineering (PE) and Retrieval-Augmented Generation (RAG), which are known to enhance responses in Large Language Models (LLMs), have not yet been fully integrated with CPATH algorithms into common systems. Furthermore, working with FMs entails significant computational demands during both training and inference phases. This high resource requirement com- plicates experimentation and evaluation of new algorithms, often necessitating extensive use of cloud-based GPUs. Additionally, the inherent challenges in handling gigapixel Whole Slide Images (WSIs) typically require the adoption of resizing and segmentation strategies, approaches that inevitably lead to the loss of crucial local and global information from the inherent structural arrangement of the tissues.

In an effort to overcome these challenges, our research intends to bridge the gap between CPATH and Clinical NLP by leveraging recent innovations in both fields to build a unified solution that integrates both domains. For that, we have developed an auto- matic pathology report generation system for WSIs guided by three main premises: first, to develop methodologies that can be replicated on systems with limited computational resources; second, to ensure the solution is easily maintainable and subject to future im- provements; and third, to enhance accessibility for end users, thereby facilitating practical applications in both clinical and educational environments.

Focused on lung tissue, our system workflow operates in three main stages: Data Inference (INF), Aggregation (AGG), and Generation (GEN). In the first stage, the system predicts demographic data such as age and smoker status, and utilizes cross-modal retrieval to gather diagnosis information from similar cases. Then, in AGG, we generate a concise caption containing all the infomarion from the previous modules. Finally, in the GEN stage, the system incorporates all this information into a LLM enhanced with PE and RAG to generate a histopathology report enriched with aditional information from academic literature. Moreover, we have integrated our system into a user-friendly graphical interface, making it accessible to non-specialists in the computational field. This design facilitates the practical evaluation of our solution, allowing users to easily interact with and test the system’s capabilities, ultimately enabling them to apply it in their own contexts.

The results we obtained, while not yet suitable for deployment in real clinical settings, demonstrate the practical feasibility of utilizing the aforementioned technologies in environments constrained by limited computational resources in order to test and generate valuable solutions for the histopathology field.

## Data Collection and Preparation 
Our dataset originates from The Genotype-Tissue Expression (GTEx) project, a public resource designed for researchers studying tissue and cell-specific gene expression and regulation across individuals, development stages, and species. This portal includes data from three National Institutes of Health (NIH) projects: Adult GTEx, Developmental GTEx (dGTEx), and Non-human Primate Developmental (NHP-GTEx). In this work, we exclusively utilized the Adult GTEx dataset, which contains thousands of tissue samples from various organs of post-mortem subjects.

The data collection pipeline from the GTEx database, as well as its preparation for Deep Learning algorithms, involved two main steps as shown in the following figure, which were executed using Python and Bash scripts.

![Workflow](/athosmoraes/images/masters/data_collection.png)

Initially, Whole Slide Images (WSIs) are downloaded from the GTEx portal. Subsequently, these slides are segmented into patches of 4096x4096 pixels. Finally, feature extraction is conducted using the Hierarchical Image Pyramid Transformer (HIPT), yielding a total of three types of features. These features are then used in all subsequent steps of the report generation system.

## System Architecture
For didactic purposes, it is appropriate to divide the implemented system into three main stages: inference (INF), aggregation (AGG), and generation (GEN) as shown in the figure bellow.

![Architecture](/athosmoraes/images/masters/mthesis_workflow.png)

In the first stage, INF **(a)**, there are three main modules: Diagnosis Retriever (DR), Age Prediction (AP), and Smoker Classification (SC). These modules are tasked with generating crucial information for report composition. DR retrieves the pathol- ogist’s note from the most similar cases, AP estimates the chronological age of the patient, and SC predicts the smoking status of the patient, with categories including Non-Smoker, Smoker, and Ex-Smoker.

In the AGG stage **(b)**, we synthesize all information generated in the inference module to produce a caption that encompasses both clinical and demographic characteristics of the patient and their lung tissue sample.

Finally, the GEN stage **(c)** relies entirely on LLMs to produce the final report. At the beginning of this stage, the generated caption from the previous step is provided to a Questioner Agent tasked with generating clinically relevant questions for understanding the patient’s pathological condition. These questions are then individually addressed by another agent, the Q&E Agent, programmed to answer pathology-related questions based on a repository of references from literature that were scraped from various sources such as PubMed, BioArxiv, and selected histology books and manuals we manually collected. Ultimately, this content, along with the original caption, is delivered to a final agent, the Report Agent, charged with generating a histopathology report based on the provided caption and enriched with the content from the books.

## User Interface
The application developed encapsulates the entire system previously described, from feature extraction to the final report generation.

The development of this app was intended to demonstrate the potential of making our solution more accessible to individuals without specialist computing knowledge. Traditionally, end users would need familiarity with technologies such as GitHub, Python, the LangChain framework used to build the agents, and PyTorch to implement our neural network models in the AP, SC, and DR modules. By integrating our solution into an app, we have significantly lowered these technical barriers, providing a practical example of how our system can be made user-friendly for the intended audience.

Next, we show pintscreens extracted from the app:
![app_a](/athosmoraes/images/masters/app_a.png)
![app_b](/athosmoraes/images/masters/app_b.png)
![app_c](/athosmoraes/images/masters/app_c.png)

## Outcome example
Example of a generated report. The ground truth reference is highlighted in green. The figure bellow shows that the orignal diagnosis is mentioning Fibrosis, Hemorrhage, and Pneumonia, three pathologies that were correctly identified in the report. However, we erroneously added two unmentioned pathologies, congestion and edema.

![outcome](/athosmoraes/images/masters/report.png)

## Future Work
Beyond simply identifying the pathologies present, we can indicate where they are located, or at least highlight the regions with the highest probability for each one.

Using a foundation model called CONCH ([here](https://github.com/mahmoodlab/CONCH)), we can extract features from 256x256 patches across the entire WSI and then apply zero-shot classification to estimate the probability of each patch belonging to various pathology classes. Finally, we can generate heatmaps based on these probabilities, highlighting the most likely pathologies within a given WSI, as shown in the figure below.


![outcome](/athosmoraes/images/masters/wsi_maps.png)

With sufficient computational resources in the future, we can fine-tune their model to achieve more accurate results for our GTEx data and enhance our generated reports.

Just to clarify: we are calculating the cosine similarity between patch embeddings and text prompts corresponding to pathology names. The heatmap visualizes this similarity, which we interpret as the probability of the pathology being present.

