const express = require("express")
const router = express.Router()

const DataService = require("../dataservice/service")
router.post( "/submit",async(req,res)=>{
  const {name , email , message} = req.body;
//   var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
// if (ip.substr(0, 7) == "::ffff:") {
//   ip = ip.substr(7)
// }

const user = new DataService(name , email  , message)
try{
  const response =await user.addUser();
  res.status(201).send(response)
}catch(err){
  res.status(401)
  console.log(err);
}


})

module.exports = router 






