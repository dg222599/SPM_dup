import React, { useState } from "react";
import "./Services.css";
// import { CheckBox } from "react-native";
import ServiceL from "./ServiceL.js";

function ModalS({ setOpenModal, serviceTotal, setServiceTotal }) {
  const [checkedState, setCheckedState] = useState(
    new Array(ServiceL.length).fill(false)
  );
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
  };

  const AddServices = () => {};

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Choose Services</h1>
        </div>
        <ul className="ServiceL-list">
          {ServiceL.map(({ name }, index) => {
            return (
              <li key={index}>
                <div className="ServiceL-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button onClick={AddServices}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default ModalS;
