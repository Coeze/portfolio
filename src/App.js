import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import About from './components/About';
import ProjThree from './components/ProjThree'
import ProjectOne from './components/ProjectOne';
import ProjectTwo from './components/ProjectTwo'
import Contact from './components/Contact';
import Footer from './components/Footer';
import OtherProjects from './components/OtherProjects';
import ProjFour from './components/ProjFour';

function App() {
  return (
    <div className="App">
    <Nav/>
<Header/>
<About/>
<ProjThree/>
<ProjFour/>
<ProjectOne/>

<ProjectTwo/>
<OtherProjects/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;
