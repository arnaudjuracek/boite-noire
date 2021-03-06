$("document").ready( function() {
	initPhotoSwipeFromDOM('.gallery');

	$('header.main').attr('data-color', $('article').first().attr('data-type'));

	$(window).on('scroll resize', function(){
		if($(document).width()>= 992){
			$('article').each(function(){
				var position = {
					top: $(this).offset().top - 100,
					bottom: $(this).offset().top - 100 + $(this).height() - $(this).find('header').height()
				};
				if(window.pageYOffset >= position.top){
					if(window.pageYOffset >= position.bottom){
						$(this).removeClass('affix-top');
						$(this).addClass('affix-bottom');
					}else{
						$(this).addClass('affix-top');
						$(this).removeClass('affix-bottom');

						$('header.main').attr('data-color', $(this).attr('data-type'));
					}
				}else $(this).removeClass('affix-top affix-bottom');

				if($(this).hasClass('affix-bottom')) $(this).find('header').css('opacity', window.pageYOffset.map(position.bottom, position.bottom + 100, 1, 0));
				else $(this).find('header').css('opacity', 1);
			});
		}else $('article header').css('opacity', 1);
	});

	$('header.main').affix();


});

Number.prototype.map = function ( in_min , in_max , out_min , out_max ) {
	var theNumber = ( this - in_min ) * ( out_max - out_min ) / ( in_max - in_min ) + out_min;
	if ( out_max > out_min ) {
		if ( theNumber > out_max ) theNumber = out_max;
		if ( theNumber < out_min ) theNumber = out_min;
	} else {
		if ( theNumber < out_max ) theNumber = out_max;
		if ( theNumber > out_min ) theNumber = out_min;
	}
	return theNumber;
}