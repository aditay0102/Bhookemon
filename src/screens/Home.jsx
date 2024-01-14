import React  from 'react'
import { useState,useEffect } from 'react'
import Card from '../components/Card'
import Carosul from '../components/Carosul'
import './css/Home.css'


function Home() {
  const [search,setSearch] = useState('');
  const [foodCat,setFoodCat] =  useState([]);
  const [foodItem,setFoodItem] =  useState([]);


  const loadData  = async () =>{
    let response = await fetch("http://localhost:5000/api/foodData",{
      method:"POST",
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    response = await response.json();
    
    setFoodItem(response[0]);
    setFoodCat(response[1]);

  }

  useEffect(()=>{
    loadData()
  },[])

  return (
    <div className=''>
                                             
      <Carosul/>
      <center>
      <form class="home_jail">
          <input class="search form mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) =>{setSearch(e.target.value)}}/>
         
      </form> 
      </center>
      <div id='starter' className='Home_container container-full '>
        {
          
           foodCat !== []
           ? foodCat.map((data)=>{
              return(
                <div className='row mb-3'>
                  <center>
                  <div id='FoodTitle'  key={data._id} >{data.CategoryName}</div>
                  </center>
                  <hr/>
                  {
                    foodItem !== []
                    ? foodItem.filter((item)=> item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLowerCase())) ) 
                    .map(filteritems =>{
                      return(
                        
                        <div id="foodCard"  key={filteritems._id} className='col-12 col-md-6 col-lg-3'>
                          
                          <Card
                           foodItem = {filteritems}
                           options={filteritems.options[0]}
                        
                          ></Card>
                          <br></br>
                        </div>
                      )
                    })

                    : <div> No such Data Fuond </div>
                  }

                </div>

              )
           })
           : ""
           
        }

        

      </div>
      
    </div>
  )
}

export default Home
