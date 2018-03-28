<?php 
$jsonFile = file_get_contents("data-1.json");
$data = json_decode($jsonFile);
try
	{
	  $types = [];
	  foreach ($data as $key => $val) {
	    $types[] = array(
	    	// "Id" => $val->Id,
			"Tipo" => $val->Tipo
	    );
	  }	  
	  $types = array_unique(array_column($types, 'Tipo'));
	  	foreach ($types as $key => $value) {
	  		$aux[] = $value;
	  	}
	  	
	  echo json_encode($aux);
	}
	catch(Exception $out )
	{
	  echo $out ->getMessage();
	}
?>