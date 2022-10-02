import Image from "next/image";
import homeStyle from "../../styles/Home.module.scss";
import { useTemplateContext } from "../../components/Context/TemplateContext";

/////////  Template Images  /////////
import {
  Template_1,
  Template_2,
  Template_3,
  Template_4,
  Template_5,
  Template_6,
  Template_7,
  Template_8,
  Template_9,
  Template_10,
  Template_11,
  Template_12,
} from "../../public/template/index";

const TemplatesPage = () => {
  const { StageTwo, SetCurrentTemplate } = useTemplateContext();

  const TemplateList = [
    { component: "TemplateOne", image: Template_1, index: "1" },
    { component: "TemplateTwo", image: Template_2, index: "2" },
    { component: "TemplateThree", image: Template_3, index: "3" },
    { component: "TemplateFour", image: Template_4, index: "4" },
    { component: "TemplateFive", image: Template_5, index: "5" },
    { component: "TemplateSix", image: Template_6, index: "6" },
    { component: "TemplateSeven", image: Template_7, index: "7" },
    { component: "TemplateEight", image: Template_8, index: "8" },
    { component: "TemplateNine", image: Template_9, index: "9" },
    { component: "TemplateTen", image: Template_10, index: "10" },
    { component: "TemplateEleven", image: Template_11, index: "11" },
    { component: "TemplateTwelve", image: Template_12, index: "12" },
  ];

  return (
    <div className={homeStyle.templates}>
      <div className={homeStyle.templatesTitle}>
        <div>
          <h2>Modal Card Generator</h2>
          <p>
            Measure your return on email marketing efforts easier and faster by
            using thebest online tools. Popupsmart is ready to help you build an
            efficient email list!
          </p>
        </div>
        <div className={homeStyle.Stage}>
          <div>1</div>
          <h2>Choose your template</h2>
        </div>
        <div className={homeStyle.AllTemplatesWraper}>
          {TemplateList.map((template) => {
            return (
              <div
                className={homeStyle.TemplateEach}
                key={`Template_${template.index}`}
                onClick={() => {
                  SetCurrentTemplate(template.component);
                  StageTwo.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Image
                  src={template.image}
                  alt={`Template_${template.index}`}
                />
                <div className={homeStyle.SelectTemplate}>
                  <div>Select Template</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
