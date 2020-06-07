const Todo = require("../models/todos");

module.exports.all = (req, res) => {
    Todo.find({}, (err, todos) => {
        if (err) {
            console.log("Error fetching from Database");
            return;
        }
        res.render("todo-list", { todos: todos, path: req.path });
    })
};

module.exports.pending = (req, res) => {
	Todo.find({ pendingStatus: true }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		res.render("todo-list", { todos: todos, path: req.path });
	});
};

module.exports.completed = (req, res) => {
	Todo.find({ pendingStatus: false }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		res.render("todo-list", { todos: todos, path: req.path });
	});
};

module.exports.general = (req, res) => {
	Todo.find({ category: "General" }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		res.render("todo-list", { todos: todos, path: req.path });
	});
};

module.exports.work = (req, res) => {
	Todo.find({ category: "Work" }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
        }
		res.render("todo-list", { todos: todos, path: req.path });
	});
};

module.exports.personal = (req, res) => {
	Todo.find({ category: "Personal" }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		res.render("todo-list", { todos: todos, path: req.path });
	});
};
