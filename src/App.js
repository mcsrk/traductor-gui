import { useEffect, useState } from "react";
import React from "react";

import TextBox from "./components/TextBox";
import Arrows from "./components/Arrows";
import Button from "./components/Button";
import Modal from "./components/Modal";
import axios from "axios";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputLanguage, setInputLanguage] = useState("HTML");
  const [outputLanguage, setOutputLanguage] = useState("Slim");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const translate = async () => {
    console.log("trainsalte");
    const data = {
      textToTranslate,
      outputLanguage,
      inputLanguage,
    };
    const response = await axios.get("http://localhost:8000/translation", {
      params: data,
    });
    console.log("response", response);
    setTranslatedText(response.data);
  };

  const handleClick = () => {
    console.log({ textToTranslate });
  };

  return (
    <div className="app">
      {!showModal && (
        <>
          <TextBox
            style="input"
            setShowModal={setShowModal}
            selectedLanguage={inputLanguage}
            setTextToTranslate={setTextToTranslate}
            textToTranslate={textToTranslate}
            setTranslatedText={setTranslatedText}
          />
          <button className="traducir-button" onClick={handleClick}>
            Traducir
          </button>
          <TextBox
            style="output"
            setShowModal={setShowModal}
            selectedLanguage={outputLanguage}
            translatedText={translatedText}
          />
          {/* <div className="button-container" onClick={translate}>
            <Button />
          </div> */}
        </>
      )}
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          chosenLanguage={
            showModal === "input" ? inputLanguage : outputLanguage
          }
          setChosenLanguage={
            showModal === "input" ? setInputLanguage : setOutputLanguage
          }
        />
      )}
    </div>
  );
};

export default App;
