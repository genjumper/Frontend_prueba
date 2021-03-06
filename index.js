const express = require("express");

const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + '/views'));

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('home')
});

app.use(express.urlencoded({
    extended: true
}));

app.post('/movie', (req, res) =>{
    //console.log({ name: req.body.titleMovie }.name)
    res.redirect('/movie/' + {name: req.body.titleMovie}.name)
});

app.get('/movie/:title', (req, res) =>{
    const title = req.params;
    res.render('movie', title);
});





app.listen(port, () =>{
    console.log(`Example app listening at http://localhost:${port}`);
});