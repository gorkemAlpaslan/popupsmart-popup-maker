import type { NextPage } from "next";
import homeStyle from "../styles/Home.module.scss";

import check from "../public/home_icons/check.png";
import Image from "next/image";

import Header from "../components/Header";
import Camper from "../components/Camper";

import CounterOn from "../components/CounterOn";

import TemplateOne from "../components/Templates/TemplateOne";

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
import { useState } from "react";

const Home: NextPage = () => {
  const [size, SetSize] = useState("medium");

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
          <div className={homeStyle.dataEach}>
            <h1>
              <CounterOn
                number={3}
                content="X"
                message="Increase Conversion Rate"
              />
            </h1>
          </div>
          <div className={homeStyle.dataEach}>
            <h1>
              <CounterOn number={120} content="%" message="Email Subscribers" />
            </h1>
          </div>
          <div className={homeStyle.dataEach}>
            <h1>
              <CounterOn
                number={390}
                content="%"
                message="More Customer Engagement"
              />
            </h1>
          </div>
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
          <div className={homeStyle.StageOne}>
            <div>1</div>
            <h2>Choose your template</h2>
          </div>
          <div className={homeStyle.AllTemplatesWraper}>
            <div className={homeStyle.TemplateEach}>
              <Image src={Template_1} alt="template_1" />
              <div className={homeStyle.SelectTemplate}>
                <div>Select template</div>
              </div>
            </div>
            <div className={homeStyle.TemplateEach}>
              <Image src={Template_2} alt="template_2" />
              <div className={homeStyle.SelectTemplate}>
                <div>Select template</div>
              </div>
            </div>
            <div className={homeStyle.TemplateEach}>
              <Image src={Template_3} alt="template_3" />
              <div className={homeStyle.SelectTemplate}>
                <div>Select template</div>
              </div>
            </div>
            <div className={homeStyle.TemplateEach}>
              <Image src={Template_4} alt="template_4" />
              <div className={homeStyle.SelectTemplate}>
                <div>Select template</div>
              </div>
            </div>
            <div className={homeStyle.TemplateEach}>
              <Image src={Template_5} alt="template_5" />
              <div className={homeStyle.SelectTemplate}>
                <div>Select template</div>
              </div>
            </div>
            <div className={homeStyle.TemplateEach}>
              <Image src={Template_6} alt="template_6" />
              <div className={homeStyle.SelectTemplate}>
                <div>Select template</div>
              </div>
            </div>
            <div className={homeStyle.TemplateEach}>
              <Image src={Template_7} alt="template_7" />
              <div className={homeStyle.SelectTemplate}>
                <div>Select template</div>
              </div>
            </div>
            <div className={homeStyle.TemplateEach}>
              <Image src={Template_8} alt="template_8" />
              <div className={homeStyle.SelectTemplate}>
                <div>Select template</div>
              </div>
            </div>
            <div className={homeStyle.TemplateEach}>
              <Image src={Template_9} alt="template_9" />
              <div className={homeStyle.SelectTemplate}>
                <div>Select template</div>
              </div>
            </div>
            <div className={homeStyle.TemplateEach}>
              <Image src={Template_10} alt="template_10" />
              <div className={homeStyle.SelectTemplate}>
                <div>Select template</div>
              </div>
            </div>
            <div className={homeStyle.TemplateEach}>
              <Image src={Template_11} alt="template_11" />
              <div className={homeStyle.SelectTemplate}>
                <div>Select template</div>
              </div>
            </div>
            <div className={homeStyle.TemplateEach}>
              <Image src={Template_12} alt="template_12" />
              <div className={homeStyle.SelectTemplate}>
                <div>Select template</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={homeStyle.AppearancePage}>
        <div className={homeStyle.AppearancePageEdit}>
          <div className={homeStyle.StageOne}>
            <div>1</div>
            <h2>Appearance (Size, colors, logo)</h2>
          </div>
          <p>Size</p>
          <div className={homeStyle.size}>
            <div
              className={size === "small" ? homeStyle.sizeSelected : ""}
              onClick={() => {
                SetSize("small");
              }}
            >
              <p>Small</p>
            </div>
            <div
              className={size === "medium" ? homeStyle.sizeSelected : ""}
              onClick={() => {
                SetSize("medium");
              }}
            >
              <p>Medium</p>
            </div>
            <div
              className={size === "large" ? homeStyle.sizeSelected : ""}
              onClick={() => {
                SetSize("large");
              }}
            >
              <p>Large</p>
            </div>
          </div>
        </div>
        <div>
          <TemplateOne></TemplateOne>
        </div>
      </div>
    </div>
  );
};

export default Home;
