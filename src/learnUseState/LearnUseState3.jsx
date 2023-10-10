import React, { useState } from "react";

const LearnUseState3 = () => {
  let [showError, setShowError] = useState(true);
  return (
    <div>
      {showError ? <div style={{ color: "red" }}>this is error</div> : null}
      <br></br>
      <button
        onClick={() => {
          setShowError(true);
        }}
      >
        show error
      </button>
      <br></br>

      <button
        onClick={() => {
          setShowError(false);
        }}
      >
        hide error
      </button>
    </div>
  );
};

export default LearnUseState3;
