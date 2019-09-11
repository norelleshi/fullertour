const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	name: {
		type: String
	},
	content: {
		type: String,
		required: 'Name is required!'
	},
	created_date: {
		type: Date,
		default: Date.now
	}
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;