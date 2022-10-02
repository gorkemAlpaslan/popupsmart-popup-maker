import React from "react";
import homeStyle from "../../../styles/Home.module.scss";
import { useTemplateContext } from "../../Context/TemplateContext";

const Content = () => {
  const {
    convertFile,
    SetContentInputOne,
    SetContentInputTwo,
    SetContentInputThree,
    SetContentInputFour,
    refInputOne,
    refInputTwo,
    refInputThree,
    refInputFour,
    StageThree,
  } = useTemplateContext();
  return (
    <div className={homeStyle.ContentPageEdit}>
      <div className={homeStyle.Stage} ref={StageThree}>
        <div>3</div>
        <h2>Content</h2>
      </div>
      <div>
        <p>Edit Your Content</p>
      </div>
      <input
        className={homeStyle.ContentPageInput}
        placeholder="Sign up"
        ref={refInputOne}
        onChange={() => {
          SetContentInputOne(refInputOne.current?.value);
        }}
      ></input>
      <input
        className={homeStyle.ContentPageInput}
        placeholder="Enter your email"
        ref={refInputTwo}
        onChange={() => {
          SetContentInputTwo(refInputTwo.current?.value);
        }}
      ></input>
      <input
        className={homeStyle.ContentPageInput}
        placeholder="Sign up"
        ref={refInputThree}
        onChange={() => {
          SetContentInputThree(refInputThree.current?.value);
        }}
      ></input>
      <input
        className={homeStyle.ContentPageInput}
        placeholder="By singning up, you agree to Privacy Policy"
        ref={refInputFour}
        onChange={() => {
          SetContentInputFour(refInputFour.current?.value);
        }}
      ></input>
      <div className={homeStyle.Image}>
        <input
          className={homeStyle.fileInput}
          type="file"
          onChange={(e) => {
            convertFile(e.target.files, "image");
          }}
        />
      </div>
    </div>
  );
};

export default Content;
