const multer = require("multer");
const path = require("path");

// Multer config
module.exports = multer({
  storage: multer.diskStorage({
    filename: function (req, file, cb) {
      cb(
        null,file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    }
  }),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".mkv" && ext !== ".mp4" && ext !== ".mov") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});