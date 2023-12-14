import sequelize from "../sqlInstance/instance.js";
import {DataTypes} from "sequelize";

const Country=sequelize.define('country', {
    countryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    countryName: {
        type: DataTypes.STRING,
        unique: true
    }
}, {
    timestamps: false
})

export default Country