module.exports = function(req,res,next){
    if(req.query.user == "1"){
        next();
    } else {
        res.send("Unauthorized")
    }
}