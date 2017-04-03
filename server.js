var express = require('express');
var app  = express();
var bodyParser = require('body-parser');
const PORT = process.env.PORT  || 3000;
var todos = [];
var todoNextId = 1;


//set up middleware
app.use(bodyParser.json());
app.get('/', (req, res) => {
  res.send('Todo Api Root');
});

//GET /todos
app.get('/todos', (req, res) => {
  res.send(todos);
});
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
});

//POST request to /todos
app.post('/todos', (req, res) => {
  //use body parser middleware to consume some json
  var body = req.body;
  console.log('description: ', body.description);
  todos.push({
    id: todoNextId,
    description: body.description,
    completed: body.completed
  });
  todoNextId++

  res.json(body);
});


app.listen(PORT, () => {
  console.log(`express listening on port ${PORT}`);
});
