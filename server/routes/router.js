
const express = require('express')
const router = express.Router()

const { inquiry, getInquiryFormData, deleteInquiryData } = require('../controllers/inquiryForm-controller')
const { career, getCareerFormData, deleteCareerData } = require('../controllers/careerForm-controller')
const { contact, getContactFormData, deleteContactData } = require('../controllers/contactForm-controller')
const login = require('../controllers/auth-controller')

// routes
router.route('/inquiry').post(inquiry)
router.route('/inquiry').get(getInquiryFormData)
router.route('/inquiry/:id').delete(deleteInquiryData)


router.route('/contact').post(contact)
router.route('/contact').get(getContactFormData)
router.route('/contact/:id').delete(deleteContactData)


router.route('/career').post(career)
router.route('/career').get(getCareerFormData)
router.route('/career/:id').delete(deleteCareerData)

router.route('/login').post(login)


module.exports = router

