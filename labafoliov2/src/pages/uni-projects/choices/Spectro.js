import { NavLink } from 'react-router-dom'
import './style.css'
export function Spectro(){
    return (
        <div>
        <div className='choices-text-body'>

            <h3>Poor Mans Spectrometer</h3><br/>
            <p>Each elements is unique since they all have a distinct number of protons in their nucleus. 
             They also emit light at a distinct set of wavelengths which we know thanks to Quantum Mechanics.
            In this experiment I make a cheap device with my group that can measure precisely these wavelengths
             of light within a few nano meters.</p>
        </div>
             <NavLink
            to='./spectrometer-page' className="uni-display-button"> View
            </NavLink>
        </div>
    )
}