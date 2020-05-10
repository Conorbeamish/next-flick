import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {logout} from "../utils/auth";
import {CurrentUserContext} from "../contexts/CurrentUser";


const Nav = () => {
    const {dispatchUser} = useContext(CurrentUserContext)
    const handleLogout = () => {
        logout()
        dispatchUser({type: "SET_CURRENT_USER", user: ""})
    }

    return (
        <nav>
            <h1>Next-Flick</h1>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
                <li>
                    <button onClick={handleLogout}>
                        <Link to="/">Log out</Link>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
 
export default Nav;