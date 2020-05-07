import React, {useState} from 'react';

const AuthForm = (props) => {
    const[credentials, setCredentials] = useState({
        username : "",
        email : "",
        password : ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const authType = props.signup ? "signup" : "signin";

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
            <input name="email" type="email" required value={credentials.email} onChange={handleChange} />
            <label htmlFor="password">Password</label>
            <input name="password" type="Password" required value={credentials.password}  onChange={handleChange}/>
            {props.signup && (
                <div>
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" required value={credentials.username}  onChange={handleChange}/>
                </div>
            )}
            <button type="submit">{props.buttonText}</button>
        </form>    
    );
}
 
export default AuthForm;