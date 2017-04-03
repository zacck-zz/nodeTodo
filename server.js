var express = require('express');
var app  = express();
const PORT = process.env.PORT  || 3000;

app.get('/', (req, res) => {
  res.send('Todo Api Root');
});

//GET /todos
app.get('/todos', (req, res) => {
  res.send(todos);
})
//GET /todos /:id
app.get('/todos/:id', (req, res) => {
  var thisTodo = todos.find((todo) => {
    return todo.id == req.params.id;
  })
  if(thisTodo != undefined) {
    res.send(thisTodo);
  } else {
    res.status(404).send('Wow We dont have that todo');
  }

})


app.listen(PORT, () => {
  console.log(`express listening on port ${PORT}`);
});
