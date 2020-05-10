import {apiCall, setTokenHeader} from "./api";

export function setAuthToken(token){
    setTokenHeader(token)
}

export function logout(){
    localStorage.clear();
    setAuthToken(false);
}

export function authUser(type, userData){
    return new Promise((resolve, reject) =>{
        return apiCall("post", `/api/auth/${type}`, userData).then(
            ({token, ...user}) => {
                localStorage.setItem("jwtToken", token)
                setAuthToken(token);
                return resolve(user);
            }
        ).catch( err => {
            console.log(err.message)
            reject();
        })
    })
}