

const mongoose = require('mongoose');

//creating schema for model 
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        require:true
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
});

//creating the model/Collection
const User = new mongoose.model('User',userSchema);

module.exports = User;