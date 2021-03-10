import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NextPage } from "next";

import { withTranslation } from "../../i18n";
import { TFunction } from "next-i18next";
import { SHover } from "./style";

type Props = {
  t: TFunction;
};

const NavComponent: NextPage<Props, any> = ({ t }) => {
  const [zhLang, setZhLang] = useState("/zh");
  const [enLang, setEnLang] = useState("/en");

  useEffect(() => {
    setEnLang(location.pathname.replace("/zh", "/en"));
    setZhLang(location.pathname.replace("/en", "/zh"));
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
        <SHover>
          <Nav className="mr-auto">
            <Nav.Link href="/">{t("homepage")}</Nav.Link>
            <Nav.Link href="/news">{t("common:news")}</Nav.Link>
            <NavDropdown
              title={t("open-source")}
              id="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="https://github.com/apache/apisix">Apache APISIX</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/apache/apisix-ingress-controller">Apache APISIX Ingress Controller</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={t("commercial-products-and-support")}
              id="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="/form-api7-trial">{t("trial")}</NavDropdown.Item>
              <NavDropdown.Item href="/business-support/">{t("business-support")}</NavDropdown.Item>
              <NavDropdown.Item href="/apisix-vs-api7">Apache APISIX vs API7</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={t("resources")}
              id="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="/blog">{t("blog")}</NavDropdown.Item>
              <NavDropdown.Item href="/usercases">{t("showcases")}</NavDropdown.Item>
              <NavDropdown.Item href="/resources/apisix-devcon-2020">DevCon</NavDropdown.Item>
              <NavDropdown.Item href="/contributor-graph">{t("contributor-graph")}</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/careers">{t("job")}</Nav.Link>
            <NavDropdown
              title={t("text3")}
              id="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href={zhLang}>{t("text1")}</NavDropdown.Item>
              <NavDropdown.Item href={enLang}>{t("text2")}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </SHover>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavComponent.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(NavComponent);
