import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import NavigationBar from "./components/layout/navbar/NavigationBar";
import SignUpPage from "./pages/signup/SignUpPage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
