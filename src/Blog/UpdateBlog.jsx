import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateBlog = () => {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let blogID = "64f9dcd0be8b466d34cbf9d2";
  const getAllBlog = async () => {
    let result = await axios({
      url: `http://localhost:8000/api/v1/blogs/${blogID}`,
      method: `GET`,
    });
    let Blog = result.data.data;
    setTitle(Blog.title);
    setDescription(Blog.description);
  };
  useEffect(() => {
    getAllBlog();
  }, []);
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          let data = {
            title: title,
            description: description,
          };

          // console.log(data);
          let results = await axios({
            url: `http://localhost:8000/api/v1/blogs/${blogID}`,
            method: "PATCH",
            data: data,
          });
        }}
      >
        <div>
          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="description">description</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default UpdateBlog;
