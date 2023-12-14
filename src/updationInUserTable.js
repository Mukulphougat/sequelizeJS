import sequelize from './sqlInstance/instance.js'
import User from './models/UserModel.js'

try {
  await sequelize.authenticate()
  await User.sync()
  const curr = await User.findByPk(1)
  const dataValues = curr.dataValues
  console.log({ dataValues })
  await curr.update({
    phones: [...dataValues.phones, 7027200968]
  })
  await User.sync()
  console.log({ dataValues })
} catch (error) {
  const msg = 'Failed to establish a connection'
  const validationError = 'Please Pass Unique UserName'
  if (error.name === 'SequelizeUniqueConstraintError') console.error({ validationError })
  else console.error({ msg })
} finally {
  await sequelize.close()
}
