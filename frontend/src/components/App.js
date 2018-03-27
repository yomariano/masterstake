import React, { Component } from "react";
import ReactDOM from "react-dom";
import pic02 from "../images/pic02.jpg";
import pic03 from "../images/pic03.jpg";
import pic04 from "../images/pic04.jpg";
import Header from "./Header";
import Banner from "./Banner";
import Main from "./Main";
 import { AuthProvider } from "../providers/AuthProvider";

// import ErrorBoundary from "./ErrorBoundary";
// import PropTypes from "prop-types";

class App extends Component {
  
  render() {
    return (
		 <AuthProvider>
			<div>
				<Header />
				<Main />
				<Banner />
			</div>
		 </AuthProvider>
    );
  }
}

export default App;