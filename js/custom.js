$(document).ready(function(){
	
	// $('.menu-list').tendina({
 //    // This is a setup made only
 //    // to show which options you can use,
 //    // it doesn't actually make sense!
 //        animate: true,
 //        speed: 500,
 //        onHover: false,
 //        hoverDelay: 300,
 //        openCallback: function(clickedEl) {
 //          console.log('Hey dude!');
 //        },
 //        closeCallback: function(clickedEl) {
 //          console.log('Bye dude!');
 //        }
 //    });
	$('.icon-top').click(function(){
		$('.top-menu .menu-top').animate({
			'left':'0px'
		});
		$('body').animate({
			'left':'230px'
		});
		$('.box-common-overlay').css('display','block');
	});
	$('.icon-menu-main').click(function(){
		$('.menu-main .menu-top').animate({
			'left':'0px'
		});
		$('body').animate({
			'left':'250px'
		});
		$('.box-common-overlay').css('display','block');
	});
	$('.box-common-overlay').click(function(){
		$('.menu-top').animate({
			'left':'-230px'
		});
		$('.menu-main .menu-top').animate({
			'left':'-250px'
		});
		$('body').animate({
			'left':'0px'
		});
		$('.box-common-overlay').css('display','none');
	});
});
