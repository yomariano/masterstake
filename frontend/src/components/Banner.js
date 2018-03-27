import React, { Component } from "react";
import TwitterLogin from "react-twitter-auth/lib/react-twitter-auth-component.js";
import GoogleLogin from "react-google-login";

import { connect } from 'unistore/react';

// const Banner = () => (
//     <section id="banner">

//     <div className="inner">

//         <header>
//             <h2>TWENTY</h2>
//         </header>
//         <p>This is <strong>Twenty</strong>, a free
//         <br />
//         responsive template
//         <br />
//         by <a href="http://html5up.net">HTML5 UP</a>.</p>
//         <footer>
//             <ul className="buttons vertical">
//                 <li><a href="#main" className="button fit scrolly special">Sing up</a></li>
//             </ul>
//             {/* <a href="#" className="button special">
//                   Sign Up
//                 </a> */}
//         </footer>

//     </div>

// </section>

// )
import { setItem, getItem } from "./localstorage";

// const request = axios({
//   method: 'get', 
//   url: `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${jwtToken}`,
//   headers: {'Authorization': `Bearer ${jwtToken}`}
// });

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
const fetchServer = (jwtToken) => {
  return fetch("http://localhost:3000/api/signup", {
    method: 'post',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
  },
  body: JSON.stringify({
    "t": jwtToken
    })
  }).then((response) => {
    return response.json()
  });
};

class Banner extends Component {
  state = {
    response: {}
  };
  onSuccess = (response) => {
    response.json().then(body => {
      alert(JSON.stringify(body));
    });
  }
  componentWillMount() {
    const jwtToken = getItem('jwtToken');
    if (typeof jwtToken !== "undefined" && jwtToken !== null) {
      console.log("jwt found");
      this.props.authenticate();
    }
  }
  componentDidMount() {
    const jwtToken = getItem('jwtToken');
    if (typeof jwtToken !== "undefined" && jwtToken !== null) {
      fetchServer(jwtToken)
        .then((response) => {
          debugger;
          this.setState({
            response
          });
        })
    } else {
      console.log("no jwt found");
    }
  }
  onSuccessGoogle = response => {
    fetchServer(response.tokenId)
      .then((response) => {
        this.setState({
          response
        });
        this.props.authenticate();
      })
    setItem('jwtToken', response.tokenId);
  }

  onFailed = (error) => {
    alert(error);
  }

  render() {
    const customHeader = {};
    customHeader["Test"] = "test-header";
    return (
      <section id="banner">
        <div className="inner">
          <header>
            <h2>MASTER STAKE</h2>
          </header>
          <p>
            The new <strong>Era</strong>, of
            <br />
            masternodes
          </p>
          {this.state.response.name && <img src={this.state.response.picture} width="40px" height="40px" style={styles.image} />}
          
          <footer>

            {this.props.appState === "unauthenticated" && <ul className="buttons vertical">
              <li>
                <TwitterLogin
                  className="button fit scrolly special"
                  loginUrl="http://localhost:4000/api/v1/auth/twitter"
                  onFailure={this.onFailed}
                  onSuccess={this.onSuccess}
                  requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
                  showIcon={true}
                  customHeaders={customHeader}
                />
              </li>
              <li>
                <GoogleLogin
                  clientId="816475887662-n0k8kvu18umreq0k24cpua869fl5hfv7.apps.googleusercontent.com"
                  responseType="id_token"
                  className="button fit scrolly special"
                  onSuccess={this.onSuccessGoogle}
                  onFailure={this.onFailed}
                >
                  <span style={styles.container}>
                    <img src="https://cdn.zapier.com/storage/photos/98dfdf3827082a15da731db63938da96.png" width="20" height="20" style={styles.googleImage} />
                    <span>Sign in with Google</span>
                  </span>
                  </GoogleLogin>
              </li>
            </ul>}
          </footer>
        </div>
      </section>
    );
  }
}

const styles = {
  image: {
    borderRadius: "40px",
    position: "absolute",
    top: "60px",
    left: "30px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  googleImage: {
    margin: "0 10px",
  },
}


// If actions is a function, it gets passed the store:
const actions = store => ({
  // Actions can just return a state update:
  authenticate(state) {
    return { appState: "authenticated" }
  },
});
export default connect('appState', actions)(Banner);
