const mongoose = require('mongoose')

const careerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    vacancy: { type: String, required: true },
    message: { type: String, required: true },
    file: { type: String, required: false }
});
const careerForm = new mongoose.model("career-data", careerSchema)
module.exports = careerForm