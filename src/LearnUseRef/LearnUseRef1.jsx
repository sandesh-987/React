import React, { useRef } from "react";

const LearnUseRef1 = () => {
  let inputRef2 = useRef();
  let inputRef1 = useRef();
  let nameRef = useRef();
  let addressRef=useRef()
  return (
    <div>
      <form>
        <div ref={addressRef}>my address is bhaktapur</div>
        <div ref={nameRef}>my name is sandesh</div>
        <input ref={inputRef1}></input>
        <br></br>
        <input ref={inputRef2}></input>
        <br></br>
        <br></br>
        <button
          type="button"
          onClick={() => {
            inputRef1.current.focus();
          }}
        >
          Click me to focus input1
        </button>
        <br></br>
        <button
          type="button"
          onClick={() => {
            inputRef2.current.focus();
            inputRef2.current.style.backgroundcolor = "red";
          }}
        >
          Click me to focus input2
        </button>
        <br></br>
        <button
          type="button"
          onClick={() => {
            nameRef.current.style.color = "blue";
          }}
        >
          change color of div
        </button><br></br>
        <button
          type="button"
          onClick={() => {
            addressRef.current.style.color = "yellow";
          }}
        >
          change color of div
        </button>
              </form>
    </div>
  );
};

export default LearnUseRef1;
