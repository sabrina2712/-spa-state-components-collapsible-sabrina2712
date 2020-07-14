import React from 'react';
import logo from './logo.svg';
import './App.css';
import CollapsibleContent from "./components/content"

function App() {
  return (
    <div className="app-container">
      <div className="container">
        <CollapsibleContent/>
      </div>
      
    </div>
  );
}

export default App;
