import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const LogRegHeader = () =>{
    
    return (
        <div className="container">
            <h1>Welcome to ReVue</h1>
            <div >
                <button onClick={() => navigate('/')}> Home </button>
            </div>
        </div>
    )
}
export default LogRegHeader;