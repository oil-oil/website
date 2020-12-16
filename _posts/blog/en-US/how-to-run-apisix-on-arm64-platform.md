---
title: "Want to run APISIX on an ARM64 platform? Just three steps"
date: 2019-09-27 
---  

Author: Wen Ming

APISIX is a cloud-native, high-performance, scalable microservice API gateway. It is based on OpenResty and etcd. Compared with traditional API gateways, APISIX has dynamic routing and plug-in hot-loading, which is especially suitable for API management under microservice system.

In the upcoming 0.8 release, APISIX will add support for MQTT, a common protocol used in IoT, so the next question is: Can APISIX run properly on ARM platform? Only with ARM support can APISIX be widely deployed as an IoT gateway in the edge nodes.

The analysis at the level of the base components used by APISIX and the dependent lua libraries suggests that it is possible to run on ARM platforms, but how does it work in practice? Let's get our hands dirty and verify it.

## Prepare the environment

First, we need to find a public cloud ARM server so that you can easily come and do similar tests after reading the article. Here we have chosen**Huawei Cloud's Kunpeng Server**, It uses Huawei's own Kunpeng CPU based on ARM instructions, which makes it a good candidate for this verification.

![1.jpg](https://pic3.zhimg.com/80/v2-835f902a93bdb1ed5e8698d86e05f252_1440w.jpg)

The operating system chosen is Ubuntu 18.04, which is a personal preference, but you can also choose other systems such as CentOS.

![2.jpg](https://pic1.zhimg.com/80/v2-7b6e2f754e8c915cb609efed4afe1a28_1440w.jpg)

## Installing APISIX dependencies

The second step is to install the APISIX dependencies, mainly OpenResty and etcd, and there is detailed documentation to guide you through the installation.[Installation Tutorial](https://github.com/apache/apisix/blob/master/doc/install-dependencies.md).

However, it is important to note that neither OpenResty nor etcd are specifically provided in the Ubuntu repositories as ARM versions, so use the `apt-get` to install does not work.

etcd is relatively simple and provides the ARM release package directly:

![3.jpg](https://pic1.zhimg.com/80/v2-241fd4ecad1307bd46b346f165581aa4_1440w.jpg)

Once downloaded, first specify the following environment variables.

    export  ETCD_UNSUPPORTED_ARCH=arm64

The binary can then be launched directly at

    nohup ./etcd &

OpenResty does not provide ARM packages directly under Ubuntu, so we need to download the source code and compile it by hand, with special attention to downloading the latest 1.15.8.2 source package and adding some C modules required by APISIX:

    ./configure --prefix=/usr/local/openresty   --with-pcre-jit    --with-ipv6 --with-http_stub_status_module --without-http_gzip_module --with-http_realip_module  --with-http_v2_module

APISIX is a plugin with http and gRPC protocol conversions, so `http_v2_module` is required to be compiled in. Then `make` and `sudo make install`, OpenResty was also installed smoothly.

## Install APISIX

The last step is to install APISIX, which relies on a lot of lua-resty libraries, but also calls rapidjson, rax and other well-known C libraries by way of LuaJIT FFI. Let's try to install it using the officially recommended Luarocks method.

    luarocks install apisix

APISIX relies on about 20 third-party libraries, all managed by Luarocks. Luarocks is not very fast because it needs to download the dependencies from GitHub and compile them locally. However, the installation went surprisingly smoothly and completed without errors.

Let's run APISIX:

    sudo apisix start

And turn on the current-limiting plug-in to confirm that it works properly:

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

After several visits to the test address.

    curl -i http://127.0.0.1:9080/index.html

Returned information on the limits of 503.

    HTTP/1.1 503 Service Temporarily Unavailable

At this point, APISIX's initial support for the ARM platform has been tested and furthermore, we need to run APISIX's own test case set on the ARM platform to confirm that all features are working.

## Write at the end

If APISIX relies on PostgreSQL or other relational databases, then support for ARM platforms will not be as smooth.

If you have any suggestions or questions about APISIX, Welcome to [github](https://github.com/apache/apisix/issues) to submit an issue to us.
