import React from "react";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";
import { Button } from '@chakra-ui/react';
import { 
  AiOutlineCloud,
  AiOutlineFileProtect,
  AiOutlineDashboard,
  AiOutlineInbox,
  AiOutlinePayCircle,
  AiOutlineApi
} from "react-icons/ai";

import { SWrapper, SHero, SFeaturesBox, SForm, SContainer } from "./style";
import { withTranslation } from "../../i18n";
import CloudForm from "./component/CloudForm";

type Props = {
  t: TFunction;
};

const Cloud: NextPage<Props, any> = ({ t }) => {
  const iconList = [
    {
      icon: <AiOutlineCloud color="#2b73af" />,
      desc: t("cloud-hero-icon-desc1"),
      href: '',
    },
    {
      icon: <AiOutlineFileProtect color="#2b73af" />,
      desc: t("cloud-hero-icon-desc2"),
      href: '',
    },
    {
      icon: <AiOutlineDashboard color="#2b73af" />,
      desc: t("cloud-hero-icon-desc3"),
      href: '',
    },
    {
      icon: <AiOutlineInbox color="#2b73af" />,
      desc: t("cloud-hero-icon-desc4"),
      href: '',
    },
    {
      icon: <AiOutlinePayCircle color="#2b73af" />,
      desc: t("cloud-hero-icon-desc5"),
      href: '',
    },
  ];

  const featuresList = [
    {
      icon: <AiOutlineCloud color="#2b73af" />,
      title: t("cloud-features-card-title1"),
      desc: t("cloud-features-card-desc1"),
      href: '',
    },
    {
      icon: <AiOutlineFileProtect color="#2b73af" />,
      title: t("cloud-features-card-title2"),
      desc: t("cloud-features-card-desc2"),
      href: '',
    },
    {
      icon: <AiOutlinePayCircle color="#2b73af" />,
      title: t("cloud-features-card-title3"),
      desc: t("cloud-features-card-desc3"),
      href: '',
    },
    {
      icon: <AiOutlineDashboard color="#2b73af" />,
      title: t("cloud-features-card-title4"),
      desc: t("cloud-features-card-desc4"),
      href: '',
    },
    {
      icon: <AiOutlineInbox color="#2b73af" />,
      title: t("cloud-features-card-title5"),
      desc: t("cloud-features-card-desc5"),
      href: '',
    },
    {
      icon: <AiOutlineApi color="#2b73af" />,
      title: t("cloud-features-card-title6"),
      desc: t("cloud-features-card-desc6"),
      href: '',
    }
  ];

  return (
    <SWrapper>
      <NextSeo title={t(`common:cloud`)} />
      <div className="background"></div>
      <SHero>
        <SContainer>
          <div className="leftBox">
            <h1>{t("cloud-hero-title")}</h1>
            <span>{t("cloud-hero-desc")}</span>
            <p>{t("cloud-hero-content")}</p>
            <Button as='a' href={'#cloudForm'} width="200px" colorScheme="blue">{t("cloud-hero-button")}</Button>
          </div>
          <ul className="iconBox">
            {iconList.map((item) => (
              <li key={item.desc}>
                <div>
                  {item.icon}
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </SContainer>
      </SHero>

      <SFeaturesBox>
        <SContainer>
          <div className="titleBox">
            <h1>{t("cloud-features-title")}</h1>
            <div>{t("cloud-features-content")}</div>
          </div>
          <div className="features">
            {featuresList.map((feature) => (
                <div className="card" key={feature.title}>
                  {feature.icon}
                  <h3>{feature.title}</h3>
                  <div>
                    <p>{feature.desc}</p>
                    <a href={feature.href}>{t("cloud-features-card-button")}</a>
                  </div>
                </div>
            ))}
          </div>
        </SContainer>
      </SFeaturesBox>

      <SForm>
        <SContainer id="cloudForm">
          <div className="titleBox">
            <h1>{t("cloud-form-title")}</h1>
          </div>
          <div className="formBox">
            <CloudForm t={t}/>
          </div>
        </SContainer>
      </SForm>
    </SWrapper>
  );
};

Cloud.getInitialProps = async () => {
  return {
    namespacesRequired: ["common", "cloud"],
  };
};

export default withTranslation("cloud")(Cloud as any);
