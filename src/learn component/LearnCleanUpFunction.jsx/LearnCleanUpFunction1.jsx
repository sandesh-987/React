import React, { useEffect } from "react";

const LearnCleanUpFunction1 = () => {
  console.log("hello");
  useEffect(() => {
    console.log(" i m useEffect");
    let myInterval = setInterval(() => {
      console.log(" i am set  interval");
    }, 2000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);
  return <div>LearnCleanUpFunction</div>;
};

export default LearnCleanUpFunction1;
