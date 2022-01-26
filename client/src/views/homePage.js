import React, { useState } from 'react'

import { navigate } from '@reach/router';
import GetAllReviews from '../components/GetAllReviews';
import styled from 'styled-components';

const HomePage = (props) => {
    const {reviews, setReviews} = props;
     
    return (
        <HomeContainer>
            <GetAllReviews reviews={reviews} setReviews={setReviews}/>
        </HomeContainer>
        
    )
}

export default HomePage;

const HomeContainer = styled.div`
    margin: 7rem 0;
    font-family: 'Poppins', sans-serif;
    
    img {
        width: 2rem;
        display: block;
        margin: 0 auto;
    }
`;