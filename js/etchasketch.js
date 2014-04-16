$(document).ready(function() {
		for (var i = 0; i < 1600; i++) {
	    $('<div />', {
	        'class' : 'grid',
	        'id'    : 'div' + i
	    }).appendTo('#sketch-wrapper');
	}
});

$(document).ready(function() {
	
	chosenColor = "black"
	
	$('.grid').hover(function() {
		$(this).css("background-color", chosenColor);
	})
})

$(document).ready(function() {
	
	$('#wrapper > a').click(function() {
		$(this).css("border", "white 2px solid")
	})
	
	$('#red').click(function() {
		chosenColor = "red"
	})
	$('#blue').click(function() {
		chosenColor = "blue"
	})
	$('#green').click(function() {
		chosenColor = "green"
	})
	$('#black').click(function() {
		chosenColor = "black"
	})
	
	
})

