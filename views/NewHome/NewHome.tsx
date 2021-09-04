import React from "react";

import { SContentAll, SContent,  } from "./style";

import { withTranslation } from "../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import SNavbarTop from "./SNavbartop"
import SiderLeftAll from "./SiderLeft"
import SiderRightContent from "./Siderrightcontent"
import SContentstartAll from "./SContentstart"
import ContentLast from "./ContentLast"
import Footer from "./Footer"
type Props = {
 t: TFunction;
 list: Post[];
};

const NewHome: NextPage<Props, any> = ({ t, list = [] }) => {
 return (
  <>
   <NextSeo title={t(`common:newhome`)} />
   <SContentAll>
    <SNavbarTop />
    <SContent style={{
     border: "white"
    }}>
     <SiderLeftAll />
     <SiderRightContent />
    </SContent>
    <SContentstartAll />
    <ContentLast />
    <Footer />
   </SContentAll>
  </>
 )
}

export default withTranslation("newhome")(NewHome as any);
