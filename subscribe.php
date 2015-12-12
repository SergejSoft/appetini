<?php

if(isset($_POST['subscribeMail'])){
    $subscribe =mail ("appetini.sumy@gmail.com", "Subscribe", "\nEmail: $_POST[subscribeMail]");

}
if(subscribe){
	echo "{status: 'ok'}";
}
?>






