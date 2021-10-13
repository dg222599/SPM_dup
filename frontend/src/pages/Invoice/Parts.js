import React, { useState } from "react";
import "./Parts.css";
// import { CheckBox } from "react-native";
import PartsL from "./PartsL.js"
 
function ModalP({ setOpenModalP }) {
  const [checkedState, setCheckedState] = useState(
    new Array(PartsL.length).fill(false)
  );
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
 
    setCheckedState(updatedCheckedState);
  }
 
  return (
  
    <div className="modalBackgroundP">
      <div className="scroll-componentP"> 
        <div className="modalContainerP">
          <div className="titleCloseBtnP">
            <button
              onClick={() => {
                setOpenModalP(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>Choose Parts</h1>
          </div>
          <ul className="PartsL-list">
          {PartsL.map(({name}, index) => {
            return (
              <li key={index}>
                <div className="PartsL-list-item">
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
                setOpenModalP(false);
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
            <button>Add</button>
          </div>
        </div>
      </div> 
    </div>
    
  );
}
 
export default ModalP;