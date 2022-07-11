import { Routes, Route } from 'react-router-dom';

import './App.css'
import { CharacterDetails } from './components/characterDetails/CharacterDetails';
import { CharactersList } from './components/characterList/CharactersList';


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<CharactersList />}/>
          <Route path='/character/:characterId' element={<CharacterDetails />}/>
        </Routes>
    </div>
  )
}

export default App
