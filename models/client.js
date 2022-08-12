'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Client.belongsTo(models.Account, {
        as: 'client',
        foreignKey: 'account_id'
      })

      Client.belongsTo(models.Room, {
        as: 'client',
        foreignKey: 'room_id'
      })

      Client.hasMany(models.Answer, {
        as: 'answers',
        foreignKey: 'student_id'
      })
    }
  }
  Client.init({
    account_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Client',
    tableName: 'clients'
  });
  return Client;
};