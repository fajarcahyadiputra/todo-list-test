"use strict";

module.exports = (db, DataTypes) => {
    return db.define("activities", {
        id: {
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            type: DataTypes.UUID,
        },
        email: DataTypes.STRING,
        title: DataTypes.STRING,
        deleted_at: DataTypes.STRING,
        created_at: {
            type: DataTypes.STRING,
        },
        updated_at: {
            type: DataTypes.STRING,
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    })
}