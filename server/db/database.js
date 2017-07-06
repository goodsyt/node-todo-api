var Sequelize = require("sequelize");

const sequelize = new Sequelize('todo-app', 'root', 'RootAdmin123', {
  host : 'localhost',
  dialect: 'mysql',
  pool: {
        max: 10,
        min: 0,
        idle: 10000
  },
  logging: false    
}); 

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {sequelize};