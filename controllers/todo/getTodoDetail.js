const { Todo } = require('../../models')
const ErrorResponse = require('../../utils/ErrorResponse');

module.exports = async (req, res, next) => {
    try {
        const todoId = req.params.id;
        const todo = await Todo.findByPk(todoId);
        if (!todo) {
            return next(new ErrorResponse(`Todo with ID ${todoId} Not Found`, 404, "Not Found"));
        }
        res.status(200).json({
            status: 'success',
            message: "success",
            data: todo,
        })
        next();
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}