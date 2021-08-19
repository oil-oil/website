---
title: "如何将 Apache APISIX 扩展为一个服务网格的边车"
date: 2021-08-07 13:30:00
---

# 如何将 Apache APISIX 扩展为一个服务网格的边车

## 分享人简介

Chao Zhang: Apache APISIX PMC，OpenResty 贡献者，开源爱好者，现在我正在研究 Service Mesh、Kubernetes 和 API Gateway。

## 分享主题介绍

在这个主题中，我将介绍 apisix-mesh-agent 项目，它有一些能力将 Apache APISIX 扩展为服务网格场景中的边车程序，更重要的是，它使用 xDS 协议从 Istio、Kuma 等控制平面获取配置。之后，我将介绍关于在服务网中使用 Apache APISIX 的未来计划和期望。

## PPT 下载

点击下载 [PPT](https://api7-website-1301662268.cos.accelerate.myqcloud.com/202108/How%20to%20extend%20Apache%20APISIX%20into%20a%20Service%20Mesh%20sidecar.key)

