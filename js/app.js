$(document).ready(function() {
	refactfizzbuzz();
});



function refactfizzbuzz() {
	var maxvalue  = newvalue();
	//Run Fizzbuzz with maxvalue
		for ( var i = 1; i < maxvalue; i++) {
		//Prioritize if conditions to check for divisible by 3 AND 5
		if ( i % 3 === 0 && i % 5 === 0) {
			console.log("fizz buzz");
			$('body').append('<p>fizzbuzz</p>');
			
	}
		//Check if divisible by 3
		else if (i % 3 === 0) {
			console.log('fizz');	
			$('body').append('<p>fizz</p>');
		}
		//Check if divisble by 5
		else if (i % 5 === 0) {
			console.log('buzz');
			$('body').append('<p>buzz</p>');
		}
		//Finally, since the number is not div by 3 or 5, just print number
		else {
			console.log(i);	
			$('body').append('<p>' + i + '</p>');
		}
	}
}

function newvalue() {
	$('#input-text').keydown(function(ent) {
		if (ent.which == 13) {
			var valuenew = $('#input-text').val();
			//Reset input field back to placeholder
			$(this).val('');
			//Return the value to overall fizzbuzz program
			return valuenew;
		}
	})
};