import React from "react";
import SelectDropDown from "./SelectDropDown";
import Highlight from "react-highlight";

const TextBox = ({
  style,
  setShowModal,
  selectedLanguage,
  setTextToTranslate,
  textToTranslate,
  translatedText,
  setTranslatedText,
  isOutput,
}) => {
  const handleClickDelete = () => {
    setTextToTranslate("");
    setTranslatedText("");
  };
  return (
    <>
      <div className={style}>
        <SelectDropDown
          style={style}
          setShowModal={setShowModal}
          selectedLanguage={selectedLanguage}
        />

        {!isOutput ? (
          <textarea
            disabled={style === "output"}
            className={style}
            placeholder={
              style == "input" ? "Ingrese código HTML" : "Traducción"
            }
            onChange={(e) => setTextToTranslate(e.target.value)}
            value={style === "input" ? textToTranslate : translatedText}
          />
        ) : translatedText ? (
          <Highlight language="haml">{translatedText}</Highlight>
        ) : (
          <textarea
            disabled={style === "output"}
            className={style}
            placeholder={
              style == "input" ? "Ingrese código HTML" : "Traducción"
            }
            onChange={(e) => setTextToTranslate(e.target.value)}
            value={style === "input" ? textToTranslate : translatedText}
          />
        )}

        {style === "input" && (
          <div className="delete" onClick={handleClickDelete}>
            ˟
          </div>
        )}
      </div>
    </>
  );
};

export default TextBox;
