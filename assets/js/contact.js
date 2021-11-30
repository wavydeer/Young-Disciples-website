const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

// if the user got to this page by contacting a person from meet us page
if (!(localStorage.getItem('person') === null)) {
    // say who they clicked on
    $('.contact-form .title').text(`contact ${localStorage.getItem('person')}`)
    // add to stuff to send to the backend
} else {
    
}

$('.contact__form').submit(function () {

})

// remove the person when the page is not loaded
$(window).on("unload", function(e) {
    localStorage.removeItem('person')
});