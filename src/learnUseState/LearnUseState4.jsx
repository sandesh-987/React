import React, { useState } from "react";

const LearnUseState4 = () => {
  let [showError, setShowError] = useState(true);
  return (
    <div>
      {showError ? <div> this is Error</div> : null}

      <button
        onClick={() => {
          setShowError(!showError);
        }}
      >
        {
            showError?"hide":"show"
        }
      </button>
    </div>
  );
};

export default LearnUseState4;
