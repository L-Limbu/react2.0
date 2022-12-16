import './style/pages.css'
import { Outlet, Link } from "react-router-dom";

function Projects() {
  return (
    <div className="App">

      Hello this is project page
      <br />



      <Link to='/projects/tiktactoe' className="links">Tik-Tac-Toe</Link>
      <Outlet />
    </div>
  );
}

export default Projects