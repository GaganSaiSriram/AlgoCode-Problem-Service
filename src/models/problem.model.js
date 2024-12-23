const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({

    title:{
          type:String,
          required:[true,'Title should not be empty']
    },

    description:{
          type:String,
          required:[true,'Description cannot be empty']
    },
    difficulty:{
          
        type:String,
        enum:['easy','medium','hard'],
        required:[true,'Difficulty cannot be empty'],
        default:'easy'

    },
    testCases : [
         {
            input:{
                type:String,
                
            },

            output:{
                type:String,
                
            }
         }

    ],

    editorial:{
        type:String
    }


});

const Problem = mongoose.model('Problem',problemSchema);

module.exports = Problem;


/**
 * [{input:'5' , output:'10} , {input:'2',output:'20}]
 * 
 * input:
 * 
 * 5 \n
 * 2 3 4 5 6\n
 * 8
 * 
 * output:
 * 1 3
 * 
 * 
 */

