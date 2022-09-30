import * as dotenv from 'dotenv';dotenv.config()
import cors from "cors"
import helmet from 'helmet';import  express  from 'express';const app = express();import { DataBaseConnection } from './connection/db';const uri = process.env.DB_URL
app.use(helmet());import {Submitdata} from "./controller/all";import {limiter} from "./Blocker/limiter"
const db = new DataBaseConnection(uri); 
db.connectDb()
app.use(cors())
app.use(express.json());app.use(express.urlencoded({extended : false}));app.use(limiter)
// submit handler
app.get("/" , (req , res)=>{
  res.send("Wellcome to the page ")
})
app.use(Submitdata)


app.listen(3001 , ()=>{
  console.log("Server on");
}) 