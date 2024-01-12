const Service = require("../models/service-model")


const services = async (req,res) => {
    try {
        console.log("Checking Game");
        const response = await Service.find();
        console.log(response.length);
        if(!response || response.length==0){
            return res.status(404).json({message: "No Services Found"});
        }

    
       return res.status(201).json({message: "Services retrieved successfully", response})
        
    } catch (error) {
      return res.status(500).json({errorMsg:error})
    }
}

module.exports=services;