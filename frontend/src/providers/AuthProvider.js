import React, { PureComponent } from "react";
import { render } from "react-dom";

import { Provider } from 'unistore/react';

import createStore from 'unistore'

let initialState = { appState: "unauthenticated" };

let store = createStore(initialState);

export class AuthProvider extends PureComponent {
  render() {
    return (
      <Provider store={store}>
          {this.props.children}
      </Provider>
    );
  }
}
