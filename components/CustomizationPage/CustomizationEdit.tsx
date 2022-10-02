import { useState } from "react";
import homeStyle from "../../styles/Home.module.scss";
import { useTemplateContext } from "../Context/TemplateContext";
import {
  FormGroup,
  FormControlLabel,
  Switch,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
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
    <div className={homeStyle.CustomizationPageEdit}>
      <Appearance />
      <Content />
      <TargetingRules />
      <SettingsAndCode />
    </div>
  );
};

export default CustomizationEdit;
