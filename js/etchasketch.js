chosenSize = parseInt(prompt("Please enter a number between 1 and 100"))

$(document).ready(function() {
	if( chosenSize > 2 && chosenSize <= 100 ) {
		for(var x = 1; x < chosenSize; x++) {
			for(var i = 1; i < chosenSize; i++) {
				$('#sketch-wrapper').append("<div class='grid'></div>");
			};
			$("#sketch-wrapper").append("<div class='linebreak'></div>");
		};
	
		squareSize = 480/(chosenSize)-2
		$(".grid").width(squareSize);
		$(".grid").height(squareSize);
	}else {
		alert("ya goofed! refresh the page!")
	};
	
});




$(document).ready(function() {
	
	chosenColor = "black"
	
	$('.grid').hover(function() {
		$(this).fadeOut("fast").fadeIn("fast")
		$(this).css("background-color", chosenColor);
	})
})

$(document).ready(function() {
	
	$('#wrapper > a').click(function() {
		$(this).css("border", "yellow 2px solid")
		$(this).fadeOut("fast")
		$(this).css("border", "black 2px solid").fadeIn("fast")
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
	$('#yellow').click(function() {
		chosenColor = "yellow"
	})
	$('#reset').click(function() {
		location.reload()
	})
	
})

