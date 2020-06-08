const express = require("express");
const router = express.Router();

const deleteController = require("../controllers/delete-controller");

router.get("/all", deleteController.all);

router.get("/pending", deleteController.pending);

router.get("/completed", deleteController.completed);

router.get("/general", deleteController.general);

router.get("/work", deleteController.work);

router.get("/personal", deleteController.personal);

module.exports = router;
