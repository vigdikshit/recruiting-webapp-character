import { useState } from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST } from './consts.js';
import Character from './Character';


function App() {
  const [num, setNum] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Character</h1>
      </header>
      <section className="App-section">
        <div>
         <Character />
        </div>
      </section>
    </div>
  );
}

export default App;
