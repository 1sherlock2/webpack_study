const express = require('express')
const path = require('path');

const PORT = 4000;

const app = express();

app.get('/', (req,res) => {
  res.sendFile(path.resolve(__dirname,'../public/index.html'));
})
console.log(process.env.NODE_ENV)

app.listen(PORT, () => {
  console.log(`server was started on ${PORT} port`)
});