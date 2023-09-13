import { Sequelize } from "sequelize";
import db from "../database/db.js"


const { DataTypes } = Sequelize; // Use DataTypes instead of DataType

const user = db.define('users', {
    name: DataTypes.STRING, // Use DataTypes.STRING instead of DataType.STRING
    email: DataTypes.STRING,
    gender: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default user;

(async () => {
    await db.sync();
})();
