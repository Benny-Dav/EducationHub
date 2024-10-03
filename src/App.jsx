
import './App.css'
import About from './components/About'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Offers from './components/Offers'

function App() {
  

  return( <div className="first-pg">
    <Navbar/>
    <Hero/>
    <Features/>
    <About/>
    <Offers/>
  </div>)


}

export default App
