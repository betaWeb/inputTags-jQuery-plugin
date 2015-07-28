jQuery(document).ready(function($) {

	/* inputTags plugin initialization */
	$('#tags').inputTags({
		tags: ['jQuery', 'tags', 'plugin', 'Javascript'],
		max: 8
	});


	var $overlay 	= $('#overlay');
	var $trigger 	= $('#mobile-menu-trigger');
	var $right_menu = $('#right-menu');

	$trigger.on('click', function() {
		$overlay.fadeToggle().on('click', function() {
			$overlay.fadeOut();
			$right_menu.removeClass('is-active');
		});
		$right_menu.toggleClass('is-active');
	});
});