import { useState } from 'react'
import './App.css'

import Count from './components/Count'

function App() {

  const [valor, setValor] = useState<number>(0)

  return (
    <main className="App">
      <h1>Praticando React com Typescript</h1>
      <Count valor={valor} />
    </main>
  )
}

export default App
