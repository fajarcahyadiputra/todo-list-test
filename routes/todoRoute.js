var express = require('express');
var router = express.Router();
const { createTodo, updateTodo, deleteTodo, getsTodo, getTodoDetail } = require('../controllers/todo');
const authMidleware = require('../midleware/authMidleware');

router.post('/',authMidleware, createTodo);
router.patch('/:id',authMidleware, updateTodo);
router.get('/', getsTodo);
router.get('/:id', getTodoDetail);
router.delete('/:id',authMidleware, deleteTodo);

module.exports = router;
