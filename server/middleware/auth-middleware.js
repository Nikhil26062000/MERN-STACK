

const jwt =require('jsonwebtoken');
const  User = require("../models/user-model");

const authMiddleware = async (req,res,next) => {
    const token=req.header('Authorization');

    if(!token){
        return res.status(401).send({message: 'No token provided.'});
    }

    //remove bearer from start
    const jwtToken = token.replace("Bearer","").trim();
    console.log('Token from frontend',jwtToken);
    
    try {
        const isVerified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY)

        

        const userData = await User.findOne({email:isVerified.email}).select({
            password : 0,
        })
       
        req.user = userData;
        req.token = token;
        req.userId = userData._id;

        console.log(userData);
        next();
    } catch (error) {
        console.log("error while verifying token in backend",error);
        return res.status(403).send({message:'Invalid Token'});
    }
};

module.exports=authMiddleware;