---
title: "Time Series Classification using Graph Theory"
excerpt: "In this project, I constructed a system dedicated to the classification of time series into distinct typologies using graph theory. Subsequently, the pipeline is followed by demand forecasting, employing specific prediction algorithms designed to each type of time series typology (2022).<br/><img src='/athosmoraes/images/portfolio/time_series_forecasting/time_series.webp' style='width: 300px;'>"
collection: portfolio
---

### Project Description

# Demand Forecasting Through Time Series Classification

In 2022, while working for Yhub (refer to my CV for details), I designed and developed a system to automate demand forecasting of supermarket.

In the context of products demand forecasting, it was identified that the diverse nature of time series data necessitated a different approach to selecting forecasting models. Since these products can have inherent differences in time series behavior, which could range from being sparse to stationary, or exhibit recurrent patterns, not all forecasting algorithms are recomended. To address this challenge, I developed a methodology using graph theory to classify time series into distinct categories, each suited for a specific forecasting model. This process entailed the following steps

## 1. Conversion of Time Series to Graphs
Utilizing the concept of Visibility Graphs (VG) and Horizontal Visibility Graphs (HVG), time series data were transformed into graphs. This transformation allowed for the extraction of topological features from the graphs, such as clique number, node distribution, and connectivity. These features served as representative characteristics of the underlying time series.

![Workflow](/athosmoraes/images/portfolio/time_series_forecasting/VG.png)

![Workflow](/athosmoraes/images/portfolio/time_series_forecasting/HVG.png)

These illustrative images were extracted from [Silva et al, 2021]([URL](https://wires.onlinelibrary.wiley.com/doi/abs/10.1002/widm.1404)).

### Function
Transform time series data into graphs using the concept of Visibility Graphs.

### Technologies Used
- **Python**: For general programming needs.
- **Pandas & Numpy**: For data manipulation and numerical analysis.
- **t2vg**: A specialized package for efficient computation of visibility graphs.

## 2. Feature Extraction and Clustering
The graph-derived features were analyzed using Python, with Pandas and Numpy facilitating data manipulation and analysis. The NetworkX library was employed to handle graph-related operations, such as topological features calculation.

### Function
Extract features for the VGs obtained in the previous step.

### Technologies Used
- **Python**: The primary programming language.
- **Pandas & Numpy**: Utilized for handling and analyzing data.
- **NetworkX**: Employed for feature extraction.

## 3. Identification of Optimal Cluster Number
To classify the time series into meaningful groups, a k-means clustering algorithm was applied. The determination of the optimal number of clusters was achieved through the application of the elbow method and silhouette analysis, ensuring the clusters were both distinct and cohesive.

### Function
Employ the elbow method and silhouette analysis to determine the optimal number of clusters.

### Technologies Used
- **Python**: For executing the analysis algorithms.
- **Pandas & Numpy**: For data analysis support.
- **Scikit-learn**: For k-means and silhouette application.

## 4. Cluster Analysis and Labeling
Upon establishing the clusters, statistical analysis was conducted to ascertain the characteristics of each group. This involved computing statistical measures such as mean, standard deviation, and quartiles for the time series within each cluster. The clusters were then labeled according to their defining characteristics, such as sparse, seasonal, recurrent, and others.

### Function
Compute statistical measures for each cluster to understand their characteristics and assign labels indicative of their defining features.

### Technologies Used
- **Python**: For executing the analysis algorithms.
- **Pandas & Numpy**: For statistical analysis.
- **Scikit-learn**: For k-means.

## 5. Selection of Forecasting Techniques
Based on the labeled clusters, appropriate demand forecasting techniques were assigned to each category. For instance, sparse series, characterized by a lack of clear trend or seasonality, were best approached using a moving average model. Conversely, series exhibiting autoregressive patterns benefitted from a combination of autoregressive models and random forests, whereas the Prophet model was considered suitable for other series types.

### Function
Assign appropriate demand forecasting techniques to each cluster based on their labeled characteristics, optimizing the forecasting accuracy.

### Technologies Used
- **Python**: As the primary tool for implementing forecasting models.
- **Various Forecasting Libraries**: Depending on the specific requirements of each cluster (e.g., ARIMA, Prophet).
