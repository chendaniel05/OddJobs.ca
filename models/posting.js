module.exports = function(sequelize, DataTypes) {
  var Posting = sequelize.define("Posting", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    employer: DataTypes.STRING,
    location: DataTypes.STRING,
    salary: DataTypes.STRING,
    availability: DataTypes.STRING
  });
  return Posting;
};
