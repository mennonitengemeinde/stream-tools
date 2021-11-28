import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import TimePage from './pages/TimePage/TimePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TimePage />} />
      </Routes>
    </div>
  );
}

export default App;
