const contactForm = require('../model/contactForm-model')

const contact = async (req, res) => {
    try {
        const { name, email, services, message } = req.body

        await contactForm.create({ name, email, services, message })

        res.status(201).json({ message: "Message Send Successfully" })
    } catch (error) {
        res.status(500).json({ message: "Fill all the fields properly" })
    }
}

// get contact form data
const getContactFormData = async (req, res)=>{
    try {
        const contactData = await contactForm.find()
        res.status(200).json(contactData)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


//delete contact data 
const deleteContactData = async (req, res)=>{
    try {
        const id = req.params.id
        await contactForm.findByIdAndDelete(id)
        res.status(200).json({message : "User Deleted Successfully"});
    } catch (error) {
        res.status(500).json({message : "Something Went Wrong"});
        
    }
}


module.exports = {contact, getContactFormData, deleteContactData}