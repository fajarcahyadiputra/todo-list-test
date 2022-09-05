const { Activity } = require('../../models')
const Joi = require('joi');
const ErrorResponse = require('../../utils/ErrorResponse');
const moment = require('moment-timezone')

let dateToday = moment.tz("Asia/Jakarta").format('YYYY-MM-DD HH:mm:SS');

module.exports = async (req, res, next) => {
    try {
        const dataBody = req.body;
        const activityId = req.params.id;
        if (!activityId) {
            return next(new ErrorResponse("client sent an invalid request, id is required", 404, "Not Found"));
        }
        const schema = Joi.object({
            title: Joi.string().optional(),
            email: Joi.string().optional(),
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
        const activity = await Activity.findByPk(activityId);
        if (!activity) {
            return next(new ErrorResponse(`Activity with ID ${activityId} Not Found`, 404, "Not Found"));
        }
        Object.keys(dataBody).forEach(key => (activity[key] = dataBody[key]))
        activity.updated_at = dateToday;
        await Activity.update(activity, {
            where: {
                id: activityId
            }
        });
        res.status(200).json({
            status: 'Success',
            message: 'Success',
            data: activity,
        })
        next();
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}