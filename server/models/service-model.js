const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  usage: { type: String, required: true },
});


//if find something difficlty to d=fetch data form database then see video of mongoose in thapa technical
// always first set thw collection name here in captial letter then in mongodb the same databse in plural form will be created then add data to that database..\
// eg: here Service is collection name i first set here then in mongodb the same databse in plural form will be created as services and then i add data to that database
const Service = new model("Service", serviceSchema);

module.exports = Service;
