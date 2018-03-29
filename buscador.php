<?php
 	$jsonFile = file_get_contents("data-1.json");
	$data = json_decode($jsonFile);

	$city = isset($_POST['ciudad']) ? $_POST['ciudad'] : "all";
	$type = isset($_POST['tipo']) ? $_POST['tipo'] : "all";
	$pmin =  isset($_POST['min']) ? $_POST['min'] : 0;
	$pmax =  isset($_POST['max']) ? $_POST['max'] : 100000;	

	function strToInt($_str){
	  $num = str_replace('$','',$_str);
	  $num = str_replace(',','',$num);
	  return (int)$num;
	}

	try
	{
		$filter = [];
		foreach ($data as $key => $val ) {
			if( $city == $val->Ciudad || $city == "all"){
				if( $type == $val->Tipo || $type == "all"){
					$valPrice = strToInt($val->Precio);
					if( $valPrice > $pmin && $valPrice < $pmax ){
					    $filter[] = array(
					    	"Id" => $val->Id,
							"Direccion" => $val->Direccion,
							"Ciudad" => $val->Ciudad,
							"Telefono" => $val->Telefono,
							"Codigo_Postal" => $val->Codigo_Postal,
							"Tipo" => $val->Tipo,
							"Precio" => $val->Precio
					    );
					}
				}
			}
		}
		
		echo json_encode($filter);
	}
	catch(Exception $out )
	{
	  echo $out ->getMessage();
	}
?>