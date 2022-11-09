const express = require("express");
const fileController = require("../controllers/fileController")
const fileRouter = express.Router();
const multer  = require('multer')

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      let extArray = file.mimetype.split("/");
      let extension = extArray[extArray.length - 1];
      cb(null, file.fieldname + '-' + Date.now()+ '.' +extension)
    }
  })
const upload = multer({ storage: storage })

fileRouter.route("/upload").post(upload.single('image'), fileController.fileUpload);

module.exports = fileRouter;