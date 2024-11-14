const mongoose = require('mongoose');

const{ATLAS_DB_URL, NODE_ENV, LOCAL_DB_URL}= require('./server.config');

async function connectToDB(){
    try{

        if(NODE_ENV == "development"){
            
            await mongoose.connect(LOCAL_DB_URL);
        }

    } catch(error){
        console.log("Unable to connect to the DB server");

         console.log(error);
    }
}

module.exports = connectToDB;