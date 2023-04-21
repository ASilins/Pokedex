import { Link } from "react-router-dom"

import "../css/Nav.css"

function NavBar() {
    return (
        <div className="navBar">
            <h1 id="logo">Pokedex</h1>
            <nav>
                <ul>
                    <li>
                        <Link className="navItem" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="navItem" to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;