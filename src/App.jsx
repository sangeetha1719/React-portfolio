import './App.css'
// import '../src/scss/styles.scss'
import './scss/styles.scss'
import 'bootstrap'
import Projects from './components/Projects';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Contacts from './components/contacts';
import Skills from './components/Skills';


const  App = () => {
  return (
    <div className='App'>
    
      <Navbar/> 
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>



    </div>
  )
}

export default App
