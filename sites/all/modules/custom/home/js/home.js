(function($) {
	$(document).ready(function() {
		change('blog');
		
		$(".page-front ul li a").click(function(event) {
	    		event.preventDefault();
	    		
	    		var id = $(this).attr('id');
	    	
	    		change(id);
	    		
	    		
	    		
	    });	
	});

	function change(id) {
		change_visibility(id);

		$(".page-front ul li a").each(function () {
		    $(this).removeClass('active');
		    });  
		$(this).addClass('active');
		
		load_content(id);
	}
	/**
	 * carga el contenido si no ha sido cargado ya
	 */
	function load_content(id) {
		if ($("#home-content #" +id).hasClass('loaded')) return;
		$.post('ajax/home/rendered',
				  { option: id },
				  function(datos) {
					  $("#home-content #" +id).append(datos);
	    });

		$("#home-content #" +id).addClass('loaded');
	}
	/**
	 * Controla la visibilidad de los elementos de  la home
	 */
	function change_visibility(id) {

		 $("#home-content .option").each(function () {
			    $(this).css('display', 'none' );
			    
		 });  
		
		$("#home-content #"+id).css('display', 'block' );
	}
}(jQuery));



/**
 * Reemplaza todos los elementos
 * @param text
 * @param busca
 * @param reemplaza
 * @returns
 */
function replaceAllElements( text, busca, reemplaza ) {
	
  while (text.toString().indexOf(busca) != -1)
	text = text.toString().replace(busca,reemplaza);

  return text;	
}

