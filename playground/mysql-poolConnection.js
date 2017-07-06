var mysql = require('mysql2');

var pool = mysql.createPool({
  connectionLimit : 100,
  host : 'localhost',
  user : 'root',
  password : 'RootAdmin123',
  database : 'todo-app',
  debug : false
});

pool.getConnection((err, connection) => {
  if(err){
    console.log('{"code" : 100, "status" : "Error in connection database"}');
    return;
  }
  console.log('connected as id ' + connection.threadId);

  connection.query('SELECT * FROM `Users` WHERE location="Pavilion"', (err, rows, fields) =>{
    if(!err){
      console.log(`The resolt is:` + JSON.stringify(rows, null, 2));
    }else{
      console.log(`Error while query database: ${err}`);
    }
  });
});


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