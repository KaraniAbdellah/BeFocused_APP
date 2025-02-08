import React, {useState} from "react";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHippo } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import Essentiel Component
import Header from "./Header";
import Section from "./Section";

// Import CSS filies
import "./mainCLass.css";
import "./global.css";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark": ""} app`}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode}></Header>
        <Section setDarkMode={setDarkMode} darkMode={darkMode}></Section>
    </div>
  );
}

export default App;
