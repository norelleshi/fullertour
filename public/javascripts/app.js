$(document).ready(() => {
	$.getJSON("/api/comments")
	.then(addComments)
	.catch((err) => res.send(err))
	
	$("#postBtn").click((event) => {
    	event.stopPropagation(); 
		createCmt();
  	})
});

const addComments = (comments) => {
	//add comments here
	comments.forEach((comment) => addComment(comment))
}

const addComment = (comment) => {
	let newComment = $('<li class="cmtList">' + comment.content + '</li>');
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