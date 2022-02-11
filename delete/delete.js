//import express
var express = require('express')
//import database connection

var conn = require('../config/db_connection')

//get connection object

var connection = conn.getConnection()

//connect to database
connection.connect()

//create router instance

var router = express.Router()

//create rest api

router.post("/",(req,res)=>{
    var p_id = req.body.p_id
   
    connection.query("delete from products where p_id = "+p_id,(err)=>{

        if(err){
            res.json({'delete':'error'})
        }
        else{
            res.json({'delete':'success'})
        }

    })

    })

//export router
module.exports = router