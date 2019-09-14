// import * as express from "express";
const express = require("express");
const bodyParser = require("body-parser");
var mysql = require('mysql');
const cors = require('cors');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mean_api'
})

dbConn.connect();


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send("Hello");
})

app.get('/api/cats', (req, res) => {
    // res.send(
    //     [{ name: 'lilly' }, { name: 'lucy' }]
    // )
    dbConn.query("SELECT * from cats" , function( err , results ){
        if(err){
            console.log("can't fetch cats")
        }
        else{
           res.send(results) 
        }
    })
})

app.route('/api/cats/:name').get((req, res) => {
    const requestedCatName = req.params['name']
    res.send({ name: requestedCatName })
})

app.route('/api/cats').post((req, res) => {
    res.send(201, req.body)
})

app.route('/api/cats/:name').put((req, res) => {
    res.send(200, req.body)
})

app.route('/api/cats/:name').delete((req, res) => {
    res.sendStatus(204)
})

app.listen(8000, () => {
    console.log("server started");
})