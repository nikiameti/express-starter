const express = require('express');
const config = require('dotenv').config();
const app = express();
const port = process.env.PORT;
const bootstrap = require('./config/bootstrap')();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/',bootstrap.getRoutes());


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})