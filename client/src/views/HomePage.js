import React, { useState } from 'react'
import GetAllReviews from '../components/GetAllReviews';
import styled from 'styled-components';

const HomePage = (props) => {
    const {reviews, setReviews} = props;
     
    return (
        <Container>
            <div style={{color: "#7393B3"}} className='container'>
                <h3>Revues From Around the Globe</h3>
            </div>
            <hr/>
            <GetAllReviews reviews={reviews} setReviews={setReviews}/>
        </Container>
        
    )
}

export default HomePage;

const Container = styled.div`
    margin: 7rem 0;
    fontFamily: 'Poppins', sans-serif;
    
    img {
        width: 2rem;
        display: block;
        margin: 0 auto;
    }
`;
