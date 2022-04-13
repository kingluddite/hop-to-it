import { Switch, Route, Redirect } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./pages/home.js"
import About from "./pages/about.js"
import Contact from "./pages/contact.js"
import "./App.css"
import { US_STATES } from "./data/us-states"

function App() {
  return (
    <div className='container'>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Redirect to='/' />
      </Switch>
      <Footer year='1776' usStates={US_STATES} />
    </div>
  )
}

export default App
