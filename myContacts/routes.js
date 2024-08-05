const express = require("express");
const router = express.Router();
const {getAllContacts, createContact,  getContact,  updateContact,  deleteContact } = require('./controllers/contactController');

router.route("/").get(getAllContacts);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
