
'use strict';

module.exports = (db, DataTypes) => {
    return db.define("todos", {
        id: {
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            type: DataTypes.UUID,
        },
        title: DataTypes.STRING,
        activity_group_id: {
            allowNull: false,
            type: DataTypes.UUID,
        },
        is_active: DataTypes.INTEGER(1),
        priority: DataTypes.ENUM("very-high", "high", "low", "very-low", "medium"),
        created_at: {
            type: DataTypes.STRING,
        },
        updated_at: {
            type: DataTypes.STRING,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    });
}