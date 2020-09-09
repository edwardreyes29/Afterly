module.exports = function(sequelize, DataTypes) {
    const Case = sequelize.define("Case", {
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

    // Associations
    Case.associate = function(models) {
        // Cases should belong to a User
        // A Case can't be created without a User due to foreign key constraint
        Case.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Case.hasMany(models.EstateLaw, {
            onDelete: "cascade"
        });

        Case.hasMany(models.LifeInsurance, {
            onDelete: "cascade"
        });
        Case.hasMany(models.Hospice, {
            onDelete: "cascade"
        });
        Case.hasMany(models.Funeral, {
            onDelete: "cascade"
        });
    };

    return Case;
};