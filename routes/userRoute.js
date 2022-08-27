var express = require('express');
var router = express.Router();
const { createUser, updateUser, deleteUser, getsUser, getUserDetail } = require('../controllers/user');
const authMidleware = require('../midleware/authMidleware');

router.post('/', authMidleware, createUser);
router.patch('/:id', authMidleware, updateUser);
router.delete('/:id', authMidleware, deleteUser);
router.get('/:id', getUserDetail);
router.get('/', getsUser);

module.exports = router;
