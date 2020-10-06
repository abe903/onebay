const path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();


app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : true}));


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mchin615@',
    database: 'many'
});

connection.connect(function(error){
    console.log('Database Connected!');
}); 

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});