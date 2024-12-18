const { User } = require('../models');

exports.getAllUsers = async () => {
  return await User.findAll();
};
