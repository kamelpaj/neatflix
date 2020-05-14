import express from 'express';
import dotenv from 'dotenv';
dotenv.config()
const MongoClient = require('mongodb').MongoClient;
const atlasPassword = process.env.DB_PASSWORD;
const app = express();
const uri = `mongodb+srv://atlasAdmin:${atlasPassword}@neatflix-iftiq.mongodb.net/test?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000);