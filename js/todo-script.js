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
		$('.reset').show();
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
		$(this).css('background-color', 'rgba(0,0,0,0.5)').css('color', 'white');
	})

	$('.reset').mouseout(function() {
		$(this).css('background-color', 'rgba(0,0,0,0.1)').css('color', 'red');
	})


// Theme buttons


    // change bgr color of theme buttons mouseover and out
    $('.extras').on('mouseover', 'button', function() {
    	$(this).css('background-color', 'red');
    })

    $('.extras').on('mouseout', 'button', function() {
    	$(this).css('background-color', 'black');
    })

    $('.extras').on('focus', 'button', function() {
    	$(this).css('border', '2px solid white');
    })

     $('.extras').on('blur', 'button', function() {
    	$(this).css('border', '1px solid grey');
    })



	$('.food').click(function() {
		$('.wrapper').css('background-image', 'url(images/food.jpg)');
		$('.list-name h1').text('STUFF TO EAT');
		$('p.icon').html('<i class="fa fa-cutlery"></i>');
	}) // end click on Food theme button

	$('.read').click(function() {
		$('.wrapper').css('background-image', 'url(images/read.jpg)');
		$('.list-name h1').text('STUFF TO READ');
		$('p.icon').html('<i class="fa fa-bookmark-o"></i>');
	}) // end click on Books theme button
   

	$('.tasks').click(function() {
		$('.wrapper').css('background-image', 'url(images/desk.jpg)');
		$('.list-name h1').text('STUFF TO DO');
		$('p.icon').html('<i class="fa fa-check"></i>');
	}) // end click on Books theme button

	$('.notes').click(function() {
		$('.wrapper').css('background-image', 'url(images/music.jpg)');
		$('.list-name h1').text('STUFF TO PLAY');
		$('p.icon').html('<i class="fa fa-volume-up"></i>');
	}) // end click on Books theme button

	$('.travel').click(function() {
		$('.wrapper').css('background-image', 'url(images/travel.jpg)');
		$('.list-name h1').text('STUFF TO SEE');
		$('p.icon').html('<i class="fa fa-globe"></i>');
	}) // end click on Books theme button





}); // end document ready

