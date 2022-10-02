import homeStyle from "../../styles/Home.module.scss";
import Camper from "../../components/Camper/Camper";
import { useTemplateContext } from "../../components/Context/TemplateContext";
import CounterOn from "./CounterOn";

const Info = () => {
  const { info } = useTemplateContext();

  return (
    <div className={homeStyle.info}>
      <Camper />
      <div className={homeStyle.data}>
        {info.map(
          (i: {
            index: string;
            number: number;
            content: string;
            message: string;
          }) => {
            return (
              <div className={homeStyle.dataEach} key={i.index}>
                <h1>
                  <CounterOn
                    number={i.number}
                    content={i.content}
                    message={i.message}
                  />
                </h1>
              </div>
            );
          }
        )}
        <div className={homeStyle.dataEach}>
          <h2>Popupsmart meets all your business needs.</h2>
        </div>
      </div>
    </div>
  );
};

export default Info;
