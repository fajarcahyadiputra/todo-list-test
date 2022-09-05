var express = require('express');
var router = express.Router();
const { createActivity, updateActivity, getActivityDetail, getsActivity, deleteActivity } = require('../controllers/activity');
const authMidleware = require('../midleware/authMidleware');

router.post('/',authMidleware, createActivity);
router.patch('/:id',authMidleware, updateActivity);
router.get('/', getsActivity);
router.get('/:id', getActivityDetail);
router.delete('/:id', authMidleware, deleteActivity);

module.exports = router;
