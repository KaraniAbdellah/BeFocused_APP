import React, {useState} from "react";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHippo } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import Essentiel Component
import Header from "./Header";
import Section from "./Section";

// Import CSS filies
import "./global.css";

// Import AOS
import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark": ""} app main_content`}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode}></Header>
        <Section setDarkMode={setDarkMode} darkMode={darkMode}></Section>
    </div>
  );
}

export default App;
