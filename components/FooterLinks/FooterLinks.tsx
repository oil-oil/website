import React from "react";

import { SWrapper } from "./style";

const FooterLinks: React.FC = () => {
  return (
    <SWrapper>
      <div className="section">
        <span className="title">产品</span>
        <ul>
          <li>
            <span>API 网关</span>
          </li>
          <li>
            <span>k8s ingress controller</span>
          </li>
          <li>
            <span>服务网格</span>
          </li>
        </ul>
      </div>

      <div className="section">
        <span className="title">合作伙伴</span>
        <ul>
          <li>
            <a href="mailto:wenming@api7.ai">
              <span>申请成为合作伙伴</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="section">
        <span className="title">资源</span>
        <ul>
          <li>
            <a href="https://www.apiseven.com/category/%E7%94%A8%E6%88%B7%E6%A1%88%E4%BE%8B/">
              <span>案例</span>
            </a>
          </li>
          <li>
            <a>
              <span>博客</span>
            </a>
          </li>
          <li>
            <a href="https://space.bilibili.com/551921247">
              <span>视频</span>
            </a>
          </li>
          <li>
            <a href="https://apisix.dev/">
              <span>论坛</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="section">
        <span className="title">联系我们</span>
        <ul>
          <li>
            <span>深圳支流科技有限公司</span>
          </li>
          <li>
            <span>深圳软件产业基地</span>
          </li>
          <li>
            <a href="mailto:wenming@api7.ai">
              <span>wenming@api7.ai</span>
            </a>
          </li>
        </ul>
      </div>
    </SWrapper>
  );
};

export default FooterLinks;
