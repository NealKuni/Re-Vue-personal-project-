import React, { useState } from 'react'

import { navigate } from '@reach/router';
import GetAllReviews from '../components/GetAllReviews';
import styled from 'styled-components';

const HomePage = (props) => {
    const {reviews, setReviews} = props;
     
    return (
        <div>
            <div style={{color: "#7393B3"}} className='container'>
                <h3>Revues From Around the Globe</h3>
            </div>
            <hr/>
            <GetAllReviews reviews={reviews} setReviews={setReviews}/>
        </div>
        
    )
}

export default HomePage;

