import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav">
            <ul>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;