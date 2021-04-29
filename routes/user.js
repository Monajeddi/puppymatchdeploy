const express = require('express');
const isAuth = require("../middleware/auth");

const { uploadProfil } = require('../controllers/upload.controller')
const multer=require('multer')
const upload=multer()

const router = express.Router();
const {signUp, signIn} = require("../controllers/user.controllers")

const {registerValidation,signinValidation,validation} = require('../middleware/user')


//SingUp
router.post('/signup',registerValidation(), validation, signUp)

//SinIn
router.post('/signin',signinValidation(), validation, signIn)

router.get('/current', isAuth, (req, res) => {
    res.send(req.user);
  });

router.post('/upload',upload.single('file'),uploadProfil)

module.exports = router ;