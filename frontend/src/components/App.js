import React, { Component } from 'react'
import { AuthProvider } from '../providers/AuthProvider'
import Routes from '../routes'

class App extends Component {
  render () {
    return (
      <AuthProvider>
        <Routes />
      </AuthProvider>
    )
  }
}

export default App
