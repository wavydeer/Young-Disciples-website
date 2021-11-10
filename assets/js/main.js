// wait for whole page to load
$(window).on('load', function() {
    //remove # from url address bar
    $(window).on('hashchange', function(e){
        history.replaceState ("", document.title, e.originalEvent.oldURL)
    })

    // make default <a href="#"> tag not do anything
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    })
})

// =========================================================

// load navbar and footer
$(function(){
    $("#navbar").load("template/navbar.html")
})

$(function(){
    $("#footer").load("template/footer.html")
})

// make sure the nav bar is always on top of everything
const navbar = document.getElementById('navbar')
navbar.style.position = "absolute"
navbar.style.zIndex = 10000

// =========================================================

// ensure that style.css is loaded for the html file to use
$('head').append('<link rel="stylesheet" type="text/css" href="/assets/css/style.css">');