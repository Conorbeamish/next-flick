import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import CurrentUserProvider from './contexts/CurrentUser';
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <div className="App">
        <CurrentUserProvider>
          <Main/>
        </CurrentUserProvider>
      </div>
    </Router>
  );
}

export default App;
