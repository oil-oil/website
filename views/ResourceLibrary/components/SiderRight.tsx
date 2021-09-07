import React from "react";
import {
  Button, Input, Text,
} from '@chakra-ui/react'
import { withTranslation } from "../../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";

import {
  SContentitem,
  STitle,
  SContentcard,
  SCardstyle,
  SSiderright,
  SResourcesCard,
  SLinkBox,
  SCommunityBox,
  SLearnAbout
} from "../style";

type Props = {
  t: TFunction;
};

const SiderRight: NextPage<Props, any> = ({ t }) => {
  const cardList = [
    {
      scontentcardbg: "#a06aff",
      divbgcolor: "#773ae7",
      imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/book_icon_80d2c538d0_7c87cfcff3.svg",
      h1: "Developer",
      h1br: "Documentation",
      desc: "All you need to get API7 up-and-running.",
      buttontext: "Documentation",
      buttonbg: "#773ae7",
    },
    {
      scontentcardbg: "#ef773c",
      divbgcolor: "#cc5d34",
      imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/user_guide_icon_8cbe401776_121b8a6c83.svg",
      h1: "User",
      h1br: "Guide",
      desc: "All you need to get API7 up-and-running.",
      buttontext: "User Guide",
      buttonbg: "#cc5d34",
    },
    {
      scontentcardbg: "#005abf",
      divbgcolor: "#01489e",
      imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/education_icon_18fb97653f_723577953c.svg",
      h1: "API7",
      h1br: "Academy",
      desc: "All you need to get API7 up-and-running.",
      buttontext: "API7 Academy",
      buttonbg: "#01489e",
    }
  ]
  const cardListSecond = [
    {
      srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/starter_icon_0df41f5df5_1c2d337459.svg",
      text: "Starts",
      divcontent: "Get started in no time"
    },
    {
      srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/tutorial_icon_2f939092a4_8d07fa044a.svg",
      text: "Tutorials",
      divcontent: "Where you’ll learn everything"
    },
    {
      srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/education_color_icon_df7a108290_6a4ece3811.svg",
      text: "Academy",
      divcontent: "Learn how to become a API7 expert."
    },
    {
      srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/recipe_starter_36c43126ce_065f8d503b.svg",
      text: "API7 Recipes",
      divcontent: "Bite-size video tutorials"
    },
    {
      srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/webinar_icon_29af7d8390_3d20ff5c55.svg",
      text: "Webinars",
      divcontent: "Check all our online meetups"
    },
    {
      srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Vector_3_1748490973.svg",
      text: "Blog",
      divcontent: "Discover all the latest about our product and culture."
    }
  ]

  const cardListThree = [
    {
      srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/iconfinder_discord_3069758_1_1_18c962b4c9_b698a303d6.svg",
      text: "Starts",
      divcontent: "Get started in no time"
    },
    {
      srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/forum_14cfcb6fc1_3d87b46985.png",
      text: "Forum",
      divcontent: "Find answers and ask questions to the community"
    },
    {
      srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/github_a0fb0e8472_2f1a9ca3d9.png",
      text: "Github",
      divcontent: "Where it all happens"
    },
    {
      srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/twitter_4117b0ebb6_8167d31c10.png",
      text: "Twitter",
      divcontent: "Stay up to date with the latest news"
    }
  ]

  const cardListFour = [
    {
      scontentcardbg: "#a06aff",
      divbgcolor: "#773ae7",
      imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/book_icon_80d2c538d0_7c87cfcff3.svg",
      h1: "Developer",
      h1br: "Documentation",
      h3: "All you need to get API7 up-and-running.",
      buttontext: "Contribute to the Documentation",
      buttonbg: "#773ae7",
    },
    {
      scontentcardbg: "#1ac277",
      divbgcolor: "#0f8d55",
      imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Subtract_b17455b597_062be5a73e.svg",
      h1: "Developer",
      h1br: "Documentation",
      h3: "All you need to get API7 up-and-running.",
      buttontext: "Contribute to the Codebas",
      buttonbg: "#0f8d55",
    },
  ]
  return (
    <SSiderright>
      <SContentitem>
        <STitle>
          <span>RESOURCE CENTER</span>
          <h2>API7 Resources</h2>
          <p>Everything  you need to optimize the way you work with</p>
        </STitle>
        <SResourcesCard>
          {cardList.map((item) => (
            <SContentcard key={item.h1} style={{ background: (item.scontentcardbg) }}>
              <div className="imgBox" style={{ backgroundColor: (item.divbgcolor) }}>
                <img src={item.imgURL} alt="" />
              </div>
              <h1>{item.h1}<br />{item.h1br}</h1>
              <p>{item.desc}</p>
              <Button marginTop="5" style={{ backgroundColor: (item.buttonbg), fontSize: "15px", color: "white" }}>
                <span>{item.buttontext}</span>
              </Button>
            </SContentcard>
          ))}
        </SResourcesCard>
      </SContentitem>

      <SContentitem>
        <STitle>
          <h2>Learn with API7</h2>
          <p>Explore our library of educational SContent to learn how to set up and manage your API7 project.</p>
        </STitle>
        <SLinkBox>
          {cardListSecond.map((item) => (
            <a href="" key={item.text} className="box">
              <div className="iconBox">
                <div></div>
                <img src={item.srcURL} alt="" />
              </div>
              <div className="content">
                <Text style={{ fontSize: 17, color: "#1d1b84", fontWeight: 700 }}>{item.text}</Text>
                <p>{item.divcontent}</p>
              </div>
            </a>
          ))}
        </SLinkBox>
      </SContentitem>

      <SContentitem>
        <STitle style={{ marginBottom: 40 }}>
          <h2>Changelog</h2>
          <p>Find out about the API7 product updates, new features and general improvements.</p>
          <Button colorScheme="blue" style={{ marginTop: '58px', width: 250, height: 55, color: 'white' }}>See the changelogs</Button>
        </STitle>
        <SCardstyle>
          <div className="timeLineBox">
            <div className="linePoint"></div>
            <div className="timeLine"></div>

            <div className="linePoint"></div>
            <div className="timeLine"></div>

            <div className="linePoint"></div>
            <div className="timeLine"></div>
          </div>
          <div className="timeLineContent">
            <div className="timeContentBox">
              <div>
                <p>Aug 4, 2021</p>
                <span>Improvements and fixes - API7 v3.6.6 & v3.6.7</span>
              </div>
            </div>
            <div className="timeContentBox">
              <div>
                <p>Jun 23, 2021</p>
                <span>3.6.5 Improvements and fixes - API7 v3.6.5</span>
              </div>
            </div>
            <div className="timeContentBox">
              <div>
                <p>Apr 22, 2021</p>
                <span>🌍 Internationalization - API7 v3.6</span>
              </div>
            </div>
          </div>
        </SCardstyle>
      </SContentitem>

      <SContentitem>
        <STitle style={{ marginBottom: 40 }}>
          <h2>Connect with the community</h2>
          <p>Join the conversation with users from all over the world.</p>
        </STitle>
        <SCommunityBox>
          {cardListThree.map((item) => (
            <a key={item.text} href="" className="communityList">
              <div className="background"></div>
              <div className="iconBox">
                <img src={item.srcURL} />
              </div>
              <div className="contentBox">
                <Text style={{ color: "#1d1b84", fontSize: 17, fontWeight: 600, lineHeight: 1.5 }}>{item.text}</Text>
                <p>{item.divcontent}</p>
              </div>
            </a>
          ))}
        </SCommunityBox>

        <SLearnAbout>
          {cardListFour.map((item) => (
            <div className="cardBox" style={{ background: (item.scontentcardbg) }}>
              <div className="title" style={{
                backgroundColor: (item.divbgcolor),
              }}>
                <img src={item.imgURL} alt="" />
              </div>
              <a href="" className="button" style={{ backgroundColor: item.buttonbg }}>
                <div className="background">
                  <span>{item.buttontext}</span>
                </div>
              </a>
            </div>
          ))}
          <div className="cardWrapper">
          <svg width="125" height="97" fill="none" className="iconBox"><path d="M0 36.898L125 .172 34.204 49.901 0 36.898z" fill="#A36FFF"></path><path d="M125 .172L34.205 49.901l14.58 31.069L125 .172z" fill="#8C4BFF"></path><path d="M125 .172l-72.378 56.24 29.096 39.95L125 .172z" fill="#A36FFF"></path><path d="M48.785 80.97l3.837-24.557 8.42 11.555L48.784 80.97z" fill="#7E43E6"></path></svg>
            <div className="box">
              <h1>Join our Newsletter</h1>
              <p>Get all the latest API7 updates, news and events.</p>
              <Input backgroundColor="#FFFFFF" placeholder="Email" variant="outline"></Input>
              <Button colorScheme="blue" color="white" width="320px" top="10px">Subscribe</Button>
              <span>
                By submitting this form you consent to us emailing you occasionally about our products and services. You can unsubscribe from emails at any time, and we will never pass your email to third parties.
              </span>
            </div>
          </div>
        </SLearnAbout>
      </SContentitem>
    </SSiderright>
  )
}

export default withTranslation("siderRight")(SiderRight);