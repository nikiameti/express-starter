module.exports = {
    hello: async function(req,res){
        res.send("Hello")
    },
    secret:function(req,res){
        res.send(`Hello from secret :${req.user.name}`)
    }
}