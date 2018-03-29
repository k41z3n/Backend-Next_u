$(function() {
	loadSelectCities()
	loadSelectTypes()
	$('select').material_select();
	$('#formulario').submit(function(event){
		event.preventDefault();
		var ciudad = $('#formulario').find('select[name="ciudad"]').val();
		var tipo   = $('#formulario').find('select[name="tipo"]').val();
		var precio = $('#formulario').find('input[name="precio"]').val();
		var _precio = precio.split(';')
		var min = _precio[0]
		var max = _precio[1]
		SendRequest(ciudad,tipo,min,max);
	});
	$('#mostrarTodos').click(function() {
		$('select').val('');
		$('select').material_select('destroy');
  		$('select').material_select();
		SendRequest();
	});
});//end ready
function SendRequest(ciudad,tipo,min,max){
	console.log(ciudad+"--"+tipo+"--"+min+"--"+max)
	$.ajax(
		{
	  		url:'./buscador.php',
	  		type:'POST',
	  		data:{ 
	  			ciudad:ciudad,
	  			tipo:tipo,
	  			min:min,
	  			max:max
	  		},
	  		beforeSend: function() {
		      $('#result').empty()
		    },
	  		success: function(response) { 
	  			console.log(response)
				var obj = JSON.parse(response);
				console.log(obj.length )
				if( obj.length > 0 ){
					$.each( obj, function( key, value ) {
						$(`<section class="col s12">
						    <div class="card horizontal">
						      <div class="card-image">
						        <img src="img/home.jpg">
						      </div>
						      <div class="card-stacked">
						        <div class="card-content">
						          <p><b>Direccion:</b> ${value.Direccion} </p>
						          <p><b>Ciudad:</b> ${value.Ciudad} </p>
						          <p><b>Telefono:</b> ${value.Telefono} </p>
						          <p><b>Codigo_Postal:</b> ${value.Codigo_Postal} </p>
						          <p><b>Tipo:</b> ${value.Tipo} </p>
						          <p><b>Precio:</b><b class="orange-text" style="font-size: 1.4em;"> ${value.Precio} </b></p>
						        </div>
						        <div class="card-action">
						          <a href="#">Ver mas</a>
						        </div>
						      </div>
						    </div>
						</section>`).appendTo('#result')
					});
				}else{
					$('<h5>No hay resultados en la busqueda :( </h5>').appendTo('#result');
				}
	  		},
	  		error: function () {
	  			$('#result').empty()
	  			$('#result').html('Ha ocurrido un error!')
		    },
	  	}
	)
}
function loadSelectCities(){
  	$.ajax(
  		{
	  		url:'./cities.php',
	  		type:'POST',
	  		data:{},
	  		success: function(response) { 
	  			var obj = JSON.parse(response);
	  			$.each( obj, function( key, value ) {
	  				$(`<option value="${value}">${value}</option>`).appendTo('select[name="ciudad"]')
	  			});
  				$('select[name="ciudad"]').material_select('destroy');
  				$('select[name="ciudad"]').material_select();
	  		}
	  	}
  	)
}
function loadSelectTypes(){
  	$.ajax(
  		{
	  		url:'./types.php',
	  		type:'POST',
	  		data:{},
	  		success: function(response) { 
	  			var obj = JSON.parse(response);
	  			$.each( obj, function( key, value ) {
	  				$(`<option value="${value}">${value}</option>`).appendTo('select[name="tipo"]')
	  			});
  				$('select[name="tipo"]').material_select('destroy');
  				$('select[name="tipo"]').material_select();
	  		}
	  	}
  	)
}