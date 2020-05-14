import React from 'react';
import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({ component: Component, currentUser, props}) => {
    return ( 
        <Route {...props} render ={
            props => {
                if (currentUser.isAuthenticated){
                    return <Component {...props} />
                } else {
                    return <Redirect to="/signin"/>
                }
            }
        } />
    );
}
 
export default ProtectedRoute;