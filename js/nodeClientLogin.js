var socket = io.connect( 'http://172.30.49.67:8000' );

$( "#loginForm" ).submit( function(e) {
	socket.emit('new user', $('#username').val(), function(data){
				if(!data){
					$('#nickError').html('That username is already taken! please try again');
					return false;
				}
			});
});