<?php
	if($_POST){
	    $email = $_POST['email'];
	    mail("lovelock@uniquept.de", "Notify von " .$email, $email);
	}
?>