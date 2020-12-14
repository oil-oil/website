import React from "react";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FooterLinks from "@/components/FooterLinks";

import { withTranslation } from "../../i18n";
import { SWrapper } from "./style";
import data from "../../data/news.json";

type Props = {
  t: TFunction;
  type: "news";
  list: Post[];
};

const News: NextPage<Props, any> = ({ t, type, list = [] }) => {
  return (
    <SWrapper>
      <NextSeo title={t(`common:${type}`)} />
      <div>
        <Nav />
        <div className="cover">
          <div className="box">
            <h1>新闻报道</h1>
          </div>
        </div>
        <div className="container">
          {list.map((item) => (
            <div className="listItem" key={item.title}>
              <div className="logo">
                <img src={item.logo} />
              </div>
              <div className="textTitle">
                <span>{item.date}</span>
                <a href={`${item.path}`}>
                  <h2>{item.title}</h2>
                </a>
              </div>
            </div>
          ))}
        </div>
        <Footer />
        <FooterLinks />
      </div>
    </SWrapper>
  );
};

News.getInitialProps = async (context) => {
  const { pathname } = context;
  let type = pathname.slice(1);

  if (type === "news") {
    type = "news";
  }

  const { lng = "zh-CN" } = (context.req as any) || {};

  const posts = data[type][lng];

  return {
    namespacesRequired: ["common"],
    type,
    list: posts,
  };
};

export default withTranslation("news")(News as any);
