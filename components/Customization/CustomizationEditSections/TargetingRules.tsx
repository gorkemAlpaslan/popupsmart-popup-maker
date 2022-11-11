import { useState } from "react";
import TargetingRulesStyle from "../../../styles/customization-styles/CustomizationEditSections/TargetingRulesStyle.module.scss";
import ComputerSelected from "../../../public/TargetingRulesIcons/computerselectedicon.png";
import Computerunselected from "../../../public/TargetingRulesIcons/computerunselectedicon.png";
import MobileSelected from "../../../public/TargetingRulesIcons/mobileselectedicon.png";
import Mobileunselected from "../../../public/TargetingRulesIcons/mobileunselectedicon.png";
import Image from "next/image";

import {
  FormGroup,
  FormControlLabel,
  Switch,
  TextField,
  FormControl,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  SelectChangeEvent,
} from "@mui/material";
import { useTemplateContext } from "../../../Context/TemplateContext";

const TargetingRules = () => {
  const {
    StageFour,
    VisitorDeviceHandleChange,
    visitorDevice,
    afterPScrollHandleChange,
    afterSecScrollHandleChange,
    visitorDeviceisChecked,
    SetVisitorDeviceisChecked,
    afterPScrollIsChecked,
    SetAfterPScroll,
    SetAfterPScrollIsChecked,
    afterSecScrollIsChecked,
    SetAfterSecScrollIsChecked,
    soruceDomainIsChecked,
    SetSoruceDomainIsChecked,
    browserLanguageIsChecked,
    SetBrowserLanguageIsChecked,
    exitIntentTargetingIsChecked,
    SetExitIntentTargetingIsChecked,
  } = useTemplateContext();

  ////////////////////////////////////

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const Languages = [
    "Afrikaans",
    "Albanian",
    "Arabic",
    "Basque",
    "Bulgarian",
    "Byelorussian",
    "Catalan",
    "Croatian",
    "Czech",
    "Danish",
    "Dutch",
    "English",
    "Esperanto",
    "Estonian",
    "Faroese",
    "Finnish",
    "French",
    "Galician",
    "German",
    "Greek",
    "Hebrew",
    "Hungarian",
    "Icelandic",
    "Inuit languages",
    "Irish",
    "Italian",
    "Japanese",
    "Korean",
    "Lapp",
    "Latvian",
    "Lithuanian",
    "Macedonian",
    "Maltese",
    "Norwegian",
    "Polish",
    "Portuguese",
    "Romanian",
    "Russian",
    "Scottish",
    "Serbian",
    "Serbian latin",
    "Slovak",
    "Slovenian",
    "Spanish",
    "Swedish",
    "Turkish",
    "Ukrainian",
  ];

  const [language, setLanguage] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof language>) => {
    const {
      target: { value },
    } = event;

    setLanguage(typeof value === "string" ? value.split(",") : value);
  };

  ////////////////////////////////////

  return (
    <div className={TargetingRulesStyle.TargetingPageEdit}>
      <div className={TargetingRulesStyle.Stage} ref={StageFour}>
        <div>4</div>
        <h2>Targeting Rules</h2>
      </div>
      <FormGroup className="mb-6">
        <div className={TargetingRulesStyle.formElement}>
          <h4>Visitor Device</h4>
          <Switch
            checked={visitorDeviceisChecked}
            onChange={() => {
              SetVisitorDeviceisChecked(!visitorDeviceisChecked);
            }}
            color="secondary"
          />
        </div>
        <FormControl disabled={visitorDeviceisChecked === false}>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            className={TargetingRulesStyle.formControl}
            onChange={VisitorDeviceHandleChange}
          >
            <FormControlLabel
              value="Desktop"
              control={<Radio />}
              label={
                <div className={TargetingRulesStyle.formLabel}>
                  {visitorDevice === "Desktop" &&
                  visitorDeviceisChecked === true ? (
                    <Image src={ComputerSelected} alt="computerSelected" />
                  ) : (
                    <Image src={Computerunselected} alt="computerunselected" />
                  )}

                  <span> Desktop</span>
                </div>
              }
              className={TargetingRulesStyle.formControllabel}
            />
            <FormControlLabel
              value="Mobile"
              control={<Radio />}
              label={
                <div className={TargetingRulesStyle.formLabel}>
                  {visitorDevice === "Mobile" &&
                  visitorDeviceisChecked === true ? (
                    <Image src={MobileSelected} alt="MobileSelected" />
                  ) : (
                    <Image src={Mobileunselected} alt="Mobileunselected" />
                  )}

                  <span>Mobile</span>
                </div>
              }
              className={TargetingRulesStyle.formControllabel}
            />
          </RadioGroup>
        </FormControl>
      </FormGroup>
      <FormGroup className="mb-6">
        <div className={TargetingRulesStyle.formElement}>
          <h4>After X seconds</h4>
          <Switch
            checked={afterSecScrollIsChecked}
            onChange={() => {
              if (afterSecScrollIsChecked === false) {
                afterSecScrollHandleChange(0);
              }
              SetAfterSecScrollIsChecked(!afterSecScrollIsChecked);
            }}
            color="secondary"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Popup appears after ... Seconds"
          variant="outlined"
          onChange={(e) => {
            let num = e.target.value;
            parseInt(num);
            afterSecScrollHandleChange(num);
          }}
          disabled={afterSecScrollIsChecked === false}
        />
      </FormGroup>

      <FormGroup className="mb-6">
        <div className={TargetingRulesStyle.formElement}>
          <h4>After % Scroll</h4>
          <Switch
            checked={afterPScrollIsChecked}
            onChange={() => {
              if (afterPScrollIsChecked === false) {
                afterPScrollHandleChange(0);
              }
              SetAfterPScrollIsChecked(!afterPScrollIsChecked);
            }}
            color="secondary"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Popup appears after page scrolled down ...%"
          variant="outlined"
          onChange={(e) => {
            let num = e.target.value;
            parseInt(num);
            afterPScrollHandleChange(num);
          }}
          disabled={afterPScrollIsChecked === false}
        />
      </FormGroup>
      <FormGroup className="mb-6">
        <div className={TargetingRulesStyle.formElement}>
          <h4>Traffic Source</h4>
          <Switch
            checked={soruceDomainIsChecked}
            onChange={() => {
              SetSoruceDomainIsChecked(!soruceDomainIsChecked);
            }}
            color="secondary"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          disabled={soruceDomainIsChecked === false}
        />
      </FormGroup>
      <FormGroup className="mb-6">
        <div className={TargetingRulesStyle.formElement}>
          <h4>Browser Language</h4>
          <Switch
            checked={browserLanguageIsChecked}
            onChange={() => {
              SetBrowserLanguageIsChecked(!browserLanguageIsChecked);
            }}
            color="secondary"
          />
        </div>
        <FormControl disabled={browserLanguageIsChecked === false}>
          <InputLabel id="demo-multiple-checkbox-label">Language</InputLabel>
          <Select
            multiple
            value={language}
            onChange={handleChange}
            input={<OutlinedInput label="Languages" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {Languages.map((Language) => (
              <MenuItem
                key={Language}
                value={Language}
                className={TargetingRulesStyle.languageSelector}
              >
                <Checkbox checked={language.indexOf(Language) > -1} />
                <ListItemText primary={Language} />
              </MenuItem>
            ))}
            <div className={TargetingRulesStyle.selectorbuttons}>
              <div
                onClick={() => {
                  setLanguage([]);
                }}
              >
                Clear All
              </div>
            </div>
          </Select>
        </FormControl>
      </FormGroup>
      <div className={TargetingRulesStyle.formElement}>
        <h4>Exit Intent Targeting</h4>
        <Switch
          checked={exitIntentTargetingIsChecked}
          onChange={() => {
            SetExitIntentTargetingIsChecked(!exitIntentTargetingIsChecked);
          }}
          color="secondary"
        />
      </div>
    </div>
  );
};

export default TargetingRules;
