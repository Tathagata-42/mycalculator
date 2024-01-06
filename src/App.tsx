import React from 'react';
import './App.css';
import Calculator from './Calculator';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Calculator hello</h1>
      </header>
      <main>
        <Calculator />
      </main>
    </div>
  );
}

export default App;
