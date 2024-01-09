

const {z} = require('zod');

//creating an object schema
const signupSchema = z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be at least 3 characters"})
    .max(255,{message:"Name must be at most 255 characters"}),
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be of valid type"})
    .max(255,{message:"Email must be at most 255 characters"}),
    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone must be at most 10 characters"})
    .max(10,{message:"Phone must be at most 10 characters"}),
    password:z
    .string({required_error:"Password is required"})
    .trim()
    .min(8,{message:"Password must be atlease 8 characters containing one special Character"})
    .max(1024,{message:"Password must be atmost 1024 characters"}),
});

const loginSchema = z.object({
     email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address for Login by ZOD"})
    .min(3,{message:"Email must be of valid type.ZOD"})
    .max(255,{message:"Email must be at most 255 characters.ZOD"}),
    
    password:z
    .string({required_error:"Password is required . ZOD manipulation"})
    .trim()
    .min(8,{message:"Password must be atlease 8 characters containing one special Character. ZOD"})
    .max(1024,{message:"Password must be atmost 1024 characters.ZOD"}),
});



module.exports ={ signupSchema,loginSchema};