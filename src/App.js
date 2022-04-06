import "./App.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { US_STATES } from "./data/us-states"

// console.log(US_STATES)
function App() {
  return (
    <div className='container'>
      <Header />
      <div>one</div>
      <div>two</div>
      <Footer year='1776' usStates={US_STATES} />
      {/* <Footer year='2023' />
      <Footer year='2022' /> */}
    </div>
  )
}

export default App
