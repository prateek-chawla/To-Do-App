const port = 8000;

const db = require("./config/mongoose");
const Todo = require("./models/todos");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.use(express.static("assets"));

app.post("/add-todo", (req, res) => {
	todo = { ...req.body, pendingStatus: true };
	Todo.create(todo, (err, newTodo) => {
		if (err) {
			console.log("Error in Adding to Databse");
			return;
		}
		console.log(`New Todo added to Database - ${newTodo.desc}`);
		res.redirect("back");
	});
});

app.get("/toggle-status/:id", (req, res) => {
	console.log(req.body);
	console.log("req.path", req.path);
	console.log("req.query", req.query);
	console.log("req.params", req.params);

	const id = req.params.id;

	Todo.findById(id, (err, todo) => {
		if (err) {
			console.log("Could not find todo with given id");
			return;
		}
		pendingStatus = todo.pendingStatus;
		Todo.findByIdAndUpdate(
			id,
			{ pendingStatus: !pendingStatus },
			(err, updatedTodo) => {
				if (err) {
					console.log("Error in Updating Todo");
					return;
				}
				console.log(
					`Todo with description - ${updatedTodo.desc} - updated Successfully`
				);
				res.redirect("back");
			}
		);
	});
});

app.get("/view/all", (req, res) => {
	Todo.find({}, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		console.log("todos*******\n", todos);
		console.log("req.path", req.path);
		console.log("req.query", req.query);
		console.log("req.params", req.params);
		res.render("todo-list", { todos: todos, path: req.path });
	});
});

app.get("/view/pending", (req, res) => {
	Todo.find({ pendingStatus: true }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		res.render("todo-list", { todos: todos, path: req.path });
	});
});

app.get("/view/completed", (req, res) => {
	Todo.find({ pendingStatus: false }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		res.render("todo-list", { todos: todos, path: req.path });
	});
});

app.get("/view/general", (req, res) => {
	Todo.find({ category: "General" }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		res.render("todo-list", { todos: todos, path: req.path });
	});
});

app.get("/view/work", (req, res) => {
	Todo.find({ category: "Work" }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		res.render("todo-list", { todos: todos, path: req.path });
	});
});

app.get("/view/personal", (req, res) => {
	Todo.find({ category: "Personal" }, (err, todos) => {
		if (err) {
			console.log("Error fetching from Database");
			return;
		}
		res.render("todo-list", { todos: todos, path: req.path });
	});
});

app.get("/", (req, res) => {
	res.render("home");
});

app.listen(port, err => {
	if (err) console.log(err);
	else console.log(`Server Listening on port ${port}`);
});
