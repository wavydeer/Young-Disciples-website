// show donate popup div when user click on donate button
const donateOpen = document.getElementById('nav__link-donate')
donateOpen.addEventListener('click', (e) => {
    e.preventDefault()
    const donatePopup = document.querySelector('.donate-popup')
    donatePopup.style.display = "block"  // show popup
    document.body.style.overflowY = "hidden"  // disable scrolling on background

    // hide the div when user click cancel
    const donateCancel = document.getElementById('donate__cancel')
    donateCancel.addEventListener('click', (e) => {
        e.preventDefault()  // not reload page
        donatePopup.style.display = "none"  // hide popup
        document.body.style.overflowY = "visible"  // enable scrolling on background
    })

    // for submitting payment
    const donateSubmit = document.getElementById('donate__submit')
    donateSubmit.addEventListener('click', (e) => {
        e.preventDefault()  // not reload page
    })
})