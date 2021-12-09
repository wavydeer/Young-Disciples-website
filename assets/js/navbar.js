/**
 * @function
 *
 * change theme when the user clicks the button on the website
 * update and save current theme to local storage
 * retrieve theme from local storage whenever the page loads
 * 
 * * Automatic | 1x
 */
const themeButtonHandler = (() => {
    // dark theme
    const themeButton = document.getElementById('theme-button')
    const darkTheme = 'dark-theme'
    const iconTheme = 'bx-sun'

    // Previously selected topic (if user selected)
    const selectedTheme = localStorage.getItem('selected-theme')
    const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
    const getCurrentTheme = () => $('body').hasClass(darkTheme) ? 'dark' : 'light'
    const getCurrentIcon = () => $(themeButton).hasClass(iconTheme) ? 'bx-moon' : 'bx-sun'

    // We validate if the user previously chose a topic
    if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
    }

    $(themeButton).click(function() {
        $('body').toggleClass(darkTheme)
        $(themeButton).toggleClass(iconTheme)
            // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })
})()

/**********************************************************************************************/

const mobileMenuHandler = (() => {
    // show and hide the menu
    $('#nav-toggle').click(function() {
        $('#nav-menu').addClass('show-menu')
    })
    $('#nav-close').click(function() {
        $('#nav-menu').removeClass('show-menu')
    })

    // hide menu when you click on an item mobile
    $('.nav__link').each(function() {
        $(this).click(function() {
            $('#nav-menu').removeClass('show-menu')
        })
    })
})()