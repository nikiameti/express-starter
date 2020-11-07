module.exports = {
    hello:function(req,res){
        res.send("Hello")
    },
    secret:function(req,res){
        res.send("Hello from secret")
    }
}