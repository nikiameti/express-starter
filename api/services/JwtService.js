const { json } = require('express');
const jwt = require('jsonwebtoken');
module.exports = {
    encode: function(data){
        let token = jwt.sign(data, process.env.JWT_SECRET);
        return token;
    },
    decode: function(token){
        let decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded;
    }
}