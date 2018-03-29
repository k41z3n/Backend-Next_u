<?php

	$city = $_POST['ciudad'] ? $_POST['ciudad'] : "all";

	$type = $_POST['tipo']  ? $_POST['tipo'] : "all";
	
	$rangePrice = $_POST['precio']  ? $_POST['precio'] : "all";

	$rangePrice = $_POST['precio'];
	
    $precio = explode(";",$rangePrice);
    $price_min = intval($precio[0]);
    $price_max = intval($precio[1]);

	echo ">".$city."/ ".$type.">".$price_min."/ >".$price_max;
?>