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

//remove # from url address bar
jQuery(document).ready(function($) {

    $(".link").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 0);
    });
});