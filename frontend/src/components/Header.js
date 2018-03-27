console.log(`header`);
import React from "react";
// import { Link } from "react-router-dom";
import TwitterLogin from "react-twitter-auth/lib/react-twitter-auth-component.js";
import { connect } from 'unistore/react'

import { removeItem } from "./localstorage";

//   <header>
//     <nav>
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/dashboard'>Dashboard</Link></li>
//         <li><Link to='/masternodes'>Masternodes</Link></li>
//       </ul>
//     </nav>
//   </header>
const Header = ({ appState, login, logout }) => (
  <header id="header" className="alt">
    <h1 id="logo">
      <a href="index.html">
        Twenty <span>by HTML5 UP</span>
      </a>
    </h1>
    <nav id="nav">
      <ul>
        <li className="current">
          <a href="index.html">Welcome</a>
        </li>
        <li className="submenu">
          <a href="#">Layouts</a>
          <ul>
            <li>
              <a href="left-sidebar.html">Left Sidebar</a>
            </li>
            <li>
              <a href="right-sidebar.html">Right Sidebar</a>
            </li>
            <li>
              <a href="no-sidebar.html">No Sidebar</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li className="submenu">
              <a href="#">Submenu</a>
              <ul>
                <li>
                  <a href="#">Dolore Sed</a>
                </li>
                <li>
                  <a href="#">Consequat</a>
                </li>
                <li>
                  <a href="#">Lorem Magna</a>
                </li>
                <li>
                  <a href="#">Sed Magna</a>
                </li>
                <li>
                  <a href="#">Ipsum Nisl</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          {/* {appState === "unauthenticated" && <a onClick={login} href="#" className="button special">
            Log In
          </a>} */}
          {appState === "authenticated" && <a href="#" onClick={logout} className="button special">
            Log Out
          </a>}
        </li>
      </ul>
    </nav>
  </header>
);

// If actions is a function, it gets passed the store:
const actions = store => ({
  // Actions can just return a state update:
  logout() {
    removeItem('jwtToken');
    return { appState: "unauthenticated" };
  },
});
export default connect('appState', actions)(Header);
