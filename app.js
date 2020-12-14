const express = require('express');
const config = require('dotenv').config();
const app = express();
const port = process.env.PORT;
const bootstrap = require('./config/bootstrap')();
const cors = require('cors');


const Database = require('./config/database');
Database.connect()

const Post = require('./api/models/Post');


(async () => {
  await Database.getConection().sync();
})();


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
  
app.use(cors());
app.use('/',bootstrap.getRoutes());

app.get("/", async (req,res)=>{
  res.sendFile(__dirname + '/client/index.html')
})




const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})