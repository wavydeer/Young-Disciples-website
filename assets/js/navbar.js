// dark theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

$('#theme-button').click(function () {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ==================================================================

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

// add little shadow to the navbar when scrolling down 
$(window).scroll(function () {
    if(this.scrollY >= 80) {
        $('#header').addClass('scroll-header')
    } else {
        $('#header').removeClass('scroll-header')
    }
})