const db = require("./config/mongoose");
const express = require("express");

const port = 8000;

const app = express();

// Set ejs as View Engine
app.set("view engine", "ejs");
app.use(express.urlencoded());

//Set static folder
app.use(express.static("assets"));

// Import Routes
const viewRoutes = require("./routes/view-routes");
const deleteRoutes = require("./routes/delete-routes");
const todoRoutes = require("./routes/todo-routes");

// Setup Routes
app.use("/view", viewRoutes);
app.use("/delete", deleteRoutes);
app.use("/todo", todoRoutes);

// Render Home Page
app.get("/", (req, res) => {
	res.render("home", { path: req.path });
});

app.listen(port, err => {
	if (err) console.log(err);
	else console.log(`Server Listening on port ${port}`);
});
