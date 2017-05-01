const connection = require('connection.js');

let orm = {
  selectAll: function(table = "burgers", callback = console.log){
    let query = "SELECT * FROM ??";
    connection.query(query, [table], (err, response) =>{
      if(err) throw new Error('Could not retrieve the table', err);
      if(callback) return callback(response);
      return response;
    });
  },
  insertOne: function(table = "burgers", keysArr = ["burger_name", "devoured"], burgerName = "Mystery Burger", eaten = false, callback = console.log){
    let query = "INSERT INTO ?? (??, ??) VALUES (?, ?);";
    connection.query(query, [table, keys[0], keys[1], burgerName, eaten], (err, response) => {
      if (err) throw new Error("Adding a new item threw an erro", err);
      callback(response);
    });
  },
  updateOne: function(valObj = {burger_name: "Standard Burger 01", devoured: false}, callback){
    let query = "UPDATE burgers SET ?";
    connection.query(query, valObj, (err, response) => {
      if (err) throw new Error("Updating item failed", err);
      callback(response);
    });
  }
}

module.exports = orm;
