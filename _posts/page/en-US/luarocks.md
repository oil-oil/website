---
title: "luarocks.cn - 中国首个 Lua 模块代理服务"
date: 2021-01-22
---

LuaRocks 是使用最广泛的 Lua 模块管理工具，与之相对应的则是 [https://luarocks.org](https://luarocks.org/)，一个公共的 LuaRocks 服务。用户或通过 [https://luarocks.org](https://luarocks.org/) 下载其所需的 Lua 模块，或向 [https://luarocks.org](https://luarocks.org/) 上传自己开发的 Lua 模块。

然而该服务并没有设立中国站点，这意味着每当用户需要下载或者上传一个 Lua package 的时候，可能需要和位于远在太平洋彼端的服务器进行通信，延时之高可想而知，尤其对于像 Apache APISIX 这样包含众多 Lua 依赖模块的项目来说，拉取依赖所花费的时间更是令人咋舌，这大大降低了使用 LuaRocks 的体验。

[支流科技](https://www.apiseven.com/)近日推出了 [luarocks.cn](https://luarocks.cn/) 服务，该服务旨在加速国内用户访问 [https://luarocks.org](https://luarocks.org/) 的速度。该服务面向所有开发者，且完全免费。只需要简单的配置即可使用该服务。例如，在下载某一个 Lua 模块的时候，在 `--server` 参数中指定 `https://luarocks.cn` 即可使用到该代理服务，如下两条命令通过 luarocks.cn 安装了 [Apache APISIX](https://github.com/apache/apisix) 和 Kong。

```sh
$ luarocks install apisix --server https://luarocks.cn
$ luarocks install kong --server https://luarocks.cn
```

此外，你可以通过修改 LuaRocks 的配置文件，如 `~/.luarocks/config.lua` 和 `~/.luarocks/upload_config.lua` （分别用于下载和上传），来无缝使用 luarocks.cn 服务。

```sh
# cat .luarocks/upload_config.lua
rocks_servers = {
    "https://luarocks.cn"
}

# cat ~/.luarocks/upload_config.lua
key = "<Your API Key>"
server = "https://luarocks.cn"
```
