import React from "react";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";
import {
  Button,
  Box,
} from '@chakra-ui/react';
import { AiOutlineCloud, AiOutlineFileProtect, AiOutlineDashboard, AiOutlineInbox, AiOutlinePayCircle, AiOutlineApi } from "react-icons/ai";

import { SWrapper, SHero, SContent, SForm, SContainer } from "./style";
import { withTranslation } from "../../i18n";
import CloudForm from "./component/CloudForm";

type Props = {
  t: TFunction;
};

const Cloud: NextPage<Props, any> = ({ t }) => {
  const iconList = [
    {
      icon: <AiOutlineCloud color="#2b73af" />,
      desc: 'Cloud vendors netural',
      href: '',
    },
    {
      icon: <AiOutlineFileProtect color="#2b73af" />,
      desc: 'Privacy Compliance',
      href: '',
    },
    {
      icon: <AiOutlineDashboard color="#2b73af" />,
      desc: 'Fully managed Control Plane and Observability Plane',
      href: '',
    },
    {
      icon: <AiOutlineInbox color="#2b73af" />,
      desc: 'Effortless integration',
      href: '',
    },
    {
      icon: <AiOutlinePayCircle color="#2b73af" />,
      desc: 'Pay as you go',
      href: '',
    },
  ];

  const featuresList = [
    {
      icon: <AiOutlineCloud color="#2b73af" />,
      title: 'Cloud Vendors netural',
      desc: 'Deploy on cloud, on-premises Environments, no vendor-lock-in.',
      href: '',
    },
    {
      icon: <AiOutlineFileProtect color="#2b73af" />,
      title: 'Privacy Compliance',
      desc: 'Strict data protect mechanism To prevent data leaks.',
      href: '',
    },
    {
      icon: <AiOutlinePayCircle color="#2b73af" />,
      title: 'Pay as you go',
      desc: 'Choose the appropriate Plan on Demands.',
      href: '',
    },
    {
      icon: <AiOutlineDashboard color="#2b73af" />,
      title: 'Visualization',
      desc: 'Keep abreast of the running status of your Apache APISIX cluster.',
      href: '',
    },
    {
      icon: <AiOutlineInbox color="#2b73af" />,
      title: 'Effortless Integration',
      desc: 'Only a few steps to connect.',
      href: '',
    },
    {
      icon: <AiOutlineApi color="#2b73af" />,
      title: 'API Managments',
      desc: 'Easily to configure the Gateway.',
      href: '',
    }
  ];

  return (
    <SWrapper>
      <NextSeo title={t(`common:API7-Cloud`)} />
      <div className="background"></div>
      <SHero>
        <SContainer>
          <div className="leftBox">
            <h1>APISEVEN Cloud</h1>
            <span>Powered by Apache APISIX®</span>
            <p>Connect your APIs & Microservices in multi-cloud environments</p>
            <Button as='a' href={'#cloudForm'} width="200px" colorScheme="blue">Request Demo</Button>
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

      <SContent>
        <SContainer>
          <div className="titleBox">
            <h1>Why APISEVEN Cloud?</h1>
            <div>Run your microservices anywhere but manage your API Gateway in one place, integrating your Apache APISIX cluster effortlessly without the concern of how does the Control plane run.
              APISEVEN Cloud provides powerful observabilty supports and a friendly dashboard to operate and manage the cluster easily.</div>
          </div>
          <div className="features">
            {featuresList.map((feature) => (
                <div className="card" key={feature.title}>
                  {feature.icon}
                  <h3>{feature.title}</h3>
                  <div>
                    <p>{feature.desc}</p>
                    <a href={feature.href}>Learn About</a>
                  </div>
                </div>
            ))}
          </div>
        </SContainer>
      </SContent>

      <SForm>
        <SContainer id="cloudForm">
          <div className="titleBox">
            <h1>Sign up for early access</h1>
          </div>
          <div className="formBox">
            <CloudForm />
          </div>
        </SContainer>
      </SForm>
    </SWrapper>
  );
};

Cloud.getInitialProps = async (context) => {
  const { lng = "zh-CN" } = (context.req as any) || {};

  return {
    namespacesRequired: ["common", "footer"],
  };
};

export default withTranslation("cloud")(Cloud as any);
