const express = require("express");
const fileController = require("../controllers/fileController")
const fileRouter = express.Router();

fileRouter.route("/upload").post(fileController.fileUpload);

module.exports = fileRouter;