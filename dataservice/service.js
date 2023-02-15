const Model = require("../models/u")

class DataService{
    constructor(name , email ){
    this.name = name
    this.email = email
  
    }

   returnResponce(){
   // console.log(msg)
    return "hello"
   }
    
    async addUser(){
        const user = new Model({
            name : this.name,
            email : this.email,
           
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