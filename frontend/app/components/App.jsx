import React from "react";

require("./App.css");

// export default () => <h1>Hsdcello World</h1>;

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="page-wrapper">
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
                <a href="#" className="button special">
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <section id="banner">

					<div className="inner">

						<header>
							<h2>TWENTY</h2>
						</header>
						<p>This is <strong>Twenty</strong>, a free
						<br />
						responsive template
						<br />
						by <a href="http://html5up.net">HTML5 UP</a>.</p>
						<footer>
							<ul className="buttons vertical">
								<li><a href="#main" className="button fit scrolly">Tell Me More</a></li>
							</ul>
						</footer>

					</div>

				</section>

        <article id="main">

					<header className="special container">
						<span className="icon fa-bar-chart-o"></span>
						<h2>As this is my <strong>twentieth</strong> freebie for HTML5 UP
						<br />
						I decided to give it a really creative name.</h2>
						<p>Turns out <strong>Twenty</strong> was the best I could come up with. Anyway, lame name aside,
						<br />
						it's minimally designed, fully responsive, built on HTML5/CSS3/<strong>skel</strong>,
						and, like all my stuff,
						<br />
						released for free under the <a href="http://html5up.net/license">Creative Commons Attribution 3.0</a> license. Have fun!</p>
					</header>

						<section className="wrapper style2 container special-alt">
							<div className="row 50%">
								<div className="8u 12u(narrower)">

									<header>
										<h2>Behold the <strong>icons</strong> that visualize what you’re all about. or just take up space. your call bro.</h2>
									</header>
									<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu comteger ut fermentum lorem. Lorem ipsum dolor sit amet. Sed tristique purus vitae volutpat ultrices. eu elit eget commodo. Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo.</p>
									<footer>
										<ul className="buttons">
											<li><a href="#" className="button">Find Out More</a></li>
										</ul>
									</footer>

								</div>
								<div className="4u 12u(narrower) important(narrower)">

									<ul className="featured-icons">
										<li><span className="icon fa-clock-o"><span className="label">Feature 1</span></span></li>
										<li><span className="icon fa-volume-up"><span className="label">Feature 2</span></span></li>
										<li><span className="icon fa-laptop"><span className="label">Feature 3</span></span></li>
										<li><span className="icon fa-inbox"><span className="label">Feature 4</span></span></li>
										<li><span className="icon fa-lock"><span className="label">Feature 5</span></span></li>
										<li><span className="icon fa-cog"><span className="label">Feature 6</span></span></li>
									</ul>

								</div>
							</div>
						</section>

						<section className="wrapper style1 container special">
							<div className="row">
								<div className="4u 12u(narrower)">

									<section>
										<span className="icon featured fa-check"></span>
										<header>
											<h3>This is Something</h3>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
									</section>

								</div>
								<div className="4u 12u(narrower)">

									<section>
										<span className="icon featured fa-check"></span>
										<header>
											<h3>Also Something</h3>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
									</section>

								</div>
								<div className="4u 12u(narrower)">

									<section>
										<span className="icon featured fa-check"></span>
										<header>
											<h3>Probably Something</h3>
										</header>
										<p>Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper elit, et sagittis turpis. Integer ut fermentum.</p>
									</section>

								</div>
							</div>
						</section>

						<section className="wrapper style3 container special">

							<header className="major">
								<h2>Next look at this <strong>cool stuff</strong></h2>
							</header>

							<div className="row">
								<div className="6u 12u(narrower)">

									<section>
										<a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
										<header>
											<h3>A Really Fast Train</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
								<div className="6u 12u(narrower)">

									<section>
										<a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
										<header>
											<h3>An Airport Terminal</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
							</div>
							<div className="row">
								<div className="6u 12u(narrower)">

									<section>
										<a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
										<header>
											<h3>Hyperspace Travel</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
								<div className="6u 12u(narrower)">

									<section>
										<a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
										<header>
											<h3>And Another Train</h3>
										</header>
										<p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
									</section>

								</div>
							</div>

							<footer className="major">
								<ul className="buttons">
									<li><a href="#" className="button">See More</a></li>
								</ul>
							</footer>

						</section>

				</article>

				<section id="cta">

					<header>
						<h2>Ready to do <strong>something</strong>?</h2>
						<p>Proin a ullamcorper elit, et sagittis turpis integer ut fermentum.</p>
					</header>
					<footer>
						<ul className="buttons">
							<li><a href="#" className="button special">Take My Money</a></li>
							<li><a href="#" className="button">LOL Wut</a></li>
						</ul>
					</footer>

				</section>

				<footer id="footer">

					<ul className="icons">
						<li><a href="#" className="icon circle fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon circle fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon circle fa-google-plus"><span className="label">Google+</span></a></li>
						<li><a href="#" className="icon circle fa-github"><span className="label">Github</span></a></li>
						<li><a href="#" className="icon circle fa-dribbble"><span className="label">Dribbble</span></a></li>
					</ul>

					<ul className="copyright">
						<li>&copy; Untitled</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
					</ul>

				</footer>
      </div>
    );
  }
}
