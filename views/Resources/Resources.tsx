import React, { useEffect } from "react";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import { withTranslation } from "../../i18n";
import { SWrapper } from "./style";
import devcon from "../../data/devcon.json";
import ApacheCon from "../../data/acasia2021.json";

type Props = {
  t: TFunction;
  type: "devcon" | "ApacheCon"
  list: Post[];
};

const Resources: NextPage<Props, any> = ({ t, type, list = [] }) => {
  useEffect(() => {
    for (let i = 0; i < list.length; i++) {
      const changeStyle = () => {
        if (show.className === "active") {
          show.removeAttribute("class");
        } else {
          show.setAttribute("class", "active");
        }
      };
      const show = document.getElementById(`role${i}`);
      show.addEventListener("click", changeStyle);
    }
  }, []);

  return (
    <SWrapper>
      <NextSeo title={t(`common:${type}`)} />
      <div>
        <div className="cover">
          <div className="box"><h1>{t(`common:${type}`)}</h1></div>
        </div>
        <section>
          <div className="container">
            <h2>{t('resources:container-title')}</h2>
            <ul>
              {list.map((item, index) => (
                <li key={item.title}>
                  <div className="left">
                    <a className="title" href={item.path} target="blank">{item.title}</a>
                    <p className="speaker">{item.speaker}</p>
                  </div>
                  <div className="right"><a href={item.path} target="blank">{t('resources:view-video')}</a></div>
                  <span id={`role${index}`}>
                    <a className="showButton"></a>
                  </span>
                  <div className="contentBox">
                    <div className="content">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </SWrapper>
  );
};

Resources.getInitialProps = async (context) => {
  const { pathname } = context;
  const path = pathname.slice(1);
  let type = "devcon";

  if (path === "resources/acasia2021") {
    type = "ApacheCon";
  }

  const { lng = "zh-CN" } = (context.req as any) || {};

  const posts = type === "devcon" ? devcon["videos"][lng] : ApacheCon[lng];

  return {
    namespacesRequired: ["common", 'resources'],
    type,
    list: posts,
  };
};

export default withTranslation("resources")(Resources as any);
