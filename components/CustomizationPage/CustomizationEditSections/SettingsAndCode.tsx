import {
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  Checkbox,
} from "@mui/material";
import SettingsAndCodeStyle from "./SettingsAndCodeStyle.module.scss";
FormControl;
import { useTemplateContext } from "../../Context/TemplateContext";

const SettingsAndCode = () => {
  const {
    SetWebHookUrl,
    sendFormSub,
    SetSendFormSub,
    sendClickData,
    SetSendClickData,
    ScriptcodeHandler,
    scriptCode,
  } = useTemplateContext();

  return (
    <div className={SettingsAndCodeStyle.SettingsAndCodeEdit}>
      <div className={SettingsAndCodeStyle.Stage}>
        <div>5</div>
        <h2>Settings and Code</h2>
      </div>
      <div>
        <h2 className="my-10 font-bold text-xl">Webhook to Send data</h2>
        <p>Enter youe Webhook URL</p>
        <FormGroup className="my-10">
          <TextField
            id="outlined-basic"
            label="Your Webhook URL"
            variant="outlined"
            onChange={(e) => {
              SetWebHookUrl(e.target.value);
            }}
          />
        </FormGroup>
        <div className="flex flex-col">
          <FormControlLabel
            control={<Checkbox />}
            label="Send form submissions"
            checked={sendFormSub}
            onChange={() => {
              SetSendFormSub(!sendFormSub);
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label="Send click data"
            checked={sendClickData}
            onChange={() => {
              SetSendClickData(!sendClickData);
            }}
          />
        </div>
        <button
          className={SettingsAndCodeStyle.getButton}
          onClick={ScriptcodeHandler}
        >
          Get Your Code
        </button>
        <div className={SettingsAndCodeStyle.getCode}>
          <p>{scriptCode}</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsAndCode;
