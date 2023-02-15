const express = require("express")
const router = express.Router()
const apikeygateway= require("../middleware/pp")
const DataService = require("../dataservice/service")
router.post( "/submit" , async(req,res)=>{
  const {name , email } = req.body;
 
//   var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
// if (ip.substr(0, 7) == "::ffff:") {
//   ip = ip.substr(7)
// }

const user = new DataService(name , email)
try{
  const response =await user.addUser();
  res.status(201).json({success:true})
}catch(err){
  res.status(400).send({})
  console.log(err);
}

//res.status(200).json({success : true})
})

module.exports = router 






