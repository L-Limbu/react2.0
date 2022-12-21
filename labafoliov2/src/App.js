import './App.css';
import { Routes, Route } from "react-router-dom";
import { Navbar } from './web-body/NavBar'

import Projects from './pages/Projects';
import { StartPage } from './pages/StartPage';
import NoPage from './pages/NoPage';
import { Board } from './components/TTT/Board';
import Earth from './components/EarthCSS/Earth';
import { LeftSide } from './web-body/LeftSide';
import { Quasars } from './components/QuasarsCSS/Quasars';

function App() {
  return (
    <div className='body-wrapper'>
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
          <Route path='*' element={<NoPage />} />
        </Routes>
      </div>
      <div className='right-side'>

      </div>
    </div>
  );
}

export default App;
