import React, { useEffect, useState } from "react";
import EditPost from "./../EditPost/editPost";

const AllPosts = (props) => {
  const [posts, setPosts] = useState([]);

  const deletePost = async (id) => {
    try {
      const deletePost = await fetch(`http://localhost:5000/posts/${id}`, {
        method: "DELETE",
      });
      setPosts(posts.filter((post) => post.post_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };
  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/posts");
      const jsonData = await response.json();
      setPosts(jsonData.reverse());
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, [posts]);

  return (
    <div className="all-posts-container">
      <center>
        <h1>Posts</h1>
      </center>
      {posts.reverse().map((post) => (
        <div className="card" key={post.post_id}>
          <div className="card-body">
            <h4 className="card-title">{props.username}</h4>
            <h4 className="card-title">{post.description}</h4>
            <p className="card-text">{}</p>
            <EditPost post={post} />
            <button
              className="btn btn-danger m-1"
              onClick={() => deletePost(post.post_id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;