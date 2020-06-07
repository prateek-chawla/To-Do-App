
const express = require("express");
const router = express.Router();

const viewController = require("../controllers/view-controller")

router.get("/all", viewController.all)

router.get("/pending", viewController.pending)

router.get("/completed", viewController.completed)

router.get("/general", viewController.general)

router.get("/work", viewController.work)

router.get("/personal", viewController.personal)

module.exports = router