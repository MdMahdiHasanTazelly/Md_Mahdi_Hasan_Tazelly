//import './App.css';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Nav from './components/Nav';
import About from './components/About'
import ProjectsHome from './components/Projects/PeojectsHome';


function App() {
  return (
    <div className="App">
      <TopBar/>
      <Hero/>
      <About/>
      <Skills/>
      <ProjectsHome/>
      <Nav/>
    </div>
  );
}

export default App;
