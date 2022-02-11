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
    var p_name = req.body.p_name
    var p_cost = req.body.p_cost

    connection.query(`update products set p_name = '${p_name}',p_cost = ${p_cost} where p_id = ${p_id}`,(err,result)=>{
        if(err)
        {
            res.json({'update':'error'})
        }
        else{
            res.json({'update':'success'})
        }
    })
})
//export router

module.exports = router