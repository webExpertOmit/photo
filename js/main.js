



//=======================
//   Mixitup
//========================

var container = document.querySelector('.galley')
        var mixer = mixitup(container, {
            selectors: {
                control: '[our-mixitup]'
            }
        });



//===============Owl Carousel==============


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
   
      autoplay:true,
      autoplayTimeout:5000,
      loop:true,
      

   responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
       
  });
});





//==============Scroll Smuth======================


$('.nav li a').click(function(e){
    e.preventDefault();
    
     var target = this.hash;
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
});




//============Fixed Menu====================== 

   $(document).ready(function(){
       $(window).scroll(function(){
           var menuFixed = $(this).scrollTop();
           if(menuFixed>40){
               $('body').addClass('fixed');
           }
           else{
               $('body').removeClass('fixed');
           }
       })
   })
