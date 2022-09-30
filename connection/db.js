const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const uri = process.env.DB_URL




class DataBaseConnection {
   
     constructor (uri){
      this.uri = uri;
     }
     connectDb() {
    


     try{
        mongoose.connect(uri , {useNewUrlParser: true, useUnifiedTopology: true})
        const db = mongoose.connection
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
         console.log("Connected successfully");
        });
     }catch(err){
        console.log("Faild to connect")
     }


    }
}

module.exports = DataBaseConnection

