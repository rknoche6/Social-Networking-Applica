import React, { useState } from "react";
import auth from './../../auth'

const AddPost = (props) => {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error.message);
    }
    setDescription("")
  };
  return (
    <div className="addPost-Container">
      <center>
        <h1>Add Post</h1>
      </center>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          id="add-tweet"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* <button className="btn btn-primary">Post</button> */}
        <button

          className="btn btn-success"
        >Post</button>
      </form>
    </div>
  );
};

export default AddPost;