const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
	desc: {
		type: String,
		required: true,
	},
	pendingStatus: {
		type: Boolean,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
});

const Todo = mongoose.model("ToDo", toDoSchema);

module.exports = Todo;
