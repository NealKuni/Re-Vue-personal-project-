import React from 'react'
import styled from 'styled-components';
import GetAllUserReviews from '../components/GetAllUserReviews';

const UserPosts = (props) => {
    const {reviews, setReviews} = props;

  return (
    <HomeContainer>
        <GetAllUserReviews reviews={reviews} setReviews={setReviews}/>
    </HomeContainer>
  )
}

export default UserPosts;


const HomeContainer = styled.div`
    margin: 7rem 0;
    font-family: 'Poppins', sans-serif;
    img {
        width: 2rem;
        display: block;
        margin: 0 auto;
    }
`;