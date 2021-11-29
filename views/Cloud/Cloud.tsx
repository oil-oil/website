import React from "react";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";
import { Button } from "@chakra-ui/button";
import { AiOutlineCloud, AiOutlineFileProtect, AiOutlineDashboard, AiOutlineDropbox, AiOutlinePayCircle } from "react-icons/ai";

import { SWrapper, SHero, SContent, SForm, SContainer } from "./style";
import { withTranslation } from "../../i18n";

type Props = {
  t: TFunction;
};

const Cloud: NextPage<Props, any> = ({ t }) => {
  const iconList = [
    {
      icon: <AiOutlineCloud />,
      desc: 'Cloud vendors netural',
      href: '',
    },
    {
      icon: <AiOutlineFileProtect />,
      desc: 'Privacy Compliance',
      href: '',
    },
    {
      icon: <AiOutlineDashboard />,
      desc: 'Fully managed Control Plane and Observability Plane',
      href: '',
    },
    {
      icon: <AiOutlineDropbox />,
      desc: 'Effortless integration',
      href: '',
    },
    {
      icon: <AiOutlinePayCircle />,
      desc: 'Pay as you go',
      href: '',
    },
  ]

  return (
    <SWrapper>
      <NextSeo title={t(`common:cloud`)} />
      <SHero>
        <SContainer>
          <div className="titleBox">
            <h1>APISEVEN Cloud</h1>
            <p>Powered by Apache APISIX</p>
          </div>
          <div className="descBox">
            <p>Connect your APIs & Microservices in multi-cloud environments</p>
            <div>
              <Button colorScheme="blue">Request Demo</Button>
              <Button colorScheme="blue">Learn more</Button>
            </div>
          </div>
          <ul className="iconBox">
            {iconList.map((item) => (
              <li>
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
            <div>Run your microservices anywhere but manage your API Gateway in one place, integrating your Apache APISIX cluster effortlessly without the concern of how does the Control plane run, APISEVEN Cloud provides poweful observabilty supports and a friendly dashboard to operate and manage the cluster easily.</div>
          </div>
          <div className="features">
            <div className="card">
              <Button colorScheme="blue">Cloud Vendors netural</Button>
              <p>Deploy on cloud, on-premises Environments, no vendor-lock-in</p>
            </div>

            <div className="card">
              <Button textAlign="center" colorScheme="blue">Cloud Vendors netural</Button>
              <p>Deploy on cloud, on-premises Environments, no vendor-lock-in</p>
            </div>

            <div className="card">
              <Button colorScheme="blue">Cloud Vendors netural</Button>
              <p>Deploy on cloud, on-premises Environments, no vendor-lock-in</p>
            </div>

            <div className="card">
              <Button colorScheme="blue">Cloud Vendors netural</Button>
              <p>Deploy on cloud, on-premises Environments, no vendor-lock-in</p>
            </div>

            <div className="card">
              <Button colorScheme="blue">Cloud Vendors netural</Button>
              <p>Deploy on cloud, on-premises Environments, no vendor-lock-in</p>
            </div>

            <div className="card">
              <Button colorScheme="blue">Cloud Vendors netural</Button>
              <p>Deploy on cloud, on-premises Environments, no vendor-lock-in</p>
            </div>
          </div>
        </SContainer>
      </SContent>

      <SForm>
        <SContainer>
          <div className="titleBox">
            <h1>Sign up for early access</h1>
          </div>
          <div className="formBox"></div>
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
