import sequelize from '../sqlInstance/instance.js'
import Country from '../models/CountryModel.js'
import Capital from '../models/CapitalModel.js'

try {
  await sequelize.authenticate()
  // One-To-One Associations We Have To Always Define This
  Country.hasOne(Capital) // Setting One-To-One Relation
  await sequelize.sync()
  const allData = await Country.findAll({ include: Capital })
  console.log(JSON.stringify(allData, null, 2))
} catch (error) {
  console.error({ error })
} finally {
  await sequelize.close()
}
