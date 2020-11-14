const Database = require('../../config/database')
module.exports = {
    hello: async function(req,res){
        Database.connect()
        Database.getConection()
        res.send("Hello")
    },
    secret:function(req,res){
        res.send(`Hello from secret :${req.user.name}`)
    },
    secrets:function(req,res){
        res.send(`Hello from secrets open `)
    }
}