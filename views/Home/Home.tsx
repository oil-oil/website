import React from "react";

import Demo from "@/components/Demo";
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import { Title } from "./style";

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Title>欢迎访问 API7</Title>
      <Demo />
      <Footer />
    </>
  );
};

export default Home;
