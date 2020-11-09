const JwtService = require("../services/JwtService")

module.exports = function(req,res,next){
    try{
        if(req.headers.authorization){
            let token = JwtService.decode(req.headers.authorization.split(" ")[1]);
            req.user = token;
            next()
        } else {
            throw new Error("Invalid authorization header")
        }
    } catch(e){
        res.send({
            error: e.message || "Unauthenticated" 
        })
    }
}