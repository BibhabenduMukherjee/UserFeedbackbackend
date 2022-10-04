
const apikeygateway = (req , res , next) =>{
const {apikey} = req.query
if(apikey == process.env.PASSCODE_FOR_API){
    next()
}
else{
    return res.status(400).json({err : "invalid"})
}

}

module.exports = apikeygateway