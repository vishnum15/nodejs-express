const express = require('express');
const path =require('path');
//Init app
const app = express();
const port = 3000;

// View Engine

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

//Home route 
app.get('/', (req, res) => res.render('index',{
    'title':'Hakuna Matata'
}))

//Add route
app.get('/users/add',(req,res)=>res.render('add',{arr:[{
    id:1,
    name:'onemptied',
    Place:'Bangalore'
},{
    id:2,
    name:'Twomptied',
    Place:'Bangalore'
}]}))
// Start server
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))