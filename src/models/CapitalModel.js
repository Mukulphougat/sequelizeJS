import sequelize from '../sqlInstance/instance.js'
import { DataTypes } from 'sequelize'

const Capital = sequelize.define(
  'capital',
  {
    capitalId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    capitalName: {
      type: DataTypes.STRING,
      unique: true
    }
  },
  {
    timestamps: false
  }
)

export default Capital
