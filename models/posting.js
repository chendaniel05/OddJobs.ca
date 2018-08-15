module.exports = function(sequelize, DataTypes) {
  var Posting = sequelize.define("Posting", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    employer: DataTypes.STRING,
    location: DataTypes.STRING
  });

  // Posting.associate = function(models) {
  //   Posting.belongsTo(models.Employer, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Posting;
};
