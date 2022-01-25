import React, { useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { navigate, Link } from '@reach/router';
// import logo from '../logo.png';

const Navbar = () =>{
    const logout = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/logout", {

        }, {
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data);
            localStorage.clear()
            // navigate('/') add a route to have the user navigate to the home page when they have logged out. 
            
        })
        .catch(err => {
            console.log(err);
        });
    };

    return(
        <div className='container'>
            <nav className="navbar">
                <form className="container-fluid justify-content-start">
                    {/* <Link>
                        <img src={logo} alt="logo"/>
                    </Link>     */}
                    <button className="btn btn-outline-success me-2" onClick={() => navigate('/')}> Home </button>
                    <button className="btn btn-sm btn-outline-secondary"  onClick={() => navigate('/login')}> Login </button>
                    <button className="btn btn-sm btn-outline-secondary"  onClick={(e) => logout(e)}> Logout</button>
                </form>
            </nav>
        </div>
    )
}

export default Navbar;