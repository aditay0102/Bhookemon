//const {MongoClient} = require('mongodb');
const mongoose = require('mongoose')
//let dbConnection;

/*
module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb+srv://aditya:1234@cluster0.7somikt.mongodb.net/FoodDelivery')
        .then((client) => {
            
            dbConnection = client.db();
            return cb();
        })
        .catch(err =>{
            console.log(err)
            return cb(err)
        })
    },
    getDb:(cb) => dbConnection
}

*/

const mongoConnect = async() =>{
    await mongoose.connect("mongodb+srv://aditya:1234@cluster0.7somikt.mongodb.net/FoodDelivery")
    .then(async()=>{
        global.food = []
        global.foodCategory = []
        console.log("cononected")
         await mongoose.connection.db.collection("indianfood")
        .find({}).forEach(
            data => global.food.push(data)
            

        )

        await mongoose.connection.db.collection("foodCatagery")
        .find({}).forEach(catData => global.foodCategory.push(catData))

       
        
    })
    .catch((err) =>{
        console.log(err);
    })
}

module.exports = mongoConnect;