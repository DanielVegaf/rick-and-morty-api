import { useState, useEffect, useRef } from 'react'
import './App.css'
// import * as API from './services/api'
import {getAllCharacters, searchCharacter} from './services/api'

function App() {

  const inputSearch = useRef(null);
  const [character, setCharacter] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")

  useEffect(() => {
    getAllCharacters(page)
      .then(setCharacter)
      .catch(console.log)
  },[page])

  const onChangePage = (next) => {
    if(!character.previous && page + next <= 0) return;
    if(!character.next && page + next >= 42) return;

    setPage(page + next)
  }

  const onTextSearch = (event) => {
    event.preventDefault();
    const text = inputSearch.current.value;
    setSearch(text);
  }

  const onSearchSubmit = (event) => {
    if(event.key !== 'Enter') return;

    inputSearch.current.value = "";
    searchCharacter(search).then(setCharacter).catch(console.log);
  }

  return (
    <div className="App">
      <h1>Rick and Morty</h1>

      <button onClick={() => onChangePage(-1)}>Prev</button> 
      {page}
      <button onClick={() => onChangePage(1)}>Next</button>
      <br />
      <br />
      <input
        ref={inputSearch}
        type="text"
        onChange={onTextSearch}
        onKeyDown={onSearchSubmit}
        placeholder="Buscar"
        />
        <br />
        <br />

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
      <button onClick={() => onChangePage(-1)}>Prev</button>
      {page}
      <button onClick={() => onChangePage(1)}>Next</button>
    </div>
  )
}

export default App
