<?php

if(isset($_POST['customerName'])){
    $order =mail ("thykos1994@gmail.com", "Заказ", "\nИмя: $_POST[customerName] \nEmail: $_POST[customerEmail]  \nТелефон: $_POST[customerPhone] \nАдрес: $_POST[customerAddress] \nКоличество: $_POST[orderItemsCount] \nИдБлюда: $_POST[dishId] \nЦена: $_POST[price]");

}
if(order){
	echo "{status: 'ok'}";
}
?>






