<?php

if(isset($_POST['subscribeForm'])){
    $subscribe =mail ("appetini.sumy@gmail.com", "Subscribe", "\nEmail: $_POST[subscribeMail]");

}
if(subscribe){
	echo "{status: 'ok'}";
}
?>






