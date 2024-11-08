const express = require('express');

const bodyParser = require('body-parser');


const {PORT} = require('./config/server.config');

const apiRouter = require('./routes/index');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.text());


app.use('/api' , apiRouter);



app.get('/ping' , function (req,res){
    return res.json({message:"Problem service is alive!!"});
})


app.listen(PORT , function (){
    console.log("server running on PORT",PORT);
})

