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

// ========================================================

const data = {
    person: '',
    name: '',
    email: '',
    phone: '',
    message: ''
}

// if the user got to this page by contacting a person from meet us page
if (!(sessionStorage.getItem('person') === null)) {
    // say who they clicked on
    $('.contact-form .title').text(`contact ${sessionStorage.getItem('person')}`)
    // add to stuff to send to the backend
    data.person = sessionStorage.getItem('person')
    // remove it from sessionStorage
    sessionStorage.removeItem('person')
}

$('.contact__form').submit(function () {

})