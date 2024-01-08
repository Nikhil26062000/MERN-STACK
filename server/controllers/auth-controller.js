
const User = require('../models/user-model');

// ?Controllers for Home Page
//----------------------------------
const Home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome Nikhil by router and this is the second method using controller"
      );
  } catch (error) {
    console.log(error);
  }
};

//? Controller for Registration page
//-----------------------------------
const Register = async (req, res) => {
  try {
    console.log(req.body);

    //destructuring the  value from body .
    //here we are using Postman API instead of frontend for registration.
    const {username,email,password,phone} = req.body;
    
    //Checking if the user is already in database 
    //if present then returning via if() condition
    const existingUser = await User.findOne({email:email});
    if(existingUser)
    {
      return res.status(400).json("User already exist");
    }

    //if user is not present then creating the document and storing in collection
    await User.create({username,email,password,phone});

    res
      .status(200)
      .json({mes:req.body});
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Home ,Register};
