import React, {useContext, useEffect} from 'react';
import AuthForm from "./AuthForm"
import Nav from "./Nav";
import Landing from "./Landing"
import Search from "./Search"
import MyMovies from './MyMovies';
import ProtectedRoute from "./ProtectedRoute";
import jwtDecode from "jwt-decode"
import { setAuthToken } from '../utils/auth';
import {CurrentUserContext} from "../contexts/CurrentUser";
import {Switch, Route, BrowserRouter as Router} from "react-router-dom";


const Main = (props) => {
    const {currentUser, dispatchUser} = useContext(CurrentUserContext)

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
        <Router>
            <Nav />
            <Switch>
                <Route path="/" exact render={(props) => 
                    <Landing {...props}/>
                } />
                <Route path="/signup" render={(props) => 
                    <AuthForm {...props} signup buttonText="Sign Up"/> 
                } />
                <Route path="/signin" render={(props) => 
                    <AuthForm {...props} signin buttonText="Sign In"/> 
                } />
                <Route path="/search" render={(props) => 
                    <Search {...props} />
                } />
                <ProtectedRoute path="/mymovies" currentUser={currentUser} component={MyMovies} />
            </Switch>
        </Router>
    );
}
 
export default Main;
