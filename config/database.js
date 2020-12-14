const { Sequelize } = require('sequelize');

const Database = function(){
    let connection = null;
    function getConection(){
        return connection;
    }

    async function connect(){
        connection = new Sequelize('pinme', 'postgres', 'mysecretpassword', {
            host: process.env.DB_HOST,
            dialect: 'postgres',
            dialectOptions: {
              options: {
                requestTimeout: 3000,
                connectTimeout: 1000
              }
            },
          });
    }
    return {
        getConection:getConection,
        connect:connect
    }
}

module.exports = Database()