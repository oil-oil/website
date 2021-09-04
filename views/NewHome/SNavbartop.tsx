import React, { useState } from "react";
import { withTranslation } from "../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'
import {
 Button,
 InputGroup,
 Input,
 Stack,
 InputLeftElement,
} from '@chakra-ui/react'
import {
 SNavbar,
 SNavbarsearch,
 SelectMenu,
 SNavbarcenter,
 SNavbarimg,
 SNavbarbutton,
 SNavbarstart,
} from "./style";

type Props = {
 t: TFunction;
};

const SNavbarTop: NextPage<Props, any> = ({ t }) => {
 const navbarimgURL = "https://strapi.io/assets/strapi-logo-dark.svg"
 return (
  <>
   <NextSeo title={t("common:job")} />
   <SNavbar>
    <SNavbarimg>
     <img src={navbarimgURL} ></img>
    </SNavbarimg>
    <SNavbarcenter >
     <SelectMenu ><a>why api7</a><ChevronDownIcon />
     </SelectMenu>
     <SelectMenu ><a>solution</a><ChevronDownIcon /></SelectMenu>
     <SelectMenu ><a>open-source</a><ChevronDownIcon /></SelectMenu>
     <SelectMenu style={{ marginLeft: -5 }}><a>docs-resource</a><ChevronDownIcon /></SelectMenu>
     <SelectMenu style={{ marginLeft: 25 }}><a>Pricing</a></SelectMenu>
    </SNavbarcenter>
    <SNavbarbutton>
     <Button style={{ position: 'relative', marginLeft: 30, display: "flex", flexDirection: "row", backgroundColor: "#efefef", height: 20, borderRadius: 2, marginTop: 30, width: 50 }}><img style={{ width: 13, height: 13, opacity: 1, visibility: "inherit", color: "grey" }} src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Github.grey_e7381d15e3.svg" alt="" />start</Button>
     <button style={{ position: 'relative', marginLeft: 10 }}>39,233</button>
    </SNavbarbutton>
    <SNavbarstart><Button width={150} style={{ backgroundColor: '#8c4bff', border: 'none', color: 'white' }} >get started</Button></SNavbarstart>
   </SNavbar>
   <SNavbarsearch>
    <div style={{ color: '#1d1b84' }}>
     Resource Center
    </div>
    <div>
     <Stack spacing={12} style={{ width: 1000, position: "relative", marginTop: -35 }} >
      <InputGroup style={{ position: 'absolute', width: 850, marginLeft: 270 }}>
       <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="#32324d" style={{ position: "relative", marginLeft: 5, marginTop: 5, marginRight: 10 }} />}
       />
       <Input type="tel" placeholder="Search for a resource" style={{ position: 'relative', marginLeft: -90 }} size="lg" />
      </InputGroup>
     </Stack>
    </div>
   </SNavbarsearch>
  </>
 )
}

export default withTranslation("snavbartop")(SNavbarTop);

