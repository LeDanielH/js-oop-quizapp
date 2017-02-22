//$(window).load(function () {
//	scrollToOnLoad();
//	goBack();
//});
//
//function scrollToOnLoad() {
//	var $currentHash = window.location.hash;
//	var $page = $('.nav').find('a[href="' + $currentHash + '"]');
//
//	if ($product.length) {
//		$product.trigger('click');
//		setTimeout(function() {
//			$('html, body').animate({
//				scrollTop: $('.wrapper-products').offset().top
//			}, 300);
//		}, 600);
//	}
//}

var Ajax = {
	$navWrapper: $('.nav'),
	$navLink: $('.nav__link'),
	$container: $('#container'),
	paths: {
		current: '',
		next: '',
		previousPaths: []
	},
	vars: function () {
		var self = this;
		self.paths.current = window.location.pathname;
		self.activeLink = self.$navLink.hasClass('active');
	},

	next: function (pathNext) {
		var self = this;
		self.pathNext = pathNext;
		self.currentPath = window.location.pathname;
		self.previousPaths.push(self.currentPath);
		self.$container.html('<p>Loading... </p>').load(self.pathNext);
	},

	previous: function (previousPath) {
		var self = this;
		self.$previousPath = previousPath;
		self.$container.html('<p>Loading... </p>').load(self.$previousPath);
	},

	init: function () {
		var self = this;
		self.vars();
		self.$navLink.on('click', function (e) {
			e.preventDefault();
			self.$currentPath = window.location.pathname;
			var pathNext = $($(this).attr('href'));
			Ajax.next(pathNext);
		});
		$(window).on('popstate', function () {
			if (window.history && window.history.pushState) {
				var previousPath = self.currentPath;
				self.previous()
			}
		})
	}
};

