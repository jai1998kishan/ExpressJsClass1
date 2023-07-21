const path=require('path');

const express = require("express");

const rootDir=require('../util/path');

const contactController=require('../controllers/contactCon');


const router = express.Router();



router.get('/contactus',contactController.getContact); 

router.post("/contactus", contactController.postContact);


module.exports=router;