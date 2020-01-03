import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('efeito só no inicial')
  }, [])

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
    console.log('useEfect geral')
  })

  const multiplica = (e) => {
    setCount(e.target.value)
  }

  return (
    <div className="App">
      <button
        onClick={() => setCount(count + 1)}
      >
        clicar
      </button>
      <br/>
      <p>valor atual: { count }</p> 
      <br/>
      <input type="text" onChange={(e) => multiplica(e)}/>
    </div>
  );
}

export default App;
