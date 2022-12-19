import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Projects from './pages/Projects';
import { StartPage } from './pages/StartPage';
import NoPage from './pages/NoPage';
import { Board } from './components/TTT/Board';
import Earth from './components/EarthCSS/Earth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StartPage />} /> 
        <Route path='/projects' element={<Projects />} />

        <Route path='/projects/tiktactoe' element={<Board />} />
        <Route path='/projects/earth' element={<Earth />} />

        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
