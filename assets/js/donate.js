// show donate popup div when user click on donate button
const donateOpen = document.getElementById('nav__link-donate')
donateOpen.addEventListener('click', () => {
    const donatePopup = document.querySelector('.donate-popup')
    donatePopup.classList.remove('hide-div')

    // hide the div when user click cancel
    const donateCancel = document.getElementById('donate__cancel')
    donateCancel.addEventListener('click', () => {
        donatePopup.classList.add('hide-div')
    })
})

// //remove # from url address bar
$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
});