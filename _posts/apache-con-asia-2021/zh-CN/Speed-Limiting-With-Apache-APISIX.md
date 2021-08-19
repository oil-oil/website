---
title: "使用 Apache APISIX 实现限流限速"
date: 2021-08-06 13:30:00
---

<div class="iframeBox">
  <iframe src="//player.bilibili.com/player.html?aid=674805891&bvid=BV19U4y177Vh&cid=388403877&page=1" frameborder="0" scrolling="no" style="display: block; min-width: 100%; width: 100%; height: 100%; border: none; overflow: auto;"></iframe>
</div>

# 使用 Apache APISIX 实现限流限速

## 分享人简介

陈军旭: 互联网老兵，曾任职于新浪、迅雷、360 等知名互联网公司。 最近两年开始深度参与开源，热爱开源。目前从事开源商业化创业。

## 分享主题介绍

谈到限流限速，人们往往最先想到的是 Nginx 。然而 Nginx 通过配置文件的方式实现，每次变更都需要 reload ，这让运维工作极其繁杂。另一方面，限速的条件被限制在 Nginx 的变量范围内，使得 Nginx 难以实现业务上精细化的限流限速需求。

本次分享将带来如何使用 Apache APISIX 来实现动态、精细化、分布式的限流限速，以及如何通过插件编排来实现更符合业务需求的限流限速。

## PPT 下载

点击下载 [PPT](https://api7-website-1301662268.cos.accelerate.myqcloud.com/202108/%E9%99%88%E5%86%9B%E6%97%AD-%E4%BD%BF%E7%94%A8%20Apache%20APISIX%20%E5%AE%9E%E7%8E%B0%E9%99%90%E6%B5%81-API%26%E5%BE%AE%E6%9C%8D%E5%8A%A1.key)