import { useState } from 'react';

function Tema() {
  // 1. State pentru Toggle
  const [isOn, setIsOn] = useState(false);

  // 2. State pentru Input
  const [text, setText] = useState("");

  // 3. State pentru Counter
  const [count, setCount] = useState(0);

  // Funcții de control pentru Counter (fără validări în HTML)
  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      {/* Exercițiul 1: Toggle */}
      <div>
        <h3>Toggle Button</h3>
        <button onClick={() => setIsOn(!isOn)}>
          {isOn ? "ON" : "OFF"}
        </button>
      </div>

      <hr />

      {/* Exercițiul 2: Input Controlled */}
      <div>
        <h3>Input Controlled</h3>
        <input 
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <p>{text}</p>
      </div>

      <hr />

      {/* Exercițiul 3: Counter cu Limită */}
      <div>
        <h3>Counter (0-10)</h3>
        <button onClick={decrement}>-</button>
        <span> {count} </span>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};
