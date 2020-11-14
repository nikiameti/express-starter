const JwtService = require('../services/JwtService')
module.exports = {
    login: async (req,res)=>{
        if(req.body.username && req.body.password){
            let token = JwtService.encode({name:"Besnik"});
            res.send(token)
        } else {
            res.send({
                error:"You must provide username and password"
            })
        }
    },
    signUp: async (req,res)=>{
        
    }
}