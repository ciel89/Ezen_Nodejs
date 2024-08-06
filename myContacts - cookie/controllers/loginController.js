const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
require('dotenv').config();
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

//로컬호스트 접속하면
const getLogin = (req, res) => {
  res.render("home");
};


//관리자 확인
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({username});

  if(!user){
    return res.status(401).json({message:'일치하는 사용자가 없습니다.'});
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if(!isMatch){
    return res.status(401).json({message:'비밀번호가 일치하지 않습니다.'})
  }

  const token = jwt.sign({ id: user._id }, jwtSecret);
  res.cookie("token", token, { httpOnly: true });

  res.redirect("/contacts");
  // if (username === "admin" && password === "1234") {
  //   res.redirect('/contacts');
  // } else {
  //   res.redirect('register');
  // }
});


//사용자등록 폼 보기

const getRegister = (req, res) => {
  res.render("register");
};

//사용자등록

const registerUser = asyncHandler(async (req, res) => {
  const { username, password1, password2 } = req.body;
  if (password1 === password2) {
    const hashedPassword = await bcrypt.hash(password1, 10);
    const user = await User.create({ username, password: hashedPassword });
    //res.status(201).json({ message: "Register successful", user });
    res.redirect('/contacts');
  } else {
    res.send("Register Failed");
  }
});


module.exports = { getLogin, loginUser, getRegister, registerUser };

