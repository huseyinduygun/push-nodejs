<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">

    <title>Halaman User</title>

    <link rel="stylesheet" href="css/bootstrap.css"/>
    <style type="text/css">body {
            padding-top: 60px;
        }</style>
    <link rel="stylesheet" href="css/bootstrap-responsive.css"/>

    <link rel="stylesheet" href="css/index.css"/>
</head>

<body>
<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container">
            <a class="brand" href="proses.logout.php">Logout</a>

        </div>
    </div>
</div>

<div class="container">
    <div id="loginWrap">
        <p id="nickError"></p>

        <form class="form-inline" id="loginForm" return false>
            <input name="username" id="username" type="text" class="input-medium" placeholder="username"/>
            <input name="password" id="password" type="password" class="input-xxlarge" placeHolder="password"/>
            <input type="submit" value="Login"/>
        </form>
    </div>

    <div id="userWrap" style="display: none">
        <h1 id="nama"></h1>

        <ul id="messages">

        </ul>
    </div>
    <!-- End #messages -->
</div>
<script src="js/jquery-1.11.1.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/node_modules/socket.io/node_modules/socket.io-client/dist/socket.io.js"></script>
<script src="js/nodeClientUser.js"></script>

</body>
</html>