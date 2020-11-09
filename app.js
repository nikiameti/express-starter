const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000;
const bootstrap = require('./config/bootstrap')();
app.use(cors());
app.use('/',bootstrap.getRoutes());

app.get("/", async (req,res)=>{
  res.sendFile(__dirname + '/client/index.html')
})

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const socket = require('./socket')(server)