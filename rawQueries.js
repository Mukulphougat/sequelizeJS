import User from "./models/UserModel.js";
import sequelize from "./sqlInstance/instance.js";
import {QueryTypes} from "sequelize";

try {
    await sequelize.authenticate()
    await User.sync()
    const response=await sequelize.query('select * from users',{type: QueryTypes.SELECT})
    console.log(response)
    const secondResponse=await User.findAll()
    const res=secondResponse[0].dataValues
    const dateInUTC = new Date(res.createdAt);

    const updatedTime=dateInUTC.setMinutes(dateInUTC.getMinutes() + 330); // 330 minutes = 5 hours 30 minutes
    res.createdAt=new Date(updatedTime)
    // console.log(res)
} catch (error) {
    console.error({error})
} finally {
    await sequelize.close()
}