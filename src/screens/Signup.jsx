import React from 'react'
import {Link } from 'react-router-dom'
import { useState } from 'react';
function Signup() {
  const [credentials,setcredentials] = useState({name:"",email:"",password:"",geolocation:""})

  const handleSubmit = async(e)=>{
      e.preventDefault();
     
      const response = await fetch("http://localhost:5000/api/CreateUser",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
      });
      const json = await response.json()
      console.log(json);

      if(!json.success){
        alert("Enter Valid credentials")
      }
      else{
        alert("User created")
      }
  }

  const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <div className='container'>
    <form type='POST' onSubmit={handleSubmit}>
        
      
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
        <input type="name" className="form-control" id="exampleInputPassword1" name='name' vlaue={credentials.name} onChange={onChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
        <input type="email" className="form-control" id="exampleInputPassword1" name='email' vlaue={credentials.email} onChange={onChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" name='password' vlaue={credentials.password} onChange={onChange}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">location</label>
        <input type="text" className="form-control" id="exampleInputPassword1" name='geolocation' vlaue={credentials.geolocation} onChange={onChange}/>
      </div>
      
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
  </form>
    </div>
  )
}

export default Signup
