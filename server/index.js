import express from 'express';
import dotenv from 'dotenv';
import router from './router';
import omdbHandler from './omdbHandler';

dotenv.config()
const MongoClient = require('mongodb').MongoClient;
const atlasPassword = process.env.DB_PASSWORD;
const uri = `mongodb+srv://atlasAdmin:${atlasPassword}@neatflix-iftiq.mongodb.net/test?retryWrites=true&w=majority`;

const app = express();
app.use(router);

console.log(omdbHandler)

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

 
app.listen(5000);