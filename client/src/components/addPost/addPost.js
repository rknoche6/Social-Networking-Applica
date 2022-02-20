import React, { useState } from "react";

const AddPost = () => {
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
      window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="addPost-Container">
      <center>
        <h1>Add Post</h1>
      </center>
      <form className="d-flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          id="add-post"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-primary">Post</button>
      </form>
    </div>
  );
};

export default AddPost;