import React from "react";
import { NextPage } from "next";
import { TFunction } from "next-i18next";

import { SWrapper } from "./style";
import { withTranslation } from "../../i18n";

type Props = {
  t: TFunction;
};

const FooterLinks: NextPage<Props, any> = ({ t }) => {
  return (
    <SWrapper>
      <div className="section">
        <span className="title">{t("footer-text11")}</span>
        <ul>
          <li>
            <span>{t("footer-text8")}</span>
          </li>
          <li>
            <span>{t("footer-text9")}</span>
          </li>
          <li>
            <span>{t("footer-text10")}</span>
          </li>
        </ul>
      </div>

      <div className="section">
        <span className="title">{t("footer-text12")}</span>
        <ul>
          <li>
            <a href="mailto:wenming@api7.ai">
              <span>{t("footer-text13")}</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="section">
        <span className="title">{t("footer-text14")}</span>
        <ul>
          <li>
            <a href="https://www.apiseven.com/category/%E7%94%A8%E6%88%B7%E6%A1%88%E4%BE%8B/">
              <span>{t("footer-text15")}</span>
            </a>
          </li>
          <li>
            <a>
              <span>{t("footer-text16")}</span>
            </a>
          </li>
          <li>
            <a href="https://space.bilibili.com/551921247">
              <span>{t("footer-text17")}</span>
            </a>
          </li>
          <li>
            <a href="https://apisix.dev/">
              <span>{t("footer-text18")}</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="section">
        <span className="title">{t("footer-text19")}</span>
        <ul>
          <li>
            <span>{t("footer-text21")}</span>
          </li>
          <li>
            <span>{t("footer-text20")}</span>
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

FooterLinks.getInitialProps = async () => ({
  namespacesRequired: ["footer"],
});

export default withTranslation("footer")(FooterLinks);
