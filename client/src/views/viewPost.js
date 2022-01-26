import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import GetAllReviews from '../components/GetAllReviews';
import styled from 'styled-components';

const ViewPost = (props)=> {

        const [review, setReview] = useState({})
        console.log(review)
        useEffect(() => {
            axios.get("http://localhost:8000/api/review/" + props.id)
                
                .then((res) => {
                    console.log(res.data)
                    setReview(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })
        }, []);
    

    return (
        <div>
            <p>inside view post</p>
        </div>
    )
}

export default ViewPost;