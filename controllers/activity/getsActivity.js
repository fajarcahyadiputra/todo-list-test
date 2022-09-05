const { Activity } = require('../../models')
const ErrorResponse = require('../../utils/ErrorResponse');
const datatable = require('../../utils/datatable')
const { Op } = require('sequelize')


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
                    "data": "email",
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
                    "data": "deleted_at",
                    "searchable": true,
                    "sortable": true
                }
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
        const activities = await Activity.findAndCountAll({
            ...datatableBody,
            where: {
                deleted_at: {
                    [Op.eq]: null
                }
            }
        });
        res.status(200).json({
            status: 'success',
            message: "Success",
            data: activities.rows,
            recordsTotal: activities.count
        })
        next();
    } catch (error) {
        console.log(error.message);
        next(error)
    }
}