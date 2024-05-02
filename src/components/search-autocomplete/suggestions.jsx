import React from "react";

const Suggestions = ({ data, handleClick }) => {
  return (
    
      <ul style={{ listStyleType: "none" }}>
        {data && data.length
          ? data.map((item, index) => <li onClick={handleClick} key={index}>{item}</li>)
          : null}
      </ul>
    
  );
};

export default Suggestions;
