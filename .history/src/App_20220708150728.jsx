import { useState } from 'react'
import './App.css'
import * as API from './services/api'

function App() {

  const [character, setCharacter] = useState([])

  useEffect(() => {
    API.getAllCharacters
      .then(setCharacter)
      .catch(console.log)
  },[])

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
    </div>
  )
}

export default App
