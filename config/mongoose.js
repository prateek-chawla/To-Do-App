const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos_db");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to Database"));

db.once("open", () => console.log("Connected To Database"));
