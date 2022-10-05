import React from "react";
import BelowInfoStyle from "./BelowInfo.module.scss";
import Image from "next/image";
import pixelPerfect from "../../../public/home_icons/pixelPerfect.png";
import conversionReady from "../../../public/home_icons/pixelPerfect.png";
import modernUseful from "../../../public/home_icons/pixelPerfect.png";

const BelowInfo = () => {
  return (
    <div className={BelowInfoStyle.BelowInfo}>
      <h2 className="font-semibold text-4xl mb-14">
        Conversion & UX ready popups & modals
      </h2>
      <div className={BelowInfoStyle.BelowBoxes}>
        <div>
          <Image src={pixelPerfect} alt="pixelPerfect" width={48} height={48} />
          <h3>Pixel Perfect</h3>
          <p>
            Helps you calculate your email marketing roi to measure success.
          </p>
        </div>
        <div>
          <Image
            src={conversionReady}
            alt="conversionReady"
            width={48}
            height={48}
          />
          <h3>Conversion Ready</h3>
          <p>
            Empowers your emails by generating afree code for a CTA in your
            subject line.
          </p>
        </div>
        <div>
          <Image src={modernUseful} alt="modernUseful" width={48} height={48} />
          <h3>Modern & Useful</h3>
          <p>
            Enables you to estimate the total profit of your investment on a
            popup service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BelowInfo;
