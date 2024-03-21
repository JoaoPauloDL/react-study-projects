import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentID) => {
    setSelected(getCurrentID === selected ? null : getCurrentID);
  };

  return (
    <div className="wrapper">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div className="item">
            <div
              onClick={() => handleSingleSelection(item.id)}
              className="title"
            >
              <h3>{item.question}</h3>
              <span>+</span>
            </div>
            {selected === item.id ? (
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
  );
};

export default Accordion;
