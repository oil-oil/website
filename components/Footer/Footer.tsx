import React from "react";

import { SWrapper, SContainer, STextWrapper, SIconList, SIcon } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faGithub,
  faWeixin,
} from "@fortawesome/free-brands-svg-icons";

const Footer: React.FC = () => {
  const icons = [
    {
      title: "Twitter",
      icon: faTwitter,
      href: "https://twitter.com/ApacheAPISIX",
      color: "#00b3ff",
    },
    {
      title: "YouTube",
      icon: faYoutube,
      href: "https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g",
      color: "#f40404",
    },
    {
      title: "WeChat",
      icon: faWeixin,
      href: "https://mp.weixin.qq.com/s/c51apneVj0O9yxiZAHF34Q",
      color: "#23a455",
    },
    {
      title: "GitHub",
      icon: faGithub,
      href: "https://github.com/apache/apisix",
      color: "#000000",
    },
  ];
  return (
    <SWrapper>
      <SContainer>
        <STextWrapper>
          <div>
            版权所有 © 2020 深圳支流科技有限公司 保留一切权利。
            粤ICP备19060840号-1
          </div>
          <div>
            Apache, Apache APISIX 和相关的开源项目名称都是
            <a href="http://www.apache.org/" target="_blank">
              Apache 软件基金会
            </a>
            的授权商标，{" "}
            <a
              href="http://www.apache.org/index.html#projects-list"
              target="_blank"
            >
              点击此处
            </a>
            获取完整的 Apache 授权商标列表。
          </div>
        </STextWrapper>

        <SIconList>
          {icons.map((item) => (
            <SIcon key={item.title} href={item.href} target="_blank">
              <FontAwesomeIcon icon={item.icon} color={item.color} size="lg" />
            </SIcon>
          ))}
        </SIconList>
      </SContainer>
    </SWrapper>
  );
};

export default Footer;
