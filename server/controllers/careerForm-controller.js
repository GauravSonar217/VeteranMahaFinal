const careerForm = require('../model/careerForm-model')

const career = async (req, res) => {
    try {
        const { name, email, phone, vacancy, message } = req.body;
        console.log(name);
        // Check if required fields are present
        if (!name || !email || !phone || !vacancy || !message) {
            throw new Error("Fill all the fields properly");
        }

        await careerForm.create({ name, email, phone, vacancy, message });

        res.status(201).json({ message: "Applied Successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// get career form data
const getCareerFormData = async (req, res)=>{
    try {
        const careerData = await careerForm.find()
        res.status(200).json(careerData)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

//delete career data 
const deleteCareerData = async (req, res)=>{
    try {
        const id = req.params.id
        await careerForm.findByIdAndDelete(id)
        res.status(200).json({message : "User Deleted Successfully"});
    } catch (error) {
        res.status(500).json({message : "Something Went Wrong"});
        
    }
}


module.exports = {career, getCareerFormData, deleteCareerData}