import { Link } from "react-router-dom";
import navStyle from "./Nav.module.css";

function NavBar() {
    return (
        <nav className={navStyle.navbar}>
            <h2>
                <Link to="/">BlogApi</Link>
            </h2>
            <ul>
                <li className={navStyle}>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/posts`} className={navStyle}>Posts</Link>
                </li>
                <li>
                    <Link to={`/readme`} className={navStyle}>Readme</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;