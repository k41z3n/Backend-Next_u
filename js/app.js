$(function() {
	$('select').material_select();
	$('#formulario').submit(function(event){
		var ciudad = $('#formulario').find('select[name="ciudad"]').val();
		var tipo   = $('#formulario').find('select[name="tipo"]').val();
		var precio = $('#formulario').find('input[name="precio"]').val();
		event.preventDefault();
		$.ajax(
			{
	  		url:'./buscador.php',
	  		type:'POST',
	  		data:{ 
	  			ciudad:ciudad,
	  			tipo:tipo,
	  			precio:precio
	  		}
	  	}
		).done( function(data){
			$('#result').empty()
			alert(data)
		})
	})

	$("#mostrarTodos").click(function() {
		event.preventDefault();
		$.ajax(
			{
	  		url:'./test.php',
	  		type:'POST',
	  		data:{},
	  		success: function(response) { 
				var obj = JSON.parse(response);
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
					          <p><b>Codigo_Postal:</b> ${value.Codigo} </p>
					          <p><b>Tipo:</b> ${value.tipo} </p>
					          <p><b>Precio:</b><b class="orange-text" style="font-size: 1.4em;"> ${value.Precio} </b></p>
					        </div>
					        <div class="card-action">
					          <a href="#">Ver mas</a>
					        </div>
					      </div>
					    </div>
					</section>`).appendTo('#result')
				});
	  		}
	  	}
		)
	});

	loadSelectCities()
	loadSelectTypes()

});//end ready

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