$(document).ready(function() {
	$('.button-update').click(function() {
		if ( $('input.description').val().trim().length == 0) {
			//alert("#error");
			$('#error').show();
			$('input.description').val("");
		} else {
			$('ul.add-list').append('<li class="description-list">' + $('input.description').val() + '</li>');
			$('input.description').val("");
			$('#error').hide();
	}	});
});