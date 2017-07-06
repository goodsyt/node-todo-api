var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var {sequelize} = require('./db/database');
var {user} = require('./models/user');
var {todo} = require('./models/todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  todo.create(
    {text: _.trim(req.body.text), completed: req.body.completed}
  ).then((newTodo) =>{
    res.send(newTodo);
  }, (e) => {
    res.send(e);
  });
});
app.listen('3000', () => {
  console.log('Start server on port 3000');
});