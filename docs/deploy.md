# 生产环境部署

本服务部署在云主机中，启动方式如下：

## 全新安装

```sh
# 使用 PM2 进行服务进程管理
$ yarn global add pm2

$ cd /path/to/website

$ git pull && yarn install && yarn build

# 启动全新的服务进程
$ pm2 start --name "api7-website" ./node_modules/.bin/next -- start --port 80
```

## 更新代码

```sh
$ git pull && yarn install && yarn build

$ pm2 reload api7-website
```
