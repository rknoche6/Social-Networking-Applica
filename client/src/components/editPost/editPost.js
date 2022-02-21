import React, { useState } from "react";

const EditPost = (props) => {
  const [description, setDescription] = useState(props.post.description);

  const updateDescription = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/posts/${props.post.post_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      props.setRender(true)
      // window.location = "/";
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="all-posts-container">
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${props.post.post_id}`}
      >
        Edit
      </button>

      <div
        className="modal"
        id={`id${props.post.post_id}`}
        onClick={() => setDescription(props.post.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Post</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={() => setDescription(props.post.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(props.post.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPost;