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

const User = sequelize.define('user',{
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

User
  .sync()
  .then(() => {
    console.log('Sync table user OK');
  })
  .catch(err => { 
    console.log('Sync table user ERROR - ', err)
  });

var newUser = User.build({
  name: 'Jack',
  email: 'gmail.com'
});

newUser.save().then(result => {
  console.log(result);
//  result.get('email');
//  result.get('name');
//  User.findAll().then(allUsers => {
//  console.log(allUsers);
//  });
}).catch(err => {
  console.log('add new user faild...', err);
});
// var mysql = require('mysql2');

// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'RootAdmin123',
//   database: 'todo-app'
// });

// connection.connect();


// connection.query('select * from `todo-list`', (err, rows, fields) =>{
//   if(!err){
//     console.log(`The resolt is:` + JSON.stringify(rows, null, 2));
//   }else{
//     console.log(`Error while query database: ${err}`);
//   }
// });

// connection.query('INSERT INTO `todo-list` (`id`, `text`, `completed`) ' +
//                   'VALUES (null, "Test3 from node", 1)', 
//                   (err, rows, fields) => {
//   if(!err){
//     console.log(`The resolt is:` + JSON.stringify(rows, null, 2));
//   }else{
//     console.log(`Error while insert database todo-list: ${err}`);
//   }
// });

// connection.query('INSERT INTO `Users` (`id`, `name`, `age`, `address`, `email`) ' +
//                   'VALUES (null, "Jack", 34, "1A Stonor", "Jack@gmail.com")', 
//                   (err, rows, fields) => {
//   if(!err){
//     console.log(`The resolt is:` + JSON.stringify(rows, null, 2));
//   }else{
//     console.log(`Error while insert database Users: ${err}`);
//   }
// });
// connection.end();