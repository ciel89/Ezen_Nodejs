const asyncHandler = require("express-async-handler");
const Contact = require('../models/contactModel');

// 전체 연락처 보기
const getAllContacts = asyncHandler(async (req, res) => {  
  //res.status(200).send("Contacts Page");
  const contact = await Contact.find();
  res.render('index',{contact:contact});
});


const getContactForm = (req, res) => {  
    res.render('add');
  }
  

// 새 연락처 추가하기
const createContact = asyncHandler(async (req, res) => {  
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).send("필수값이 입력되지 않았습니다.");
  }
  //입력값 
  const contact = await Contact.create({
    name, email, phone
  });
 //res.status(201).send(contact);
  res.redirect('/contacts');
});


// 연락처 상세 보기
const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  //res.send(contact);
  res.render('update',{contact:contact});
});

// 연락처 수정하기
 const updateContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  const { name, email, phone } = req.body;
  
  contact.name = name;
  contact.email = email;
  contact.phone = phone;
  
  contact.save();
  //res.status(200).send(contact);
  res.redirect('/contacts');
 });

  // 연락처 삭제하기
  const deleteContact = asyncHandler(async (req, res) => {
      const id = await Contact.findById(req.params.id);
    //  if (!contact) {
      //   res.status(404);
      //   throw new Error("Contact not found");
      //  }
      // await Contact.deleteOne();
      //res.status(200).send('Deletd');
      await Contact.findByIdAndDelete(id);
      res.redirect("/contacts");
  });

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  getContactForm,
};
