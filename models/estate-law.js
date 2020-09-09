// Gets data from Business Details API request
module.exports = function(sequelize, DataTypes) {
    const EstateLaw = sequelize.define("EstateLaw", {
        business_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.DOUBLE,
            allowNull: false,
        },
        display_phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: { // Object -> STRING
            type: DataTypes.STRING(1234),
            allowNull: true,
        },
        photos: { // Array -> STRING
            type: DataTypes.STRING(1234),
            allowNull: true,
        },
        hours: { // Array -> STRING
            type: DataTypes.STRING(1234),
            allowNull: true,
        },
        messaging: { // Object -> STRING    
            type:DataTypes.STRING(1234),
            allowNull: true,
        }
    });
    // Associations
    // =============================================================
    EstateLaw.associate = function(models) {
        EstateLaw.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return EstateLaw;
};