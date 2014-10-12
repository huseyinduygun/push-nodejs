var socket = require( 'socket.io' );
var express = require( 'express' );
var http = require( 'http' );
var users = [];

var app = express();
var server = http.createServer( app );

var io = socket.listen( server );

io.sockets.on( 'connection', function( socket ) {
	console.log( "New client !");
	
	socket.on('new user', function(data, callback){
		if(data in users){
			callback(true);
			console.log('user disconnect');
			users[data].emit( 'message', { message: "0" });
			socket.username = data;
			users[socket.username] = socket;
			console.log(socket.username+" connected");
			updateUser();
			
			//users[data].emit( 'message', { message: "1" }, function(){
			//	socket.username = data;
			//	users[socket.username] = socket;
			//	console.log(socket.username+" connected");
			//	updateUser();
			//});
		} else {
			callback(true);
			socket.username = data;
			users[socket.username] = socket;
			console.log(socket.username+" connected");
			updateUser();
		}
	});
	
	function updateUser(){
		io.sockets.emit('usernames', Object.keys(users));
	};
	
	socket.on( 'message', function( data ) {
		console.log( "Message received  :" + data.message );
		var msg = data.message.trim();
		if(msg.substring(0,3) === '/w '){
			msg = msg.substring(3);
			var ind = msg.indexOf(' ');
			if(ind !== -1){
				var name = msg.substring(0, ind);
				var msg = msg.substring(ind+1);
				if(name in users){
					users[name].emit( 'message', {message: msg } );
					console.log('Whisper');
				}
				else{
					callback('Error lagi');
				}
			}
			else{
				callback('Error , please');
			}
			
		} else {
			io.sockets.emit( 'message', {message: data.message } ); 
		}
		
	});
	
	socket.on('disconnect', function(data){
		console.log('user disconnect');
		if(!socket.username) return;
		delete users[socket.username];
		users.splice(users.indexOf(socket.username), 1);
		updateUser();
	});
	
	socket.on('logout', function(data){
		if(!socket.username) return;
		
	});
	
	socket.on('delete user', function(data){
		console.log('user disconnect');
		users[data].emit( 'message', { message: "1" } );
	});
});

server.listen( 8000 );