import React, { useState,useRef,useEffect } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
import './css/Card.css'

function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();


  let options = props.options;
  let priceOptions = Object.keys(options);

  // total price
  const priceRef = useRef();
  
  const[qty,setQty] = useState(1)
  const [size,setSize] = useState("")

  const handleAddToCart = async()=>{
    alert("Item added to Cart")
    let food = []
    for(const item of data){
      if(item.id === props.foodItem._id){
        food = item;

        break;
      }
    }

    if(food !== []){
      if(food.size == size){
        await dispatch({type: "UPDATE",id: props.foodItem._id,price: finalPrice, qty: qty})
        return
      }
      else if(food.size !== size){
        await dispatch({type: "ADD",id:props.foodItem._id,name: props.foodItem.name,price: finalPrice,qty:qty,size: size})
        return
      }
      return
      
      
    }
    await dispatch({type: "ADD",id:props.foodItem._id,name: props.foodItem.name,price: finalPrice,qty:qty,size: size})
    //console.log(data)
  }
  
  let finalPrice = qty * parseInt(options[size]);
  useEffect(() =>{
    setSize(priceRef.current.value)
  },[])


  return (
    <div id="card" style={{"width": "19rem","maxHeight":"360px"}}>
        <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"150px",objectFit:"fill"}} />
        <div className="card-body">
          <h5 className="card-title">{props.foodItem.name}</h5>
          
          <div id='halfCard'>
              <div id="halfindise">
                <select onChange={(e)=> setQty(e.target.value)}>
                  {
                    Array.from(Array(5), (e,i) =>{
                        return(
                          <option key={i+1} value={i+1}>{i+1}</option>
                        )
                    })
                  }
                </select>
                <select id='bc' className='  m-2 h-100  rounded'ref={priceRef} onChange={(e)=> setSize(e.target.value)}> 
                  {priceOptions.map((data) =>{
                    return <option key={data} value={data}>{data}</option>
                  })}
                </select>
                <div className=' finalprice d-inline h-100 fs-5'>
                ₹{finalPrice}/-
                </div>
              </div>

            </div>
          <hr></hr>
          <center>
          <button id='bc' className={" btn  justify-center AddCart ms-2"} onClick={handleAddToCart} >Add to Cart</button>
          </center>
        </div>
      </div>
  )
}

export default Card
