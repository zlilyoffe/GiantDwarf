import React, { Component, useState } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import './SignUp.css';
 

function SignUp() {
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState ('');
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState('');
    const changeFullName = (e) => {
        setFullName(e.target.value);
    };
    const changeUserName = (e) => {
        setUserName(e.target.value);
    };
    const changeEmail = (e) => {
        setEmail(e.target.value);
    };
    const changePassword = (e) => {
        setPassword(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();

        const registered =  {
            fullName: fullName,
            userName:userName,
            email:email,
            password: password

        }
        axios.post('http://localhost:4000/api/SignUp', registered)
            .then(response => console.log(response.data))

        window.location = '/SignIn'

    }
        return ( 
            <div>
                <div className='OuterContainerSignUp'>
                    <div className='InnerContainerSignUp'>
                        <form onSubmit={onSubmit}>
                            <input type = 'text'
                            placeholder='Full Name'
                            onChange={changeFullName}
                            value={fullName}
                            className='fullName'
                            />
                                <input type = 'text'
                            placeholder='User Name'
                            onChange={changeUserName}
                            value={userName}
                            className='userName'
                            />
                                <input type = 'text'
                            placeholder='E-mail'
                            onChange={changeEmail}
                            value={email}
                            className='email'
                            />
                                <input type = 'text'
                            placeholder='Password'
                            onChange={changePassword}
                            value={password}
                            className='password'
                            />
                            <input type='submit' className='buttonSubmit' value='Submit' />
                        </form>

                    </div>

                </div>

            </div>
        );
    }

export default SignUp;