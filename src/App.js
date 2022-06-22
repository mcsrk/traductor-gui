import { useState } from "react";
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

  const handleClickTranslate = async () => {
    console.log("translate");
    console.log({ textToTranslate });
    const encodedString = Buffer.from(textToTranslate).toString("base64");
    console.log({ encodedString });

    axios({
      method: "post",
      url: "http://localhost:4567/translate",
      data: textToTranslate,
      headers: { "Content-Type": "text/html" },
    })
      .then((response) => {
        //handle success
        console.log(response);
        setTranslatedText(response.data);
      })
      .catch((response) => {
        //handle error
        console.log(response);
      });
  };

  return (
    <>
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
            <button className="traducir-button" onClick={handleClickTranslate}>
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
    </>
  );
};

export default App;
