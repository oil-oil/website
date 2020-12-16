---
title: "Apache APISIX High Performance Hands-on 2"
date: 2020-12-11
---  

Author: Wang Yuansheng

<div style="text-align: center">
  <video controls src="https://opentalk-blog.b0.upaiyun.com/prod/2019-09-03/3b6cd9a473993f52fe15120c753bf06a.mp4" style="width: 100%"></video>
</div>

**Lecturer Profile**

Wang Yuansheng, Founder of Tributary Technology, Apache APISIX PMC

On August 31, 2019, the OpenResty community, in collaboration with UPYUN, held the OpenResty × OpenTalk National Tour Salon - Chengdu Station, where Wang Yuansheng, Apache APISIX PMC, shared "Apache APISIX High Performance Practice".

OpenResty × OpenTalk national tour salon is initiated by OpenResty community and UPYUN, inviting senior OpenResty technical experts in the industry to share OpenResty practical experience, enhance the communication and learning of OpenResty users, and promote the development of OpenResty open source projects.

![image.png](https://opentalk-blog.b0.upaiyun.com/prod/2019-12-05/0f874307c88bb2df87f88bd21a1455a9)

Wang Yuansheng, Founder of Apache APISIX PMC Tributary Technology.

The following is the full text of the sharing.

First of all, I would like to introduce myself, I worked in traditional finance industry for nine years after graduating from university, and joined Qihoo 360 in 2014, during which I wrote "OpenResty Best Practices". I personally like to study technology and open source, probably because I am influenced by Lao Luo and like to try idealistic things. In March this year, I founded Shenzhen Tributary Technology Company with like-minded partners, which is an open source technology company, one of the few in China, and APISIX is our main project now.

Apache APISIX is a microservices API gateway product. In July this year, I gave a talk on "Apache APISIX High Performance Practice" in Shanghai.

## What is an API Gateway

![2.jpg](https://opentalk-blog.b0.upaiyun.com/prod/2019-10-24/693af623d6d32b130f550e6b7ff972bb)

API gateways are becoming more and more important as the entry and exit points for all traffic. As you can see from the diagram, requestors may come from browsers, IoT devices and mobile devices, etc. API gateways need to do security control, traffic flow and logging as an intermediate control layer. More and more enterprises are adopting microservices as a way to meet business needs through internal decoupling, flexible deployment, and elastic scaling. The number and complexity of microservices are also rising, so it is necessary to use API gateways to complete unified traffic management and scheduling, and higher requirements are placed on API gateways.

## Apache APISIX Overview

![3.jpg](https://opentalk-blog.b0.upaiyun.com/prod/2019-10-24/11f219ce93803449f315dee110942499)

The above diagram shows the basic architecture of Apache APISIX. To support clustering and high availability, either the Admin API or the Apache APISIX kernel needs to be included in any node, either part of it or both can be enabled when using it. The internal part of Apache APISIX processes external requests, matches them to specific routing rules based on the request characteristics, executes the plugin, and forwards the traffic to the specified upstream service.

Apache APISIX is released every month and in version 0.7 supports routing plugins, which is proud to say that it is the only API gateway implementation that allows custom routing. In addition to the existing r3 routing, Apache APISIX has added a dedicated high-performance prefix matching radixtree, which was open sourced by the authors of Redix. radixtree code is 10x more efficient than r3, and some production users have seen a significant reduction in CPU usage after upgrading to radixtree. radixtree code is 10 times more efficient than r3 or even higher, some production users upgrade radixtree after the CPU usage is really reduced significantly.

![4.jpg](https://opentalk-blog.b0.upaiyun.com/prod/2019-10-24/ee59f6050c11622cf7b3578baaebf3a7)

The image above shows the functionality that was already available in Apache APISIX two months ago.

![5.jpg](https://opentalk-blog.b0.upaiyun.com/prod/2019-10-24/589eeb47480b9524c815705e8f5baffa)

In the last two months, Apache APISIX has added the above new features, and there are about 5 or 6 big new features every month. If I only prepare some new features in Apache APISIX to share with you, you may benefit less, so today I will share some general OpenResty programming tips.

Apache APISIX focuses on high performance, and we compare performance with OpenResty so as to better highlight the extreme performance of Apache APISIX. First of all, when comparing an empty OpenResty service without any features, we found that APISIX only has a 15% performance drop with all features loaded. In other words, if you can accept a 15% performance drop, you can just enjoy all the features shown above.

## OpenResty Optimization Tips

### **Routing: radixtree vs r3**

Why do we continue to implement new routes with resty-radixtree when we already have r3?

First, the problem of r3: r3 learning complexity is relatively high (the regular itself has learning difficulties), and does not support iterating through the iterator matching results, the efficiency is quite low compared to the prefix tree implementation. On the contrary, these problems are perfectly solved in resty-radixtree, and the performance and stability are naturally improved a lot. The current resty-radixtree is based on the antirez/rax implementation, which was also written by the author of Redis, so standing on the shoulders of giants can make us take a lot of detours.

From the data structure, the prefix tree is theoretically faster than the hash algorithm, the reason is that the true complexity of the hash algorithm is O(K), K is the length of the query Key, the longer the Key the more complex the hash algorithm to turn the string into an integer, while the prefix tree is layer by layer, the worst complexity is O(K), so the worst efficiency of the prefix tree is the same as the hash algorithm.

Of course, this is only the principle, after special testing found that the Lua table hash lookup speed seconds prefix tree, this is because when compiling LuaJIT, it uses the CPU instruction set to calculate the hash value, so it can be perfect to do O(1), so LuaJIT table hash is the most efficient, followed by the prefix tree.

In the LuaJIT world matching is most efficient and always prioritizes hash matching using Lua tables first. Instead of using the prefix tree (trietree) directly, which is more memory intensive, we ended up using the base tree (radixtree), which has a smaller memory footprint with similar performance.

### **OpenResty VS Golang、HTTP VS gRPC**

I chose OpenResty instead of Golang in 2015 because I think OpenResty can think deeper, while Golang can only stand on the application layer to solve the problem, for this reason I chose OpenResty.

Apache APISIX supports a scenario where HTTP(s) -> Apache APISIX -> gRPC server, converting REST APIs into gRPC requests. After completing the function, some stress tests are needed to verify the effect. For comparison, I also wrote a protocol conversion gateway in Golang. I thought Golang should be the best in the gRPC field, but I didn't expect Apache APISIX to have a chance to win.

We had a rough idea that HTTP performance must not be as good as gRPC, but that is now a bit arbitrary. gRPC has many advantages that HTTP does not have, such as its smaller size and built-in schema checking. But if your request body is small, using json plus jsonschema on HTTP, the performance of both of them is almost the same, especially in an intranet environment where the difference is still very small. If the request is large and complex, then gRPC has a significant advantage.

![6.jpg](https://opentalk-blog.b0.upaiyun.com/prod/2019-10-24/c99022d4867edeb4c4a2c22d68969c9a)

### **Acceleration of ngx.var**

The easiest way to speed up getting Nginx variables is to use the [api7/lua-var-nginx-module](https://github.com/api7/lua-var-nginx-module) repository and compile it into the OpenResty project as a lua module. When we extract the corresponding ngx.var, using the methods provided in the library to get it, we can get a 5% overall performance improvement for Apache APISIX, and at least a 10x difference in performance for a single variable. Of course, you can also compile the module as a dynamic library and load it dynamically, so you don't have to recompile OpenResty.

The Apache APISIX gateway fetches a lot of variable information from ngx.var, and variables such as the host address may be fetched repeatedly, making it inefficient to interact with Nginx each time. Therefore, we have added a layer of ctx cache to Apache APISIX/core, which means that the first time we interact with Nginx to get variables, we will use the cache directly.

Off-topic: Once again, we recommend that you refer to the code in Apache APISIX/core, which is generic and should be useful for most projects.

### **fail to json encode**

When we encode a table with json, it may fail. There are several reasons for this failure: for example, the table contains cdata or userdata that can't be encoded, or it contains a function, etc. But in fact, we don't want a result that can perfectly support serialization/deserialization when we encode, sometimes it's just for debugging.

So I added a boolean parameter to core/json_encode in Apache APISIX to indicate whether to force it to be encoded, so that when it is not encoded, it is forced to be a string. In addition, table over table is a common case, that is, there is a table A, and inside the table of A, there is a reference to A itself, forming a loop nesting. The solution to this problem is relatively simple: when nesting occurs, do not nest any further after reaching a certain position point. Allowing forced table encode in these two scenarios is very useful for our development and debugging.

When debugging, if you need to hit the table results, you should not trigger the meaningless jsonencode behavior when the log level is not enough. It is recommended to use delay_encode to debug the logs, and only when the logs really need to be written to disk, json encode will be triggered to avoid those that do not need encode. This problem works very well in Apache APISIX, finally it is possible to test different levels of logs without commenting the code, a bit like macro definition in C, which is an excellent balance between performance and ease of use.

### **Static code detection tool**

Currently, Apache APISIX runs code checking tools for CI regressions: Lua -check and lj-releng, which statically check the contents of the current code directory, such as whether global variables have been added and whether the length of lines of code has been exceeded.

### **The life cycle of rapid json**

![7.jpg](https://opentalk-blog.b0.upaiyun.com/prod/2019-10-24/3fd5ceed70f8f4adee4f1d1f0598e55e)

A particularly interesting bug about the rapid json lifecycle that we found during debugging can be found in the last line of the diagram above, where we actually use the validator and only call one validation of the validator, which is derived from the above create-validator which is derived from the above create-validator. Here it is worth noting why an array is used to cache another object called sd.

Since the validator is a cdata with an internal pointer reference dependency on the sd object, they both have to have the same lifecycle and cannot be released early. If we need both objects to have the same lifecycle, then putting them in the same table is the easiest way.

### **Third-party libraries use pcre**

If you choose the most efficient C library, and this C library also references the pcre library, then you need to consider the problem that cross-requests for this object are very risky, and for this reason you must create a separate memory pool for this library, and never use the memory pool of the current request, which is quickly freed.

![8.jpg](https://opentalk-blog.b0.upaiyun.com/prod/2019-10-24/b24d2b6a3b8823066a5b14531545ebfe)

How to solve this problem? If OpenResty had an API for this, it would be best to request a memory pool directly, but unfortunately OpenResty does not. If you look at the Ningx source code, you can see that the function to create a memory pool for Nginx is defined as ngx_create_pool(size_tsize, void *log), as long as you can get a handle to the global log.

We choose to get the log object from the global ngx_cycle. Here I define a fake fake_ngx_cycle structure, which is the same as the first three items of Nginx's ngx_cycle structure, but with the last part truncated, and then we make a memory copy to get the log object pointer location.

### **Open the prometheus plugin**

I took a cursory look at the code of Kong's prometheus plugin when I was researching it and found that the implementation logic was faulty and would have a significant performance impact. So instead of using Kong directly, I turned on the plugin in Apache APISIX and the performance only dropped about 5%. This plugin gives us almost 10 times higher performance than Kong.

That's all I have to share today, thank you!
