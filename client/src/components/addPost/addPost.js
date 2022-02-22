import React, { useState } from "react";


const AddPost = (props) => {
  const [description, setDescription] = useState("");

  const getUserId = () => {
    return props.users.filter(user => user.username === props.username)[0].user_id
  }



  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(`http://localhost:5000/posts/${getUserId()}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      props.setRender(true)

    } catch (error) {
      console.error(error.message);
    }
    setDescription("")
  };


  return (
    <div className="addPost-Container">
      <center>
        <br></br>
        <form className="d-flex" onSubmit={onSubmitForm}>
          <input
            type="text"
            id="add-post"
            className="form w-50 h-1000000"
            placeholder="Whats happening?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button

            className="btn btn-outline-primary"
          >Add Post</button>
        </form>
      </center>
    </div>
  );
};

export default AddPost;
