import React, { PureComponent } from 'react'
import { Provider } from 'unistore/react'
import createStore from 'unistore'

let initialState = {
  appState: 'unauthenticated',
  name: '',
  picture: ''
}

let store = createStore(initialState)

export class AuthProvider extends PureComponent {
  render () {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}
