import React, { useState } from "react";

const LearnUseState2 = () => {
  let [show, setShow] = useState(true);

  return (
    <div>
      {show ? <img src=".\favicon.ico"></img> : null}
      <br></br>
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        show
      </button>
      <br></br>
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        hide
      </button>
    </div>
  );
};

export default LearnUseState2;
