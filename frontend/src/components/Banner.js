import React, { Component } from "react";
import TwitterLogin from "react-twitter-auth/lib/react-twitter-auth-component.js";
import GoogleLogin from "react-google-login";

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

const responseGoogle = response => {
  console.log(response);
};

class Banner extends Component {
  constructor() {
    super();

    this.onFailed = this.onFailed.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
  }

  onSuccess(response) {
    response.json().then(body => {
      alert(JSON.stringify(body));
    });
  }

  onFailed(error) {
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
          <footer>
            <ul className="buttons vertical">
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
                 className="button fit scrolly special"
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText="Sign in with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                />
              </li>
            </ul>
          </footer>
        </div>
      </section>
    );
  }
}

export default Banner;
