import axios from "axios";
import React, { useState } from "react";

const FormOne = () => {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          let data = {
            title: title,
            description: description,
          };
          let results = await axios({
            url: `http://localhost:8000/api/v1/blogs`,
            method: `POST`,
            data: data,
          });
        }}
      >
        <div>
          <label htmlFor="title">Title</label>
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
          <label htmlFor="description">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></input>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default FormOne;
