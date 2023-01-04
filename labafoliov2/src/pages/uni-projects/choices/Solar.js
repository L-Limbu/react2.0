import { NavLink } from 'react-router-dom'
import './style.css'
export function Solar(){
    return (
        <div>
        <div className='choices-text-body'>

            <h3>Solar System</h3><br/>
            <p>From initial condition such as position and velocity to full trajectory/orbits of the planets. 
            The orbits of the planets can be predicted using Newton's 2nd law and maneuvering through some algebraic expressions. 
            Simualtion of the solar system leads to a simpler but deeper visualisation of our Solar System.</p>
            </div>
            <NavLink
            to='./solar-system-page' className="uni-display-button"> View
            </NavLink>
            
        </div>
    )
}