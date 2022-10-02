import React from "react";
import homeStyle from "../../../styles/Home.module.scss";
import { useTemplateContext } from "../../Context/TemplateContext";

const Appearance = () => {
  const {
    size,
    SetSize,
    position,
    SetPosition,
    color,
    SetColor,
    sizes,
    positions,
    colors,
    convertFile,
  } = useTemplateContext();
  return (
    <div className={homeStyle.AppearancePageEdit}>
      <div className={homeStyle.Stage}>
        <div>2</div>
        <h2>Appearance (Size, colors, logo)</h2>
      </div>
      <div className={homeStyle.CustomizeSizeWraper}>
        <p>Size</p>
        <div className={homeStyle.sizes}>
          {sizes.map((s: string) => {
            return (
              <div
                className={size === s ? homeStyle.sizeSelected : ""}
                key={s}
                onClick={() => {
                  SetSize(s);
                }}
              >
                <p>{s}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={homeStyle.CustomizePositionWraper}>
        <p>Position</p>
        <div className={homeStyle.Positions}>
          {positions.map((p: string) => {
            return (
              <div
                className={
                  position === p
                    ? homeStyle.sizeSelected
                    : homeStyle.positionsEach
                }
                key={p}
                onClick={() => {
                  SetPosition(p);
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div className={homeStyle.CustomizeColorsWraper}>
        <p>Colors</p>
        <div className={homeStyle.Colors}>
          {colors.map((c: string) => {
            return (
              <div
                style={{
                  backgroundColor: c,
                  width: "42px",
                  height: "42px",
                  marginRight: "10px",
                  borderRadius: "10px",
                }}
                className={
                  color === c ? homeStyle.colorSelected : homeStyle.colorsEach
                }
                key={c}
                onClick={() => {
                  SetColor(c);
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div className={homeStyle.CustomizeImageWraper}>
        <p>Upload Logo</p>
        <div className={homeStyle.Image}>
          <input
            className={homeStyle.fileInput}
            type="file"
            onChange={(e) => {
              convertFile(e.target.files, "icon");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Appearance;
