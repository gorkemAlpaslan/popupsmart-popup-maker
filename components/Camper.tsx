import camperStyle from "./Camper.module.scss";
import Mediterranean from "../public/camper/Mediterranean_Sneakers.png";
import camperLogo from "../public/camper/Camper_logo.png";
import Image from "next/image";

const Camper = () => {
  return (
    <div className={camperStyle.wraper}>
      <div className={camperStyle.camperInfo}>
        <Image
          src={camperLogo}
          alt="sneakers"
          className={camperStyle.sneakers}
        />
        <h4>Join the club</h4>
        <h2>Subscribe and Get an Extra 25% Off on your first purchase.</h2>
        <form>
          <input placeholder="Email address"></input>
          <button>Subscribe</button>
          <p>By signing up, you agree to Privacy Policy and Terms of Use.</p>
        </form>
      </div>
      <Image
        src={Mediterranean}
        alt="sneakers"
        className={camperStyle.sneakers}
      />
    </div>
  );
};

export default Camper;
