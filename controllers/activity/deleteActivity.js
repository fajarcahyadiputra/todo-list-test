const { Activity } = require('../../models')
const ErrorResponse = require('../../utils/ErrorResponse');
const moment = require('moment-timezone')

let dateToday = moment.tz("Asia/Jakarta").format('YYYY-MM-DD HH:mm:SS');

module.exports = async (req, res, next) => {
    try {
        const activityId = req.params.id;
        const activity = await Activity.findByPk(activityId);
        if (!activity) {
            return next(new ErrorResponse(`Activity with ID ${activityId} Not Found`, 404, "Not Found"));
        }
        await Activity.update({
            deleted_at: dateToday
        }, {
            where: {
                id: activityId
            }
        });
        res.status(200).json({
            status: 'Success',
            message: 'Success',
            data: {}
        })
        next();
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}