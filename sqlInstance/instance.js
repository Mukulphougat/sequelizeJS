import {Sequelize} from "sequelize";

const sequelize = new Sequelize('mysql_practice', 'root', 'Mike1607', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});
export default sequelize