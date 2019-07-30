const mongoose = require("mongoose");

mongoose.createConnection("mongodb://localhost/noderest", {
  useMongoClient: true
});
mongoose.Promise = global.Promise;

module.exports = mongoose;
