import React, {useState} from 'react';

const useError = () => {
    const [error, setError] = useState("")

    const addError = (errorMessage) => {
        setError(errorMessage)
    }

    const removeError = () => {
        setError("")
    }

    return{error, addError, removeError};
}
 
export default useError;