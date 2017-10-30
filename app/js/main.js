(function() {

	$(document).ready(function() {
		progressBarCircle();
	});

	$(window).scroll(function() {
		progressBarCircle();
	});

})();

function progressBarCircle() {
	var obj = $('#about').position().top,
		scrollTop = $(window).scrollTop(),
		scrollTopServ = $('#services').position().top,
		circleColor = $(this).find('.circle-chart__color'),
		circleText = $(this).find('.circle-chart__text');

	
	if ((scrollTop > obj) && (scrollTop < scrollTopServ)) {
		$('.circle-chart').each(function(){
			circleColor.addClass('circle-chart__circle');
			circleText.addClass('circle-chart__info');
		});
	} else {
		$('.circle-chart').each(function(){
			circleColor.removeClass('circle-chart__circle');
			circleText.removeClass('circle-chart__info');
		});
	} 
	
}