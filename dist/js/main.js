(function() {

	var windowHeight = window.outerHeight;
	
	var progressBarCircle = function() {
		var obj = $('#about').position().top,
			scrollTop = $(window).scrollTop(),
			scrollTopServ = $('#services').position().top;
		
		if ((scrollTop > obj) && (scrollTop < scrollTopServ)) {
			$('.circle-chart').each(function(){
				$(this).find('.circle-chart__color').addClass('circle-chart__circle');
				$(this).find('.circle-chart__text').addClass('circle-chart__info');
			});
		}
		else {
			$('.circle-chart').each(function(){
				$(this).find('.circle-chart__color').removeClass('circle-chart__circle');
				$(this).find('.circle-chart__text').removeClass('circle-chart__info');
			});
		} 
		
	};

	var activeNav = function(el) {
		if(window.scrollY >= (windowHeight - 300)) {
			$(el).addClass('active');
		} else {
			$(el).removeClass('active');
		}

	};

	var onScroll = function(event){
		var scrollPos = $(document).scrollTop();
		$('.link').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() - 20 > scrollPos) {
				$('.menu a').removeClass("active");
				currLink.addClass("active");
			}
		});
	};

	var smoothScroll = function() {
		//smoothscroll
		$('a[href^="#"]').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
			
			$('.link').removeClass('active');
			$(this).addClass('active');
			
			var target = this.hash,
				menu = target;
			$target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 1000, 'swing', function () {
				window.location.hash = target;
				$(document).on("scroll", onScroll);
			});
		});
	};

	var toggleClasses = function(el, activeClass) {
		el.on('click', function(e) {
			e.stopPropagation();
			el.toggleClass(activeClass)
			$(document).on('click', function() {
				el.removeClass(activeClass);
			})
		});
	};


	$(document).ready(function() {

		$(document).on("scroll", onScroll);

		progressBarCircle();

		toggleClasses($('.burger-menu'), 'active');

		smoothScroll();	
		
	});
	
	$(window).scroll(function() {
		activeNav('.w-menu');
		progressBarCircle();
	});

	

})();
