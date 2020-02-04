import React from 'react';
import logo from './logo.svg';
import './App.css';

import HeroesList from './HeroesList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Teste</h1>
        <HeroesList />
      </header>
    </div>
  );
}

export default App;
