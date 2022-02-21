import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogInPage from "./pages/Login/loginPage";
import PrimaryPage from "./pages/primary/primaryPage";
import SignUpPage from "./pages/signUp/signUpPage";
import HomePage from "./pages/Homepage/homePage";
import Navigation from "./components/navbar/navBar";

function App() {
  const [auth, setAuth] = useState(false)
  const [username, setUsername] = useState("")

  return (
    <BrowserRouter>
      <Navigation auth={auth} />
      <Switch>
        <Route path="/" component={PrimaryPage} exact />
        <Route path="/login" render={(props) => (
          <LogInPage {...props} auth={setAuth} username={setUsername} />
        )} exact />
        <Route path="/signup" render={(props) => (
          <SignUpPage {...props} auth={setAuth} username={setUsername} />
        )} exact />
        <PrivateRoute path="/home" component={HomePage} username={username} exact />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;