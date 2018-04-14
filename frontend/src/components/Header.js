import React from 'react'
// import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component.js'
import { connect } from 'unistore/react'
import { removeItem } from './localstorage'

const Header = ({ appState, name, picture, logout }) => (
  <header id='header' className='alt'>
    <h1 id='logo'>
      <a href='index.html'>
        {name && (
          <img
            src={picture}
            width='40px'
            height='40px'
            style={styles.image}
          />
        )}
      </a>
    </h1>
    <nav id='nav'>
      <ul>
        <li className='current'>
          <p>{name}</p>
        </li>
        <li>
          {appState === 'authenticated' && <a href='#' onClick={logout} className='button special'>
            Log Out
          </a>}
        </li>
      </ul>
    </nav>
  </header>
)

const styles = {
  image: {
    borderRadius: '40px',
    top: '60px',
    left: '30px'
  }
}

// If actions is a function, it gets passed the store:
const actions = store => ({
  // Actions can just return a state update:
  logout () {
    removeItem('jwtToken')
    return { appState: 'unauthenticated' }
  }
})
export default connect(['appState', 'name', 'picture'], actions)(Header)
