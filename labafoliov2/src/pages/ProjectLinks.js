import { Outlet, NavLink } from "react-router-dom";
export function ProjectLinks(){
    return (

            <div>

                <ul>
                    <li>
                    <NavLink to='/projects/tiktactoe' className="links">Tik-Tac-Toe</NavLink>
                    </li>
                    <li>
                    <NavLink to='/projects/earth' className="links">Earth</NavLink>
                    </li>
                    <li>
                    <NavLink to='/projects/quasars' className='links'>Quasars</NavLink>
                    </li>
                </ul>
                
                <Outlet />
        </div> 
        )
}