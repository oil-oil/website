---
title: "Using the Apache APISIX OpenID Connect Plug-in for Centralized Identity Authentication"
avatar: "https://avatars.githubusercontent.com/u/25628854?v=4"
author: "Xinxin Zhu"
href: "https://github.com/starsz"
date: 2021-09-07
keywords: API7,Apache APISIX,API Gateway,blog,Centralized Authentication,Okta
description: This article describes the steps to configure Okta authentication using the OpenID Connect plug-in for Apache APISIX.
---

Using the Apache APISIX OpenID Connect plugin to configure Okta authentication is a simple three-step process. It allows you to switch from traditional authentication mode to centralized identity authentication mode. The following sections describe the steps to configure Okta authentication using the OpenID Connect plugin for Apache APISIX.

Centralized identity authentication mode, compared with traditional authentication mode, has the following advantages:

1. Centralized identity authentication simplifies the application development process.
1. Centralized identity authentication improves business security. 

## Prerequisite

Have an Okta account ready for use.

## Step 1: Configuring Okta

1. Log in to your Okta account, click "Create App Integration" to create an Okta application.
        ![Create App Integration](https://static.apiseven.com/202108/1629945284704-056f75ef-f726-4c62-8c4e-f491ba9ed35b.png)

1. Select the "OIDC- OpenID Connect" for Sign-in method, and select "Web Application" for Application type.
        ![Create a new App Integration](https://static.apiseven.com/202108/1629945322972-0a028f73-2cd8-4a84-9849-3e5d4f5c457b.png)

1. Set the redirect URL for login and logout.
        The "Sign-in redirect URIs" are the links that are allowed to be redirected after a successful login, and the "Sign-out redirect URIs" are the links that are redirected after a successful login. In this example, we set both the sign-in redirect and sign-out redirect URIs to http://127.0.0.1:9080/ .
        ![Set the redirect URL for login and logout](https://static.apiseven.com/202108/1629945355148-237e1fb7-f874-4a61-adeb-0e062f40cb03.png)

1. After finishing the settings, click "Save" to save the changes.
        ![save the changes](https://static.apiseven.com/202108/1629945383145-18cfbe84-4c7f-4f62-8979-fa2679d96ee1.png)
  
1. Visit the General page of the application to obtain the following configuration, which is required to configure Apache APISIX OpenID Connect.

- Client ID: The application ID, which corresponds to client_id below.
- Client secret: The application key, which corresponds to client_secret below.
- Okta domain: The domain name used by the application, corresponding to {ISSUER} below.

![obtain configuration](https://static.apiseven.com/202108/1629945708891-d0e9e0bd-dd3a-4ce7-b497-7a31f6da3f49.png)

## Step 2: Installing Apache APISIX

### Installing Dependencies

The Apache APISIX runtime environment requires dependencies on NGINX and etcd.
Before installing Apache APISIX, please install dependencies according to the operating system you are using. We provide the dependencies installation instructions for CentOS7, Fedora 31 & 32, Ubuntu 16.04 & 18.04, Debian 9 & 10, and MacOS, please refer to [Install Dependencies](https://apisix.apache.org/docs/apisix/install-dependencies/) for more details.

### Installing via RPM Package(CentOS 7)

This installation method is suitable for CentOS 7, please run the following command to install Apache APISIX.

```shell
sudo yum install -y https://github.com/apache/apisix/releases/download/2.7/apisix-2.7-0.x86_64.rpm
```

### Installing via Docker

Please refer to: [Installing Apache APISIX with Docker](https://apisix.apache.org/docs/apisix/how-to-build/#installation-via-docker).

### Installing via Helm Chart

Please refer to: [Installing Apache APISIX with Helm Chart](https://apisix.apache.org/docs/apisix/how-to-build/#installation-via-helm-chart).

### Installing via  Source Release

1. Create a directory named `apisix-2.7`.
  
    ```shell
    mkdir apisix-2.7
    ```

1. Download Apache APISIX Release source package.
  
    ```shell
    wget https://downloads.apache.org/apisix/2.7/apache-apisix-2.7-src.tgz
    ```

    You can also download the Apache APISIX Release source package from the Apache APISIX website. The [Apache APISIX Official Website - Download Page](https://apisix.apache.org/downloads/) also provides source packages for Apache APISIX, APISIX Dashboard and [APISIX Ingress Controller](https://github.com/apache/apisix-ingress-controller).

1. Unzip the Apache APISIX Release source package.
  
    ```shell
    tar zxvf apache-apisix-2.7-src.tgz -C apisix-2.7
    ```
  
1. Install the runtime dependent Lua libraries.

    ```shell
    # Switch to the apisix-2.7 directory
    cd apisix-2.7
    # Create dependencies
    make deps
    ```

### Initializing Dependencies

Run the following command to initialize the NGINX configuration file and etcd.

```shell
# initialize NGINX config file and etcd
make init
```

## Step 3: Start Apache APISIX and Configure the Corresponding Route

1. Run the following command to start Apache APISIX.

    ```shell
    apisix start
    ```

1. Create a route and configure the OpenID Connect plugin. The following code example creates a route through the Apache APISIX Admin API, setting the upstream path to httpbin.org, a simple backend service for receiving and responding to requests. The following will use the get page of httpbin.org. Please refer to [http bin get](http://httpbin.org/#/HTTP_Methods/get_get) for more information. For specific configuration items, please refer to the [Apache APISIX OpenID Connect Plugin](https://apisix.apache.org/docs/apisix/plugins/openid-connect/).

The OpenID Connect configuration fields are listed below:

|Field|Default Value|Description|
| :------| :------------ | :------- |
|client_id|""|OAuth client ID.|
|client_secret|""|OAuth client secret.|
|discovery|""|Service discovery endpoints for identity providers.|
|scope|openid|Scope of resources to be accessed.|
|relm|apisix|Specify the WWW-Authenticate response header authentication information.|
|bearer_only|false|Whether to check the token in the request header.|
|logout_path|/logout|Log out URI.|
|redirect_uri|request_uri|The URI that the identity provider redirects back to, defaulting to the request address.|
|timeout|3|Request timeout time, the unit is defined in seconds.|
|ssl_verify|false|Verify the identity provider's SSL certificate.|
|introspection_endpoint|""|The URL of the identity provider's token authentication endpoint, which will be extracted from the discovery, response if left blank.|
|introspection_endpoint_auth_method|client_secret_basic|Name of the authentication method for token introspection.|
|public_key|""|Public key for an authentication token.|
|token_signing_alg_values_expected|""|Algorithm for authentication tokens.|
|set_access_token_header|true|Whether to carry the access token in the request header.|
|access_token_in_authorization_header|false|Whether to put an access token in the Authorization header. The access token is placed in the Authorization header when this value is set to true and in the X-Access-Token header when it is set to false.|
|set_id_token_header|true|Whether to carry the ID token in the X-ID-Token request header.|
|set_userinfo_header|true|Whether to carry user information in the X-Userinfo request header.|

```shell
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

## Verification

1. Visit "http://127.0.0.1:9080/get" and the page is redirected to the Okta login page because the OpenID Connect plugin is enabled.
    ![visit Okta login page](https://static.apiseven.com/202108/1629945757074-1340330d-1429-4f3f-bc8e-c89153acaec5.png)
1. Enter the username and password for the user's Okta account and click "Sign In" to log in to your Okta account.
1. After successful login, you can access the get page in "httpbin.org". The "httpbin.org/get" page will return the requested data with X-Access-Token,X-Id-Token, and X-Userinfo as follows.
  
  ```shell
  "X-Access-Token": "******Y0RPcXRtc0FtWWVuX2JQaFo1ZVBvSlBNdlFHejN1dXY5elV3IiwiYWxnIjoiUlMyNTYifQ.***TVER3QUlPbWZYSVRzWHRxRWh2QUtQMWRzVDVGZHZnZzAiLCJpc3MiOiJodHRwczovL3FxdGVzdG1hbi5va3RhLmNvbSIsImF1ZCI6Imh0dHBzOi8vcXF0ZXN0bWFuLm9rdGEuY29tIiwic3ViIjoiMjgzMDE4Nzk5QHFxLmNvbSIsImlhdCI6MTYyODEyNjIyNSwiZXhwIjoxNjI4MTI5ODI1LCJjaWQiOiIwb2ExMWc4ZDg3TzBGQ0dYZzY5NiIsInVpZCI6IjAwdWEwNWVjZEZmV0tMS3VvNjk1Iiwic2NwIjpbIm9wZW5pZCIsInByb2Zpb***.****iBshIcJhy8QNvzAFD0fV4gh7OAdTXFMu5k0hk0JeIU6Tfg_Mh-josfap38nxRN5hSWAvWSk8VNxokWTf1qlaRbypJrKI4ntadl1PrvG-HgUSFD0JpyqSQcv10TzVeSgBfOVD-czprG2Azhck-SvcjCNDV-qc3P9KoPQz0SRFX0wuAHWUbj1FRBq79YnoJfjkJKUHz3uu7qpTK89mxco8iyuIwB8fAxPMoXjIuU6-6Bw8kfZ4S2FFg3GeFtN-vE9bE5vFbP-JFQuwFLZNgqI0XO2S7l7Moa4mWm51r2fmV7p7rdpoNXYNerXOeZIYysQwe2_L****",
  "X-Id-Token": "******aTdDRDJnczF5RnlXMUtPZUtuSUpQdyIsImFtciI6WyJwd2QiXSwic3ViIjoiMDB1YTA1ZWNkRmZXS0xLdW82OTUiLCJpc3MiOiJodHRwczpcL1wvcXF0ZXN0bWFuLm9rdGEuY29tIiwiYXVkIjoiMG9hMTFnOGQ4N08wRkNHWGc2OTYiLCJuYW1lIjoiUGV0ZXIgWmh1IiwianRpIjoiSUQuNGdvZWo4OGUyX2RuWUI1VmFMeUt2djNTdVJTQWhGNS0tM2l3Z0p5TTcxTSIsInZlciI6MSwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjgzMDE4Nzk5QHFxLmNvbSIsImV4cCI6MTYyODEyOTgyNSwiaWRwIjoiMDBvYTA1OTFndHAzMDhFbm02OTUiLCJub25jZSI6ImY3MjhkZDMxMWRjNGY3MTI4YzlmNjViOGYzYjJkMDgyIiwiaWF0IjoxNjI4MTI2MjI1LCJhdXRoX3RpbWUi*****",
  "X-Userinfo": "*****lfbmFtZSI6IlpodSIsImxvY2FsZSI6ImVuLVVTIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiMjgzMDE4Nzk5QHFxLmNvbSIsInVwZGF0ZWRfYXQiOjE2MjgwNzA1ODEsInpvbmVpbmZvIjoiQW1lcmljYVwvTG9zX0FuZ2VsZXMiLCJzdWIiOiIwMHVhMDVlY2RGZldLTEt1bzY5NSIsImdpdmVuX25hbWUiOiJQZXRlciIsIm5hbWUiOiJQZXRl****"
  ```

**X-Access-Token**: Apache APISIX puts the access token obtained from the user provider into the X-Access-Token request header, optionally via the access_token_in_authorization_header in the plugin configuration Authorization request header.

![X-Access-Token](https://static.apiseven.com/202108/1629945782309-14f84210-6cf3-4618-9ed0-809701094872.png)

**X-Id-Token**: Apache APISIX will get the Id token from the user provider through the base64 encoding into the X-Id-Token request header, you can choose whether to enable this function through the set_id_token_header in the plugin configuration, the default is enabled.

![X-Id-Token](https://static.apiseven.com/202108/1629945819163-8751bf83-57a1-4278-8fbf-5379e6e81c58.png)

**X-Userinfo**: Apache APISIX will get the user information from the user provider and put it into X-Userinfo after encoding it with Base64, you can choose whether to enable this feature through set_userinfo_header in the plugin configuration, it is set to be on by default.

![X-Userinfo](https://static.apiseven.com/202108/1629945855914-012fbb0a-d65f-428e-8f46-621291ff9deb.png)

As you can see, Apache APISIX will carry the X-Access-Token, X-Id-Token, and X-Userinfo request headers to the upstream. The upstream can parse these headers to get the user IDid information and user metadata.

We have shown the process of building centralized identity authentication from Okta directly into the Apache APISIX Gateway. It is easy to sign up for a free Okta Developer Account to get started. Our approach reduces developer overhead and enables a safe and streamlined experience.

## About Okta

Okta is a customizable, secure, and drop-in solution to add authentication and authorization services to your applications. Get scalable authentication built right into your application without the development overhead, security risks, and maintenance that come from coding it yourself. You can connect any application in any language or on any stack to Okta and define how you want your users to sign in. Each time a user tries to authenticate, Okta will verify their identity and send the required information back to your app.

## About Apache APISIX

Apache APISIX is a dynamic, real-time, high-performance API gateway. Apache APISIX provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more. You can use Apache APISIX to handle traditional north-south traffic, as well as east-west traffic between services. It can also be used as a k8s ingress controller.

Hundreds of companies worldwide have used Apache APISIX, covering finance, internet, manufacturing, retail, operators, such as NASA, the European Union’s Digital Factory, TravelSky, Tencent, Huawei, Weibo,  China Mobile, Taikang, 360 , etc.

Github:  https://github.com/apache/apisix

Website: https://apisix.apache.org
