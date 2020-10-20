const path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
var session = require('express-session');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended : true}));

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mchin615@',
    database: 'onebay'
});

connection.connect(function(error){
    console.log('Database Connected!');
}); 

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});

app.get('/',(req, res) => {
    let sql = 'SELECT * FROM events';
    connection.query(sql, (err, results) => {
        if (err){
            console.log(err)
        }
        console.log(results)
        res.render("home", {
            results: results
        });
    }); 
})

app.get('/register',(req, res) => {
    res.render('register')
})

app.post('/register',(req, res) => {
    let data = {name: req.body.name, password: req.body.password};
    let sql = "INSERT INTO admin SET ?";
    connection.query(sql, data,(err) => {
        if(err) throw err;
        res.redirect('/');
    }); 
})

app.get('/login',(req, res) => {
    res.render('login')
})

app.post('/login',(req, res) => {
    let name = req.body.name;
    let password = req.body.password;
    let sql = 'SELECT * FROM admin WHERE name = ? AND password = ?';
    connection.query(sql,[name, password],(err, results) => {
      if(err) throw err;
      req.session.name = results[0].name
      req.session.eyed = results[0].id
      res.redirect('/admin');
    }); 
})

app.get('/signup',(req, res) => {
    res.render('signup')
});

app.get('/admin',(req, res) => {
    let username = req.session.name; 
    let id = req.session.eyed;
    res.render('admin', {
        name: username,
        id: id
    });
});

app.post("/addchurch", (req, res) => {
    let edata = { name: req.body.name, church: req.body.church, guests: req.body.guests, email: req.body.email}
    console.log(edata);
    let sql = "INSERT INTO retreat SET ?";
    connection.query(sql, edata,(err) => {
        if(err) throw err;
        res.redirect('/');
    }); 
})

app.post("/addevent/:id", (req, res) => {
    console.log(req.body.id);
    let edata = { name: req.body.name, description: req.body.description, date: req.body.date, location: req.body.location, adminID: req.params.id}
    let sql = "INSERT INTO events SET ?";
    connection.query(sql, edata,(err) => {
        if(err) throw err;
        res.redirect('/');
    }); 
})

