import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { TFunction } from "next-i18next";

import data from "../../../data/career.json"
import { withTranslation } from "../../../i18n";
import {
  SSection2,
  SSection3,
  SCard,
  SType,
  SContent1,
  SContent2,
  SName,
  SDescription,
  SButton,
  SContainer,
} from "./style";


type Props = {
  t: TFunction;
  list: LinkItem[];
};

const CareerList: NextPage<Props, any> = ({ t, list = [] }) => {
  return (
    <>
      <NextSeo title={t("common:job")} />
      <div className="wrapper default">
        <div className="elementor-section-wrap">
          <SSection2>
            <div className="widget-wrap">
              <div id="courses" className="menu-anchor"></div>
            </div>
            <SSection3>
              <div className="elementor-container">
                <div className="elementor-row">
                  {list.map((item) => (
                    <SCard key={item.href}>
                      <SType>{item.type}</SType>
                      <SContainer>
                        <SContent1>
                          <SName>{item.title}</SName>
                          <SDescription>{item.description}</SDescription>
                        </SContent1>
                        <SContent2>
                          <SName>{item.title}</SName>
                          <SDescription>{item.description}</SDescription>
                          <a href={item.href} target="_blank">
                            <SButton>{t("career-text2")}</SButton>
                          </a>
                        </SContent2>
                      </SContainer>
                    </SCard>
                  ))}
                </div>
              </div>
            </SSection3>
          </SSection2>
        </div>
      </div>
    </>
  );
};

CareerList.getInitialProps = async (context) => {
  const { lng = "zh-CN" } = (context.req as any) || {};

  const posts = data[lng];

  return {
    namespacesRequired: ["common"],
    list: posts,
  }
};
export default withTranslation("career")(CareerList as any);
