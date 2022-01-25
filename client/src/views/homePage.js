import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import GetAllReviews from '../components/GetAllReviews';
import Header from '../components/Header';

const HomePage = (props) => {

     
    return (
        <div>
            
            <GetAllReviews/>
        </div>
        
    )
}

export default HomePage;