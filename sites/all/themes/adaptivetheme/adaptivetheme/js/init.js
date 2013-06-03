(function ($) {


Drupal.behaviors.initTheme = {
  attach: function (context) {
			if ($(window).width() < 650) {
				$('body').addClass('site-mobile');
			}

			$(window).resize(function() {
				if ($(window).width() < 650) {
					$('body').addClass('site-mobile');
				} else {
					$('body').removeClass('site-mobile');
				}
			});
			
			$('.region-sidebar-second #social br').remove();
	  
	  $('#block-user-login #user-login-form').addClass('element-invisible');
	  
	  $("#block-user-login").click(function(event) {
		  if ($('#block-user-login #user-login-form').hasClass('element-invisible')) {
			  $('#block-user-login #user-login-form').removeClass('element-invisible');
		  }
		  else{ 
			  $('#block-user-login #user-login-form').addClass('element-invisible');
		  }
  		
	  });	
  }
 
};

})(jQuery);
