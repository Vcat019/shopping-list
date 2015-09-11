$(document).ready(function() {
	$('.button-update').click(function() {
		if ( $('input.unit-price').val().trim().length === 0) {
			//alert("put something here");
			$('#error').show();
			$('input.unit-price').val();
			$('.add-list').hide();
		} else {
			$('ul.add-list').append('<li>' + $('input.description').val() + '</li');
			$('input.description').val("");
			$('#error').hide();
	}	});
});