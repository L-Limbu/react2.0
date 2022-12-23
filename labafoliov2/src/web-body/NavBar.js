import './style/navbar.css'
import { NavLink } from 'react-router-dom'
export function Navbar() {
    const activeColor = '#F4F1DE'
    const activeBorderColor = '#3D405B'
    return (

        <nav className="nav-bar">
            <ul>
                <li>
                    <NavLink 
                    style={({ isActive }) => {
                        return isActive ? { backgroundColor: activeColor, border: `0.1rem solid ${activeBorderColor}`, borderBottom: 'none' } : {}
                    }} 
                    to="/" >Labafolio</NavLink>
                </li>
                <li>
                    <NavLink 
                    style={({ isActive }) => {
                        return isActive ? { backgroundColor: activeColor, border: `0.1rem solid ${activeBorderColor}`, borderBottom: 'none' } : {}
                    }} 
                    to='/projects'>Projects</NavLink>
                </li>
                <li >

                </li>
                <li>
                    <NavLink 
                    style={({ isActive }) => {
                        return isActive ? { backgroundColor: activeColor, border: `0.1rem solid ${activeBorderColor}`, borderBottom: 'none' } : {}
                    }} 
                    to='/cie'>Uni Projects</NavLink>
                </li>
                <li>
                    <NavLink 
                    style={({ isActive }) => {
                        return isActive ? { backgroundColor: activeColor, border: `0.1rem solid ${activeBorderColor}`, borderBottom: 'none' } : {}
                    }} 
                    to='/one-for-the-books'>One for the books</NavLink>
                </li>
            </ul>
        </nav>

    )
}