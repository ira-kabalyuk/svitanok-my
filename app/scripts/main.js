console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {

	$('select').niceSelect();
	
 // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabs.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

  /* if in tab mode */
    $("ul.tabs li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.tabs li").removeClass("active");
			$(this).addClass("active");
			$(".tab_container").addClass("visible");
			

	 /* $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");*/
	  
		});
		
		$(".js-close").click(function() {
			$(".tab_container").removeClass("visible");
			$(".main-nav__item").removeClass("active");
		});

		if ($('html').width() < 992) {

			$(".d_active").click(function() {
				$(this).addClass("active");
				$(".submenu").addClass("open");				
			});


			$(".js-close").click(function() {
				/*$(".tab_drawer_heading").addClass("active");*/
				$(".submenu").removeClass("open");
				$(".d_active").removeClass("active");
			});
		}

	/* if in drawer mode */
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.tabs li").removeClass("active");
	  $("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    });
	
	
	/* Extra class "tab_last" 
	   to add border to right side
	   of last tab */
	$('ul.tabs li').last().addClass("tab_last");



	//форма в меню

	$(".menu-order__button").click(function( e ) {
		e.stopPropagation();	
		$(".menu-order__form-wrap").slideToggle(400);		
	}); 

	//крестик в мобильном меню

	$(".responsive-menu-icon").click( function() {
    // if the menu is already transformed
    
    if ($( ".responsive-menu-icon" ).hasClass( "menu-up" )) {
      $("#a").removeClass("rotate-down");
    $(".responsive-menu-icon").removeClass("menu-up");
     $("#b").removeClass("disappear");
   
     $("#c").removeClass("rotate-up");
      
    } else {
      
      // if it's not transformed, at animation classes
    
    $("#a").addClass("rotate-down");
    $(".responsive-menu-icon").addClass("menu-up");
     $("#b").addClass("disappear");
   
     $("#c").addClass("rotate-up");
      
		};		
		
			$(".tab_container").toggleClass("menu-open");
			$(".menu").toggleClass("menu-open");		   
	});

	//footer

	if ($('html').width() < 767) {

		$(".footer__item.title").click(function() {
			$(this).next(".footer__list").slideToggle(400);						
		});
	}


	$('.js-datepicker').datepicker({
		altField: ".content-input", // селектор элемента куда будет выводится выбранная дата
		dateFormat: "dd",		
		autoSize: true,	
	}); 

	$('.slider').slick({
		infinite: true,
		dots: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,

		responsive: [{

			breakpoint: 1024,
			settings: {
			  slidesToShow: 2			  
			}
	  
		  }, {
	  
			breakpoint: 540,
			settings: {
			  slidesToShow: 1,			  
			}
	  
		  }]
		});
		
		$('.feedback-slider').slick({
			infinite: true,
			dots: false,
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			accessibility: false,
	
			responsive: [{			
			
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					dots: true,	
					arrows: false,		  
				}

				}]
				
			});	

			$('.prev-button').click(function(){
				$('.feedback-slider').slick('slickPrev');
			});
		
				$('.next-button').click(function(){
				$('.feedback-slider').slick('slickNext');
			});
	

		$(".js-add-clean").click(function() {
			$(".clean-popup").addClass("popup-show");						
		});
		
		$(".js-popup-close").click(function() {
			$(".clean-popup").removeClass("popup-show");						
		});

		objectFitImages();
	
});











