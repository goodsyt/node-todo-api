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
// var mysql = require('mysql2');

// var pool = mysql.createPool({
//   connectionLimit : 100,
//   host : 'localhost',
//   user : 'root',
//   password : 'RootAdmin123',
//   database : 'todo-app',
//   debug : false
// });

// pool.getConnection((err, connection) => {
//   if(err){
//     console.log('{"code" : 100, "status" : "Error in connection database"}');
//     return;
//   }
//   console.log('connected as id ' + connection.threadId);

  //delete many
  
  //delete one
  //select one and delete it

  // connection.query('SELECT * FROM `Users` WHERE location="Pavilion"', (err, rows, fields) =>{
  //   if(!err){
  //     console.log(`The resolt is:` + JSON.stringify(rows, null, 2));
  //   }else{
  //     console.log(`Error while query database: ${err}`);
  //   }
  // });
//});