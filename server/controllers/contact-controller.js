

const Contact = require("../models/contact-model");

const ContactForm = async (req,res) => {
    try {
       const response = req.body;
       console.log(response);
       await Contact.create(response);
       res.status(200).json({message:"Contact Form Submitted Successfully"});
    } catch (error) {
        return res.status(400).json({message: "Message not deliverd"});
    }
}
module.exports = ContactForm;