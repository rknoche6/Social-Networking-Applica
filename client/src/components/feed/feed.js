import React, { useEffect, useState, useRef } from "react";
import EditPost from "../EditPost/editPost";
import Alert from 'react-bootstrap/Alert'

const Feed = (props) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false)

  const getUserId = () => {
    return props.users.filter(user => user.username === props.username)[0].user_id
  }

  const deletePost = async (id, userId) => {
    if (getUserId() === userId) {
      try {
        const deletePost = await fetch(`http://localhost:5000/posts/${id}`, {
          method: "DELETE",
        });
        setPosts(posts.filter((post) => post.post_id !== id));
      } catch (error) {
        console.error(error.message);
      }
    } else {
      setError(true)
    }
  };
  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/posts");
      const jsonData = await response.json();
      setPosts(jsonData);
      props.setRender(false)
    } catch (error) {
      console.error(error.message);
    }
  };



  useEffect(() => {
    getPosts();
  }, [props.render]);

  console.log(props.users)


  return (
    <div>
      <center>
        <div className="all-posts-container">


          <h1>Posts</h1>
          {error &&
            <Alert variant={"danger"}>
              Not your post!
      </Alert>
          }

          {posts.reverse().map((post) => (
            <div className="card" key={post.post_id}>
              <div className="card-body">
                <h4 className="card-title">@{
                  props.users.filter(
                    (user) => user.user_id === post.user_fk_id
                  )[0].username
                }</h4>
                <h4 className="card-text">{post.description}</h4>
                <EditPost post={post} setRender={props.setRender} userId={getUserId()} postUserId={post.user_fk_id} />
                <button
                  className="btn btn-sm btn-outline-danger m-1"
                  onClick={() => deletePost(post.post_id, post.user_fk_id)}
                >
                  Delete
            </button>
              </div>
            </div>
          ))}
        </div>
      </center>
      <div>
      </div>
    </div>
  );
};

export default Feed;


