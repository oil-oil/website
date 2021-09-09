import React from "react";
import { Button, Input, Text } from "@chakra-ui/react";
import { withTranslation } from "../../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";

import {
  SContentitem,
  STitle,
  SContentcard,
  SSiderright,
  SResourcesCard,
  SLinkBox,
  SCommunityBox,
  SLearnAbout,
} from "../style";

type Props = {
  t: TFunction;
};

const SiderRight: NextPage<Props, any> = ({ t }) => {
  const cardList = [
    {
      scontentcardbg: "#a06aff",
      divbgcolor: "#773ae7",
      imgURL: "https://static.apiseven.com/202108/book_icon.svg",
      h1: "Developer",
      h1br: "Documentation",
      desc: "All you need to get Apache APISIX up-and-running.",
      buttontext: "Documentation",
      buttonbg: "#773ae7",
      path: "https://apisix.apache.org/docs",
    },
    {
      scontentcardbg: "#ef773c",
      divbgcolor: "#cc5d34",
      imgURL: "https://static.apiseven.com/202108/guide_icon.svg",
      h1: "User",
      h1br: "Guide",
      desc: "Get the most out of the admin panel with our user guide.",
      buttontext: "User Guide",
      buttonbg: "#cc5d34",
      path: "",
    },
    {
      scontentcardbg: "#005abf",
      divbgcolor: "#01489e",
      imgURL: "https://static.apiseven.com/202108/education_icon.svg",
      h1: "Apache APISIX",
      h1br: "Academy",
      desc: "Learn how to become an Apache APISIX expert.",
      buttontext: "Academy",
      buttonbg: "#01489e",
      path: "",
    },
  ];
  const cardListSecond = [
    {
      srcURL: "https://static.apiseven.com/202108/starter_icon.svg",
      text: "Starts",
      divcontent: "Get started in no time",
      path: "",
    },
    {
      srcURL: "https://static.apiseven.com/202108/tutorial_icon.svg",
      text: "Tutorials",
      divcontent: "Where you’ll learn everything",
      path: "",
    },
    {
      srcURL: "https://static.apiseven.com/202108/education_color_icon.svg",
      text: "Academy",
      divcontent: "Learn how to become an Apache APISIX expert.",
      path: "",
    },
    {
      srcURL: "https://static.apiseven.com/202108/recipe_starter.svg",
      text: "Recipes",
      divcontent: "Bite-size video tutorials",
      path: "",
    },
    {
      srcURL: "https://static.apiseven.com/202108/webinar_icon.svg",
      text: "Webinars",
      divcontent: "Check all our online meetups",
      path: "",
    },
    {
      srcURL: "https://static.apiseven.com/202108/vector.svg",
      text: "Blog",
      divcontent: "Discover all the latest about our product and culture.",
      path: "/blog",
    },
  ];

  const cardListThree = [
    {
      srcURL: "https://static.apiseven.com/202108/forum.png",
      text: "Discussions",
      divcontent: "Find answers and ask questions to the community",
      path: "https://github.com/apache/apisix/discussions",
    },
    {
      srcURL: "https://static.apiseven.com/202108/github.png",
      text: "Github",
      divcontent: "Where it all happens",
      path: "https://github.com/apache/apisix",
    },
    {
      srcURL: "https://static.apiseven.com/202108/twitter.png",
      text: "Twitter",
      divcontent: "Stay up to date with the latest news",
      path: "https://twitter.com/apacheapisix",
    },
  ];

  const cardListFour = [
    {
      scontentcardbg: "#a06aff",
      divbgcolor: "#773ae7",
      imgURL: "https://static.apiseven.com/202108/book_icon.svg",
      buttontext: "Contribute to the Documentation",
      buttonbg: "#773ae7",
      path: "https://apisix.apache.org/docs",
    },
    {
      scontentcardbg: "#1ac277",
      divbgcolor: "#0f8d55",
      imgURL: "https://static.apiseven.com/202108/subtract.svg",
      buttontext: "Contribute to the Codebase",
      buttonbg: "#0f8d55",
      path: "https://github.com/apache/apisix/blob/master/CONTRIBUTING.md",
    },
  ];
  return (
    <SSiderright>
      <SContentitem>
        <STitle>
          <span>RESOURCE Center</span>
          <h2>Resources</h2>
          <p>Everything you need to optimize the way you work with Apache APISIX</p>
        </STitle>
        <SResourcesCard>
          {cardList.map((item) => (
            <SContentcard
              key={item.h1}
              style={{ background: item.scontentcardbg }}
            >
              <div
                className="imgBox"
                style={{ backgroundColor: item.divbgcolor }}
              >
                <img src={item.imgURL} alt="" />
              </div>
              <h1>
                {item.h1}
                <br />
                {item.h1br}
              </h1>
              <p>{item.desc}</p>
              <a href={item.path} target="_blank">
                <Button
                  marginTop="5"
                  style={{
                    backgroundColor: item.buttonbg,
                    fontSize: "15px",
                    color: "white",
                  }}
                >
                  <span>{item.buttontext}</span>
                </Button>
              </a>
            </SContentcard>
          ))}
        </SResourcesCard>
      </SContentitem>

      <SContentitem>
        <STitle>
          <h2>Learn with Apache APISIX</h2>
          <p>
            Explore our library of educational contents to learn how to set up
            and manage your Apache APISIX project.
          </p>
        </STitle>
        <SLinkBox>
          {cardListSecond.map((item) => (
            <a href={item.path} key={item.text} className="box">
              <div className="iconBox">
                <div></div>
                <img src={item.srcURL} alt="" />
              </div>
              <div className="content">
                <Text
                  style={{ fontSize: 17, color: "#1d1b84", fontWeight: 700 }}
                >
                  {item.text}
                </Text>
                <p>{item.divcontent}</p>
              </div>
            </a>
          ))}
        </SLinkBox>
      </SContentitem>

      <SContentitem>
        <STitle style={{ marginBottom: 40 }}>
          <h2>Connect with the community</h2>
          <p>Join the conversation with users from all over the world.</p>
        </STitle>
        <SCommunityBox>
          {cardListThree.map((item) => (
            <a
              key={item.text}
              href={item.path}
              target="_blank"
              className="communityList"
            >
              <div className="background"></div>
              <div className="iconBox">
                <img src={item.srcURL} />
              </div>
              <div className="contentBox">
                <Text
                  style={{
                    color: "#1d1b84",
                    fontSize: 17,
                    fontWeight: 600,
                    lineHeight: 1.5,
                  }}
                >
                  {item.text}
                </Text>
                <p>{item.divcontent}</p>
              </div>
            </a>
          ))}
        </SCommunityBox>

        <SLearnAbout>
          {cardListFour.map((item) => (
            <div
              key={item.buttontext}
              className="cardBox"
              style={{ background: item.scontentcardbg }}
            >
              <div
                className="title"
                style={{
                  backgroundColor: item.divbgcolor,
                }}
              >
                <img src={item.imgURL} alt="" />
              </div>
              <a
                href={item.path}
                target="_blank"
                className="button"
                style={{ backgroundColor: item.buttonbg }}
              >
                <div className="background">
                  <span>{item.buttontext}</span>
                </div>
              </a>
            </div>
          ))}
          <div className="cardWrapper">
            <svg width="125" height="97" fill="none" className="iconBox">
              <path
                d="M0 36.898L125 .172 34.204 49.901 0 36.898z"
                fill="#A36FFF"
              ></path>
              <path
                d="M125 .172L34.205 49.901l14.58 31.069L125 .172z"
                fill="#8C4BFF"
              ></path>
              <path
                d="M125 .172l-72.378 56.24 29.096 39.95L125 .172z"
                fill="#A36FFF"
              ></path>
              <path
                d="M48.785 80.97l3.837-24.557 8.42 11.555L48.784 80.97z"
                fill="#7E43E6"
              ></path>
            </svg>
            <div className="box">
              <h1>Join our Newsletter</h1>
              <p>Get all the latest updates, news and events.</p>
              <form
                id="subscribe-form"
                method="post"
                action="https://tinyletter.com/api7"
              >
                <Input
                  backgroundColor="#FFFFFF"
                  placeholder="Email"
                  variant="outline"
                  name="email"
                  type="email"
                />
                <Button
                  colorScheme="blue"
                  color="white"
                  width="100%"
                  top="10px"
                  type="submit"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </SLearnAbout>
      </SContentitem>
    </SSiderright>
  );
};

export default withTranslation("siderRight")(SiderRight);
