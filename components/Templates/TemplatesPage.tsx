import Image from "next/image";
import { useTemplateContext } from "../../Context/TemplateContext";
import TemplatesPageStyle from "../../styles/template-style/TemplatesPage.module.scss";

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
  const { StageOne, StageTwo, SetCurrentTemplate } = useTemplateContext();

  const TemplateList = [
    {
      component: "TemplateOne",
      image: Template_1,
      index: "1",
      available: true,
    },
    {
      component: "TemplateTwo",
      image: Template_2,
      index: "2",
      available: false,
    },
    {
      component: "TemplateThree",
      image: Template_3,
      index: "3",
      available: false,
    },
    {
      component: "TemplateFour",
      image: Template_4,
      index: "4",
      available: true,
    },
    {
      component: "TemplateFive",
      image: Template_5,
      index: "5",
      available: false,
    },
    {
      component: "TemplateSix",
      image: Template_6,
      index: "6",
      available: false,
    },
    {
      component: "TemplateSeven",
      image: Template_7,
      index: "7",
      available: false,
    },
    {
      component: "TemplateEight",
      image: Template_8,
      index: "8",
      available: false,
    },
    {
      component: "TemplateNine",
      image: Template_9,
      index: "9",
      available: false,
    },
    {
      component: "TemplateTen",
      image: Template_10,
      index: "10",
      available: false,
    },
    {
      component: "TemplateEleven",
      image: Template_11,
      index: "11",
      available: false,
    },
    {
      component: "TemplateTwelve",
      image: Template_12,
      index: "12",
      available: false,
    },
  ];

  return (
    <div className={TemplatesPageStyle.templates}>
      <div className={TemplatesPageStyle.templatesTitle}>
        <div className="mt-20">
          <div className={TemplatesPageStyle.title}>Modal Card Generator</div>
          <p>
            Measure your return on email marketing efforts easier and faster by
            using thebest online tools. Popupsmart is ready to help you build an
            efficient email list!
          </p>
        </div>
        <div className={TemplatesPageStyle.Stage} ref={StageOne}>
          <div>1</div>
          <h2>Choose your template</h2>
        </div>
        <div className={TemplatesPageStyle.AllTemplatesWraper}>
          {TemplateList.map((template) => {
            return (
              <div
                className={TemplatesPageStyle.TemplateEach}
                key={`Template_${template.index}`}
                onClick={() => {
                  template.available && SetCurrentTemplate(template.component);
                  template.available &&
                    StageTwo.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Image
                  src={template.image}
                  alt={`Template_${template.index}`}
                />
                <div
                  className={
                    template.available
                      ? TemplatesPageStyle.SelectTemplate
                      : TemplatesPageStyle.SelectTemplateUnavailable
                  }
                >
                  <div>
                    {template.available ? "Select Template" : "Not Available"}
                  </div>
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
