var Sequelize = require("sequelize");
var {sequelize} = require('../db/database');

var todo = sequelize.define('todo',{
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true
  },
  text:{
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  completed: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
},{
  freezeTableName: true
});
todo
  .sync({force : true})
  .then(() => {
    console.log('Sync table todo OK');
  })
  .catch(err => { 
    console.log('Sync table todo ERROR - ', err)
  });

module.exports = {todo};