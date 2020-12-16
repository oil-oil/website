---
title: "Apache APISIX Technology Selection, Testing and Continuous Integration"
date: 2020-12-11
---  

Author: Wen Ming 

<div style="text-align: center">
  <video controls src="https://opentalk-blog.b0.upaiyun.com/prod/2019-09-03/8fdf53c9c14924668a34be206140fa84.mp4" style="width: 100%"></video>
</div>

**Lecturer Profile**

He is the founder of OpenResty Software Foundation, former member of 360 Open Source Committee, and columnist of "OpenResty from Introduction to Practice". Before starting his own business, he worked in an Internet security company for 10 years, mainly engaged in server-side development and architecture, and was responsible for the development of Trojan cloud checking and killing, anti-phishing system and enterprise security products. 
 
The OpenResty community, in collaboration with Yapi Cloud, held the OpenResty × Open Talk National Salon Tour - Chengdu.
 
OpenResty x Open Talk national tour salon is initiated by OpenResty China community and UPYUN, inviting senior OpenResty technical experts in the industry to share OpenResty practical experience, enhance the communication and learning of OpenResty users, and promote the development of OpenResty open source projects.

![1.webp](https://opentalk-blog.b0.upaiyun.com/prod/2019-10-21/1aa7070b816ca6c41ecb50c5a934866b) 

Wen Ming, co-founder of Shenzhen Tributary Technology, open source microservice API gateway Apache APISIX PMC, sponsor of OpenResty Software Foundation, columnist of "OpenResty from Introduction to Practice", worked in Internet security company for 10 years before starting his own business, mainly engaged in server-side development and architecture, responsible for the development of Trojan horse He was responsible for the development of Trojan horse cloud detection and killing, anti-phishing system and enterprise security products. He worked as an architect in Qihoo 360, and was the initiator and member of the Open Source Committee.

The following is the full text of the sharing.

I and Yuan Sheng are doing an open source API gateway project called Apache APISIX, today to introduce the project involves the technology and selection of OpenResty, including three main aspects.

+ First, what the API gateway is and what it does.
+ Second, how to go about making API gateways and how to make selections.
+ Third, Apache APISIX is an open source project that introduces how we do testing and continuous integration with only two people, and it will involve some general things of OpenResty that are worth learning from.

## The Role of API Gateways

### **What is an API Gateway**

![2.webp](https://opentalk-blog.b0.upaiyun.com/prod/2019-10-21/d76d1acfeb3a02db533a9061eeda4d34)
Take Kong as an example, there is no API gateway on the left, but there are many services hanging behind it, if each service has to implement functions including authentication, statistics, security verification, etc., there will be a lot of duplicated work. The API gateway is a middle layer that extracts public things such as statistics, security, flow limitation, speed limitation, caching and so on.

### **Legacy Features of API Gateways**

+ Enabling API requests to be processed more securely and efficiently. Traditional API gateways have some basic functions that are still relevant today, managing north-south or east-west API traffic to be processed quickly and securely, which is the original purpose of API gateways.
+ The API's gateway covers all the features of Nginx, including reverse proxy, load balancing, and basic caching, secure authentication, flow and speed limiting, and more.
+ Support features that web servers like Nginx can't achieve. Such as dynamic upstream, dynamic SSL certificate, dynamic flow and speed limit, as well as active/passive health check, service fusion, etc. These dynamic capabilities are not supported by traditional web servers such as Nginx and Apache.
+ Full lifecycle management. In the field of API gateway, the biggest player is Google, which acquired a public company Apigee in 2016 and now integrates the whole function on Google Cloud.API gateway includes API design, documentation and testing, in addition to the familiar plug-ins of reverse proxy, load balancing and flow and speed limitation. We call it the full lifecycle management of API, from project design to testing, everything is within the scope of the whole API gateway.

### **New features under Cloud Native**

Why do we need to do the traditional stuff all over again now, including Kong and Apache APISIX? This is because there are some new changes in user and technical architectures under cloud-native and microservices systems.

#### New changes in technology architecture

+ Need to interface with important components like Prometheus, Zipkin, Skywalking, etc. inside Cloud Native.
+ gRPC proxy and protocol conversion (REST <=> gRPC): HTTP, a protocol used less and less in microservices, many people have started to use gRPC, that in the conversion from HTTP to gRPC protocol, this function is also needed, including the gRPC proxy.
+ Authentication changes: In traditional Nginx, traffic comes in and is usually reverse-proxied and load-balanced according to routing rules, with little authentication of the identity of the client sending the traffic. But in cloud-native, it's different, because a lot of traffic is in microservices, which requires strict authentication, including encryption, OpenID, and other authentication. This piece is some new features, you can put their own enterprises need to do authentication-related things to third-party external authentication vendors to do.
+ Serverless is also a very popular concept in recent years, for example, you want to dynamically run a function on the edge node or stop a function, or dynamically change the content, you can deploy your API gateway on the edge node, with this FaaS function, your edge node will be more flexible. APISIX has recently supported Serverless, which allows you to dynamically run a Lua function on an edge node.
+ Stateless, arbitrary expansion and shrinkage: API gateways did not have high performance requirements more than a decade ago, because Internet traffic was more from browsers to servers at that time, and there were no cell phones and IoT devices, no microservices, and no intranet traffic. But now the traffic is huge, including 4G, 5G, there are many cell phones and IoT devices to access the server, the traffic is especially large. At this time, a higher performance API gateway is needed to support. An important criterion of cloud-native is that all services can be scaled up and down at will by means of containers, which are Kubernetes-friendly.
+ Support multi-cloud and hybrid cloud: Now on the cloud has been a trend, but we generally do not put the service only on a cloud, such as Tencent cloud, Google cloud, Ali cloud, put a part of each, private cloud and then put a part, according to their security and price adjustment, private some data security on the private cloud, resources such as and CDN-related which is cheap on which cloud, do dynamic switching, then at this time there is a need and vendor-independent API gateway in the front to do distribution.

#### Applications

To give you two examples of what the new API gateway does.

+ Replaces all of Nginx's features to handle north-south traffic

It has the obvious advantage over Nginx that it is completely dynamic, and dynamic is the most basic point, whether it is Kong or Apache APISIX. Modifying any configuration file in Nginx requires a reload before it can take effect. Imagine a scenario where you use Nginx to do the front-end routing and load balancing, and bursts of traffic come in, and you need to add a lot of upstream servers quickly, so you have to keep modifying the Nginx configuration file and reload it, and then take off the upstream services after the bursts of traffic have passed, and then you have to change the Nginx file and reload it again. This is very costly, but if you use a web server like Kong or Apache APISIX, you don't have this problem, and you can easily modify the upstream configuration and dynamic certificate configuration of all machines in the cluster in real time through the API. Because it brings a lot of flexibility. Now many vendors are doing this replacement, not only Internet companies, but also some traditional enterprises are slowly taking Nginx out of the equation.

+ Zero Trust Gateway

In the traditional security field, we believe that border protection is very important, so we will use the firewall to do a layer of verification of the incoming traffic, this verification is actually the hit rule verification, if it is black, it will be rejected. This time there will be a problem: if some rules are not updated in a timely manner, it can cross the firewall, the previous security is more based on the border protection, over the border of the internal network can be unimpeded.

But Zero Trust Gateway can solve this problem completely, it considers all traffic insecure, the previous border protection was black or white. The zero trust security gateway is now black or white, if you are not white, then you are black, so it is completely identity-based authentication. An API request will come to the identity authentication server, third-party identity vendors such as Author0, OKTA identity authentication server to authenticate your identity, identity authentication, the request can only be passed, otherwise it is directly rejected, which is a trend in the field of security.

#### Business users' needs

+ Non-locking, rollback available

The biggest demand from all enterprise users is: don't lock users in. API gateways are the entry point for the entire traffic, so you can't lock users in. For example, if you use AliCloud's API gateway, you're already locked into it because it's the entry point for traffic, and there's no way to distribute it to other cloud vendors. I used this API gateway, for example, it was Nginx, so I can easily go back to it. We can also support this capability if a user feels uncomfortable using Nginx for a period of time and wants to fall back to Nginx.

+ Keeping the core stable

Although Apache APISIX iterates very fast every month, with more than 200 commits and about 10 big features every month, there is a directory called core in Apache APISIX that changes very little, and we keep its core stable. Feature iterations can be very fast, but the core is very stable.

+ Support the development of individual needs of enterprises

Whether domestic or foreign companies, there is no way to take a product to adapt to all the needs. If you adapt to all the needs, then you make a giant, will be a very large and miscellaneous products, its performance, scalability will be reduced to a very low. So we have plug-ins, if you need to have something personalized, go customize your own plug-ins, put the plug-in if you need any function, and take it off if you don't need it. I can ensure that the bottom core layer is very stable, and the top layer can be customized according to user needs.

## How to do the selection of gateway

### **Industry Status Understanding**

+ Refer to Gartner report

![3.WEBP](https://opentalk-blog.b0.upaiyun.com/prod/2019-10-21/ec7eeacc1a633bbbf8e02e63400abc54)
This is our selection idea, we do not do the selection from the technology first, but first look at the whole industry, Gartner's report can be used as a reference. As shown above, Google, IBM, RedHat and other head players eat most of the global API market, although the technical circle knows Kong, but it is actually in the position of visionaries, in addition, Kong as an emerging player or the first to open source their own API gateway out.

+ Refer to CNCF Panorama

![4.webp](https://opentalk-blog.b0.upaiyun.com/prod/2019-10-21/920e623113711bc683f8966b2bdc2494)
Gartner's report is more commercial in nature and can be built upon by referring to the panorama maintained by the Cloud Native Software Foundation CNCF in the open source community, where many open source and closed source projects are listed in a tiered, functional manner. There are more than a dozen software models in the cloud-native field in the panorama that can be selected for API gateway selection, half of which are products of major manufacturers, such as 3SCALE, which is a product of Red Hat, and the remaining Kong, AApache PISIX, TYK, etc. are open source projects, among which you can choose if you want to do API selection.

### **Product Selection Comparison**

![5.webp](https://opentalk-blog.b0.upaiyun.com/prod/2019-10-21/a2696ef442bcdd2d9390347bbce2dacb)
After comparing the mainstream API gateways with Gartner's report and CNCF's Panorama, we decided not to use an existing API gateway but to build one ourselves.

+ apigee

apigee is the biggest player with the advantage of full lifecycle, i.e., the whole Google family bucket from API design, development, documentation, testing, and go-live. But apigee is a closed-source project that cannot be custom developed and is locked down by Google Cloud.

+ Kong

Kong solves the pain point of apigee, neither locking nor supporting custom development, but Kong was developed in 2015, when the data was put in a heavy relational database of PostgreSQL, with cumbersome code and performance problems.

+ Apache APISIX

Apache APISIX borrows the idea of Kong, the selection is completely based on etcd, all the data will be placed in etcd, complete Kong on PostgreSQL to do a lot of repetitive code, such as message distribution, high availability and scalability are based on etcd, the operation is more simple. The shortcoming of APISIX is the short open source time, from June 6, 2019 open source until now has not been tested by large users, but the advantage is obvious: secondary development is much less difficult than Kong. For example, if you want to limit the speed of flow, you can add 60 or 70 lines of code to the Apache APISIX file, but Kong needs to modify five or six files and two or three hundred lines of code.

### **How to do the technology selection of the gateway?**

#### Core components of the API gateway.

+ Routing, which can be thought of as the locations in Nginx, is a function of routing, how to distribute the locations to upstream services to load each plugin. The choice is whether to do a traversal or to make a tree. The time and complexity required for both are different, so we choose to do a traversal like Kong.
+ Plug-ins, plug-ins are the core functionality of API gateways, with plug-ins you can easily develop your own code without having to wait for the open source community to add relevant features. When doing plug-ins need to think about whether to make hot-loading, hot-loading is the meaning of the new plug-ins or modify a plug-in, without restarting the entire service can take effect. We hope to do when modifying or adding plug-ins, you can immediately take effect through the API call.
+ schema verification, schema verification refers to the need to check whether the uploaded fields, types, etc. are legal after the user request comes in, and if you write your own plug-in, whether its parameters and input values are legal, which is equivalent to the description of the API, making it very convenient for individuals and front-end cooperation.
+ Storage, whether in a relational database or a key-value database, or in an etcd is the same as making a technical selection, which needs to be done before it can be built like a building block.

#### Selection Principles: Be a cloud-native friendly, high-performance, open source API gateway

+ Be developer friendly. It's the developers who use the API gateway, and we want it to be easy for developers to look at the code, learn the code, or modify the plugins without the pain that I and the faculty were feeling looking at Kong's code.
+ The pursuit of performance. Although the performance of OpenResty is high, but when you really do write it, you will find that the performance of the written code is not high, because the code in OpenResty are very easy to write, but it is difficult to guarantee to write an extreme code, it has very many pits, which is difficult for most people to notice.

#### Apache APISIX Selection

+ Routing: lua-resty-r3 was chosen at the beginning, with the recently added route FFI.
+ plug-ins: inspired by Kong, but with a completely different architecture and design, dramatically simpler to write, hot-loading.
+ schema: borrow from Tencent's open source rapidjson, implement jsonschema in rapidjson, and use the jsonschema standard to do validation.
+ Storage: etcd was chosen, the Lua-resty-etcd library was not available at the time, so you needed to help etcd from scratch lua to access it.

#### Apache APISIX Exclusive Features

+ Super performance, with performance being the main tag and internal tests finding Apache APISIX to be 10 times more powerful than Kong.
+ Hot updates of plugins, modifying or adding plugins without restarting the service, all updates are hot.
+ Routing can be plugged in, and if the complex routing of r3 is not preferred, prefix-matching routes can be used.
+ Support for version change control, allowing easy rollback of old versions if a new version is released with errors.
+ Zero trust based on identity, the newly merged future can support external authentication, at this point it is easy to achieve zero trust and access all external authentication vendors' services. This feature is also supported in the commercial version of Kong, but is directly open-sourced by Apache APISIX.

## Best practices for testing, continuous integration

### **Testing**

Large companies have a dedicated QA team to do testing, and the development department only needs to write the code and submit it to the QA team after a simple self-test. But open source projects do not have QA teams, and even the development team is part-time, so we must use automated testing, i.e. test-driven development, to play open source projects.

OpenResty has nearly 70 open source projects, and its commercial companies have nearly 100 closed source projects, for a total of nearly 200 projects maintained by less than 10 people. If you test manually, you can't do anything, so you have to find a way to implement a solution to this problem.

+ Development as Testing

At first, it is slow, because after developing a new feature, you need to submit a corresponding test case, otherwise the PR will not be merged. For example, if you contribute a feature to OpenResty without submitting the corresponding test case, or if you submit a test case but it is incomplete, no matter how well the feature is written, this PR will definitely not be merged because it breaks the principle of the whole open source project that tests need to be automated and run.

Apache APISIX introduced an additional condition that the code coverage cannot be less than 70%, which has now been changed to not less than 80%. If your change introduces new code and also adds test cases, but reduces the coverage of the original test cases, it will not be accepted for merging either.

+ Unit tests are based entirely on test:nginx

The test case is entirely based on test:nginx, which can be considered as a small language or a DSL with less documentation and a higher learning threshold, and the students and I are more familiar with it before testing entirely based on it.

+ Code style detection: luackeck and lua-relang

Luackeck works very well for Lua and OpenResty, provides several parameters to choose from, and also uses lua-relang written by Chun. we are running both programs to do code style checking to ensure consistency in style whether it's a new committer or our own code.

+ Code coverage detection: luacov

Code coverage detection uses luacov, a feature of standard lua, to run code coverage up.

Merge PR is done on the premise that the above tests, i.e. test:nginx test, code style test, and code coverage test have been run, and performance tests are done on the 6th of every month when a new version is released to compare the difference in performance between the old and new versions. Generally, we run flame graphs and do regular fuzzing tests and stress tests on chaotic inputs such as uri and args. After all, Apache APISIX is an API gateway, as the entrance of traffic to ensure sufficient stability.

### **Continuous Integration**

+ Strong reliance on GitHub: issues, Milestone, code review, PR approved. code review on GitHub is great for commenting on every line of code, and there is no way to merge approved if it thinks the line of code has to be changed without actually changing it.
+ Strong dependency on travis CI: unit testing, code style detection, multi-platform testing (ubuntu and mac), front-end packaging, automated commits. travis is a GitHub continuous integration plugin, Apache APISIX does not use its own server resources to run tests, but runs in the cloud, and now comes with Apache APISIX's front-end is automated for packaging and committing. Because we have to compile the code from vue to html, this is all done through travis.
+ coveralls.io, which uploads code coverage results to the coveralls.io website, presents everything related to code coverage in a visual way, such as which lines of code are not detected, what has changed from the previous version, etc., making code coverage testing automated. As mentioned before, to ensure that the core of Apache APISIX is always stable, it is necessary to ensure that all files in the core directory have 100% code coverage, i.e. every line of code in the core board is tested.

## Summary

+ Few resources are not necessarily a bad thing. Whether it is an open source project or a commercial company, it is only when resources are low that they think about how to leverage external forces or come up with spooky ideas to solve problems.
+ Apache APISIX selection, testing and CI were done in a "tricky" and automated way, with the help of tricky external forces, without building wheels.
+ Apache APISIX selection, testing and CI are three very important, more important than performance. Although we focus on performance, it is more worthwhile to think about not only the code, but the selection of how to test and CI, which you can apply to your business, even if you do not use OpenResty and Apache APISIX, you can still learn how open source projects are doing.
+ What GitHub and SaaS can offer, we will never build ourselves, and we will resist the urge to build our own wheels.
