import { NavLink } from 'react-router-dom'
import './style.css'
export function Astro(){
    return (
        <div>
        <div className='choices-text-body'>

            <h3>Astro Photography</h3><br/>
            <p>Exploring the univere using <strong>big</strong> telescope located around the world.</p>
        </div>
            <NavLink
            to='./astro-page' className="uni-display-button"> View
            </NavLink>
        </div>
    )
}