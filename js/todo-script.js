$(document).ready(function() {	

// User enters text in input field and presses keyboard Return

	$('input').focus();

	$('input').keydown(function(event) {
		if (event.which == 13) {
		var value = $(this).val();
			if (value === '') {
				alert('Please enter a list item!');
			}
			else {
			$('.list ul').append("<li class='todos'>" + "<button>Not Done</button>" + ' ' + value + "<div class='delete'>" + "<i class='fa fa-trash-o'></i>" + "</div>" + "</li>");
			$(this).val(''); //passes an empty string to input field
			$(this).focus(); //returns the focus to this field
			}
		}
	}) // end keydown on input

// User enters text in input field and presses "Add" button

	$('.btn-add').click(function() {
		var value = $('input').val();
		if (value === '') {
			alert('Please enter a list item!');
		}
		else {
		$('.list ul').append("<li class='todos'>" + "<button>Not Done</button>" + ' ' + value + "<div class='delete'>" + "<i class='fa fa-trash-o'></i>" + "</div>" + "</li>");
		$('input').val(''); //passes an empty string to input field
		$('input').focus(); //returns the focus to this field
		}
	})

// User wants to check off list item (or uncheck it)

	$('ul').on('click', 'button', function() {
		if ($(this).hasClass('done')) {
			$(this).parent('.todos').css('text-decoration', 'none');
			$(this).css('background-color', 'red');
			$(this).text('Not Done');
			$(this).removeClass('done');
		}
		else {
		$(this).parent('.todos').css('text-decoration', 'line-through');
		$(this).css('background-color', 'green');
		$(this).text('Done');
		$(this).addClass('done');
		}
	}) // end on click of Done button


// User wants to delete list item entirely

	$('ul').on('click', '.delete', function() {
		$(this).parent().remove();
	}) // end delete list item


// Button to reset or clear whole list

	$('.reset').click(function() {
		$('.list ul').children().remove();
	}) // end reset

}); // end document ready