// Setup Todo Model
const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
	// ToDo Description
	desc: {
		type: String,
		required: true,
	},

	// ToDo Status - Completed or Pending
	pendingStatus: {
		type: Boolean,
		required: true,
	},

	// ToDo Category - General, Work, Personal
	category: {
		type: String,
		required: true,
	},

	// ToDo Due Date
	date: String,
});

const Todo = mongoose.model("ToDo", toDoSchema);

module.exports = Todo;
