import { useState } from "react";
import React from "react";

import TextBox from "./components/TextBox";
import axios from "axios";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [inputLanguage, setInputLanguage] = useState("HTML");
  const [outputLanguage, setOutputLanguage] = useState("HAML");
  const [textToTranslate, setTextToTranslate] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleClickTranslate = async () => {
    console.log("translate");
    console.log({ textToTranslate });
    const encodedString = Buffer.from(textToTranslate).toString("base64");
    console.log({ encodedString });

    var config = {
      method: "post",
      url: "http://0.0.0.0:4567/translate",
      headers: {
        "Content-Type": "text/html",
      },
      data: textToTranslate,
    };

    axios(config)
      .then(function(response) {
        setTranslatedText(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="title">TRADUCTOR DE HTML A HAML</div>
      <div className="app">
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
          isOutput={true}
        />
      </div>
      <div className="footer">
        <div className="text">Lenguajes de programación</div>
        <br></br>
        <div className="text">Jhon Acosta</div>
        <div className="text">Andryut Huertas</div>
        <div className="text">David Mateus</div>
        <br></br>

        <div className="text"> 2022-1</div>
      </div>
    </>
  );
};

export default App;
