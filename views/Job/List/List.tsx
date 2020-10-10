import React from "react";
import { NextPage } from "next";
import Link from 'next/link'

import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import FooterLinks from "@/components/FooterLinks"
import { SSection1, SSection2, SSection3, SCard, SType, SContent1, SContent2, SName, SDescription, SButton, SContainer } from "./style";

type Props = {};

const JobList: NextPage<Props, any> = () => {
  return (
    <div className="wrapper default">
      <Nav />
      <div className="elementor-section-wrap">
        <SSection1>
          <div className="background-overlay"></div>
          <div className="container">
            <div className="row">
              <h2 className="heading-title">恭喜 APACHE APIAX 毕业，<br /> 成为 APACHEHE 软件基金会顶级项目！</h2>
              <div className="button-wrapper">
                <a href="#courses" className="elementor-button" role="button"> <span className="elementor-button-content-wrapper">查看职位（支持远程）</span></a>
              </div>
            </div>
          </div>
        </SSection1>
        <SSection2>
          <div className="widget-wrap">
            <div id="courses" className="menu-anchor"></div>
          </div>
          <SSection3>
            <div className="elementor-container">
              <div className="elementor-row">
                <SCard>
                  <SType>工程师</SType>
                  <SContainer>
                    <SContent1>
                      <SName>技术支持工程师（上海）</SName>
                      <SDescription>
                        为 Apache APISIX、APISEVEN 等 API 网关产品和解决方案，提供售后技术支持工作，解决用户问题，保证系统稳定运行。
                      </SDescription>
                    </SContent1>
                    <SContent2>
                      <SName>技术支持工程师（上海）</SName>
                      <SDescription>
                        为 Apache APISIX、APISEVEN 等 API 网关产品和解决方案，提供售后技术支持工作，解决用户问题，保证系统稳定运行。
                      </SDescription>
                      <Link href="http://www3.apiseven.com/%e6%8a%80%e6%9c%af%e6%94%af%e6%8c%81%e5%b7%a5%e7%a8%8b%e5%b8%88/">
                        <SButton>立即投递</SButton>
                      </Link>
                    </SContent2>
                  </SContainer>
                </SCard>
                <SCard>
                  <SType>工程师</SType>
                  <SContainer>
                    <SContent1>
                      <SName>高级 NGINX 开发工程师</SName>
                      <SDescription>
                        负责针对 Apache APISIX 的 Nginx 底层优化。
                      </SDescription>
                    </SContent1>
                    <SContent2>
                      <SName>高级 NGINX 开发工程师</SName>
                      <SDescription>
                        负责针对 Apache APISIX 的 Nginx 底层优化。
                      </SDescription>
                      <Link href="http://www3.apiseven.com/%e9%ab%98%e7%ba%a7-nginx-%e5%bc%80%e5%8f%91%e5%b7%a5%e7%a8%8b%e5%b8%88/">
                        <SButton>立即投递</SButton>
                      </Link>
                    </SContent2>
                  </SContainer>
                </SCard>
              </div>
            </div>
          </SSection3>
          <SSection3>
            <div className="elementor-container">
              <div className="elementor-row">
                <SCard>
                  <SType>工程师</SType>
                  <SContainer>
                    <SContent1>
                      <SName>高级研发工程师</SName>
                      <SDescription>
                        研发基于 Apache APISIX 的下一代 API 管理和分析平台。
                      </SDescription>
                    </SContent1>
                    <SContent2>
                      <SName>高级研发工程师</SName>
                      <SDescription>
                        研发基于 Apache APISIX 的下一代 API 管理和分析平台。
                      </SDescription>
                      <Link href="http://www3.apiseven.com/%e9%ab%98%e7%ba%a7%e7%a0%94%e5%8f%91%e5%b7%a5%e7%a8%8b%e5%b8%88/">
                        <SButton>立即投递</SButton>
                      </Link>
                    </SContent2>
                  </SContainer>
                </SCard>
                <SCard>
                  <SType>工程师</SType>
                  <SContainer>
                    <SContent1>
                      <SName>GO 开发工程师</SName>
                      <SDescription>
                        负责 Apache APISIX 控制平面的设计和架构。
                      </SDescription>
                    </SContent1>
                    <SContent2>
                      <SName>GO 开发工程师</SName>
                      <SDescription>
                        负责 Apache APISIX 控制平面的设计和架构。
                      </SDescription>
                      <Link href="https://www3.apiseven.com/go-%e5%bc%80%e5%8f%91%e5%b7%a5%e7%a8%8b%e5%b8%88/">
                        <SButton>立即投递</SButton>
                      </Link>
                    </SContent2>
                  </SContainer>
                </SCard>
              </div>
            </div>
          </SSection3>
        </SSection2>
        <FooterLinks />
        <Footer />
      </div>
    </div>
  );
};

JobList.getInitialProps = async () => {
  return {}
};

export default JobList;
