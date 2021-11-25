$(document).ajaxComplete(function(){  // wait until all default jquery functions are loaded
    // make navbar have transparent background and no shadow
    $('.nav__header').css({
        background: 'transparent',
        boxShadow: 'none'
    })

    // make the navbar position into the picture
    $('body').css({
        margin: 'unset'
    })

    $(window).scroll(function() {
        // change the background of navbar to solid when looking at the background picture
        if (window.scrollY >= $('#our-impact__bg-image').height() * 1.2) {
            $('.nav__header').css({
                background: 'var(--color-container)',
                boxShadow: '0 0 10px black'
            })
        // change the background of navbar to transparent when looking at the background picture
        } else {
            $('.nav__header').css({
                background: 'transparent',
                boxShadow: 'none'
            })
        }
    })
})