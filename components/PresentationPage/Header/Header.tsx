import headerStyles from "./Header.module.scss";
import logo from "../../../public/home_icons/popupsmart_case_logo.png";
import down from "../../../public/home_icons/down.png";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className={headerStyles.headWrapper}>
      <div className={headerStyles.headMenu}>
        <a href="" className="flex items-center">
          <Image src={logo} alt="logo" />
          <h3 className="mx-2">modal.cards</h3>
        </a>
        <div className="flex items-center">
          <a href="" className="flex items-center">
            <p>Solutions</p> <Image src={down} alt="down"></Image>
          </a>
          <a href="">Product Tour</a>
          <a href="">Showcase</a>
          <a href="">Pricing</a>
        </div>
      </div>
      <div className={headerStyles.Sign}>
        <p>Sign In</p>
        <button>Try for free</button>
      </div>
    </div>
  );
};

export default Header;
