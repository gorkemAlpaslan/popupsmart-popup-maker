import type { NextPage } from "next";
import homeStyle from "../styles/Home.module.scss";
import Title from "../components/Presentation/Title/Title";
import Info from "../components/Presentation/Info/Info";
import TemplatesPage from "../components/Templates/TemplatesPage";
import Customization from "../components/Customization/Customization";

import BelowInfo from "../components/Presentation/BelowInfo/BelowInfo";
import { useRef, useState } from "react";

import Image from "next/image";
import FreqAskQuestions from "../components/Presentation/freqAskQuestion/FreqAskQuestions";
import EndPage from "../components/Presentation/endPage/EndPage";
import { createRoot } from "react-dom/client";

const Home: NextPage = () => {
  return (
    <div className={homeStyle.card}>
      <Title></Title>
      <Info></Info>
      <TemplatesPage></TemplatesPage>
      <Customization></Customization>
      <BelowInfo></BelowInfo>
      <FreqAskQuestions></FreqAskQuestions>
      <EndPage></EndPage>
    </div>
  );
};

export default Home;
