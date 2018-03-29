<?php 
$jsonFile = file_get_contents("data-1.json");
$data = json_decode($jsonFile);
try
	{
	  $places = [];
	  foreach ($data as $key => $val) {
	    $places[] = array(
	    	"Id" => $val->Id,
			"Direccion" => $val->Direccion,
			"Ciudad" => $val->Ciudad,
			"Telefono" => $val->Telefono,
			"Codigo_Postal" => $val->Codigo_Postal,
			"Tipo" => $val->Tipo,
			"Precio" => $val->Precio
	    );
	  }

	  echo json_encode($places);
	}
	catch(Exception $out )
	{
	  echo $out ->getMessage();
	}
?>