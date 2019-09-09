import React from 'react';
import './App.css';
import './reset.css';
import Header from './componets/header/header';
import Skills from './componets/skills/skills';

function App() {
  return (
    <div className="wraper">
      <Header/>
      <Skills/>
    </div>
  );
}

export default App;
