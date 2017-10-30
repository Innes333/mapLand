(function() {

	$(document).ready(function() {

	

	});

	$(window).scroll(function() {
		
		var obj = $('#about').position().top,
			scrollTop = $(window).scrollTop();
		
		if (scrollTop === obj) {
			$('.circle-chart').each(function(){
				$(this).find('.circle-chart__color').addClass('circle-chart__circle');
				$(this).find('.circle-chart__text').addClass('circle-chart__info');
			});
		}
		
	});

})();