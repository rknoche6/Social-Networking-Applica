import React from "react";
import AddPost from "./../AddPost/addPost";
import AllPosts from "./../AllPosts/allPosts";

const HomePage = (props) => {
  console.log("homeeee", props.username)
  return (
    <div id="homepage-container">
      <AddPost />
      <br></br>
      <AllPosts username={props.username} />
    </div>
  );
};

export default HomePage;