import './App.css';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './web-body/NavBar'

import Projects from './pages/project-page/Projects';
import { StartPage } from './pages/StartPage';
import NoPage from './pages/NoPage';
import { Board } from './projects/TTT/Board';
import Earth from './projects/EarthCSS/Earth';
import { LeftSide } from './web-body/LeftSide';
import { Quasars } from './projects/QuasarsCSS/Quasars';
import { Rocket } from './projects/RocketCSS/Rocket';
import { RightSide } from './web-body/RightSide'
import { OftB } from './pages/OFTB';
import { UniversityProjects } from './pages/uni-projects/UniversityPage';
import { SolarPage } from './pages/uni-projects/solar-system/SolarPage';
import { AtomTrapPage } from './pages/uni-projects/atom-trap/AtomTrapPage';
import { AtomMagnetPage } from './pages/uni-projects/ising-model/AtomMagnet';
import { SpectrometerPage } from './pages/uni-projects/spctroscopy/SpectrometerPage';
import { AstroPage } from './pages/uni-projects/astro-photo/AstroPage';
import { ChessBoard } from './projects/Chess/Board/Chessboard';


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
          <Route path='projects/chess' element={<ChessBoard />} />
          <Route path='projects/earth' element={<Earth />} />
          <Route path='projects/quasars' element={<Quasars />} />
          <Route path='projects/rocket' element={<Rocket />} />

          <Route path='uni-projects' element={<UniversityProjects/>} />
          <Route path='uni-projects/solar-system-page' element={<SolarPage/>} />
          <Route path='uni-projects/atom-trap-page' element={<AtomTrapPage/>} />
          <Route path='uni-projects/ising-model-page' element={<AtomMagnetPage/>} />
          <Route path='uni-projects/spectrometer-page' element={<SpectrometerPage/>} />
          <Route path='uni-projects/astro-page' element={<AstroPage/>} />

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
