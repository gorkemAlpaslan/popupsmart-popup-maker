import headerStyles from "./Header.module.scss";
import logo from "../../public/home_icons/popupsmart_case_logo.png";
import down from "../../public/home_icons/down.png";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className={headerStyles.headWrapper}>
      <div className={headerStyles.headMenu}>
        <a href="" className={headerStyles.headTitle}>
          <Image src={logo} alt="logo" />
          <h3>modal.cards</h3>
        </a>
        <div className={headerStyles.headItems}>
          <a href="" className={headerStyles.headItem}>
            <p>Solutions</p> <Image src={down} alt="down"></Image>
          </a>
          <a href="" className={headerStyles.headItem}>
            Product Tour
          </a>
          <a href="" className={headerStyles.headItem}>
            Showcase
          </a>
          <a href="" className={headerStyles.headItem}>
            Pricing
          </a>
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
