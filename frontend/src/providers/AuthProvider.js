import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

export const AuthContext = React.createContext();

//export const AuthConsumer = AuthContext.AuthConsumer;

export class AuthProvider extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  state = {
    isLogged: false
  };

  render() {
    return (
      <div>
        <AuthContext.Provider value={this.state}>
          {this.props.children}
        </AuthContext.Provider>
      </div>
    );
  }
}
