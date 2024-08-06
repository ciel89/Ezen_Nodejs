const express = require("express");
const router = express.Router();
const {getAllContacts, createContact,  getContact,  updateContact,  
     deleteContact, getContactForm } = require('./controllers/contactController');

//정적
router.route('/add').get(getContactForm).post(createContact);

router.route("/").get(getAllContacts);
//변수 - 동적
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);


module.exports = router;
