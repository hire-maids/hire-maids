var mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',//reliefbusinessne_bin_user
  password: '',//aclS1TB=%s^z
  database: 'binhareb'// reliefbusinessne_binhareb
});
db.connect((err) => {
  if(err){
      throw err;
  }
  console.log('MySql Connected...');
});
module.exports = db; 