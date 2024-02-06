(function(){
  
      $('#banner-slider .swiper-slide').each(function(){
          var getImageSrc = $(this).children('img').attr('src');
          $(this).css({'background-image':'url(' + getImageSrc + ')'});
          $(this).children('img').remove();
      });

      var swiper = new Swiper('#banner-slider');

      $('#navIcon').click(function(){
        $(this).toggleClass('open');
        $( ".menu" ).toggleClass('open');
        $( "#closeIcon" ).addClass('open');
      });
      $('#closeIcon').click(function(){
        $(this).toggleClass('open');
        $( ".menu" ).toggleClass('open');
        $( "#navIcon" ).removeClass('open');
      });

      var headerHeight = $('header').height();
      $('nav a[href^="#"]').on('click', function (e) {
        $( ".menu" ).toggleClass('open');
        $( "#navIcon, #closeIcon" ).removeClass('open');
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').animate({
          'scrollTop': $target.offset().top -headerHeight
        }, 800, 'swing');
      });

      var swiper = new Swiper('#amenities-slider',{
        slidesPerView: 2,
        spaceBetween:20,
        loop:true,
        breakpoints: {
          1024:{
            
            slidesPerView: 2,
          },
          800:{
            
            slidesPerView: 1,
          }
        },
        navigation: {
           nextEl: '.amen-next',
           prevEl: '.amen-prev',
        },
     });

     var swiper = new Swiper('#blog-slider',{
         slidesPerView: 2,
         spaceBetween:20,
         loop: true,
         breakpoints: {
          800:{
            
            slidesPerView: 1,
          },
         
        },
         navigation: {
             nextEl: '.blog-next',
             prevEl: '.blog-prev',
           },


     });

     function floorSlider(){
         var swiper = new Swiper('#floor-slider',{
         slidesPerView: 2,
         spaceBetween:20,
         loop:true,
           breakpoints: {
          800:{
            
            slidesPerView: 1,
          },
         
        },
         navigation: {
           nextEl: '.floor-next',
           prevEl: '.floor-prev',
        },
     });

     }
     $('a[data-tab]').on('click', function (e) {
       $(this).addClass('active').siblings('[data-tab]').removeClass('active');
       $(this).parent().next().children('[data-content=' + $(this).data('tab') + ']').addClass('active').siblings('[data-content]').removeClass('active');
       floorSlider();
           e.preventDefault()
     });

    $(".down-arw").click(function() {
      $('html,body').animate({
        scrollTop: $("#section-overview").offset().top -headerHeight},
      'slow');
    });

    $(window).on('load', function() {
      $(window).scroll(function(event) {
        $(".animateLayer").each(function(i, el) {
          var el = $(el);
          if (el.visible(true)) {
          el.addClass("jadu"); 
          }
        });
      });
    });

    (function($) {
      $.fn.visible = function(partial) {
        
          var $t            = $(this),
              $w            = $(window),
              viewTop       = $w.scrollTop(),
              viewBottom    = viewTop + $w.height() / 1.2,
              _top          = $t.offset().top,
              _bottom       = _top + $t.height(),
              compareTop    = partial === true ? _bottom : _top,
              compareBottom = partial === true ? _top : _bottom;
        
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

      };
        
    })(jQuery);
  
 		// var count = 0;
 		// var counter = setInterval(function(){
 		// 	if(count < 101){
 		// 		$('.count').text(count + '%');
 		// 		$('.preloader').css('width', count + '%');
 		// 		count++
 		// 	}
 		// 	else{
 		// 		clearInterval(counter)
 		// 	}
 		// },80)


  	var t = 220,
        o = 500;
    jQuery(window).scroll(function() {
        jQuery(this).scrollTop() > t ? jQuery("#toTop").fadeIn(o) : jQuery("#toTop").fadeOut(o)
    }), jQuery("#toTop").click(function(t) {
        return t.preventDefault(), jQuery("html, body").animate({
            scrollTop: 0
        }, o), !1
    })
 })();


 
