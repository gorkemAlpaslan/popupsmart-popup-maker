import React from "react";
import ContentStyle from "./ContentStyle.module.scss";
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
    <div className={ContentStyle.ContentPageEdit}>
      <div className={ContentStyle.Stage} ref={StageThree}>
        <div>3</div>
        <h2>Content</h2>
      </div>
      <div>
        <p className="mb-4">Edit Your Content</p>
      </div>
      <input
        className={ContentStyle.ContentPageInput}
        placeholder="Title"
        ref={refInputOne}
        onChange={() => {
          SetContentInputOne(refInputOne.current?.value);
        }}
      ></input>
      <input
        className={ContentStyle.ContentPageInput}
        placeholder="Explenation"
        ref={refInputTwo}
        onChange={() => {
          SetContentInputTwo(refInputTwo.current?.value);
        }}
      ></input>
      <input
        className={ContentStyle.ContentPageInput}
        placeholder="Sign up"
        ref={refInputThree}
        onChange={() => {
          SetContentInputThree(refInputThree.current?.value);
        }}
      ></input>
      <input
        className={ContentStyle.ContentPageInput}
        placeholder="By singning up, you agree to Privacy Policy"
        ref={refInputFour}
        onChange={() => {
          SetContentInputFour(refInputFour.current?.value);
        }}
      ></input>
      <p className="mb-4">Upload image</p>
      <div className={ContentStyle.Image}>
        <input
          className={ContentStyle.fileInput}
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
