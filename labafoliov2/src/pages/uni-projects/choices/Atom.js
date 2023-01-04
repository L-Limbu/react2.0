import { NavLink } from 'react-router-dom'
import './style.css'
export function Atom(){
    return (
        <div>
            <div className='choices-text-body'>

            <h3>Trapping Atom</h3><br/>
            <p>Using simple idea of replusion between opposite charged particles we can use this principle
             to deflect and trap atom/ions.</p>
            </div>
             <NavLink
            to='./atom-trap-page' className="uni-display-button"> View
            </NavLink>
        </div>
    )
}