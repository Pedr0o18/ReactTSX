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

  const [text, setText] = useState<string>("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value)
  }

  return (
    <main className="App">
      <h1>Praticando React com Typescript</h1>
      <Count valor={valor} />
      <button onClick={handleSum}>Somar 1</button>
      <button onClick={handleSub}>Subtrair 1</button>
      <div className='display'>
        {text}
      </div>
      <input type="text" placeholder='Digite Aqui' onChange={handleChange} value={text} />
    </main>
  )
}

export default App
