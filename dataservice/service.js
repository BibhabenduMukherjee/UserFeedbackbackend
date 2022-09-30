const Model = require("../models/u")

class DataService{
    constructor(name , email , message){
    this.name = name
    this.email = email
    this.message = message
    }

   returnResponce(msg){
    console.log(msg)
    return msg
   }
    
    async addUser(){
        const user = new Model({
            name : this.name,
            email : this.email,
            message : this.message
        })

       try{
       const data =  await user.save()
       return data
        
       }catch(err){
       return err
       }
      


    }

    

    

}

module.exports = DataService