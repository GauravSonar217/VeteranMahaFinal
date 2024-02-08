const Admin = require('../model/login-model')

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const adminExist = await Admin.findOne({ email })
        console.log(adminExist);
        console.log(email);
        console.log(password);
        if (!adminExist) {
            return res.status(400).json({ message: 'invalid credential' })
        }

        const admin = password === adminExist.password
        console.log(admin);

        if (admin) {
            res.status(200).json({ message: "login successfull" })
        }
        else {
            res.status(401).json({ message: "invalid credential" })
        }
    } catch (error) {
        alert(error.message)
    }
}

module.exports = login