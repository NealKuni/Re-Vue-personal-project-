import React, { useState, useEffect } from 'react';
import { Router, Link } from '@reach/router';
import axios from 'axios';
import Header from './components/Header';
import Login from './views/Login';
import HomePage from './views/HomePage';
import Footer from './components/Footer';
import UpdatePost from './views/UpdatePost';
import CreatePost from './views/CreatePost';
import Registration from './views/Registration';
import UserPosts from './views/UserPosts';

function App() {
  const [updatedState, setUpdatedState] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [userReviews, setUserReviews ] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api')
        .then((res) => {
            console.log(res.data)
            setReviews(res.data);
        })
        .catch((err) =>{ 
            console.log(err);
        })
}, [])
useEffect(()=>{
  axios.get('http://localhost:8000/api/review/user', {withCredentials: true})
      .then((res) => {
          console.log(res.data)
          setUserReviews(res.data);
      })
      .catch((err) =>{ 
          console.log(err);
      })
}, [])


  return (
    <div className="App">
      <Header/>
      <Router>
        <HomePage path='/'reviews={reviews} setReviews={setReviews} />
        <Login path='/login' updatedState={updatedState} setUpdatedState={setUpdatedState}/>
        <UpdatePost path='/update/:id'/>
        <CreatePost path="/review"/>
        <Registration path='/register'/> 
        <UserPosts path='/myreviews' userReviews={userReviews} setUserReviews={setUserReviews}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
