const express = require("express")
const router = express.Router()
const apikeygateway= require("../middleware/pp")
const DataService = require("../dataservice/service")
router.post( "/submit", apikeygateway , async(req,res)=>{
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
  
  console.log(err);
}
const {apikey} = req.query
res.status(200).json({success : true})
})

module.exports = router 






