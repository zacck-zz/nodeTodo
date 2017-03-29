var express = require('express');

var app  = express();

const PORT = process.env.PORT  || 3000;


app.get('/', (req, res, next) => {
  res.send('Todo Api Root');
});


app.listen(PORT, () => {
  console.log(`express listening on port ${PORT}`);
});
