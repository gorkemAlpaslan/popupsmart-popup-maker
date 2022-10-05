import React from "react";
import CustomizationCurrentTemplateStyle from "./CustomizationCurrentTemplateStyle.module.scss";
import { useTemplateContext } from "../Context/TemplateContext";

const CustomizationCurrentTemplate = () => {
  const {
    currentTemplate,
    TemplateOne,
    TemplateTwo,
    TemplateThree,
    TemplateFour,
    TemplateFive,
    TemplateSix,
    TemplateSeven,
    TemplateEight,
    TemplateNine,
    TemplateTen,
    TemplateEleven,
    TemplateTwelve,
  } = useTemplateContext();

  return (
    <div className={CustomizationCurrentTemplateStyle.currentTemplateWraper}>
      <div className="absolute top-[-25px]">User Window</div>
      {currentTemplate == "TemplateOne" ? <TemplateOne></TemplateOne> : null}
      {currentTemplate == "TemplateTwo" ? <TemplateTwo></TemplateTwo> : null}
      {currentTemplate == "TemplateThree" ? (
        <TemplateThree></TemplateThree>
      ) : null}
      {currentTemplate == "TemplateFour" ? <TemplateFour></TemplateFour> : null}
      {currentTemplate == "TemplateFive" ? <TemplateFive></TemplateFive> : null}
      {currentTemplate == "TemplateSix" ? <TemplateSix></TemplateSix> : null}
      {currentTemplate == "TemplateSeven" ? (
        <TemplateSeven></TemplateSeven>
      ) : null}
      {currentTemplate == "TemplateEight" ? (
        <TemplateEight></TemplateEight>
      ) : null}
      {currentTemplate == "TemplateNine" ? <TemplateNine></TemplateNine> : null}
      {currentTemplate == "TemplateTen" ? <TemplateTen></TemplateTen> : null}
      {currentTemplate == "TemplateEleven" ? (
        <TemplateEleven></TemplateEleven>
      ) : null}
      {currentTemplate == "TemplateTwelve" ? (
        <TemplateTwelve></TemplateTwelve>
      ) : null}
    </div>
  );
};

export default CustomizationCurrentTemplate;
