$(document).ready(function() {
		for (var i = 0; i <= 483; i++) {
	    $('<div />', {
	        'class' : 'grid',
	        'id'    : 'div' + i
	    }).appendTo('#wrapper');
	}
});

$(document).ready(function() {
	$('.grid').hover(function() {
		$(this).css("background-color", "red");
	})
	
	
})
