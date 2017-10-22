// Imports
const express = require('express');
const url = require('url');
const bodyParser = require('body-parser');

// App object
const app = express();

// Static server root folder
// для статичного сервера
app.use(express.static('public'));
app.use(bodyParser.text())

// API endpoints
// відкрив двері рут. можу в них стукати і реакція колбек
app.get('/api', (req, res) => {
    const params = url.parse(req.url, true).query;
    console.log(params);
    console.log(req.url);
    res.send('back');
});

app.get('/ajax', (req, res) => {
    const rnd = Math.random();
    // end as return. string only
    res.end(String(rnd));
});



app.post('/ajax', (req, res) => {
   console.log('post');
    const adress = req.body;
    console.log(adress);
    res.end('ok');
});






// Starting the server on port 3000
app.listen(3000, () => {
    // at the end of a file
    console.log("app listen on port 3000");
});


