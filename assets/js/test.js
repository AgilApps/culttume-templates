$(document).ready(function() {
	$('a.login-window').click(function() {
		
		var loginBox = $(this).attr('href');

		$(loginBox).fadeIn('slow');
		
		var popMargTop = ($(loginBox).height() + 24) / 2; 
		var popMargLeft = ($(loginBox).width() + 24) / 2; 
		
		$(loginBox).css({ 
			'margin-top' : -popMargTop,
			'margin-left' : -popMargLeft
		});
		
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn('slow');
		
		return false;
	});
	
	$('a.close, #mask').live('click', function() { 
	  $('#mask , .login-popup').fadeOut('fast' , function() {
		$('#mask').remove();  
	}); 
	return false;
	});
});