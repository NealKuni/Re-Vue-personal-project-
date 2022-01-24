import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const UserForm = () => {
    
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fileName, setFileName] = useState("");
    const [errors, setErrors] = useState({});

    
    const onSubmitHandler = (e) => {
    
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/user/register', {
            firstName,   
            lastName,
            email,
            password,
                
        })
            .then(res=>{
                console.log(res); 
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                if (err.response.errors) {
                    setErrors(err.response.errors);
                } 
            })
    }
    return (
        
    <div className="container">
      <h5> Login </h5>
      <form className="d-flex justify-content-evenly border border-secondary p-3" onSubmit={ onSubmitHandler }>
        <div className="col-6">
            <label className="form-label">First Name:</label>
            <div className="ptsb-3">
              {
                errors.firstName ?
                  <p className="text-danger" > {errors.firstName.message} </p>
                  : null
              }
              <input className="form-control" type="text" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            
            <label className="form-label">Last Name:</label>
            <div className="ptsb-3">
              {
                errors.lastName ?
                  <p className="text-danger" > {errors.lastName.message} </p>
                  : null
              }

              <input className="form-control" type="text" onChange={(e) => setLastName(e.target.value)}/>
            </div>

            <label className="form-label">Email:</label>
            <div className="ptsb-3">
              {
                errors.email ?
                  <p className="text-danger" > {errors.email.message} </p>
                  : null
              }
              <input className="form-control" type="text" onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <label className="form-label">Password:</label>
            <div className="ptsb-3">
              {
                errors.password ?
                  <p className="text-danger" > {errors.password.message} </p>
                  : null
              }
              <input className="form-control" type="text" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <label className="form-label">Confirm Password:</label>
            <div className="ptsb-3">
              
              <input className="form-control" type="text" onChange={(e) => setConfirmPassword(e.target.value)}/>
              {
                password === setConfirmPassword ?
                  <p className="text-danger" > Passwords must match. </p>
                  : null
              }
            </div>
            
        </div>
        <button type="submit" class="bi bi-upload mt-3 btn-primary" > Register</button>
    
        </form>
    </div>
        
    )
}
export default UserForm;