const Todo = require("../models/todos");


module.exports.addToDo = (req, res) => {
	todo = { ...req.body, pendingStatus: true };
	Todo.create(todo, (err, newTodo) => {
		if (err) {
			console.log("Error in Adding to Databse");
			return;
		}
		console.log(`New Todo added to Database - ${newTodo.desc}`);
		res.redirect("back");
	});
};

module.exports.deleteToDo = (req, res) => {
	const id = req.params.id;
	Todo.findByIdAndDelete(id, (err, deletedTodo) => {
		if (err) {
			console.log("Error in Deleting from Database");
			return;
		}
		console.log("Deleted Successfully");
		res.redirect("back");
	});
};

module.exports.toggleToDo = (req, res) => {
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
};
