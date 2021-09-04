import React from "react";
import { withTranslation } from "../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import SiderLeftAll from "./components/SiderLeft"
import SiderRightContent from "./components/Siderrightcontent"
import SContentstartAll from "./components/SContentstart"
import { SContentAll, SContent, } from "./style";

type Props = {
  t: TFunction;
};

const NewHome: NextPage<Props, any> = ({ t }) => {
  return (
    <>
      <NextSeo title={t(`common:newhome`)} />
      <SContentAll>
        <SContent>
          <SiderLeftAll />
          <SiderRightContent />
        </SContent>
        <SContentstartAll />
      </SContentAll>
    </>
  )
}

export default withTranslation("newhome")(NewHome as any);
