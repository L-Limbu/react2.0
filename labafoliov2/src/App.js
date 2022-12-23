import './App.css';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './web-body/NavBar'

import Projects from './pages/Projects';
import { StartPage } from './pages/StartPage';
import NoPage from './pages/NoPage';
import { Board } from './projects/TTT/Board';
import Earth from './projects/EarthCSS/Earth';
import { LeftSide } from './web-body/LeftSide';
import { Quasars } from './projects/QuasarsCSS/Quasars';
import { RightSide } from './web-body/RightSide'
import { OftB } from './pages/OFTB';
function App() {
  return (
    <div className='body-wrapper'>
      <div className="space stars1"></div>
      <div className="space stars2"></div>
      <div className="space stars3"></div>
      <div className="space stars4"></div>
      <div className='left-side'>
        <LeftSide />
        
      </div>
      <div className='center-side'>
        <Navbar />
        <br />
        <Routes>
          <Route index element={<StartPage />} /> 

          <Route path='/projects' element={<Projects />} />
          <Route path='projects/tiktactoe' element={<Board />} />
          <Route path='projects/earth' element={<Earth />} />
          <Route path='projects/quasars' element={<Quasars />} />

          <Route path='/one-for-the-books' element={<OftB />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </div>
      <div className='right-side'>
        <RightSide />
      </div>
      
    </div>
  );
}

export default App;
