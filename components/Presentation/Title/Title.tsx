import TitleStyle from "../../../styles/presentation-styles/TitleStyle.module.scss";
import Image from "next/image";
import check from "../../../public/home_icons/check.png";
import Header from "../Header/Header";

const Title = () => {
  return (
    <div className={TitleStyle.wraper}>
      <Header />
      <div className={TitleStyle.PageBody}>
        <h2>Simple modal card creator</h2>
        <p className={TitleStyle.modalexp}>
          A utility-first CSS framework packed with classeslike flex, pt-4,
          text-center and rotate-90 that can becomposed to build any design,
          directly in your markup.
        </p>
        <button>Try It Now</button>
        <div className={TitleStyle.pros}>
          <p>
            <Image src={check} alt="check" />
            Free and paid plans
          </p>
          <p>
            <Image src={check} alt="check" /> Setup in minutes
          </p>
          <p>
            <Image src={check} alt="check" />
            No credit card required
          </p>
        </div>
        <div className={TitleStyle.empty}></div>
      </div>
    </div>
  );
};

export default Title;
