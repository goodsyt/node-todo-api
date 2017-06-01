var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'RootAdmin123',
  database: 'todo-app'
});

connection.connect();

connection.query('select * from `todo-list`', (err, rows, fields) =>{
  if(!err){
    console.log(`The resolt is:` + JSON.stringify(rows, null, 2));
  }else{
    console.log(`Error while query database: ${err}`);
  }
});

// connection.query('INSERT INTO `todo-list` (`id`, `text`, `completed`) ' +
//                   'VALUES (null, "Test3 from node", 1)', 
//                   (err, rows, fields) => {
//   if(!err){
//     console.log(`The resolt is:` + JSON.stringify(rows, null, 2));
//   }else{
//     console.log(`Error while insert database todo-list: ${err}`);
//   }
// });

connection.query('INSERT INTO `Users` (`id`, `name`, `age`, `address`, `email`) ' +
                  'VALUES (null, "Jack", 34, "1A Stonor", "Jack@gmail.com")', 
                  (err, rows, fields) => {
  if(!err){
    console.log(`The resolt is:` + JSON.stringify(rows, null, 2));
  }else{
    console.log(`Error while insert database Users: ${err}`);
  }
});
connection.end();