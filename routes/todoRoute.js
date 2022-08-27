var express = require('express');
var router = express.Router();
const { createTodo, updateTodo, deleteTodo, getsTodo, getTodoDetail } = require('../controllers/todo');
const authMidleware = require('../midleware/authMidleware');

router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.get('/', getsTodo);
router.get('/:id', getTodoDetail);
router.delete('/:id', deleteTodo);

module.exports = router;
