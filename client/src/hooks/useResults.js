import React, {useState} from 'react';

const useResults = () => {
    const[results, setResults] = useState("");

    const clearResults = () => {
        setResults("")
    }
    return {results, clearResults, setResults};
}
 
export default useResults;