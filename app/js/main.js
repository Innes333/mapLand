$(function() {
	
	var windowHeight = window.outerHeight;	
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

	var main = {
		opt: {
			tabs: $('.tabs'),
			popup: $('.btn.pop'),
			img: $('img'),
			linc: $('a'),
			body: $('body'),
			wind: $(window),
			mobButton: $('.mob-button'),
			slider: $('.slider'),
			owlOptions: {
				autoPlay: 3000,
				navigation: true,
				singleItem: true,
				autoPlay: false,	
				pagination: true,
				scrollPerPage: true,
				navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']								
			}
		},

		tabs: function(el){
			var linc = el.find('.tab-link'),
					tab  = el.find('.tab'),
					dataShow;
			linc.on('click',function(){				
				dataShow = $(this).data('show');
				linc.removeClass('active');
				$(this).addClass('active');

				tab.css('display','none')
				.find('.tab-content').removeClass('active');

				$('#'+dataShow).fadeIn(600)
				.find('.tab-content').addClass('active');
			});
		},

		popup: function(el){
			el.on('click',function(event){
				event.preventDefault();		
				var show = $(this).data('show'),
						pop  = $('#'+ show);

				pop.fadeIn(600)
				.css('height', $(window).height() + 'px')
				.find('.popup-content')
				.removeClass('anim')
				.append('<span class="fade_out">&#9587;</span>')

				$('.fade_out').click(function(){
					pop.fadeOut(600)
					.find('.popup-content')
					.addClass('anim');
					$(this).detach();
				});
			});
		},

		activeNav: function(el) {
			if(window.scrollY >= (300)) {
				$(el).addClass('active');
			} else {
				$(el).removeClass('active');
			}			
		},
		
		progressBarCircle: function() {		
			var objTop = $('#about').position().top,
				scrollTop = $(window).scrollTop(),
				scrollTopServ = $('#services').position().top;
			
			if ((scrollTop > objTop) && (scrollTop < scrollTopServ)) {
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
			
		},	

		smoothScroll: function(link) {
			//smoothscroll
			$('a[href^="#"]').on('click', function (e) {
				e.preventDefault();
				$(document).off("scroll");
				
				link.removeClass('active');
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
		},

		toggleClasses: function(el, activeClass) {
			el.on('click', function(e) {
				e.stopPropagation();
				el.toggleClass(activeClass)
				$(document).on('click', function() {
					el.removeClass(activeClass);
				})
			});
		},

		sendLetter: function(formEl) {			
			formEl.submit(function(e) {
				e.preventDefault();
				var t = $(this);
				console.log(t.serialize());
				return $.ajax({
					type: "POST",
					url: this.action,
					data: t.serialize()
				}).done(function() {
					alert("Your letter is sent");
					window.location = window.location.href;
					setTimeout(function() {
						t.trigger("reset")
					}, 300);
				}),
				!1
			})
		},
		init: function(){
			
			// menu init
			// this.activeNav('.w-menu');

			//smooth scroll
			this.smoothScroll($('.link'));
						
			// send letter
			this.sendLetter($("form.send"));

			//mob button toggle
			this.toggleClasses($('.burger-menu'), 'active');
			
		}
	};
	
	$(window).scroll(function() {
		main.activeNav('.w-menu');			
		if ($('#about')[0] !== undefined) {
			main.progressBarCircle();
		}
	});

	$(document).ready(function(){		
		main.init();
	});
});