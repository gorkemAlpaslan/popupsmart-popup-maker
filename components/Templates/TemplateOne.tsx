import icon from "../../public/template_icons/Template_1_icon.png";
import exitIcon from "../../public/template_icons/Template_exit_icon.png";

import { IoMdCloseCircleOutline } from "react-icons/io";

import Image from "next/image";
import TemplateOneStyle from "./TemplateOne.module.scss";

const TemplateOne = () => {
  return (
    <div className={TemplateOneStyle.wraper}>
      <div className={TemplateOneStyle.exit}>
        <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
      </div>
      <div className={TemplateOneStyle.iconWraper}>
        <Image src={icon} alt="icon" />
      </div>
      <h2>Security Code</h2>
      <p>This code expires in 24 hours</p>
      <input></input>
      <div className={TemplateOneStyle.buttonsWraper}>
        <button>Cancel</button>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default TemplateOne;
