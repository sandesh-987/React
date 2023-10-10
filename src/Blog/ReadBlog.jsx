import axios from "axios";
import React, { useEffect, useState } from "react";

const ReadBlog = () => {
  let [blog, setBlog] = useState([]);
  let getAllBlog = async () => {
    let result = await axios({
      url: `http://localhost:8000/api/v1/blogs`,
      method: `GET`,
    });
    setBlog(result.data.data.results);
  };
  useEffect(() => {
    getAllBlog();
  }, []);
  return (
    <div>
      {blog.map((value, i) => {
        return (
          <div key={i} style={{ border: "3px red", marginBottom: "10px" }}>
            <p>title of blog {value.title}</p>
            <p>description of blog {value.description}</p>
            <button
              onClick={async () => {
                let result = await axios({
                  url: `http://localhost:8000/api/v1/blogs`,
                  method: "DELETE",
                });
                getAllBlog();
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadBlog;
