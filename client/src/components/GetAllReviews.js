import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate, Link } from '@reach/router';


const GetAllReviews = () => {
    const [allReviews, setAllReviews] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api')
            .then((res) => {
                console.log(res.data)
                setAllReviews(res.data);
            })
            .catch((err) =>{ 
                console.log(err);
            })
    }, [])

    return(
        <div className='container'>
            
            {allReviews.map((eachReview, index)=> {
                return(
                    
                    <div  key={index}>
                        <div >
                            <img src= {`/uploads/${eachReview.image}`} alt="..." style={
                            {
                            width: "50%"
                            }}/>
                            
                        </div>
                        <h6>{eachReview.title}</h6>
                        <span style={{color: "#36454F"}}>{eachReview.location}</span>
                        <p className='text-wrap'>{eachReview.review}</p>   
                        <div className='row my-5'>
                            <div className='col-sm-2'>
                                <Link to="/update">
                                    <button className='btn btn-outline-sucess'> Update </button>
                                </Link>
                            </div>
                            <div className='col-sm-2'>
                                <button className='btn btn-outline-sucess'>Delete</button>
                            </div>
                            <div>
                                <hr/>
                            </div>
                        </div>

                    </div>  
                )
            })
            }
        </div>
    )
}


export default GetAllReviews;