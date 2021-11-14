// wait for whole page to load
$(window).on('load', function() {
    //remove # from url address bar
    $(window).on('hashchange', function(e) {
        history.replaceState("", document.title, e.originalEvent.oldURL)
    })

    // make default <a href="#"> tag not do anything
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    })
})

// =========================================================

// load navbar and footer
$(function() {
    $("#navbar").load("template/navbar.html")
})

$(function() {
    $("#footer").load("template/footer.html")
})
$(function() {
    $("#page-header").load("template/page-header.html")
})

// make sure the nav bar is always on top of everything
const navbar = document.getElementById('navbar')
navbar.style.position = "absolute"
navbar.style.zIndex = 10000

// =========================================================

// ensure that style.css is loaded for the html file to use
$('head').append(`
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css">
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
`)

// ==========================================================


// button shows at button of the screen to scroll back to top of page
$('main').append(`
    <a href="#" class="scrollup" id="scroll-up">
        <i class='bx bx-chevron-up scrollup__icon'></i>
    </a>
`)

$(window).scroll(function() {
    if (this.scrollY >= 200) $('#scroll-up').addClass('show-scroll')
    else $('#scroll-up').removeClass('show-scroll')
})

$("#scroll-up").click(function() {
    $(window).scrollTop(0);
});