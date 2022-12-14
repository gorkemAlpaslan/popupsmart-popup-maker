import { useState } from "react";
import CustomizationStyle from "../../styles/customization-styles/CustomizationStyle.module.scss";
import { useTemplateContext } from "../../Context/TemplateContext";
import CustomizationEdit from "./CustomizationEdit";
import CustomizationCurrentTemplate from "./CustomizationCurrentTemplate";

const Customization = () => {
  const { StageTwo, currentTemplate } = useTemplateContext();

  return (
    <div>
      <div className={CustomizationStyle.CustomizationPage} ref={StageTwo}>
        {currentTemplate ? <CustomizationEdit /> : ""}
        {currentTemplate && (
          <div>
            <CustomizationCurrentTemplate />
          </div>
        )}
      </div>
    </div>
  );
};

export default Customization;
