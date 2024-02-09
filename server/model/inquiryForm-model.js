const mongoose = require('mongoose')

const inquirySchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: {type: String, required: true},
    services: { type: String, required: true },
    // file: { type: String, required: false }
})

const InquiryForm = new mongoose.model("inquiry-data", inquirySchema)
module.exports = InquiryForm