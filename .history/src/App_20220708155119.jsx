import { useState, useEffect } from 'react'
import './App.css'
import * as API from './services/api'

function App() {

  const [character, setCharacter] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    API.getAllCharacters(page)
      .then(setCharacter)
      .catch(console.log)
  },[page])

  const onChangePage = (next) => {
    if(!character.previous && page + next <= 0) return;
    if(!character.next && page + next >= 42) return;

    setPage(page + next)
  }

  return (
    <div className="App">
      <h1>Rick and Morty</h1>

      <button onClick={() => onChangePage(-1)}>Prev</button>
      {page}
      <button onClick={() => onChangePage(1)}>Next</button>

      {
        character?.results?.map((char, index) => {
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
