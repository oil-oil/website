import React from "react";
import { NextSeo } from "next-seo";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FooterLinks from "@/components/FooterLinks";

import { SBlock1, SSection, SBlock2, SButton, SPluginChart } from "./style";

const Home: React.FC = () => {
  return (
    <>
      <NextSeo title="首页" />
      <Nav />
      <SBlock1>
        <span>驱动企业数字化转型</span>
        <br />
        <span>
          管理并可视化 API
          和微服务等企业关键业务流量，通过大数据和人工智能（AI）加速企业业务决策
        </span>
        <div className="mask"></div>
      </SBlock1>
      <SSection>
        <span className="title">独创低代码 API 网关，零成本上手</span>
        <SPluginChart>
        <div className='right'>
          <div className="desc">
            <p>
              企业需求千差万别，不用二次开发的 API 网关才是根本的解决之道
            </p>
            <p>
              从开发工程师，到运维、测试、安全工程师，甚至产品经理，都可以让
              Apache APISIX 的 40 多个插件协同合作，创造属于自己的接入层
            </p>
          </div>
          <div className="video-button">
          <SButton>
              <a
                href="https://static.apiseven.com/2020/07/pluginChart.mp4"
                target="_blank"
              >
                完整视频
              </a>
            </SButton>
          </div>
          </div>
          <div className='left'>
          <div className="gif">
            <img src="/pluginChart.gif" alt=""/>
          </div>
          </div>
        </SPluginChart>
      </SSection>
      <SSection>
        <span className="title">下一代云原生 API 管理平台</span>
        <span className="desc">
          支持混合云、多数据中心、Kubernetes
          等部署方式，帮助您快速、安全地处理业务数据，并进行动态扩展
        </span>
        <img
          className="block-2-img"
          src="https://static.apiseven.com/2020/05/1594881772-Canvas-1.png"
          alt=""
        />
        <div className="feature-list">
          <div className="feature-item">
            <span className="title">极致性能</span>
            <img
              src="https://static.apiseven.com/2020/05/mouse-globe.png"
              alt=""
            />
            <span className="desc">
              微秒级延时，单核心 2 万 QPS，性能超出同类产品 10 倍
            </span>
            <SButton>
              <a
                href="https://www.apiseven.com/api-%e7%bd%91%e5%85%b3-apache-apisix-%e5%92%8c-kong-%e7%9a%84%e9%80%89%e5%9e%8b%e5%af%b9%e6%af%94/"
                target="_blank"
              >
                性能对比测试
              </a>
            </SButton>
          </div>
          <div className="feature-item">
            <span className="title">开源驱动</span>
            <img
              src="https://static.apiseven.com/2020/05/laptop-cloud.png"
              alt=""
            />
            <span className="desc">
              活跃的开源社区，快速的产品迭代，不锁定用户
            </span>
            <SButton>
              <a
                href="https://www.apiseven.com/category/%e7%94%a8%e6%88%b7%e6%a1%88%e4%be%8b/"
                target="_blank"
              >
                这些公司都在使用
              </a>
            </SButton>
          </div>
          <div className="feature-item">
            <span className="title">热加载</span>
            <img
              src="https://static.apiseven.com/2020/05/plug-cloud.png"
              alt=""
            />
            <span className="desc">
              函数与插件热加载机制，更适合 Serverless 与 IoT
            </span>
            <SButton>
              <a
                href="https://www.apiseven.com/apache-apisix-vs-api7/"
                target="_blank"
              >
                了解更多功能
              </a>
            </SButton>
          </div>
        </div>
      </SSection>
      <SSection>
        <span className="title">为全球领先企业所信任</span>
        <div className="showcases">
          <div>
            <img
              src="https://static.apiseven.com/2020/05/WechatIMG618.png"
              alt=""
            />
          </div>
          <div>
            <img src="https://static.apiseven.com/2020/05/NASA.png" alt="" />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/%E4%B8%AD%E5%9B%BD%E8%88%AA%E4%BF%A1.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/HelloTalk.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588907633-WechatIMG630.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/%E8%85%BE%E8%AE%AF%E4%BA%91-768x273.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588840167-airwallexreview.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588907762-WechatIMG2916.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588907453-ezgif-3-6c2dbe3cc8cd.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588907670-WechatIMG631.png"
              alt=""
            />
          </div>
        </div>
      </SSection>
      <SBlock2>
        <div>
          <span>想知道 API7 能为您做些什么吗？</span>
          <SButton>
            <a href="https://www.apiseven.com/form-api7-trial" target="_blank">
              免费试用
            </a>
          </SButton>
        </div>
      </SBlock2>
      <FooterLinks />
      <Footer />
    </>
  );
};

export default Home;
