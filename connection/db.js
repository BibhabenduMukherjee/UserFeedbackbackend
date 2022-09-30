import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";
const uri = process.env.DB_URL




export class DataBaseConnection {
   
     constructor (uri){
      this.uri = uri;
     }
     connectDb() {
     
mongoose.connect(uri , {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
 console.log("Connected successfully");
});
    }
}


