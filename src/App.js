import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main/Main';
import Puzzle from './pages/Puzzle/Puzzle';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CharacterAnimation from './CharacterAnimations/AnimationRender';


function App() {
  return (
    <div className='App'>
      <DndProvider backend={HTML5Backend}>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/puzzle' element={<Puzzle />} />
            <Route path='/animationTest' element={<CharacterAnimation characterName='rinpocheTop' />} />
            {/* <Route path='/animationTest' element={<CharacterAnimation characterName='rinpoche' />} /> */}
          </Routes>
        </Router>
      </DndProvider>
    </div>
  );
}

export default App;
