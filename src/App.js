import React, { useState, useEffect } from 'react';
import Counter from './components/Counter.jsx'
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `you clicked ${count} times`
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
