import React, {useContext, useState} from 'react';
import {authUser} from "../utils/auth";
import {CurrentUserContext} from "../contexts/CurrentUser";
import useError from "../hooks/useError";

const AuthForm = (props) => {
    const {dispatchUser} = useContext(CurrentUserContext)
    const {error, addError, removeError} = useError()
    const[credentials, setCredentials] = useState({
        username : "",
        email : "",
        password : ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        removeError();
        const authType = props.signup ? "signup" : "signin";
        authUser(authType, credentials).then( user => {
            dispatchUser({type: "SET_CURRENT_USER", user})
        })
        .then(() => {
            props.history.goBack();
        })
        .catch( err => 
            addError(err)
        )
    }

    const handleChange = (e) => {
        e.persist()
        setCredentials(state => ({
            ...state,
            [e.target.name] : e.target.value
        }))
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" autoComplete="off" required value={credentials.email} onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input name="password" type="Password" required value={credentials.password}  onChange={handleChange}/>
            {props.signup && (
                <div>
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" autoComplete="off" required value={credentials.username}  onChange={handleChange}/>
                </div>
            )}
            <button type="submit">{props.buttonText}</button>
            <div>{error}</div>
        </form>    
    );
}
 
export default AuthForm;