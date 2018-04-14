import React from 'react'
import { connect } from 'unistore/react'
import { removeItem } from './localstorage'
import { Redirect } from 'react-router-dom'

const Home = ({ appState, name, picture, logout }) => (
  <div>
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
            {appState === 'authenticated' && (
              <a href='#' onClick={logout} className='button special'>
                Log Out
              </a>
            )}
            {appState === 'unauthenticated' && <Redirect to={'/'} />}
          </li>
        </ul>
      </nav>
    </header>
    <section id='banner'>
      <div className='inner'>
        <header>
          <h2>TWENTY</h2>
        </header>
        <p>
          This is <strong>Twenty</strong>, a free
          <br />
          responsive template
          <br />
          by <a href='http://html5up.net'>HTML5 UP</a>.
        </p>
        <footer>
          <ul className='buttons vertical'>
            <li>
              <a href='#main' className='button fit scrolly'>
                Tell Me More
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
    <article id='main'>
      <header className='special container'>
        <span className='icon fa-bar-chart-o' />
        <h2>
          As this is my <strong>twentieth</strong> freebie for HTML5 UP
          <br />
          I decided to give it a really creative name.
        </h2>
        <p>
          Turns out <strong>Twenty</strong> was the best I could come up with.
          Anyway, lame name aside,
          <br />
          it's minimally designed, fully responsive, built on HTML5/CSS3/<strong
          >
            skel
          </strong>, and, like all my stuff,
          <br />
          released for free under the{' '}
          <a href='http://html5up.net/license'>
            Creative Commons Attribution 3.0
          </a>{' '}
          license. Have fun!
        </p>
      </header>

      <section className='wrapper style2 container special-alt'>
        <div className='row 50%'>
          <div className='8u 12u(narrower)'>
            <header>
              <h2>
                Behold the <strong>icons</strong> that visualize what you’re all
                about. or just take up space. your call bro.
              </h2>
            </header>
            <p>
              Sed tristique purus vitae volutpat ultrices. Aliquam eu elit eget
              arcu comteger ut fermentum lorem. Lorem ipsum dolor sit amet. Sed
              tristique purus vitae volutpat ultrices. eu elit eget commodo. Sed
              tristique purus vitae volutpat ultrices. Aliquam eu elit eget arcu
              commodo.
            </p>
            <footer>
              <ul className='buttons'>
                <li>
                  <a href='#' className='button'>
                    Find Out More
                  </a>
                </li>
              </ul>
            </footer>
          </div>
          <div className='4u 12u(narrower) important(narrower)'>
            <ul className='featured-icons'>
              <li>
                <span className='icon fa-clock-o'>
                  <span className='label'>Feature 1</span>
                </span>
              </li>
              <li>
                <span className='icon fa-volume-up'>
                  <span className='label'>Feature 2</span>
                </span>
              </li>
              <li>
                <span className='icon fa-laptop'>
                  <span className='label'>Feature 3</span>
                </span>
              </li>
              <li>
                <span className='icon fa-inbox'>
                  <span className='label'>Feature 4</span>
                </span>
              </li>
              <li>
                <span className='icon fa-lock'>
                  <span className='label'>Feature 5</span>
                </span>
              </li>
              <li>
                <span className='icon fa-cog'>
                  <span className='label'>Feature 6</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className='wrapper style1 container special'>
        <div className='row'>
          <div className='4u 12u(narrower)'>
            <section>
              <span className='icon featured fa-check' />
              <header>
                <h3>This is Something</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper
                elit, et sagittis turpis. Integer ut fermentum.
              </p>
            </section>
          </div>
          <div className='4u 12u(narrower)'>
            <section>
              <span className='icon featured fa-check' />
              <header>
                <h3>Also Something</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper
                elit, et sagittis turpis. Integer ut fermentum.
              </p>
            </section>
          </div>
          <div className='4u 12u(narrower)'>
            <section>
              <span className='icon featured fa-check' />
              <header>
                <h3>Probably Something</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat ultrices. Aliquam eu elit
                eget arcu commodo suscipit dolor nec nibh. Proin a ullamcorper
                elit, et sagittis turpis. Integer ut fermentum.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section className='wrapper style3 container special'>
        <header className='major'>
          <h2>
            Next look at this <strong>cool stuff</strong>
          </h2>
        </header>

        <div className='row'>
          <div className='6u 12u(narrower)'>
            <section>
              <a href='#' className='image featured'>
                <img src='images/pic01.jpg' alt='' />
              </a>
              <header>
                <h3>A Really Fast Train</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat commodo suscipit amet sed
                nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae
                volutpat commodo suscipit ullamcorper sed blandit lorem ipsum
                dolore.
              </p>
            </section>
          </div>
          <div className='6u 12u(narrower)'>
            <section>
              <a href='#' className='image featured'>
                <img src='images/pic02.jpg' alt='' />
              </a>
              <header>
                <h3>An Airport Terminal</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat commodo suscipit amet sed
                nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae
                volutpat commodo suscipit ullamcorper sed blandit lorem ipsum
                dolore.
              </p>
            </section>
          </div>
        </div>
        <div className='row'>
          <div className='6u 12u(narrower)'>
            <section>
              <a href='#' className='image featured'>
                <img src='images/pic03.jpg' alt='' />
              </a>
              <header>
                <h3>Hyperspace Travel</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat commodo suscipit amet sed
                nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae
                volutpat commodo suscipit ullamcorper sed blandit lorem ipsum
                dolore.
              </p>
            </section>
          </div>
          <div className='6u 12u(narrower)'>
            <section>
              <a href='#' className='image featured'>
                <img src='images/pic04.jpg' alt='' />
              </a>
              <header>
                <h3>And Another Train</h3>
              </header>
              <p>
                Sed tristique purus vitae volutpat commodo suscipit amet sed
                nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae
                volutpat commodo suscipit ullamcorper sed blandit lorem ipsum
                dolore.
              </p>
            </section>
          </div>
        </div>

        <footer className='major'>
          <ul className='buttons'>
            <li>
              <a href='#' className='button'>
                See More
              </a>
            </li>
          </ul>
        </footer>
      </section>

    </article>

    <footer id='footer'>
      <ul className='icons'>
        <li>
          <a href='#' className='icon circle fa-twitter'>
            <span className='label'>Twitter</span>
          </a>
        </li>
        <li>
          <a href='#' className='icon circle fa-facebook'>
            <span className='label'>Facebook</span>
          </a>
        </li>
        <li>
          <a href='#' className='icon circle fa-google-plus'>
            <span className='label'>Google+</span>
          </a>
        </li>
        <li>
          <a href='#' className='icon circle fa-github'>
            <span className='label'>Github</span>
          </a>
        </li>
        <li>
          <a href='#' className='icon circle fa-dribbble'>
            <span className='label'>Dribbble</span>
          </a>
        </li>
      </ul>

      <ul className='copyright'>
        <li>&copy; Untitled</li>
        <li>
            Design: <a href='http://html5up.net'>HTML5 UP</a>
        </li>
      </ul>
    </footer>
  </div>
)

const styles = {
  image: {
    borderRadius: '40px',
    position: 'absolute',
    top: '60px',
    left: '30px'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  googleImage: {
    margin: '0 10px'
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
export default connect(['appState', 'name', 'picture'], actions)(Home)
