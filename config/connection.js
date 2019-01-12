var mysql = require("mysql");

var connection;

if(process.env.JAWSDB_URL){
connection = mysql.createConnection(procress.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
  host: "104.154.253.41",
  port: 3306,
  user: "josh",
  password: "josh",
  database: "burgers_db"
});
};


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;