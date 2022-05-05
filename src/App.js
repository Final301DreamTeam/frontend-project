import React from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Content from "./Content";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
// import Profile from "./Profile";

class App extends React.Component {
  render() {
    return (
      <>
        {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        {this.props.auth0.isAuthenticated ? <Content /> : <h2>Please login</h2>}
      </>
    );
  }
}

export default withAuth0(App);
