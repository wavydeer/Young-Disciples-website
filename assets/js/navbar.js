// show and hide the menu
$('#nav-toggle').click(function () {
    $('#nav-menu').addClass('show-menu')
})
$('#nav-close').click(function () {
    $('#nav-menu').removeClass('show-menu')
})

// hide menu when you click on an item mobile
$('.nav__link').each(function () {
    $(this).click(function () {
        $('#nav-menu').removeClass('show-menu')
    })
})

// add little shadow when scrolling down navbar
$(window).scroll(function () {
    if(this.scrollY >= 80) {
        $('#header').addClass('scroll-header')
    } else {
        $('#header').removeClass('scroll-header')
    }
})