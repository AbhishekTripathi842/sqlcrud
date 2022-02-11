//import express module

var express = require("express")
const Connection = require("mysql/lib/Connection")

//import database connection

var conn = require("../config/db_connection")

//get the connection object

var connection = conn.getConnection()

//connect to database

connection.connect()

//create router instance

var router = express.Router()

//create rest api

router.get("/",(req,res)=>{
    connection.query("select * from products",(err,recordsArray,fields)=>{
        if(err)
        {
            res.json({"message":"error"})
        }
        else
        {
            res.json(recordsArray)
        }
    })
})

//export router

module.exports = router