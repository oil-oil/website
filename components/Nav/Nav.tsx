import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NextPage } from "next";

import { withTranslation } from "../../i18n";
import { TFunction } from "next-i18next";

type Props = {
  t: TFunction;
};

const NavComponent: NextPage<Props, any> = ({ t }) => {
  const navs = [
    {
      title: t("homepage"),
      href: "/",
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
          href: "https://github.com/api7/ingress-controller",
        },
        {
          title: "Apache APISIX vs API7",
          href: "https://www.apiseven.com/post/apisix-vs-api7",
        },
      ],
    },
    {
      title: t("showcases"),
      href:
        "http://www3.apiseven.com/category/%e7%94%a8%e6%88%b7%e6%a1%88%e4%be%8b/",
    },
    {
      title: t("commercial-products-and-support"),
      items: [
        {
          title: t("business-support"),
          href: "https://www.apiseven.com/post/business-support/",
        },
        {
          title: t("trial"),
          href: "https://www.apiseven.com/post/form-api7-trial",
        },
      ],
    },
    {
      title: t("job"),
      href: "/career",
    },
  ];

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
