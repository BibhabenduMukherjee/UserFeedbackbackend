const express = require("express")
const router = express.Router()
const nodemailer = require("nodemailer")

const DataService = require("../dataservice/service")

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mukherjee4004@gmail.com",
    pass: "aqdgrodjzllmoxph",
  },
});


router.post( "/submit" , async(req,res)=>{
  const {name , email } = req.body;
  const sender = "Bibhabendu Mukherjee"
  const output = `Dear ${name},

  Thank you for your recent Subcription from our store. We appreciate your Time !!
  
  If you have any questions or concerns, please don't hesitate to contact us.
  
  Best regards,
  
  ${sender}`;
//   var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
// if (ip.substr(0, 7) == "::ffff:") {
//   ip = ip.substr(7)
// }

const user = new DataService(name , email)
try{
  const response =await user.addUser();
  var mailOptions = {
    from: "mukherjee4004@gmail.com",
    to: email,
    subject: "Email For Appreciation", // Subject line
    html: output, // plain text body
  };
 transporter.sendMail(mailOptions, function(){
  if (err) {
    return console.log(err);
  }

 })
 res.status(201).json({success:true})
  
}catch(err){
  res.status(400).send({})
  console.log(err);
}

//res.status(200).json({success : true})
})

module.exports = router 






