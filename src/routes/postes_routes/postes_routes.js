const express = require('express')
const router = express.Router()


//ALL MEDILWARE FUNCTION ARE USE

const Create_post_controllers=require("../../controllers/postes-controllers/create-post");
router.post("/createpost",Create_post_controllers)

const GetAll_Post_Controllers=require("../../controllers/postes-controllers/get-postes");
router.get("/getPost",GetAll_Post_Controllers)

const GetPageSelect_controllers=require("../../controllers/postes-controllers/get-page");
router.get("/getPage/:data",GetPageSelect_controllers)


module.exports=router
