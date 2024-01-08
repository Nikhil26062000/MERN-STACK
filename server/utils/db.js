

const mongoose = require('mongoose');

// const URI = "mongodb://127.0.0.1:27017/mern_admin";

//hiding the important data using env
const URI =process.env.MONGODB_URI;

//connection establishment with database
const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection has been established");
    } catch (error) {
        console.log("database connection error: " + error);
        process.exit(0);
    }

}

module.exports = connectDb;