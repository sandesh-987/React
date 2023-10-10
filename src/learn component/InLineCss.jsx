import React from "react";

const InLineCss = () => {
  let bestFriendList =["nitan","ram","hari"]
  let divBestFriendList = bestFriendList.map((value,i)=>{
    return <div>my best friend is {value}</div>
  })
    return (
    <div>
      <p style={{ background: "red", color: "white", padding: "30px" }}>
        my name is sandesh
      </p>
      <p className="bg-blue"> i m 22</p>
      <p style={{ border: "solid red 10px" }}>i live in bhaktapur</p>
      <button
        onClick={() => {
          console.log("BUTTON IS CLICKED");
        }}
        style={{ cursor: "pointer" }}
      >
        CLICK ME
      </button>
      <p
        onClick={() => {
          console.log("we can use onClick in any tag");
        }}
        style={{ cursor: "pointer" }}
      >
        nitan
      </p>
      {divBestFriendList}
    </div>
  );
};

export default InLineCss;
