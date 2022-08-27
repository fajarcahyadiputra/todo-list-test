const { Todo } = require('../../models')
const ErrorResponse = require('../../utils/ErrorResponse');
const datatable = require('../../utils/datatable')


module.exports = async (req, res, next) => {
    try {
        const page = req.query.page;
        const perPage = req.query.perPage;
        const searchValue = req.query.searchValue;

        //datatable
        let datatableParams = {
            "columns": [
                {
                    "data": "id",
                },
                {
                    "data": "title",
                    "searchable": true,
                    "sortable": true
                },
                {
                    "data": "is_active",
                    "sortable": true
                },
                {
                    "data": "priority",
                    "searchable": true,
                    "sortable": true
                },
                {
                    "data": "created_at",
                    "searchable": true,
                    "sortable": true
                },
                {
                    "data": "updated_at",
                    "searchable": true,
                    "sortable": true
                },
                {
                    "data": "activity_group_id",
                    "sortable": true
                },
            ],
            "order": {
                "column": "id",
                "dir": "asc"
            },
            "page": parseInt(page) || 1,
            "perPage": parseInt(perPage) || 10,
        }
        if (searchValue) {
            datatableParams.search = {
                "value": `${searchValue}`
            }
        }

        let datatableBody = await datatable(datatableParams);
        const todos = await Todo.findAndCountAll({
            ...datatableBody
        });
        res.status(200).json({
            status: 'success',
            message: "success",
            data: todos.rows,
            recordsTotal: todos.count
        })
        next();
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}