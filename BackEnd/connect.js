const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sekawan', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
});

try {
    sequelize.authenticate();
    console.log("connection succes");
} catch (error) {
    console.log(error);
}