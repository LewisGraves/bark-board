const Post = require("../../models/post");

function createComment(req, res, next) {
	const comment = req.body;
	comment.owner = req.user._id;
	const postId = req.body.postId;
	Post.findById(postId)
		.then((post) => {
			post.comments.push(comment);
			return post.save();
		})
		.then((post) => {
			res.status(201).json({ post: post });
		})
		.catch(next);
}

function deleteComment(req, res, next) {
	const commentId = req.params.commentId;
	const postId = req.body.comments.postId;
	Post.findById(postId)
		.then((post) => {
			post.comments.forEach((comment) => {
				if (
					comment.owner.equals(req.user._id) ||
					post.owner.equals(req.user._id)
				) {
					post.comments.id(commentId).remove();
				} else {
					res.sendStatus(401);
				}
			});
			return post.save();
		})
		.then(() => res.sendStatus(204))
		.catch(next);
}

module.exports = {
	createComment,
	deleteComment,
};
