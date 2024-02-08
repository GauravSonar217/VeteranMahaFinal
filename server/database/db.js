const mongoose = require('mongoose')

const URI = process.env.DB_URI_VETERAN

const connectDB = async ()=>{
    try {
        await mongoose.connect(URI)
        console.log('database connection is successfull')
    } catch (error) {
        console.error('database connection failed')
        process.exit(0)
    }
}

module.exports = connectDB