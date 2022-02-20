import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogInPage from "./pages/Login/loginPage";
import PrimaryPage from "./pages/primary/primaryPage";
import SignUpPage from "./pages/signUp/signUpPage";
import HomePage from "./pages/Homepage/homePage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PrimaryPage} exact />
        <Route path="/login" component={LogInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <Route path="/home" component={HomePage} exact />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;