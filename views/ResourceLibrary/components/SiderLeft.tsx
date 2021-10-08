import React from "react";
import { withTranslation } from "../../../i18n";
import { NextPage } from "next";
import { TFunction } from "next-i18next";

import { SSiderLeft, SSidertitle, } from "../style";

type Props = {
  t: TFunction;
};

const SiderLeft: NextPage<Props, any> = ({ t }) => {
  const alist = [
    {
      imgURL: "https://static.apiseven.com/202108/book.svg",
      name: "sider-title1",
      path: "https://apisix.apache.org/zh/docs",
    },
    {
      imgURL: "https://static.apiseven.com/202108/guide.svg",
      name: "sider-title2",
      path: "https://apisix.apache.org/docs/dashboard/USER_GUIDE/",
    },
    {
      imgURL: "https://static.apiseven.com/202108/blog.svg",
      name: "sider-title4",
      path: "/blog",
    },
    {
      imgURL: "https://static.apiseven.com/202108/starters.svg",
      name: "sider-title5",
      path: "https://apisix.apache.org/docs/apisix/getting-started",
    },
    {
      imgURL: "https://static.apiseven.com/202108/tutorials.svg",
      name: "sider-title6",
      path: "https://apisix.apache.org/docs/apisix/how-to-build",
    },
    {
      imgURL: "https://static.apiseven.com/202108/recipes.svg",
      name: "sider-title7",
      path: "https://space.bilibili.com/551921247",
    },
  ]
  const contentlist = [
    {
      title: "sider-content-title1",
      text: [
        { title: "sider-content-title1-list1", path: "https://apisix.apache.org/docs/dashboard/develop" },
        { title: "sider-content-title1-list2", path: "https://apisix.apache.org/zh/docs/apisix/install-dependencies" },
        { title: "sider-content-title1-list3", path: "https://apisix.apache.org/zh/docs/apisix/how-to-build" },
        { title: "sider-content-title1-list4", path: "https://apisix.apache.org/zh/docs/apisix/admin-api" },
        { title: "sider-content-title1-list5", path: "https://apisix.apache.org/zh/docs/apisix/control-api" },
      ]
    },
    {
      title: "sider-content-title2",
      text: [
        { title: "sider-content-title2-list1", path: "https://apisix.apache.org/zh/docs/apisix/getting-started/" },
        { title: "sider-content-title2-list2", path: "https://apisix.apache.org/zh/docs/apisix/health-check" },
        { title: "sider-content-title2-list3", path: "https://apisix.apache.org/zh/docs/apisix/plugin-develop" },
        { title: "sider-content-title2-list4", path: "https://apisix.apache.org/zh/docs/apisix/external-plugin" },
        { title: "sider-content-title2-list5", path: "https://apisix.apache.org/zh/docs/apisix/FAQ" },
      ]
    },
    {
      title: "sider-content-title3",
      text: [
        { title: "sider-content-title3-list1", path: "/contributor-graph" },
        { title: "sider-content-title3-list2", path: "mailto:support@api7.ai" },
      ]
    }
  ]
  return (
    <SSiderLeft>
      <div>
        {alist.map((item) => (
          <a style={{ color: !item.path && '#afa7a7' }} key={item.name} target="_blank" href={item.path !== "" && item.path}>
            <img src={item.imgURL} />
            <span>{t(`resourceLibrary:${item.name}`)}</span>
          </a>
        ))}
      </div>
      <div>
        {contentlist.map((item) => (
          <SSidertitle key={item.title}>
            <h2>
              {t(`resourceLibrary:${item.title}`)}
            </h2>
            {item.text.map((it) => (
              <a style={{ color: !it.path && '#afa7a7' }} href={it.path !== "" && it.path} target="_blank" key={it.title}>{t(`resourceLibrary:${it.title}`)}</a>
            ))}
          </SSidertitle>
        ))}
      </div>
    </SSiderLeft>
  )
}

export default withTranslation("siderLeft")(SiderLeft);
