import { useState } from "react";
import homeStyle from "../../../styles/Home.module.scss";
import ComputerSelected from "../../../public/TargetingRulesIcons/Computer_Selected_icon.png";
import Computerunselected from "../../../public/TargetingRulesIcons/Computer_Unselected_icon.png";
import MobileSelected from "../../../public/TargetingRulesIcons/Mobile_Selected_icon.png";
import Mobileunselected from "../../../public/TargetingRulesIcons/Mobile_unselected_icon.png";
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
import { useTemplateContext } from "../../Context/TemplateContext";

const TargetingRules = () => {
  const [visitorDeviceisChecked, SetVisitorDeviceisChecked] = useState(false);
  const [afterXScrollIsChecked, SetAfterXScrollIsChecked] = useState(false);
  const [afterPercentageScrollIsChecked, SetAfterPercentageScrollIsChecked] =
    useState(false);
  const [soruceDomainIsChecked, SetSoruceDomainIsChecked] = useState(false);
  const [browserLanguageIsChecked, SetBrowserLanguageIsChecked] =
    useState(false);
  const [exitIntentTargetingIsChecked, SetExitIntentTargetingIsChecked] =
    useState(false);

  const {
    StageFour,
    VisitorDeviceHandleChange,
    visitorDevice,
    afterXScrollHandleChange,
    afterPercentageScrollHandleChange,
    TrafficSourceHandleChange,
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
    <div className={homeStyle.TargetingPageEdit}>
      <div className={homeStyle.Stage} ref={StageFour}>
        <div>4</div>
        <h2>Targeting Rules</h2>
      </div>
      <FormGroup>
        <div className={homeStyle.formElement}>
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
            className={homeStyle.formControl}
            onChange={VisitorDeviceHandleChange}
          >
            <FormControlLabel
              value="Desktop"
              control={<Radio />}
              label={
                <div className={homeStyle.formLabel}>
                  {visitorDevice === "Desktop" &&
                  visitorDeviceisChecked === true ? (
                    <Image src={ComputerSelected} alt="computerSelected" />
                  ) : (
                    <Image src={Computerunselected} alt="computerunselected" />
                  )}

                  <span> Desktop</span>
                </div>
              }
              className={homeStyle.formControllabel}
            />
            <FormControlLabel
              value="Mobile"
              control={<Radio />}
              label={
                <div className={homeStyle.formLabel}>
                  {visitorDevice === "Mobile" &&
                  visitorDeviceisChecked === true ? (
                    <Image src={MobileSelected} alt="MobileSelected" />
                  ) : (
                    <Image src={Mobileunselected} alt="Mobileunselected" />
                  )}

                  <span>Mobile</span>
                </div>
              }
              className={homeStyle.formControllabel}
            />
          </RadioGroup>
        </FormControl>
      </FormGroup>
      <FormGroup>
        <div className={homeStyle.formElement}>
          <h4>After X seconds</h4>
          <Switch
            checked={afterXScrollIsChecked}
            onChange={() => {
              SetAfterXScrollIsChecked(!afterXScrollIsChecked);
            }}
            color="secondary"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={(e) => {
            afterXScrollHandleChange(e);
          }}
          disabled={afterXScrollIsChecked === false}
        />
      </FormGroup>
      <FormGroup>
        <div className={homeStyle.formElement}>
          <h4>After % Scroll</h4>
          <Switch
            checked={afterPercentageScrollIsChecked}
            onChange={() => {
              SetAfterPercentageScrollIsChecked(
                !afterPercentageScrollIsChecked
              );
            }}
            color="secondary"
          />
        </div>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={(e) => {
            afterPercentageScrollHandleChange(e);
          }}
          disabled={afterPercentageScrollIsChecked === false}
        />
      </FormGroup>

      <FormGroup>
        <div className={homeStyle.formElement}>
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
      <FormGroup>
        <div className={homeStyle.formElement}>
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
                className={homeStyle.languageSelector}
              >
                <Checkbox checked={language.indexOf(Language) > -1} />
                <ListItemText primary={Language} />
              </MenuItem>
            ))}
            <div className={homeStyle.selectorbuttons}>
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
      <div className={homeStyle.formElement}>
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
