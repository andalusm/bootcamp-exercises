import logo from './logo.svg';
import './App.css';

function About () {
  return (<div>
  <SignUp/>
  <Blurb/></div>)
}


function SignUp (){
  return (<div>Signed up</div>)
}

function Blurb (){
  return (<div>Blurb</div>)
}


function Nav() {
  return (
      <div id="nav">
          <span>Home</span>
          <span>About</span>
      </div>
  )
}

function LandingPage() {
  return <h1>Welcome!</h1>
}

export function App() {
  let isUserLoggedIn = localStorage.getItem('loggedIn')
  let componentToDisplay = isUserLoggedIn ?
      <LandingPage /> :
      <About />

  return (
      <div className="app">
          <Nav />
          {componentToDisplay}
      </div>
  )
}

