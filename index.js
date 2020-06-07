const port = 8000;

const express = require("express");

const app = express();
todos=[]

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.use(express.static("assets"));

app.post("/add-todo", (req, res) => {
	console.log(req.body, "**********");
	todo = { ...req.body, status: true };
	todos.push(todo);
	console.log(todos)
	res.render("todo-list", { todos: todos, path: "add-todo" });
});

app.get("/", (req, res) => {
	res.render("home");
});

app.listen(port, err => {
	if (err) console.log(err);
	else console.log(`Server Listening on port ${port}`);
});
