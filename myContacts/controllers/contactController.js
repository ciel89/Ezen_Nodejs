const asyncHandler = require("express-async-handler");


// 전체 연락처 보기
const getAllContacts = asyncHandler(async (req, res) => {  
  res.status(200).send("Contacts Page");
});

// 새 연락처 추가하기
const createContact = asyncHandler(async (req, res) => {  
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).send("필수값이 입력되지 않았습니다.");
  }
  res.status(201).send("Create Contacts");
});


// 연락처 상세 보기
const getContact = asyncHandler(async (req, res) => {
  res.status(200).send(`View Contact for ID: ${req.params.id}`);
});

// 연락처 수정하기
const updateContact = asyncHandler(async (req, res) => {

  res.status(200).send(`Update Contact for ID: ${req.params.id}`);
});

  // 연락처 삭제하기
const deleteContact = asyncHandler(async (req, res) => {

  res.status(200).send(`Delete Contact for ID: ${req.params.id}`);
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
