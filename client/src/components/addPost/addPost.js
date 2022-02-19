import React, { useState } from "react";

const AddPost = () => {
  const [description, setDescription] = useState("");
  return (
    <div className="addPost-Container">
      <h1>Add Post</h1>
      <form>
        <input
          type="text"
          id="add-post"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Post</button>
      </form>
    </div>
  );
};

export default AddPost;