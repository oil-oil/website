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
      h1: "sider-right-center-title1-list1-h1",
      h1br: "sider-right-center-title1-list1-h1br",
      desc: "sider-right-center-title1-list1-desc",
      buttontext: "sider-right-center-title1-list1-button",
      buttonbg: "#773ae7",
      path: "https://apisix.apache.org/docs",
    },
    {
      scontentcardbg: "#ef773c",
      divbgcolor: "#cc5d34",
      imgURL: "https://static.apiseven.com/202108/guide_icon.svg",
      h1: "sider-right-center-title1-list2-h1",
      h1br: "sider-right-center-title1-list2-h1br",
      desc: "sider-right-center-title1-list2-desc",
      buttontext: "sider-right-center-title1-list2-button",
      buttonbg: "#cc5d34",
      path: "https://apisix.apache.org/docs/apisix/getting-started",
    },
    {
      scontentcardbg: "#005abf",
      divbgcolor: "#01489e",
      imgURL: "https://static.apiseven.com/202108/education_icon.svg",
      h1: "sider-right-center-title1-list3-h1",
      h1br: "sider-right-center-title1-list3-h1br",
      desc: "sider-right-center-title1-list3-desc",
      buttontext: "sider-right-center-title1-list3-button",
      buttonbg: "#01489e",
      path: "",
    },
  ];
  const cardListSecond = [
    {
      srcURL: "https://static.apiseven.com/202108/starter_icon.svg",
      text: "sider-right-center-title2-list1-title",
      divcontent: "sider-right-center-title2-list1-desc",
      path: "https://apisix.apache.org/docs/apisix/getting-started",
    },
    {
      srcURL: "https://static.apiseven.com/202108/tutorial_icon.svg",
      text: "sider-right-center-title2-list2-title",
      divcontent: "sider-right-center-title2-list2-desc",
      path: "https://apisix.apache.org/docs/apisix/how-to-build",
    },
    {
      srcURL: "https://static.apiseven.com/202108/education_color_icon.svg",
      text: "sider-right-center-title2-list3-title",
      divcontent: "sider-right-center-title2-list3-desc",
      path: "",
    },
    {
      srcURL: "https://static.apiseven.com/202108/recipe_starter.svg",
      text: "sider-right-center-title2-list4-title",
      divcontent: "sider-right-center-title2-list4-desc",
      path: "https://space.bilibili.com/551921247",
    },
    {
      srcURL: "https://static.apiseven.com/202108/webinar_icon.svg",
      text: "sider-right-center-title2-list5-title",
      divcontent: "sider-right-center-title2-list5-desc",
      path: "",
    },
    {
      srcURL: "https://static.apiseven.com/202108/vector.svg",
      text: "sider-right-center-title2-list6-title",
      divcontent: "sider-right-center-title2-list6-desc",
      path: "/blog",
    },
  ];

  const cardListThree = [
    {
      srcURL: "https://static.apiseven.com/202108/forum.png",
      text: "sider-right-center-title3-list1-title",
      divcontent: "sider-right-center-title3-list1-desc",
      path: "https://github.com/apache/apisix/discussions",
    },
    {
      srcURL: "https://static.apiseven.com/202108/github.png",
      text: "sider-right-center-title3-list2-title",
      divcontent: "sider-right-center-title3-list2-desc",
      path: "https://github.com/apache/apisix",
    },
    {
      srcURL: "https://static.apiseven.com/202108/twitter.png",
      text: "sider-right-center-title3-list3-title",
      divcontent: "sider-right-center-title3-list3-desc",
      path: "https://twitter.com/apacheapisix",
    },
  ];

  const cardListFour = [
    {
      scontentcardbg: "#a06aff",
      divbgcolor: "#773ae7",
      imgURL: "https://static.apiseven.com/202108/book_icon.svg",
      buttontext: "sider-right-center-title3-button1",
      buttonbg: "#773ae7",
      path: "https://apisix.apache.org/docs",
    },
    {
      scontentcardbg: "#1ac277",
      divbgcolor: "#0f8d55",
      imgURL: "https://static.apiseven.com/202108/subtract.svg",
      buttontext: "sider-right-center-title3-button2",
      buttonbg: "#0f8d55",
      path: "https://github.com/apache/apisix/blob/master/CONTRIBUTING.md",
    },
  ];
  return (
    <SSiderright>
      <SContentitem>
        <STitle>
          <span>{t("resourceLibrary:sider-right-center-title")}</span>
          <h2>{t("resourceLibrary:sider-right-center-title1")}</h2>
          <p>{t("resourceLibrary:sider-right-center-desc1")}</p>
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
              <div className="boxCenter">
                <h1>
                  {t(`resourceLibrary:${item.h1}`)}
                  <br />
                  {t(`resourceLibrary:${item.h1br}`)}
                </h1>
                <p>{t(`resourceLibrary:${item.desc}`)}</p>
              </div>
              <div>
                <div className="buttonBox">
                  <a href={item.path !== "" && item.path} target="_blank">
                    <Button
                      style={{
                        backgroundColor: item.buttonbg,
                        fontSize: "15px",
                        color: !item.path ? "#afa7a7" : "white",
                      }}
                    >
                      <span>{t(`resourceLibrary:${item.buttontext}`)}</span>
                    </Button>
                  </a>
                </div>
              </div>
            </SContentcard>
          ))}
        </SResourcesCard>
      </SContentitem>

      <SContentitem>
        <STitle>
          <h2>{t("resourceLibrary:sider-right-center-title2")}</h2>
          <p>{t("resourceLibrary:sider-right-center-desc2")}</p>
        </STitle>
        <SLinkBox>
          {cardListSecond.map((item) => (
            <a style={{ color: !item.path && '#afa7a7' }} href={item.path !== "" && item.path} target="_blank" key={item.text} className="box">
              <div className="iconBox">
                <div></div>
                <img src={item.srcURL} alt="" />
              </div>
              <div className="content">
                <Text
                  style={{ fontSize: 17, color: "#1d1b84", fontWeight: 700 }}
                >
                  {t(`resourceLibrary:${item.text}`)}
                </Text>
                <p>{t(`resourceLibrary:${item.divcontent}`)}</p>
              </div>
            </a>
          ))}
        </SLinkBox>
      </SContentitem>

      <SContentitem>
        <STitle style={{ marginBottom: 40 }}>
          <h2>{t("resourceLibrary:sider-right-center-title3")}</h2>
          <p>{t("resourceLibrary:sider-right-center-desc3")}</p>
        </STitle>
        <SCommunityBox>
          {cardListThree.map((item) => (
            <a
              key={item.text}
              href={item.path !== "" && item.path}
              target="_blank"
              className="communityList"
              style={{ color: !item.path && '#afa7a7' }}
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
                  {t(`resourceLibrary:${item.text}`)}
                </Text>
                <p>{t(`resourceLibrary:${item.divcontent}`)}</p>
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
                href={item.path !== "" && item.path}
                target="_blank"
                className="button"
                style={{ backgroundColor: item.buttonbg, color: !item.path && '#afa7a7' }}
              >
                <div className="background">
                  <span>{t(`resourceLibrary:${item.buttontext}`)}</span>
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
              <h1>{t("resourceLibrary:sider-right-center-title4")}</h1>
              <p>{t("resourceLibrary:sider-right-center-desc4")}</p>
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
                  {t("resourceLibrary:sider-right-center-button4")}
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
