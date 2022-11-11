import React from "react";
import AppearanceStyle from "../../../styles/customization-styles/CustomizationEditSections/AppearanceStyle.module.scss";
import { useTemplateContext } from "../../../Context/TemplateContext";

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
    <div>
      <div className={AppearanceStyle.Stage}>
        <div>2</div>
        <h2 className="mr-1">Appearance</h2>
        <p>(Size, colors, logo)</p>
      </div>
      <div className={AppearanceStyle.CustomizeSizeWraper}>
        <p>Size</p>
        <div className={AppearanceStyle.sizes}>
          {sizes.map((s: { title: string; value: string }) => {
            return (
              <div
                className={
                  size.title === s.title ? AppearanceStyle.sizeSelected : ""
                }
                key={s.title}
                onClick={() => {
                  SetSize(s);
                }}
              >
                <p>{s.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={AppearanceStyle.CustomizePositionWraper}>
        <p>Position</p>
        <div className={AppearanceStyle.Positions}>
          {positions.map((p: { value: string; WraperStyle: string }) => {
            return (
              <div
                className={
                  position.value === p.value
                    ? AppearanceStyle.sizeSelected
                    : AppearanceStyle.positionsEach
                }
                key={p.value}
                onClick={() => {
                  SetPosition(p);
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div className={AppearanceStyle.CustomizeColorsWraper}>
        <p className="mb-4">Colors</p>
        <div className={AppearanceStyle.Colors}>
          {colors.map((c: { color: string; value: string }) => {
            return (
              <div
                style={{
                  backgroundColor: c.color,
                  width: "42px",
                  height: "42px",
                  marginRight: "10px",
                  borderRadius: "10px",
                }}
                className={
                  color.color === c.color
                    ? AppearanceStyle.colorSelected
                    : AppearanceStyle.colorsEach
                }
                key={c.color}
                onClick={() => {
                  SetColor(c);
                }}
              ></div>
            );
          })}
        </div>
      </div>
      <div className={AppearanceStyle.CustomizeImageWraper}>
        <p className="mb-4">Upload Logo</p>
        <div className={AppearanceStyle.Image}>
          <input
            className={AppearanceStyle.fileInput}
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
