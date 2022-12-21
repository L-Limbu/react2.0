import './style/navbar.css'
import { Link } from 'react-router-dom'
export function Navbar() {
    return (

        <nav className="nav-bar">
            <ul>
                <li>
                    <Link to="/" >Labafolio</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li >

                </li>
                <li>
                    <Link to='/'>Uni Projects</Link>
                </li>
                <li>
                    <Link to='/'>About</Link>
                </li>
            </ul>
        </nav>

    )
}