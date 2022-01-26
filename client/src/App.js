import React, { useState } from 'react';
import { Router, Link } from '@reach/router';
import Header from './components/Header';
import Login from './views/Login';
import HomePage from './views/HomePage';
import Footer from './components/Footer';
import ViewPost from './views/ViewPost';
import CreatePost from './views/CreatePost';
import Registration from './views/Registration';

function App() {
  const [updatedState, setUpdatedState] = useState(false);

  return (
    <div className="App">
      <Header/>
      <Router>
        <HomePage path='/'/>
        <Login path='/login' updatedState={updatedState} setUpdatedState={setUpdatedState}/>
        <ViewPost path='/update'/>
        <CreatePost path="/review"/>
        <Registration path='/register'/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
