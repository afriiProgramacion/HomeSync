import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <h1>HomeSync</h1>
      <p>Tareas de casa</p>
      <button type="button" onClick={() => setCount((valor) => valor + 1)}>
        Has pulsado {count} {count === 1 ? 'vez' : 'veces'}
      </button>
    </section>
  )
}

export default App
