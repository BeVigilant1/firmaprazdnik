$(document).ready(function() {
	var sliderCarousel = $("#myCarousel");
	sliderCarousel.owlCarousel({
		loop: true,
		items: 1,
		center: true,
		autoplay: true,
		dots: true
	});

	console.log(sliderCarousel);

	/*$(".clients__carousel-arrow--left").on('click', function(event) {
		sliderCarousel.trigger('next.owl.carousel');
		event.preventDefault();
	});

	$(".clients__carousel-arrow--right").on('click', function(event) {
		sliderCarousel.trigger('prev.owl.carousel');
		event.preventDefault();
	});*/
});