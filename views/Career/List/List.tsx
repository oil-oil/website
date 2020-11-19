import React from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { TFunction } from "next-i18next";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FooterLinks from "@/components/FooterLinks";
import { withTranslation } from "../../../i18n";
import {
  SSection1,
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
};

const CareerList: NextPage<Props, any> = ({ t }) => {
  const list = [
    {
      title: t("career-card-title5"),
      description: t("career-card-desc5"),
      href: "/careers/head-of-growth",
      type: t("career-card-name2")
    },
    {
      title: t("career-card-title1"),
      description: t("career-card-desc1"),
      href: "/careers/technical-support-engineer",
      type: t("career-card-name")
    },
    {
      title: t("career-card-title2"),
      description: t("career-card-desc2"),
      href: "/careers/senior-nginx-development-engineer",
      type: t("career-card-name")
    },
    {
      title: t("career-card-title3"),
      description: t("career-card-desc3"),
      href: "/careers/senior-development-engineer",
      type: t("career-card-name")
    },
    {
      title: t("career-card-title4"),
      description: t("career-card-desc4"),
      href: "/careers/go-engineer",
      type: t("career-card-name")
    },
  ];

  return (
    <>
      <NextSeo title={t("common:job")} />
      <div className="wrapper default">
        <Nav />
        <div className="elementor-section-wrap">
          <SSection1>
            <div className="background-overlay"></div>
            <div className="container">
              <div className="row">
                <h2 className="heading-title">
                  {t("career-block1-title")}
                  <br /> {t("career-block1-desc")}
                </h2>
                <div className="button-wrapper">
                  <a href="#courses" className="elementor-button" role="button">
                    {" "}
                    <span className="elementor-button-content-wrapper">
                      {t("career-text1")}
                    </span>
                  </a>
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
          <FooterLinks />
          <Footer />
        </div>
      </div>
    </>
  );
};

CareerList.getInitialProps = async () => ({
  namespacesRequired: ["common", "career"],
});

export default withTranslation("career")(CareerList);
