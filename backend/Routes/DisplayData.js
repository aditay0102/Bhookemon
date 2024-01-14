const express = require('express')
const router = express.Router()


router.post('/foodData',(req,res)=>{
    try{
       console.log(JSON.stringify(global.food))
        res.send([global.food,global.foodCategory])
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router;