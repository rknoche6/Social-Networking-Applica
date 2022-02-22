import React, { useState, useEffect } from "react";
import Alert from 'react-bootstrap/Alert'
import AddPost from "../../components/AddPost/addPost";
import Feed from "../../components/feed/feed"

const HomePage = (props) => {
  const [users, setUsers] = useState("")
  const [render, setRender] = useState(false)

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const jsonData = await response.json();
      setUsers(jsonData.reverse());
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      {users &&
        <div id="homepage-container">
          <center><Alert variant={"success"}>Welcome to Facebike {props.username}</Alert></center>

          <AddPost setRender={setRender} auth={props.auth} username={props.username} users={users} />
          <br></br>

          <Feed users={users} username={props.username} render={render} setRender={setRender} />
        </div>
      }
    </div>
  );
};

export default HomePage;
