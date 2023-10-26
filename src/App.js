
import { useContext } from 'react';
import './App.css';
import Contact from './components/Contacts/Contacts';
import { Experiance } from './components/Experiance/Experiance';
import { Footor } from './components/Footor/Footor';
import { Intro } from './components/Intro/Intro';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from './components/Porjects/Projects';
import { Services } from './components/Service/Services';
import { Testimonial } from './components/Testimonial/Testimonial';
import { Works } from './components/Works/Works';

import { themeContext } from './contex';
import Github from './components/Github/Github';
import { About } from './components/About/About';

function App() {
  const theme=useContext(themeContext)
  const darkMode=theme.state.darkMode
  return (
    <div className="App" 
    style={{background:darkMode?"black":"",
    color:darkMode?"white":"black"}}  
    >
      <Navbar/>
      <Intro/>
      <About/>
      <Works/>
      <Services/>
      <Github/> 
      <Contact/>
    </div>
  );
}

export default App;
