# 使用 Apache APISIX 的 OpenID Connect 插件进行集中身份认证

## 关于作者

本文作者朱欣欣是 API7.AI 的系统工程师，也是 Apache APISIX 项目的 committer。他是一个开源爱好者，也是一个 Golang 开发者。现在他正在为 Apache APISIX 的 control plane 贡献代码并执行 code review。除此之外，他在 Apache APISIX 社区中非常活跃，乐于回答社区内的各种问题。

## 什么是 Apache APISIX？

[Apache APISIX](https://apisix.apache.org/) 是一个动态、实时、高性能的 API 网关，提供负载均衡、动态上游、灰度发布、服务熔断、身份认证、可观测性等丰富的流量管理功能。Apache APISIX 不仅支持插件动态变更和热插拔，而且拥有众多实用的插件。Apache APISIX 的 OpenID Connect 插件支持 OpenID，用户可以使用该插件将身份认证从传统认证模式替换为集中认证模式。

## 什么是身份认证？

身份认证是指通过一定的手段，对用户的身份进行验证。应用通过身份认证识别用户身份，并根据用户身份 ID 从身份提供方（Identity Provider）获取详细的用户元数据，并以此判断用户是否拥有访问指定资源的权限。身份认证模式分为两大类：**传统认证模式**和**集中认证模式**。

### 传统认证模式

在传统认证模式下，各个应用服务需要单独支持身份认证，例如当用户未登录时访问登录接口，接口返回 301 跳转页面。应用需要开发维护 Session 以及和身份提供商的认证交互等逻辑。传统认证模式的流程如下图所示：首先由用户发起请求（request），然后由网关接收请求并将其转发至对应的应用服务，最后由应用服务与身份提供方对接，完成身份认证（authorization）。

![img](https://tfzcfxawmk.feishu.cn/space/api/box/stream/download/asynccode/?code=YTI4N2RiNDkzYWRlM2ZiNjM1MTZmODc5M2QzZDUxNDhfUG1MRGlJQ21lTFBBUGxvc2E2NXJ5WkppYzd1d2VNQVZfVG9rZW46Ym94Y25aYnFnWElmc2RxUWRudzBib1RLSUlnXzE2MzA0OTUwMzI6MTYzMDQ5ODYzMl9WNA)

### 集中认证模式

与传统认证模式不同，集中身份认证模式把用户认证从应用服务中抽离了出来，以 Apache APISIX 为例，集中认证的流程如下图所示：首先由用户发起请求（request），然后由前置的网关负责用户认证流程，与身份提供方对接，向身份提供方发送身份认证（authorization）请求。身份提供方返回用户身份信息（user info）。网关完成用户身份识别后，将用户身份信息通过请求头的形式转发至后端应用。
![img](https://tfzcfxawmk.feishu.cn/space/api/box/stream/download/asynccode/?code=ZGM1NzE2MmJlMGYyNDI4MzRlNzVjMTAwYWM5YzliOTFfWlFIWHRtOTl5UEltNHRaU1M2YVBXTmxUNVdadEpOOHRfVG9rZW46Ym94Y255NUZ6Q1pOY1lETnVUbndFcE10NGFnXzE2MzA0OTUwMzI6MTYzMDQ5ODYzMl9WNA)
相比较传统认证模式，集中认证模式下有如下优点：

1. 简化应用开发流程，降低开发应用工作量和维护成本，避免各个应用重复开发身份认证代码。
2. 提高业务的安全性，集中身份认证模式在网关层面能够及时拦截未经身份认证的请求，保护后端的应用。
## 什么是 OpenID ？
OpenID 是一种集中认证模式，它是一个去中心化的身份认证系统。使用 OpenID 的好处是，用户只需要在一个 OpenID 身份提供方的网站上注册和登录，使用一份账户密码信息即可访问不同应用。Okta 是一个常见的 OpenID 身份提供方，Apache APISIX OpenID Connect 插件支持 OpenID，所以用户可以使用该插件将传统认证模式替换为集中认证模式。
## OpenID 认证过程
![img](https://tfzcfxawmk.feishu.cn/space/api/box/stream/download/asynccode/?code=Y2E1ZjAzMjU4MTdkZDM4ZDc0ZWQ1MzIzMmEyZjIyNTBfbDYzSG1PQ3JzUUliOUF5UjFKWFBqcERtNzZpRmpLc0NfVG9rZW46Ym94Y25IeE9SemdKbzVCTGpBOUNTUzhVejVjXzE2MzA0OTUwMzI6MTYzMDQ5ODYzMl9WNA)
1. APISIX 向 Identity Provider 发起认证请求。
2. 用户在 Identity Provider 上登录并认证身份。
3. Identity Provider 携带 Authorization Code 返回 APISIX。
4. APISIX 使用从请求参数中提取到的 Code 请求 Identity Provider。
5. Identity Provider 向 APISIX 发送应答消息，里面包含了 ID Token 和 Access Token。
6. APISIX 将 Access Token 发送到 Identity Provider 的 User Endpoint，以进行获取用户身份。
7. 通过认证后，User Endpoint 将 User info 发送到 APISIX，完成身份验证。
# 如何使用 Apache APISIX 的 OpenID Connect 插件配置 Okta 认证
使用 Apache APISIX OpenID Connect 插件配置 Okta 认证的过程非常简单，只需三步即可完成 Okta 配置 ，从传统身份认证模式切换到集中身份认证模式。下文讲述了使用 Apache APISIX 的 OpenID Connect 插件配置 Okta 认证的操作步骤。
## 前提条件
已有 Okta 账号。
## 步骤一：配置 Okta
1. 登录你的 Okta 账号，并创建一个 Okta 应用，选择 OIDC 登录模式以及 Web Application 应用类型。
![img](https://tfzcfxawmk.feishu.cn/space/api/box/stream/download/asynccode/?code=OWIyZDIyMDQ5MzU5ODYzMmJmNTg3MTEyZjg0ZTkzZmZfd3pOeEJrZ3JYQkh6TXd1YnRkYVJpaE82S0tqRUpSOG1fVG9rZW46Ym94Y25WNTlIR29pdVlIUTJ1cWlscHFGRzZmXzE2MzA0OTUwMzI6MTYzMDQ5ODYzMl9WNA)
![img](https://tfzcfxawmk.feishu.cn/space/api/box/stream/download/asynccode/?code=YjhlODU5ZDUzOGM5NjY1ZDdhNzg5NGI2NjY3MWRhODdfVWRnTlhSZTFucVNUNHZaTDBSR0RLdjV2VW1TMGNDUzBfVG9rZW46Ym94Y25ERVZNTXBtYjhMd0dUQVNHc1RhUG9mXzE2MzA0OTUwMzI6MTYzMDQ5ODYzMl9WNA)
2. 设置登录和登出的跳转 URL。

其中 “Sign-in redirect URIs” 为登录成功允许跳转的链接地址，“Sign-out redirect URIs” 表示登出之后跳转的链接地址。在这个示例中，我们将登录成功跳转和登出之后跳转的链接地址都设置为 `http://127.0.0.1:9080/`。
![img](https://tfzcfxawmk.feishu.cn/space/api/box/stream/download/asynccode/?code=NWM4YzljYTA2ZDViZTg0MjhjM2QzZDA0ZmM2Y2UzNTNfblNQdVJGUzM2RXR1OG03V2d6SVgwTmpkMkNWZDBib1RfVG9rZW46Ym94Y251SU1IeVRiUDNHSjFNT3JadlRCVDBsXzE2MzA0OTUwMzI6MTYzMDQ5ODYzMl9WNA)
3. 完成设置以后，单击“Save”保存修改。
![img](https://tfzcfxawmk.feishu.cn/space/api/box/stream/download/asynccode/?code=NDA1NjYxODBiOWEzYWEyYTRlOTBmMTFhZmU5YTgzZDlfS1FxcUV4WXo5WDhwR3VkSjBTbndBOFd3dWhWbDlMbmRfVG9rZW46Ym94Y25scFpnZjlhR2h4dGx4TllWc05zVVJkXzE2MzA0OTUwMzI6MTYzMDQ5ODYzMl9WNA)
4. 访问应用的 General 页面，获取以下配置，配置 Apache APISIX OpenID Connect 时需要提供这些信息：

- Client ID： OAuth client ID，即应用的 ID，与下文的 `client_id ` 和 `{YOUR_CLIENT_ID}` 对应。
- Client secret： OAuth client secret，即应用密钥，与下文的 `client_secret`  和`{YOUR_CLIENT_SECRET}` 对应。
- Okta domain：应用使用的域名，与下文的 `discovery`  中的 `{YOUR_ISSUER}` 对应。
![img](https://tfzcfxawmk.feishu.cn/space/api/box/stream/download/asynccode/?code=OWIwZGVhN2VkNDYxMDBlNGYyZjUwNGMyOGQ3MzIwY2NfME9RcUVhV0ZQd1RxZXBtdTBmd0gzMFpFS1BUSDdnaU9fVG9rZW46Ym94Y25PeGxBb1ozNGRDMEM3VjFPUmNhZTBkXzE2MzA0OTUwMzI6MTYzMDQ5ODYzMl9WNA)
## 步骤二：安装 Apache APISIX
你可以通过源码包、Docker、Helm Chart 等多种方式来安装 Apache APISIX。
### 安装依赖
Apache APISIX 的运行环境需要依赖 NGINX 和 etcd，所以在安装 Apache APISIX 前，请根据您使用的操作系统安装对应的依赖。我们提供了 CentOS7、Fedora 31 & 32 、Ubuntu 16.04 & 18.04、 Debian 9 & 10 和 MacOS 上的依赖安装操作步骤，详情请参考https://apisix.apache.org/zh/docs/apisix/install-dependencies/

通过 Docker 或 Helm Chart 安装 Apache APISIX 时，已经包含了所需的 NGINX 和 etcd，请参照各自对应的文档。
### 通过 RPM 包安装（CentOS 7）
这种安装方式适用于 CentOS 7 操作系统，请运行以下命令安装 Apache APISIX。
```
sudo yum install -y https://github.com/apache/apisix/releases/download/2.7/apisix-2.7-0.x86_64.rpm
```
### 通过 Docker 安装
详情请参考：使用 Docker 安装 Apache APISIX (https://hub.docker.com/r/apache/apisix)。
### 通过 Helm Chart 安装
详情请参考：使用 Helm Chart 安装 Apache APISIX (https://github.com/apache/apisix-helm-chart)。
### 通过源码包安装
1. 创建一个名为 `apisix-2.7` 的目录。
```
mkdir apisix-2.7
```
2. 下载 Apache APISIX Release 源码包：
```
wget https://downloads.apache.org/apisix/2.7/apache-apisix-2.7-src.tgz
```
您也可以通过 Apache APISIX 官网下载 Apache APISIX Release 源码包。 Apache APISIX 官网也提供了 Apache APISIX、APISIX Dashboard 和 APISIX Ingress Controller 的源码包，详情请参考[Apache APISIX 官网-下载页](https://apisix.apache.org/zh/downloads)。

3. 解压 Apache APISIX Release 源码包：
```
tar zxvf apache-apisix-2.7-src.tgz -C apisix-2.7
```
4. 安装运行时依赖的 Lua 库：
```
# 切换到 apisix-2.7 目录
cd apisix-2.7
# 创建依赖
make deps
```
### 初始化依赖
运行以下命令初始化 NGINX 配置文件和 etcd。
```
# initialize NGINX config file and etcd
make init
```
## 步骤三：启动 Apache APISIX 并配置对应的路由
1. 运行以下命令，启动 Apache APISIX。
```
apisix start
```
2. 创建路由并配置 OpenID Connect 插件。

OpenID Connect 配置列表如下：

| **字段**                             | **默认值**            | **使用说明**                                                 |
| ------------------------------------ | --------------------- | ------------------------------------------------------------ |
| client_id                            | ""                    | OAuth 客户端 ID                                              |
| client_secret                        | ""                    | OAuth 客户端密钥                                             |
| discovery                            | ""                    | 身份提供商的服务发现端点                                     |
| scope                                | "openid"              | 需要访问资源范围                                             |
| relm                                 | "apisix"              | 指定 `**WWW-Authenticate**` 响应头验证信息                   |
| bearer_only                          | false                 | 是否检查请求头中的 token                                     |
| logout_path                          | "/logout"             | 登出的 URI                                                   |
| redirect_uri                         | request_uri           | 身份提供商跳转回来的 URI，默认为请求地址                     |
| timeout                              | 3                     | 请求超时时间，单位为秒                                       |
| ssl_verify                           | false                 | 是否身份提供商的校验 ssl 证书                                |
| introspection_endpoint               | ""                    | 身份提供商的令牌验证端点的 URL，不填则将从 discovery 响应中提取。 |
| introspection_endpoint_auth_method   | "client_secret_basic" | 令牌自省的认证方法名称                                       |
| public_key                           | ""                    | 验证令牌的公钥                                               |
| token_signing_alg_values_expected    | ""                    | 验证令牌的算法                                               |
| set_access_token_header              | true                  | 是否在请求头中携带 access token                              |
| access_token_in_authorization_header | false                 | true 时将 access token 放置在 Authorization 头中，false 时将 access token 放置在 X-Access-Token 头中。 |
| set_id_token_header                  | true                  | 是否将 ID token 携带至 X-ID-Token 请求头                     |
| set_userinfo_header                  | true                  | 是否将用户信息携带至 X-Userinfo 请求头                       |

以下代码示例通过 Apache APISIX Admin API 进行创建路由，设置路由的上游为 httpbin.org。httpbin.org 是一个简单的用于接收请求和响应请求的后端服务，下文将使用 httpbin.org 的 get 页面，参考 http://httpbin.org/#/HTTP_Methods/get_get。

具体配置项请参考 Apache APISIX OpenID Connect Plugin (https://apisix.apache.org/zh/docs/apisix/plugins/openid-connect/)。
```
curl  -XPOST 127.0.0.1:9080/apisix/admin/routes -H "X-Api-Key: edd1c9f034335f136f87ad84b625c8f1" -d '{
    "uri":"/*",
    "plugins":{
        "openid-connect":{
            "client_id":"{YOUR_CLIENT_ID}",
            "client_secret":"{YOUR_CLIENT_SECRET}",
            "discovery":"https://{YOUR_ISSUER}/.well-known/openid-configuration",
            "scope":"openid profile",
            "bearer_only":false,
            "realm":"master",
            "introspection_endpoint_auth_method":"client_secret_post",
            "redirect_uri":"http://127.0.0.1:9080/"
        }
    },
    "upstream":{
        "type":"roundrobin",
        "nodes":{
            "httpbin.org:80":1
        }
    }
}'
```
## 步骤四：访问 Apache APISIX 
1. 访问 "http://127.0.0.1:9080/get"，因为开启了 OpenID Connect 插件，所以页面被重定向到 Okta 登录页面。
![img](https://tfzcfxawmk.feishu.cn/space/api/box/stream/download/asynccode/?code=NThlYTE4Mjg0NDRlOGFjYzI3NWU3MTk0ZDcyYWNjOWRfVmY1YktKR2FDdFk5RkRXbEdTc3lPWENtVkRCVjIxcTVfVG9rZW46Ym94Y25MR0pSRFB3bnhjTUh5QjJmVmFYU0dnXzE2MzA0OTUwMzI6MTYzMDQ5ODYzMl9WNA)
2. 输入用户在 Okta 注册的账号密码，单击“Sign in”，登录 Okta 账户。
3. 登录成功之后，能成功访问到 httpbin.org 中的 get 页面。该 httpbin.org/get 页面将返回请求的数据如下：
```
   ...
    "X-Access-Token": "******Y0RPcXRtc0FtWWVuX2JQaFo1ZVBvSlBNdlFHejN1dXY5elV3IiwiYWxnIjoiUlMyNTYifQ.***TVER3QUlPbWZYSVRzWHRxRWh2QUtQMWRzVDVGZHZnZzAiLCJpc3MiOiJodHRwczovL3FxdGVzdG1hbi5va3RhLmNvbSIsImF1ZCI6Imh0dHBzOi8vcXF0ZXN0bWFuLm9rdGEuY29tIiwic3ViIjoiMjgzMDE4Nzk5QHFxLmNvbSIsImlhdCI6MTYyODEyNjIyNSwiZXhwIjoxNjI4MTI5ODI1LCJjaWQiOiIwb2ExMWc4ZDg3TzBGQ0dYZzY5NiIsInVpZCI6IjAwdWEwNWVjZEZmV0tMS3VvNjk1Iiwic2NwIjpbIm9wZW5pZCIsInByb2Zpb***.****iBshIcJhy8QNvzAFD0fV4gh7OAdTXFMu5k0hk0JeIU6Tfg_Mh-josfap38nxRN5hSWAvWSk8VNxokWTf1qlaRbypJrKI4ntadl1PrvG-HgUSFD0JpyqSQcv10TzVeSgBfOVD-czprG2Azhck-SvcjCNDV-qc3P9KoPQz0SRFX0wuAHWUbj1FRBq79YnoJfjkJKUHz3uu7qpTK89mxco8iyuIwB8fAxPMoXjIuU6-6Bw8kfZ4S2FFg3GeFtN-vE9bE5vFbP-JFQuwFLZNgqI0XO2S7l7Moa4mWm51r2fmV7p7rdpoNXYNerXOeZIYysQwe2_L****", 
    "X-Id-Token": "******aTdDRDJnczF5RnlXMUtPZUtuSUpQdyIsImFtciI6WyJwd2QiXSwic3ViIjoiMDB1YTA1ZWNkRmZXS0xLdW82OTUiLCJpc3MiOiJodHRwczpcL1wvcXF0ZXN0bWFuLm9rdGEuY29tIiwiYXVkIjoiMG9hMTFnOGQ4N08wRkNHWGc2OTYiLCJuYW1lIjoiUGV0ZXIgWmh1IiwianRpIjoiSUQuNGdvZWo4OGUyX2RuWUI1VmFMeUt2djNTdVJTQWhGNS0tM2l3Z0p5TTcxTSIsInZlciI6MSwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjgzMDE4Nzk5QHFxLmNvbSIsImV4cCI6MTYyODEyOTgyNSwiaWRwIjoiMDBvYTA1OTFndHAzMDhFbm02OTUiLCJub25jZSI6ImY3MjhkZDMxMWRjNGY3MTI4YzlmNjViOGYzYjJkMDgyIiwiaWF0IjoxNjI4MTI2MjI1LCJhdXRoX3RpbWUi*****", 
    "X-Userinfo": "*****lfbmFtZSI6IlpodSIsImxvY2FsZSI6ImVuLVVTIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjgzMDE4Nzk5QHFxLmNvbSIsInVwZGF0ZWRfYXQiOjE2MjgwNzA1ODEsInpvbmVpbmZvIjoiQW1lcmljYVwvTG9zX0FuZ2VsZXMiLCJzdWIiOiIwMHVhMDVlY2RGZldLTEt1bzY5NSIsImdpdmVuX25hbWUiOiJQZXRlciIsIm5hbWUiOiJQZXRl****"
    ...
```
其中：

X-Access-Token：Apache APISIX 将从用户提供商获取到的 access token 放入 X-Access-Token 请求头，可以通过插件配置中的 `access_token_in_authorization_header` 来选择是否放入 Authorization 请求头中。
![img](https://tfzcfxawmk.feishu.cn/space/api/box/stream/download/asynccode/?code=YmQwMTRiMTE5NzEzMTVhMGMzZWIyNWE1ZTBmM2NlOWRfRDJlc0cyb2NWMnZFSE5GM0tJYzFKcEVjN3VmdzF1QnhfVG9rZW46Ym94Y25yYnlUN3FTdU4waWRabm9HclFJRG5mXzE2MzA0OTUwMzI6MTYzMDQ5ODYzMl9WNA)
X-Id-Token：Apache APISIX 将从用户提供商获取到的 ID token 通过 base64 编码之后放入 X-Id-Token 请求头，可以通过插件配置中的 set_id_token_header 来选择是否开启该功能，默认为为开启状态。
![img](https://tfzcfxawmk.feishu.cn/space/api/box/stream/download/asynccode/?code=YTlkOWIxM2MyMzczZWRiYWNhNDBhNDNhMzE1NThlMThfaER5OWdXcmJuSnhYWDhkdEdqY25JUHBadW85bmJ4ODJfVG9rZW46Ym94Y243RmwzTHgwSEE1bzQzYnRrQW5FR2NjXzE2MzA0OTUwMzI6MTYzMDQ5ODYzMl9WNA)
X-Userinfo:  Apache APISIX 将从用户提供商获取到的用户信息，通过 base64 编码之后放入 X-Userinfo，你可以通过插件配置中的 `set_userinfo_header` 来选择是否开启该功能，默认为开启状态。
![img](https://tfzcfxawmk.feishu.cn/space/api/box/stream/download/asynccode/?code=MTExN2JkZWQ3ZGQwMjkxYzNiYjhiNjM3ZDE1ZmM2YTVfSWo1cEpRcFhWaUFrc1VIbHFJaXRZS0pYMXRnU2hIZU9fVG9rZW46Ym94Y24xb2hRYklITmhHODRCVlB5U0lKRTdmXzE2MzA0OTUwMzI6MTYzMDQ5ODYzMl9WNA)
由此可以看到，Apache APISIX 将会携带 `X-Access-Token`,`X-Id-Token`,`X-Userinfo` 三个请求头传递至上游。上游可以通过解析这几个头部，从而获取到用户 ID 信息和用户的元数据。
# 关于 Okta
Okta 是一个可定制的、安全的集中身份认证解决方案。Okta 可以为您的应用程序添加认证和授权。不需要自己编写代码，即可在您的应用程序中直接获得可扩展的认证。您可以将应用程序连接到Okta，并定义用户的登录方式。每次用户尝试认证时，Okta都会验证他们的身份，并将所需信息发回给您的应用程序。