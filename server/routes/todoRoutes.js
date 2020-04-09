const express = require('express');
const todoController = require('../controllers/todoController')
const app = express();

const router = express.Router()

router.get('/',todoController.getTodos)

router.get('/todo/:id',todoController.getTodo);

module.exports = router