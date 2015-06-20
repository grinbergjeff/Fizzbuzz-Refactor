$(document).ready(function() {
	refactfizzbuzz();
});

function refactfizzbuzz() {
	$('#input-text').keydown(function(ent) {
		if (ent.which == 13) {
			var newmaxvalue = $('#input-text').val();
			//Reset input field back to placeholder
			$(this).val('');
		}
		//Run Fizzbuzz with newmaxvalue
		buzzfizz(newmaxvalue);
	
	})
};
function buzzfizz (maxvalue) {
	for ( var i = 1; i < maxvalue; i++) {
			//Prioritize if conditions to check for divisible by 3 AND 5
			if ( i % 3 === 0 && i % 5 === 0) {
				console.log("fizz buzz");
				$('.container').append('<p>fizzbuzz</p>');
			
			}
			//Check if divisible by 3
			else if (i % 3 === 0) {
				console.log('fizz');	
				$('.container').append('<p>fizz</p>');
			}
			//Check if divisble by 5
			else if (i % 5 === 0) {
				console.log('buzz');
				$('.container').append('<p>buzz</p>');
			}
			//Finally, since the number is not div by 3 or 5, just print number
			else {
				console.log(i);	
				$('.container').append('<p>' + i + '</p>');
			}
		}	
}