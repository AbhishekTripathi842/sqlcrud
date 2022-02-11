// //import express module 
// var express = require("express")

// //import database connection
// var conn = require("../config/db_connection")

// //get connection object

// var connection = conn.getConnection()

// //connect to database

// connection.connect()

// //create router instance

// var router = express.Router()

// //create rest api

// router.post("/",(req,res)=>{
//     var p_id = req.body.p_id
//     var p_name = req.body.p_name
//     var p_cost = req.body.p_cost
//      //how to fire query
//     connection.query(`insert into products values ('${p_id}' , '${p_name}', '${p_cost}')`,(err,result)=>{
//         if(err)
        
//             res.json({'insert':'error'})
        
//         else
        
//             res.json({'insert':'success'})
        
//     })
// })

// //export router

// module.exports = router





///import express module
var express = require("express")
//import database connection
var conn = require("../config/db_connection")
//get connection object
var connection = conn.getConnection()
//connect to database
connection.connect()
//create router instance
var router = express.Router()
//create rest api
router.post("/",(req,res)=>{
    var p_id = req.body.p_id
    var p_name = req.body.p_name
    var p_cost = req.body.p_cost
    connection.query(`insert into products values (${p_id}, '${p_name}', ${p_cost})`, (err, result)=>{
        if (err)
         res.json({'insert': 'error'})
        else
         res.json({'insert':'success'}) 
    })
})
//export router
module.exports = router