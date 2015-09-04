var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
// module.exports allows us to expose an export to the taskModel variable
var taskModel = require('../models/Tasks');

// populate the database with fun stuff
// CREATE in (CRUD)
// var dataObject = {
//   name: 'Buy orange juice',
//   completed: false,
//   description: 'Go to Jewel and buy OJ'
// }
// function(error, task) - return an error from mongo if exists
// else it returns an items(s) from the database
// taskModel.create(dataObject, function(error, task){
//   if (error) return error;
//   console.log('A document object has been created: ');
//   console.log(task);
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// send all database objects to api call
router.get('/api', function(req, res, next) {
  taskModel.find(function(error, tasks){
    if (error) return error;
    res.send(tasks)
  });
});

// GET by id
router.get('api/:id', function(req, res, next) {
  taskModel.findById(req.params.id, function(error, task) {
    if (error) return error;
    res.json(task)
  })
});

// CREATE
router.post('/api', function(req, res, next) {
  taskModel.create(req.body, function(error, task){
    if (error) return error;
    console.log('A document object has been created: ');
    console.log(task);
  })
});

module.exports = router;
