import React from 'react';
import CurrentUserProvider from './contexts/CurrentUser';
import Main from "./components/Main";

function App() {
  return (
    <div className="App" >
        <CurrentUserProvider>
          <Main/>
        </CurrentUserProvider>
    </div>
  );
}

export default App;
