// Require Todo Model
const Todo = require("../models/todos");

// Delete All Todos then Redirect to View All
module.exports.all = (req, res) => {
	Todo.deleteMany({}, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		return res.redirect(`/view${req.path}`);
	});
};

// Delete Pending Todos then Redirect to View Pending
module.exports.pending = (req, res) => {
	Todo.deleteMany({ pendingStatus: true }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		return res.redirect(`/view${req.path}`);
	});
};

// Delete Completed Todos then Redirect to View Completed
module.exports.completed = (req, res) => {
	Todo.deleteMany({ pendingStatus: false }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		return res.redirect(`/view${req.path}`);
	});
};

// Delete General Todos then Redirect to View General
module.exports.general = (req, res) => {
	Todo.deleteMany({ category: "General" }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		return res.redirect(`/view${req.path}`);
	});
};

// Delete Work Todos then Redirect to View Work
module.exports.work = (req, res) => {
	Todo.deleteMany({ category: "Work" }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		return res.redirect(`/view${req.path}`);
	});
};

// Delete Personal Todos then Redirect to View Personal
module.exports.personal = (req, res) => {
	Todo.deleteMany({ category: "Personal" }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		return res.redirect(`/view${req.path}`);
	});
};
