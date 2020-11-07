const controllersPath = '../api/controllers';
const middlewarePath = '../api/middlewares';
const router = require('express').Router();

const routes = require('./routes');

const policies = require('./policies')

function loadRoutes(){
    Object.keys(routes).forEach(route => {
        try {
            let method = route.split(' ')[0].toLowerCase();
            let url = route.split(' ')[1];
            let controllerName = routes[route].split(".")[0];
            let controllerMethod = routes[route].split(".")[1];
            let controller = require(`${controllersPath}/${controllerName}`)[controllerMethod];
            let controllerPolicies = []
            let middlewares = []
            try{
                controllerPolicies = policies[controllerName][controllerMethod];
            }catch (e){

            }
            if(controllerPolicies && controllerPolicies.length > 0){
                controllerPolicies.forEach(function(p){
                    middlewares.push(require(`${middlewarePath}/${p}`))
                })
            }

            if(!controller){
                throw Error(`Controllers: ${controllerName}.${controllerMethod} doesn't exist`)
            }
            router[method](url,middlewares,controller)
        } catch(e){
            console.error(e.message)
            process.exit(1)
        }
    });
}

function getRoutes(){
    return router
}

module.exports = function(){
    loadRoutes()
    return {
        getRoutes:getRoutes
    }
}