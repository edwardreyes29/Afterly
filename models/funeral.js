// Gets data from Business Details API request
module.exports = function(sequelize, DataTypes)  {
    const Funeral = sequelize.define("Funeral", {
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
            type: DataTypes.STRING,
            allowNull: true,
        },
        photos: { // Array -> STRING
            type: DataTypes.STRING,
            allowNull: true
        },
        hours: { // Array -> STRING
            type: DataTypes.STRING,
            allowNull: true,
        },
        messaging: { // Object -> STRING    
            type:DataTypes.STRING,
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