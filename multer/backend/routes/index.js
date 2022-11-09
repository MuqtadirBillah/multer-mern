const { Router: expressRouter } = require("express");
const router = expressRouter();

// file routes
const fileRouter = require("./fileRoutes");
router.use("/file", fileRouter);

module.exports = router;