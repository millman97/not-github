import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './Pages';
import {NavBar} from './Components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Pages.Home />} />
          <Route path='/:id' element={<Pages.AUser />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
