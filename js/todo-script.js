$(document).ready(function() {	

// User enters text in input field and presses keyboard Return

	$('input').focus();
	$('.reset').hide();

	$('input').keydown(function(event) {
		if (event.which == 13) {
		var value = $(this).val();
			if (value === '') {
				alert('Please enter a list item!');
			}
			else {
			$('.list ul').append("<li class='todos'>" + "<button><i class='fa fa-circle-o'></i></button>" + ' ' + value + "<div class='delete'>" + "<i class='fa fa-trash-o'></i>" + "</div>" + "</li>");
			$(this).val(''); //passes an empty string to input field
			$(this).focus(); //returns the focus to this field
			$('.reset').show();
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
		$('.list ul').append("<li class='todos'>" + "<button><i class='fa fa-circle-o'></i></button>" + ' ' + value + "<div class='delete'>" + "<i class='fa fa-trash-o'></i>" + "</div>" + "</li>");
		$('input').val(''); //passes an empty string to input field
		$('input').focus(); //returns the focus to this field
		}
	})

// User wants to check off list item (or uncheck it)

	$('ul').on('click', 'button', function() {
		if ($(this).hasClass('done')) {
			$(this).parent('.todos').css('text-decoration', 'none');
			$(this).css('background-color', 'grey');
			$(this).html('<i class="fa fa-circle-o"></i>');
			$(this).removeClass('done');
		}
		else {
		$(this).parent('.todos').css('text-decoration', 'line-through');
		$(this).css('background-color', 'green');
		$(this).html('<i class="fa fa-check-circle"></i>');
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
		$(this).hide();
	}) // end reset

	$('.reset').mouseover(function() {
		$(this).css('background-color', 'rgba(0,0,0,0.7)');
	})

	$('.reset').mouseout(function() {
		$(this).css('background-color', 'rgba(0,0,0,0.3)');
	})


// Theme buttons

	$('.food').click(function() {
		$('.wrapper').css('background-image', 'url(images/fruit.jpg)');
		$('.list-name h1').text('STUFF TO EAT');
		$('p.icon').html('<i class="fa fa-cutlery"></i>');
	}) // end click on Food theme button

	$('.read').click(function() {
		$('.wrapper').css('background-image', 'url(images/read.jpg)');
		$('.list-name h1').text('STUFF TO READ');
		$('p.icon').html('<i class="fa fa-bookmark-o"></i>');
	}) // end click on Books theme button

}); // end document ready