import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Header from './components/Header';
import Login from './views/Login';
import HomePage from './views/HomePage';
import Footer from './components/Footer';


function App() {
  const [updatedState, setUpdatedState] = useState(false);

  return (
    <div className="App">
      <Header/>
      <Router>
        {/* <HomePage path='/'/> */}
        <Login path='/login' updatedState={updatedState} setUpdatedState={setUpdatedState}/>
      </Router>
      <Footer/>
      
      

    </div>
  );
}

export default App;
