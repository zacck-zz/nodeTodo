var express = require('express');
var app  = express();
var _ = require('underscore');
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
  var todoId = parseInt(req.params.id, 10)
  var thisTodo = _.findWhere(todos, {id: todoId});
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
  if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
    return res.status(400).send();
  }
  todos.push({
    id: todoNextId,
    description: body.description,
    completed: body.completed
  });
  todoNextId++

  res.json(body);
});

//http delete
app.delete('/todos/:id', (req, res) => {
  var todoId = parseInt(req.params.id);
  var matchedTodo = _.findWhere(todos, {id: todoId});
  if(!matchedTodo || todoId == undefined) {
    res.status(404).send({"error":`No todo with id ${todoId}`});
  } else  {
    todos = todos.filter((todo) => {
      return todo.id != todoId
    });
    res.send(`${matchedTodo.description} Deleted!`)
  }
});

//http update
app.put('/todos/:id', (req, res) => {
  var body = req.body;
  var todoId = parseInt(req.params.id);
  var matchedTodo = _.findWhere(todos, {id: todoId});
  if(!matchedTodo || todoId == undefined) {
    res.status(404).send({"error":`No todo with id ${todoId}`});
  } else if (!_.isBoolean(body.completed) || !_.isString(body.description) || body.description.trim().length === 0) {
    todos = todos.map((todo) => {
      if(todo.id == todoId) {
        return {
          id: todoId,
          description: body.description,
          completed: body.completed
        }
      } else {
        return todo;
      }
    })
  }
})


app.listen(PORT, () => {
  console.log(`express listening on port ${PORT}`);
});
