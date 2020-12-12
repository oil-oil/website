---
title: "想把 APISIX 运行在 ARM64 平台上？只要三步"
date: 2019-09-27 
---  

作者：温铭 

APISIX 是一个云原生、高性能、可扩展的微服务 API 网关。它是基于 OpenResty 和 etcd 来实现，和传统 API 网关相比，APISIX 具备动态路由和插件热加载，特别适合微服务体系下的 API 管理。

在即将发布的 0.8 版本中，APISIX 增加对物联网中常用协议 MQTT 的支持，那么接下来大家关心的就是：APISIX 可以在 ARM 平台上正常运行吗？只有支持了 ARM，APISIX 才能被当做 IoT 网关被广泛的部署在边缘节点中。

从 APISIX 使用的基础组件和依赖的 lua 库层面上分析，是可以在 ARM 平台上运行的，但实际情况如何呢？让我们动起手来验证下吧。

## 准备环境

首先，我们需要找一台公有云的 ARM 服务器，这样你阅读完文章后，也可以方便来做类似的测试。这里我们选用了**华为云的鲲鹏服务器**，它使用的是华为基于 ARM 指令自研的鲲鹏 CPU，很适合来做本次的验证：

![1.jpg](https://pic3.zhimg.com/80/v2-835f902a93bdb1ed5e8698d86e05f252_1440w.jpg)

操作系统选择了 Ubuntu 18.04，这个是个人偏好，你也可以选择 CentOS 等其他系统：

![2.jpg](https://pic1.zhimg.com/80/v2-7b6e2f754e8c915cb609efed4afe1a28_1440w.jpg)

## 安装 APISIX 的依赖

第二步是来安装 APISIX 的依赖，主要是 OpenResty 和 etcd，有详细的文档指引你来安装：[安装教程](https://link.zhihu.com/?target=https%3A//github.com/iresty/apisix/blob/master/doc/install-dependencies.md)。

但这里需要注意的是，OpenResty 和 etcd 在 Ubuntu 的源中都没有专门提供 ARM 版本，所以直接使用 `apt-get` 来安装是行不通的。

etcd 相对比较简单，直接提供了 ARM 的 release 包：

![3.jpg](https://pic1.zhimg.com/80/v2-241fd4ecad1307bd46b346f165581aa4_1440w.jpg)

下载下来后，先指定下环境变量：

    export  ETCD_UNSUPPORTED_ARCH=arm64

然后直接启动二进制文件即可：

    nohup ./etcd &

OpenResty 在 Ubuntu 下并没有直接提供 ARM 的包，需要我们下载源码手工编译，特别需要注意的是要下载最新的 1.15.8.2 的源码包，并加上 APISIX 需要的一些 C 模块：

    ./configure --prefix=/usr/local/openresty   --with-pcre-jit    --with-ipv6 --with-http_stub_status_module --without-http_gzip_module --with-http_realip_module  --with-http_v2_module

APISIX 是有 http 和 gRPC 协议转换的插件，所以 `http_v2_module` 是需要编译进去的。然后 `make` 和 `sudo make install`，OpenResty 也顺利的安装好了。

## 安装 APISIX

最后就是安装 APISIX 了，APISIX 除了依赖不少的 lua-resty 库之外，还通过 LuaJIT FFI 的方式调用了 rapidjson、rax 等知名的 C 库，这一步能否顺利完成呢？让我们用官方推荐的 Luarocks 方式来安装试试看：

    luarocks install apisix

APISIX 大概依赖近 20 个第三方库，都通过 Luarocks 的方式进行管理。因为 Luarocks 需要从 GitHub 上去下载依赖的源码包，并在本地进行编译，所以速度并不是很快。但结果却出人意料的顺利，没有报错的安装完成了。

让我们运行 APISIX：

    sudo apisix start

并开启限流的插件来确认下能否正常工作:

	curl -i http://127.0.0.1:9080/apisix/admin/routes/1 -X PUT -d '
	{
		"uri": "/index.html",
		"plugins": {
			"limit-count": {
				"count": 2,
				"time_window": 60,
				"rejected_code": 503,
				"key": "remote_addr"
			}
		},
		"upstream": {
			"type": "roundrobin",
			"nodes": {
				"39.97.63.215:80": 1
			}
		}
	}'

在多次访问测试地址后：

    curl -i http://127.0.0.1:9080/index.html

返回了 503 的限制信息：

    HTTP/1.1 503 Service Temporarily Unavailable

至此，APISIX 对 ARM 平台的初步支持已经测试完成了，更进一步，我们需要在 ARM 平台上运行 APISIX 自身的测试案例集，来确认是否所有功能都正常。

## 写在最后

如果 APISIX 依赖了 PostgreSQL 或者其他的关系型数据库，那么对 ARM 平台的支持就不会这么顺利了。

如果你对 APISIX 有什么建议或者问题，都欢迎到 [github](https://github.com/iresty/apisix/issues) 来给我们提交 issue。
