import camperStyle from "./Camper.module.scss";
import Mediterranean from "../../../../public/camper/Mediterranean_Sneakers.png";
import camperLogo from "../../../../public/camper/Camper_logo.png";
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
        <h4 className="mt-8">Join the club</h4>
        <h2>
          Subscribe and Get an Extra
          <div className="flex">
            <div className="font-bold underline mr-1">25% off </div> on your
            first purchase.
          </div>
        </h2>
        <form>
          <input placeholder="Email address"></input>
          <button>Subscribe</button>
          <p className="mt-5">
            By signing up, you agree to Privacy Policy and Terms of Use.
          </p>
        </form>
        <div className={camperStyle.MediterraneanSneakers}>
          Mediterranean Sneakers®
        </div>
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
