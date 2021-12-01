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
    <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
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


// ==========================================================

$('body').append(`
    <div id="context-menu">
        <div class="item" data-action="back">
            <i class="fas fa-undo"></i> Back
        </div>
        <div class="item" data-action="forward">
            <i class="fas fa-redo"></i> Forward
        </div>
        <div class="item" data-action="reload">
            <i class="fa fa-refresh"></i> Reload
        </div>
    </div>
`)

// show right click menu
$(document).bind("contextmenu", function(event) {

    // Avoid the real one
    event.preventDefault();

    // Show contextmenu
    $("#context-menu").addClass('active')

    // In the right position (the mouse)
    $("#context-menu").css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });
});


// If the document is clicked somewhere
$(document).bind("mousedown", function(e) {
    // If the clicked element is not the menu
    if (!$(e.target).parents("#context-menu").length > 0) {
        // Hide it
        $("#context-menu").removeClass('active')
    }
});


// If the menu element is clicked
$("#context-menu .item").click(function() {
    // This is the triggered action name
    switch ($(this).attr("data-action")) {
        case 'back':
            history.back()
            break
        case 'forward':
            history.forward()
            break
        case "reload":
            location.reload()
            break
    }
});