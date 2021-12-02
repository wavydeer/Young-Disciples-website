new Vue({
    el: '#app',
    data: {
        active: 0,
        animation: 'fadeUp',
        previous: 0,
        className: ''
    },
    methods: {
        selectedContent(index) {
            this.active = index;

            if(index > this.previous) {
                this.animation = 'fadeUp';
            }

            if(index < this.previous) {
                this.animation = 'fadeDown';
            }

            this.previous = index;

            if(index === 1) {
                this.className = 'activeSecond'
            } else if(index === 2) {
                this.className = 'activeThirst'
            } else {
                this.className = ''
            }
        }
    }
})

// #######################################################
// Programs Slider
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
        if (window.scrollY >= $('#our-impact__bg-image').height() * 1.2) {
            $('.nav__header').css({
                background: 'var(--color-container)',
                boxShadow: '0 0 10px black'
            }).addClass('navbar-scroll')  // add scroll down animation
        // change the background of navbar to transparent when looking at the background picture
        } else {
            $('.nav__header').css({
                background: 'transparent',
                boxShadow: 'none'
            }).removeClass('navbar-scroll')  // remove scroll animation
        }
    })
})