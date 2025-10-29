import React, { useState } from 'react'
import './App.css'

import Count from './components/Count'

function App() {

  const [valor, setValor] = useState<number>(0)

  const handleSum = (): void => {
    setValor(valor + 1)
  }

  const handleSub = (): void => {
    setValor(valor - 1)
  }

  return (
    <main className="App">
      <h1>Praticando React com Typescript</h1>
      <Count valor={valor} />
      <button onClick={handleSum}>Somar 1</button>
      <button onClick={handleSub}>Subtrair 1</button>
    </main>
  )
}

export default App
