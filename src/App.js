import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import NavigationBar from "./components/layout/navbar/NavigationBar";
import SignUpPage from "./pages/signup/SignUpPage";
import LoginPage from "./pages/login/LoginPage";
import Dashboard from "./pages/dashboard/Dashboard";
import { connect } from "react-redux";
import { storeUser } from "./store/actions/userAction";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { storeUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      storeUser(user);
      // console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { user } = this.props;
    return (
      <div className="App">
        <NavigationBar />
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <HomePage />}
          </Route>
          <Route path="/signup">{!user ? <SignUpPage /> : <Dashboard />}</Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route to="/dashboard">
            {user ? <Dashboard /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = { storeUser };
const mapStateToProps = state => {
  const { user } = state.auth;
  return {
    user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
