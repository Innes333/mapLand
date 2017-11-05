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
		if(window.scrollY >= (windowHeight - 100)) {
			$(el).addClass('active');
		} else {
			$(el).removeClass('active');
		}

	};


	$(document).ready(function() {

		progressBarCircle();
		
	});
	
	$(window).scroll(function() {
		activeNav('.w-menu');
		progressBarCircle();
	});

	

})();
