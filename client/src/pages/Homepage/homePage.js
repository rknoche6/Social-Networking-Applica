import React from "react";
import AddPost from "../../components/addPost/addPost";
import AllPosts from "../../components/feed/feed";

const HomePage = () => {
  return (
    <div id="homepage-container">
      <AddPost />
      <br></br>
      <AllPosts />
    </div>
  );
};

export default HomePage;