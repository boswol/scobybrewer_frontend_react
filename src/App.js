import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to ScobyBrewer</h1>
        <img src={`${process.env.PUBLIC_URL}/kombucha_homepage.png`} alt="ScobyBrewer Home" />
      </header>
    </div>
  );
}

export default App;
