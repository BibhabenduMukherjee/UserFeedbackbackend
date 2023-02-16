const cors = require("cors")
const helmet = require("helmet")
const express = require("express")
const app = express();


app.use(express.json())
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mukherjee4004@gmail.com",
      pass: "aqdgrodjzllmoxph",
    },
  });
  app.post( "/submit" , async(req,res)=>{
    const {name , email } = req.body;
    const sender = "Bibhabendu Mukherjee"
    const output = `Dear <b>${name}</b>,
  
    Thank you for your recent Subcription from our site. We appreciate your Time !!
    
    If you have any questions or concerns, please don't hesitate to contact us.
    
    Best regards,
    
    ${sender}
    
    for further query email to <a href="mailto: mukherjee4004@gmail.com">mukherjee4004@gmail.com</a>
    `;

  
  //const user = new DataService(name , email)
  try{
   // const response =await user.addUser();
    var mailOptions = {
      from: "mukherjee4004@gmail.com",
      to: email,
      subject: "Email For Appreciation", // Subject line
      html: output, // plain text body
    };
   transporter.sendMail(mailOptions, function(err , info){
    if (err) {
      return console.log(err);
    }else{
      console.log(info)
    }
  
   })
//res.status(201).json({success:true})
    
  }catch(err){
    res.status(400).send({})
    console.log(err);
  }
  
  res.status(200).json({success : true})
  })
  

  app.listen(3001 , ()=>{
    console.log("Server on");
  }) 