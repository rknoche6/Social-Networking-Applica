import React, { useEffect, useState } from "react";

const AllPosts = () => {
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
      setPosts(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="all-posts-container">
      <center>
        <h1>Posts</h1>
      </center>
      {posts.map((post) => (
        <div className="card bg-light text-dark mb-2" key={post.post_id}>
          <div className="card-body text-center">{post.description}</div>
          <button className="btn btn-warning btn-small">Update</button>
          <button
            className="btn btn-danger"
            onClick={() => deletePost(post.post_id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllPosts;