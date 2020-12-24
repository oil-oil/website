---
title: "API Gateways Apache APISIX and Kong Selection Comparison"
date: 2020-01-18 
---  

Author: Wen Ming

Apache APISIX and Kong are both open source microservice API gateways, so how do you compare and choose between them?

These two projects are covered by complete documentation and tests, and many production users are using them, so don’t worry about stability and their sustainable development. This article will focus on the most direct and verifiable functions and performance. To make a comparison from a different perspective.

These two projects are covered by complete documentation and tests, and many production users are using them, so don’t worry about stability and their sustainable development. This article will focus on the most direct and verifiable functions and performance. To make a comparison from a different perspective.

![1.jpg](https://pic3.zhimg.com/80/v2-4b6f9dd69f9a087969e3ed59ba59d60a_1440w.jpg)

For a more detailed comparison.

![2.jpg](https://pic2.zhimg.com/80/v2-85563d407b3d43b00a1e1c33f895da01_1440w.jpg)

**Compression test environment**

Test platform: AliCloud ecs.hfg5.2xlarge 8 vCPU 32 GiB.

Test method: turn on the specified number of workers (single-core, multi-core) and then use wrk to increase the stress test. Here the API gateway resources should be full (mainly CPU). And the pressure test client, upstream services are normal service, not a bottleneck.

Enable the prometheus and limit-count plugins.

Tested versions: Apache APISIX 0.9 and Kong 1.4.3

Test scripts: [gist.github.com/membphi](https://link.zhihu.com/?target=https%3A//gist.github.com/membphis/137db97a4bf64d3653aa42f3e016bd01)

![3.jpg](https://pic4.zhimg.com/80/v2-d7aa2dd6b90bc90cd09b80dd45ed5953_1440w.png)

## Press test scenario 1: Only one worker is open

[Detailed compression test results](https://link.zhihu.com/?target=https%3A//gist.github.com/membphis/137db97a4bf64d3653aa42f3e016bd01%23gistcomment-3137123)(You can reproduce the results of the performance test yourself with the script here)

**Apache APISIX is 2x the QPS of Kong without plug-ins and with only reverse proxies, and 10x the performance of Kong with both flow limiting and prometheus plug-ins enabled.**

![4.jpg](https://pic1.zhimg.com/80/v2-48d821e4b2d6834ae67fed1bdd747610_1440w.jpg)

![5.jpg](https://pic1.zhimg.com/80/v2-0e8e1e951f4c1359c8d2179b43a4f298_1440w.jpg)

Apache APISIX is half of Kong's latency without plugins on and with only reverse proxying; with both flow limiting and prometheus plugins on, the latency is one-tenth of Kong's.

![6.jpg](https://pic1.zhimg.com/80/v2-78e9ce67c9e0fa16325b45bad817c410_1440w.jpg)

![7.jpg](https://pic2.zhimg.com/80/v2-d4ca01f7a243ff52b01d6702a5add2b9_1440w.jpg)

Press test scenario 2: 4 workers on

[Detailed compression test results](https://link.zhihu.com/?target=https%3A//gist.github.com/membphis/137db97a4bf64d3653aa42f3e016bd01)

![8.jpg](https://pic1.zhimg.com/80/v2-a79066c94bf0fefb22fff914dac7971c_1440w.jpg)

![9.jpg](https://pic3.zhimg.com/80/v2-056e320b4372b06ea7a7c07bcb8a9cc2_1440w.jpg)

![10.jpg](https://pic2.zhimg.com/80/v2-e4fb4c8aacea997374c06a13f72959c9_1440w.jpg)

![11.jpg](https://pic4.zhimg.com/80/v2-1584da0dcf994f6d72b35b075e016f6f_1440w.jpg)

## At the end

The performance test shows that the performance (QPS and latency) of Apache APISIX is twice that of Kong without the plugins turned on, but with the two common plugins turned on, the performance is ten times that of Kong.

You are welcome to follow and click star at Apache APISIX [https://github.com/apache/incubator-apisix](https://github.com/apache/incubator-apisix), We will work together to make it a world class project. For the convenience of domestic students, you can also join the QQ exchange group 552030619 (Apache APISIX community).
