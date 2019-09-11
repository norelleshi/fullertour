$(document).ready(() => {
	$.getJSON("/api/comments")
	.then(addComments)
	.catch((err) => res.send(err))
	
	$("#postBtn").click((event) => {
    	event.stopPropagation(); 
		createCmt();
  	})
	
	$('.list').on('click', 'span', function() {
		removeCmt($(this).parent());
	})
});

const addComments = (comments) => {
	//add comments here
	comments.forEach((comment) => addComment(comment))
}

const addComment = (comment) => {
	let newComment = $('<li class="cmtList">' + comment.content + '<span>Remove</span></li>');
	newComment.data('id', comment._id);
	$('.list').prepend(newComment);
}

const createCmt = () => {
	//Send request to create new todo
	let usrInput = $('#cmtInput').val();
	$.post('/api/comments', {content: usrInput})
	.then((newComment) => {
		$('#cmtInput').val('');
		addComment(newComment)
	})
	.catch((err) => res.send(err))	
}

const removeCmt = (comment) => {
	let clickedId = comment.data('id');
	let deleteUrl = '/api/comments/' + clickedId;
	$.ajax({
		method: 'DELETE',
		url: deleteUrl 
	})
	.then((data) => comment.remove())
	.catch((err) => res.send(err))
}