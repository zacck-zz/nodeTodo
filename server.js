var express = require('express');
var app  = express();
const PORT = process.env.PORT  || 3000;

var todos = [{
  description: 'Task we want to get done',
  completed: false,
  id: 87686
},{
  description: 'Go Surfing',
  completed: false,
  id: 87689
}];

app.get('/', (req, res) => {
  res.send('Todo Api Root');
});

//GET /todos
app.get('/todos', (req, res) => {
  res.send(todos);
})
//GET /todos /:id
app.get('/todos/:id', (req, res) => {
  res.send(todos[req.params.id]);
})


app.listen(PORT, () => {
  console.log(`express listening on port ${PORT}`);
});
