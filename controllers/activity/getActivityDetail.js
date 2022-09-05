const { Activity } = require('../../models')
const ErrorResponse = require('../../utils/ErrorResponse');
const { Op } = require('sequelize')

module.exports = async (req, res, next) => {
    try {
        const activityId = req.params.id;
        const activity = await Activity.findOne({
            where: {
                id: activityId,
                deleted_at: {
                    [Op.eq]: null
                }
            }
        });
        if (!activity) {
            return next(new ErrorResponse(`Activity with ID ${activityId} Not Found`, 404, "Not Found"));
        }
        res.status(200).json({
            status: 'success',
            message: "Success",
            data: activity,
        })
        next();
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}