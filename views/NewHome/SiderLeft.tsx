import React from "react";
import { SiderLeft, Sidertitle, } from "./style";
import { withTranslation } from "../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";
import "./style"

type Props = {
 t: TFunction;
};

const SiderLeftAll: NextPage<Props, any> = ({ t }) => {
 const alist = [
  {
   imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Docs_eaeebb385f_0f9f202b8f.svg",
   name: "Developer Docs"
  },
  {
   imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Guide_09ef691265_c697e5f9a8.svg",
   name: "User Guide"
  },
  {
   imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Academy_1e45bae812_29fd831fdd.svg",
   name: "Strapi Academy"
  },
  {
   imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Blog_c574ff6bf6_317c7fba9b.svg",
   name: "Blog"
  },
  {
   imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Starters_4b89901bbb_273b0aff32.svg",
   name: "Starters"
  },
  {
   imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Tutorials_8b77c0edf7_9a742e9db8.svg",
   name: "Tutorials"
  },
  {
   imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Recipes_b51019258a_2bb0e825c8.svg",
   name: "Video Library"
  },
 ]
 const contentlist = [
  {
   title: "DEVELOPER DOCUMENTATION",
   text: [
    { title: "Getting Started" },
    { title: "Setup & Deployment" },
    { title: "Development" },
    { title: "Update & Migration" },
    { title: "Developer Resources" },
    { title: "Guides" }
   ]
  },
  {
   title: "USER GUIDE",
   text: [
    { title: "Getting Started" },
    { title: "Content Manager" },
    { title: "Content-Type Builder" },
    { title: "Users, Roles & Permissions" },
    { title: "Plugins" },
    { title: "General Settings" }
   ]
  },
  {
   title: "RESOURCES",
   text: [
    { title: "Newsroom" },
    { title: "Support" },
    { title: "Press Kit" },
    { title: "Guide to Headless CMS" }
   ]
  }
 ]
 return (
  <>
   <NextSeo title={t(`common:siderleftall`)} />
   <SiderLeft>
    <div>
     {alist.map((item) => (
      <a>
       <img src={item.imgURL} />
       {item.name}
      </a>
     ))}
    </div>
    <div>
     {contentlist.map((item) => (
      <Sidertitle>
       <h2 style={{ color: "#8c4bff", fontWeight: 600 ,fontSize: 16}}>
        {item.title}
       </h2>
       {item.text.map((it) => (
        <h4 style={{ color: "#5e709d", fontSize: 16 ,fontWeight: 400,marginBottom:0}}>{it.title}</h4>
       ))}
      </Sidertitle>
     ))}
    </div>
    <div>
    </div>
   </SiderLeft>
  </>
 )
}

export default withTranslation("siderleftall")(SiderLeftAll);
