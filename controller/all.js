import express from "express"
const router = express.Router()
import Model from  '../models/u'
import DataService from "../dataservice/service.js"
router.post( "/submit",async(req,res)=>{
  const {name , email , message} = req.body;
//   var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
// if (ip.substr(0, 7) == "::ffff:") {
//   ip = ip.substr(7)
// }

const user = new DataService(name , email  , message)
const response =await user.addUser();
res.status(201).send(response)
})

export {router as Submitdata}






