import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import './SignUp.css';
 

class SignUp extends Component {
    constructor(){
        super()
        this.state = {
            fullName:'',
            userName:'',
            email:'',
            password:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeUserName = this.changeUserName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUserName(event){
        this.setState({
            userName:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()

        const registered =  {
            fullName: this.state.fullName,
            userName:this.state.userName,
            email:this.state.email,
            password: this.state.password

        }
        axios.post('http://localhost:4000/api/SignUp', registered)
            .then(response => console.log(response.data))

        window.location = '/SignIn'

    }
  
    render() {
        return ( 
            <div>
                <div className='OuterContainerSignUp'>
                    <div className='InnerContainerSignUp'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text'
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className='fullName'
                            />
                                <input type = 'text'
                            placeholder='User Name'
                            onChange={this.changeUserName}
                            value={this.state.userName}
                            className='userName'
                            />
                                <input type = 'text'
                            placeholder='E-mail'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='email'
                            />
                                <input type = 'text'
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='password'
                            />
                            <input type='submit' className='buttonSubmit' value='Submit' />
                        </form>

                    </div>

                </div>

            </div>
        );
    }
}

export default SignUp;