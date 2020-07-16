import React, { useEffect } from 'react';
import Counter from './components/Counter.js'
import './App.css';

function App() {
  useEffect(() => {
    document.title = 'happy today!'
  })
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
