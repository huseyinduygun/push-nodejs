<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta content="width=device-width, initial-scale=1.0" name="viewport">
		
		<title>Halaman Admin</title>
	
		<link rel="stylesheet" href="css/bootstrap.css" />
		<style type="text/css">body { padding-top: 60px; }</style>
		<link rel="stylesheet" href="css/bootstrap-responsive.css" />
		
		<link rel="stylesheet" href="css/index.css" />
	</head>

	<body>
		<div class="navbar navbar-inverse navbar-fixed-top">
			<div class="navbar-inner">
				<div class="container">
					<a class="brand" href="index.php">NodeJS_PHP</a>
					
				</div>
			</div>
		</div>
		
		<div class="container">
			<h1>Halaman Admin</h1>
			<form class="form-inline" id="messageForm">
				<input id="messageInput" type="text" class="input-xxlarge" placeHolder="Message" required/>
				<input type="submit" value="Send" />
			</form>
			
			<div>
				<ul id="messages">
					
				</ul>
			</div>
			<div>
			<ul id="users">
			</ul>
			</div>
			<!-- End #messages -->
		</div>
		<script src="js/jquery-1.11.1.js"></script>
		<script src="js/bootstrap.js"></script>
		<script src="js/node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.js"></script>
		<script src="js/nodeClientAdmin.js"></script>
		
	</body>
</html>