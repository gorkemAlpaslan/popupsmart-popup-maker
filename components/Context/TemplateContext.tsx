import { createContext, useContext, useEffect, useState, useRef } from "react";
////
import TemplateOneStyle from "./TemplateOne.module.scss";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Image from "next/image";
import icon from "../../public/template_icons/Template_1_icon.png";

////
const TemplateContext = createContext({});

type TemplateContextProviderProps = {
  children: React.ReactNode;
};

export const useTemplateContext: any = () => useContext(TemplateContext);

export const TemplateContextProvider = ({
  children,
}: TemplateContextProviderProps) => {
  const [size, SetSize] = useState<string | null>(null);
  const [position, SetPosition] = useState<string | null>(null);
  const [color, SetColor] = useState<string | null>(null);
  const [currentTemplate, SetCurrentTemplate] = useState<string | null>(null);
  const [visitorDevice, SetVisitorDevice] = useState<string | null>(null);
  const [afterXScroll, SetAfterXScroll] = useState<string | null>(null);
  const [afterPercentageScroll, SetAfterPercentageScroll] = useState<
    string | null
  >(null);
  const [trafficSource, SetTrafficSource] = useState<string | null>(null);

  const [customTemplateIcon, setCustomTemplateIcon] = useState<string>("");
  const [customTemplateImage, setcustomTemplateImage] = useState<string>("");

  const [contentInputOne, SetContentInputOne] = useState("");
  const [contentInputTwo, SetContentInputTwo] = useState("");
  const [contentInputThree, SetContentInputThree] = useState("");
  const [contentInputFour, SetContentInputFour] = useState("");

  const refInputOne = useRef<HTMLInputElement | null>(null);
  const refInputTwo = useRef<HTMLInputElement | null>(null);
  const refInputThree = useRef<HTMLInputElement | null>(null);
  const refInputFour = useRef<HTMLInputElement | null>(null);

  const StageFour = useRef<HTMLHeadingElement>(null);
  const StageThree = useRef<HTMLHeadingElement>(null);
  const StageTwo = useRef<HTMLHeadingElement>(null);

  function convertFile(files: FileList | null, type: string) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        if (type === "icon") {
          setCustomTemplateIcon(
            `data:${fileType};base64,${btoa(ev.target.result)}`
          );
          StageThree.current?.scrollIntoView({ behavior: "smooth" });
        } else if (type === "image") {
          setcustomTemplateImage(
            `data:${fileType};base64,${btoa(ev.target.result)}`
          );
          StageFour.current?.scrollIntoView({ behavior: "smooth" });
        }
      };
    }
  }

  const VisitorDeviceHandleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    SetVisitorDevice((event.target as HTMLInputElement).value);
  };

  const afterXScrollHandleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    SetAfterXScroll((event.target as HTMLInputElement).value);
  };

  const afterPercentageScrollHandleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    SetAfterPercentageScroll((event.target as HTMLInputElement).value);
  };

  const TrafficSourceHandleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    SetTrafficSource((event.target as HTMLInputElement).value);
  };

  const sizes = ["small", "medium", "large"];

  const colors = ["black", "orange", "grey", "beige", "white"];

  const positions = [
    "top-left",
    "top",
    "top-right",
    "left",
    "center",
    "right",
    "bottom-left",
    "bottom",
    "bottom-right",
  ];

  const info = [
    {
      number: 3,
      content: "X",
      message: "Increase Conversion Rate",
      index: "0",
    },
    { number: 120, content: "%", message: "Email Subscribers", index: "1" },
    {
      number: 390,
      content: "%",
      message: "More Customer Engagement",
      index: "2",
    },
  ];

  const TemplateOne = () => {
    return (
      <div className={TemplateOneStyle.wraper}>
        <div className={TemplateOneStyle.exit}>
          <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
        </div>
        <div className={TemplateOneStyle.iconWraper}>
          {customTemplateIcon === "" ? (
            <Image src={icon} alt="icon" />
          ) : (
            customTemplateIcon.indexOf("image/") > -1 && (
              <Image src={customTemplateIcon} alt="" width={300} height={300} />
            )
          )}
        </div>
        {contentInputOne !== "" ? (
          <h2>{contentInputOne}</h2>
        ) : (
          <h2>Security code</h2>
        )}
        {contentInputTwo !== "" ? (
          <p>{contentInputTwo}</p>
        ) : (
          <p>This code expires in 24 hours</p>
        )}
        <input></input>
        <div className={TemplateOneStyle.buttonsWraper}>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    );
  };
  const TemplateTwo = () => {
    return (
      <div className={TemplateOneStyle.wraper}>
        <div className={TemplateOneStyle.exit}>
          <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
        </div>
        <div className={TemplateOneStyle.iconWraper}>
          <Image src={icon} alt="icon" />
        </div>
        <h2>Security Code</h2>
        <p>This code expires in 24 hours</p>
        <input></input>
        <div className={TemplateOneStyle.buttonsWraper}>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    );
  };
  const TemplateThree = () => {
    return (
      <div className={TemplateOneStyle.wraper}>
        <div className={TemplateOneStyle.exit}>
          <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
        </div>
        <div className={TemplateOneStyle.iconWraper}>
          <Image src={icon} alt="icon" />
        </div>
        <h2>Security Code</h2>
        <p>This code expires in 24 hours</p>
        <input></input>
        <div className={TemplateOneStyle.buttonsWraper}>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    );
  };
  const TemplateFour = () => {
    return (
      <div className={TemplateOneStyle.wraper}>
        <div className={TemplateOneStyle.exit}>
          <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
        </div>
        <div className={TemplateOneStyle.iconWraper}>
          <Image src={icon} alt="icon" />
        </div>
        <h2>Security Code</h2>
        <p>This code expires in 24 hours</p>
        <input></input>
        <div className={TemplateOneStyle.buttonsWraper}>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    );
  };
  const TemplateFive = () => {
    return (
      <div className={TemplateOneStyle.wraper}>
        <div className={TemplateOneStyle.exit}>
          <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
        </div>
        <div className={TemplateOneStyle.iconWraper}>
          <Image src={icon} alt="icon" />
        </div>
        <h2>Security Code</h2>
        <p>This code expires in 24 hours</p>
        <input></input>
        <div className={TemplateOneStyle.buttonsWraper}>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    );
  };
  const TemplateSix = () => {
    return (
      <div className={TemplateOneStyle.wraper}>
        <div className={TemplateOneStyle.exit}>
          <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
        </div>
        <div className={TemplateOneStyle.iconWraper}>
          <Image src={icon} alt="icon" />
        </div>
        <h2>Security Code</h2>
        <p>This code expires in 24 hours</p>
        <input></input>
        <div className={TemplateOneStyle.buttonsWraper}>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    );
  };
  const TemplateSeven = () => {
    return (
      <div className={TemplateOneStyle.wraper}>
        <div className={TemplateOneStyle.exit}>
          <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
        </div>
        <div className={TemplateOneStyle.iconWraper}>
          <Image src={icon} alt="icon" />
        </div>
        <h2>Security Code</h2>
        <p>This code expires in 24 hours</p>
        <input></input>
        <div className={TemplateOneStyle.buttonsWraper}>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    );
  };
  const TemplateEight = () => {
    return (
      <div className={TemplateOneStyle.wraper}>
        <div className={TemplateOneStyle.exit}>
          <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
        </div>
        <div className={TemplateOneStyle.iconWraper}>
          <Image src={icon} alt="icon" />
        </div>
        <h2>Security Code</h2>
        <p>This code expires in 24 hours</p>
        <input></input>
        <div className={TemplateOneStyle.buttonsWraper}>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    );
  };
  const TemplateNine = () => {
    return (
      <div className={TemplateOneStyle.wraper}>
        <div className={TemplateOneStyle.exit}>
          <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
        </div>
        <div className={TemplateOneStyle.iconWraper}>
          <Image src={icon} alt="icon" />
        </div>
        <h2>Security Code</h2>
        <p>This code expires in 24 hours</p>
        <input></input>
        <div className={TemplateOneStyle.buttonsWraper}>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    );
  };
  const TemplateTen = () => {
    return (
      <div className={TemplateOneStyle.wraper}>
        <div className={TemplateOneStyle.exit}>
          <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
        </div>
        <div className={TemplateOneStyle.iconWraper}>
          <Image src={icon} alt="icon" />
        </div>
        <h2>Security Code</h2>
        <p>This code expires in 24 hours</p>
        <input></input>
        <div className={TemplateOneStyle.buttonsWraper}>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    );
  };
  const TemplateEleven = () => {
    return (
      <div className={TemplateOneStyle.wraper}>
        <div className={TemplateOneStyle.exit}>
          <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
        </div>
        <div className={TemplateOneStyle.iconWraper}>
          <Image src={icon} alt="icon" />
        </div>
        <h2>Security Code</h2>
        <p>This code expires in 24 hours</p>
        <input></input>
        <div className={TemplateOneStyle.buttonsWraper}>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    );
  };
  const TemplateTwelve = () => {
    return (
      <div className={TemplateOneStyle.wraper}>
        <div className={TemplateOneStyle.exit}>
          <IoMdCloseCircleOutline></IoMdCloseCircleOutline>
        </div>
        <div className={TemplateOneStyle.iconWraper}>
          <Image src={icon} alt="icon" />
        </div>
        <h2>Security Code</h2>
        <p>This code expires in 24 hours</p>
        <input></input>
        <div className={TemplateOneStyle.buttonsWraper}>
          <button>Cancel</button>
          <button>Continue</button>
        </div>
      </div>
    );
  };

  const contextValue = {
    size,
    SetSize,
    position,
    SetPosition,
    color,
    SetColor,
    currentTemplate,
    SetCurrentTemplate,
    sizes,
    positions,
    colors,
    info,
    customTemplateIcon,
    setCustomTemplateIcon,
    convertFile,
    TemplateOne,
    TemplateTwo,
    TemplateThree,
    TemplateFour,
    TemplateFive,
    TemplateSix,
    TemplateSeven,
    TemplateEight,
    TemplateNine,
    TemplateTen,
    TemplateEleven,
    TemplateTwelve,
    SetContentInputOne,
    SetContentInputTwo,
    SetContentInputThree,
    SetContentInputFour,
    refInputOne,
    refInputTwo,
    refInputThree,
    refInputFour,
    StageFour,
    StageThree,
    StageTwo,
    visitorDevice,
    SetVisitorDevice,
    VisitorDeviceHandleChange,
    afterXScroll,
    SetAfterXScroll,
    afterXScrollHandleChange,
    afterPercentageScrollHandleChange,
    TrafficSourceHandleChange,
  };
  return (
    <TemplateContext.Provider value={contextValue}>
      {children}
    </TemplateContext.Provider>
  );
};
