const path=require('path');

const express = require("express");

const rootDir=require('../util/path');

const contactController=require('../controllers/contactCon');


const router = express.Router();



router.get('/success',contactController.getSuccess); 


module.exports=router;