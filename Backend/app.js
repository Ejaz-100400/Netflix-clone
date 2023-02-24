var express = require('express');
var bodyparser = require('body-parser');
const serverless = require('serverless-http');
const http =require('http');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const routes = require('./Routes/route');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
})
app.use(bodyparser.urlencoded({ extended: true }))
app.use('/', routes);
module.exports.handler = serverless(app);

mongoose.connect('mongodb+srv://Ejaz-100400:Jazir%4010420@cluster0.f945lsw.mongodb.net/Netflix_data?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(client => {
        app.listen(3000, 'localhost', () => {
            console.log(`listening on http://localhost:${3000}`)
        });
        var conn = mongoose.connection;
        conn.on('connected', function () {
            console.log('database is connected successfully');
        });
        conn.on('disconnected', function () {
            console.log('database is disconnected successfully');
        })
        conn.on('error', console.error.bind(console, 'connection error:'));
        module.exports = conn;
    }).catch(err => {
        console.log(err);
    });
