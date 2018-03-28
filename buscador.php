<?php
 	$jsonFile = file_get_contents("data-1.json");
	$data = json_decode($jsonFile);

	$city = "New York";
	// $city = $_POST['ciudad'] ? $_POST['ciudad'] : "all";
	$type = "";
	// $type = $_POST['tipo']  ? $_POST['tipo'] : "all";
	
	// $rangePrice = $_POST['precio']  ? $_POST['precio'] : "all";

	// $rangePrice = $_POST['precio'];
    // $precio = explode(";",$rangePrice);
    $price_min = 200;
    // $price_min = intval($precio[0]);
    $price_max = 8000;
    // $price_max = intval($precio[1]);

	try
	{
	  $filter = [];
	  foreach ($data as $key => $val) {
	  	if( $city == $val->Ciudad && $type != $val->Tipo || $price_min == $val->Precio || $price_max == $val->Precio ){
		    $filter[] = array(
		    	"Id" => $val->Id,
				"Direccion" => $val->Direccion,
				"Ciudad" => $val->Ciudad,
				"Tipo" => $val->Tipo,
				"Precio" => $val->Precio
		    );
	  	}
	  }
	  echo json_encode($filter);
	}
	catch(Exception $out )
	{
	  echo $out ->getMessage();
	}


	// echo ">".$city."/ ".$type.">".$price_min."/ >".$price_max;
?>