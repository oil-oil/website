import React from "react";
import {
  Button, Input, Text,
} from '@chakra-ui/react'
import { withTranslation } from "../../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import {
  SContentitem,
  STitle,
  SContentcard,
  SCardstyle,
  Siderright,
  SContentlist
} from "../style";

type Props = {
  t: TFunction;
};

const SiderRightContent: NextPage<Props, any> = ({ t }) => {
  const titleList = [
    { title: "RESOURCE CENTER" },
    { title: "Strapi Resources" },
    { title: "Everything  you need to optimize the way you work with" },
  ]
  const cardList = [
    {
      scontentcardbg: "#a06aff",
      divbgcolor: "#773ae7",
      imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/book_icon_80d2c538d0_7c87cfcff3.svg",
      h1: "Developer",
      h1br: "Documentation",
      h3: "All you need to get Strapi up-and-running.",
      buttontext: "Documentation",
      buttonbg: "#773ae7",
    },
    {
      scontentcardbg: "#ef773c",
      divbgcolor: "#cc5d34",
      imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/user_guide_icon_8cbe401776_121b8a6c83.svg",
      h1: "Developer",
      h1br: "Documentation",
      h3: "All you need to get Strapi up-and-running.",
      buttontext: "Documentation",
      buttonbg: "#cc5d34",
    },
    {
      scontentcardbg: "#005abf",
      divbgcolor: "#01489e",
      imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/education_icon_18fb97653f_723577953c.svg",
      h1: "Developer",
      h1br: "Documentation",
      h3: "All you need to get Strapi up-and-running.",
      buttontext: "Documentation",
      buttonbg: "#01489e",
    }
  ]
  const titleListSecond = [
    { title: "" },
    { title: "Learn with Strapi" },
    { title: "Explore our library of educational SContent to learn how to set up and manage your Strapi project." }
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
      divcontent: "Learn how to become a Strapi expert."
    }
  ]
  const cardListThird = [
    {
      srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/recipe_starter_36c43126ce_065f8d503b.svg",
      text: "Strapi Recipes",
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
  const titleListThird = [
    { title: "" },
    { title: "Changelog" },
    { title: "Find out about the Strapi product updates, new features and general improvements." }
  ]
  const titleListFour = [
    { title: "" },
    { title: "Connect with the community" },
    { title: "Join the conversation with users from all over the world." }
  ]
  const cardListFour = [
    {
      srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/iconfinder_discord_3069758_1_1_18c962b4c9_b698a303d6.svg",
      text: "Starts",
      divcontent: "Get started in no time"
    },
    {
      srcURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/forum_14cfcb6fc1_3d87b46985.png",
      text: "Forum",
      divcontent: "Find answers and ask questions to the community"
    }
  ]
  const cardListFive = [
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
  const cardListSix = [
    {
      scontentcardbg: "#a06aff",
      divbgcolor: "#773ae7",
      imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/book_icon_80d2c538d0_7c87cfcff3.svg",
      h1: "Developer",
      h1br: "Documentation",
      h3: "All you need to get Strapi up-and-running.",
      buttontext: "Documentation",
      buttonbg: "#773ae7",
    },
    {
      scontentcardbg: "#1ac277",
      divbgcolor: "#0f8d55",
      imgURL: "https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Subtract_b17455b597_062be5a73e.svg",
      h1: "Developer",
      h1br: "Documentation",
      h3: "All you need to get Strapi up-and-running.",
      buttontext: "Contribute to the Codebas",
      buttonbg: "#0f8d55",
    },
  ]
  return (
    <>
      <NextSeo title={t(`common:contentlast`)} />
      <Siderright style={{ display: 'flex', flexDirection: 'column' }}>
        <SContentitem>
          <STitle>
            {titleList.map((item) => (
              <div>{item.title}</div>
            ))}
          </STitle>
          <SCardstyle>
            {cardList.map((item) => (
              <SContentcard style={{ background: (item.scontentcardbg) }}>
                <div style={{
                  borderRadius: 40,
                  width: 80,
                  height: 80,
                  backgroundColor: (item.divbgcolor),
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',

                }}>
                  <img src={item.imgURL} alt="" style={{ width: 35, height: 35, }} />
                </div>
                <h1 style={{ color: "white", fontWeight: 700, fontSize: 20, marginTop: 15 }}>{item.h1}<br />
                  {item.h1br}
                </h1>
                <h3 style={{ fontSize: 16, marginTop: 15, marginBottom: 15 }}>{item.h3}</h3>
                <Button style={{ backgroundColor: (item.buttonbg), color: "white", marginTop: 30, height: 50 }}>{item.buttontext}</Button>
              </SContentcard>
            ))}
          </SCardstyle>
        </SContentitem>
        <SContentitem style={{ marginTop: 70 }}>
          <STitle>
            {titleListSecond.map((item) => (
              <div>{item.title}</div>
            ))}
          </STitle>

          <SCardstyle style={{ display: "flex", flexDirection: 'row', }}>
            {cardListSecond.map((item) => (
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 72,
                    height: 72,
                    position: 'relative',
                    backgroundColor: '#f6fafe',
                    borderRadius: 5
                  }}
                ><img style={{ position: 'absolute', left: 20 }}
                  src={item.srcURL} alt="" />
                  <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", width: 300 }}>
                    <Text style={{ color: "#1d1b84", fontWeight: 700 }}>{item.text}</Text>
                    <div style={{
                      width: 165, fontSize: 14,
                      fontWeight: 400, color: "#1d1b84",
                    }}>{item.divcontent}</div>
                  </div>
                </div>
              </div>
            ))}
          </SCardstyle>
          <SCardstyle style={{ display: "flex", flexDirection: 'row', marginTop: 30 }}>
            {cardListThird.map((item) => (
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 72,
                    height: 72,
                    position: 'relative',
                    backgroundColor: '#f6fafe',
                    borderRadius: 5
                  }}
                ><img style={{ position: 'absolute', left: 20 }}
                  src={item.srcURL} alt="" />
                  <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", width: 300 }}>
                    <Text style={{ color: "#1d1b84", fontWeight: 700 }}>{item.text}</Text>
                    <div style={{
                      width: 165, fontSize: 14,
                      fontWeight: 400, color: "#1d1b84",
                    }}>{item.divcontent}</div>
                  </div>
                </div>
              </div>
            ))}
          </SCardstyle>
        </SContentitem>
        <SContentitem>
          <STitle style={{ marginBottom: 40 }}>
            {titleListThird.map((item) => (
              <div>{item.title}</div>
            ))}
          </STitle>
          <SCardstyle>
            <Button style={{ backgroundColor: '#8c4bff', width: 250, height: 55, color: 'white' }}>See the changelogs</Button>
          </SCardstyle>
          <SCardstyle style={{
            marginTop: 50,
            marginBottom: 40
          }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 15

            }}>
              <div style={{
                backgroundColor: "#c8cee1",
                width: 10,
                height: 10,
                borderRadius: 5,
                marginLeft: 50,
              }}></div>
              <div style={{
                backgroundColor: "#c8cee1",
                width: 2,
                height: 65,
                marginLeft: 54,
                marginTop: 6,
                marginBottom: 3
              }}>

              </div>
              <div style={{
                backgroundColor: "#c8cee1",
                width: 10,
                height: 10,
                borderRadius: 5,
                marginLeft: 50,
              }}></div>
              <div style={{
                backgroundColor: "#c8cee1",
                width: 2,
                height: 65,
                marginLeft: 54,
                marginTop: 6,
                marginBottom: 3
              }}>
              </div>
              <div style={{
                backgroundColor: "#c8cee1",
                width: 10,
                height: 10,
                borderRadius: 5,
                marginLeft: 50,
              }}></div>
              <div style={{
                backgroundColor: "#c8cee1",
                width: 2,
                height: 45,
                marginLeft: 54,
                marginTop: 6,
                marginBottom: 3
              }}>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "absolute"
              }}>
              <div style={{
                height: 90, width: 700, marginLeft: 100
              }}>
                Aug 4, 2021<br />
                Improvements and fixes - Strapi v3.6.6 & v3.6.7
              </div>
              <div style={{
                height: 90, width: 700, marginLeft: 100

              }}>
                Jun 23, 2021<br />
                3.6.5
                Improvements and fixes - Strapi v3.6.5
              </div>
              <div style={{
                height: 90, width: 700, marginLeft: 100
              }}>
                Apr 22, 2021<br />
                🌍 Internationalization - Strapi v3.6
              </div>
            </div>

          </SCardstyle>
        </SContentitem>
        <SContentitem>
          <STitle style={{ marginBottom: 40 }}>
            {titleListFour.map((item) => (
              <div>{item.title}</div>
            ))}
          </STitle>
          <SCardstyle style={{ display: "flex", flexDirection: 'row', }}>
            {cardListFour.map((item) => (
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 420,
                    height: 80,
                    position: 'relative',
                    backgroundColor: '#f6fafe',
                    borderRadius: 15,
                    marginRight: 10,
                  }}
                >
                  <img style={{ position: 'absolute', left: 20 }}
                    src={item.srcURL} />
                  <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", }}>
                    <Text style={{
                      color: "#1d1b84", fontSize: 23,
                      fontWeight: 500
                    }}>{item.text}</Text>
                    <div style={{
                      color: "#1d1b84", fontSize: 17,
                      fontWeight: 400
                    }}>{item.divcontent}</div>
                  </div>
                </div>
              </div>
            ))}
          </SCardstyle>
          <SCardstyle style={{ display: "flex", flexDirection: 'row', }}>
            {cardListFive.map((item) => (
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 420,
                    height: 80,
                    position: 'relative',
                    backgroundColor: '#f6fafe',
                    borderRadius: 15,
                    marginRight: 10,
                  }}
                >
                  <img style={{ position: 'absolute', left: 20 }}
                    src={item.srcURL} alt="" />
                  <div style={{ position: 'absolute', left: 90, display: "flex", flexDirection: "column", }}>
                    <Text style={{
                      color: "#1d1b84", fontSize: 23,
                      fontWeight: 600
                    }}>{item.text}</Text>
                    <div style={{
                      color: "#1d1b84", fontSize: 17,
                      fontWeight: 400
                    }}>{item.divcontent}</div>
                  </div>
                </div>
              </div>
            ))} </SCardstyle>
          <SCardstyle>
            {cardListSix.map((item) => (
              <SContentcard style={{ background: (item.scontentcardbg), }}>
                <div style={{
                  borderRadius: 40,
                  width: 80,
                  height: 80,
                  backgroundColor: (item.divbgcolor),
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 140
                }}>
                  <img src={item.imgURL} alt="" style={{ width: 35, height: 35, }} />
                </div>
                <Button style={{ backgroundColor: (item.buttonbg), color: "white", marginTop: 30, height: 50 }}>{item.buttontext}</Button>
              </SContentcard>
            ))}
          </SCardstyle>
        </SContentitem>
        <SContentitem style={{ textAlign: "center", marginTop: 50 }}>
          <SContentlist>
            <div style={{
              width: 320,
              position: "relative",
              marginLeft: 270,
            }}>
              <h1 style={{ marginTop: 60, fontWeight: 600, fontSize: 25 }}>Join our Newsletter</h1>
              <h3 style={{ marginTop: 10, marginBottom: 20, fontWeight: 400, fontSize: 16 }}>Get all the latest Strapi updates, news and events.</h3>
              <Input pleaseholder="Email" variant="outline" style={{ marginTop: 40, height: 40, width: 90, position: "relative" }}></Input>
              <Button backgroundColor="#8c4bff" color="white" width="320px" top="10px">Subscribe</Button>
              <h3 style={{ marginTop: 20, width: 320, marginBottom: 50, fontSize: 13 }}>
                By submitting this form you consent to us emailing you occasionally about our products and services. You can unsubscribe from emails at any time, and we will never pass your email to third parties.
              </h3>
            </div>
          </SContentlist>
        </SContentitem>
      </Siderright>
    </>
  )
}

export default withTranslation("siderrightcontent")(SiderRightContent);