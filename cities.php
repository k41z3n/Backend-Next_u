<?php 
$jsonFile = file_get_contents("data-1.json");
$data = json_decode($jsonFile);
try
	{
	  $places = [];
	  foreach ($data as $key => $val) {
	    $places[] = array(
	    	// "Id" => $val->Id,
			"Ciudad" => $val->Ciudad
	    );
	  }	  
	  $places = array_unique(array_column($places, 'Ciudad'));
	  	foreach ($places as $key => $value) {
	  		$aux[] = $value;
	  	}
	  	
	  echo json_encode($aux);
	}
	catch(Exception $out )
	{
	  echo $out ->getMessage();
	}
?>