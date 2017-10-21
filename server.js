//console.log("hello word");
const express = require('express');
const url = require('url');


//console.log(express);
const app = express();
//console.log(app); 

//express.static(root, [options]) ??
app.use(express.static('public')) //для статичного сервера


app.get('/api', (req, res) => {
    const params = url.parse(req.url, true).query;
    console.log(params);
    //console.log(req.param);
    console.log(req.url);
//    res.send('hello from server');
  
    res.send('back');
}); //відкрив двері рут. можу в них стукати і реакція колбек


app.get('/ajax', (req, res) => {
    const rnd = Math.random();
    res.end(String(rnd));  // end how return. onli string
    
             });


app.listen(3000, () => {
    console.log("up.listen on server 3000") // at finish ol file
} );







