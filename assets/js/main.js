// wait for whole page to load
$(window).on('load', function() {
    //remove # from url address bar
    $(window).on('hashchange', function(e) {
        history.replaceState("", document.title, e.originalEvent.oldURL)
    })

    // make default <a href="#"> tag not reload the page
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    })
})


// =========================================================


// ensure that style.css and icons are loaded for the html file to use
$('head').append(`
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css">
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
`)

// put button at the end of the screen to scroll back to top of page
$('main').append(`
    <a href="#" class="scrollup" id="scroll-up">
        <i class='bx bx-chevron-up scrollup__icon'></i>
    </a>
`)


// =========================================================


$(function() {
    // load navbar
    $.get("template/navbar.html", function(data) {
        $("#navbar").append(data);

        // make sure the navbar is always on top of everthing
        $('#navbar').css({
            position: 'absolute',
            zIndex: 10000000
        })

        // highlight the link of the loaded file on the navbar
        var currentFile = (document.location.pathname.match(/[^\/]+$/)[0]).split('.')[0]
        $(`#nav__link-${currentFile}`).addClass('active-link')
    });

    // load footer
    $.get("template/footer.html", function(data) {
        $("#footer").append(data);
    });

    // load header
    $.get("template/page-header.html", function(data) {
        $("#page-header").append(data);
    });
});


// ==========================================================


//  show scroll up button when you scroll past 200 down the screen
$(window).scroll(function() {
    if (this.scrollY >= 200) $('#scroll-up').addClass('show-scroll')
    else $('#scroll-up').removeClass('show-scroll')
})

$("#scroll-up").click(function() {
    $(window).scrollTop(0);
});