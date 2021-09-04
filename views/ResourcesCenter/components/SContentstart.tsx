import React from "react";
import {
  Button,
} from '@chakra-ui/react'
import { withTranslation } from "../../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import {
  SContent,
  SContentstart
} from "../style";

type Props = {
  t: TFunction;
};

const SContentstartAll: NextPage<Props, any> = ({ t }) => {
  const imgURL = "https://strapi.io/_next/static/images/05cae2bf306c44b4a82fda253514822e.svg";
  return (
    <>
      <NextSeo title={t(`common:scontentstart`)} />
      <SContent style={{
        marginTop: 80
      }}>
        <img src={imgURL} style={{
          position: "absolute", right: 0
        }} />
        <SContentstart>
          <h1 style={{
            fontSize: 40,
          }}>Unleash SContent.</h1>
          <div style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 50
          }}>
            <Button style={{
              marginRight: 15,
              width: 150,
              height: 50,
              backgroundColor: "white",
              color: "#8c4bff",
              border: 2
            }}>Starts</Button>
            <Button style={{
              marginLeft: 15,
              width: 150,
              height: 50,
              color: "white",
              backgroundColor: "#8c4bff"
            }}>get starts</Button>
          </div>
        </SContentstart>
      </SContent>
    </>
  )
}

export default withTranslation("scontentstart")(SContentstartAll);
