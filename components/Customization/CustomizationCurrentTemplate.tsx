import React from "react";
import CustomizationCurrentTemplateStyle from "../../styles/customization-styles/CustomizationCurrentTemplateStyle.module.scss";
import { useTemplateContext } from "../../Context/TemplateContext";

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
    <div className={CustomizationCurrentTemplateStyle.currentTemplateSection}>
      {currentTemplate == "TemplateOne" ? (
        <div
          className={CustomizationCurrentTemplateStyle.currentTemplateWraper}
        >
          <TemplateOne></TemplateOne>
        </div>
      ) : null}
      {currentTemplate == "TemplateTwo" ? (
        <div
          className={CustomizationCurrentTemplateStyle.currentTemplateWraper}
        >
          <TemplateTwo></TemplateTwo>
        </div>
      ) : null}
      {currentTemplate == "TemplateThree" ? (
        <div
          className={CustomizationCurrentTemplateStyle.currentTemplateWraper}
        >
          <TemplateThree></TemplateThree>
        </div>
      ) : null}
      {currentTemplate == "TemplateFour" ? (
        <div
          className={CustomizationCurrentTemplateStyle.currentTemplateWraper}
        >
          <TemplateFour></TemplateFour>
        </div>
      ) : null}
      {currentTemplate == "TemplateFive" ? (
        <div
          className={CustomizationCurrentTemplateStyle.currentTemplateWraper}
        >
          <TemplateFive></TemplateFive>
        </div>
      ) : null}
      {currentTemplate == "TemplateSix" ? (
        <div
          className={CustomizationCurrentTemplateStyle.currentTemplateWraper}
        >
          <TemplateSix></TemplateSix>
        </div>
      ) : null}
      {currentTemplate == "TemplateSeven" ? (
        <div
          className={CustomizationCurrentTemplateStyle.currentTemplateWraper}
        >
          <TemplateSeven></TemplateSeven>
        </div>
      ) : null}
      {currentTemplate == "TemplateEight" ? (
        <div
          className={CustomizationCurrentTemplateStyle.currentTemplateWraper}
        >
          <TemplateEight></TemplateEight>
        </div>
      ) : null}
      {currentTemplate == "TemplateNine" ? (
        <div
          className={CustomizationCurrentTemplateStyle.currentTemplateWraper}
        >
          <TemplateNine></TemplateNine>
        </div>
      ) : null}
      {currentTemplate == "TemplateTen" ? (
        <div
          className={CustomizationCurrentTemplateStyle.currentTemplateWraper}
        >
          <TemplateTen></TemplateTen>
        </div>
      ) : null}
      {currentTemplate == "TemplateEleven" ? (
        <div
          className={CustomizationCurrentTemplateStyle.currentTemplateWraper}
        >
          <TemplateEleven></TemplateEleven>
        </div>
      ) : null}
      {currentTemplate == "TemplateTwelve" ? (
        <div
          className={CustomizationCurrentTemplateStyle.currentTemplateWraper}
        >
          <TemplateTwelve></TemplateTwelve>
        </div>
      ) : null}
    </div>
  );
};

export default CustomizationCurrentTemplate;
