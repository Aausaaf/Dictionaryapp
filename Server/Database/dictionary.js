const mongoose = require('mongoose')

const dictionarySchema = new mongoose.Schema({  // creating Schema it defines the shap of the data
    name:{
        type:String,
       
    },
    text:{
        type:String,
        
    },
    etymologies:{
        type:Array,
       
    },
    shortDefinitions:{
        type:Array
    },
    definitions:{
        type:Array,
       
    },
    phrases:{
        type:Array
    }
})

const Dictionary = mongoose.model('Dictionary',dictionarySchema) // making model so that with the help of this we can create collection 

module.exports ={Dictionary}