import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

type Props = {};

const NavComponent: React.FC<Props> = () => {
  const navs = [
    {
      title: "首页",
      href: "/",
    },
    {
      title: "开源项目",
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
          href: "https://www.apiseven.com/apache-apisix-vs-api7/",
        },
      ],
    },
    {
      title: "用户案例",
      href:
        "https://www.apiseven.com/category/%e7%94%a8%e6%88%b7%e6%a1%88%e4%be%8b/",
    },
    {
      title: "商业产品和支持",
      items: [
        {
          title: "商业支持",
          href: "https://www.apiseven.com/support-for-business/",
        },
        {
          title: "API7 试用申请",
          href: "https://www.apiseven.com/form-api7-trial/",
        },
      ],
    },
    {
      title: "诚聘英才",
      href: "https://www.apiseven.com/careers/",
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

export default NavComponent;
