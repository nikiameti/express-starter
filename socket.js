function socket(server){
    let io = require('socket.io')(server)
    io.on('connection', (socket) => {
        console.log('a user connected');
    });
}

module.exports = socket