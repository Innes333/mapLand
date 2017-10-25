(function() {

	$(document).ready(function() {

		$('.svg-progress-1').svgprogress({
			figure: "circle",
			progressFillGradient: ['#719fdd','#9fe1d5'],
			progressWidth: 20,
			unitsOutput: '',
			endFill: 20
		}); 

		$('.svg-progress-2').svgprogress({
			figure: "circle",
			progressFillGradient: ['#719fdd','#9fe1d5'],
			progressWidth: 20,
			unitsOutput: '',
			endFill: 75
		}); 

		$('.svg-progress-3').svgprogress({
			figure: "circle",
			progressFillGradient: ['#719fdd','#9fe1d5'],
			progressWidth: 20,
			unitsOutput: '',
			endFill: 50
		});

	});

	$(window).scroll(function() {
		
		var obj = $('.w-progress').position().top,
			scrollTop = $(window).scrollTop();
		
		if (scrollTop === obj) {
			$('.svg-progress-1').trigger("redraw");
			$('.svg-progress-2').trigger("redraw");
			$('.svg-progress-3').trigger("redraw");
		}
		
	});

})();