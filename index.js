const dotenv  = require("dotenv")
dotenv.config()
const cors = require("cors")
const helmet = require("helmet")
const express = require("express")
const app = express();
const util = require("util")
const exec = util.promisify(require("child_process").exec)
const DataBaseConnection  = require("./connection/db")
const uri = process.env.DB_URL
app.use(helmet());

const router = require("./controller/all")

const limiter = require("./Blocker/limiter")
const DataService = require("./dataservice/service")
const apikeygateway = require("./middleware/pp")

const db = new DataBaseConnection(uri); 
db.connectDb()
app.use(cors())
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(limiter)

// submit handler
app.get("/" , (req , res)=>{
  
  res.send("Wellcome to the page ")
})



app.use(apikeygateway)

app.use(router)


app.listen(3001 , ()=>{
  console.log("Server on");
}) 