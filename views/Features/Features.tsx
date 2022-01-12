import React, { useEffect, useState } from "react";
import { NextPage } from 'next';
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import { withTranslation } from "../../i18n";
import { SWrapper, SSection, SMenu, SShowBox } from "./style";
import features from "../../data/products/api7/features.json";

type Props = {
  t: TFunction;
  list: Section[];
};

const Features: NextPage<Props, any> = ({ t, list = [] }) => {
  const [currentHeight, setCurrentHeight] = useState(0);
  const [menuHeight, setMenuHeight] = useState(26);
  const [navHeight, setNavHeight] = useState(72);
  let arr = [];
  if (typeof window !== 'undefined') {
    const sectionBoxArr = document.querySelectorAll('.sectionBox');
    for (let i = 0; i < sectionBoxArr.length; i++) {
      arr[i] = sectionBoxArr[i].clientHeight;
    }
  };

  useEffect(() => {
    window.onload = () => {
      setMenuHeight(document.getElementsByClassName("height")[0].clientHeight);
      setNavHeight(document.getElementsByClassName("css-o7dev2")[0].clientHeight);
    }
    window.addEventListener("resize", function () {
      setMenuHeight(document.getElementsByClassName("height")[0].clientHeight);
      setNavHeight(document.getElementsByClassName("css-o7dev2")[0].clientHeight);
    });
    window.addEventListener("scroll", () => {
      setCurrentHeight(document.documentElement.scrollTop);
    });
    autoMenuSelected();
  }, [currentHeight]);

  const autoMenuSelected = () => {
    if (currentHeight < (arr[0] + 300)) {
      onSelected(0);
    }
    if (currentHeight < (arr[0] + arr[1] + 300) && currentHeight >= (arr[0] + 300)) {
      onSelected(1);
    }
    if (currentHeight >= (arr[0] + arr[1] + 300) && currentHeight < (arr[0] + arr[1] + arr[2] + 300)) {
      onSelected(2);
    }
    if (currentHeight >= (arr[0] + arr[1] + arr[2] + 300) && currentHeight < (arr[0] + arr[1] + arr[2] + arr[3] + 300)) {
      onSelected(3);
    }
    if (currentHeight >= (arr[0] + arr[1] + arr[2] + arr[3] + 300)) {
      onSelected(4);
    }
  };

  const onSelected = (e: number) => {
    const selected = document.querySelector('.selected');
    const target = document.getElementById(`unActive_${e}`);
    if (selected) {
      selected.classList.remove('selected');
    }
    target.classList.add('selected');
  }

  return (
    <SWrapper>
      <NextSeo title={t(`common:features`)} />
      <SSection>
        <div className="background"></div>
        <div className="titleBox">
          <h1>{t(`features:title`)}</h1>
          <p>{t(`features:desc`)}</p>
        </div>
        <SMenu className='height' style={{ 'top': 300 + navHeight - menuHeight }}>
          <ul className={currentHeight > 320 && "newmenu"}>
            {list.map((item, index) => {
              return (
                <li id={`unActive_${index}`} key={index} ><a href={`#${item.title}`} onClick={() => { onSelected(index) }}>{item.title}</a></li>
              )
            })}
          </ul>
        </SMenu>
      </SSection>
      <SShowBox>
        {list.map((item) => (
          <div className="sectionBox" key={item.title}>
            <h2 id={item.title}>{item.title}</h2>
            <div className="itemBox">
              {(item.list).map((item) => (
                <div className="itemBoxList" key={item.title}>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.list.map((item) => (
                      <li key={item.title}>
                        {item.href !== "" && <a href={item.href}>{item.title}</a>}
                        {item.href === "" && <span>{item.title}</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </SShowBox>
      <div id="footer"></div>
    </SWrapper>
  );
};

Features.getInitialProps = async (context) => {
  const { lng = "zh-CN" } = (context.req as any) || {};
  const posts = features[lng];

  return {
    namespacesRequired: ["common","features"],
    list: posts,
  };
};

export default withTranslation("features")(Features as any);
