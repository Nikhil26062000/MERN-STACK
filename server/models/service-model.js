const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  usage: { type: String, required: true },
});


//! Very Important note. ALWAYS GIVE THE COLLECTION NAME SAME which is in databse WHILE MAKING MODEL .

//! IN THIS FILE I FIRST WROTE MY COLLECTION NAME AS "SERVICE" AND I MAKE A COLLECTION IN DATABASE AS SERVICES AS WELL, BUT STILL I WAS GETTING EMPTY RESULT BUT IN MY DATABASE IN "SERVICES" THERE WAS DATA BUT STILL IT WAS GIVING ME EMPTY ARRAY AND THE REASON IS VERY DIFFRENT..

//! THE REASON BEHIND THIS IS WHEN I WRITE MY COLLECTION NAME AS "SERVICE" IN THIS FILE I THOUGHT THAT THE NAME HERE I WRITE AND THE NAME IN  MY DATABASE WILL MATCH BUT IN DATABSE IT WILL CRAEATE ANOTHER COLLECTION WHOSE NAME IS "services" and that has 0 value and thats why it is giving me empty array bcz my "SERVICE" WHICH I WROTE HERE AND "services which databse itself was created in databse" both are different .

//! what my fault was that i gave my colection name as "SERVICE" and i make a collection named "SERVICES" in databse also and i was thinking ki ye dono match honge and data aajyga frontend me but jab maine yha pe "SERVICE" name dekr model create kiya tha usi time ek extra collection databse me ban gya tha jiska naam "services" tha and ye small letter me bna tha and Service and service both are different in mongo db bcz it is case sensitive. and empty isiliye aarha tha bcz Service and services me compare ho rha tha BUT mai smjh rha tha ki SERVICE AND SERVICES me hoga  

//! isiliye maine yha v small letter me service likha taaki databse me khud ek services name ka collection banjaye and dono match hokr data dede frontend ko.

//? ALWAYS TRY TO GIVE THE COLLECTION NAME HERE IN SMALLL LETTER AND DONT PUT  "s" in last because when i give collection name here , in databse same name of collection will be created with s in the last . 

//?for eg : here i write service so in databse services will create and both will match them only i will recieve the data
const Service = new model("service", serviceSchema);

module.exports = Service;
