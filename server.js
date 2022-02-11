//import express body-parser and cors modules

var express = require('express')
var bodyparser = require('body-parser')
var cors = require('cors')

//create rest object

var app = express()

//set JSON as mime type

app.use(bodyparser.json())

//client not sending form data -> encoding to JSON

app.use(bodyparser.urlencoded({extended:false}))

//enable CORS-> cross origine resource sharing
app.use(cors())

//import fetch insert update delete modules

var fetch = require("./fetch/fetch")
var insert = require("./insert/insert")
var update = require("./update/update")
var remov = require("./delete/delete")

//use above modules
app.use("/fetch",fetch)
app.use("/insert",insert)
app.use("/update",update)
app.use("/delete",remov)

//assign port number

app.listen(8080)

console.log("server listing port 8080")

/* 

>node server

test urls

http://localhost:8080/fetch  (get)

http://localhost:8080/insert                       

http://localhost:8080/update  (post)

http://localhost:8080/delete

body ->raw ->json
*/