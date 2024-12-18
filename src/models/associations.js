module.exports = (models) => {
  models.User.hasMany(models.Post, { foreignKey: 'userId' });
  models.Post.belongsTo(models.User, { foreignKey: 'userId' });
};
