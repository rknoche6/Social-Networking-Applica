import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/homePage";
import LogInPage from "./pages/Login/loginPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LogInPage} exact />
        <Route path="/" component={HomePage} exact />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;