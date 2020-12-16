import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NextPage } from "next";

import { withTranslation } from "../../i18n";
import { TFunction } from "next-i18next";

type Props = {
  t: TFunction;
};

const NavComponent: NextPage<Props, any> = ({ t }) => {
  const [navs, setNavs] = useState([]);

  useEffect(() => {
    const zhUrl = location.pathname.replace("/en", "/zh");
    const enUrl = location.pathname.replace("/zh", "/en");
    const navs = [
      {
        title: t("homepage"),
        href: "/",
      },
      {
        title: t("common:news"),
        href: "/news",
      },
      {
        title: t("open-source"),
        items: [
          {
            title: "Apache APISIX",
            href: "https://github.com/apache/incubator-apisix",
          },
          {
            title: "k8s ingress controller",
            href: "https://github.com/apache/apisix-ingress-controller",
          },
          {
            title: "Apache APISIX vs API7",
            href: "/apisix-vs-api7",
          },
        ],
      },
      {
        title: t("showcases"),
        href:
          "/usercases",
      },
      {
        title: t("commercial-products-and-support"),
        items: [
          {
            title: t("business-support"),
            href: "/business-support/",
          },
          {
            title: t("trial"),
            href: "/form-api7-trial",
          },
        ],
      },
      {
        title: t("job"),
        href: "/careers",
      },
      {
        title: t("text3"),
        items: [
          {
            title: t("text1"),
            href: zhUrl,
          },
          {
            title: t("text2"),
            href: enUrl,
          },
        ],
      }
    ];
    setNavs(navs);
  }, []);

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="/">
        <img
          src="https://static.apiseven.com/2020/05/Jietu20200312-103300-removebg-preview.png"
          style={{ height: 50 }}
          alt=""
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {navs.map((item) => {
            if (item.items) {
              return (
                <NavDropdown
                  title={item.title}
                  id="basic-nav-dropdown"
                  key={item.title}
                >
                  {item.items.map((subitem) => (
                    <NavDropdown.Item href={subitem.href} key={subitem.title}>
                      {subitem.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              );
            }

            return (
              <Nav.Link href={item.href} key={item.title}>
                {item.title}
              </Nav.Link>
            );
          })}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavComponent.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(NavComponent);
