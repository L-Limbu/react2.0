import './style/pages.css'
import { Outlet, Link } from "react-router-dom";


export function StartPage() {

    return (
        <div>
            
            <Link to="/projects" className="links">

             Projects 
             </Link>
            <Outlet />
        </div>
    )
}