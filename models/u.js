const mongoose = require("mongoose")
const responseSchema = new mongoose.Schema({
    name : {type : String},
    email : {type : String},
   
   
})

// for this database message max goes  upto 13000 words long and 88555 char
// worst case 5500 records (approx) single - cluster
// best case 536,870+ records each size(1000 Byte)  200 words
const Model = mongoose.model('Response' , responseSchema)
module.exports = Model