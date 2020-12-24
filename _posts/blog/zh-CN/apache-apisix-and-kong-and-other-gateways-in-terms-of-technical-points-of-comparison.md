---
title: "Apache APISIX 和 Kong 以及其他网关，在技术上的对比点"
date: 2020-06-14 
---  

作者：温铭 

1. **Apache APISIX 的路由复杂度是 O(k)，只和 uri 的长度有关，和路由数量无关；kong 的路由时间复杂度是 O(n)，随着路由数量线性增长。**

2. **Apache APISIX 的 IP 匹配时间复杂度是 O(1)，不会随着大量 IP 判断而导致 cpu 资源跑满；kong 的最新版本也换用了 Apache APISIX 的 IP 匹配库；**

3. **Apache APISIX 的路由匹配，接受 nginx 的所有变量作为条件，并且支持自定义函数；其他网关都是内置的几个条件；**

4. **Apache APISIX 使用 etcd 作为配置中心，没有单点，任意宕掉一台机器，网关集群还能正常运行。其他基于 mysql，postgres 的网关都会有单点问题。**

5. **Apache APISIX 的配置下发只要 1 毫秒就能达到所有网关节点，使用的是 etcd 的 watch；其他网关是定期轮询数据库，一般需要 5 秒才能获取到最新配置。**

6. **只有 Apache APISIX 开放了自定义负载均衡的挂载点，其他网关都不支持。**
