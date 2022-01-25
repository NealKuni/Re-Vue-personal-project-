import React, { useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import UserForm from '../components/UserForm';

import UserLogin from '../components/UserLogin';

const LogReg = (props) => {

    // pass down props 
    return (
        <div>
            <UserLogin/>
        </div>
        
    )
}

export default LogReg;