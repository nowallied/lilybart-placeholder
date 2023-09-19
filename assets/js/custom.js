jQuery(function(){

	// scrollbar js initialization
	jQuery(".nano").nanoScroller();


	// cloning menu items in mobile
	var mobileNav;
	mobileNav = jQuery('<div id="mobileNav"></div>').prependTo('.offcanvas .nano .nano-content');
	mobileNav.append(jQuery('.navbar-fashion .navbar-custom .collapse > ul').clone());

	// offcanvas toggle
	jQuery('.toggle a').on('click',function(e){
		console.log('fa')
		jQuery('.offcanvas').addClass('show-offcanvas');
		jQuery('body').addClass('pushed');
		jQuery('.body-inactive').fadeIn(350);
		e.preventDefault();
	});

	// closing ups clicking on the screen
	jQuery('.body-inactive, .coff a').on('click',function(e){
		jQuery('.offcanvas').removeClass('show-offcanvas');
		jQuery('.body-inactive').fadeOut(350);
		e.preventDefault();
	});
})
