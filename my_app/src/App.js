import React from "react";
import ReactDOM from 'react-dom';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHippo } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import Essentiel Component
import Header from "./Header";
import Section from "./Section";

// Import CSS filies
import "./mainCLass.css";


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Section></Section>
    </div>
  );
}

export default App;
