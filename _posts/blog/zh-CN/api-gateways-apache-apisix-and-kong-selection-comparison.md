---
title: "API 网关 Apache APISIX 和 Kong 的选型对比"
date: 2020-01-18 
---  

作者：温铭 

Apache APISIX 和 Kong 都是开源的微服务 API 网关，那么在这两者之间，如何去做比较和选择呢？

这两个项目都有完善的文档和测试来覆盖，也有不少的生产用户在使用，所以不用去担心稳定性和它们的可持续发展，本文会从功能和性能这两个最直接和可验证的角度去做下对比。

从 API 网关核心功能点来看，两者均已覆盖：

![1.jpg](https://pic3.zhimg.com/80/v2-4b6f9dd69f9a087969e3ed59ba59d60a_1440w.jpg)

更详细的比较：

![2.jpg](https://pic2.zhimg.com/80/v2-85563d407b3d43b00a1e1c33f895da01_1440w.jpg)

**压测环境**

测试平台：阿里云 ecs.hfg5.2xlarge 8 vCPU 32 GiB。

测试方法：分别开启指定 worker 数量（单核、多核），然后用 wrk 加大压力测试。这里要把 API 网关资源打满（主要是 CPU）。而压测客户端、上游服务都正常服务，不是瓶颈。

开启 prometheus 和 limit-count 两个插件。

测试版本：Apache APISIX 0.9 和 Kong 1.4.3

测试脚本: [gist.github.com/membphi](https://link.zhihu.com/?target=https%3A//gist.github.com/membphis/137db97a4bf64d3653aa42f3e016bd01)

![3.jpg](https://pic4.zhimg.com/80/v2-d7aa2dd6b90bc90cd09b80dd45ed5953_1440w.png)

## 压测场景 1：只开启一个 worker

[详细压测结果](https://link.zhihu.com/?target=https%3A//gist.github.com/membphis/137db97a4bf64d3653aa42f3e016bd01%23gistcomment-3137123)（大家可以这里的脚本，自己来重现性能测试的结果）

**Apache APISIX 在不开启插件，只做反向代理的情况下，是 Kong QPS 的 2 倍；在开启限流和prometheus这两个插件后，性能是 Kong 的 10 倍。**

![4.jpg](https://pic1.zhimg.com/80/v2-48d821e4b2d6834ae67fed1bdd747610_1440w.jpg)

![5.jpg](https://pic1.zhimg.com/80/v2-0e8e1e951f4c1359c8d2179b43a4f298_1440w.jpg)

Apache APISIX 在不开启插件，只做反向代理的情况下，是 Kong 延迟的一半；在开启限流和prometheus这两个插件后，延迟是 Kong 的十分之一。

![6.jpg](https://pic1.zhimg.com/80/v2-78e9ce67c9e0fa16325b45bad817c410_1440w.jpg)

![7.jpg](https://pic2.zhimg.com/80/v2-d4ca01f7a243ff52b01d6702a5add2b9_1440w.jpg)

压测场景 2：开启 4 个 worker

[详细压测结果](https://link.zhihu.com/?target=https%3A//gist.github.com/membphis/137db97a4bf64d3653aa42f3e016bd01)

![8.jpg](https://pic1.zhimg.com/80/v2-a79066c94bf0fefb22fff914dac7971c_1440w.jpg)

![9.jpg](https://pic3.zhimg.com/80/v2-056e320b4372b06ea7a7c07bcb8a9cc2_1440w.jpg)

![10.jpg](https://pic2.zhimg.com/80/v2-e4fb4c8aacea997374c06a13f72959c9_1440w.jpg)

![11.jpg](https://pic4.zhimg.com/80/v2-1584da0dcf994f6d72b35b075e016f6f_1440w.jpg)

## 写在最后

通过性能测试可以看到，在不开启插件的情况下，Apache APISIX 的性能（QPS 和延迟）是 Kong 的2倍，但开启了两个常用插件后，性能就是 Kong 的十倍了。

欢迎大家关注并点赞 Apache APISIX：[https://github.com/apache/incubator-apisix](https://github.com/apache/incubator-apisix) ，一起努力把他打造成世界顶级项目。为方便国内同学交流，也可加入QQ交流群 552030619（Apache APISIX 社区）。
