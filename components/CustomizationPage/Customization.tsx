import { useState } from "react";
import homeStyle from "../../styles/Home.module.scss";
import { useTemplateContext } from "../Context/TemplateContext";
import CustomizationEdit from "./CustomizationEdit";
import CustomizationCurrentTemplate from "./CustomizationCurrentTemplate";

const Customization = () => {
  const { StageTwo } = useTemplateContext();

  return (
    <div>
      <div className={homeStyle.CustomizationPage} ref={StageTwo}>
        <CustomizationEdit></CustomizationEdit>
        <CustomizationCurrentTemplate></CustomizationCurrentTemplate>
      </div>
    </div>
  );
};

export default Customization;
