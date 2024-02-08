require('dotenv').config({path: ".env"})
const express = require('express')
const cors = require('cors')
const connectDB = require('./database/db')
const router = require('./routes/router')


const app = express()
const PORT = process.env.PORT


app.use(cors())
app.use(express.json({limit: "10mb"}))
app.use('/', router)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running on port http://localhost:${PORT}`)
   })
})

