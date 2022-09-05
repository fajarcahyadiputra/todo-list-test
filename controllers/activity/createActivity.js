const { Activity } = require('../../models')
const Joi = require('joi');
const ErrorResponse = require('../../utils/ErrorResponse');
const moment = require('moment-timezone')

let dateToday = moment.tz("Asia/Jakarta").format('YYYY-MM-DD HH:mm:SS');

module.exports = async (req, res, next) => {
    try {
        const dataBody = req.body;
        const schema = Joi.object({
            title: Joi.string().required(),
            email: Joi.string().required(),
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
        dataBody.created_at = dateToday;
        dataBody.updated_at = dateToday;

        const newActivity = await Activity.create(dataBody);
        res.status(201).json({
            status: 'Success',
            message: 'Success',
            data: newActivity,
        })
        next();
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}