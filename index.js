const port = 8000;

const db = require("./config/mongoose");
const Todo = require("./models/todos");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded());

app.use(express.static("assets"));


const viewRoutes = require('./routes/view-routes')
const todoRoutes = require("./routes/todo-routes");

app.use('/view', viewRoutes)
app.use("/todo", todoRoutes);

app.get("/", (req, res) => {
	res.render("home", { path: req.path });
});

app.listen(port, err => {
	if (err) console.log(err);
	else console.log(`Server Listening on port ${port}`);
});
