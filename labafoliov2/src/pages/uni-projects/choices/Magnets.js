import { NavLink } from 'react-router-dom'
import './style.css'
export function Magnets(){
    return (
        <div>
            <div className='choices-text-body'>

                <h3>Tiny Magnets</h3><br/>
                <p>
                Fundamentally all of the solids in the universe is arranged in a lattice where the atoms are joined together through bonds. 
                These atoms has a discrete magnetic state either north or south, using Ising model we can find out how the overall 
                interaction of the magnetic fields behaves in the lattice depending on the magnetic property of atoms whether 
                ferromagnetic or anti-ferromagnetic.
                </p>
            </div> 
            <NavLink
            to='./ising-model-page' className="uni-display-button"> View
            </NavLink>
        </div>
    )
}