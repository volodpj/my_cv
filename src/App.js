import React from 'react';
import './App.css';
import './reset.css';
import Header from './componets/header/header';
import Skills from './componets/skills/skills';
import Education from './componets/education/education';

function App() {
  return (
    <div className="wraper">
      <Header/>
      <Skills/>
      <Education/>
    </div>
  );
}

export default App;
