const db = require('../models');

exports.getComments = (req, res) => {
	db.Comment.find()
	.then((comments) => res.json(comments))
	.catch((err) => res.send(err))
}

exports.createComment = (req, res) => {
	db.Comment.create(req.body)
	.then((newComment) => res.status(201).json(newComment))
	.catch((err) => res.send(err))
}

exports.getComment = (req, res) => {
	db.Comment.findById(req.params.commentId)
	.then((foundComment) => res.json(foundComment))
	.catch((err) => res.send(err))
}

exports.updateComment = (req, res) => {
	db.Comment.findOneAndUpdate({_id: req.params.commentId}, req.body, {new: true})
	.then((comment) => res.json(comment))
	.catch((err) => res.send(err))
}

exports.deleteComment = (req, res) => {
	db.Comment.remove({_id: req.params.commentId})
	.then(() => res.json({message: 'We deleted it!'}))
	.catch((err) => res.send(err))
}

module.exports = exports;