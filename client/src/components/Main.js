import React, {useContext, useEffect} from 'react';
import AuthForm from "./AuthForm"
import Nav from "./Nav";
import jwtDecode from "jwt-decode"
import { setAuthToken } from '../utils/auth';
import {CurrentUserContext} from "../contexts/CurrentUser";
import {Switch, Route,} from "react-router-dom";

const Main = (props) => {
    const {dispatchUser} = useContext(CurrentUserContext)

    useEffect(() => {
    //Rehydrate User
    if(localStorage.jwtToken){
        setAuthToken(localStorage.jwtToken);
        try {
            dispatchUser({type: "SET_CURRENT_USER", user: jwtDecode(localStorage.jwtToken)})
        } catch(e) {
            dispatchUser({type: "SET_CURRENT_USER", user: ""})
        }
    } 
    }, [])
    
    return (
        <div>
            <Nav />
            <Switch>
                <Route path="/signup">
                <AuthForm  signup buttonText="Sign Up"/>
                </Route>
                <Route path="/signin">
                <AuthForm signin buttonText="Sign In"/>
                </Route>
            </Switch>
        </div>
    );
}
 
export default Main;
