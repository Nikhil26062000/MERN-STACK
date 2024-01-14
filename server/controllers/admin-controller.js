const Contact = require('../models/contact-model');
const User =require('../models/user-model');


const adminUser = async (req,res) =>{
    try {
        
        const userData =await User.find({},{password:0});

        if(!userData || userData.length===0){
            return res.status(404).json({message:"No user found"});
        }
        return res.status(200).json(userData);
    } catch (error) {
        console.log("error while"+error);
        res.status(400).json({message:error});
    }
    
}


const adminGetUserById =async (req,res) =>{
    try {
        const id = req.params.id;
        const data = await User.findOne({_id : id},{password:0})
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"});
    }
}


const deleteUserInDatabase =async (req,res) =>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id : id});
        return res.status(200).json({message:' User Deleted Successfully'});
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"});
    }
}

const adminContact = async (req,res) => {
    try {
        const userContactData = await Contact.find();

        if(userContactData.length===0 || !userContactData){
            res.status(404).json({message:"No contact found"});
        }
        return res.status(200).json({message:userContactData});
    } catch (error) {
       return res.status(400).json({message:error});
    }
}

module.exports= {adminUser,adminContact,deleteUserInDatabase,adminGetUserById};