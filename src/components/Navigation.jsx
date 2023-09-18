import { NavLink } from "react-router-dom";

const Navigation = () => {
    return ( 
        <nav className="nav">
            <span className="logo">SEARCH</span>
            <ul className="nav-links">
                <NavLink to="/"><li>BY NAME</li></NavLink>
            </ul>
        </nav>
    );
}
 
export default Navigation;