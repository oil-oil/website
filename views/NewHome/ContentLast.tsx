import React from "react";
import { SContent, SiderLeft, SCardstyle, Sidertitle, Siderright } from "./style";
import { withTranslation } from "../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";
import "./style"

type Props = {
 t: TFunction;
};

const ContentLast: NextPage<Props, any> = ({ t }) => {
 const imgURL = "https://strapi.io/assets/strapi-logo-dark.svg";
 const contentlist = [
  {
   title: "PRODUCT",
   text: [
    { title: "Content Architecture" },
    { title: "Features" },
    { title: "Enterprise Edition" },
    { title: "Partner Program" },
    { title: "Roadmap" },
    { title: "Support" },
    { title: "Try live demo" },
    { title: "Changelog" },
   ]
  },
  {
   title: "RESOURCES",
   text: [
    { title: "Meet the community" },
    { title: "Tutorials" },
    { title: "API  documentation" },
    { title: "GitHub repository" },
    { title: "Starters" },
    { title: "The Guide to headless CMS" },
    { title: "Strapi vs Wordpress" },
    { title: "Strapi vs Drupal" },
    { title: "Strapi vs Contentful" }
   ]
  },
  {
   title: "INTEGRATIONS",
   text: [
    { title: "All integrations" },
    { title: "React CMS" },
    { title: "Next.js CMS" },
    { title: "Gatsby CMS" },
    { title: "Vue.js CMS" },
    { title: "Nuxt.js CMS" },
    { title: "Gridsome CMS" },
    { title: "Flutter CMS" },
    { title: "Hugo CMS" }
   ]
  },
  {
   title: "COMPANY",
   text: [
    { title: "About us" },
    { title: "Blog" },
    { title: "Careers" },
    { title: "Contact" },
    { title: "Newsroom" }
   ]
  }
 ]
 return (
  <>
   <NextSeo title={t(`common:contentlast`)} />
   <SContent style={{
    marginTop:100
   }}>
    <SiderLeft style={{
     marginTop: -50,
     width: 220
    }}>
     <div>
      <Sidertitle>
       <h2 style={{ color: "#8c4bff", fontWeight: 600, marginBottom: 15 }}>
        <img src={imgURL} alt="" width="125px" />
       </h2>
       <h4 style={{
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 2
       }}>Strapi is the leading open-source Headless CMS. Strapi gives developers the freedom to use their favorite tools and frameworks while allowing editors to easily manage their content and distribute it anywhere.</h4>
      </Sidertitle>
     </div>
    </SiderLeft>
    <Siderright style={{
     marginLeft: 50
    }}>
     <SCardstyle style={{
      marginTop: -50,
      height: 640,
     }}>
      {contentlist.map((item) => (
       <Sidertitle>
        <h2 style={{ color: "#1d1b84", fontWeight: 600 }}>
         {item.title}
        </h2>
        {item.text.map((it) => (
         <h4 style={{color: "#5e709d",fontSize:12}}>{it.title}</h4>
        ))}
       </Sidertitle>
      ))}
     </SCardstyle>
    </Siderright>
   </SContent>
  </>
 )
}

export default withTranslation("contentlast")(ContentLast);
