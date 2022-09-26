//import React, { Component } from 'react';
// import React, { Component, useState } from 'react';
// import Joi from 'joi-browser';

import React, { Component } from 'react';
// import Button from './common/Button';
// import Input from './common/Input';
import Joi from 'joi-browser';


class Login2 extends Component {
 

    constructor() {
      let status=((localStorage.getItem("status")));

        super();
        this.state={
            // email: '',
            // password:'',
            // formErrors:{}
            data : {email:'', password:''},
            // errors:{email:'email is required', password:'password is required'}
            errors:{ }

        }
      //  this.initialState = this.state;
    }
    
    
    schema={
      email:Joi.string().email().required(),
      password:Joi.string().required()
    }

    handleChange = ({target:input}) => {
      //console.log(event)

      const data={...this.state.data}
      const errors = {...this.state.errors}

      // data['email']=event.target.value
      // data[event.target.name]=event.target.value
      
      data[input.name]=input.value
      const errorMessage = this.validateField(input)
      
      if(errorMessage)
          errors[input.name]=errorMessage
      else
          delete errors[input.name]

      this.setState({data,errors})
    }

    validateField=(input) => {
     const {email,password}=this.state.data;
      
     if(input.name==='email')
        if(input.value==="") // input.value or email.value // input.value is more appropriate
            return 'Email is required'
      
      if(input.name==='password')
        if(input.value==="")
            return 'Password is required'

    const data = {[input.name] : input.value}

    }

    validate =()=> {

      let email=(localStorage.getItem("email"));
      let password=(localStorage.getItem("password"));

      let errors ={}

      const{data} =this.state;

      if(data.email==='')

      errors.email ='Email is required'

      if(data.password==='')

      errors.password ='Password is required'

      if(data.email != email)

      errors.email ='Wrong Email'

      if(data.password != password)

      errors.password ='Wrong Password'



      return Object.keys(errors).length === 0 ? null :errors;

      const results=Joi.validate(data,this.schema, {abortEarly:false})

      // for(let item of results.error.details) {
      //   errors[item.path[0]]=item.message
      // } 

     // return errors;

         }

    // renderInput = (label, name, value, error, type="text") => {
    //  return <Input
    //   label={label}
    //   name={name}
    //   value={value}
    //   type={type}
    //   // {...error &&  <div className="alert alert-danger">
    //   //      {error}
    //   //    </div> }
    //   error={error}
    //   onChange={this.handleChange} />
    // }

    // renderButton =(label) => {
    //   return <Button label = {label} />
    // }

    hangleSubmit = (event) =>{
      // console.log('form submitted')
      //console.log(event)
      event.preventDefault() // this prevents submit button's default action
      const errors = this.validate();
      this.setState({errors:errors || {} })
      if(errors) return;
      const{data} =this.state;
        console.log ('form submitted')
       // const { email, password } = this.state;
       // localStorage.setItem('email', data.email);
       // localStorage.setItem('password', data.password);
        // localStorage.setItem('user', rememberMe ? user : '');

        localStorage.setItem('status', 'log-in');
        window.location='/dashboard'

    }
    
    
    
     render() {

       const{data,errors} = this.state;


     //  if(status==="log-in")

  let status=((localStorage.getItem("status")));

  if(status==="log-in")
  {
    window.location='/dashboard'
  }

  else {
         return (
           <div>
           <h1>Login Form</h1>
             <form onSubmit={this.hangleSubmit}>

               <div className='mb-3'>
        <label className='form-label'>Email</label>
        <input type="email"
        className="form-control"
         id="email"
         placeholder="Enter email"
        value={data.value}
        onChange={this.handleChange}
         name="email"/>
        {errors.email &&  <div className="alert alert-danger">
           {errors.email}
         </div> }
        </div>

        <div className='mb-3'>
        <label className='form-label'>Password</label>
        <input type="password"
        className="form-control"
         id="password"
         placeholder="Enter email"
        value={data.value}
         onChange={this.handleChange}
         name="password"/>
        {errors.password &&  <div className="alert alert-danger">
           {errors.password}
         </div> }
        </div>

        <button type="submit" className='btn btn-success'>Login</button> 

        Do not have an account ?
                     <a href="/register" >
                          Sign Up
                 </a>
                
 
 </form>
 </div>
            
        );
    }  
  }
}


export default Login2;






// class Login extends Component {
//   userData;
//   constructor(props) {
//       super(props);
//       this.onChangeName = this.onChangeName.bind(this);
//       this.onChangeEmail = this.onChangeEmail.bind(this);
//       this.onChangePhone = this.onChangePhone.bind(this);
//       this.onSubmit = this.onSubmit.bind(this);
//       this.state = {
//           name: '',
//           email: '',
//           phone: ''
//       }
//   }
//   // Form Events
//   onChangeName(e) {
//       this.setState({ name: e.target.value })
//   }
//   onChangeEmail(e) {
//       this.setState({ email: e.target.value })
//   }
//   onChangePhone(e) {
//       this.setState({ phone: e.target.value })
//   }
//   onSubmit(e) {
//       e.preventDefault()
//       this.setState({
//           name: '',
//           email: '',
//           phone: ''
//       })
//   }
//   // React Life Cycle
//   componentDidMount() {
//       this.userData = JSON.parse(localStorage.getItem('user'));
//       if (localStorage.getItem('user')) {
//           this.setState({
//               name: this.userData.name,
//               email: this.userData.email,
//               phone: this.userData.phone
//           })
//       } else {
//           this.setState({
//               name: '',
//               email: '',
//               phone: ''
//           })
//       }
//   }
//   componentWillUpdate(nextProps, nextState) {
//       localStorage.setItem('user', JSON.stringify(nextState));
//   }

//   render() {
//       return (
//           <div className="container">
//               <form onSubmit={this.onSubmit}>
//                   <div className="form-group">
//                       <label>Name</label>
//                       <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
//                   </div>
//                   <div className="form-group">
//                       <label>Email</label>
//                       <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
//                   </div>
//                   <div className="form-group">
//                       <label>Phone</label>
//                       <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
//                   </div>
//                   <button type="submit" className="btn btn-primary btn-block">Submit</button>
//               </form>
//           </div>
//       )
//   }
// }

// export default Login;