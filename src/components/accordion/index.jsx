import { useState } from "react";
import data from "./data";

import "./styles.css";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnablebleMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelection = (getCurrentID) => {
    setSelected(getCurrentID === selected ? null : getCurrentID);
  };

  const handleMultiSelection = (getCurrentID) => {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentID = cpyMultiple.indexOf(getCurrentID)

    console.log(findIndexOfCurrentID);
    if(findIndexOfCurrentID === -1) cpyMultiple.push(getCurrentID)
    else cpyMultiple.splice(findIndexOfCurrentID, 1)

    setMultiple(cpyMultiple)
  };
  console.log(selected,multiple)
  return (
    <div className="wrapper">
      <button onClick={() => setEnablebleMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleSelection(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span className="arrow">+</span>
              </div>
              {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                <div className="content">
                  <p>{item.answer}</p>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>
            <p>No data found!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
