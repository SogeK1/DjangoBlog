/*$('.hamburger').on('click', function () {
	$('.menu').slideToggle();
});*/
$('.hamburger').on('click', function() {
	$('.hamburger').toggleClass('change');
	$('.nav .menu').toggleClass('active');
});