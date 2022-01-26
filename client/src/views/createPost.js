import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { navigate } from '@reach/router';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [review, setReview] = useState('');
    const [image, setImage] = useState('');

    const onSubmitHandler = (e) =>{
        e.preventDefault();

        const newReview = {
            title,
            location,
            review,
            image
        }

        axios.post('http://localhost:8000/api/review/post', newReview,
        {
            withCredentials: true
        })
        .then((res)=>{
            console.log("successfully created review")
        })
        .catch((err) => {
            console.log(err)
            navigate('/login')
        })
    }

    return (
    <CreatePostContainer>
        <div className='container'>
            <h3 style={{color: "#7393B3"}}>ReVue your latest travel</h3>
            <form className='border p-4' onSubmit={ onSubmitHandler }>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" onChange = {(e)=>setTitle(e.target.value)} placeholder='Title'/>
        
                </div>
                <div className="mb-3">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" onChange = {(e)=>setLocation(e.target.value)} placeholder='Location'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Review</label>
                    <textarea className="form-control" rows="3" onChange = {(e)=>setReview(e.target.value)}></textarea>
                </div>  
               
                <div class="mb-3">
                    <label class="form-label">Upload Photos</label>
                    <input class="form-control form-control-sm" type="file" onChange = {(e)=>setImage(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit Review</button>
            </form>
        </div>
    </CreatePostContainer>
  )
}

export default CreatePost;


const CreatePostContainer = styled.div`
    margin: 3rem auto;
    padding: 4rm;
    width: 31.25rem;
    font-family: 'Poppins', sans-serif;
    


`;