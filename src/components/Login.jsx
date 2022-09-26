
import React, { Component } from 'react';
import Joi from 'joi-browser';

import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

class Login extends Component { 

    constructor() { 
      let status=((localStorage.getItem("status")));

        super();
        this.state={
            data : {email:'', password:''},
            // errors:{email:'email is required', password:'password is required'}
            errors:{ }

        }
    }
    
    
    schema={
      email:Joi.string().email().required(),
      password:Joi.string().required()
    }

    handleChange = ({target:input}) => {
      //console.log(event)

      const data={...this.state.data}
      const errors = {...this.state.errors}

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

      console.log("storage:"+email);
      console.log("storage:"+password);


      let errors ={}

      const{data} =this.state;

      console.log("form:"+data.email);
      console.log("form:"+data.password);

      if(data.email==='')

      errors.email ='Email is required'

      if(data.password==='')

      errors.password ='Password is required'

      if(data.email !== email)

      errors.email ='Wrong Email'

      if(data.password !== password)

      errors.password ='Wrong Password'

      return Object.keys(errors).length === 0 ? null :errors;

      const results=Joi.validate(data,this.schema, {abortEarly:false})

         }

    

    hangleSubmit = (event) =>{
      // console.log('form submitted')
      //console.log(event)
      event.preventDefault() // this prevents submit button's default action
      const errors = this.validate();
      this.setState({errors:errors || {} })
      if(errors) return;
      const{data} =this.state;
        console.log ('form submitted')
        localStorage.setItem('status', 'log-in');
        window.location='/dashboard'

    }
    
    
    
     render() {

       const{data,errors} = this.state;

  let status=((localStorage.getItem("status")));

  if(status==="log-in")
  {
    window.location='/dashboard'
  }

  else {
         return (

           <>
           <div className='text-center mainst'>
             <div className='row justify-content-center'>
             <div className='col-4'>
               
           <Grid >
             {/* <Paper > */}
             
               <Grid align='center'>
                 <Avatar className='avatarStyle' ><LockOutlinedIcon/></Avatar>
                 <h2>Sign In</h2>
               </Grid>

               <form onSubmit={this.hangleSubmit}>

              <div>
                 <TextField label='Email id' name="email" id="email"
                  type="email" placeholder='Enter Email' required
                   value={data.value}
                   onChange={this.handleChange}
                   />
                    {errors.email && <div className="alert alert-danger">
                     {errors.email}
                   </div>} 
</div>
<div>
                   <TextField label='Password' name="password" id="password"
                   type="password" placeholder='Enter Password' required
                   value={data.value}
                   onChange={this.handleChange}
                   />
                    {errors.password && <div className="alert alert-danger">
                     {errors.password}
                   </div>}
  </div>
  
<div className='btnst'>
<button type="submit" className='btn btn-success'>Login</button>
<Typography>
Do not have an account? 
  <a href="/register">
   Sign Up
</a>
</Typography>
</div>
              </form>
             {/* </Paper> */}
           </Grid>
           </div>
           </div>
           </div>
           
           {/* <div>
               <h1>Login</h1>
               <form onSubmit={this.hangleSubmit}>

                 <div className='mb-3'>
                   <label className='form-label'>Email</label>
                   <input type="text"
                     className="form-control"
                     id="email"
                     placeholder="Enter email"
                     value={data.value}
                     onChange={this.handleChange}
                     name="email" />
                   {errors.email && <div className="alert alert-danger">
                     {errors.email}
                   </div>}
                 </div>

                 <div className='mb-3'>
                   <label className='form-label'>Password</label>
                   <input type="password"
                     className="form-control"
                     id="password"
                     placeholder="Enter password"
                     value={data.value}
                     onChange={this.handleChange}
                     name="password" />
                   {errors.password && <div className="alert alert-danger">
                     {errors.password}
                   </div>}
                 </div>

                 <button type="submit" className='btn btn-success'>Login</button>

                 Do not have an account ?
                 <a href="/register">
                   Sign Up
                 </a>


               </form>
           </div> */}
             </>
            
        );
    }  
  }
}


export default Login;


//<Grid>
//             <Paper style={paperStyle}>
//                 <Grid align='center'>
//                     <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
//                     <h2>Sign In</h2>
//                 </Grid>
//      
//                         <Form >
//                             <Field as={TextField} label='Username' name="username"
//                                 placeholder='Enter username' fullWidth required
//                                 helperText={<ErrorMessage name="username" />}
//                             />
//                             <Field as={TextField} label='Password' name="password"
//                                 placeholder='Enter password' type='password' fullWidth required
//                                 helperText={<ErrorMessage name="password" />} />
//                             <Field as={FormControlLabel}
//                                 name='remember'
//                                 control={
//                                     <Checkbox
//                                         color="primary" 
//                                     />
//                                 }
//                                 label="Remember me"
//                             />
//                             <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
//                               style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}</Button>
                      
//                         </Form>
//             
//                 <Typography >
//                     <Link href="#" >
//                         Forgot password ?
//                 </Link>
//                 </Typography>
//                 <Typography > Do not have an account ?
//                      <Link href="/register" onClick={() => handleChange("event", 1)} >
//                         Sign Up
//                 </Link>
//                 </Typography>
//             </Paper>
//         </Grid>



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