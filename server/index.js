import express from 'express';
import dotenv from 'dotenv';
dotenv.config()

const app = express();

const testKey = process.env.EXAMPLE_KEY;
console.log(testKey);
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000);