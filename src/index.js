import sequelize from './sqlInstance/instance.js'
import User from './models/UserModel.js'
import { toHashString } from './hashing/stringToHashed.js'

try {
  await sequelize.authenticate()
  const msg = 'Connection established successfully'
  console.log({ msg })
  const uniqueId = Math.floor(Math.random() * (1000 - 1 + 1) + 1)
  await User.beforeCreate(async (user) => {
    user.password = await toHashString(user.password)
  })
  // await User.sync({force: true})
  const { dataValues } = await User.create({
    firstName: 'Jane',
    lastName: 'Doe',
    userName: `janeDoe${uniqueId}`,
    password: 'MukulPhougat'
  })
  console.log({ dataValues })
} catch (error) {
  const msg = 'Failed to establish a connection'
  const validationError = 'Please Pass Unique UserName'
  if (error.name === 'SequelizeUniqueConstraintError') console.error({ validationError })
  else console.error({ msg })
} finally {
  await sequelize.close()
}
