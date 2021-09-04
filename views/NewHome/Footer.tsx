import React, { useState } from "react";
import { SFooter } from "./style";
import { withTranslation } from "../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

type Props = {
 t: TFunction;
};

const Footer: NextPage<Props, any> = ({ t }) => {
 const imglist = [
  { srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Github.grey_e7381d15e3.svg" },
  { srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Discord_Logo_Color_39fc36da33.svg" },
  { srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Twitter.colored_f5bebe2a2e.svg" },
  { srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/LinkedIn.colored_53e452f06f.svg" },
  { srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/instagram.colored_(1)_3164692cf2.svg" }
 ]
 const alist = [
  { name: "© 2021, Strapi" },
  { name: "License" },
  { name: "Terms" },
  { name: "Privacy" }
 ]
 return (
  <>
   <NextSeo title={t(`common:contentlast`)} />
   <SFooter>
    <div style={{
     marginTop: 20,
    }}>
     {alist.map((item) => (
      <a style={{
       marginRight: 30,
       fontSize: 13
      }}>
       {item.name}
      </a>
     ))}
    </div>
    <div style={{
     marginLeft: "auto",
     marginTop: 20,
     display: "flex",
     flexDirection: "row"
    }}>
     <a style={{
      marginRight: 30,
      fontSize: 13
     }}>
      © 2021, Strapi
     </a>
     {imglist.map((item) => (
      <a style={{
       marginRight: 30,
       fontSize: 13
      }}>
       <img style={{ width: 20, height: 20 }} src={item.srcURL} />
      </a>
     ))}
    </div>
   </SFooter>
  </>
 )
}

export default withTranslation("footer")(Footer);
