var express = require('express');
var router = express.Router();
const { createActivity, updateActivity, getActivityDetail, getsActivity, deleteActivity } = require('../controllers/activity');
const authMidleware = require('../midleware/authMidleware');

router.post('/', createActivity);
router.patch('/:id', updateActivity);
router.get('/', getsActivity);
router.get('/:id', getActivityDetail);
router.delete('/:id', deleteActivity);

module.exports = router;
