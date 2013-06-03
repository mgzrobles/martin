(function ($) {
	Drupal.behaviors.feedbackform = {
		attach: function(context) {
			if ($(window).width() > 650) {
				var init_feedback = "<div id=\"feedback_form\">"
						+ "				<span id=\"feedback_form_text\">FeedBack</span>"
						+ "				<div id=\"feedback_form_content\">"
						+ "					<div id=\"messages\" class=\"\"></div>"
						+ "				</div>" + "			</div>";

				$("body").append(init_feedback);
				var contact_form = Drupal.settings.feedback_form.contact_form;
				$("#feedback_form #feedback_form_content").append(contact_form);
				$("#feedback_form #feedback_form_content").addClass('load');

				$("body #feedback_form span#feedback_form_text").click(
						function(event) {
							if ($("#feedback_form").hasClass('open')) {
								close_form_content();
							} else {
								load_form_content();
							}
						});

			}
			$(window).resize(function() {
	    		if ($(window).width() < 650) {
	    			$('#feedback_form').html('');
	    		}
			});
		/**
		 * Cierra el formulario
		 */
		function close_form_content() {
			$("#feedback_form").removeClass('open');
			$("#feedback_form span#feedback_form_text").animate({"left": "-=35%"}, "slow");
			$("#feedback_form #feedback_form_content").animate({"left": "-=35%"}, "slow");
		}
		/**
		 * Carga el formulario
		 */
		function load_form_content() {
			$("#feedback_form").addClass('open');
			$("#feedback_form span#feedback_form_text").animate({"left": "+=35%"}, { queue: false, duration: 1500 });
			$("#feedback_form #feedback_form_content").animate({"left": "+=35%"}, { queue: false, duration: 1500 });
		}
		
	}//end attach
	};//end behaviors
})(jQuery);
