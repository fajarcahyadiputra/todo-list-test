const { Todo, Activity } = require('../../models')
const Joi = require('joi');
const ErrorResponse = require('../../utils/ErrorResponse');
const moment = require('moment-timezone')

let dateToday = moment.tz("Asia/Jakarta").format('YYYY-MM-DD HH:mm:SS');

module.exports = async (req, res, next) => {
    try {
        const dataBody = req.body;
        const todoId = req.params.id;
        if (!todoId) {
            return next(new ErrorResponse("client sent an invalid request, id is required", 404, "Not Found"));
        }
        const schema = Joi.object({
            title: Joi.string().optional(),
            activity_group_id: Joi.string().optional(),
            is_active: Joi.number().optional(),
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
        const todo = await Todo.findByPk(todoId);
        if (!todo) {
            return next(new ErrorResponse(`Todo with ID ${todoId} Not Found`, 404, "Not Found"));
        }
        Object.keys(dataBody).forEach(key => (todo[key] = dataBody[key]))
        todo.updated_at = dateToday;
        await Todo.update(todo, {
            where: {
                id: todoId
            }
        });
        res.status(200).json({
            status: 'Success',
            message: 'Success',
            data: todo,
        })
        next();
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}