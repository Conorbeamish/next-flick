import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {logout} from "../utils/auth";
import {CurrentUserContext} from "../contexts/CurrentUser";


const Nav = () => {
    const {currentUser, dispatchUser} = useContext(CurrentUserContext)
    const {isAuthenticated, user} = currentUser;

    const handleLogout = () => {
        logout()
        dispatchUser({type: "SET_CURRENT_USER", user: ""})
    }
    
    return (
        <nav>
            <h1>Next-Flick</h1>
            <ul>
                <li><Link to="/">Home</Link></li>

                {!isAuthenticated && <div>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/signin">Sign In</Link></li>
                </div> } 

                {isAuthenticated && <div>
                    <li>
                        <Link onClick={handleLogout} to="/">Log out</Link>
                    </li>
                    <div>{user.username}</div>
                </div>}
            </ul>
        </nav>
    );
}
 
export default Nav;