const InquiryForm = require('../model/inquiryForm-model')

const inquiry = async (req, res) => {
    try {
        const { name, email, phone, services, message, file } = req.body

        await InquiryForm.create({ name, email, phone, services, message, file })

        res.status(201).json({ message: "message send successfully" })
    } catch (error) {
        res.status(500).json({ message: "Fill all the fields properly" })
    }
}


// get inquiry form data
const getInquiryFormData = async (req, res)=>{
    try {
        const inquiryData = await InquiryForm.find()
        res.status(200).json(inquiryData)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//delete inquiry data 
const deleteInquiryData = async (req, res)=>{
    try {
        const id = req.params.id
        await InquiryForm.findByIdAndDelete(id)
        res.status(200).json({message : "User Deleted Successfully"});
    } catch (error) {
        res.status(500).json({message : "Something Went Wrong"});
        
    }
}


module.exports = {inquiry, getInquiryFormData, deleteInquiryData}