var socket = io.connect( 'http://127.0.0.1:8000' );

$( "#messageForm" ).submit( function() {
	socket.emit( 'message', {message: $( "#messageInput" ).val() } );
	$( "#messageInput" ).val('');
	return false;
});

socket.on( 'message', function( data ) {
	var actualContent = $( "#messages" ).html();
	var newMsgContent = '<li> <strong>Pesan Terkirim</strong> : ' + data.message + '</li>';
	var content = newMsgContent + actualContent;
	
	$( "#messages" ).hide('fast').html( content ).fadeIn(1000);
});

socket.on('usernames', function(data){
			var html = '';
			console.log(data);
			for(i=0; i< data.length; i++){
				html += '<b>'+data[i] + "</b> connected. <button onclick=\"disconnectUser('"+data[i]+"')\">disconnect</button><br />";
			}
			$('#users').hide('fast').html(html).fadeIn(1000);
			
});

function disconnectUser(user){
	socket.emit( 'delete user', user );
}