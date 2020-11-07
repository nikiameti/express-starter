module.exports = function(req,res,next){
    if(req.query.name == "admin"){
        next();
    } else {
        res.send("Not Admin")
    }
}
