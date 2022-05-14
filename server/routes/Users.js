process.env.SECRET_KEY = "secret";
const authenticationController = require("../controller/authonticationController");
const customerController = require("../controller/customerController");
const upload = require("../utils/multer")
const cloudinary = require("../utils/cloudinary");
// const imageController = require("../controller/imageController");
const express = require('express')
const router = express.Router();
router.get('/', function (req, res) {
    res.send('works fine');
  });
router.post("/userRegister", authenticationController.userRegistration);
router.post("/adminRegistration", authenticationController.adminRegistration);
router.post("/userLogin", authenticationController.userLogin);
router.post("/upload",upload.single("img"), async (req, res)=>{
  try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path,
        {folder: 'binhareb',use_filename: true});
        res.json({imageUrl:result.secure_url,imageId:result.public_id});
      } catch (err) {
       console.log(err);
      }
});
router.post("/uploadVideo",upload.single("videoFile"), async (req, res)=>{
  try {
      // Upload video to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path,
        {folder: 'binhareb',use_filename: true,resource_type: "video", chunk_size: 6000000,});
        res.json({videoUrl:result.secure_url,videoId:result.public_id});
      } catch (err) {
       console.log(err);
      }
});
router.post("/addNewCustomer",customerController.addNewCustomer);
router.post("/getCustomers",customerController.getCustomers);
router.post("/customerJobType/:jobType", customerController.customerJobType);
router.post("/customerNationality/:nationality", customerController.customerNationality);
router.post("/customerReligion/:religion", customerController.customerReligion);
router.post("/customerAge/:age", customerController.customerAge);

router.post("/addBooks",customerController.addBooks);
router.post("/getBooks", customerController.getBooks);

router.delete("/deleteOrder/:id", customerController.deleteOrder);
router.delete("/deleteCustomer/:id", customerController.deleteCustomer);
router.post("/getDetailById/:id",customerController.getDetailById);
module.exports = router;
 