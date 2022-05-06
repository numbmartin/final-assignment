
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Stories from './components/Stories';
import Nav from './components/Nav';
import { HashRouter, Routes, Route} from "react-router-dom"


function App() {
  return (
    <HashRouter>
    <Nav/>
    <Routes>
      <Route path= {"/"} element= {<Intro/>}/>
      <Route path= {"/portfolio"} element= {<Stories/>}/>
      <Route path= {"/about"} element= {<About/>}/>
      <Route path= {"/contact"} element= {<Contact/>}/>
    </Routes>
    <Footer/>

    </HashRouter>
  );
}

export default App;
