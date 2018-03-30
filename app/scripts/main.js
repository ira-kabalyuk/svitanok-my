console.log('\'Allo \'Allo!');

 
jQuery(document).ready(function() {


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
			

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
		});
		
		$(".js-close").click(function() {
			$(".tab_container").removeClass("visible");
			$(".main-nav__item").removeClass("active");
		});

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
	









  //slider
$('.popup-gallery').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  mobileFirst: true,
  arrows:true,
  responsive: [           
            {
              breakpoint: 767,
              settings: {               
                slidesToShow: 6,
                slidesToScroll: 1,                             
              }
            },

            {
              breakpoint: 667,
              settings: {               
                slidesToShow: 4,                                          
              }
            },

            {
              breakpoint: 540,
              settings: {               
                slidesToShow: 3,                                          
              }
            },

            {
              breakpoint: 10,
              settings: {               
                slidesToShow: 2,                                          
              }
            }
        ]   
});



$('.popup-gallery').slickLightbox({
  itemSelector: 'a',
  navigateByKeyboard:true
});

//end slider

//article slider

$('.article-gallery').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows:true,
});

//calendar

$('.calendar__slider-block').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  arrows:false,
  responsive: [           
            {
              breakpoint: 767,
              settings: {               
                slidesToShow: 1,
                slidesToScroll: 1,                             
              }
            }            
        ]   
});


/*$('.btn-next').on('click',function(){ $('#slick').slick('slickNext'); });
$('.btn-prev').on('click',function(){ $('#slick').slick('slickPrev'); });*/

 $('.prev-button').click(function(){
    $('.calendar__slider-block').slick('slickPrev');
  });

   $('.next-button').click(function(){
    $('.calendar__slider-block').slick('slickNext');
  });


//end article slider

    if ($('html').width() > 1025) {

			$('.animated-in-pulse').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated pulse',
        offset: 100
			});
		
		$('.animated-in-bounce').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated bounceInDown',
			offset: 100
		});

		$('.animated-in-fadeInLeft').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated fadeInLeft',
			offset: 100
		});

		$('.animated-in-fadeInLeft-lang').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated fadeInLeftLang',
			offset: 100
		});

		$('.animated-in-fadeInRight-lang').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated fadeInRightLang',
			offset: 100
		});

    	$('.animated-in-fadeInRight').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated fadeInRight',
			offset: 100
		});

		$('.animated-in-flipInX').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated flipInX',
			offset: 100
		});

    $('.animated-in-flipInX-1').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated flipInX1',
			offset: 100
		});

     $('.animated-in-flipInX-2').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated flipInX2',
			offset: 100
		});

    $('.animated-in-flipInY').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated flipInY',
			offset: 100
		});

    $('.animated-in-slideInLeft').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated slideInLeft',
			offset: 100
		});

    $('.animated-in-slideInRight').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated slideInRight',
			offset: 100
		});

    $('.animated-in-zoomIn').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated zoomIn',
			offset: 100
		});

    $('.animated-in-zoomInDown').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated zoomInDown',
			offset: 100
		});

    $('.animated-in-fadeInDown').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated fadeInDown',
			offset: 100
		});

    $('.animated-in-lightSpeedIn').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated lightSpeedIn',
			offset: 100
		});     

    $('.animated-in-fadeInUp').addClass("is-hidden").viewportChecker({
			classToAdd: 'visible animated fadeInUp',
			offset: 100
		});

    $('.animated-in-fadeIn').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 100
    });

    $('.animated-in-jackInTheBox').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated jackInTheBox',
        offset: 100
    });




    $('.in-top').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated slideInDown',
        offset: 200
    });

    $('.in-fly').addClass("is-hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 200
    });

  } 

  /*new WOW().init(); */

   
    /*$('html').smoothScroll(300);*/

    /* placeholder*/       
    $('input, textarea').each(function(){
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function(){ $(this).attr('placeholder', '');});
        $(this).focusout(function(){             
            $(this).attr('placeholder', placeholder);           
        });
    });
    /* placeholder*/ 

		//nav
		
		$(".bt-menu").click(function( e ) {        
			$(".bt-menu").toggleClass("bt-menu-open")			
	 	}) 
		
			$('.menu-trigger').click(function() {
				$('.menu').slideToggle(500);
			});//end slide toggle
			
			$(window).resize(function() {		
				if (  $(window).width() > 992 ) {			
					$('nav ul').removeAttr('style');
				
				 }
			});	
			
			
			$(".menu__item_sub").click(function( e ) {        
				if (  $(window).width() < 992  ) {
					 $(this).find(".dropdown").slideToggle(500);
				}
		 })

		 /*	var toggle = document.querySelector(".bt-menu");
			var menu = document.querySelector(".menu");
			var dropdown = document.querySelector(".dropdown");
			var dropdownStart = document.querySelector(".dropdownStart");

			toggle.addEventListener("click", function() {
				menu.classList.toggle("showMenu");
  
			}, false);

			dropdownStart.addEventListener("click", function() {
				dropdown.classList.toggle("showDropdown");
			}, false);*/


		

	//nav end
	
	//search 

	$(".search-button").click(function( e ) {        
		$(".search-input").toggleClass("search-input-open"),
		$(".search-button").toggleClass("search-button-open")	
	 });


   //switch

   $(".switch-block i").click(function( e ) {        
		$(".autors__layot-block").toggleClass("active")	
	 });

	//вход

	$(".entry").click(function( e ) {
		e.stopPropagation();
		/*$(".cart").toggleClass("is-emersione");*/
		$(".entry-window-signin").slideToggle(400);		
	}); 

	$("body").on("click", ".close-entry-window", function( e ) {       
	  $(this).parents( ".entry-window" ).slideToggle(400)    
	 
	 });

	 $(".sign-up-button").click(function( e ) {        
		$(".entry-window-signup").slideToggle(500)	
	 });

	


	//вход конец

  //subnav

 	$(".subnav__item_btn").click(function( e ) {
		e.stopPropagation();	
		$(".drop-menu").slideToggle(400);		
	}); 

  $(".drop-menu__close").click(function( e ) {       
		$(this).parents( ".drop-menu" ).slideToggle(400)    
	
 }); 

	//обрезка текста 

	$(".search-window__content-block_text").shorten({
		"showChars" : 80,		
	});

  

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

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
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
	
  $(document).ready(function() {
    $('select').niceSelect();
  });

  //upload button

  $('#chooseFile').bind('change', function () {
  var filename = $("#chooseFile").val();
  if (/^\s*$/.test(filename)) {
    $(".file-upload").removeClass('active');
    $("#noFile").text("Файл не выбран..."); 
  }
  else {
    $(".file-upload").addClass('active');
    $("#noFile").text(filename.replace("C:\\fakepath\\", "")); 
  }
});

//calculator filter

$('.right-btn').click(function() {
	var countElem = $(this).parent().find('.counter');
		 var count = parseInt(countElem.text()) + 1;      
		 countElem.text(count);      
	 });
 
	 $('.left-btn').click(function() {
	var countElem = $(this).parent().find('.counter');
		 var count = parseInt(countElem.text()) - 1;
		 if(count < 1) {
			 return;
			 }
		 countElem.text(count);        
	 });
	 

});

//object-fit for ie

	var userAgent, ieReg, ie, ieEdge, ieE;
	userAgent = window.navigator.userAgent;
	ieReg = /msie|Trident.*rv[ :]*11\./gi;
	ieEdge = /Edge/i;
	ie = ieReg.test(userAgent);
	ieE= ieEdge.test(userAgent);

	if(ie || ieE) {
		$(".img-wrap").each(function () {
			var $container = $(this),
					imgUrl = $container.find("img").prop("src");
			if (imgUrl) {
				$container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
			}
		});
	}

	jQuery(function($){
		$('.ftable').footable({
			
		});
	});

	
 

	
	


