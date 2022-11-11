import InfoStyle from "../../../styles/presentation-styles/InfoStyle.module.scss";
import Camper from "./Camper/Camper";
import { useTemplateContext } from "../../../Context/TemplateContext";
import CounterOn from "./CounterOn";

const Info = () => {
  const { info } = useTemplateContext();

  return (
    <div className={InfoStyle.info}>
      <Camper />
      <div className={InfoStyle.data}>
        {info.map(
          (i: {
            index: string;
            number: number;
            content: string;
            message: string;
          }) => {
            return (
              <div className={InfoStyle.dataEach} key={i.index}>
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
        <div className={InfoStyle.dataEach}>
          <h2>Popupsmart meets all your business needs.</h2>
        </div>
      </div>
    </div>
  );
};

export default Info;
