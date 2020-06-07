const express = require('express')
const router = express.Router()

const todoController = require("../controllers/todo-controller")

router.post("/add",todoController.addToDo)

router.get("/delete/:id",todoController.deleteToDo)

router.get("/toggle-status/:id", todoController.toggleToDo)

module.exports = router
