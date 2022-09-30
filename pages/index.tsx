import type { NextPage } from "next";
import homeStyle from "../styles/Home.module.scss";

import check from "../public/home_icons/check.png";
import Image from "next/image";

import Header from "../components/Header";
import Camper from "../components/Camper";

import CounterOn from "../components/CounterOn";

/////////  Template components  /////////
import {
  Template1,
  Template2,
  Template3,
  Template4,
  Template5,
  Template6,
  Template7,
  Template8,
  Template9,
  Template10,
  Template11,
  Template12,
} from "../components/Templates";

/////////  Template Images  /////////
import {
  Template_1,
  Template_2,
  Template_3,
  Template_4,
  Template_5,
  Template_6,
  Template_7,
  Template_8,
  Template_9,
  Template_10,
  Template_11,
  Template_12,
} from "../public/template/index";

import { useRef, useState } from "react";
import JSXStyle from "styled-jsx/style";

const Home: NextPage = () => {
  //////////////////////////////////////////////////////
  const [size, SetSize] = useState("medium");
  const [position, SetPosition] = useState("center");
  const [color, SetColor] = useState("black");
  const [currentTemplate, SetCurrentTemplate] = useState<JSX.Element | null>(
    null
  );

  const sizes = ["small", "medium", "large"];

  const positions = [
    "top-left",
    "top",
    "top-right",
    "left",
    "center",
    "right",
    "bottom-left",
    "bottom",
    "bottom-right",
  ];

  const colors = ["black", "orange", "grey", "beige", "white"];

  const TemplateList = [
    { component: Template1, image: Template_1, index: "1" },
    { component: Template2, image: Template_2, index: "2" },
    { component: Template3, image: Template_3, index: "3" },
    { component: Template4, image: Template_4, index: "4" },
    { component: Template5, image: Template_5, index: "5" },
    { component: Template6, image: Template_6, index: "6" },
    { component: Template7, image: Template_7, index: "7" },
    { component: Template8, image: Template_8, index: "8" },
    { component: Template9, image: Template_9, index: "9" },
    { component: Template10, image: Template_10, index: "10" },
    { component: Template11, image: Template_11, index: "11" },
    { component: Template12, image: Template_12, index: "12" },
  ];

  const info = [
    {
      number: 3,
      content: "X",
      message: "Increase Conversion Rate",
      index: "0",
    },
    { number: 120, content: "%", message: "Email Subscribers", index: "1" },
    {
      number: 390,
      content: "%",
      message: "More Customer Engagement",
      index: "2",
    },
  ];

  const StageOne = useRef<HTMLHeadingElement>(null);

  //////////////////////////////////////////////////////

  return (
    <div className={homeStyle.card}>
      <div className={homeStyle.wraper}>
        <Header />
        <div className={homeStyle.PageBody}>
          <h2>Simple modal card creator</h2>
          <p className={homeStyle.modalexp}>
            A utility-first CSS framework packed with classeslike flex, pt-4,
            text-center and rotate-90 that can becomposed to build any design,
            directly in your markup.
          </p>
          <button>Try It Now</button>
          <div className={homeStyle.pros}>
            <p>
              <Image src={check} alt="check" />
              Free and paid plans
            </p>
            <p>
              <Image src={check} alt="check" /> Setup in minutes
            </p>
            <p>
              <Image src={check} alt="check" />
              No credit card required
            </p>
          </div>
          <div className={homeStyle.empty}></div>
        </div>
      </div>
      <div className={homeStyle.info}>
        <Camper />
        <div className={homeStyle.data}>
          {info.map((i) => {
            return (
              <div className={homeStyle.dataEach} key={i.index}>
                <h1>
                  <CounterOn
                    number={i.number}
                    content={i.content}
                    message={i.message}
                  />
                </h1>
              </div>
            );
          })}
          <div className={homeStyle.dataEach}>
            <h2>Popupsmart meets all your business needs.</h2>
          </div>
        </div>
      </div>
      <div className={homeStyle.templates}>
        <div className={homeStyle.templatesTitle}>
          <div>
            <h2>Modal Card Generator</h2>
            <p>
              Measure your return on email marketing efforts easier and faster
              by using thebest online tools. Popupsmart is ready to help you
              build an efficient email list!
            </p>
          </div>
          <div className={homeStyle.Stage}>
            <div>1</div>
            <h2>Choose your template</h2>
          </div>
          <div className={homeStyle.AllTemplatesWraper}>
            {TemplateList.map((template) => {
              return (
                <div
                  className={homeStyle.TemplateEach}
                  key={`Template_${template.index}`}
                  onClick={() => {
                    SetCurrentTemplate(template.component);
                    StageOne.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Image
                    src={template.image}
                    alt={`Template_${template.index}`}
                  />
                  <div className={homeStyle.SelectTemplate}>
                    <div>Select Template</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={homeStyle.AppearancePage}>
        <div className={homeStyle.AppearancePageEdit}>
          <div className={homeStyle.Stage} ref={StageOne}>
            <div>2</div>
            <h2>Appearance (Size, colors, logo)</h2>
          </div>
          <div className={homeStyle.CustomizeSizeWraper}>
            <p>Size</p>
            <div className={homeStyle.sizes}>
              {sizes.map((s: string) => {
                return (
                  <div
                    className={size === s ? homeStyle.sizeSelected : ""}
                    key={s}
                    onClick={() => {
                      SetSize(s);
                    }}
                  >
                    <p>{s}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={homeStyle.CustomizePositionWraper}>
            <p>Position</p>
            <div className={homeStyle.Positions}>
              {positions.map((p: string) => {
                return (
                  <div
                    className={
                      position === p
                        ? homeStyle.sizeSelected
                        : homeStyle.positionsEach
                    }
                    key={p}
                    onClick={() => {
                      SetPosition(p);
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className={homeStyle.CustomizeColorsWraper}>
            <p>Colors</p>
            <div className={homeStyle.Colors}>
              {colors.map((c: string) => {
                return (
                  <div
                    style={{
                      backgroundColor: c,
                      width: "42px",
                      height: "42px",
                      marginRight: "10px",
                      borderRadius: "10px",
                    }}
                    className={
                      color === c
                        ? homeStyle.colorSelected
                        : homeStyle.colorsEach
                    }
                    key={c}
                    onClick={() => {
                      SetColor(c);
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={homeStyle.currentTemplateWraper}>{currentTemplate}</div>
      </div>
    </div>
  );
};

export default Home;
