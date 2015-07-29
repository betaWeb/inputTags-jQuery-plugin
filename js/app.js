var app = function() {
	var self = this;

	self.initInputTags = function() {
		/* Demo 1 initialization */
		$('#inputTags_d1').inputTags();

		/* Demo 2 initialization */
		$('#inputTags_d2').inputTags({
			tags: ['jQuery', 'tags', 'plugin', 'Javascript'],
			max: 8
		});

		/* Demo 2 initialization */
		$('#inputTags_d3').inputTags({
			tags: ['jQuery'],
			autocomplete: {
				values: ['tags', 'plugin', 'Javascript'],
				only: true
			},
			max: 3,
			create: function() {
				console.log('Tag added !');
			}
		});
	};

	self.hash = function(h) {
		if (window.history.pushState) {
			window.history.pushState(null, null, h);
		} else {
			window.location.hash = h;
		}
	};

	self.menuScroll = function() {
		var sections  = [$('#home')];
		var current   = false;
		var $menuLink = $('.menu-link');

		$menuLink.each(function() {
			sections.push($($(this).attr('href')));
		});

		$(window).scroll(function() {
			var $win 	  = $(this);
			var scrollTop = $win.scrollTop() + ($win.height() / 4);

			for (var i in sections) {
				var $section = sections[i];

				if (scrollTop > $section.offset().top) {
					id = $section.attr('id');
				}
			}

			if ('undefined' !== typeof id && id !== current) {
				$menuLink.removeClass('is-active').filter('[href="#' + id + '"]').addClass('is-active');
				current = id;
			}
		});

		$('a[href^="#"]').click(function(e) {
			e.preventDefault();

			var $a = $(this);
			var id = $a.attr("href");

			self.hash(id);

			$('#right-menu, .menu-link').removeClass('is-active');
			$('#overlay').fadeOut();

			if (!$a.hasClass('logo')) {
				$a.addClass('is-active');
			}

			$('html, body').animate({
				scrollTop: $(id).offset().top - 64
			}, 400);

			return false;
		});
	};

	self.mobileMenu = function() {
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
	};

	return {
		init: function() {
			self.initInputTags();
			self.menuScroll();
			self.mobileMenu();
		}
	};
};

jQuery(document).ready(function($) {
	app().init();	
});