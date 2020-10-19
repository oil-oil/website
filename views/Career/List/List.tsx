import React from "react";
import { NextPage } from "next";
import Link from "next/link";
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
                  <SCard>
                    <SType>{t("career-card-name")}</SType>
                    <SContainer>
                      <SContent1>
                        <SName>{t("career-card-title1")}</SName>
                        <SDescription>{t("career-card-desc1")}</SDescription>
                      </SContent1>
                      <SContent2>
                        <SName>{t("career-card-title1")}</SName>
                        <SDescription>{t("career-card-desc1")}</SDescription>
                        <Link href="/post/career/technical-support-engineer">
                          <SButton>{t("career-text2")}</SButton>
                        </Link>
                      </SContent2>
                    </SContainer>
                  </SCard>
                  <SCard>
                    <SType>{t("career-card-name")}</SType>
                    <SContainer>
                      <SContent1>
                        <SName>{t("career-card-title2")}</SName>
                        <SDescription>{t("career-card-desc2")}</SDescription>
                      </SContent1>
                      <SContent2>
                        <SName>{t("career-card-title2")}</SName>
                        <SDescription>{t("career-card-desc2")}</SDescription>
                        <Link href="/post/career/senior-nginx-development-engineer">
                          <SButton>{t("career-text2")}</SButton>
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
                    <SType>{t("career-card-name")}</SType>
                    <SContainer>
                      <SContent1>
                        <SName>{t("career-card-title3")}</SName>
                        <SDescription>{t("career-card-desc3")}</SDescription>
                      </SContent1>
                      <SContent2>
                        <SName>{t("career-card-title3")}</SName>
                        <SDescription>{t("career-card-desc3")}</SDescription>
                        <Link href="/post/career/senior-development-engineer">
                          <SButton>{t("career-text2")}</SButton>
                        </Link>
                      </SContent2>
                    </SContainer>
                  </SCard>
                  <SCard>
                    <SType>{t("career-card-name")}</SType>
                    <SContainer>
                      <SContent1>
                        <SName>{t("career-card-title4")}</SName>
                        <SDescription>{t("career-card-desc4")}</SDescription>
                      </SContent1>
                      <SContent2>
                        <SName>{t("career-card-title4")}</SName>
                        <SDescription>{t("career-card-desc4")}</SDescription>
                        <Link href="/post/career/go-engineer">
                          <SButton>{t("career-text2")}</SButton>
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
    </>
  );
};

CareerList.getInitialProps = async () => ({
  namespacesRequired: ["common", "career"],
});

export default withTranslation("career")(CareerList);
