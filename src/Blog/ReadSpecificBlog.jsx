import axios from "axios";
import React, { useEffect, useState } from "react";

const ReadSpecificBlog = () => {
  let [data, setData] = useState({});
  let blogId = "4f9dcd0be8b466d34cbf9d2";
  let getBlog = async () => {
    let result = await axios({
      url: `http://localhost:8000/api/v1/blogs/4f9dcd0be8b466d34cbf9d2`,
      method: "GET",
    });
    setData(result.data.data);
  };
  useEffect(() => {
    getBlog();
  }, []);

  return (
    <div>
      <p>title={data.title}</p>
      <p>description={data.description}</p>
    </div>
  );
};
export default ReadSpecificBlog;
