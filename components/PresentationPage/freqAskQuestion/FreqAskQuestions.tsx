import React, { useState, useRef } from "react";
import FreqAskQuestionsStyle from "./FreqAskQuestionsStyle.module.scss";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const FreqAskQuestions = () => {
  const [itemOneIsChecked, SetitemOneIsChecked] = useState(false);
  const [itemTwoIsChecked, SetitemTwoIsChecked] = useState(false);
  const [itemThreeIsChecked, SetitemThreeIsChecked] = useState(false);
  const [itemFourIsChecked, SetitemFourIsChecked] = useState(false);
  const [itemFiveIsChecked, SetitemFiveIsChecked] = useState(false);
  const [itemSixIsChecked, SetitemSixIsChecked] = useState(false);

  const itemOneTitle = useRef<HTMLDivElement | any>();
  const itemTwoTitle = useRef<HTMLDivElement | any>();
  const itemThreeTitle = useRef<HTMLDivElement | any>();
  const itemFourTitle = useRef<HTMLDivElement | any>();
  const itemFiveTitle = useRef<HTMLDivElement | any>();
  const itemSixTitle = useRef<HTMLDivElement | any>();

  const itemOne = useRef<HTMLDivElement | any>();
  const itemTwo = useRef<HTMLDivElement | any>();
  const itemThree = useRef<HTMLDivElement | any>();
  const itemFour = useRef<HTMLDivElement | any>();
  const itemFive = useRef<HTMLDivElement | any>();
  const itemSix = useRef<HTMLDivElement | any>();

  const itemOneGeneral = useRef<HTMLDivElement | any>();
  const itemTwoGeneral = useRef<HTMLDivElement | any>();
  const itemThreeGeneral = useRef<HTMLDivElement | any>();
  const itemFourGeneral = useRef<HTMLDivElement | any>();
  const itemFiveGeneral = useRef<HTMLDivElement | any>();
  const itemSixGeneral = useRef<HTMLDivElement | any>();

  const infoItemList = [
    {
      id: "1",
      isChecked: itemOneIsChecked,
      setIsChecked: SetitemOneIsChecked,
      refContent: itemOne,
      refGeneral: itemOneGeneral,
      refTitle: itemOneTitle,
      title: "How do I pay for the essentials or premium plan?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu felis tincidunt, hendrerit nulla a, vulputate mauris. Pellentesque mattis vehicula ante ac sagittis. Proin gravida sollicitudin pellentesque. Maecenas quis mi diam. In vel augue ultrices est placerat placerat nec quis tellus. Mauris maximus erat et pellentesque bibendum. Cras volutpat metus nunc, vitae pretium mi auctor vel. In ac porttitor lacus, id auctor nisl. Quisque dignissim, turpis quis scelerisque malesuada, velit massa viverra nulla, ac blandit mi odio ac lorem. Donec",
    },
    {
      id: "2",
      isChecked: itemTwoIsChecked,
      setIsChecked: SetitemTwoIsChecked,
      refContent: itemTwo,
      refTitle: itemTwoTitle,
      refGeneral: itemTwoGeneral,
      title:
        "Can I cancel my essentials or premium plan subscription at my time?",
      content:
        "You can pay with a credit card or via net banking (if you’re in United States). We willrenew your subscription automatically at the end of every billing cycle. You can paywith a credit card or via net banking (if you’re in United States). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      id: "3",
      isChecked: itemThreeIsChecked,
      setIsChecked: SetitemThreeIsChecked,
      refContent: itemThree,
      refGeneral: itemThreeGeneral,
      refTitle: itemThreeTitle,
      title: "How do I pay for the essentials or premium plan?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu felis tincidunt, hendrerit nulla a, vulputate mauris. Pellentesque mattis vehicula ante ac sagittis. Proin gravida sollicitudin pellentesque. Maecenas quis mi diam. In vel augue ultrices est placerat placerat nec quis tellus. Mauris maximus erat et pellentesque bibendum. Cras volutpat metus nunc, vitae pretium mi auctor vel. In ac porttitor lacus, id auctor nisl. Quisque dignissim, turpis quis scelerisque malesuada, velit massa viverra nulla, ac blandit mi odio ac lorem. Donec",
    },
    {
      id: "4",
      isChecked: itemFourIsChecked,
      setIsChecked: SetitemFourIsChecked,
      refContent: itemFour,
      refGeneral: itemFourGeneral,
      refTitle: itemFourTitle,
      title: "We need to add new users to our team, how will that be billed?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu felis tincidunt, hendrerit nulla a, vulputate mauris. Pellentesque mattis vehicula ante ac sagittis. Proin gravida sollicitudin pellentesque. Maecenas quis mi diam. In vel augue ultrices est placerat placerat nec quis tellus. Mauris maximus erat et pellentesque bibendum. Cras volutpat metus nunc, vitae pretium mi auctor vel. In ac porttitor lacus, id auctor nisl. Quisque dignissim, turpis quis scelerisque malesuada, velit massa viverra nulla, ac blandit mi odio ac lorem. Donec",
    },
    {
      id: "5",
      isChecked: itemFiveIsChecked,
      setIsChecked: SetitemFiveIsChecked,
      refContent: itemFive,
      refGeneral: itemFiveGeneral,
      refTitle: itemFiveTitle,
      title: "How do I pay for the essentials or premium plan?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu felis tincidunt, hendrerit nulla a, vulputate mauris. Pellentesque mattis vehicula ante ac sagittis. Proin gravida sollicitudin pellentesque. Maecenas quis mi diam. In vel augue ultrices est placerat placerat nec quis tellus. Mauris maximus erat et pellentesque bibendum. Cras volutpat metus nunc, vitae pretium mi auctor vel. In ac porttitor lacus, id auctor nisl. Quisque dignissim, turpis quis scelerisque malesuada, velit massa viverra nulla, ac blandit mi odio ac lorem. Donec",
    },
    {
      id: "6",
      isChecked: itemSixIsChecked,
      setIsChecked: SetitemSixIsChecked,
      refContent: itemSix,
      refGeneral: itemSixGeneral,
      refTitle: itemSixTitle,
      title:
        "Can I cancel my essentials or premium plan subscription at my time?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu felis tincidunt, hendrerit nulla a, vulputate mauris. Pellentesque mattis vehicula ante ac sagittis. Proin gravida sollicitudin pellentesque. Maecenas quis mi diam. In vel augue ultrices est placerat placerat nec quis tellus. Mauris maximus erat et pellentesque bibendum. Cras volutpat metus nunc, vitae pretium mi auctor vel. In ac porttitor lacus, id auctor nisl. Quisque dignissim, turpis quis scelerisque malesuada, velit massa viverra nulla, ac blandit mi odio ac lorem. Donec",
    },
  ];
  const infoClickedHandler = (e: any) => {
    if (e === itemOne && itemOne.current?.className === "hidden") {
      itemOne.current.className = "flex p-6";
      itemOneGeneral.current.className = "bg-neutral-100";
      itemOneTitle.current.className = "font-bold p-6";
    } else if (e === itemOne && itemOne.current.className === "flex p-6") {
      itemOne.current.className = "hidden";
      itemOneGeneral.current.className = "bg-white";
      itemOneTitle.current.className = "font-normal p-6";
    }
    if (e === itemTwo && itemTwo.current?.className === "hidden") {
      itemTwo.current.className = "flex p-6";
      itemTwoGeneral.current.className = "bg-neutral-100";
      itemTwoTitle.current.className = "font-bold p-6";
    } else if (e === itemTwo && itemTwo.current?.className === "flex p-6") {
      itemTwo.current.className = "hidden";
      itemTwoGeneral.current.className = "bg-white";
      itemTwoTitle.current.className = "font-normal p-6";
    }
    if (e === itemThree && itemThree.current?.className === "hidden") {
      itemThree.current.className = "flex p-6";
      itemThreeGeneral.current.className = "bg-neutral-100";
      itemThreeTitle.current.className = "font-bold p-6";
    } else if (e === itemThree && itemThree.current?.className === "flex p-6") {
      itemThree.current.className = "hidden";
      itemThreeGeneral.current.className = "bg-white";
      itemThreeTitle.current.className = "font-normal p-6";
    }
    if (e === itemFour && itemFour.current?.className === "hidden") {
      itemFour.current.className = "flex p-6";
      itemFourGeneral.current.className = "bg-neutral-100";
      itemFourTitle.current.className = "font-bold p-6";
    } else if (e === itemFour && itemFour.current?.className === "flex p-6") {
      itemFour.current.className = "hidden";
      itemFourGeneral.current.className = "bg-white";
      itemFourTitle.current.className = "font-normal p-6";
    }
    if (e === itemFive && itemFive.current?.className === "hidden") {
      itemFive.current.className = "flex p-6";
      itemFiveGeneral.current.className = "bg-neutral-100";
      itemFiveTitle.current.className = "font-bold p-6";
    } else if (e === itemFive && itemFive.current?.className === "flex p-6") {
      itemFive.current.className = "hidden";
      itemFiveGeneral.current.className = "bg-white";
      itemFiveTitle.current.className = "font-normal p-6";
    }

    if (e === itemSix && itemSix.current?.className === "hidden") {
      itemSix.current.className = "flex p-6";
      itemSixGeneral.current.className = "bg-neutral-100";
      itemSixTitle.current.className = "font-bold p-6";
    } else if (e === itemSix && itemSix.current?.className === "flex p-6") {
      itemSix.current.className = "hidden";
      itemSixGeneral.current.className = "bg-white";
      itemSixTitle.current.className = "font-normal p-6";
    }
  };

  return (
    <div className={FreqAskQuestionsStyle.FreqAskQuestions}>
      <h2 className="font-semibold text-4xl mb-14">
        Frequently Asked Questions
      </h2>
      <div className={FreqAskQuestionsStyle.FreqAskQuestionsElements}>
        {infoItemList.map((i) => {
          return (
            <div key={i.id} ref={i.refGeneral}>
              <div
                onClick={() => {
                  infoClickedHandler(i.refContent);
                  i.setIsChecked(!i.isChecked);
                }}
                className="flex row justify-between items-center border-t "
              >
                <h3 className="text-black p-6" ref={i.refTitle}>
                  {i.title}
                </h3>
                {i.isChecked ? (
                  <RemoveCircleOutlineIcon className="text-purple-800 m-4" />
                ) : (
                  <AddCircleOutlineIcon className="m-4" />
                )}
              </div>
              <div ref={i.refContent} className="hidden">
                <p>{i.content}</p>
              </div>
              {i.id === "6" ? <div className="border-b"></div> : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FreqAskQuestions;
