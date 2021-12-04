
// #######################################################
// Nav Bar Animation
// ########################################################
$(document).ajaxComplete(function(){  // wait until all default jquery functions are loaded
    // make navbar have transparent background and no shadow
    $('.nav__header').css({
        background: 'transparent',
        boxShadow: 'none'
    })

    // make the navbar go into the picture
    $('body').css({
        margin: 'unset'
    })

    $(window).scroll(function() {
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


