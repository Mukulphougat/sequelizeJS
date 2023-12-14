import { DataTypes } from 'sequelize'
import sequelize from '../sqlInstance/instance.js'

const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    userName: {
      type: DataTypes.STRING,
      unique: true
    },
    roles: {
      type: DataTypes.JSON,
      defaultValue: ['User']
    },
    phones: {
      type: DataTypes.JSON,
      defaultValue: []
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {}
)
export default User
