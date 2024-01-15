const Contact = require('../models/contact-model');
const User =require('../models/user-model');


//getting data of all the user at admin pannel
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


//getting data of user who's gonna be edited 
const adminGetUserById =async (req,res) =>{
    try {
        const id = req.params.id;
        const data = await User.findOne({_id : id},{password:0})
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"});
    }
}




//logic to delete User
const deleteUserInDatabase =async (req,res) =>{
    try {
        const id = req.params.id;
        await User.deleteOne({_id : id});
        return res.status(200).json({message:' User Deleted Successfully'});
    } catch (error) {
        return res.status(500).json({message:"Something went wrong"});
    }
}



//updating user in admin pannel
const adminUpdateUser = async(req,res) =>{
    try {
        const id = req.params.id;
        const updatedUserData = req.body;
        const updatedData = await User.updateOne({_id:id},{
            $set:updatedUserData,
        });
        return res.status(200).json({updatedData});

    } catch (error) {
        next(error);
    }
}


//delete contact in admin pannel
const adminContactDelete = async (req,res) =>{
  try {
    const id = req.params.id;
    await Contact.deleteOne({_id:id});
    return res.status(200).json({message: 'Contact deleted successfully'})
  } catch (error) {
    next(error);
  }
}


//logic to get contact details in admin pannel
const adminContact = async (req,res) => {
    try {
        const userContactData = await Contact.find();

        if(userContactData.length===0 || !userContactData){
            return res.status(200).json({message:""});
        }
        return res.status(200).json({message:userContactData});
    } catch (error) {
       return res.status(400).json({message:error});
    }
}

module.exports= {adminUser,adminContact,deleteUserInDatabase,adminGetUserById,adminUpdateUser,adminContactDelete};