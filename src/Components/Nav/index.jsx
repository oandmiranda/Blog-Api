import { Link } from "react-router-dom";
import navStyle from "./Nav.module.css";
import styles from "../ApiContainer/container.module.css";

function NavBar() {
    return (
        <nav className={navStyle.navbar}>
            <h2>
                <Link to="/">BlogApi</Link>
            </h2>
            <ul>
                <li className={navStyle.home}>
                    <Link to={`/`}>Home</Link>
                </li>
                <li>
                    <Link to={`/posts`} className={styles.btn}>Posts</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;