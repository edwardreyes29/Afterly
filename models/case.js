module.exports = function(sequelize, DataTypes) {
    var Case = sequelize.define("Case", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        birthday: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        zipCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        estate_law_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        life_insurance_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        funeral_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hospice_id: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
    return Case;
};