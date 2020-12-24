---
title: "How to Choose a Microservices API Gateway: Comparing Kong, APISIX, Tyk, Apigee, and Other Gateways"
date: 2019-09-27 
---  

Author: Wen Ming

### **What is the role of the Microservices API gateway?**

Let's start by looking at the role of the Microservices API gateway, a brief illustration of which is shown below.

![1.jpg](https://pic1.zhimg.com/80/v2-206d23237ac330d04632231e81baa120_1440w.jpg)

The API gateway is not an emerging concept, it has existed for more than a decade. Its role is mainly to serve as a traffic portal to handle business-related requests in a unified manner, allowing requests to be processed more securely, quickly and accurately. It has the following traditional functions:

1. Reverse proxy and load balancing, which is consistent with the positioning and functionality of Nginx.
2. dynamic upstream, dynamic SSL certificates, and dynamic rate-limiting runtime dynamics that are not available in open source versions of Nginx.
3. Upstream active and passive health checks, and service meltdowns.
4. Extend on top of the API gateway to become a full lifecycle API management platform.

In recent years, business-related traffic is no longer just initiated by PC clients and browsers, but more from mobile phones, IoT devices, etc. In the future, with the popularization of 5G, these traffic will increase. At the same time, With the structural changes of the microservice architecture, the traffic between services has also begun to increase explosively. In this new business scenario, more and more advanced functions of the API gateway have been born:

1. Cloud-native friendly, with an architecture that is made light and easy to containerize.
2. Docking of statistical and monitoring components such as Prometheus, Zipkin, Skywalking, etc..
3. Support for gRPC proxies and protocol conversion between http and gRPC, converting users' http requests into gPRC requests for internal services.
4. Assume the role of OpenID Relying Party, interfacing with the services of authentication providers such as Auth0 and okta, treating the security of traffic as a top priority.
5. serverless by dynamically executing user functions at runtime, making the gateway's edge nodes more flexible.
6. deployment architectures that do not lock in users and support hybrid clouds.
7. The last is that the gateway nodes should be state independent and can be expanded and reduced at will.

A microservices API gateway with the dozen or so functions mentioned above allows user services to care only about the business itself, while functions unrelated to business implementation, such as service discovery, service fusion, authentication, flow and speed limiting, statistics, and performance analysis, can be addressed at the standalone gateway level. From this perspective, the API gateway can replace all the functions of Nginx to handle north-south traffic, and also fulfill the role of the Istio control plane and Envoy data plane to handle east-west traffic.

### **What are the alternative API gateways?**

Because microservices API gateways are so important, they have been in the crosshairs of traditional IT giants, such as Google, CA, IBM, Red Hat, salesforce, and public cloud vendors like AWS and AliCloud.

These closed-source commercial products, which are fully functional, cover the full lifecycle management of API design, multilingual SDKs, documentation, testing and publishing, and provide SaaS services, some also integrated with the public cloud, are very easy to use, but also bring two pain points.

1. Platform locked. The API gateway is the entrance of business traffic, unlike CDN-accelerated non-business traffic such as images and videos, which can be migrated at will, and a lot of business-related logic will be bound on the API gateway, so it is difficult to migrate to other platforms smoothly and inexpensively once a closed-source solution is used.
2. Unable to do secondary development. Generally, large and medium-sized enterprises will have their own unique needs and require custom development, at which point you will have to rely on the vendor and cannot do secondary development on your own.

That's why we favor open source API gateway solutions such as Kong, APISIX and Tyk. These API gateways are extracted from the Cloud Native Computing Foundation(CNCF) panorama of:

![2.jpg](https://pic2.zhimg.com/80/v2-cb888085025d4bf39bf0c42b5f90d9b1_1440w.jpg)

### **Basis for comparative selection**

Deployment and maintenance costs

+ Can it be fully deployed on a single machine, or does it require multiple nodes to work together to use it?
+ Are there any external database dependencies? For example MySQL, Postgres?
+ Is there a web console that can operate the entire cluster?

Open Source or Closed Source

+ Can you write your own plugins to extend the functionality of the API gateway?
+ Once you have used an API gateway, can you migrate to other API gateways smoothly and inexpensively?
+ Will it be locked to a specific platform?

Ability to deploy privatized

+ Does it support deployment in the user's own internal server?
+ Does it support multi-cloud and hybrid cloud deployment models?

Function

+ Whether to support the basic features of dynamic upstream, dynamic SSL certificate, active/passive health check?
+ Can it be connected to statistics and monitoring components such as Prometheus, Zipkin, Skywalking, etc?
+ Is it possible to control the gateway configuration through both the HTTP REST API and the yaml configuration file?

Community

+ Can users contact developers in the community through Github, QQ groups, Stack Overflow, etc.?
+ Is the open source license friendly?
+ Is it easy to submit your own changes to the mainline version?
+ Is there a commercial company behind it?

Business Support and Pricing

+ Is there a big difference between the open source version and the commercial version?
+ Is the commercial version charged by the number of API calls or on a subscription basis?

### **API Gateway Comparison**

The following is a comparison of the results from multiple perspectives for each API gateway.

![3.jpg](https://pic1.zhimg.com/80/v2-0ab9f26f73d050930a100b69643f1ba4_1440w.jpg)

As we can see, both Kong and [APISIX](https://link.zhihu.com/?target=https%3A//github.com/iresty/apisix) are very good choices. If you have other recommended API gateways, or have more opinions, please feel free to leave a comment.
