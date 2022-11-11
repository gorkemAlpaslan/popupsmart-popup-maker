import { createContext, useContext, useEffect, useState, useRef } from "react";
import CloseWindow from "../public/template_icons/Template_exit_icon.png";
import Image from "next/image";
import TemplateOneicon from "../public/template_icons/Template_1_icon.png";
import TemplateFouricon from "../public/template_icons/Template_4_icon.png";

const TemplateContext = createContext({});

type TemplateContextProviderProps = {
  children: React.ReactNode;
};

export const useTemplateContext: any = () => useContext(TemplateContext);

export const TemplateContextProvider = ({
  children,
}: TemplateContextProviderProps) => {
  const [currentTemplate, SetCurrentTemplate] = useState<string | null>(null);

  const [size, SetSize] = useState<{
    title: string;
    value: string;
    titleValue: string;
    textValue: string;
  }>({
    title: "medium",
    value:
      "flex flex-col justify-center items-center w-[480px] p-8 rounded-xl bg-white border overflow-hidden",
    titleValue: "font-bold text-3xl my-5 break-words max-w-[400px]",
    textValue: "font-normal text-xl my-6 text-center break-words max-w-[380px]",
  });

  const [position, SetPosition] = useState<{
    value: string;
    WraperStyle: string;
  }>({
    value: "top-left",
    WraperStyle: "absolute top-0 left-0",
  });

  const [color, SetColor] = useState<{
    color: string;
    iconValue: string;
    buttonValue: string;
  }>({
    color: "purple",
    iconValue:
      "flex justify-center items-center w-20 h-20 rounded-full my-2 bg-purple-800",
    buttonValue:
      "w-1/2 mx-1 h-[48px] rounded-xl border border-solid border-neutral-500 text-black bg-white hover:bg-purple-800",
  });

  const [visitorDeviceisChecked, SetVisitorDeviceisChecked] = useState(false);
  const [afterPScrollIsChecked, SetAfterPScrollIsChecked] = useState(false);
  const [afterSecScrollIsChecked, SetAfterSecScrollIsChecked] = useState(false);
  const [soruceDomainIsChecked, SetSoruceDomainIsChecked] = useState(false);
  const [browserLanguageIsChecked, SetBrowserLanguageIsChecked] =
    useState(false);
  const [exitIntentTargetingIsChecked, SetExitIntentTargetingIsChecked] =
    useState(false);

  const [visitorDevice, SetVisitorDevice] = useState<string | null>(null);
  const [afterSecScroll, SetAfterSecScroll] = useState<number>(0);
  const [afterPScroll, SetAfterPScroll] = useState<number>(0);
  const [trafficSource, SetTrafficSource] = useState<string | null>(null);
  const [customTemplateIcon, setCustomTemplateIcon] = useState<string>("");
  const [customTemplateImage, setcustomTemplateImage] = useState<string>("");

  const [contentInputOne, SetContentInputOne] = useState("");
  const [contentInputTwo, SetContentInputTwo] = useState("");
  const [contentInputThree, SetContentInputThree] = useState("");
  const [contentInputFour, SetContentInputFour] = useState("");

  const [webHookUrl, SetWebHookUrl] = useState<string | null>(null);
  const [sendFormSub, SetSendFormSub] = useState<boolean>(false);
  const [sendClickData, SetSendClickData] = useState<boolean>(false);
  const [scriptCode, SetScriptCode] = useState<string | null>("");

  const refInputOne = useRef<HTMLInputElement | null>(null);
  const refInputTwo = useRef<HTMLInputElement | null>(null);
  const refInputThree = useRef<HTMLInputElement | null>(null);
  const refInputFour = useRef<HTMLInputElement | null>(null);

  const StageFour = useRef<HTMLHeadingElement>(null);
  const StageThree = useRef<HTMLHeadingElement>(null);
  const StageTwo = useRef<HTMLHeadingElement>(null);
  const StageOne = useRef<HTMLHeadingElement>(null);

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

  const afterPScrollHandleChange = (num: number) => {
    SetAfterPScroll(num);
  };

  const afterSecScrollHandleChange = (num: number) => {
    SetAfterSecScroll(num);
  };

  const TrafficSourceHandleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    SetTrafficSource((event.target as HTMLInputElement).value);
  };

  const sizes = [
    {
      title: "small",
      value:
        "flex flex-col justify-center items-center w-[360px] p-6 rounded-xl bg-white border overflow-hidden",

      titleValue: "font-bold text-xl my-1 break-words max-w-[300px]",
      textValue:
        "font-normal text-sm my-1 text-center break-words max-w-[260px]",
    },
    {
      title: "medium",
      value:
        "flex flex-col justify-center items-center w-[480px] p-8 rounded-xl bg-white border overflow-hidden",
      titleValue: "font-bold text-3xl my-5 break-words max-w-[400px]",
      textValue:
        "font-normal text-xl my-6 text-center break-words max-w-[380px]",
    },
    {
      title: "large",
      value:
        "flex flex-col justify-center items-center w-[600px] p-10 rounded-xl bg-white border overflow-hidden",

      titleValue: "font-bold text-5xl my-5 break-words max-w-[550px]",
      textValue:
        "font-normal text-3xl my-10 text-center break-words max-w-[500px]",
    },
  ];

  const colors = [
    {
      color: "black",
      iconValue:
        "flex justify-center items-center w-20 h-20 rounded-full my-2 bg-black",
      buttonValue:
        "w-1/2 mx-1 h-[48px] rounded-xl border border-solid border-neutral-500 text-black bg-white hover:bg-black",
    },
    {
      color: "red",
      iconValue:
        "flex justify-center items-center w-20 h-20 rounded-full my-2 bg-red-500",
      buttonValue:
        "w-1/2 mx-1 h-[48px] rounded-xl border border-solid border-neutral-500 text-black bg-white hover:bg-red-500",
    },
    {
      color: "green",
      iconValue:
        "flex justify-center items-center w-20 h-20 rounded-full my-2 bg-green-500",
      buttonValue:
        "w-1/2 mx-1 h-[48px] rounded-xl border border-solid border-neutral-500 text-black bg-white hover:bg-green-500",
    },
    {
      color: "purple",
      iconValue:
        "flex justify-center items-center w-20 h-20 rounded-full my-2 bg-purple-800",
      buttonValue:
        "w-1/2 mx-1 h-[48px] rounded-xl border border-solid border-neutral-500 text-black bg-white hover:bg-purple-800",
    },
    {
      color: "blue",
      iconValue:
        "flex justify-center items-center w-20 h-20 rounded-full my-2 bg-indigo-600",
      buttonValue:
        "w-1/2 mx-1 h-[48px] rounded-xl border border-solid border-neutral-500 text-black bg-white hover:bg-indigo-600",
    },
  ];

  const positions = [
    {
      value: "top-left",
      WraperStyle: "absolute top-0 left-0",
    },
    {
      value: "top",
      WraperStyle: "absolute top-0 left-1/2 transform -translate-x-1/2",
    },
    {
      value: "top-right",
      WraperStyle: "absolute top-0 right-0",
    },
    {
      value: "left",
      WraperStyle: "absolute top-1/2 left-0 transform -translate-y-1/2",
    },
    {
      value: "center",
      WraperStyle:
        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    },
    {
      value: "right",
      WraperStyle: "absolute top-1/2 right-0 transform -translate-y-1/2",
    },
    {
      value: "bottom-left",
      WraperStyle: "absolute bottom-0 left-0",
    },
    {
      value: "bottom",
      WraperStyle: "absolute bottom-0 left-1/2 transform -translate-x-1/2",
    },
    {
      value: "bottom-right",
      WraperStyle: "absolute bottom-0 right-0",
    },
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
    const [scrollPosition, setScrollPosition] = useState(0);
    const [SecClass, setSecClass] = useState(false);

    const handleScroll = () => {
      const positionScroll = window.pageYOffset;
      setScrollPosition(positionScroll);
    };

    const limit =
      Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ) *
      (afterPScroll / 100);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });

      setTimeout(() => {
        setSecClass(true);
      }, 1000 * afterSecScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <div
        className={
          afterPScrollIsChecked && afterSecScrollIsChecked === false
            ? scrollPosition > limit
              ? position.WraperStyle
              : "hidden"
            : afterSecScrollIsChecked
            ? SecClass
              ? position.WraperStyle
              : "hidden"
            : position.WraperStyle
        }
      >
        <div className={size.value}>
          <div
            className="w-full flex flex-row-reverse"
            onClick={() => {
              SetCurrentTemplate(null);
              StageOne.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Image src={CloseWindow} alt="closeWindow" />
          </div>
          <div className={color.iconValue}>
            {customTemplateImage === "" ? (
              <Image
                src={TemplateOneicon}
                alt="icon"
                width="50%"
                height="50%"
              />
            ) : (
              customTemplateIcon.indexOf("image/") > -1 && (
                <Image
                  src={customTemplateIcon}
                  alt=""
                  width="50%"
                  height="50%"
                />
              )
            )}
          </div>
          {contentInputOne !== "" ? (
            <h2 className={size.titleValue}>{contentInputOne}</h2>
          ) : (
            <h2 className={size.titleValue}>Security code</h2>
          )}
          {contentInputTwo !== "" ? (
            <p className={size.textValue}>{contentInputTwo}</p>
          ) : (
            <p className={size.textValue}>This code expires in 24 hours</p>
          )}
          <input className="w-4/6 h-[48px] border border-solid border-neutral-500 rounded-xl bg-white p-2"></input>
          <div className="w-4/6 my-8 flex justify-between">
            <button className={color.buttonValue}>Cancel</button>
            <button className={color.buttonValue}>Continue</button>
          </div>
        </div>
      </div>
    );
  };

  const TemplateFour = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [SecClass, setSecClass] = useState(false);

    const handleScroll = () => {
      const positionScroll = window.pageYOffset;
      setScrollPosition(positionScroll);
    };

    const limit =
      Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ) *
      (afterPScroll / 100);

    useEffect(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });

      setTimeout(() => {
        setSecClass(true);
      }, 1000 * afterSecScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <div
        className={
          afterPScrollIsChecked && afterSecScrollIsChecked === false
            ? scrollPosition > limit
              ? position.WraperStyle
              : "hidden"
            : afterSecScrollIsChecked
            ? SecClass
              ? position.WraperStyle
              : "hidden"
            : position.WraperStyle
        }
      >
        <div className={size.value}>
          <div
            className="w-full flex flex-row-reverse"
            onClick={() => {
              SetCurrentTemplate(null);
              StageOne.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Image src={CloseWindow} alt="closeWindow" />
          </div>
          <div className={color.iconValue}>
            {customTemplateIcon === "" ? (
              <Image
                src={TemplateFouricon}
                alt="icon"
                width="50%"
                height="50%"
              />
            ) : (
              customTemplateIcon.indexOf("image/") > -1 && (
                <Image
                  src={customTemplateIcon}
                  alt=""
                  width="50%"
                  height="50%"
                />
              )
            )}
          </div>
          {contentInputOne !== "" ? (
            <h2 className={size.titleValue}>{contentInputOne}</h2>
          ) : (
            <h2 className={size.titleValue}>Delete your profile</h2>
          )}
          {contentInputTwo !== "" ? (
            <p className={size.textValue}>{contentInputTwo}</p>
          ) : (
            <p className={size.textValue}>
              Your profile will be automatically deleted after 1 month.
            </p>
          )}
          <div className="w-full h-[110px] my-8 flex flex-col items-center justify-between">
            <button className={color.buttonValue}>Delete my profile</button>
            <button className={color.buttonValue}>Cancel</button>
          </div>
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
    TemplateFour,
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
    StageOne,
    visitorDevice,
    SetVisitorDevice,
    VisitorDeviceHandleChange,
    afterPScroll,
    SetAfterPScroll,
    afterPScrollHandleChange,
    afterSecScrollHandleChange,
    TrafficSourceHandleChange,
    webHookUrl,
    SetWebHookUrl,
    sendFormSub,
    SetSendFormSub,
    sendClickData,
    SetSendClickData,
    visitorDeviceisChecked,
    SetVisitorDeviceisChecked,
    afterPScrollIsChecked,
    SetAfterPScrollIsChecked,
    afterSecScrollIsChecked,
    SetAfterSecScrollIsChecked,
    soruceDomainIsChecked,
    SetSoruceDomainIsChecked,
    browserLanguageIsChecked,
    SetBrowserLanguageIsChecked,
    exitIntentTargetingIsChecked,
    SetExitIntentTargetingIsChecked,
    scriptCode,
  };
  return (
    <TemplateContext.Provider value={contextValue}>
      {children}
    </TemplateContext.Provider>
  );
};
