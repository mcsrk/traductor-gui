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

        <textarea
          disabled={style === "output"}
          className={style}
          placeholder={style == "input" ? "Ingrese código HTMl" : "Traducción"}
          onChange={(e) => setTextToTranslate(e.target.value)}
          value={style === "input" ? textToTranslate : translatedText}
        />
        {/* <Highlight language="javascript"></Highlight> */}

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
