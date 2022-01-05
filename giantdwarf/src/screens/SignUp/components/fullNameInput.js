// import React, { Component } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';

// class fullNamedInput extends Component {
//     constructor(){
//         super()
//         this.state = {
//             fullName:''
//         }
//         this.changeFullName = this.changeFullName.bind(this)
//         this.onSubmit = this.onSubmit.bind(this)
//     }
//     changeFullName(event){
//         this.setState({
//             fullName:event.target.value
//         })
//     }
//     onSubmit(event){
//         event.preventDefault()

//         const registered =  {
//             fullName: this.state.fullName,
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
//                             placeholder='Full Name'
//                             onChange={this.changeFullName}
//                             value={this.state.fullName}
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

// export default fullNamedInput;