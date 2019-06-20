$(document).ready(function() {
	$(".slider-header").owlCarousel({
		loop: true,
		autoPlay: 3000,
      	items : 1
	});

	$(".main").onepage_scroll({
		sectionContainer: ".scroll-section",
		easing: "ease",                 
		animationTime: 1500,             
		pagination: true,              
	 });

	 new Photostack( document.getElementById( 'photostack-1' ), {
		callback : function( item ) {
			console.log(item)
		}
	} );
});