import CustomizationEditStyle from "./CustomizationEditStyle.module.scss";
import { useTemplateContext } from "../Context/TemplateContext";
import Appearance from "./CustomizationEditSections/Appearance";
import Content from "./CustomizationEditSections/Content";
import TargetingRules from "./CustomizationEditSections/TargetingRules";
import SettingsAndCode from "./CustomizationEditSections/SettingsAndCode";

const CustomizationEdit = () => {
  const {
    convertFile,
    SetContentInputOne,
    SetContentInputTwo,
    SetContentInputThree,
    SetContentInputFour,
    refInputOne,
    refInputTwo,
    refInputThree,
    refInputFour,
    StageThree,
  } = useTemplateContext();

  return (
    <div className={CustomizationEditStyle.CustomizationPageEdit}>
      <Appearance />
      <Content />
      <TargetingRules />
      <SettingsAndCode />
    </div>
  );
};

export default CustomizationEdit;
