import type { NextPage } from "next";
import homeStyle from "../styles/Home.module.scss";
import Title from "../components/PresentationPage/Title/Title";
import Info from "../components/PresentationPage/Info/Info";
import TemplatesPage from "../components/TemplatesPage/TemplatesPage";
import Customization from "../components/CustomizationPage/Customization";

import BelowInfo from "../components/PresentationPage/BelowInfo/BelowInfo";
import { useRef, useState } from "react";

import Image from "next/image";
import FreqAskQuestions from "../components/PresentationPage/freqAskQuestion/FreqAskQuestions";
import EndPage from "../components/PresentationPage/endPage/EndPage";

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
