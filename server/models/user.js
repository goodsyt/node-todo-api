var Sequelize = require("sequelize");
var {sequelize} = require('../db/database');

var user = sequelize.define('user',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    unique: true
  },
  name:{
    type: Sequelize.STRING,
    validate:{
      notEmpty: true
    }
  },
  age: {
    type: Sequelize.INTEGER
  },
  location : {
    type: Sequelize.STRING
  }, 
  email: {
    type: Sequelize.STRING,
    primaryKey: true,
    unique: true,
    validate:{
      isEmail: true,
      notEmpty: true
    }
  }
},{
  freezeTableName: true
});

user
  .sync()
  .then(() => {
    console.log('Sync table user OK');
  })
  .catch(err => { 
    console.log('Sync table user ERROR - ', err)
  });

module.exports = {user};