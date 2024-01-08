

const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

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


//secure password with bcryptjs

userSchema.pre('save', async function(next){
    console.log("Pre Method",this);//here this will contain all the data which is going to store in databse

    const user = this;
    //checking if password is modified or can say if password is not entering for the first time then we will just use next() to go to next step
    if(!user.isModified('password')){
        next();
    }

    try {
        // const saltRound = 10;
        // we can also assign saltRound value in this way using genSalt() method
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(user.password, saltRound);
        user.password= hashPassword ;
    } catch (error) {
        next(error);
        
    }

})

// json web token
userSchema.methods.generateToken = async function(){
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY,
        {expiresIn:"30d",}
        );
    } catch (error) {
        console.error(error);
    }
}

// comparing password at time of login
userSchema.methods.comparePassword = async function(password) {
    console.log("comparing password at time of login",this);
    return await bcrypt.compare(password,this.password);
}

//creating the model/Collection
const User = new mongoose.model('User',userSchema);

module.exports = User;