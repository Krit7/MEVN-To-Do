const express = require('express');
const todoController = require('../controllers/todoController')
const app = express();

const router = express.Router()

router.get('/',todoController.getTodos)

router.get('/todo/:id',todoController.getTodo);

router.post('/edit/:id',todoController.editTodo);

router.post('/newtodo',todoController.addTodo);

router.post('/delete/:id',todoController.deleteTodo);



module.exports = router