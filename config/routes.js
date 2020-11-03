const router = require('express').Router();
const routes = {
    "GET /hello": "HomeController.hello"
}


Object.keys(routes).forEach(route => {
    try {
        let method = route.split(' ')[0].toLowerCase();
        let url = route.split(' ')[1];
        let controllerName = routes[route].split(".")[0];
        let controllerMethod = routes[route].split(".")[1];
        let controller = require(`../api/controllers/${controllerName}`)[controllerMethod];
        if(!controller){
            throw Error(`Controllers: ${controllerName}.${controllerMethod} doesn't exist`)
        }
        router[method](url,controller)
    } catch(e){
        console.error(e.message)
        process.exit(1)
    }
});
module.exports = router