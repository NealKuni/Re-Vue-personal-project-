import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';


const GetAllReviews = () => {
    const [allReviews, setAllReviews] = useState([])
    useEffect(( )=>{
        axios.get('http://localhost:8000/api/')
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) =>{ 
                console.log(err);
            })
    }, [])

    return(
        <div>
            {allReviews.map((reviews, index)=> {
                return(
                    <div key={index}>
                        
                    </div>    
                )

                })
            }
        </div>
    )
}




export default GetAllReviews;