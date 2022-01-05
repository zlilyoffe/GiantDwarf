// import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';

// class passwordInput extends Component {
//     constructor(){
//         super()
//         this.state = {
//             password:''
//         }
//         this.changePassword = this.changePassword.bind(this)
//         this.onSubmit = this.onSubmit.bind(this)
//     }
//     changePassword(event){
//         this.setState({
//             password:event.target.value
//         })
//     }
//     onSubmit(event){
//         event.preventDefault()

//         const registered =  {
//             password: this.state.password
//         }
//         axios.post('http://localhost:4000/app/signup', registered)
//             .then(response => console.log(response.data))

//         window.location = '/SignIn'
//     }
//     render() {
//         return ( 
//             <div>
//                 <div className='container'>
//                     <div className='form-div'>
//                         <form onSubmit={this.onSubmit}>
//                             <input type = 'text'
//                             placeholder='Password'
//                             onChange={this.changePassword}
//                             value={this.state.password}
//                             className='form-control form-group'
//                             />
//                             <input type='submit' className='btn btn-danger btn-block' value='Submit' />
//                         </form>

//                     </div>

//                 </div>

//             </div>
//         );
//     }
// }

// export default passwordInput;