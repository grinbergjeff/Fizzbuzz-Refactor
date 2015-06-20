$(document).ready(function() {
	refactfizzbuzz();
});



function refactfizzbuzz() {
	var maxvalue  = newvalue();
	
}

function newvalue() {
	$('#input-text').keydown(function(ent) {
		if (ent.which == 13) {
			var valuenew = $('#input-text').val();
			//Reset input field back to placeholder
			$(this).val('');
			//Return the value to overall fizzbuzz program
			return valuenew;
			
			//Run Fizzbuzz with maxvalue
			
		}
	});
}