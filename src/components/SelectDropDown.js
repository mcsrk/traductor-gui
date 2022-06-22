import React from "react";

const SelectDropDown = ({ style, setShowModal, selectedLanguage }) => {
  return (
    <div className="select-drop-down">
      <input value={selectedLanguage} />
    </div>
  );
};

export default SelectDropDown;
