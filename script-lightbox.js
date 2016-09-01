
//---- Lightbox
jQuery('body').append('<div id="simple-lightbox-overlay"></div>');
jQuery('body').append('<div id="simple-lightbox-container"></div>');

jQuery(document).on('click', '.simple-lightbox', function() {
	jQuery('#simple-lightbox-overlay').fadeIn(350);

	var img = new Image();
	img.onload = function () {
		var imgRatio = img.width / img.height;
		var windowRatio = window.innerWidth / window.window.innerHeight;

		img.style.maxWidth = img.width + 'px';
		img.style.maxHeight = img.height + 'px';
		if ( imgRatio > windowRatio ) {
			img.width  = .8 * window.innerWidth;
			img.style.height = 'auto';
		} else {
			img.style.width  = 'auto';
			img.height = .8 * window.window.innerHeight;
		}

		jQuery('#simple-lightbox-container').append( img ).delay(50).fadeIn(350);
	}
	img.src = this.src;
});

jQuery(document).on('click', '#simple-lightbox-overlay', function() {
	jQuery('#simple-lightbox-container, #simple-lightbox-overlay').fadeOut(350, function() {
		jQuery('#simple-lightbox-container').html('');
	});
});
