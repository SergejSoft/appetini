<?php

if(isset($_POST['customerName'])){
    $order =mail ("thykos1994@gmail.com", "Заказ", "\nИмя: $_POST[customerName] \nEmail: $_POST[customerEmail]  \nТелефон: $_POST[customerPhone] \nАдрес: $_POST[customerAdress] \nКоличество: $_POST[orderItemsCount] \nИдБлюда: $_POST[dishId]");

}
if(order){
	echo "{status: 'ok'}";
}
?>






