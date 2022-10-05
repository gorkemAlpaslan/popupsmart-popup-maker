import React from "react";
import EndPageStyle from "./EndPageStyle.module.scss";
import Image from "next/image";
import TargetingOptions1 from "../../../public/home_icons/TargetingOptions1.png";
import TargetingOptions2 from "../../../public/home_icons/TargetingOptions2.png";
import TargetingOptions3 from "../../../public/home_icons/TargetingOptions3.png";
import TargetingOptions4 from "../../../public/home_icons/TargetingOptions4.png";
import popupsmartLogo from "../../../public/home_icons/popupsmartlogo.png";

const EndPage = () => {
  return (
    <div>
      <div className={EndPageStyle.endPage}>
        <h1>Build great popups without code</h1>
        <div className={EndPageStyle.Targeting}>
          <div className={EndPageStyle.TargetingWrapper}>
            <div className={EndPageStyle.TargetingIMGWrapper}>
              <Image
                src={TargetingOptions1}
                alt="TargetingOptions1"
                width={70}
                height={70}
              />
            </div>
            <h2>Targeting Options</h2>
            <p>Target +26 trigger to your visitors</p>
          </div>
          <div className={EndPageStyle.TargetingWrapper}>
            <div className={EndPageStyle.TargetingIMGWrapper}>
              <Image src={TargetingOptions2} alt="TargetingOptions2" />
            </div>
            <h2>No-Code</h2>
            <p>No code required while you’re creating a popup</p>
          </div>
          <div className={EndPageStyle.TargetingWrapper}>
            <div className={EndPageStyle.TargetingIMGWrapper}>
              <Image src={TargetingOptions3} alt="TargetingOptions3" />
            </div>
            <h2>Targeting Options</h2>
            <p>Integrated with your marketing and CRM platforms</p>
          </div>
          <div className={EndPageStyle.TargetingWrapper}>
            <div className={EndPageStyle.TargetingIMGWrapper}>
              <Image src={TargetingOptions4} alt="TargetingOptions4" />
            </div>
            <h2>Targeting Options</h2>
            <p>Don’t worry about speed and Amazon AWS resources</p>
          </div>
        </div>
      </div>
      <div className={EndPageStyle.end}>
        <Image src={popupsmartLogo} alt="popupsmart" width={32} height={32} />
        <p>Powered by Popupsmart</p>
      </div>
    </div>
  );
};

export default EndPage;
