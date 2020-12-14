const { Sequelize } = require('sequelize');

const Database = function(){
    let connection = null;
    function getConection(){
        if(connection){
          return connection;
        } else {
          return this.connect()
        }
        
    }

    async function connect(){
        connection = new Sequelize('pinme', 'postgres', 'mysecretpassword', {
            host: 'localhost',
            dialect: 'postgres',
            dialectOptions: {
              options: {
                requestTimeout: 3000,
                connectTimeout: 1000
              }
            },
          });
          return connection;
    }
    return {
        getConection:getConection,
        connect:connect
    }
}

module.exports = Database()