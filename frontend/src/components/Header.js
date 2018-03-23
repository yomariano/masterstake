console.log(`header`);
import React from "react";
// import { Link } from "react-router-dom";
import TwitterLogin from "react-twitter-auth/lib/react-twitter-auth-component.js";
import {AuthContext} from "../providers/AuthProvider";

//   <header>
//     <nav>
//       <ul>
//         <li><Link to='/'>Home</Link></li>
//         <li><Link to='/dashboard'>Dashboard</Link></li>
//         <li><Link to='/masternodes'>Masternodes</Link></li>
//       </ul>
//     </nav>
//   </header>
const Header = () => (
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
          <AuthContext.Consumer>
            {context => (
              <React.Fragment>
				  {(function() {
                switch(context.isLogged) {
                    case true:
                        return <a href="#" className="button special">
								Log In
								</a>;
                    case false:
                        return <a href="#" className="button special">
								Log Out
								</a>
                    default:
                        return null;
                }
            })()}
                
              </React.Fragment>
            )}
          </AuthContext.Consumer>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
