// ! This file must be the first js script to load after <script scr='jquery'>

/**********************************************************************************************/

/** 
 * @function
 * Add all the neccessary resources and some meta tags to the head of the document
 * 
 * * Ensure Content-Security-Policy header metta
 * * Load the logo for the favicon 
 * * Load style.css which contains all the css variables
 * * Load the third party fonts and icon
 */
const modifyHead = (() => {
    $('head').prepend(`
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/> 
        <meta name="author" content="Malcolm | Smyvens">
        <link rel="icon" type="image/png" href="assets/img/Young-Disciples-logo.png"/>   
        <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
        <script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
    `)
        // <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    $('head').append(`
        <link rel="stylesheet" type="text/css" href="assets/bin/css/main.css">
        <link rel="stylesheet" type="text/css" href="assets/bin/css/navbar.css">
        <link rel="stylesheet" type="text/css" href="assets/bin/css/footer.css">
        <link rel="stylesheet" type="text/css" href="assets/bin/css/index.css">
        <link rel="stylesheet" type="text/css" href="assets/bin/css/meet-us.css">
        <link rel="stylesheet" type="text/css" href="assets/bin/css/join.css">
        <link rel="stylesheet" type="text/css" href="assets/bin/css/contact.css">
        <link rel="stylesheet" type="text/css" href="assets/bin/css/donate.css">
    `)

})()
    
/**********************************************************************************************/

async function loadTemplates(template) {
    return ( await fetch(template) ).text()
}   

$(async () => {
    $("#navbar").append( await loadTemplates('template/navbar.html') )
    
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
    
    $("#footer").append( await loadTemplates('template/footer.html') )
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

