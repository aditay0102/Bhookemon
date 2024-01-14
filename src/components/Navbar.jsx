/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { Link } from 'react-router-dom'
import './css/Navbar.css'
import { useState } from 'react'
import Modal from '../Modal'
import Cart from '../screens/Cart'
import { useCart, useDispatchCart } from '../components/ContextReducer';

function Navbar() {
  const [cartView,setCartView] = useState(false)
  let data = useCart();


  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    window.location.replace('http://localhost:3000/login');
  }


  return (
    <div>

<nav className='Navbar'>
           <dv id='d1'>
                <img className='Logo' src="https://i.pinimg.com/564x/20/71/36/207136ca1af788ec75714672cc274096.jpg" alt="" /> <b id='Brand'>Bhokemon </b>          </dv>
           <dv id='d2'>
            <Link className="nav-item nav-link active" to='/'>Home</Link>
      
          
               
                {(localStorage.getItem("authToken"))?
               
                <Link class="nav-item nav-link active" to='/myOrder' >MyOrders</Link>
                
                : ""
              }
           </dv>
           <dv id='d3'>
           {
                (localStorage.getItem("authToken"))?
                  <div className='mycart_container'>
                    <div id="sameBtn" className="   mycart" onClick={()=>{setCartView(true)}}>
                      MyCart
                      <div className='cartIcon'>{data.length}</div>
                    </div>
                    
                    {cartView? <Modal onClose={()=>{setCartView(false)}}><Cart/></Modal>:null}
                    <div id="sameBtn" className="btn  mx-2" onClick={handleLogout}>
                      Logout
                    </div>
                  </div>
                : 
                <div className='dflex'>
                  <Link id="sameBtn" class="btn  text-success mx-1" to='login' >login</Link>
                  <Link id="sameBtn" class="btn  text-success mx-1" to='/createuser' >SignUp</Link>
                </div>
              }
                
           </dv>
          </nav>
      


    </div>
  )
}

export default Navbar

