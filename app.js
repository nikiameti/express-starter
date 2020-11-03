const express = require('express');
const router = require('./config/routes');
const app = express();
const port = 3000;
const routes = require('./config/routes');

app.use('/',routes);




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})