var socket = io.connect( 'http://127.0.0.1:8000' );

$( "#loginForm" ).submit( function(e) {
	e.preventDefault();
	
	socket.emit('new user', $('#username').val(), function(data){
		console.log($('#loginForm').serialize());
				if(data){
					$.post("proses.login.php", $('#loginForm').serialize()).done(function(hasil){ 
							console.log(hasil);
						if(hasil.is === '1'){
							$('#username').val(''); $('#password').val('');
							$('#nama').html('halo '+hasil.u+'!');
							$('#loginWrap').hide();
							$('#userWrap').show();
						}
					}).fail(function (e){
						alert('terjadi kesalahan')
					});
				}
				else{
					$('#nickError').html('That username is already taken! please try again');
				}
			});
	
			
});


socket.on( 'message', function( data ) {
	var actualContent = $( "#messages" ).html();
	if(data.message=='1'){
		//alert('Anda harus logout');
		//window.location.assign('proses.logout.php');
		socket.disconnect();
		$('#loginWrap').show();
		$('#userWrap').hide();
		$.post("proses.logout.php", "");
		
	}
	else if(data.message=='0'){
		$('#loginWrap').show();
		$('#userWrap').hide();
	}
	else{
		var newMsgContent = '<li> <strong>Pesan dari admin</strong> : ' + data.message + '</li>';
		var content = newMsgContent + actualContent;
		//console.log(data);
		$( "#messages" ).hide('fast').html( content ).fadeIn(1000);
	}
});

$('.logout').click( function(){
	
});