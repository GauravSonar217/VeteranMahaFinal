const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    services: { type: String, required: true },
    message: { type: String, required: true },
})
const contactForm = new mongoose.model("contact-data", contactSchema)
module.exports = contactForm