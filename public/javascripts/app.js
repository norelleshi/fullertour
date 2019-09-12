$(document).ready(() => {
	$.getJSON("/api/comments")
	.then(addComments)
	.catch((err) => res.send(err))
	
	$("#postBtn").click((event) => {
    	event.stopPropagation(); 
		createCmt();
  	})
	
	$('.list').on('click', '.cmtList__rmv', function() {
		removeCmt($(this).parent());
	})
});

const addComments = (comments) => {
	//add comments here
	comments.forEach((comment) => addComment(comment))
}

const addComment = (comment) => {
	let newComment = $('<li class="cmtList">' + '<span class="cmtList__name">' + comment.name + '</span>' + '<span>' + comment.content + '</span>' + '<span class="cmtList__rmv">Remove</span></li>');
	newComment.data('id', comment._id);
	$('.list').prepend(newComment);
}

const createCmt = (comments) => {
	//Send request to create new todo
	let usrInputName = $('#nameInput').val();
	let usrInputCont = $('#cmtInput').val();
	
	if(usrInputName && usrInputCont){
		$.post('/api/comments', {name: usrInputName, content: usrInputCont})
		.then((newComment) => {
			$('#nameInput').val('');
			$('#cmtInput').val('');
			addComment(newComment);
		})
		.catch((err) => res.send(err))			
	}
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