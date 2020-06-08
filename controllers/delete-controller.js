const Todo = require("../models/todos");

module.exports.all = (req, res) => {
	Todo.deleteMany({}, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		return res.redirect(`/view${req.path}`);
	});
};

module.exports.pending = (req, res) => {
	Todo.deleteMany({ pendingStatus: true }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		return res.redirect(`/view${req.path}`);
	});
};

module.exports.completed = (req, res) => {
	Todo.deleteMany({ pendingStatus: false }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		return res.redirect(`/view${req.path}`);
	});
};

module.exports.general = (req, res) => {
	Todo.deleteMany({ category: "General" }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		return res.redirect(`/view${req.path}`);
	});
};

module.exports.work = (req, res) => {
	Todo.deleteMany({ category: "Work" }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		return res.redirect(`/view${req.path}`);
	});
};

module.exports.personal = (req, res) => {
	Todo.deleteMany({ category: "Personal" }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		return res.redirect(`/view${req.path}`);
	});
};
