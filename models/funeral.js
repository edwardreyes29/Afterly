// Gets data from Business Details API request
module.exports = function(sequelize, DataTypes)  {
    const Funeral = sequelize.define("Funeral", {
        business_id: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rating: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        display_phone: {
            type: DataTypes.STRING,
            allowNull: true,
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
    Funeral.associate = function(models) {
        Funeral.belongsTo(models.Case, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Funeral;
}