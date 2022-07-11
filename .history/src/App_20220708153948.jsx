import { useState, useEffect } from 'react'
import './App.css'
import * as API from './services/api'

function App() {

  const [character, setCharacter] = useState([])

  useEffect(() => {
    API.getAllCharacters()
      .then(setCharacter)
      .catch(console.log)
  },[])

  const handleNextPage = () => {

  }

  return (
    <div className="App">
      <h1>Rick and Morty</h1>

      <button onClick={handleNextPage}>Next</button>
      <button onClick={handleNextPage}>Prev</button>

      {
        character.map((char, index) => {
          return(
            <div key={index}>
              <img src={char.image} alt="" />
              <p>{char.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default App
