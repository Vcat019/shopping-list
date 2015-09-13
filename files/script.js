$(document).ready(function() {
	$('.button-update').click(function() {
		if ( $('input.description').val().trim().length == 0) {
			//alert("#error");
			$('#error').show();
			$('input.description').val("");
		} else {
			$('ul.add-list').append('<li class="description-list"><button class="item">done</button>' + $('input.description').val() + '</li>');
			$('input.description').val("");
			$('#error').hide();
	};
});
	$('ul').on('click', '.item', function(event) {
		$(this).closest('li').toggleClass('description-list done');
		$(this).remove();
		
	});


});
