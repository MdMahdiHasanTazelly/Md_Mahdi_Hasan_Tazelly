//import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About'
import ProjectsHome from './components/Projects/PeojectsHome';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Hero/>
      <About/>
      <Skills/>
      <ProjectsHome/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
