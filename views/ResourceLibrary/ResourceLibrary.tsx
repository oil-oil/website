import React from "react";
import { withTranslation } from "../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import SiderLeftAll from "./components/SiderLeft"
import SiderRightContent from "./components/SiderRight"
import { SContentAll, SContent, } from "./style";

type Props = {
  t: TFunction;
};

const ResourceLibrary: NextPage<Props, any> = ({ t }) => {
  return (
    <>
      <NextSeo title={t(`common:ResourceLibrary`)} />
      <SContentAll>
        <SContent>
          <SiderLeftAll />
          <SiderRightContent />
        </SContent>
      </SContentAll>
    </>
  )
}

export default withTranslation("ResourceLibrary")(ResourceLibrary as any);
