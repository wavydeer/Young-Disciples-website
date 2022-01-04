
// #######################################################
// Nav Bar Animation
// ########################################################
$(document).ajaxComplete(() => {  // wait until all default jquery functions are loaded
    // make navbar have transparent background and no shadow
    $('.nav__header').css({
        background: 'transparent',
        boxShadow: 'none'
    })

    // make the navbar go into the picture
    $('body').css({
        margin: 'unset'
    })

    $(window).scroll(() => {
        // change the background of navbar to solid when looking at the background picture
        if (window.scrollY >= $('.indexHeader').height() / 2) {
            $('.nav__header').css({
                background: 'var(--color-container)',
                boxShadow: '0 0 10px black'
            }).addClass('navbar-scroll') // add scroll down animation
        // change the background of navbar to transparent when looking at the background picture
        } else {
            $('.nav__header').css({
                background: 'transparent',
                boxShadow: 'none'
            }).removeClass('navbar-scroll')  // remove scroll animation
        }
    })
})

// #######################################################
// END OF Nav Bar Animation
// ########################################################

// $(window).scroll(function() {
//     var $centerImg = $('#center > img')
//       , hT = $centerImg.offset().top
//       , hH = $centerImg.outerHeight()
//       , wH = $(window).height()
//       , dH = $(document).height()
//       , wS = $(this).scrollTop();
    
//     if (wS > (hT+hH-wH)){
//       $centerImg.addClass("parallaxin");
//     } else {
//       $centerImg.removeClass("parallaxin");
//       $centerImg.css({
//         'transform': 'translate(0,0)'
//       });
//     }
    
//     $('#hero-text').css({
//       'transform': 'translate(0, '+ -wS * 0.5 +'px)'
//     });
    
//     $('.parallaxin').css({
//       'transform': 'translate(0, -'+ (wS + 1000 - dH)/4 +'%)'
//     });
//   });


$('.photo-item .button').on('click', (self) => {
    // save which leader has been clicked in session sotrage
    sessionStorage.setItem('person', $(self.target).parent('div').attr('data-person'))
    // go to contact page in a new window
    window.open('contact.html')
})