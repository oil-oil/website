import React from "react";
import { Button } from '@chakra-ui/react';
import { withTranslation } from "../../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import {
  SContent2,
  SContentstart
} from "../style";

type Props = {
  t: TFunction;
};

const SContentstartAll: NextPage<Props, any> = ({ t }) => {
  const imgURL = "https://strapi.io/_next/static/images/05cae2bf306c44b4a82fda253514822e.svg";
  return (
    <SContent2>
      <img src={imgURL} />
      <SContentstart>
        <h1>Unleash SContent.</h1>
        <div>
          <Button style={{
            marginRight: 15,
            width: 150,
            height: 50,
            backgroundColor: "white",
            color: "#8c4bff",
            border: 2
          }}>
            Starts
          </Button>
          <Button style={{
            marginLeft: 15,
            width: 150,
            height: 50,
            color: "white",
            backgroundColor: "#8c4bff"
          }}>
            get starts
          </Button>
        </div>
      </SContentstart>
    </SContent2>
  )
}

export default withTranslation("scontentstart")(SContentstartAll);
