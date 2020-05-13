import React, {createContext, useReducer} from 'react';
import {currentUserReducer} from "../reducers/currentUserReducer";

export const CurrentUserContext = createContext();

const CurrentUserProvider = (props) => {
    const [currentUser, dispatchUser ] = useReducer(currentUserReducer, {user:"", isAuthenticated: false})
    return (
        <CurrentUserContext.Provider value = {{currentUser, dispatchUser}}>
            {props.children}
        </CurrentUserContext.Provider>
    )
}

export default CurrentUserProvider;