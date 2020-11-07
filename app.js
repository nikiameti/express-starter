const express = require('express');
const app = express();
const port = 3000;
const bootstrap = require('./config/bootstrap')();

app.use('/',bootstrap.getRoutes());


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})