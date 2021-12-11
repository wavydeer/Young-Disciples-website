// ! This file must be the first js script to load after <script scr='jquery'>

/**********************************************************************************************/

/** 
 * @function 
 * Modify the <a> to stop the page from reload
 * and stop it from adding "#link" to the URI
 * 
 * */
const betterLinks = (() => {
    $(window).on('load', () => {
        // * remove # from url address bar
        $(window).on('hashchange', (e) => {
            history.replaceState("", document.title, e.originalEvent.oldURL)
        })

        // * make default <a href="#"> tag not reload the page
        $('a[href="#"]').click((e) => {
            e.preventDefault();
        })
    })
})()

/**********************************************************************************************/

/** 
 * @function
 * Add all the neccessary resources and some meta tags to the head of the document
 * 
 * * Ensure Content-Security-Policy header metta
 * * Load the logo for the favicon 
 * * Load style.css which contains all the css variables
 * * Load the third party fonts and icon
 * 
 * TODO: add headers to page from backend
 * TODO: Fix style.css link
 */
const modifyHead = (() => {
    $('head').prepend(`
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Malcom | Smyvens">
        <meta name="description" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cumque autem possimus optio impedit laborum
                    perspiciatis rerum nisi, quam reiciendis voluptas, veniam aliquid eaque? Amet totam ipsam iure voluptatum nobis."
        >
        <meta http-equiv="Content-Security-Policy" 
            content="
                default-src 'self';
                connect-src 'self' https://ka-f.fontawesome.com/releases/v5.15.4/css/;
                script-src 'self' 'unsafe-inline' https://kit.fontawesome.com/ https://cdnjs.cloudflare.com/ajax/;
                style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/ https://unpkg.com/boxicons@2.0.9/css/ https://cdnjs.cloudflare.com/ajax/;
                font-src 'self' https://fonts.gstatic.com/s/ https://unpkg.com/boxicons@2.0.9/fonts/ https://ka-f.fontawesome.com/releases/v5.15.4/webfonts/";
                frame-src 'self' https://www.google.com/
        >
        <link rel="icon" type="image/png" href="assets/img/placeholder.png"/>   
        <link rel="stylesheet" type="text/css" href="/out/css/style.css">
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
        <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
    `)
})()

/**********************************************************************************************/

/** 
 * @function 
 * Loading navbar and footer template 
 * 
 * TODO: Fix links
 * */
const loadTemplates = $(() => {
    // load navbar
    $.get("template/navbar.html", (data) => {
        $("#navbar").append(data)

        // make sure the navbar is always on top of everthing
        $('#navbar').css({
            position: 'absolute',
            zIndex: 10000000
        })

        // highlight the link of the loaded file on the navbar
        if (location.pathname === '/') {
            $(`#nav__link-index`).addClass('active-link')
        } else {
            var currentFile = (location.pathname.match(/[^\/]+$/)[0]).split('.')[0]
            $(`#nav__link-${currentFile}`).addClass('active-link')
        }
    })

    // load footer
    $.get("template/footer.html", (data) => {
        $("#footer").append(data)
    })

    // load header
    $.get("template/page-header.html", (data) => {
        $("#page-header").append(data)
    })
})

/** 
 * @function 
 * create scroll up button and scroll to the top of the page if the user clicks it
 * 
 *  * Automatic | 1x
 */
const scrollBtnHandler = (() => {
    const showScroll = 200

    // put button at the end of the screen to scroll back to top of page
    $('main').append(`
        <a href="#" class="scrollup" id="scroll-up">
            <i class='bx bx-chevron-up scrollup__icon'></i>
        </a>
    `)

    //  show scroll up button when you scroll past showScroll
    $(window).scroll(() => {
        if (this.scrollY >= showScroll) {
            $('#scroll-up').addClass('show-scroll')
        } else {
            $('#scroll-up').removeClass('show-scroll')
        }
    })

    // scroll to the top of the page if the user click the scroll up button
    $("#scroll-up").on('click', () => {
        $(window).scrollTop(0);
    });
})()

