const User = require("../models/user-model");
const bcrypt = require("bcryptjs");


// ?Controllers for Home Page
//?-------------------------------------------------

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
//?---------------------------------------------------

const Register = async (req, res) => {
  try {
    //destructuring the  value from body .
    //here we are using Postman API instead of frontend for registration.
    const { username, email, password, phone } = req.body;

    //Checking if the user is already in database
    //if present then returning via if() condition
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({message:'email already exist'});
    }

    /*

  ? We will use bcrypt to hash our password , so that it can be stored secure. This is one way we can secure our password . after storing the hashed password in hashPassword variable we can just pass the variable to the place of password . 

  ?Another way is used in user-model.js file
  //!encrypting the password using bycrypt
      const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);
    await User.create({username,email,password:hashPassword,phone});

  */

    //if user is not present then creating the document and storing in collection

    const userCreated = await User.create({ username, email, password, phone });

    const data = req.body;
    res
      .status(200)
      .json({
        data,
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
    console.log({ token: await userCreated.generateToken() });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

// ?Contollers for Login
// ?---------------------------------------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).send({message:"User not exist. Register now ."});
    }

    //? i made a function in user-model and there i compare the password.i can directly compare here also using compare()
    // const isPasswordValid = await bcrypt.compare(password,userExist.password);

    //In this way also we are comparing password
    const user = await userExist.comparePassword(password);
    console.log(user);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
        info:userExist.username,
      });
    } else {
      res.status(401).json({
        message: "Invalid Credentials",
      });

    
    }
  } catch (error) {
    res.status(500).json({message:"Internal server error Check your credentials"});
  }
};


//? User Logic
//?-------------------------------

const user = async (req, res) => {
    try {
      const userData = req.user;
      // console.log(userData);
      return res.status(200).json({userData});

     // res.status(200).json({msg:'hello user'});
    } catch (error) {
      console.log("error from user route while fetching user info agter login",error);
    }
}
module.exports = { Home, Register, login, user };
