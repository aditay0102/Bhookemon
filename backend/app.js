const express = require('express')
//const { connectToDb, getDb } = require('./db')
// init  app & middleware
const app = express()

const mongoConnect = require('./db')
const  mongoose  = require('mongoose')

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type, Accept"
    );
    next()
})

app.get('/',(req,res)=>{
   res.send('hi')
})


app.use(express.json())
app.use('/api',require('./Routes/CreateUser'));
app.use('/api',require('./Routes/DisplayData'));
app.use('/api',require('./Routes/OrderData'));


app.listen(5000,() => {
    console.log('app listening on port 5000')
    mongoConnect()
})

