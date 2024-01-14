import React from 'react'
import {Link } from 'react-router-dom'

import { useState } from 'react';
function Signup() {
  const [credentials,setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

  const handleSubmit = async(e)=>{
      e.preventDefault();
     
      const response = await fetch("http://localhost:5000/api/loginUser",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({email:credentials.email,password:credentials.password})
      });
      const json = await response.json()
      console.log(json);

      if(!json.success){
        alert("Enter Valid credentials")
      }
      else{
        alert("welcome")
        localStorage.setItem("userEmail",credentials.email)
        localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken"))
        window.location.replace('http://localhost:3000/');
      }
  }

  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <div className='container'>
    <form type='POST' onSubmit={handleSubmit}>
        
      
  
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputPassword1" name='email' vlaue={credentials.email} onChange={onChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" name='password' vlaue={credentials.password} onChange={onChange}/>
      </div>
      
      
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to="/createuser" className='m-3 btn btn-danger'>New user</Link>
  </form>
    </div>
  )
}

export default Signup
