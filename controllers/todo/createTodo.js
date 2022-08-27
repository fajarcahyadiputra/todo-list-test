const { Todo, Activity } = require('../../models')
const Joi = require('joi');
const ErrorResponse = require('../../utils/ErrorResponse');
const moment = require('moment-timezone')

let dateToday = moment.tz("Asia/Jakarta").format('YYYY-MM-DD HH:mm:SS');

module.exports = async (req, res, next) => {
    try {
        const dataBody = req.body;
        const schema = Joi.object({
            title: Joi.string().required(),
            activity_group_id: Joi.string().required(),
            priority: Joi.allow("very-high", "high", "low", "very-low", "medium").optional(),
        });

        // schema options
        const options = {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true
        };
        const { error, value } = schema.validate(req.body, options);

        if (error) {
            return next(new ErrorResponse(error.details, 401));
        }

        let isActivityExists = await Activity.findByPk(dataBody.activity_group_id);
        if (!isActivityExists) {
            return next(new ErrorResponse("Activity with activity_group_id 331313131 Not Found", 404, 'Not Found'));
        }
        dataBody.is_active = 1;
        if (!dataBody.priority) {
            dataBody.priority = 'very-high';
        }
        dataBody.created_at = dateToday;
        dataBody.updated_at = dateToday;
        const newtodd = await Todo.create(dataBody);
        res.status(201).json({
            status: 'success',
            message: 'Successfully inserting',
            data: newtodd,
        })
        next();
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}